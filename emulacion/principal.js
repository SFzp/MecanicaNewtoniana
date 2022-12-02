//logger
var log = log4javascript.getDefaultLogger("TerceraLeyDeNewton");
var addLinea0;
var addSettingsToMenu0;
var setFase0;

$(document).ready(function() {
  var contexto = $('.contenido');
  mainInit(contexto);
});

function mainInit(contexto) {
  var settings = {
    imgsPath: 'img/',
    imgs: [],
    imgsLoaded: 0,
    phases: [],
    currentPhase: 0,
    config: {},
    onShow: null
  };
  $('.fase', contexto).hide();
  showPreloader(contexto);
  settings.start = $.proxy(mainStart, this, settings, contexto);

  $('.ventana.fichaDidactica .botonCerrar, .ventana.creditos .botonCerrar, .ventana.bibliografia .botonCerrar', contexto).click(function(event) {
    event.preventDefault();
    $(this).parent().fadeOut();
  });

  $('.botonFichaDidactica').click(function(event) {
    event.preventDefault();
    $('.ventana.fichaDidactica', contexto).fadeIn();
  });
  $('.botonCreditos').click(function(event) {
    event.preventDefault();
    $('.ventana.creditos', contexto).fadeIn();
  });
  $('.botonBibliografia').click(function(event) {
	    event.preventDefault();
	    $('.ventana.bibliografia', contexto).fadeIn();
	  });

  $('.ventana.fichaDidactica , .ventana.creditos, .ventana.bibliografia', contexto).hide();

  $('.header nav .inicio').click(function() {
    setFase0(0);
    settings.phases[settings.currentPhase].jumpToPhase(0);
  });


  $('#introduccion_nav').click(function() {
    settings.phases[settings.currentPhase].jumpToPhase(1);
  });
  addSettingsToMenu0(settings);

  $('#btnEntrar').click(function() {
	$('.ventana.fichaDidactica , .ventana.creditos, .ventana.bibliografia', contexto).hide();
    setFase0(1);
  });

  //este se ejecuta en el show de la clase padre Phase
  settings.onShow = null

  loadImgs(settings);
}

function mainStart(settings, contexto) {
  var portada = new Phase(settings, 'portada', contexto);
  settings.phases.push(portada);
  var introduccion = new Phase(settings, 'introduccion', contexto);
  settings.phases.push(introduccion);
  settings.phases.push(new Simulador(settings, 'experimentos', contexto));
  var conclusion = new Phase(settings, 'conclusiones', contexto);
  settings.phases.push(conclusion);
  var apuntes = new Phase(settings, 'apuntes', contexto);
  settings.phases.push(apuntes);
  portada._control();
}

function Simulador(gSettings, divClassId, context) {
  // Call super-class constructor
  Phase.apply(this, arguments);

  this.config = prepareConfig()[divClassId];
  this.currentEx = 1;
  this.totalEx = 9;
  this.nombre = divClassId;

  this.currentRow = 1;
  this.totalRow = 6;

  this.hookeInstance;
}

