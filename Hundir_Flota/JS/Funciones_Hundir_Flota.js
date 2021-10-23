
var nodosCrear, nodosSituarFlotaIniciar, nodosDescripcion, filas, columnas, arCuadricula0, arCuadricula2, arLongBarcos, numTotal, FilaImpacto, ColumnaImpacto;

function init()
{	
	nodosCrear = document.getElementsByClassName ( 'Crear' );
	nodosCrear[ 0 ].onclick = CrearTablero;
	
	nodosSituarFlotaIniciar = document.getElementsByClassName ( 'Situar_Flota_Iniciar' );
	
	nodosDescripcion = document.getElementsByClassName ( 'Descripcion' );
	
	nodosCrear[ 0 ].onmouseenter = CambiaFondo;
	nodosCrear[ 0 ].onmouseleave = CambiaFondo;
	
	nodosSituarFlotaIniciar[ 0 ].onmouseenter = CambiaFondo;
	nodosSituarFlotaIniciar[ 1 ].onmouseenter = CambiaFondo;
	nodosSituarFlotaIniciar[ 2 ].onmouseenter = CambiaFondo;
	
	nodosSituarFlotaIniciar[ 0 ].onmouseleave = CambiaFondo;
	nodosSituarFlotaIniciar[ 1 ].onmouseleave = CambiaFondo;
	nodosSituarFlotaIniciar[ 2 ].onmouseleave = CambiaFondo;
	
	function CambiaFondo()
	{
		this.classList.toggle("CambiaFondo");
	}
}

function CrearTablero()
{
	var nodosDatoDimension, nodosTablero, nodosFila, Fila, Columna;
	
	nodosCrear[ 0 ].onclick = null;
	
	nodosDatoDimension = document.getElementsByClassName ( 'DatoDimension' );
	filas = parseInt(nodosDatoDimension[ 0 ].innerHTML);
	columnas = parseInt(nodosDatoDimension[ 1 ].innerHTML);
	
	console.log(filas);
	console.log(columnas);
	
	nodosTablero = document.getElementsByClassName ( 'Tablero' );
	
	for ( i = 0; i < 4; i++ )
	{
		for ( j = 0; j < filas; j++ )
		{
			Fila = document.createElement('div');
			Fila.className = 'Fila';
			
			nodosTablero[ i ].appendChild(Fila);
			
			for ( k = 0; k < columnas; k++)
			{	
				Columna = document.createElement('div');
				Columna.className = 'Columna';
				Columna.classList.add("_" + i.toString())
				Columna.classList.add("_" + j.toString() + "_" +  k.toString());
				
				nodosFila = document.getElementsByClassName ( 'Fila' );
				nodosFila[ j + i*filas ].appendChild(Columna);
			}
		}
	}
	nodosSituarFlotaIniciar[ 0 ].onclick = SituarFlota;
}

