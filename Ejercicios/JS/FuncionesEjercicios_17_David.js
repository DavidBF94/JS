
function ejercicio1_1()
{
	document.write ( "<h4>1.1. Que nos vaya diciendo si es menor o mayor en el prompt al pedirnos el siguiente número.</h4>" );
	
	var min, max, nAleat, respuesta;
	
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( respuesta !== nAleat )
	{
		if ( respuesta > nAleat )
		{
			respuesta = parseInt ( prompt ( "La solución es menor" ) );
		}
		else 
		{
			respuesta = parseInt ( prompt ( "La solución es mayor" ) );
		}
	}
	prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta );
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_2()
{
	document.write ( "<h4>1.2. Que nos vaya cambiando el prompt con el rango actualizado, eliminar lo de menor o mayor anterior.</h4>" );
	
	var min, max, nAleat, respuesta;
	
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( respuesta !== nAleat )
	{
		if ( respuesta > nAleat )
		{
			max = respuesta;
		}
		else 
		{
			min = respuesta;
		}
		respuesta = parseInt ( prompt ( "La solución se encuentra entre " + min + " y " + max ) );
	}
	prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta );
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_3()
{
	document.write ( "<h4>1.3. Que nos vaya diciendo porque intento vamos, en el prompt también.</h4>" );
	
	var min, max, nAleat, respuesta, contador;
	
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	contador = 1;
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( respuesta !== nAleat )
	{
		contador++;
		if ( respuesta > nAleat )
		{
			max = respuesta;
		}
		else 
		{
			min = respuesta;
		}
		respuesta = parseInt ( prompt ( "La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador ) );
	}
	prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador - 1 ) + " intentos");
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_4()
{
	document.write ( "<h4>1.4. Que nos indique cuando nos hemos equivocado por el rango y nos saque del juego por torpes.</h4>" );
	
	var min, max, nAleat, respuesta, contador;
	
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	contador = 1;
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( true )
	{
		contador++;
		if ( respuesta > max || respuesta < min )
		{
			prompt ( "Has escrito un número fuera del intervalo, torpe, te saco del juego" );
			break;
		}
		else if ( respuesta > nAleat )
		{
			max = respuesta;
		}
		else if ( respuesta < nAleat )
		{
			min = respuesta;
		}
		else 
		{
			prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador - 1 ) + " intentos");
			break;
		}
		respuesta = parseInt ( prompt ( "La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador ) );
	}
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_5()
{
	document.write ( "<h4>1.5. Como el anterior pero en la segunda equivocación nos saca del juego. En la primera un aviso por pantalla.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2;
	
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	contador1 = 1;
	contador2 = 0;
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( true )
	{
		contador1++;
		if ( ( respuesta > max || respuesta < min ) && contador2 < 3 )
		{
			contador2++;
			if ( contador2 === 2 )
			{
				break;
			}
			respuesta = parseInt ( prompt ( "Has escrito un número fuera del intervalo, torpe, a la próxima te saco del juego. La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
			continue;
		}
		else if ( respuesta > nAleat )
		{
			max = respuesta;
		}
		else if ( respuesta < nAleat )
		{
			min = respuesta;
		}
		else 
		{
			prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador1 - 1 ) + " intentos");
			break;
		}
		respuesta = parseInt ( prompt ( "La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
	}
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_6()
{
	document.write ( "<h4>1.6. Si son más de 10 intentos que nos muestre un mensaje por torpe y que la partida vuelva a empezar.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2, nIntentos;
	
	min = 1;
	max = 100;
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	contador1 = 1;
	contador2 = 0;
	nIntentos = 10;
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( true )
	{
		contador1++;
		if ( ( respuesta > max || respuesta < min ) && contador2 < ( nIntentos + 1) )
		{
			contador2++;
			if ( contador2 === nIntentos )
			{
				break;
			}
			respuesta = parseInt ( prompt ( "Has escrito un número fuera del intervalo, torpe, te quedan " + ( nIntentos - contador2 ) + " intentos. La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
			continue;
		}
		else if ( respuesta > nAleat )
		{
			max = respuesta;
		}
		else if ( respuesta < nAleat )
		{
			min = respuesta;
		}
		else 
		{
			prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador1 - 1 ) + " intentos");
			break;
		}
		respuesta = parseInt ( prompt ( "La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
	}
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_7()
{
	document.write ( "<h4>1.7. Que nos deje elegir el número mínimo y máximo poniendo un limite no menos de 0 y no más de 1000.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2, nIntentos;
	
	min = -1;
	max = 1001;
	while ( min < 0 || max > 1000 )
	{
		if ( min < 0 )
		{
			min = parseInt ( prompt ( "Introduce el límite mínimo ( >= 0 )" ) );
		}
		else
		{
			max = parseInt ( prompt ( "Introduce el límite máximo ( <= 1000 )" ) );
		}
	}
	nAleat = Math.floor(Math.random() * (max - min + 1) + min);
	contador1 = 1;
	contador2 = 0;
	nIntentos = 10;
	
	respuesta = parseInt ( prompt ( "Introduce número" ) );
	
	while ( true )
	{
		contador1++;
		if ( ( respuesta > max || respuesta < min ) && contador2 < ( nIntentos + 1) )
		{
			contador2++;
			if ( contador2 === nIntentos )
			{
				break;
			}
			respuesta = parseInt ( prompt ( "Has escrito un número fuera del intervalo, torpe, te quedan " + ( nIntentos - contador2 ) + " intentos. La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
			continue;
		}
		else if ( respuesta > nAleat )
		{
			max = respuesta;
		}
		else if ( respuesta < nAleat )
		{
			min = respuesta;
		}
		else 
		{
			prompt ( "Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador1 - 1 ) + " intentos");
			break;
		}
		respuesta = parseInt ( prompt ( "La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
	}
	document.write ( "El número aleatorio : " + nAleat );
}

function ejercicio1_8()
{
	document.write ( "<h4>1.8. Que nos pregunte al principio cuantas partidas queremos jugar. Y que podamos jugarlas.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2, nIntentos, nPartidas;
	
	nPartidas = parseInt ( prompt ( "¿Cuántas partidas deseas jugar?" ) );
	
	for ( i = 1; i < ( nPartidas + 1 ); i++ )
	{
		min = -1;
		max = 1001;
		while ( min < 0 || max > 1000 )
		{
			if ( min < 0 )
			{
				min = parseInt ( prompt ( "Partida " + i + " Introduce el límite mínimo ( >= 0 )" ) );
			}
			else
			{
				max = parseInt ( prompt ( "Partida " + i + " Introduce el límite máximo ( <= 1000 )" ) );
			}
		}
		nAleat = Math.floor(Math.random() * (max - min + 1) + min);
		contador1 = 1;
		contador2 = 0;
		nIntentos = 10;
		
		respuesta = parseInt ( prompt ( "Partida " + i + " Introduce número" ) );
		
		while ( true )
		{
			contador1++;
			if ( ( respuesta > max || respuesta < min ) && contador2 < ( nIntentos + 1) )
			{
				contador2++;
				if ( contador2 === nIntentos )
				{
					break;
				}
				respuesta = parseInt ( prompt ( "Partida " + i + " Has escrito un número fuera del intervalo, torpe, te quedan " + ( nIntentos - contador2 ) + " intentos. La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
				continue;
			}
			else if ( respuesta > nAleat )
			{
				max = respuesta;
			}
			else if ( respuesta < nAleat )
			{
				min = respuesta;
			}
			else 
			{
				prompt ( "Partida " + i + " Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador1 - 1 ) + " intentos");
				break;
			}
			respuesta = parseInt ( prompt ( "Partida " + i + " La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
		}
	}
}

function ejercicio1_9()
{
	document.write ( "<h4>1.9. Limitar el número de partidas a un número menor o igual a 5.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2, nIntentos, nPartidas;
	
	nPartidas = 6;
	while ( nPartidas > 5 )
	{
		nPartidas = parseInt ( prompt ( "¿Cuántas partidas deseas jugar? ( <= 5 )" ) );
	}
	
	for ( i = 1; i < ( nPartidas + 1 ); i++ )
	{
		min = -1;
		max = 1001;
		while ( min < 0 || max > 1000 )
		{
			if ( min < 0 )
			{
				min = parseInt ( prompt ( "Partida " + i + " Introduce el límite mínimo ( >= 0 )" ) );
			}
			else
			{
				max = parseInt ( prompt ( "Partida " + i + " Introduce el límite máximo ( <= 1000 )" ) );
			}
		}
		nAleat = Math.floor(Math.random() * (max - min + 1) + min);
		contador1 = 1;
		contador2 = 0;
		nIntentos = 10;
		
		respuesta = parseInt ( prompt ( "Partida " + i + " Introduce número" ) );
		
		while ( true )
		{
			contador1++;
			if ( ( respuesta > max || respuesta < min ) && contador2 < ( nIntentos + 1) )
			{
				contador2++;
				if ( contador2 === nIntentos )
				{
					break;
				}
				respuesta = parseInt ( prompt ( "Partida " + i + " Has escrito un número fuera del intervalo, torpe, te quedan " + ( nIntentos - contador2 ) + " intentos. La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
				continue;
			}
			else if ( respuesta > nAleat )
			{
				max = respuesta;
			}
			else if ( respuesta < nAleat )
			{
				min = respuesta;
			}
			else 
			{
				prompt ( "Partida " + i + " Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador1 - 1 ) + " intentos");
				break;
			}
			respuesta = parseInt ( prompt ( "Partida " + i + " La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
		}
	}
}

function ejercicio2()
{
	document.write ( "<h4>2.0. Que nos diga cual ha sido la mejor partida por número de intentos.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2, nIntentos, nPartidas, numPartida, intentosPartida, numPartidaMejor, intentosPartidaMejor, mejorIntento, contador3;
	
	nPartidas = 6;
	while ( nPartidas > 5 )
	{
		nPartidas = parseInt ( prompt ( "¿Cuántas partidas deseas jugar? ( <= 5 )" ) );
	}
	
	numPartida = [];
	intentosPartida = [];
	
	for ( i = 1; i < ( nPartidas + 1 ); i++ )
	{
		min = -1;
		max = 1001;
		while ( min < 0 || max > 1000 )
		{
			if ( min < 0 )
			{
				min = parseInt ( prompt ( "Partida " + i + " Introduce el límite mínimo ( >= 0 )" ) );
			}
			else
			{
				max = parseInt ( prompt ( "Partida " + i + " Introduce el límite máximo ( <= 1000 )" ) );
			}
		}
		nAleat = Math.floor(Math.random() * (max - min + 1) + min);
		contador1 = 1;
		contador2 = 0;
		nIntentos = 10;
		
		respuesta = parseInt ( prompt ( "Partida " + i + " Introduce número" ) );
		
		while ( true )
		{
			contador1++;
			if ( ( respuesta > max || respuesta < min ) && contador2 < ( nIntentos + 1) )
			{
				contador2++;
				if ( contador2 === nIntentos )
				{
					break;
				}
				respuesta = parseInt ( prompt ( "Partida " + i + " Has escrito un número fuera del intervalo, torpe, te quedan " + ( nIntentos - contador2 ) + " intentos. La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
				continue;
			}
			else if ( respuesta > nAleat )
			{
				max = respuesta;
			}
			else if ( respuesta < nAleat )
			{
				min = respuesta;
			}
			else 
			{
				prompt ( "Partida " + i + " Enhorabuena, has encontrado la solución, era el número " + respuesta + " . Has necesitado " + ( contador1 - 1 ) + " intentos");
				break;
			}
			respuesta = parseInt ( prompt ( "Partida " + i + " La solución se encuentra entre " + min + " y " + max + " . Intento nº " + contador1 ) );
		}
		numPartida[ i - 1 ] = i;
		intentosPartida[ i - 1 ] = ( contador1 - 1 );
	}
	
	numPartidaMejor = [];
	intentosPartidaMejor = [];
	mejorIntento = intentosPartida[ 0 ];
	for ( i = 1; i < numPartida.length; i++)
	{
		if ( intentosPartida[ i ] <= intentosPartida [ i - 1 ] )
		{
			mejorIntento = intentosPartida [ i ];
		}
	}
	contador3 = 0;
	for ( i = 0; i < numPartida.length; i++)
	{
		if ( intentosPartida [ i ] === mejorIntento )
		{
			numPartidaMejor[ contador3 ] = numPartida[ i ];
			contador3++;
		}
	}
	document.write ( "Tus mejores partidas han sido " + numPartidaMejor + " con un total de " + mejorIntento + " intentos" );
}

function ejercicio3()
{
	document.write ( "<h4>3.0. Nosotros pensamos un número, la maquina nos lo pide y es la máquina quien intenta adivinarlo con números aleatorios en el rango concreto.</h4>" );
	
	var min, max, nAleat, respuesta, contador1, contador2, nIntentos, nPartidas, numPartida, intentosPartida, numPartidaMejor, intentosPartidaMejor, mejorIntento, contador3;
	
	nPartidas = 6;
	while ( nPartidas > 5 )
	{
		nPartidas = parseInt ( prompt ( "¿Cuántas partidas quieres que juegue la máquina? ( <= 5 )" ) );
	}
	
	numPartida = [];
	intentosPartida = [];
	
	for ( i = 1; i < ( nPartidas + 1 ); i++ )
	{
		min = -1;
		max = 1001;
		while ( min < 0 || max > 1000 )
		{
			if ( min < 0 )
			{
				min = parseInt ( prompt ( "Partida " + i + " Introduce el límite mínimo ( >= 0 )" ) );
			}
			else
			{
				max = parseInt ( prompt ( "Partida " + i + " Introduce el límite máximo ( <= 1000 )" ) );
			}
		}
		nAleat = parseInt ( prompt ( "Partida " + i + " Introduce número" ) );
		contador1 = 1;
		contador2 = 0;
		nIntentos = 10;
		
		while ( ( nAleat > max || nAleat < min ) && contador2 < ( nIntentos + 1) )
		{
			contador2++;
			if ( contador2 === nIntentos )
			{
				break;
			}
			nAleat = parseInt ( prompt ( "Partida " + i + " Has escrito un número fuera del intervalo, torpe, te quedan " + ( nIntentos - contador2 ) + " intentos." ) );
		}
		
		if ( contador2 === nIntentos )
		{
			break;
		}
		
		respuesta = Math.floor(Math.random() * (max - min + 1) + min);
		
		while ( true )
		{
			contador1++;
			if ( respuesta > nAleat )
			{
				max = respuesta - 1;
			}
			else if ( respuesta < nAleat )
			{
				min = respuesta + 1;
			}
			else 
			{
				break;
			}
			respuesta = Math.floor(Math.random() * (max - min + 1) + min);
		}
		numPartida[ i - 1 ] = i;
		intentosPartida[ i - 1 ] = ( contador1 - 1 );
	}
	
	numPartidaMejor = [];
	intentosPartidaMejor = [];
	mejorIntento = intentosPartida[ 0 ];
	for ( i = 1; i < numPartida.length; i++)
	{
		if ( intentosPartida[ i ] <= intentosPartida [ i - 1 ] )
		{
			mejorIntento = intentosPartida [ i ];
		}
	}
	contador3 = 0;
	for ( i = 0; i < numPartida.length; i++)
	{
		if ( intentosPartida [ i ] === mejorIntento )
		{
			numPartidaMejor[ contador3 ] = numPartida[ i ];
			contador3++;
		}
	}
	document.write ( "Las mejores partidas de la máquina han sido " + numPartidaMejor + " con un total de " + mejorIntento + " intentos" );
}
