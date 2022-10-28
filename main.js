function dibujar(){
    console.log("a")
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    
    var velocidad=5;
    var p1={x:0, y:500};
    var tiempo=0;

    var bola={x:p1.x, y:p1.y};

    setInterval(pintar,10);
    
    function pintar(){
        //Dibujar el rectángulo
        lienzo.fillStyle='#ffffff';
        lienzo.fillRect(0,0,elemento.width,elemento.height);
        
        //Dibujar el marco
        lienzo.strokeStyle='#000000';
        lienzo.strokeRect(1,1,elemento.width-2,elemento.height-2);
       
        bola.x =0+28*tiempo;
        bola.y =500-85*tiempo+.5*9.8*tiempo*tiempo;
        
        lienzo.fillStyle='#000000';
        lienzo.beginPath();
        lienzo.arc(bola.x,bola.y,15,0,Math.PI*2,true);
        lienzo.closePath();
        lienzo.fill();
      
      tiempo+=0.06;
      
     if(bola.x>500){
       tiempo=0;
     } 

    }
    
};//FIN dibujar()

window.addEventListener('load', dibujar, false);