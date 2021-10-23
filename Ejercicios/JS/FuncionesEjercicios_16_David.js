
function ejercicio1_1()
{
	var respuesta;
	
	respuesta = prompt("Por favor dame un número");
	return respuesta;
}

function ejercicio1_2()
{
	document.write ( "<h4>Ejercicio 1.</h4>" );
	document.write ( "<h4>Pedir 10 números al usuario, con prompt, y contar cuantos han sido números.</h4>" );
	document.write ( "<h4>Realizar una función para pedir números y otra función para contar.</h4>" );
	
	var contador, respuesta;
	
	contador = 0;
	for ( i = 0; i < 10; i++ )
	{
		respuesta = ejercicio1_1();
		if ( !isNaN ( parseInt( respuesta ) ) )
		{
			contador++;
		}
	}
	document.write ( "Has escrito un número un total de " + contador + " veces" );
}

function ejercicio2()
{
	document.write ( "<h4>Ejercicio 2.</h4>" );
	document.write ( "<h4>Pedir 10 números al usuario, y hasta que no haya introducido 10 números no parar de pedirle.</h4>" );
	document.write ( "<h4>Obtener y mostrar una estadística de cuantos han sido números y cuantos no.</h4>" );	
	
	var contador1,contador2, respuesta, totalResp, porcNum, porcNoNum;
	
	contador1 = 0;
	contador2 = 0;
	while ( contador1 < 10 )
	{
		respuesta = ejercicio1_1();
		if ( !isNaN ( parseInt ( respuesta ) ) )
		{
			contador1++;
		}
		else
		{
			contador2++;
		}
	}
	totalResp = contador1 + contador2;
	porcNum = Math.round(( ( contador1 / ( contador1 + contador2 ) ) * 100 ));
	porcNoNum = Math.round(( ( contador2 / ( contador1 + contador2 ) ) * 100 ));
	
	document.write ( "Has introducido un total de " + totalResp + " respuestas . Números : " + contador1 + " . No números: " + contador2 + "<br>" );
	document.write ( " En porcentaje: " + porcNum + " % números " + porcNoNum + " % no números" );
}

function ejercicio3()
{
	document.write ( "<h4>Ejercicio 3.</h4>" );
	document.write ( "<h4>Pedir 10 números al usuario pero cada número debe ser superior al anterior, sino es así no parar de pedirle. Debe haber 10 números uno mayor que el siguiente.</h4>" );
	document.write ( "<h4>Obtener y mostrar una estadística de cuantos han sido números ( de cuantos han sido mayores y cuantos han sido menores ) y cuantos no han sido números.</h4>" );
	document.write ( "<h4>Mostrar la estadistica en formato table, con valores y porcentajes.</h4>" );	
	
	var contador1, contador2, contador3, respuesta, numero, numTotalResp, numTotalNum, porcNum, porcNoNum, porcNumMayor, porcNumMenor;
	
	contador1 = 0;
	contador2 = 0;
	contador3 = 0;
	numero = 0;
	while ( contador1 < 10 )
	{
		respuesta = ejercicio1_1();
		if ( !isNaN ( parseInt ( respuesta ) ) )
		{
			if ( parseInt(respuesta) > numero )
			{
				contador1++;
				numero = parseInt(respuesta);
			}
			else if ( parseInt(respuesta) <= numero )
			{
				contador2++;
			}
		}
		else
		{
			contador3++;
		}
	}
	numTotalResp = contador1 + contador2 + contador3;
	numTotalNum = contador1 + contador2;
	porcNum = Math.round( numTotalNum*100/numTotalResp );
	porcNoNum = Math.round( contador3*100/numTotalResp );
	porcNumMayor = Math.round( contador1*100/numTotalResp );
	porcNumMenor = Math.round( contador2*100/numTotalResp );
	
	document.write ( "Número total de respuestas: " + numTotalResp + "<br>" );
	document.write ( "Número total de números: " + numTotalNum + " - Porcentaje: " + porcNum + " % <br>" );
	document.write ( "Número total de números mayores: " + contador1 + " - Porcentaje: " + porcNumMayor + " % <br>" );
	document.write ( "Número total de números menores o iguales: " + contador2 + " - Porcentaje: " + porcNumMenor + " % <br>" );
	document.write ( "Número total de no números: " + contador3 + " - Porcentaje: " + porcNoNum + " % <br>" );
}

