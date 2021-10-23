
function init()
{
	nodosTitulo = document.getElementsByClassName ( "Titulo" );
	nodosOpcion = document.getElementsByClassName ( "Opcion" );
	nodosOpcion1 = document.getElementsByClassName ( "Opcion1" );
	nodosOpcion2 = document.getElementsByClassName ( "Opcion2" );
	nodosOpcion3 = document.getElementsByClassName ( "Opcion3" );
	nodosOpcion4 = document.getElementsByClassName ( "Opcion4" );
	
	nodosDescripcion = document.getElementsByClassName ( "Descripcion" );
	
	for ( i = 0; i < nodosTitulo.length; i++ )
	{
		nodosTitulo[ i ].onmouseenter = CambiaFondoTitulo;
		nodosTitulo[ i ].onmouseleave = CambiaFondoTitulo;
	}
	
	for ( i = 0; i < nodosOpcion.length; i++ )
	{
		nodosOpcion[ i ].onmouseenter = CambiaFondo;
		nodosOpcion[ i ].onmouseleave = CambiaFondo;
	}
	
	for ( i = 0; i < nodosOpcion1.length; i++ )
	{
		nodosOpcion1[ i ].onclick = Acciones1;
	}
	
	for ( i = 0; i <nodosOpcion2.length; i++ )
	{
		nodosOpcion2[ i ].onclick = Acciones2;
	}
	
	for ( i = 0; i < nodosOpcion3.length; i++ )
	{
		nodosOpcion3[ i ].onclick = Acciones3;
	}
	
	for ( i = 0; i < nodosOpcion4.length; i++ )
	{
		nodosOpcion4[ i ].onclick = Acciones4;
	}
}

function CambiaFondoTitulo()
{
	this.classList.toggle("CambiaFondoTitulo");
}

function CambiaFondo()
{
	this.classList.toggle("CambiaFondo");
}

var tiempoDescripcion;
function textoDescripcion(texto)
{
	contador = 0;
	textoDescripcion2();
	function textoDescripcion2()
	{
		if ( contador <= 2 )
		{
			tDescripcion = 1000;
			clearTimeout(tiempoDescripcion);
			tiempoDescripcion = setTimeout(textoDescripcion2,tDescripcion);
			contador++;
			nodosDescripcion[ 0 ].innerHTML = texto;
		}
		else
		{
			clearTimeout(tiempoDescripcion);
			nodosDescripcion[ 0 ].innerHTML = "Descripcion";
		}
	}
}

var tiempo1,bCondicion1;
function Acciones1()
{
	nodosPantalla1 = document.getElementsByClassName( "Pantalla1" );
	function iniciarReloj1()
	{
		bCondicion1 = false;
		nodosPantalla1[ 0 ].innerHTML = "1";
		pararReloj1();
		t1 = 1000;
		tiempo1 = setTimeout(actualizarReloj1,t1);
	}
	function pararReloj1()
	{
		clearTimeout( tiempo1 );
		bCondicion1 = true;
	}
	function actualizarReloj1()
	{
		nodosPantalla1[ 0 ].innerHTML++;
		pararReloj1();
		tiempo1 = setTimeout(actualizarReloj1,t1);
		bCondicion1 = false;
	}
	function reanudarReloj1()
	{
		if (bCondicion1)
		{
			tiempo1 = setTimeout(actualizarReloj1,t1);
		}
		else
		{
			textoDescripcion("No se puede reanudar el reloj 1 si está en funcionamiento");
		}
	}
	function doblarReloj1()
	{
		if (!bCondicion1)
		{
			pararReloj1();
			t1 /= 2;
			tiempo1 = setTimeout(actualizarReloj1,t1);
		}
		else
		{
			textoDescripcion("No se puede doblar el reloj 1 si no está en funcionamiento");
		}
	}
	function reducirReloj1()
	{
		if (!bCondicion1)
		{
			pararReloj1();
			t1 *= 2;
			tiempo1 = setTimeout(actualizarReloj1,t1);
		}
		else
		{
			textoDescripcion("No se puede reducir el reloj 1 si no está en funcionamiento");
		}
	}
	switch ( this.innerHTML )
	{
		case "Iniciar":
			iniciarReloj1();
		break;
		
		case "Reanudar":
			reanudarReloj1();
		break;
		
		case "Parar":
			pararReloj1();
		break;
		
		case "Doblar Velocidad":
			doblarReloj1();
		break;
		
		case "Reducir mitad Velocidad":
			reducirReloj1();
		break;
	}
}