//metodos de las pantalla de ejercicios
_extends(Simulador, Phase, {
  start: function() {
    var _this = this;
    var btnAddAp =  $('.btnAddApunte', this.phaseDiv);
    this.settings.btnApuntar = btnAddAp;

    this.newton3aInstance = new Newton3a($('.canvasSimulador', this.phaseDiv)[0], _this.nombre, this.settings);
    this.newton3aInstance.init();

    this.t0 = $('span#t0', this.phaseDiv);
    this.d0 = $('span#d0', this.phaseDiv);
    this.v0 = $('span#v0', this.phaseDiv);
    this.a0 = $('span#a0', this.phaseDiv);
    this.t1 = $('span#t1', this.phaseDiv);
    this.d1 = $('span#d1', this.phaseDiv);
    this.v1 = $('span#v1', this.phaseDiv);
    this.a1 = $('span#a1', this.phaseDiv);

    function updateHud0(obj) {
      _this.t0.text(obj.block[0].tiempo.toPrecision(3));
      _this.t1.text(obj.block[1].tiempo.toPrecision(3));

      var a0 = obj.block[0].aceleracion;
      var a1 = obj.block[1].aceleracion;
      var a0_l = a0.length;
      var a1_l = a1.length;

      if (a0_l > 1) {
        _this.a0.text(a0[a0_l - 1][1].toPrecision(3));
      }
      if (a1_l > 1) {

        _this.a1.text(a1[a1_l - 1][1].toPrecision(3));
      }


      var v0 = obj.block[0].velocidad;
      var v1 = obj.block[1].velocidad;
      var v0_l = v0.length;
      var v1_l = v1.length;

      if (v0_l > 1) {
        _this.v0.text(v0[v0_l - 1][1].toPrecision(3));
      }
      if (v1_l > 1) {

        _this.v1.text(v1[v1_l - 1][1].toPrecision(3));
      }

      var d0 = obj.block[0].distancia;
      var d1 = obj.block[1].distancia;
      var d0_l = d0.length;
      var d1_l = d1.length;

      if (d0_l > 1) {
        _this.d0.text(d0[d0_l - 1][1].toPrecision(3));
      }
      if (d1_l > 1) {
        _this.d1.text(d1[d1_l - 1][1].toPrecision(3));
      }

    }

    this.newton3aInstance.updateHud = function() {
      updateHud0(this);
    };

    var divBlock = [$('.ctrls[data-block="0"]', this.phaseDiv), $('.ctrls[data-block="1"]', this.phaseDiv)];
    var s;

    s = $('.masa-slider', divBlock[0]).slider({
      range: "max",
      min: 35,
      max: 110,
      value: 60,
      step: 5,
      slide: function(event, ui) {
        var kval = parseFloat(ui.value);
        _this.newton3aInstance.setMasa(kval, 0);
        $(".masa-value", divBlock[0]).text(kval);

        _this.newton3aInstance.reset();
        _this.newton3aInstance.updateHud();

      }
    });

    s = $('.masa-slider', divBlock[1]).slider({
      range: "max",
      min: 25,
      max: 120,
      value: 60,
      step: 5,
      slide: function(event, ui) {
        var kval = parseFloat(ui.value);
        _this.newton3aInstance.setMasa(kval, 1);
        $(".masa-value", divBlock[1]).text(kval);
        _this.newton3aInstance.reset();
        _this.newton3aInstance.updateHud();
      }
    });


    s = $('.masa-slider', divBlock[0]);
    s.val(_this.newton3aInstance.block[0].masa).slider('option', 'slide').call(s, null, {
      value: _this.newton3aInstance.block[0].masa
    });

    s = $('.masa-slider', divBlock[1]);
    s.val(_this.newton3aInstance.block[1].masa).slider('option', 'slide').call(s, null, {
      value: _this.newton3aInstance.block[1].masa
    });

    s = $('.fuerza-slider', this.phaseDiv).slider({
      range: "max",
      min: 0,
      max: 100,
      value: this.newton3aInstance.getFuerza(),
      step: 5,
      slide: function(event, ui) {
        var kval = parseFloat(ui.value);
        $(".fuerza-value", _this.phaseDiv).text(kval);
        _this.newton3aInstance.setFuerza(kval);

        _this.newton3aInstance.reset();
        _this.newton3aInstance.updateHud();


      }
    });

    s.slider("option", "slide").call(s, null, {
      value: s.slider("value")
    });


    var pausa0 = $('.pause', this.phaseDiv);

    pausa0.click(function(event) {
      event.preventDefault();
      var __this = $(this);
      if (_this.newton3aInstance.paused) {
        __this.html('<img src="img/pause.png" alt="Pausar"/>')
      } else {
        __this.html('<img src="img/play.png" alt="Ejecutar"/>')
      }

      _this.newton3aInstance.pause();
    });

    $('.reset', this.phaseDiv).click(function(event) {
      event.preventDefault();
      _this.newton3aInstance.reset();
      _this.newton3aInstance.updateHud();
    });

    
    btnAddAp.click(function(event) {
      btnAddAp.effect('pulsate', {times:1},100);//,100,cllbk(btnAddAp));
      event.preventDefault();
      var o0 = _this.newton3aInstance;
      var d0 = o0.block[0].distancia;
      var d1 = o0.block[1].distancia;
      var t = o0.block[0].tiempo;
      var d0_l = d0.length;
      var d1_l = d1.length;

      if (d0_l > 1 && d1_l > 1) {
        addLinea0(t.toPrecision(3), o0.block[0].masa, o0.block[1].masa, o0.fuerza, d0[d0_l - 1][1].toPrecision(2), d1[d1_l - 1][1].toPrecision(2));
        _this.newton3aInstance.apuntado=true;
        
      }
    });
    
    btnAddAp.hide();

    function cllbk(e) {
      setTimeout(function() {
        e.removeAttr("style").hide().fadeIn();
      }, 150);
    }
    

    this._super.start.call(this);
  }, // end start

  show: function() {
    var _this = this;
    this._super.show.call(this);
    _this.newton3aInstance.reset();
    _this.newton3aInstance.updateHud();
    createjs.Ticker.addEventListener("tick", $.proxy(this.newton3aInstance.handleTick, this.newton3aInstance));
    
    
    //Last tickLabel
    var lastGraphTickLabels = $("#ga_d_experimentos .xAxis .tickLabel"); 
    $(lastGraphTickLabels.get(lastGraphTickLabels.length-1)).css("text-align","right").css("width","24px");
    
  },
  jumpToPhase: function(idx) {
    //para parar el tick cuando salimos de la fase
    createjs.Ticker.removeAllEventListeners(["tick"]);
    //llama al metodo jumpToPhase de la superclase Phase en el archivo general.js
    this._super.jumpToPhase.apply(this, arguments);
  }
});