function ejercicio4()
{
	document.write ( "<h4>Ejercicio 4.</h4>" );
	document.write ( "<h4>Pedir 10 números al usuario, pero tiene que ser alternativamente mayor que el anterior y el siguiente menor.</h4>" );
	document.write ( "<h4>El array debería quedar así: 10, 15, 12, 14, 11, 60, 56, 67, 42, 56.</h4>" );
	document.write ( "<h4>Realizar estadística ( intenta crear una función o funciones que te sirva para este ejercicio y los anteriores ).</h4>" );	
	
	var contador1, contador2, contador3, respuesta, numero, bCondicion, numTotalResp, numTotalNum, porcNum, porcNoNum, porcNumSecuenciales, porcNumNoSecuenciales;
	
	contador1 = 0;
	contador2 = 0;
	contador3 = 0;
	numero = 0;
	bCondicion = false;
	while ( contador1 < 10 )
	{
		respuesta = ejercicio1_1();
		if ( !isNaN ( parseInt ( respuesta ) ) )
		{
			if ( parseInt(respuesta) > numero && !bCondicion )
			{
				contador1++;
				numero = parseInt(respuesta);
				bCondicion = true;
			}
			else if ( parseInt(respuesta) < numero && bCondicion )
			{
				contador1++;
				numero = parseInt(respuesta);
				bCondicion = false;
			}
			else
			{
				contador2++;
			}
		}
		else
		{
			contador3++;
		}
	}
	numTotalResp = contador1 + contador2 + contador3;
	numTotalNum = contador1 + contador2;
	porcNum = Math.round( numTotalNum*100/numTotalResp );
	porcNoNum = Math.round( contador3*100/numTotalResp );
	porcNumSecuenciales = Math.round( contador1*100/numTotalResp );
	porcNumNoSecuenciales = Math.round( contador2*100/numTotalResp );
	
	document.write ( "Número total de respuestas: " + numTotalResp + "<br>" );
	document.write ( "Número total de números: " + numTotalNum + " - Porcentaje: " + porcNum + " % <br>" );
	document.write ( "Número total de números secuenciales: " + contador1 + " - Porcentaje: " + porcNumSecuenciales + " % <br>" );
	document.write ( "Número total de números no secuenciales: " + contador2 + " - Porcentaje: " + porcNumNoSecuenciales + " % <br>" );
	document.write ( "Número total de no números: " + contador3 + " - Porcentaje: " + porcNoNum + " % <br>" );
}

function ejercicio5()
{
	document.write ( "<h4>Ejercicio 5.</h4>" );
	document.write ( "<h4>Pedir números al usuario en el que se muestre un mensaje de introduce un valor del 1 al 100.</h4>" );
	document.write ( "<h4>Si el usuario introduce el 80 el mensaje de solicitud debe ser introduce un valor de 1 al 79.</h4>" );
	document.write ( "<h4>Si introduce el valor 10 el mensaje ahora es entre los valores 11 y 79.</h4>" );
	document.write ( "<h4>Es decir si el número está más cerca del valor menor del rango se modifica el rango menor y si está más cerca del rango mayor se modifica el rango mayor. Si está en medio justo el rango menor.</h4>" );
	document.write ( "<h4>Si introduce un número distinto del solicitado o no es un número se le vuelve a pedir.</h4>" );
	document.write ( "<h4>Cuando solo quede un número y lo introduzca se da el programa por finalizado, mostrandole la secuencia de números introducidos.</h4>" );
	
	var min, max, respuesta, restaMin, restaMax, min, max;
	
	min = 1;
	max = 100;
	while ( Math.abs( max - min ) > 1 )
	{
		respuesta = parseInt( prompt("Introduce un número entre el " + min + " y el " + max ) );
		
		while ( isNaN ( respuesta ) || respuesta >= max || respuesta <= min )
		{
			respuesta = parseInt( prompt("Otro intento. Introduce un número entre el " + min + " y el " + max ) );
		}
		
		document.write ( respuesta + " " );
		
		restaMin = Math.abs( respuesta - min );
		restaMax = Math.abs( respuesta - max );
		
		if ( restaMin <= 2 && restaMax <= 2 )
		{
			if ( restaMin <= restaMax )
			{
				min = respuesta;
			}
			else
			{
				max = respuesta;
			}
		}
		else if ( restaMin > restaMax )
		{
			max = respuesta - 1;
		}
		else if ( restaMin < restaMax || restaMin === restaMax )
		{
			min = respuesta + 1;
		}
	}
}

