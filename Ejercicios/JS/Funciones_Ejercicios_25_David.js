
function init()
{
	nodosAcciones = document.getElementsByClassName("Accion");
	nodosAcciones[ 0 ].onclick = sumarUno;
	nodosAcciones[ 1 ].onclick = sumarDos;
	nodosAcciones[ 2 ].onclick = restarUno;
	nodosAcciones[ 3 ].onclick = restarDos;
	nodosAcciones[ 4 ].onclick = multiplicarDos;
	nodosAcciones[ 5 ].onclick = absoluto;
	nodosAcciones[ 6 ].onclick = par_impar;
	nodosAcciones[ 7 ].onclick = crearNumAleat;
	nodosAcciones[ 8 ].onclick = borrarNumAleat;
	
	for ( i = 0; i < nodosAcciones.length; i++)
	{
		nodosAcciones[ i ].onmouseenter = cambiaFondo;
		nodosAcciones[ i ].onmouseleave = cambiaFondo;
	}
}

function crearNumAleat()
{
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1)) + min;
	nodosNumero = document.getElementsByClassName("Numero");
	nodosNumero[ 0 ].innerHTML = nAleat;
	nodosDescripcion = document.getElementsByClassName("Descripcion");
	nodosDescripcion[ 0 ].innerHTML = "Hay un número en pantalla";
}

function borrarNumAleat()
{
	nodosNumero = document.getElementsByClassName("Numero");
	nodosNumero[ 0 ].innerHTML = "X";
	nodosDescripcion = document.getElementsByClassName("Descripcion");
	nodosDescripcion[ 0 ].innerHTML = "No hay un número. Pulsa en Crear por favor.";
}

function sumarUno()
{
	nodosNumero = document.getElementsByClassName("Numero");
	num = parseInt (nodosNumero[ 0 ].innerHTML) + 1;
	nodosNumero[ 0 ].innerHTML = num.toString();
	comprobar();
}

function sumarDos()
{
	nodosNumero = document.getElementsByClassName("Numero");
	num = parseInt (nodosNumero[ 0 ].innerHTML) + 2;
	nodosNumero[ 0 ].innerHTML = num.toString();
	comprobar();
}

function restarUno()
{
	nodosNumero = document.getElementsByClassName("Numero");
	num = parseInt (nodosNumero[ 0 ].innerHTML) - 1;
	nodosNumero[ 0 ].innerHTML = num.toString();
	comprobar();
}

function restarDos()
{
	nodosNumero = document.getElementsByClassName("Numero");
	num = parseInt (nodosNumero[ 0 ].innerHTML) - 2;
	nodosNumero[ 0 ].innerHTML = num.toString();
	comprobar();
}

function multiplicarDos()
{
	nodosNumero = document.getElementsByClassName("Numero");
	num = parseInt (nodosNumero[ 0 ].innerHTML) * 2;
	nodosNumero[ 0 ].innerHTML = num.toString();
	comprobar();
}

function absoluto()
{
	nodosNumero = document.getElementsByClassName("Numero");
	num = Math.abs(parseInt (nodosNumero[ 0 ].innerHTML));
	nodosNumero[ 0 ].innerHTML = num.toString();
	comprobar();
}

function cambiaFondo()
{
	this.classList.toggle("CambiaFondo");
}

function par_impar()
{
	nodosNumero = document.getElementsByClassName("Numero");
	if ( (parseInt (nodosNumero[ 0 ].innerHTML)) % 2 === 0 )
	{
		nodosNumero[ 0 ].classList.toggle("Par");
	}
	else if ( (parseInt (nodosNumero[ 0 ].innerHTML)) % 2 !== 0 )
	{
		nodosNumero[ 0 ].classList.toggle("Impar");
	}
}

function comprobar()
{
	nodosNumero = document.getElementsByClassName("Numero");
	
	if ( nodosNumero[ 0 ].classList.length === 2 )
	{
		if ( (parseInt (nodosNumero[ 0 ].innerHTML)) % 2 === 0 )
		{
			nodosNumero[ 0 ].classList.remove("Par");
			nodosNumero[ 0 ].classList.remove("Impar");
			nodosNumero[ 0 ].classList.add("Par");
		}
		else if ( (parseInt (nodosNumero[ 0 ].innerHTML)) % 2 !== 0 )
		{
			nodosNumero[ 0 ].classList.remove("Par");
			nodosNumero[ 0 ].classList.remove("Impar");
			nodosNumero[ 0 ].classList.add("Impar");
		}
	}
}