function SituarFlota()
{
	var arNomBarcos, nodosColumnas2, arCuadricula00, arCuadricula22, contador1, contador2, contador3, Orientacion, PosicX, PosicY;
	var sumaBarcosMaquina, contGeneral, arPosib, contPosib, x1, x2, X, contAbajo, contArriba, contDerecha, contIzquierda;
	
	nodosSituarFlotaIniciar[ 0 ].onclick = null;
	
	arNomBarcos = ["Portaviones ( 6 )", "Crucero ( 5 )","Destructor ( 4 )" , "Fragata ( 4 )", "Submarino ( 3 )", "Corbeta ( 2 )"];
	arLongBarcos = [ 6, 5, 4, 4, 3, 2];
	numTotal = arLongBarcos.reduce((a, b) => a + b, 0);
	
	arCuadricula0 = [];
	arCuadricula2 = [];
	
	for ( i = 0; i < filas; i++)
	{
		arCuadricula00 = [];
		arCuadricula22 = [];
		for ( j = 0; j < columnas; j++)
		{
			arCuadricula00[ j ] = 0;
			arCuadricula22[ j ] = 0;
		}
		arCuadricula0[ i ] = arCuadricula00;
		arCuadricula2[ i ] = arCuadricula22;
	}
	
	console.table(arCuadricula0);
	console.table(arCuadricula2);
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	sumaBarcosMaquina = 0;
	contGeneral = 0;
	while ( sumaBarcosMaquina < numTotal )
	{
		x1 = Math.floor( Math.random() * ( filas ));
		x2 = Math.floor( Math.random() * ( columnas ));
		if ( arCuadricula0[ x1 ][ x2 ] != "x" )
		{
			contAbajo = 0;
			contArriba = 0;
			contDerecha = 0;
			contIzquierda = 0;
			//Esq sup izq
			if ( x1 === 0 && x2 === 0 )
			{
				if ( arCuadricula0[ x1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 + 1 ] === 0 )
				{
					contDerecha = -1;
					contAbajo = -1;
					for ( i = x2; i < columnas; i++ )
					{
						if ( contDerecha === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === columnas - 1 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 ][ i + 1 ] === 0 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 + 1 ][ i ] === "x" || arCuadricula0[ x1 + 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 ][ i + 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i < filas; i++ )
					{
						if ( contAbajo === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === filas - 1 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 + 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 ] === 0 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 + 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 + 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Esq sup drc
			else if ( x1 === 0 && x2 === columnas - 1 )
			{
				if ( arCuadricula0[ x1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 - 1 ] === 0 )
				{
					contIzquierda = -1;
					contAbajo = -1;
					for ( i = x2; i > -1; i-- )
					{
						if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i - 1 ] === 0 && arCuadricula0[ x1 ][ i - 1 ] === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 + 1 ][ i ] === "x" || arCuadricula0[ x1 + 1 ][ i - 1 ] === "x" || arCuadricula0[ x1 ][ i - 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i < filas; i++ )
					{
						if ( contAbajo === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === filas - 1 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 ] === 0 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Esq inf izq
			else if ( x1 === filas - 1 && x2 === 0 )
			{
				if ( arCuadricula0[ x1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 + 1 ] === 0 )
				{
					contDerecha = -1;
					contArriba = -1;
					for ( i = x2; i < columnas; i++ )
					{
						if ( contDerecha === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === columnas - 1 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 ][ i + 1 ] === 0 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 ][ i + 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i > -1; i-- )
					{
						if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 + 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 ] === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 + 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 + 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Esq inf drc
			else if ( x1 === filas - 1 && x2 === columnas - 1 )
			{
				if ( arCuadricula0[ x1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 - 1 ] === 0 )
				{
					contIzquierda = -1;
					contArriba = -1;
					for ( i = x2; i > -1; i-- )
					{
						if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i - 1 ] === 0 && arCuadricula0[ x1 ][ i - 1 ] === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i - 1 ] === "x" || arCuadricula0[ x1 ][ i - 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i > -1; i-- )
					{
						if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 ] === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Lado arriba
			else if ( x1 === 0 )
			{
				if ( arCuadricula0[ x1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 + 1 ] === 0 )
				{
					contIzquierda = -1;
					contDerecha = -1;
					contAbajo = -1;
					for ( i = x2; i > -1; i-- )
					{
						if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i - 1 ] === 0 && arCuadricula0[ x1 ][ i - 1 ] === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 + 1 ][ i ] === "x" || arCuadricula0[ x1 + 1 ][ i - 1 ] === "x" || arCuadricula0[ x1 ][ i - 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x2; i < columnas; i++ )
					{
						if ( contDerecha === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === columnas - 1 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 && arCuadricula0[ x1 + 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 ][ i + 1 ] === 0 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 + 1 ][ i ] === "x" || arCuadricula0[ x1 + 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 ][ i + 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i < filas; i++ )
					{
						if ( contAbajo === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === filas - 1 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 + 1 ] === 0 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 ] === "x" || arCuadricula0[ i ][ x2 + 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 + 1 ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Lado abajo
			else if ( x1 === filas - 1 )
			{
				if ( arCuadricula0[ x1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 + 1 ] === 0 )
				{
					contIzquierda = -1;
					contDerecha = -1;
					contArriba = -1;
					for ( i = x2; i > -1; i-- )
					{
						if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i - 1 ] === 0 && arCuadricula0[ x1 ][ i - 1 ] === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i - 1 ] === "x" || arCuadricula0[ x1 ][ i - 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x2; i < columnas; i++ )
					{
						if ( contDerecha === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === columnas - 1 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 ][ i + 1 ] === 0 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 ][ i + 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i > -1; i-- )
					{
						if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 ] === 0 && arCuadricula0[ i - 1 ][ x2 + 1 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 ] === "x" || arCuadricula0[ i - 1 ][ x2 + 1 ] === "x" || arCuadricula0[ i ][ x2 + 1 ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Lado izq
			else if ( x2 === 0 )
			{
				if ( arCuadricula0[ x1 - 1 ][ x2 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 ] === 0 && arCuadricula0[ x1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 + 1 ] === 0 )
				{
					contArriba = -1;
					contAbajo = -1;
					contDerecha = -1;
					for ( i = x1; i > -1; i-- )
					{
						if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 + 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 ] === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 + 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 + 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i < filas; i++ )
					{
						if ( contAbajo === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === filas - 1 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 + 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 ] === 0 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 + 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 + 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
					for ( i = x2; i < columnas; i++ )
					{
						if ( contDerecha === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === columnas - 1 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 ][ i + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 ][ i + 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Lado drc
			else if ( x2 === columnas - 1 )
			{
				if ( arCuadricula0[ x1 - 1 ][ x2 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 ] === 0 && arCuadricula0[ x1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 - 1 ] === 0 )
				{
					contArriba = -1;
					contAbajo = -1;
					contIzquierda = -1;
					for ( i = x1; i > -1; i-- )
					{
						if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 ] === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i < filas; i++ )
					{
						if ( contAbajo === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === filas - 1 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 ] === 0 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 ] === "x" )
						{
							break;
						}
					}
					for ( i = x2; i > -1; i-- )
					{
						if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i - 1 ] === 0 && arCuadricula0[ x1 ][ i - 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i - 1 ] === "x" || arCuadricula0[ x1 ][ i - 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i ] === "x" )
						{
							break;
						}
					}
				}
			}
			//Resto
			else
			{
				if ( arCuadricula0[ x1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 - 1 ][ x2 + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 - 1 ] === 0 && arCuadricula0[ x1 + 1 ][ x2 + 1 ] === 0 )
				{
					contArriba = -1;
					contAbajo = -1;
					contIzquierda = -1;
					contDerecha = -1;
					for ( i = x1; i > -1; i-- )
					{
						if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i - 1 ][ x2 ] === 0 && arCuadricula0[ i - 1 ][ x2 + 1 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 )
						{
							contArriba++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i - 1 ][ x2 ] === "x" || arCuadricula0[ i - 1 ][ x2 + 1 ] === "x" || arCuadricula0[ i ][ x2 + 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x1; i < filas; i++ )
					{
						if ( contAbajo === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === filas - 1 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 ] === 0 && arCuadricula0[ i ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 - 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 ] === 0 && arCuadricula0[ i ][ x2 + 1 ] === 0 && arCuadricula0[ i + 1 ][ x2 + 1 ] === 0 )
						{
							contAbajo++;
						}
						else if ( arCuadricula0[ i ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 - 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 ] === "x" || arCuadricula0[ i ][ x2 + 1 ] === "x" || arCuadricula0[ i + 1 ][ x2 + 1 ] === "x" )
						{
							break;
						}
					}
					for ( i = x2; i > -1; i-- )
					{
						if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i - 1 ] === 0 && arCuadricula0[ x1 ][ i - 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 )
						{
							contIzquierda++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i - 1 ] === "x" || arCuadricula0[ x1 ][ i - 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i ] === "x" )
						{
							break;
						}
					}
					for ( i = x2; i < columnas; i++ )
					{
						if ( contDerecha === arLongBarcos[ contGeneral ] - 1 )
						{
							break;
						}
						else if ( i === columnas - 1 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i ] === 0 && arCuadricula0[ x1 - 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 ][ i + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i + 1 ] === 0 && arCuadricula0[ x1 + 1 ][ i ] === 0 )
						{
							contDerecha++;
						}
						else if ( arCuadricula0[ x1 - 1 ][ i ] === "x" || arCuadricula0[ x1 - 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 ][ i + 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i + 1 ] === "x" || arCuadricula0[ x1 + 1 ][ i ] === "x" )
						{
							break;
						}
					}
				}
			}
			arPosib = [];
			contPosib = 0;
			if ( contAbajo === arLongBarcos[ contGeneral ] - 1  )
			{
				arPosib[ contPosib ] = 0;
				contPosib++;
			}
			if ( contArriba === arLongBarcos[ contGeneral ] - 1 )
			{
				arPosib[ contPosib ] = 1;
				contPosib++;
			}
			if ( contDerecha === arLongBarcos[ contGeneral ] - 1 ) 
			{
				arPosib[ contPosib ] = 2;
				contPosib++;
			}
			if ( contIzquierda === arLongBarcos[ contGeneral ] - 1 ) 
			{
				arPosib[ contPosib ] = 3;
				contPosib++;
			}
			
			X = Math.floor( Math.random() * ( arPosib.length ) );
			
			if ( arPosib[ X ] === 0 )
			{
				for ( i = x1; i < x1 + arLongBarcos[ contGeneral ]; i++ )
				{
					arCuadricula0[ i ][ x2 ] = "x";
				}
				contGeneral++;
				sumaBarcosMaquina += arLongBarcos[ contGeneral ];
			}
			else if ( arPosib[ X ] === 1 )
			{
				for ( i = x1; i > x1 - arLongBarcos[ contGeneral ]; i-- )
				{
					arCuadricula0[ i ][ x2 ] = "x";
				}
				contGeneral++;
				sumaBarcosMaquina += arLongBarcos[ contGeneral ];
			}
			else if ( arPosib[ X ] === 2 )
			{
				for ( i = x2; i < x2 + arLongBarcos[ contGeneral ]; i++ )
				{
					arCuadricula0[ x1 ][ i ] = "x";
				}
				contGeneral++;
				sumaBarcosMaquina += arLongBarcos[ contGeneral ];
			}
			else if ( arPosib[ X ] === 3 )
			{
				for ( i = x2; i > x2 - arLongBarcos[ contGeneral ]; i-- )
				{
					arCuadricula0[ x1 ][ i ] = "x";
				}
				contGeneral++;
				sumaBarcosMaquina += arLongBarcos[ contGeneral ];
			}
		}
	}
	console.table(arCuadricula0);
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	nodosColumnas2 = document.getElementsByClassName ( '_2' );

	for ( i = 0; i < nodosColumnas2.length; i++ )
	{
		nodosColumnas2[ i ].onclick = DimensionesCuadricula;
	}
	
	contador1 = 0;
	contador2 = 0;
	contador3 = 0;
	nodosDescripcion[ 0 ].innerHTML = arNomBarcos[ contador1 ];
	function DimensionesCuadricula()
	{
		var Dimension, arPosic, contador, bCondicion;
		
		Dimension = this.className;
		arPosic = ["","",""];
		contador = -1;
		for ( i = 0; i < Dimension.length; i++)
		{
			if ( Dimension[ i ] === "_" )
			{
				contador++;
				bCondicion = true;
			}
			if ( bCondicion && Dimension[ i ] !== "_") 
			{
				arPosic[ contador ] = arPosic[ contador ] + Dimension[ i ];
			}
		}
		console.log("Cuadricula: " + arPosic[ 0 ] + " Fila: " + arPosic[ 1 ] + " Columna: " + arPosic[ 2 ] );
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		if ( contador3 < numTotal )
		{
			if ( contador2 === 1 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
			{
				if ( parseInt(arPosic[ 1 ]) === PosicY )
				{
					Orientacion = "H";
				}
				else if ( parseInt(arPosic[ 2 ]) === PosicX )
				{
					Orientacion = "V";
				}
			}
			//Esq sup izq
			if ( parseInt(arPosic[ 1 ]) === 0 && parseInt(arPosic[ 2 ]) === 0 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === "x" )
						{
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
						}
					}
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === "x" )
						{
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Esq sup drc
			else if ( parseInt(arPosic[ 1 ]) === 0 && parseInt(arPosic[ 2 ]) === columnas - 1 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === "x" )
						{
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
						}
					}
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === "x" )
						{
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Esq inf izq
			else if ( parseInt(arPosic[ 1 ]) === filas - 1 && parseInt(arPosic[ 2 ]) === 0 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === "x" )
						{
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
						}
					}
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === "x" )
						{
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Esq inf drc
			else if ( parseInt(arPosic[ 1 ]) === filas - 1 && parseInt(arPosic[ 2 ]) === columnas - 1 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === "x" )
						{
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
						}
					}
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === "x" )
						{
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Lado arriba
			else if ( parseInt(arPosic[ 1 ]) === 0 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === "y" )
						{
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === "y" )
						{
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === "x" )
						{
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Lado abajo
			else if ( parseInt(arPosic[ 1 ]) === filas - 1 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === "y" )
						{
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === "y" )
						{
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === "x" )
						{
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Lado izq
			else if ( parseInt(arPosic[ 2 ]) === 0 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === "y" )
						{
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === "y" )
						{
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === "x" )
						{
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = "y";
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Lado drc
			else if ( parseInt(arPosic[ 2 ]) === columnas - 1 )
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === "y" )
						{
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === "y" )
						{
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
					}
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === "x" )
						{
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = "y";
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			//Resto
			else
			{
				if ( contador2 === 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === 0 )
				{
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
					}
					if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
					{
						arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
					}
					PosicY = parseInt(arPosic[ 1 ]);
					PosicX = parseInt(arPosic[ 2 ]);
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
				else if ( contador2 != 0 && arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] === contador3 )
				{
					if ( Orientacion === "H" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - 1] === "y" )
						{
							if ( parseInt(arPosic[ 2 ]) + contador2 + 1 < columnas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + contador2 + 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) + 1] === "y" )
						{
							if ( parseInt(arPosic[ 2 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ]) - contador2 - 1] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					else if ( Orientacion === "V" )
					{
						if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] <= contador3 )
						{
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
							}
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ])] === "y" )
						{
							if ( parseInt(arPosic[ 1 ]) - contador2 - 1 >= 0 )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) - contador2 - 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) + 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
						else if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ])] === "y" )
						{
							if ( parseInt(arPosic[ 1 ]) + contador2 + 1 < filas )
							{
								if ( arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === contador3 || arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] === 0 )
								{
									arCuadricula2[parseInt(arPosic[ 1 ]) + contador2 + 1][parseInt(arPosic[ 2 ])] = contador3 + 1;
								}
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) - 1] = "y";
							}
							if ( arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] === 0 )
							{
								arCuadricula2[parseInt(arPosic[ 1 ]) - 1][parseInt(arPosic[ 2 ]) + 1] = "y";
							}
						}
					}
					arCuadricula2[parseInt(arPosic[ 1 ])][parseInt(arPosic[ 2 ])] = "x";
					contador2++;
					contador3++;
					this.classList.toggle("Azul");
					this.onclick = null;
				}
			}
			console.table(arCuadricula2);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		if ( contador2 === arLongBarcos[ contador1 ] )
		{
			if ( contador3 === numTotal )
			{
				nodosDescripcion[ 0 ].innerHTML = "Descripcion";
				for ( i = 0; i < nodosColumnas2.length; i++ )
				{
					nodosColumnas2[ i ].onclick = null;
				}
				nodosSituarFlotaIniciar[ 1 ].onclick = IniciarBatalla;
			}
			else
			{
				contador1++;
				contador2 = 0;
				nodosDescripcion[ 0 ].innerHTML = arNomBarcos[ contador1 ];
			}
		}
	}
}