function ejercicio6()
{
	document.write ( "<h4>Ejercicio 6.</h4>" );
	document.write ( "<h4>Igual que el anterior, pero ahora si el usuario se equivoca se le muestra un mensaje de adios y se acaba el programa.</h4>" );
	
	var min, max, respuesta, restaMin, restaMax, min, max;
	
	min = 1;
	max = 100;
	while ( Math.abs( max - min ) > 1 )
	{
		respuesta = parseInt( prompt("Introduce un número entre el " + min + " y el " + max ) );
		
		if ( isNaN ( respuesta ) || respuesta >= max || respuesta <= min )
		{
			respuesta = parseInt( prompt("Adiós") );
			break;
		}
		
		document.write ( respuesta + " " );
		
		restaMin = Math.abs( respuesta - min );
		restaMax = Math.abs( respuesta - max );
		
		if ( restaMin <= 2 && restaMax <= 2 )
		{
			if ( restaMin <= restaMax )
			{
				min = respuesta;
			}
			else
			{
				max = respuesta;
			}
		}
		else if ( restaMin > restaMax )
		{
			max = respuesta - 1;
		}
		else if ( restaMin < restaMax || restaMin === restaMax )
		{
			min = respuesta + 1;
		}
	}
}

function ejercicio7()
{
	document.write ( "<h4>Ejercicio 7.</h4>" );
	document.write ( "<h4>Igual que el ejercicio anterior, pero ahora si el usuario se equivoca se le avisa, ( Muestra un mensaje, hazlo en el prompt de solicitud del número. Por ejemplo: Te has equivocado, este es un aviso. Introduce un valor entre 20 y 100.</h4>" );
	document.write ( "<h4>Si se equivoca otra vez se le muestra el mensaje de adios.</h4>" );
	
	var min, max, respuesta, restaMin, restaMax, min, max, contador;
	
	min = 1;
	max = 100;
	contador = 0;
	while ( Math.abs( max - min ) > 1 )
	{
		respuesta = parseInt( prompt("Introduce un número entre el " + min + " y el " + max ) );
		
		while ( isNaN ( respuesta ) || respuesta >= max || respuesta <= min )
		{
			contador++;
			if ( contador === 2 )
			{
				respuesta = parseInt( prompt("Adiós") );
				break;
			}
			respuesta = parseInt( prompt("Primer y último aviso. Introduce un número entre el " + min + " y el " + max ) );
		}
		if ( contador === 2 )
		{
			break;
		}
		
		document.write ( respuesta + " " );
		
		restaMin = Math.abs( respuesta - min );
		restaMax = Math.abs( respuesta - max );
		
		if ( restaMin <= 2 && restaMax <= 2 )
		{
			if ( restaMin <= restaMax )
			{
				min = respuesta;
			}
			else
			{
				max = respuesta;
			}
		}
		else if ( restaMin > restaMax )
		{
			max = respuesta - 1;
		}
		else if ( restaMin < restaMax || restaMin === restaMax )
		{
			min = respuesta + 1;
		}
	}
}

