var colorBackground = "#1AA478";                            
var colorTrack = "#ffc040";                                 
var colorStop = "#ff0000";                                  
var colorGlider = "#0000ff";                                
var colorScale1 = "#000000";                                
var colorScale2 = "#00ff00";                                
var colorLB = "#000000";                                    
var colorClock1 = "#808080";                                
var colorClock2 = "#000000";                                
var colorClock3 = "#ff0000";                                

var text01 = "Reset";
var text02 = ["Comenzar", "Anotar Datos"];
var text03 = "Graficar";
var text04 = "Masa del Carro:";
var text05 = "Masa Colgante:";
var text06 = "Coeficiente de Rozamiento:";
var text07 = "Datos:";

var decimalSeparator = ",";                                 
var symbolMass1 = "M";
var symbolMass2 = "m";
var symbolCoefficientFriction = "&mu;";
var gram = "g";

var text08 = "LS";
var text09 = "(s)";
var text10 = "(m)";
var text11 = "\u00A1Demasiado rozamiento!";

var symbolTime = "t";
var symbolDisplacement = "s";
var symbolAcceleration = "a";
var meter = "m";
var second = "s";
var meterPerSecond2 = "m/s\u00B2";

 

var G = 9.81;                                               
var DEG = Math.PI/180;                                      
var FONT1 = "normal normal bold 12px sans-serif";           
var FONT2 = "normal normal bold 16px monospace";            
var X0 = 50;                                                
var LENGTH = 200;                                           
var PIX_T = 20;                                             

 

var canvas, ctx;                                            
var width, height;                                          
var bu1, bu2, bu3;                                          
var ip1, ip2, ip3;                                          
var ta;                                                     

var on;                                                     
var t0;                                                     
var t;                                                      
var timer;                                                  

var drag;                                                   
var state;                                                  
                                                            
var diagr;                                                  
var m1;                                                     
var m2;                                                     
var my;                                                     
var a;                                                      
var ls;                                                     
var xLB;                                                    
var tLB;                                                    
var x;                                                      
var list;                                                   

 
 
 

function getElement (id, text) {
  var e = document.getElementById(id);                      
  if (text) e.innerHTML = text;                             
  return e;                                                 
  } 

 

function start () {
  canvas = getElement("cv");                                
  width = canvas.width; height = canvas.height;             
  ctx = canvas.getContext("2d");                            
  bu1 = getElement("bu1",text01);                           
  bu1.disabled = false;                                     
  bu2 = getElement("bu2",text02[0]);                        
  bu2.disabled = false;                                     
  bu3 = getElement("bu3",text03);                           
  bu3.disabled = true;                                      
  getElement("ip1a",text04);                                
  getElement("ip1b",symbolMass1+" = ");                     
  ip1 = getElement("ip1c");                                 
  getElement("ip1d",gram);                                  
  getElement("ip2a",text05);                                
  getElement("ip2b",symbolMass2+" = ");                     
  ip2 = getElement("ip2c");                                 
  getElement("ip2d",gram);                                  
  getElement("ip3a",text06);                                
  getElement("ip3b",symbolCoefficientFriction+" = ");       
  ip3 = getElement("ip3c");                                 
  getElement("lbM",text07);                                 
  ta = getElement("ta");                                    
  ta.readOnly = true;                                       

  m1 = 0.1;                                                 
  m2 = 0.001;                                               
  my = 0;                                                   
  updateInput();                                            
  enableInput(true);                                        
  drag = false;                                             
  newSeries();                                              
  paint();                                                  
  bu1.onclick = reactionButton1;                            
  bu2.onclick = reactionButton2;                            
  bu3.onclick = reactionButton3;                            
  ip1.onkeydown = reactionEnter;                            
  ip2.onkeydown = reactionEnter;                            
  ip3.onkeydown = reactionEnter;                            
  canvas.onmousedown = reactionMouseDown;                   
  canvas.ontouchstart = reactionTouchStart;                 
  canvas.onmouseup = reactionMouseUp;                       
  canvas.ontouchend = reactionTouchEnd;                     
  canvas.onmousemove = reactionMouseMove;                   
  canvas.ontouchmove = reactionTouchMove;                   
  }  
  
 
 

function enableInput (p) {
  ip1.readOnly = !p;                                        
  ip2.readOnly = !p;                                        
  ip3.readOnly = !p;                                        
  }
  
 
 
 
   
function reactionButton1 () {
  bu2.disabled = false;                                     
  bu3.disabled = true;                                      
  enableInput(true);                                        
  stopAnimation();                                          
  newSeries();                                              
  reaction();                                               
  paint();                                                  
  }
  
 
 
 