//aqui se configuran los ejercicos con las respuestas contra las que debemos comparar las del usuario
function prepareConfig() {
  return {
    simulador: {
    }
  };
}





function ExperimentosController($scope) {

  $scope.currentPregunta = 1;
  $scope.currentRespuesta = {1: false, 2: false, 3: false, 4: false};
  $scope.showRespuesta = false;


  $scope.setPregunta = function(idx) {
    $scope.currentPregunta = idx;
  };

  $scope.showRespuesta = function(idx) {
    $scope.currentRespuesta[idx] = true;
  };

  $scope.hideRespuesta = function(idx) {
    $scope.currentRespuesta[idx] = false;
  };




}


function ApuntesController($scope) {


  $scope.lineas = [];

  $scope.experimentos = [];

  $scope.add0 = function(t, pm, cm, pf, pd, cd) {
    $scope.lineas.push({t: t, pm: pm, cm: cm, pf: pf, pd: pd, cd: cd});
    $scope.$apply();
  };

  $scope.ltodos = false;

  $scope.$watch('ltodos', function() {
    var n = $scope.lineas.length;
    if (n === 0)
      return;
    var v = $scope.ltodos;
    for (var i = 0; i < n; i++) {
      $scope.lineas[i].seleccionado = v;
    }
  });

  $scope.borrar = function() {
    var oldLineas = $scope.lineas;
    $scope.lineas = [];
    angular.forEach(oldLineas, function(l) {
      if (!l.seleccionado)
        $scope.lineas.push(l);
    });
    $scope.ltodos = false;

  };

  addLinea0 = $scope.add0;

}


function IndroduccionController($scope) {
  $scope.currentPregunta = 1;

  $scope.setPregunta = function(idx) {
    $scope.currentPregunta = idx;
  }
//    $scope.inicia();

}


function ConclusionController($scope) {
  $scope.currentPregunta = 1;
  $scope.setPregunta = function(idx) {
    $scope.currentPregunta = idx;
  }

}

function MenuController($scope, $location) {
  $scope.currentFase = 0;
  $scope.settings = {};

  $scope.setFase = function(fase) {
    $scope.currentFase = fase;
    var st = $scope.settings;
    st.phases[st.currentPhase].jumpToPhase($scope.currentFase);

  }

  $scope.setFase0 = function(fase) {
    $scope.setFase(fase);
    $scope.$apply();
  }

  $scope.setSettings = function(st) {
    $scope.settings = st;
  }
  addSettingsToMenu0 = $scope.setSettings;
  setFase0 = $scope.setFase0;



}