function ejercicio8()
{
	document.write ( "<h4>Ejercicio 8.</h4>" );
	document.write ( "<h4>Igual que el anterior pero ahora solo si se equivoca dos veces seguidas o tres veces en total se le dice Adios. Mostrar mensajes de aviso distintos para cada caso.</h4>" );
	
	var min, max, respuesta, restaMin, restaMax, min, max, contador1, contador2, nIntentosSeguidos, nIntentosTotales;
	
	min = 1;
	max = 100;
	contador1 = 0;
	nIntentosSeguidos = 2;
	nIntentosTotales = 3;
	while ( Math.abs( max - min ) > 1 )
	{
		respuesta = parseInt( prompt("Introduce un número entre el " + min + " y el " + max ) );
		
		contador2 = 0;
		while ( isNaN ( respuesta ) || respuesta >= max || respuesta <= min )
		{
			contador1++;
			contador2++;
			if ( contador1 === nIntentosTotales || contador2 === nIntentosSeguidos )
			{
				break;
			}
			respuesta = parseInt( prompt("Aviso n º " + contador1 + " . Te quedan " + ( nIntentosSeguidos - contador2 ) + " intentos seguidos y " + ( nIntentosTotales - contador1 ) + " intentos totales . Introduce un número entre el " + min + " y el " + max ) );
		}
		if ( contador1 === nIntentosTotales || contador2 === nIntentosSeguidos )
		{
			respuesta = parseInt( prompt("Adiós") );
			break;
		}
		
		document.write ( respuesta + " " );
		
		restaMin = Math.abs( respuesta - min );
		restaMax = Math.abs( respuesta - max );
		
		if ( restaMin <= 2 && restaMax <= 2 )
		{
			if ( restaMin <= restaMax )
			{
				min = respuesta;
			}
			else
			{
				max = respuesta;
			}
		}
		else if ( restaMin > restaMax )
		{
			max = respuesta - 1;
		}
		else if ( restaMin < restaMax || restaMin === restaMax )
		{
			min = respuesta + 1;
		}
	}
}

function ejercicio9()
{
	document.write ( "<h4>Ejercicio 9.</h4>" );
	document.write ( "<h4>Igual que el anterior pero ahora si en cualquier momento escribe FIN el programa finaliza mostrando el mensaje de Adios, ya jugaremos otro día.</h4>" );
	
	var min, max, respuesta, restaMin, restaMax, min, max, contador1, contador2, nIntentosSeguidos, nIntentosTotales;
	
	min = 1;
	max = 100;
	contador1 = 0;
	nIntentosSeguidos = 2;
	nIntentosTotales = 3;
	while ( Math.abs( max - min ) > 1 )
	{
		respuesta = prompt("Introduce un número entre el " + min + " y el " + max );
		if ( respuesta === "FIN" )
		{
			respuesta =  prompt("Adiós , ya jugaremos otro día")
			break;
		}
		respuesta = parseInt(respuesta);
		
		contador2 = 0;
		while ( isNaN ( respuesta ) || respuesta >= max || respuesta <= min )
		{
			contador1++;
			contador2++;
			if ( contador1 === nIntentosTotales || contador2 === nIntentosSeguidos )
			{
				break;
			}
			respuesta = parseInt( prompt("Aviso n º " + contador1 + " . Te quedan " + ( nIntentosSeguidos - contador2 ) + " intentos seguidos y " + ( nIntentosTotales - contador1 ) + " intentos totales . Introduce un número entre el " + min + " y el " + max ) );
		}
		if ( contador1 === nIntentosTotales || contador2 === nIntentosSeguidos )
		{
			respuesta = parseInt( prompt("Adiós") );
			break;
		}
		
		document.write ( respuesta + " " );
		
		restaMin = Math.abs( respuesta - min );
		restaMax = Math.abs( respuesta - max );
		
		if ( restaMin <= 2 && restaMax <= 2 )
		{
			if ( restaMin <= restaMax )
			{
				min = respuesta;
			}
			else
			{
				max = respuesta;
			}
		}
		else if ( restaMin > restaMax )
		{
			max = respuesta - 1;
		}
		else if ( restaMin < restaMax || restaMin === restaMax )
		{
			min = respuesta + 1;
		}
	}
}
