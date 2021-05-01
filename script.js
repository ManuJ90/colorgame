//Primeros colores para los cuadrados 
let colors = randomColor(6);
let squareNum = 6;

// Declaracion de la variable del SPAN
let mensaje = document.getElementById('message');

//Declaracion de variable del h1
let title = document.querySelector('h1');

//Declaracion de los cuadrados 
let square = document.querySelectorAll('.square');

// Declaracion de los botones hard & easy
let facil = document.getElementById('facil');
let dificil = document.getElementById('dificil');

// Sombreado del cuadrado con hover.
function mouseOver(){
    this.style.boxShadow = '0 0 5px black, 0 0 15px ' + this.style.backgroundColor;
}
function mouseLeave(){
    this.style.boxShadow = 'none';
}

for (let i = 0; i<square.length; i++){
    square[i].addEventListener('mouseover', mouseOver);
    square[i].addEventListener('mouseleave', mouseLeave);
}

//Seleccion de los cuadrados para asignarles un color
for(let i = 0; i<colors.length; i++){
    square[i].style.backgroundColor = colors[i]; // les asigna un color a cada cuadrado
    square[i].addEventListener('click', function(){
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        this.style.boxShadow = 'none';
        if (clickedColor === pickedColor){
            colorChanger();//cambia estilos si el color es correcto
            title.style.backgroundColor=pickedColor;
            mensaje.textContent = 'Awesome!';
            reset.textContent= 'Play again?';
        } else{
            square[i].style.backgroundColor = '#16161d';
            mensaje.textContent = 'Try again...';
        }
    })
};

//picked color
let pickedColor = pickColor();

//pickColor
function pickColor(){
    let random = colors[Math.floor(Math.random()*colors.length)];
    return random;
};

 //Color de texto para el span
let colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent=pickedColor;
colorDisplay.style.color='white';
colorDisplay.style.textShadow= 'rgb(26, 26, 26) 0 0 1px';

//Cambia los colores de los cuadrados al color ganador
function colorChanger(){
    for(let i = 0; i<square.length; i++){
        square[i].style.backgroundColor = pickedColor;
    }
};

//Funcion para crear colores random
function generateRandomColor(n){
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
};

//Funcion para meter 6 colores random en el let colors=
function randomColor(n){
    let colors = [];
    for (let i = 0; i<n; i++){
       colors[i]=generateRandomColor();
    }
    return colors;
}

//Reset
let reset = document.querySelector('button');

reset.addEventListener('click', function(){
    colors = randomColor(squareNum);
    pickedColor = pickColor();
    mensaje.textContent = ' '
    reset.textContent= 'New colors...';
    title.style.backgroundColor='#16161d'
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i <square.length; i++){
        square[i].style.backgroundColor=colors[i];
        }
    }
);

//Botones hard and easy
facil.addEventListener('click', function(){
    facil.classList.add('selected');
    dificil.classList.remove('selected');
    squareNum = 3;
    colors = randomColor(squareNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i<square.length; i++){
        if(square[i] = colors[i]){
            square[i].style.backgroundColor=colors[i];
        } else {
            square[i].style.display='none';
        }
    }
})

dificil.addEventListener('click', function(){
    facil.classList.remove('selected');
    dificil.classList.add('selected');
    squareNum = 6;
    colors = randomColor(squareNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i<square.length; i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = 'block';
    }
});