function IniciarBatalla()
{
	var nodoReloj, horas, minutos, segundos, t, tiempo;
	var arCuadricula1, arCuadricula3, nodosColumnas3;
	var contadorVictoria, bHumano, arLongBarcosMaq, bMaquina;
	
	nodosSituarFlotaIniciar[ 1 ].onclick = null;
	
	nodosSituarFlotaIniciar[ 2 ].onclick = Imagen;
	
	function Imagen()
	{
		var clase, nodo;
		for ( i = 0; i < filas; i++)
		{
			for ( j = 0; j < columnas; j++)
			{
				if ( arCuadricula0[ i ][ j ] === "x" )
				{
					clase = 'Columna ' + '_0 ' + '_' + i.toString() + '_' + j.toString();
					nodo = document.getElementsByClassName ( clase );
					nodo[ 0 ].classList.toggle("Azul");
				}
			}
		}
	}
	
	nodoReloj = document.getElementsByClassName( "Reloj" );
	
	horas = 0;
	minutos = 0;
	segundos = 0;
	t = 1000;
	tiempo = setTimeout( ActualizarReloj, t );
	
	function ActualizarReloj()
	{
		var segundosPantalla, minutosPantalla, horasPantalla;
		
		segundosPantalla = segundos.toString();
		minutosPantalla = minutos.toString();
		horasPantalla = horas.toString();
		
		if ( segundos === 60 )
		{
			segundos = 0;
			minutos++;
		}
		if ( minutos === 60 )
		{
			minutos = 0;
			horas++;
		}
		if ( segundos < 10 )
		{
			segundosPantalla = "0" + segundos.toString();
		}
		if ( minutos < 10 )
		{
			minutosPantalla = "0" + minutos.toString();
		}
		if ( horas < 10 )
		{
			horasPantalla = "0" + horas.toString();
		}
		
		nodoReloj[ 0 ].innerHTML = horasPantalla + ":" + minutosPantalla + ":" + segundosPantalla;
		segundos++;
		tiempo = setTimeout( ActualizarReloj, t );
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	arCuadricula1 = [];
	arCuadricula3 = [];
	
	for ( i = 0; i < filas; i++)
	{
		arCuadricula11 = [];
		arCuadricula33 = [];
		for ( j = 0; j < columnas; j++)
		{
			arCuadricula11[ j ] = 0;
			arCuadricula33[ j ] = 0;
		}
		arCuadricula1[ i ] = arCuadricula11;
		arCuadricula3[ i ] = arCuadricula33;
	}
	
	nodosColumnas3 = document.getElementsByClassName ( '_3' );

	for ( i = 0; i < nodosColumnas3.length; i++ )
	{
		nodosColumnas3[ i ].onclick = disparoHumano;
	}
	
	contadorVictoria = 0;
	bHumano = true;
	function disparoHumano()
	{
		var Dimension, arPosic, contador, bCondicion;
		
		if (bHumano)
		{
			Dimension = this.className;
			arPosic = ["","",""];
			contador = -1;
			for ( i = 0; i < Dimension.length; i++)
			{
				if ( Dimension[ i ] === "_" )
				{
					contador++;
					bCondicion = true;
				}
				if ( bCondicion && Dimension[ i ] !== "_") 
				{
					arPosic[ contador ] = arPosic[ contador ] + Dimension[ i ];
				}
			}
			if ( arCuadricula3[ arPosic[ 1 ] ][ arPosic[ 2 ] ] === 0 && arCuadricula0[ arPosic[ 1 ] ][ arPosic[ 2 ] ] === "x" )
			{
				this.classList.toggle("Naranja");
				arCuadricula3[ arPosic[ 1 ] ][ arPosic[ 2 ] ] = "N";
				contadorVictoria++;
				if ( contadorVictoria === numTotal )
				{
					alert( "Victoria Humana" );
					location.reload();
				}
			}
			else if ( arCuadricula3[ arPosic[ 1 ] ][ arPosic[ 2 ] ] === 0 && arCuadricula0[ arPosic[ 1 ] ][ arPosic[ 2 ] ] !== "x" )
			{
				bHumano = false;
				this.classList.toggle("Blanco");
				arCuadricula3[ arPosic[ 1 ] ][ arPosic[ 2 ] ] = "B";
				disparoMaquina();
			}
		}
	}
	
	arLongBarcosMaq = arLongBarcos.slice();
	bMaquina = false;
	function disparoMaquina()
	{
		var contIzq, contDrc, contArr, contAbj, A, B, C, D, AB, CD;
		var longMayor, contImpArr, contImpAbj, contImpIzq, contImpDrc, arFilArr, arFilAbj, arColIzq, arColDrc;
		var contImpVert, contImpHorz, arVert, arHorz, CONTARR, CONTABJ, CONTIZQ, CONTDRC;
		var filMax, filMin;
		var probMax, arFilProbMax, arColProbMax, contadorAr, n, Fila, Columna, clase, nodo;
		
		// Calculamos en cada caso la Matriz de Probabilidades del Modo Caza y del Modo Destructor
		if ( !bMaquina )
		{
			for ( i = 0; i < filas; i++ )
			{
				for ( j = 0; j < columnas; j++ )
				{
					if ( arCuadricula1[ i ][ j ] !== "N" && arCuadricula1[ i ][ j ] !== "B" )
					{
						arCuadricula1[ i ][ j ] = 0;
					}
				}
			}
			for ( k = 0; k < arLongBarcosMaq.length; k++ )
			{
				for ( i = 0; i < filas; i++ )
				{
					for ( j = 0; j < columnas; j++ )
					{
						if ( arCuadricula1[ i ][ j ] !== "N" && arCuadricula1[ i ][ j ] !== "B" )
						{
							contIzq = 0;
							contDrc = 0;
							contArr = 0;
							contAbj = 0;
							for ( l = j - 1; l > -1; l-- )
							{
								if ( arCuadricula1[ i ][ l ] === "N" || arCuadricula1[ i ][ l ] === "B" )
								{
									if ( arCuadricula1[ i ][ l ] === "N" && contIzq >= 1 )
									{
										contIzq--;
									}
									break;
								}
								else
								{
									contIzq++;
								}
							}
							for ( l = j + 1; l < columnas; l++ )
							{
								if ( arCuadricula1[ i ][ l ] === "N" || arCuadricula1[ i ][ l ] === "B" )
								{
									if ( arCuadricula1[ i ][ l ] === "N" && contDrc >= 1 )
									{
										contDrc--;
									}
									break;
								}
								else
								{
									contDrc++;
								}
							}
							for ( l = i - 1; l > - 1; l-- )
							{
								if ( arCuadricula1[ l ][ j ] === "N" || arCuadricula1[ l ][ j ] === "B" )
								{
									if ( arCuadricula1[ l ][ j ] === "N" && contArr >= 1 )
									{
										contArr--;
									}
									break;
								}
								else
								{
									contArr++;
								}
							}
							for ( l = i + 1; l < filas; l++ )
							{
								if ( arCuadricula1[ l ][ j ] === "N" || arCuadricula1[ l ][ j ] === "B" )
								{
									if ( arCuadricula1[ l ][ j ] === "N" && contAbj >= 1 )
									{
										contAbj--;
									}
									break;
								}
								else
								{
									contAbj++;
								}
							}
							if ( contIzq > arLongBarcosMaq[ k ] - 1 )
							{
								contIzq = arLongBarcosMaq[ k ] - 1;
							}
							if ( contDrc > arLongBarcosMaq[ k ] - 1 )
							{
								contDrc = arLongBarcosMaq[ k ] - 1;
							}
							if ( contArr > arLongBarcosMaq[ k ] - 1 )
							{
								contArr = arLongBarcosMaq[ k ] - 1;
							}
							if ( contAbj > arLongBarcosMaq[ k ] - 1 )
							{
								contAbj = arLongBarcosMaq[ k ] - 1;
							}
							A = 0;
							B = 0;
							C = 0;
							D = 0;
							if ( ( contIzq + contDrc + 1 ) >= ( arLongBarcosMaq[ k ] ) )
							{
								A = Math.floor( ( contIzq + contDrc + 1 )/( arLongBarcosMaq[ k ] ) );
							}
							if ( ( contIzq + contDrc + 1 ) >= ( arLongBarcosMaq[ k ] ) )
							{
								B = ( contIzq + contDrc + 1 )%( arLongBarcosMaq[ k ] );
							}
							if ( ( contArr + contAbj + 1 ) >= ( arLongBarcosMaq[ k ] ) )
							{
								C = Math.floor( ( contArr + contAbj + 1 )/( arLongBarcosMaq[ k ] ) );
							}
							if ( ( contArr + contAbj + 1 ) >= ( arLongBarcosMaq[ k ] ) )
							{
								D = ( contArr + contAbj + 1 )%( arLongBarcosMaq[ k ] );
							}
							AB = A + B;
							CD = C + D;
							arCuadricula1[ i ][ j ] = AB + CD + arCuadricula1[ i ][ j ];
						}
					}
				}
			}
		}
		else if ( bMaquina )
		{
			longMayor = Math.max.apply( null, arLongBarcosMaq );
			contImpArr = 0;
			contImpAbj = 0;
			contImpIzq = 0;
			contImpDrc = 0;
			arFilArr = [];
			arFilAbj = [];
			arColIzq = [];
			arColDrc = [];
			arFilArr[ 0 ] = FilaImpacto;
			arFilAbj[ 0 ] = FilaImpacto;
			arColIzq[ 0 ] = ColumnaImpacto;
			arColDrc[ 0 ] = ColumnaImpacto;
			for ( l = FilaImpacto - 1; l > - 1; l-- )
			{
				if ( arCuadricula1[ l ][ ColumnaImpacto ] === "N" )
				{
					contImpArr++;
					arFilArr[ contImpArr ] = l;
				}
				else if ( arCuadricula1[ l ][ ColumnaImpacto ] !== "N" )
				{
					break;
				}
			}
			for ( l = FilaImpacto + 1; l < filas; l++ )
			{
				if ( arCuadricula1[ l ][ ColumnaImpacto ] === "N" )
				{
					contImpAbj++;
					arFilAbj[ contImpAbj ] = l;
				}
				else if ( arCuadricula1[ l ][ ColumnaImpacto ] !== "N" )
				{
					break;
				}
			}
			for ( l = ColumnaImpacto - 1; l > -1; l-- )
			{
				if ( arCuadricula1[ FilaImpacto ][ l ] === "N" )
				{
					contImpIzq++;
					arColIzq[ contImpIzq ] = l;
				}
				else if ( arCuadricula1[ FilaImpacto ][ l ] !== "N" )
				{
					break;
				}
			}
			for ( l = ColumnaImpacto + 1; l < columnas; l++ )
			{
				if ( arCuadricula1[ FilaImpacto ][ l ] === "N" )
				{
					contImpDrc++;
					arColDrc[ contImpDrc ] = l;
				}
				else if ( arCuadricula1[ FilaImpacto ][ l ] !== "N" )
				{
					break;
				}
			}
			contImpVert = contImpArr + contImpAbj + 1;
			contImpHorz = contImpIzq + contImpDrc + 1;
			arVert = arFilArr.concat( arFilAbj );
			arHorz = arColIzq.concat( arColDrc );
			if ( contImpVert === contImpHorz )
			{
				CONTARR = 0;
				for ( l = FilaImpacto - 1; l > - 1; l-- )
				{
					if ( l > 0 )
					{
						if ( arCuadricula1[ l - 1 ][ ColumnaImpacto ] === "N" )
						{
							break;
						}
					}
					if ( CONTARR === 1 || arCuadricula1[ l ][ ColumnaImpacto ] === "B" )
					{
						break;
					}
					else if ( arCuadricula1[ l ][ ColumnaImpacto ] === 0 )
					{
						arCuadricula1[ l ][ ColumnaImpacto ] = 1;
						CONTARR++;
					}
				}
				CONTABJ = 0;
				for ( l = FilaImpacto + 1; l < filas; l++ )
				{
					if ( l < filas - 1 )
					{
						if ( arCuadricula1[ l + 1 ][ ColumnaImpacto ] === "N" )
						{
							break;
						}
					}
					if ( CONTABJ === 1 || arCuadricula1[ l ][ ColumnaImpacto ] === "B" )
					{
						break;
					}
					else if ( arCuadricula1[ l ][ ColumnaImpacto ] === 0 )
					{
						arCuadricula1[ l ][ ColumnaImpacto ] = 1;
						CONTABJ++;
					}
				}
				CONTIZQ = 0;
				for ( l = ColumnaImpacto - 1; l > -1; l-- )
				{
					if ( l > 0 )
					{
						if ( arCuadricula1[ FilaImpacto ][ l - 1 ] === "N" )
						{
							break;
						}
					}
					if ( CONTIZQ === 1 || arCuadricula1[ FilaImpacto ][ l ] === "B" )
					{
						break;
					}
					else if ( arCuadricula1[ FilaImpacto ][ l ] === 0 )
					{
						arCuadricula1[ FilaImpacto ][ l ] = 1;
						CONTIZQ++;
					}
				}
				CONTDRC = 0;
				for ( l = ColumnaImpacto + 1; l < columnas; l++ )
				{
					if ( l < columnas - 1 )
					{
						if ( arCuadricula1[ FilaImpacto ][ l + 1 ] === "N" )
						{
							break;
						}
					}
					if ( CONTDRC === 1 || arCuadricula1[ FilaImpacto ][ l ] === "B" )
					{
						break;
					}
					else if ( arCuadricula1[ FilaImpacto ][ l ] === 0 )
					{
						arCuadricula1[ FilaImpacto ][ l ] = 1;
						CONTDRC++;
					}
				}
			}
			else if ( contImpVert > contImpHorz )
			{
				filMax = Math.max.apply( null, arVert );
				filMin = Math.min.apply( null, arVert );
				if ( filMax + 1 < filas && filMin - 1 > - 1 )
				{
					if ( (filMin === 0 && arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] === "B") || (arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] === "B" && filMax === filas - 1) || (arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] === "B" && arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] === "B" ) || (contImpVert === longMayor) )
					{
						bMaquina = false;
						for ( i = 0; i < arLongBarcosMaq.length; i++ )
						{
							if ( arLongBarcosMaq[ i ] === contImpVert )
							{
								arLongBarcosMaq.splice(i,1);
							}
						}
					}
					else
					{
						if ( arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] !== "B" )
						{
							arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] = 1;
						}
						if ( arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] !== "B" )
						{
							arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] = 1;
						}
					}
				}
				else if ( filMin === 0 )
				{
					if ( arCuadricula1[ filMin ][ ColumnaImpacto ] === "N" && arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] === "B" )
					{
						bMaquina = false;
						for ( i = 0; i < arLongBarcosMaq.length; i++ )
						{
							if ( arLongBarcosMaq[ i ] === contImpVert )
							{
								arLongBarcosMaq.splice(i,1);
							}
						}
					}
					else if ( arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] !== "B" )
					{
						arCuadricula1[ filMax + 1 ][ ColumnaImpacto ] = 1;
					}
				}
				else if ( filMax === filas - 1 )
				{
					if ( arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] === "B" && arCuadricula1[ filMax ][ ColumnaImpacto ] === "N" )
					{
						bMaquina = false;
						for ( i = 0; i < arLongBarcosMaq.length; i++ )
						{
							if ( arLongBarcosMaq[ i ] === contImpVert )
							{
								arLongBarcosMaq.splice(i,1);
							}
						}
					}
					else if ( arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] !== "B" )
					{
						arCuadricula1[ filMin - 1 ][ ColumnaImpacto ] = 1;
					}
				}
			}
			else if ( contImpVert < contImpHorz )
			{
				colMax = Math.max.apply( null, arHorz );
				colMin = Math.min.apply( null, arHorz );
				if ( colMax + 1 < columnas && colMin - 1 > - 1 )
				{
					if ( (colMin === 0 && arCuadricula1[ FilaImpacto ][ colMax + 1 ] === "B") || (arCuadricula1[ FilaImpacto ][ colMin - 1 ] === "B" && colMax === columnas - 1) || (arCuadricula1[ FilaImpacto ][ colMax + 1] === "B" && arCuadricula1[ FilaImpacto ][ colMin - 1 ] === "B" ) || (contImpHorz === longMayor) )
					{
						bMaquina = false;
						for ( i = 0; i < arLongBarcosMaq.length; i++ )
						{
							if ( arLongBarcosMaq[ i ] === contImpHorz )
							{
								arLongBarcosMaq.splice(i,1);
							}
						}
					}
					else
					{
						if ( arCuadricula1[ FilaImpacto ][ colMax + 1 ] !== "B" )
						{
							arCuadricula1[ FilaImpacto ][ colMax + 1 ] = 1;
						}
						if ( arCuadricula1[ FilaImpacto ][ colMin - 1 ] !== "B" )
						{
							arCuadricula1[ FilaImpacto ][ colMin - 1 ] = 1;
						}
					}
				}
				else if ( colMin === 0 )
				{
					if ( arCuadricula1[ FilaImpacto ][ colMin ] === "N" && arCuadricula1[ FilaImpacto ][ colMax + 1 ] === "B" )
					{
						bMaquina = false;
						for ( i = 0; i < arLongBarcosMaq.length; i++ )
						{
							if ( arLongBarcosMaq[ i ] === contImpHorz )
							{
								arLongBarcosMaq.splice(i,1);
							}
						}
					}
					else if ( arCuadricula1[ FilaImpacto ][ colMax + 1 ] !== "B" )
					{
						arCuadricula1[ FilaImpacto ][ colMax + 1 ] = 1;
					}
				}
				else if ( colMax === columnas - 1 )
				{
					if ( arCuadricula1[ FilaImpacto ][ colMin - 1 ] === "B" && arCuadricula1[ FilaImpacto ][ colMax ] === "N" )
					{
						bMaquina = false;
						for ( i = 0; i < arLongBarcosMaq.length; i++ )
						{
							if ( arLongBarcosMaq[ i ] === contImpHorz )
							{
								arLongBarcosMaq.splice(i,1);
							}
						}
					}
					else if ( arCuadricula1[ FilaImpacto ][ colMin - 1 ] !== "B" )
					{
						arCuadricula1[ FilaImpacto ][ colMin - 1 ] = 1;
					}
				}
			}
		}
		console.table(arCuadricula1);

		// Comprobamos si la máquina ha hundido todos los barcos
		if ( arLongBarcosMaq.length === 0 )
		{
			alert( "Victoria de la Máquina" );
			location.reload();
		}
		
		// Hallamos la probabilidad máxima de la Matriz
		probMax = 0;
		for ( i = 0; i < filas; i++ )
		{
			for ( j = 0; j < columnas; j++ )
			{
				if ( arCuadricula1[ i ][ j ]!== "N" && arCuadricula1[ i ][ j ]!== "B" && arCuadricula1[ i ][ j ] > probMax )
				{
					probMax = arCuadricula1[ i ][ j ];
				}
			}
		}
		
		// Hallamos las filas y columnas en las que se encuentran las probabilidades máximas en la Matriz
		arFilProbMax = [];
		arColProbMax = [];
		contadorAr = -1;
		for ( i = 0; i < filas; i++ )
		{
			for ( j = 0; j < columnas; j++ )
			{
				if ( arCuadricula1[ i ][ j ] === probMax )
				{
					contadorAr++;
					arFilProbMax[ contadorAr ] = i;
					arColProbMax[ contadorAr ] = j;
				}
			}
		}
		
		// Para realizar el disparo óptimo escogemos aleatoriamente una fila y una columna de los dos vectores con las posiciones de las probabilidades máximas de la Matriz
		n = Math.floor( Math.random() * ( arFilProbMax.length ) );
		Fila = arFilProbMax[ n ];
		Columna = arColProbMax[ n ];
		
		// "Disparamos"
		if ( arCuadricula2[ Fila ][ Columna ] !== "x" )
		{
			arCuadricula1[ Fila ][ Columna ] = "B";
			clase = 'Columna ' + '_1 ' + '_' + Fila.toString() + '_' + Columna.toString();
			nodo = document.getElementsByClassName ( clase );
			nodo[ 0 ].classList.toggle("Blanco");
			bHumano = true;
			for ( i = 0; i < filas; i++ )
			{
				for ( j = 0; j < columnas; j++ )
				{
					if ( arCuadricula1[ i ][ j ] !== "N" && arCuadricula1[ i ][ j ] !== "B" )
					{
						arCuadricula1[ i ][ j ] = 0;
					}
				}
			}
		}
		else if ( arCuadricula2[ Fila ][ Columna ] === "x" )
		{
			arCuadricula1[ Fila ][ Columna ] = "N";
			clase = 'Columna ' + '_1 ' + '_' + Fila.toString() + '_' + Columna.toString();
			nodo = document.getElementsByClassName ( clase );
			nodo[ 0 ].classList.toggle("Naranja");
			bMaquina = true;
			for ( i = 0; i < filas; i++ )
			{
				for ( j = 0; j < columnas; j++ )
				{
					if ( arCuadricula1[ i ][ j ] !== "N" && arCuadricula1[ i ][ j ] !== "B" )
					{
						arCuadricula1[ i ][ j ] = 0;
					}
				}
			}
			FilaImpacto = Fila;
			ColumnaImpacto = Columna;
			setTimeout(disparoMaquina,500);
		}
	}
}