var tiempo2,bCondicion2;
function Acciones2()
{
	nodosPantalla2 = document.getElementsByClassName( "Pantalla2" );
	function iniciarReloj2()
	{
		bCondicion2 = false;
		nodosPantalla2[ 0 ].innerHTML = "1";
		pararReloj2();
		t2 = 1000;
		incremento2 = 1;
		tiempo2 = setTimeout(actualizarReloj2,t2);
		lim2 = 10;
		valor2 = lim2 + 1;
	}
	function pararReloj2()
	{
		clearTimeout( tiempo2 );
		bCondicion2 = true;
	}
	function actualizarReloj2()
	{
		if ( valor2 >= 1 && valor2 <= lim2 )
		{
			nodosPantalla2[ 0 ].innerHTML = (parseInt(nodosPantalla2[ 0 ].innerHTML) + incremento2).toString();
		}
		else if ( valor2 < 1 )
		{
			nodosPantalla2[ 0 ].innerHTML = lim2.toString();
		}
		else if ( valor2 > lim2 )
		{
			nodosPantalla2[ 0 ].innerHTML = (1).toString();
		}
		pararReloj2();
		valor2 = parseInt(nodosPantalla2[ 0 ].innerHTML) + incremento2;
		tiempo2 = setTimeout(actualizarReloj2,t2);
		bCondicion2 = false;
	}
	function reanudarReloj2()
	{
		if (bCondicion2)
		{
			tiempo2 = setTimeout(actualizarReloj2,t2);
		}
		else
		{
			textoDescripcion("No se puede reanudar el reloj 2 si está en funcionamiento");
		}
	}
	function doblarReloj2()
	{
		if (!bCondicion2)
		{
			incremento2 *= 2;
		}
		else
		{
			textoDescripcion("No se puede doblar el reloj 2 si no está en funcionamiento");
		}
	}
	function invertirReloj2()
	{
		if (!bCondicion2)
		{
			incremento2 = -incremento2;
		}
		else
		{
			textoDescripcion("No se puede invertir el reloj 2 si no está en funcionamiento");
		}
	}
	switch ( this.innerHTML )
	{
		case "Iniciar":
			iniciarReloj2();
		break;
		
		case "Reanudar":
			reanudarReloj2();
		break;
		
		case "Parar":
			pararReloj2();
		break;
		
		case "De 2 en 2":
			doblarReloj2();
		break;
		
		case "Al revés":
			invertirReloj2();
		break;
	}
}

var tiempo3,bCondicionInicio,bCondicionInicio3,bCondicion3;
function Acciones3()
{
	nodosPantalla3 = document.getElementsByClassName( "Pantalla3" );
	function establecerReloj3()
	{
		minutos3 = 10;
		segundos3 = 59;
		bCondicionInicio = true;
		bCondicionInicio2 = true;
		bCondicionInicio3 = true;
		pararReloj3();
		nodosPantalla3[ 0 ].innerHTML = minutos3.toString() + ":00";
	}
	function iniciarReloj3()
	{
		if (bCondicionInicio && bCondicionInicio3)
		{
			bCondicionInicio2 = false;
			bCondicionInicio3 = false;
			bCondicion3 = false;
			minutos3 = 10;
			segundos3 = 59;
			pararReloj3();
			t3 = 10;
			tiempo3 = setTimeout(actualizarReloj3,t3);
		}
		else
		{
			textoDescripcion("No se puede iniciar el reloj 3 si no se ha fijado antes el tiempo o ya está en funcionamiento");
		}
	}
	function pararReloj3()
	{
		if (bCondicionInicio)
		{
			clearTimeout( tiempo3 );
			bCondicion3 = true;
		}
	}
	function actualizarReloj3()
	{
		if ( (minutos3 - 1) === 0 && segundos3 === 0 )
		{
			nodosPantalla3[ 0 ].innerHTML = (minutos3 - 1).toString() + ":0" + segundos3.toString();
		}
		else if ( segundos3 !== 0 )
		{
			if ( segundos3 < 10 )
			{
				nodosPantalla3[ 0 ].innerHTML = (minutos3 - 1).toString() + ":0" + segundos3.toString();
			}
			else
			{
				nodosPantalla3[ 0 ].innerHTML = (minutos3 - 1).toString() + ":" + segundos3.toString();
			}
			pararReloj3();
			segundos3 --;
			tiempo3 = setTimeout(actualizarReloj3,t3);
			bCondicion3 = false;
		}
		else
		{
			minutos3 --;
			segundos3 = 59;
			nodosPantalla3[ 0 ].innerHTML = (minutos3 - 1).toString() + ":" + segundos3.toString();
			pararReloj3();
			tiempo3 = setTimeout(actualizarReloj3,t3);
			bCondicion3 = false;
		}
	}
	function reanudarReloj3()
	{
		if (bCondicion3 && !bCondicionInicio2)
		{
			tiempo3 = setTimeout(actualizarReloj3,t3);
		}
		else if (bCondicionInicio || !bCondicion3)
		{
			textoDescripcion("No se puede reanudar el reloj 3 si ya está en funcionamiento o no se ha iniciado");
		}
	}
	switch ( this.innerHTML )
	{
		case "Establecer 10 min":
			establecerReloj3();
		break;
		
		case "Iniciar":
			iniciarReloj3();
		break;
		
		case "Parar":
			pararReloj3();
		break;
		
		case "Reanudar":
			reanudarReloj3();
		break;
	}
}

