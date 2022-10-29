const contenedor = document.querySelector(".contenedor")
const contTitle = document.createElement("H2")
const contParrafo = document.createElement("p")
const contTitle2 = document.createElement("H2")
const contsubTitle = document.createElement("H3")
const contParrafo2 = document.createElement("p")
const contImage = document.createElement("img")
const contImage2 = document.createElement("img")
const contImage3 = document.createElement("img")
const contImage4 = document.createElement("iframe")
const contImage5 = document.createElement("iframe")
const contImage6 = document.createElement("iframe")
const contsubTitle2 = document.createElement("h3")
const contParrafo3 = document.createElement("p")
const contsubTitle3 = document.createElement("h3")
const contParrafo4 = document.createElement("p")
const contsubTitle4 = document.createElement("h3")
const contParrafo5 = document.createElement("p")
const contsubTitle5 = document.createElement("h4")
const contParrafo6 = document.createElement("p")
const contsubTitle6 = document.createElement("h4")
const contParrafo7 = document.createElement("p")
const contsubTitle7 = document.createElement("h4")
const contParrafo8 = document.createElement("p")
const contParrafo9 = document.createElement("p")
const contParrafo10 = document.createElement("p")

document.getElementById("btn1").onclick = function(){
    contenedor.style.overflow = "scroll";
    contParrafo.innerHTML = 'La mecánica newtoniana o mecánica vectorial es una formulación específica de la mecánica clásica que estudia el movimiento de partículas y sólidos en un espacio euclídeo tridimensional.<br>'+
    'La mecánica es la parte de la física que estudia el movimiento.<br>'+
    '<b>Se subdivide en:<b><br>'+
    '<b>Estática<b>, que trata sobre las fuerzas en equilibrio mecánico.<br>'+
    '<b>Cinemática<b>, que estudia el movimiento sin tener en cuenta las causas que lo producen<br>'+
    '<b>Dinámica<b>, que estudia los movimientos y las causas que los producen (fuerza y energía).'

    contsubTitle.textContent = "Descripción de la teoría"
    contParrafo2.innerHTML = 'La mecánica newtoniana se formula sobre un espacio euclídeo tridimensional. La teoría asume la existencia de un tiempo universal compartido por todos los observadores y asume que las partículas siguen trayectorias trazables bien definidas. Varios de estos supuestos de la mecánica newtoniana son abandonados en otras teorías físicas como la mecánica relativista o la mecánica cuántica.'

    contsubTitle2.textContent = 'Posición, velocidad y aceleración'
    contParrafo3.innerHTML = 'La posición de una partícula con respecto a un punto fijo en el espacio se denota con el vector r, cuya norma, | r | = r, corresponde a la distancia entre el punto fijo y la partícula, y su dirección es la que va desde este punto fijo al lugar en que se ubica la partícula. Si r es una función del tiempo t, denotado por r = f(t), el tiempo t se toma a partir de un tiempo inicial arbitrario:'+
    'Entonces resulta que la velocidad y la aceleración (que también son vectores) vienen dadas por:'+
    'La posición indica el lugar del objeto que se está analizando. Si dicho objeto cambia de lugar, la función r describe el nuevo lugar del objeto. El punto clave de la dinámica newtoniana es que la aceleración viene determinada por la fuerza, siendo una fuerza cualquier causa eficiente que puede cambiar el estado de movimiento de una partícula (cambiado su capacidad de hacer trabajo o curvando su trayectoria). Si se dispone de un medio de computar las fuerzas sobre una partícula la trayectoria de una partícula vendrá dada por la ecuación diferencial:'
    contImage.src = "https://wikimedia.org/api/rest_v1/media/math/render/svg/4a50f6497cbb50b6ed6808835a7cb90c7feb154e"
    contImage.style.margin = "90px"

    contParrafo4.innerHTML = 'La posición indica el lugar del objeto que se está analizando. Si dicho objeto cambia de lugar, la función r describe el nuevo lugar del objeto. El punto clave de la dinámica newtoniana es que la aceleración viene determinada por la fuerza, siendo una fuerza cualquier causa eficiente que puede cambiar el estado de movimiento de una partícula (cambiado su capacidad de hacer trabajo o curvando su trayectoria). Si se dispone de un medio de computar las fuerzas sobre una partícula la trayectoria de una partícula vendrá dada por la ecuación diferencial:<br>'+
    '<br>donde m es la masa de la partícula.'
    contImage2.src = "https://wikimedia.org/api/rest_v1/media/math/render/svg/32fdc9d56fbd14aa63b8eb4624accca51fd3ff1a"
    contImage2.style.margin = "90px"

    contsubTitle3.textContent = 'EJEMPLO NEWTONIANO DE TIRO PARABOLICO'
    contParrafo5.innerHTML = 'El tiro parabólico es el ejemplo cásico del uso de las tres leyes, la gravitación universal y el cálculo diferencial, en resumen, la esencia del trabajo de Newton. Se obtiene la trayectoria de un cuerpo sujeto a la aceleración de la gravedad suponiéndola de dirección y sentido constante, y resulta ser una parábola.<br>'+
    'Supóngase que se lanza una pelota a 45º de inclinación, tal que sus velocidades vertical y horizontal sean de 40 Kms/hora respectivamente.'
    contImage3.src = "https://fisicalandia.com/wp-content/uploads/2019/03/Newton-Tiro-Parabolico.jpg"
    contImage3.style.margin = "90px"

    contParrafo6.innerHTML = 'De la definición diferencial de aceleración se puede realizar esta deducción bien conocida:'
    contImage4.src = "https://universidaddelacosta-my.sharepoint.com/personal/dsalinas_cuc_edu_co/_layouts/15/embed.aspx?UniqueId=6bc45a1f-318b-43b1-ab01-4ea75b59d372"
    contImage4.style.margin = "90px"

    contParrafo7.innerText = 'Desarrollando ahora la velocidad como diferencial del espacio recorrido respecto del tiempo, se obtiene la ecuación del movimiento rectilíneo uniformemente acelerado.'
    contImage5.src = "https://universidaddelacosta-my.sharepoint.com/personal/dsalinas_cuc_edu_co/_layouts/15/embed.aspx?UniqueId=c42b65dd-7efc-4b6d-a81d-5dc10af5162b"
    contImage5.style.margin = "90px"

    contParrafo8.innerHTML = 'Esta última ecuación se puede aplicar a este problema. Se tendrá una ecuación particular para la componente horizontal del movimiento y otra para la componente vertical. Suponiendo que \vec s_{0} =0s0​=0 y que a_{x}=0ax​=0 (la gravedad es sólo vertical porque no se considera la fuerza centrífuga de rotación de la tierra, ni Coriolis), se pueden escribir las ecuaciones escalares para las componentes del vector de posición s como'
    contImage6.src = 'https://universidaddelacosta-my.sharepoint.com/personal/dsalinas_cuc_edu_co/_layouts/15/embed.aspx?UniqueId=363223fa-8e82-4d1b-b69f-796fb158f5f0'
    contImage6.style.margin = "90px"

    contParrafo9.innerHTML = 'Se trata de una pareja de ecuaciones paramétricas, en las que el parámetro es el tiempo. Se obtienen para cada instante de tiempo las componentes x e y.'

    contsubTitle4.textContent = 'Elementos de la cinemática'
    contParrafo10.innerHTML = 'Los elementos básicos de la cinemática son tres: espacio, tiempo y un móvil. Debemos tener en consideración que en la mecánica clásica los primeros dos (tiempo y espacio) son dimensiones absolutas, independientes del móvil y previos a su existencia.<br>'+
    'En ese sentido, la cinemática clásica contempla los siguientes tipos de movimiento:<br>'+
    '<b>Movimiento rectilíneo uniforme</b>. Un cuerpo se desplaza a una velocidad constante v, con aceleración nula en línea recta.<br>'+
    '<b>Movimiento rectilíneo uniformemente acelerado</b>. Un cuerpo se desplaza a una velocidad que varía linealmente (dado que su aceleración es constante) conforme avanza el tiempo.<br>'+
    '<b>Movimiento armónico simple</b>. Es un movimiento periódico de vaivén en el cual un cuerpo oscila alrededor de un punto de equilibrio en una dirección determinada y en unidades regulares de tiempo.<br>'+
    '<b>Movimiento parabólico</b>. Es la composición de dos movimientos rectilíneos distintos: uno horizontal y de velocidad constante, y otro vertical y uniformemente acelerado.<br>'+
    '<b>Movimiento circular uniforme</b>. Como su nombre lo indica, es el movimiento que traza círculos perfectos en su recorrido, manteniendo invariable el módulo de su velocidad en el tiempo.<br>'+
    '<b>Movimiento circular uniformemente acelerado</b>. Es el movimiento que traza círculos perfectos en su recorrido, pero con una velocidad que varía en módulo en el tiempo.<br>'+
    '<b>Movimiento armónico complejo</b>. Se trata de la combinación de diversos movimientos armónicos simples, en direcciones distintas.<br>'+
    '<b>Ejemplos de cinematica</b><br>'+
    'Las <b>manecillas de un reloj</b> ilustran el movimiento circular uniforme.<br>'+
    'La mayoría de los movimientos conocidos sobre la faz de la tierra son buenos ejemplos de los estudios de la cinemática. La caída de un cuerpo, por ejemplo, es un movimiento uniformemente acelerado por la fuerza de gravedad que la Tierra ejerce sobre todos los objetos. Esta fuerza es la que llamamos peso y apunta hacia el centro del planeta.'

    contenedor.append(contParrafo)
    contenedor.append(contsubTitle)
    contenedor.append(contParrafo2)
    contenedor.append(contsubTitle2)
    contenedor.append(contParrafo3)
    contenedor.append(contImage)
    contenedor.append(contParrafo4)
    contenedor.append(contImage2)
    contenedor.append(contsubTitle3)
    contenedor.append(contParrafo5)
    contenedor.append(contImage3)
    contenedor.append(contParrafo6)
    contenedor.append(contImage4)
    contenedor.append(contParrafo7)
    contenedor.append(contImage5)
    contenedor.append(contParrafo8)
    contenedor.append(contImage6)
    contenedor.append(contParrafo9)
    contenedor.append(contsubTitle4)
    contenedor.append(contParrafo10)


    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "none"
    canvas.style.display = "none"
}