function reactionButton2 () {
  reaction();                                               
  if (state == 0) {                                         
    enableInput(false);                                     
    state = 1;                                              
    bu2.disabled = true;                                    
    startAnimation();                                       
    }
  if (state >= 2) {                                         
    updateList();                                           
    if (list.length > 2) bu3.disabled = false;              
    state = 0;                                              
    bu2.innerHTML = text02[0];                              
    stopAnimation();                                        
    t = 0;                                                  
    paint();                                                
    }
  }
  
 
 

function reactionButton3 () {
  diagr = true;                                             
  if (!on) paint();                                         
  }
  
 
 

function reaction () {
  input();                                                  
  calculation();                                            
  }
  
 
  
function reactionEnter (e) {
  if (e.key && String(e.key) == "Enter"                     
  || e.keyCode == 13)                                       
    reaction();                                             
  paint();                                                  
  }
  
 
 
  
function reactionMouseDown (e) {        
  reactionDown(e.clientX,e.clientY);                        
  }
  
 
 
  
function reactionTouchStart (e) {      
  var obj = e.changedTouches[0];                            
  reactionDown(obj.clientX,obj.clientY);                    
  if (drag) e.preventDefault();                             
  }
  
 
  
function reactionMouseUp (e) {                                             
  reactionUp();                                             
  }
  
 
  
function reactionTouchEnd (e) {             
  reactionUp();                                             
  }
  
 
  
function reactionMouseMove (e) {            
  if (!drag) return;                                        
  reactionMove(e.clientX,e.clientY);                        
  }
  
 
  
function reactionTouchMove (e) {            
  if (!drag) return;                                        
  var obj = e.changedTouches[0];                            
  reactionMove(obj.clientX,obj.clientY);                    
  e.preventDefault();                                       
  } 
  
 
 
 

function reactionDown (u, v) {
  var re = canvas.getBoundingClientRect();                  
  u -= re.left; v -= re.top;                                
  var du = Math.abs(u-ls), dv = Math.abs(v-40);             
  if (du < 40 && dv < 40) drag = true;                      
  } 
  
 
 
 

function reactionMove (u, v) {
  var re = canvas.getBoundingClientRect();                  
  u -= re.left; v -= re.top;                                
  ls = Math.round(u);                                       
  if (ls < X0+LENGTH/20) ls = X0+LENGTH/20;                 
  if (ls > X0+LENGTH) ls = X0+LENGTH;                       
  calcST();                                                 
  if (!on) paint();                                         
  }
  
 
 

function reactionUp () {
  drag = false;                                             
  calcST();                                                 
  if (!on) paint();                                         
  }
  
 
 

function startAnimation () {
  on = true;                                                
  timer = setInterval(paint,40);                            
  t0 = new Date();                                          
  }
  
 
 

function stopAnimation () {
  on = false;                                               
  clearInterval(timer);                                     
  }

 

 
 
  
function calcST () {
  xLB = (ls-X0)/LENGTH;                                     
  tLB = Math.sqrt(2*xLB/a);                                 
  }

 
 

function calculation () {
  if (m1+m2 > 0) a = (m2-my*m1)*G/(m1+m2);                  
  else a = 0;                                               
  if (a < 0) a = 0;                                         
  calcST();                                                 
  }
  
 
 

function newSeries () {
  list = [];                                                
  state = 0;                                                
  bu2.innerHTML = text02[0];                                
  diagr = false;                                            
  t = 0;                                                    
  ls = X0+LENGTH/2;                                         
  calculation();                                            
  var s = symbolDisplacement+"           ";                 
  s += symbolTime+"\n";                                     
  for (var i=1; i<=24; i++) s += "\u2015";                  
  s += "\n";                                                
  ta.value = s;                                             
  }
  
 
 
 
 

function ToString (n, d, fix) {
  var s = (fix ? n.toFixed(d) : n.toPrecision(d));          
  return s.replace(".",decimalSeparator);                   
  }
  
 
 
 
 
  
function value (n, d, u) {
  return ToString(n,d,true)+" "+u;
  }
  
 
 
 
 
 
 
 
  
function inputNumber (ef, d, fix, min, max) {
  var s = ef.value;                                         
  s = s.replace(",",".");                                   
  var n = Number(s);                                        
  if (isNaN(n)) n = 0;                                      
  if (n < min) n = min;                                     
  if (n > max) n = max;                                     
  ef.value = ToString(n,d,fix);                             
  return n;                                                 
  }
   
 
 

function input () {
  m1 = inputNumber(ip1,0,true,0,1000)/1000;                 
  m2 = inputNumber(ip2,1,true,0,100)/1000;                  
  my = inputNumber(ip3,3,true,0,1);                         
  }
  
 

function updateInput () {
  ip1.value = ToString(1000*m1,0,true);                     
  ip2.value = ToString(1000*m2,1,true);                     
  ip3.value = ToString(my,3,true);                          
  }
  
 
 

