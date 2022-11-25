/*funcion para simular overriding en metodo de clases extendidas y el objeto super
 * @param subClass clase que extiende
 * @param funcName nombre de la funcion a extender
 * @param func funcion que extiende
 */
function _override(subClass, funcName, func) {
	var _super = subClass._superClass;
	subClass.prototype[funcName] = (function(name, fn) {
		return function() {

			var tmp = this._super;
			// Add a new ._super() method that is the same method
			// but on the super-class
			this._super = _super//[name];
			// The method only need to be bound temporarily, so we
			// remove it when we're done executing
			var ret = fn.apply(this, arguments);
			this._super = tmp;
			return ret;
		};
	})(funcName, func);

	$('#debug').append('<br/>Overriding: ' + (subClass).toString().substring(0, (subClass).toString().indexOf('(')) + ': ' + funcName);

}

/*funcion para simular herencia y el objeto super
 * @param subClass subclase
 * @param superClass  superclase
 * @param subClassDefinition  definicion de subclase
 */
function _extends(subClass, superClass, subClassDefinition) {

	// Define sub-class
	subClass.prototype = new superClass;
	subClass.prototype.constructor = subClass;
	subClass._superClass = new superClass;

	if (subClassDefinition != null) {
		for (var funcName in subClassDefinition) {
			if ( typeof subClassDefinition[funcName] == "function" && typeof subClass._superClass[funcName] == "function") {
				_override(subClass, funcName, subClassDefinition[funcName]);
			} else {
				subClass.prototype[funcName] = subClassDefinition[funcName];
			}
		}
	}
}

function activePhase(phaseClassId, contexto) {	
	$('.' + phaseClassId, contexto).removeClass('faseInactiva').addClass('faseActiva').show();
}

function inactivePhase(phaseClassId, contexto) {
	$('.' + phaseClassId, contexto).addClass('faseInactiva').removeClass('faseActiva').hide();
}

function showPreloader(contexto) {	
	activePhase('preloader', contexto);			
}

function hidePreloader(contexto) {	
	inactivePhase('preloader', contexto);
}

function active() {
	this.removeClass('inactivo').addClass('activo');
}

function inactive() {
	this.addClass('inactivo').removeClass('activo');
}

function loadImgs(dataObj) {
	dataObj.imgsLoaded = 0;
	if (!dataObj.imgsToLoad || dataObj.imgsToLoad.length == 0) {
		dataObj.start();
	} else {
		var img;
		for (var i = 0; i < dataObj.imgsToLoad.length; i++) {
			img = $('<img/>');
			img.load(handleImgLoad(dataObj.imgsToLoad[i].id, dataObj));
			img.attr('src', dataObj.imgsPath + dataObj.imgsToLoad[i].src);
		}
	}
}

function handleImgLoad(imgId, dataObj) {
	return function(event) {
		var targetEl = event.currentTarget;
		dataObj.imgsLoaded++;
		dataObj.imgs[imgId] = targetEl;
		if (dataObj.imgsLoaded == dataObj.imgsToLoad.length) {
			dataObj.start();
		}
	}
}

function Phase(gSettings, divClassId, context) {

	//Definicion de variables de clase (instancia)
	this.id = divClassId;
	this.phaseDiv = $('.' + divClassId, context);
	this.context = context;
	this.gSettings = gSettings;
	this.isLoaded = false;
	this.settings = {
		imgsPath : 'img/',
		imgs : [],
		config : {}
	};

}

/*
 * Definicion de funciones de clase
 * y variables "estaticas"
 */
Phase.prototype = {
	_control : function() {
		if (this.isLoaded) {
			this.show();
		} else {
			this.settings.start = $.proxy(function() {
				this.isLoaded = true;
				this.init();
				this.start();
				this.show();
			}, this);
			loadImgs(this.settings);
		}
	},

	init : function() {

	},

	start : function() {
		var _this = this;	

		$('.botonPantallaSiguiente', this.phaseDiv).click(function(event) {
			event.preventDefault();
			_this.gotoNextPhase();
		});
		
		$('.botonPantallaAnterior', this.phaseDiv).click(function(event) {
			event.preventDefault();
			_this.gotoPreviousPhase();
		});
		
		$('.botonCerrar', this.phaseDiv).click(function(event) {
			event.preventDefault();
			$(this).parent().fadeOut(_this.settings.windowTimeTransition);
		});
	},

	show : function() {						
		activePhase(this.id, this.context);
		hidePreloader(this.context);
		if(this.gSettings.onShow)this.gSettings.onShow();
		if (this.gSettings.currentPhase == 0){
			
			$('.header .figuras_encabezado').slideDown(300, function(){
				$('.header .unam').fadeIn();
			});
			$('.footer').fadeIn();			
		}else{
			$('.header .unam').hide();
			$('.header .figuras_encabezado').slideUp();
			$('.footer').fadeOut();		
			
			$('.navBar ul li').removeClass('activo');	
			$('.navBar ul li').eq(this.gSettings.currentPhase - 1).addClass('activo');	
		}		
	},

	clean : function() {
		inactivePhase(this.id, this.context);
	},

	beforeNextPhase : function() {
		return true;
	},

	beforePreviousPhase : function() {
		return true;
	},

	gotoNextPhase : function() {
		if (this.beforeNextPhase())
			this.jumpToPhase(this.gSettings.currentPhase + 1);
	},

	gotoPreviousPhase : function() {
		if (this.beforePreviousPhase())
			this.jumpToPhase(this.gSettings.currentPhase - 1);
	},

	jumpToPhase : function(idx) {
		if (this.gSettings.phases[idx]) {
			showPreloader(this.context);
			this.clean();
			this.gSettings.currentPhase = idx;
			this.gSettings.phases[idx]._control();
		}
	},
	
	toString:function(){
		return 'Phase: ' + this.id;
	}
}