document.getElementById("btn2").onclick = function(){
    contenedor.style.overflow = "scroll";
    contTitle.innerHTML = "Fuerza"
    contParrafo.innerHTML = 'Este concepto está basado en las investigaciones realizadas sobre dinámica, y fue resuelto por primera vez por el fisicomatemático inglés Isaac Newton en su tratado "Principia Mathematica", quién tomó como base el principio de inercia de Galileo, y a partir del cual enunció lo que se le conoce como la primera ley de Newton que dice: "todo cuerpo se mantiene en estado de reposo o de movimiento constante en línea recta mientras que otra fuerza no modifique dicho estado". Sin embargo, la definición explícita de fuerza es definida mediante la segunda ley de Newton, la cual expresa: " el producto de la masa de un cuerpo por su aceleración es directamente proporcional a la magnitud de la fuerza que actúa sobre dicho cuerpo".'+
                        '<br>En el Sistema Internacional de Unidades, la unidad de medida de la fuerza es el newton que se representa con el símbolo N, en reconocimiento a Isaac Newton por su aporte a la física, especialmente a la mecánica clásica. El newton es una unidad derivada del Sistema Internacional de Unidades que se define como la fuerza necesaria para proporcionar una aceleración de 1m/s² a un objeto de 1kg de masa.'
    contenedor.append(contParrafo)
    contTitle2.innerHTML = "Leyes de Newton"
    contsubTitle.textContent = "Primera ley - Inercia"
    contImage.src = "https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/YULPJS3S4VF6DCSG35GETXUXQU.jpg"

    contParrafo2.innerHTML = 'La primera Ley de Newton contradice un principio formulado en la antigüedad por el sabio griego Aristóteles, para quien un cuerpo solo podía conservar su movimiento si se le aplicaba una fuerza sostenida. Newton establece en cambio que:<br>'+
    '“Todo cuerpo persevera en su estado de reposo o de movimiento rectilíneo uniforme a no ser que sea obligado a cambiar su estado por fuerzas impresas sobre él”.<br>'+
    'Por ende, un objeto que se desplaza o que está en reposo no puede alterar dicho estado, a menos que se le aplique algún tipo de fuerza.<br>'+
    'Según este principio, el movimiento involucra magnitudes que son vectoriales (dotadas de dirección y sentido). Es posible calcular la aceleración a partir de la velocidad inicial y la final. Además, propone que los cuerpos en movimiento tienden siempre al desplazamiento en una trayectoria recta y uniforme.'

    contsubTitle2.innerHTML = "Segunda ley - La dinámica"
    contParrafo3.innerHTML = 'La segunda ley de Newton relaciona fuerza, masa y aceleración.<br>'+
    'En esta ley Newton define el concepto de fuerza (representado con F), expresando que:<br>'+
    '“El cambio de un movimiento es directamente proporcional a la fuerza impresa en él y tiene lugar según la línea recta a lo largo de la cual aquella fuerza se imprime”.<br>'+
    'Esto quiere decir que la aceleración de un objeto en movimiento responde siempre a la cantidad de fuerza que se le aplique en un momento dado, para modificar su trayectoria o velocidad.<br>'+
    'De estas consideraciones nace la ecuación fundamental de la dinámica para objetos de masa constante:<br>'+
    'Fuerza resultante (Fresultante) = masa (m) x aceleración (a)<br>'+
    'Una fuerza neta actúa sobre un cuerpo de masa constante y le proporciona una aceleración determinada. En los casos en que la masa no sea constante, la fórmula se enfocará más bien en la cantidad de movimiento (p), según la fórmula siguiente:<br>'+
    'Cantidad de movimiento (p) = masa (m) x velocidad (v). Por ende: Fneta = d (m.v) / dt.<br>'+
    'Así se puede relacionar la fuerza con la aceleración y la masa, sin importar si ésta última es variable o no.'
    
    contsubTitle3.textContent = "Tercera ley - Principio de acción y reacción"
    contParrafo4.innerHTML = '“A toda acción le corresponde una reacción igual, pero en sentido contrario: lo que quiere decir que las acciones mutuas de dos cuerpos siempre son iguales y dirigidas en sentido opuesto”. <br>'+
    'De esta manera, siempre que se ejerce una fuerza sobre un objeto, éste ejerce una fuerza semejante en dirección contraria y de igual intensidad, por lo que si dos objetos (1 y 2) interactúan, la fuerza ejercida por uno sobre el otro será igual en magnitud a la ejercida por el otro sobre el primero, pero de signo opuesto. <br>'+
    'Es decir: F1-2 = ­F2-1. A la primera fuerza se le conocerá como “acción” y a la segunda fuerza como “reacción”. <br>'+
    'Para demostrar esta tercera ley alcanza con observar lo que ocurre cuando dos personas de peso similar van corriendo en direcciones opuestas y chocan: ambas recibirán la fuerza del otro y saldrán despedidos en sentido opuesto. Lo mismo ocurre al rebotar una pelota en la pared y sale despedida en dirección contraria, con una fuerza semejante a la que proyectamos al arrojarla. <br>'

    contsubTitle4.textContent = "Aplicación de las leyes de newton"
    contParrafo5.innerHTML = 'Las leyes de Newton son tres principios que analizan cómo hay fuerzas que actúan sobre los objetos para que estos se muevan.<br>'+
    'Son usadas para explicar el movimiento de los carros, las bicicletas y muchas cosas que ves a tu alrededor, hasta tus propios movimientos, al correr y saltar.'

    contsubTitle5.textContent = "Para la primera ley"
    contParrafo6.innerHTML = 'Una persona se encuentra situada en la parte posterior de un vehículo que se desplaza a una velocidad de 80km/h. Este vehículo al momento de girar hacia la derecha o la izquierda producirá que el sujeto ubicado en la parte posterior tienda a seguir en línea recta (el movimiento que tenía), pero el roce de la superficie del asiento producirá que su movimiento no se prolongue exageradamente. Por tal motivo cuando vamos en algún vehículo y este frena de manera abrupta sentimos que nos movemos hacia delante del asiento involuntariamente, y es que como mantenemos una velocidad constante (la que lleve el vehículo) y de repente éste frena (fuerza externa que modificó la velocidad) ya no poseemos una velocidad constante y se aplica la ley de la inercia. De ahí la importancia de usar el cinturón de seguridad.'

    contsubTitle6.textContent = "Para la segunda ley"
    contParrafo7.innerHTML = 'Un ejemplo cotidiano de lo que se conoce como segunda ley de Newton puede ser algo tan simple como que dos sujetos, A y B en el cual A tiene mayor fuerza que B, y estos empujan una mesa, empujando el sujeto A hacia el Este y el sujeto B hacia el Norte. Al sumar las fuerzas obtendremos una fuerza resultante igual al movimiento y aceleración de la mesa. Por lo tanto la mesa se moverá en dirección Noreste pero con mayor inclinación hacia el Este ya que el sujeto A ejerce mayor fuerza que el sujeto B.'

    contsubTitle7.textContent = "Para la tercera ley"
    contParrafo8.innerHTML = 'Un ejemplo para este caso puede ser un hombre que empuja una mesa. En este caso el hombre ejerce una fuerza f1 y la mesa en este caso reacciona y empuja a la persona con una fuerza f2. Para hacer más fácil entender este ejemplo, imagine que el sujeto y la mesa tienen la misma masa y están sobre una superficie lisa sin fricción, en este caso observaríamos que tanto la mesa como la persona se pondrían en un movimiento igual pero en sentido contrario.'

    contenedor.append(contParrafo)
    contenedor.append(contTitle)
    contenedor.append(contParrafo)
    contenedor.append(contTitle2)
    contenedor.append(contImage)
    contenedor.append(contsubTitle)
    contenedor.append(contParrafo2)
    contenedor.append(contsubTitle2)
    contenedor.append(contParrafo3)
    contenedor.append(contsubTitle3)
    contenedor.append(contParrafo4)
    contenedor.append(contsubTitle4)
    contenedor.append(contParrafo5)
    contenedor.append(contsubTitle5)
    contenedor.append(contParrafo6)
    contenedor.append(contsubTitle6)
    contenedor.append(contParrafo7)
    contenedor.append(contsubTitle7)
    contenedor.append(contParrafo8)

    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "none"
    canvas.style.display = "none"
}