var tiempo4,bCondicionRefrescar,bCondicionAlarma,bCondicion4;
function Acciones4()
{
	nodosPantalla4 = document.getElementsByClassName( "Pantalla4" );
	function iniciarReloj4()
	{
		pararReloj4();
		momentoActual4 = new Date();
		hora4 = momentoActual4.getHours();
		minuto4 = momentoActual4.getMinutes();
		segundo4 = momentoActual4.getSeconds();
		if ( hora4 < 10 )
		{
			hora4 = "0" + hora4.toString();
		}
		if ( minuto4 < 10 )
		{
			minuto4 = "0" + minuto4.toString();
		}
		if ( segundo4 < 10 )
		{
			segundo4 = "0" + segundo4.toString();
		}
		nodosPantalla4[ 0 ].innerHTML = hora4 + ":" + minuto4 + ":" + segundo4;
		t4 = 1000;
		bCondicionRefrescar = false;
		bCondicionAlarma = false;
		tiempo4 = setTimeout(actualizarReloj4,t4);
	}
	function actualizarReloj4()
	{
		pararReloj4();
		momentoActual4 = new Date();
		hora4 = momentoActual4.getHours();
		minuto4 = momentoActual4.getMinutes();
		segundo4 = momentoActual4.getSeconds();
		if ( hora4 < 10 )
		{
			hora4 = "0" + hora4.toString();
		}
		if ( minuto4 < 10 )
		{
			minuto4 = "0" + minuto4.toString();
		}
		if ( segundo4 < 10 )
		{
			segundo4 = "0" + segundo4.toString();
		}
		if ( !bCondicionRefrescar )
		{
			nodosPantalla4[ 0 ].innerHTML = hora4 + ":" + minuto4 + ":" + segundo4;
			t4 = 1000;
			tiempo4 = setTimeout(actualizarReloj4,t4);
		}
		else
		{
			nodosPantalla4[ 0 ].innerHTML = hora4 + ":" + minuto4;
			tiempo4 = setTimeout(actualizarReloj4,t4);
		}
		if ( bCondicionAlarma )
		{
			if ( parseInt(segundo4) === 0 )
			{
				alert( "Ha pasado 1 minuto" );
			}
		}
		bCondicion4 = false;
	}
	function pararReloj4()
	{
		clearTimeout( tiempo4 );
		bCondicion4 = true;
	}
	function refrescarMinutoReloj4()
	{
		if (!bCondicion4)
		{
			bCondicionRefrescar = true;
			tiempo4 = setTimeout(actualizarReloj4,t4);
		}
		else
		{
			textoDescripcion("No se puede refrescar al minuto al reloj 4 si no está en funcionamiento");
		}
	}
	function alarmaReloj4()
	{
		if (!bCondicion4)
		{
			bCondicionAlarma = true;
			tiempo4 = setTimeout(actualizarReloj4,t4);
		}
		else
		{
			textoDescripcion("No se puede introducir alarma al minuto al reloj 4 si no está en funcionamiento");
		}
	}
	switch ( this.innerHTML )
	{
		case "Obtener hora e iniciar":
			iniciarReloj4();
		break;
		
		case "Pausar":
			pararReloj4();
		break;
		
		case "Refrescar al minuto":
			refrescarMinutoReloj4();
		break;
		
		case "Alarma dentro de 1 minuto":
			alarmaReloj4();
		break;
	}
}