function updateList () {
  list.push(xLB);                                           
  var s = ta.value;                                         
  s += value(xLB,3,meter)+";    ";                          
  s += value(tLB,3,second)+"\n";                            
  ta.value = s;                                             
  }
   
 

 

function newPath () {
  ctx.beginPath();                                          
  ctx.strokeStyle = "#000000";                              
  ctx.lineWidth = 1;                                        
  }
  
 
 
 
 

function line (x1, y1, x2, y2, c) {
  newPath();                                                
  if (c) ctx.strokeStyle = c;                               
  ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);                     
  ctx.stroke();                                             
  }
  
 
 
 
 
 

function rectangle (x, y, w, h, c) {
  if (c) ctx.fillStyle = c;                                 
  newPath();                                                
  ctx.fillRect(x,y,w,h);                                    
  ctx.strokeRect(x,y,w,h);                                  
  }

 
 
 
 

function circle (x, y, r, c) {
  if (c) ctx.fillStyle = c;                                 
  newPath();                                                
  ctx.arc(x,y,r,0,2*Math.PI,true);                          
  if (c) ctx.fill();                                        
  ctx.stroke();                                             
  }
  
 
 
 
 
 

function arrow (x1, y1, x2, y2, w) {
  if (!w) w = 1;                                            
  var dx = x2-x1, dy = y2-y1;                               
  var length = Math.sqrt(dx*dx+dy*dy);                      
  if (length == 0) return;                                  
  dx /= length; dy /= length;                               
  var s = 2.5*w+7.5;                                        
  var xSp = x2-s*dx, ySp = y2-s*dy;                         
  var h = 0.5*w+3.5;                                        
  var xSp1 = xSp-h*dy, ySp1 = ySp+h*dx;                     
  var xSp2 = xSp+h*dy, ySp2 = ySp-h*dx;                     
  xSp = x2-0.6*s*dx; ySp = y2-0.6*s*dy;                     
  ctx.beginPath();                                          
  ctx.lineWidth = w;                                        
  ctx.moveTo(x1,y1);                                        
  if (length < 5) ctx.lineTo(x2,y2);                        
  else ctx.lineTo(xSp,ySp);                                 
  ctx.stroke();                                             
  if (length < 5) return;                                   
  ctx.beginPath();                                          
  ctx.fillStyle = ctx.strokeStyle;                          
  ctx.moveTo(xSp,ySp);                                      
  ctx.lineTo(xSp1,ySp1);                                    
  ctx.lineTo(x2,y2);                                        
  ctx.lineTo(xSp2,ySp2);                                    
  ctx.closePath();                                          
  ctx.fill();                                               
  }
  
 
 
 
 
 

function alignText (s, t, x, y, f) {
  ctx.font = (f ? f : FONT1);                               
  if (t == 0) ctx.textAlign = "left";                       
  else if (t == 1) ctx.textAlign = "center";                
  else ctx.textAlign = "right";                             
  ctx.fillText(s,x,y);                                      
  } 
   
 
  	
function track () {
  var x0 = X0+LENGTH;                                       
  newPath();                                                
  ctx.fillStyle = colorTrack;                               
  ctx.moveTo(10,60);                                        
  ctx.lineTo(x0+20,60);                                     
  ctx.arc(x0+20,70,10,270*DEG,90*DEG,false);                
  ctx.lineTo(10,80);                                        
  ctx.lineTo(10,60);                                        
  ctx.fill(); ctx.stroke();                                 
  rectangle(x0,52,5,18,colorStop);                          
  }
    
 

function glider () {
  var xEnd = X0+LENGTH;                                     
  var dx = x*LENGTH;                                        
  rectangle(X0+dx-40,50,40,20,colorGlider);                 
  newPath();                                                
  ctx.moveTo(X0+dx,57);                                     
  ctx.lineTo(xEnd+20,57);                                   
  ctx.arc(xEnd+17,70,13,270*DEG,0,false);                   
  ctx.lineTo(xEnd+30,100+dx);                               
  ctx.stroke();                                             
  rectangle(xEnd+28,100+dx,4,6,colorGlider);                
  circle(X0+dx,57,2,"#ff0000");                             
  }
      
 
    
function scale () {
  rectangle(X0,85,LENGTH,10,colorScale1);                   
  for (var i=1; i<10; i+=2)                                 
    rectangle(X0+i*20,85,20,10,colorScale2);                
  }
  
 
    
function lightbarrier () {
  rectangle(ls-3,40,6,20,colorLB);                          
  line(ls-20,30,ls+20,30);                                  
  if (ls > X0+10) arrow(ls,30,ls-20,30);                    
  if (ls < X0+LENGTH) arrow(ls,30,ls+20,30);                
  alignText(text08,1,ls+15,50);                             
  }
  
 