const canvas = document.getElementById("lienzo");

const ctx = canvas.getContext("2d");

let cannonSfx = new Audio("https://ia601404.us.archive.org/24/items/metal-block/Anti%20Aircraft%20Cannon-18363-Free-Loops.com.mp3");

let cannonTop = new Image();
cannonTop.src="https://ia801504.us.archive.org/32/items/cannon_202104/cannon.png";
cannonTop.onload = renderImages;

let mousePos = null;
let angle = null;
let canShoot = true;

//Global Functions
function drawBorder() {
    ctx.fillStyle = "#666666";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.clearRect(20,20,560,560);
}

//Ensure cannon balls have the correct starting position
function sortBallPos(x, y) {
    let rotatedAngle = angle;
    //Work out distance between rotation point & cannon nozzle
    let dx = x - (cannon.x + 15);
    let dy = y - (cannon.y - 50);
    let distance = Math.sqrt(dx*dx + dy*dy);
    let originalAngle = Math.atan2(dy,dx);
    //Work out new positions
    let newX = (cannon.x + 15) + distance * Math.cos(originalAngle + rotatedAngle);
    let newY = (cannon.y - 50) + distance * Math.sin(originalAngle + rotatedAngle);

    return {
        x: newX,
        y: newY
    }
}

class Cannon {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.topX = x-20;
        this.topY = y-95;
    }

    stand(){
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x+15,this.y-50);
        ctx.lineTo(this.x+30,this.y);
        ctx.stroke();
    }

    rotateTop(){
        if(mousePos){
             angle = Math.atan2(mousePos.y - 
                (this.y-50), mousePos.x - 
                (this.x+15));
            ctx.translate((this.x+15), (this.y-50));
            ctx.rotate(angle);
            ctx.translate(-(this.x+15), -(this.y-50));
        }
    }

    draw() {
        //Draw the stand first
        this.stand();
        ctx.save();
        //Then draw the cannon
        this.rotateTop();
        ctx.drawImage(cannonTop,this.topX,this.topY,100,50);
    }
}

