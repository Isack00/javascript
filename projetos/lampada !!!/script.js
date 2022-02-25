//Styles Area
document.getElementById('titulo').style.textAlign='center'

let lampada = document.getElementById('lampada')

let buttonArea = document.getElementById('button_area')

buttonArea.style.textAlign='center'

//Styles Area

function ligar() 
{
    document.getElementById('lampada').src='images/ligada.jpg'
}

function desligar() 
{
    document.getElementById('lampada').src='images/desligada.jpg'
}