function clock () {
  var u0 = 140, v0 = 165;                                   
  rectangle(u0-50,v0-15,100,30,colorClock1);                
  rectangle(u0-40,v0-10,80,20,colorClock2);                 
  ctx.fillStyle = colorClock3;                              
  var s = value((t<tLB ? t : tLB),3,second);                
  alignText(s,1,u0,v0+5,FONT2);                             
  }
  
 
 

function axes (u0, v0) {
  ctx.font = FONT1;                                         
  ctx.fillStyle = "#000000";                                
  arrow(u0-10,v0,u0+130,v0);                                
  alignText(symbolTime,1,u0+125,v0+15);                     
  alignText(text09,1,u0+125,v0+27);                         
  for (var i=1; i<=5; i++) {                                
    var u = u0+i*PIX_T;                                     
    line(u,v0-3,u,v0+3);                                    
    alignText(""+i,1,u,v0+15);                              
    }
  arrow(u0,v0+10,u0,v0-230);                                
  alignText(symbolDisplacement,1,u0-20,v0-225);             
  alignText(text10,1,u0-20,v0-213);                         
  for (i=1; i<=10; i++) {                                   
    var v = v0-i*20;                                        
    line(u0-3,v,u0+3,v);                                    
    alignText(ToString(i/10,true,1),2,u0-5,v+5);            
    }
  }
   
 
 
 

function dataPoint (u0, v0, x) {
  var t = Math.sqrt(2*x/a);                                 
  var u = u0+t*PIX_T;                                       
  var v = v0-x*LENGTH;                                      
  rectangle(u-2,v-2,4,4,"#000000");                         
  }
  
 
 

function parabola (u0, v0) {
  var u = u0, v = v0;                                       
  newPath();                                                
  ctx.moveTo(u,v);                                          
  for (u = u0; u<u0+140; u++) {                             
    var t = (u-u0)/PIX_T;                                   
    v = v0-(a/2)*t*t*LENGTH;                                
    if (v < v0-220) {v = v0-220; break;}                    
    ctx.lineTo(u,v);                                        
    }
  ctx.stroke();                                             
  }
      
 

function diagram () {
  var u0 = 330, v0 = 360;                                   
  axes(u0,v0);                                              
  for (var i=0; i<list.length; i++)                         
    dataPoint(u0,v0,list[i]);                               
  if (state >= 2)                                           
    dataPoint(u0,v0,xLB);                                   
  if (diagr) parabola(u0,v0);                               
  var tt = Math.min(t,Math.sqrt(2/a));                      
  var u = u0+tt*PIX_T;                                      
  var v = v0-(a/2)*tt*tt*LENGTH;                            
  circle(u,v,2.5,"#ff0000");                                
  }
      
 
  
function writeValues () {
  var u0 = 100, v0 = 300;                                   
  ctx.fillStyle = "#000000";                                
  var str = symbolDisplacement+" = "+value(xLB,3,meter);    
  alignText(str,0,u0,v0);                                   
  str = symbolTime+" = ";                                   
  if (state >= 2) str += value(tLB,3,second);               
  alignText(str,0,u0,v0+20);                                
  str = symbolAcceleration+" =  ";                          
  alignText(str,0,u0,v0+45);                                
  var w0 = ctx.measureText(str).width;                      
  line(u0+w0,v0+40,u0+20+w0,v0+40,"#000000",2);             
  alignText("2"+symbolDisplacement,1,u0+10+w0,v0+37);       
  alignText(symbolTime+"\u00B2",1,u0+10+w0,v0+53);          
  if (state <= 1) return;                                   
  str = " = "+value(a,3,meterPerSecond2);                   
  alignText(str,0,u0+20+w0,v0+45);                          
  }
    
 
 
  
function paint () {
  ctx.fillStyle = colorBackground;                          
  ctx.fillRect(0,0,width,height);                           
  if (on) {                                                 
    var t1 = new Date();                                    
    t += (t1-t0)/1000;                                      
    t0 = t1;                                                
    }
  if (state == 1 && x > xLB) {                              
    state = 2;                                              
    bu2.innerHTML = text02[1];                              
    bu2.disabled = false;                                   
    }
  if (state == 2 && x > 1) state = 3;                       
  switch (state) {                                          
    case 0: x = 0; break;                                   
    case 1: case 2: x = a/2*t*t; break;                     
    case 3: x = 1; break;                                   
    }        
  track();                                                  
  glider();                                                 
  scale();                                                  
  lightbarrier();                                           
  clock();                                                  
  diagram();                                                
  writeValues();                                            
  if (a == 0) {                                             
    ctx.fillStyle = "#ff0000";                              
    ctx.fillText(text11,80,120);                            
    }
  }
  
document.addEventListener("DOMContentLoaded",start,false);  