let cannon = new Cannon(80,580);

class CannonBall {
    constructor(angle, x, y) {
        this.radius = 15;
        this.mass = this.radius;
        this.angle = angle;
        this.x = x;
        this.y = y;
        this.dx = Math.cos(angle) * 7;
        this.dy = Math.sin(angle) * 7;
        this.gravity = 0.098;
        this.elasticity = 0.5;
        this.friction = 0.008;
        this.collAudio = new Audio("https://archive.org/download/metal-block_202104/metal-block.wav");
        this.collAudio.volume = 0.7;
        this.shouldAudio = true;
        this.timeDiff1 = null;
        this.timeDiff2 = new Date();
    }

    move() {  
        //Sort out gravity
        if(this.y + this.radius < 580){
            this.dy += this.gravity;
        } 

        //Apply friction to X axis
        this.dx = this.dx - (this.dx*this.friction);

        this.x += this.dx; 
        this.y += this.dy; 
    }

    draw() {
        //Set next offsets to normal offsets
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

let cannonBalls = [];

function ballHitWall(ball) {
    //A collision has occured on any side of the canvas
    if(ball.x + ball.radius > 580 ||
        ball.x - ball.radius < 20 ||
        ball.y + ball.radius > 580 ||
        ball.y - ball.radius < 20){
            if(ball.timeDiff1){
                ball.timeDiff2 = new Date() - ball.timeDiff1;
                ball.timeDiff2 < 200 ? ball.shouldAudio = false : null;
            }
            if(ball.shouldAudio) ball.collAudio.play();
            
        //Sort out elasticity & then change direction
        ball.dy = (ball.dy * ball.elasticity);

        //Right side of ball hits right side of canvas
        if(ball.x + ball.radius > 580) {
            //We set the X & Y coordinates first to prevent ball from getting stuck in the canvas border
            ball.x = 580 - ball.radius;
            ball.dx *= -1;
        }else if(ball.x - ball.radius < 20){
            //Left side of ball hits left side of canvas
            ball.x = 20 + ball.radius;
            ball.dx *= -1;
        }else if(ball.y + ball.radius > 580){
            //Bottom of ball hits bottom of canvas
            ball.y = 580 - ball.radius;
            ball.dy *= -1;
        }else if(ball.y - ball.radius < 20){
            //Top of ball hits top of canvas
            ball.y = 20 + ball.radius;
            ball.dy *= -1;
        }

            ball.timeDiff1 = new Date();
        }
}

function ballHitBall(ball1, ball2) {
    let collision = false;
    let dx = ball1.x - ball2.x;
    let dy = ball1.y - ball2.y;
    //Modified pythagorous, because sqrt is slow
    let distance = (dx * dx + dy * dy);
    if(distance <= (ball1.radius + ball2.radius)*(ball1.radius + ball2.radius)){
        collision = true;
    }
    return collision;
}

function collideBalls(ball1,ball2){
    //It matters that we are getting the exact difference from ball 1 & ball 2
    let dx = ball2.x - ball1.x;
    let dy = ball2.y - ball1.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    //Work out the normalized collision vector (direction only)
    let vCollisionNorm = {x: dx / distance, y:dy/distance}
    //Relative velocity of ball 2
    let vRelativeVelocity = {x: ball1.dx - ball2.dx,y:ball1.dy - ball2.dy};
    //Calculate the dot product
    let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
    //Don't do anything because balls are already moving out of each others way
    if(speed < 0) return;
    let impulse = 2 * speed / (ball1.mass + ball2.mass);
    //Becuase we calculated the relative velocity of ball2. Ball1 needs to go in the opposite direction, hence a collision.
    ball1.dx -= (impulse * ball2.mass * vCollisionNorm.x);
    ball1.dy -= (impulse * ball2.mass * vCollisionNorm.y);
    ball2.dx += (impulse * ball1.mass * vCollisionNorm.x);
    ball2.dy += (impulse * ball1.mass * vCollisionNorm.y);
    //Still have to account for elasticity
    ball1.dy = (ball1.dy * ball1.elasticity);
    ball2.dy = (ball2.dy * ball2.elasticity);
}

function collide(index) {
    let ball = cannonBalls[index];
    for(let j = index + 1; j < cannonBalls.length; j++){
        let testBall = cannonBalls[j];
        if(ballHitBall(ball,testBall)){
            collideBalls(ball,testBall);
            ball.collAudio.play();
        }
    }
}


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //Draw Border first
    drawBorder();
    //Moving Canvas Graphics
    cannon.draw();
    ctx.restore();
    //Shoot the cannon balls
    cannonBalls.forEach((ball, index) => {
        //Moves the balls
        ball.move();
        ballHitWall(ball);
        collide(index);
        //Renders balls to canvas
        ball.draw();
    });
}

let imgCount = 1;
//Start application now because images have loaded
function renderImages(){
    if(--imgCount>0){return}
    //Call animate() when all images have loaded
    animate();
}

//Mouse has moved
canvas.addEventListener("mousemove", e => {

    mousePos = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    }
});

canvas.addEventListener("click", e => {
    //We don't want to be able to shoot a ball at this angle!
    if(angle < -2 || angle > 0.5) return;

    if(!canShoot) return;
    canShoot = false;

    let ballPos = sortBallPos(cannon.topX + 100, cannon.topY + 30);

    cannonBalls.push( 
        new CannonBall(angle, ballPos.x, ballPos.y)
        );
    
    cannonSfx.currentTime = 0.2;
    cannonSfx.play();

    //Can only shoot cannon 1 second at a time
    setTimeout(() => {
        canShoot = true;
    }, 1000)
})
