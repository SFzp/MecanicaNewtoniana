function Newton3a(canvas0, nombre, settings) {
  
  this.ticker0 = createjs.Ticker;
  
  this.t = 0;
  this.canvas = canvas0;
  this.data_a = [];

  this.settings = settings;

  this.nombre = nombre;
  this.fuerza = 60;

  this.aa = [0, 0];
  this.vv = [0, 0];
  this.dd = [0, 0];
  
  this.btnApuntar = settings.btnApuntar;
  this.apuntado = false;



  this.stage;
  this.paused = true;
  this.block = new Array();
  this.hud;
  this.maxTiempo = 1;

  this.xp = 170;
  this.xc = 245;
}

Newton3a.prototype = {
  init0: function() {
    var options_a = {
      xaxis: {
        min: 0,
        max: 8
      },
      yaxis: {
        min: this.block[0].amx * 1.45,
        max: this.block[1].amx * 1.45
      },
      series: {
        lines: {
          show: true
        }

      }
    };

    var options_v = {
      xaxis: {
        min: 0,
        max: 8
      },
      yaxis: {
        min: this.block[0].vmx * 1.2,
        max: this.block[1].vmx * 1.36
      },
      series: {
        lines: {
          show: true
        }
      }
    };

    var options_d = {
      xaxis: {
        min: 0,
        max: 8
      },
      yaxis: {
        min: this.block[0].dmx+this.block[0].vmx*6,
        max: this.block[1].dmx+this.block[1].vmx*6,
      },
      series: {
        lines: {
          show: true
        }
      }
    };

    var ga_a_ph = $('div#ga_a_' + this.nombre);
    var ga_v_ph = $('div#ga_v_' + this.nombre);
    var ga_d_ph = $('div#ga_d_' + this.nombre);
    
    
    this.ga_a = $.plot(ga_a_ph, [
      []
    ], options_a);
    this.ga_v = $.plot(ga_v_ph, [
      []
    ], options_v);
    this.ga_d = $.plot(ga_d_ph, [
      []
    ], options_d);

    ga_a_ph.prepend("<div class='label_grafica'> Aceleración (m/s<sup>2</sup>)</div>");
    ga_a_ph.append("<div class='label_tiempo'> Tiempo (s)</div>");
    ga_v_ph.prepend("<div class='label_grafica'> Velocidad (m/s)</div>");
    ga_v_ph.append("<div class='label_tiempo'> Tiempo (s)</div>");
    ga_d_ph.prepend("<div class='label_grafica'> Distancia (m)</div>");
    ga_d_ph.append("<div class='label_tiempo'> Tiempo (s)</div>");
    
  },
  plot0: function() {
    var this0 = this;
    var b0 = this0.block[0];
    var b1 = this0.block[1];
    this0.ga_a.setData([b1.aceleracion, b0.aceleracion]);
    this0.ga_a.draw();
    this0.ga_v.setData([b1.velocidad, b0.velocidad]);
    this0.ga_v.draw();
    this0.ga_d.setData([b1.distancia, b0.distancia]);
    this0.ga_d.draw();
  },
  resetBlock: function(idx) {
    var block = this.block[idx];
    block.tiempo = 0;
    block.distancia = [
      [0, 0]
    ];
    block.velocidad = [
      [0, 0]
    ];
    block.aceleracion = [
      [0, 0]
    ];
    block.distanciaF=0;

    if (idx === 0) {
      block.amx = -this.fuerza * 0.5 / block.masa;
    } else {
      block.amx = this.fuerza * 0.5 / block.masa;
    }
    block.vmx = block.amx * this.maxTiempo;
    block.dmx = 0.5 * this.maxTiempo * this.maxTiempo * block.amx;
  },
  pause: function() {
    this.paused = !this.paused;
  },
  reset: function() {
    
    this.btnApuntar.hide();
    this.apuntado=false;
    for (var i = 0; i < this.block.length; i++) {
      this.resetBlock(i);
    }
    this.t = 0;
    this.init0();
    for (var i = 0; i < this.block.length; i++) {
      this.updateBlock(i, 0);
    }
  },
  init: function() {
    this.stage = new createjs.Stage(this.canvas);


    var g00 = new createjs.Graphics();
    g00.setStrokeStyle(1);
    g00.beginStroke("#aaaacc").beginFill("#ddddee").drawRect(-200, 0, 200 + this.xc, 240);
    
    var r00 = new createjs.Shape(g00);
    this.stage.addChild(r00);


    var g02 = new createjs.Graphics();
    g02.setStrokeStyle(1);
    
    g02.beginStroke("#9999cc").beginFill("#eeeecc").drawRect(this.xc, 0, 600, 240);
    var r02 = new createjs.Shape(g02);
    this.stage.addChild(r02);



    this.patinador = new createjs.Bitmap("img/patinador.png");
    this.patinador.x = this.xp;
    this.patinador.y = 41;
    this.stage.addChild(this.patinador);
    this.caja = new createjs.Bitmap("img/caja.png");
    this.caja.x = this.xc;
    this.caja.y = 38;
    this.stage.addChild(this.caja);
    this.drawHud();
    this.initBlock(0, 80);
    this.initBlock(1, 210);

    var cstroke = createjs.Graphics.getRGB(0, 0, 0);
    var cfill = createjs.Graphics.getRGB(100, 100, 254);




    var g01 = new createjs.Graphics();
    g01.setStrokeStyle(1);
    g01.beginStroke("#9999cc").beginFill("#ccccff").drawRect(-200, 222, 880, 18);
    var r01 = new createjs.Shape(g01);
    this.stage.addChild(r01);




    for (var i = -7; i < 8; i++) {
      var g = new createjs.Graphics();
      g.setStrokeStyle(1);
      g.beginStroke(cstroke);
      g.beginFill(cfill);
      g.drawCircle(0, 0, 3 + 2 * (Math.abs(i + 1) % 2));
      var s = new createjs.Shape(g);
      s.x = this.xc + (i * 60);
      s.y = 230;
      this.stage.addChild(s);
    }
    var g = new createjs.Graphics();
    g.setStrokeStyle(1);
    g.beginStroke("#000000").beginFill("#5555aa");
    g.drawCircle(0, 0, 8);
    var s = new createjs.Shape(g);
    s.x = this.xc;
    s.y = 230;
    this.stage.addChild(s);


    this.init0();
    this.stage.scaleX = 0.8;
    this.stage.scaleY = 0.8;
    this.stage.x = 120;
  },
  
  initBlock: function(idx, x) {
    this.block[idx] = new createjs.Shape();
    var block = this.block[idx];
    block.solid = true;
    block.x = x;
    block.masa = 60;
    block.tiempo = [0];
    block.distanciaF = 0;
    block.distancia = [
      [0, 0]
    ];
    block.velocidad = [
      [0, 0]
    ];
    block.aceleracion = [
      [0, 0]
    ];
    if (idx === 0) {
      block.amx = -this.fuerza * 0.5 / block.masa;
      block.color = '#f00';
    } else {
      block.amx = this.fuerza * 0.5 / block.masa;
      block.color = '#00f';
    }
    block.vmx = block.amx * this.maxTiempo;
    block.dmx = 0.5 * this.maxTiempo * this.maxTiempo * block.amx;
    this.stage.addChild(block);
    this.resetBlock(idx);
  },
  setFuerza: function(val) {
    this.fuerza = val;
  },
  getFuerza: function() {
    return this.fuerza;
  },
  setMasa: function(val, idx) {
    var block = this.block[idx];
    block.masa = val;
  },
  drawHud: function() {},
  aceleracion: function(t, a, maxT) {
    if (t < maxT) {
      return a;
    } else {
      return 0;
    }
  },
  velocidad: function vel(t, a, vm, maxT) {
    if (t < maxT) {
      return a * t;
    } else {
      return vm;
    }

  },
  distancia: function(t, a, vm, dm, maxT) {
    if (t < maxT) {
      return 0.5 * t * t * a;
    } else {
      return dm + vm * (t - maxT);
    }

  },
  updateBlock: function(idx, h) {
    var block = this.block[idx];

    block.tiempo += h;

    var t = block.tiempo;
    var mxT = this.maxTiempo;

    var aa = this.aceleracion(t, block.amx, mxT);
    var vv = this.velocidad(t, block.amx, block.vmx, mxT);
    var dd = this.distancia(t, block.amx, block.vmx, block.dmx, mxT);
    block.distanciaF=dd;
    
    block.aceleracion.push([t, aa]);
    block.velocidad.push([t, vv]);
    block.distancia.push([t, dd]);

    if (idx === 0) {
      this.patinador.x = dd * 120 + this.xp;
    }
    if (idx === 1) {

      this.caja.x = dd * 120 + this.xc;
    }
  },
  handleTick: function() {
    var this0 = this;
    
    var h = Math.min(0.1, this0.ticker0.getInterval() * 0.001);
    var b1 = this0.block[1];
    var b0 = this0.block[0];
    
    
    
    
   

    if(this.t>(8-h)){
      if(!this.apuntado){
      this.btnApuntar.show();
        
      }else{
        this.btnApuntar.hide();
      }
      return;
    }
    
    if (!this.paused) {
      this.t += h;

      
        this.updateBlock(0, h);
        this.updateBlock(1, h);
      
      
      this.plot0();
      
      if (this.updateHud) this.updateHud();
    }


    this.stage.update();

  }

};