
function decimales(operacion)
{
	var operacion, contador, bCondicion;
	
	operacion = operacion.toString();
	for ( i = 0; i < operacion.length; i++)
	{
		if ( operacion[ i ] === "." )
		{
			contador = 0;
			bCondicion = true;
		}
		else if ( bCondicion )
		{
			contador++;
		}
		if ( contador === 4 )
		{
			bCondicion = false;
			break;
		}
	}
	return bCondicion;
}

function aleatorio(min,max)
{	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function operaciones(num1,num2,num3,min,max)
{	
	
	if ( num3 === 0 )
	{
		respuesta = parseInt ( prompt ( num1 + " + " + num2 ) );
		operacion = num1 + num2;
	}
	else if ( num3 === 1 )
	{
		respuesta = parseInt ( prompt ( num1 + " - " + num2 ) );
		operacion = num1 - num2;
	}
	else if ( num3 === 2 )
	{
		respuesta = parseInt ( prompt ( num1 + " * " + num2 ) );
		operacion = num1 * num2;
	}
	else if ( num3 === 3 )
	{
		operacion = num1 / num2;
		while ( !decimales(operacion) )
		{
			num1 = aleatorio(min,max);
			num2 = aleatorio(min,max);
			operacion = num1 / num2;
		}
		respuesta = parseFloat ( prompt ( num1 + " / " + num2 ) );
	}
	return [respuesta,operacion];
}

function ejercicio1_1()
{
	document.write ("<h4>1.1. Que nos haga una pregunta sobre una suma entre dos números aleatorios del 1 al 10 y que nos pregunte el resultado. Más o menos 5 + 7 = </h4>");
	document.write ("<h4>Y tenemos que responder. Si acertamos nos dice que bien y si fallamos que mal.</h4>");
	
	var min, max, num1, num2, num3, op, respuesta, operacion;
	
	min = 1;
	max = 10;
	
	num1 = aleatorio(min,max);
	num2 = aleatorio(min,max);
	num3 = aleatorio(0,0);
	
	op = operaciones(num1,num2,num3);
	respuesta = op[0];
	operacion = op[1];
	
	if ( respuesta === operacion ) 
	{
		prompt( " ¡¡ Correcto !! " );
	}
	else
	{
		prompt ( " Incorrecto " );
	}
}

function ejercicio1_2()
{
	document.write ("<h4>1.2. Igual que el anterior pero ahora mientras acertemos nos sigue preguntando, si fallamos nos saca. Mostrar estadística.</h4>");
	
	var min, max, num1, num2, num3, bCondicion, contador, op, respuesta, operacion;
	
	min = 1;
	max = 10;

	bCondicion = false;
	contador = 0;
	while ( !bCondicion )
	{
		contador++;
		num1 = aleatorio(min,max);
		num2 = aleatorio(min,max);
		num3 = aleatorio(0,0);
		
		op = operaciones(num1,num2,num3);
		respuesta = op[0];
		operacion = op[1];
		
		if ( respuesta !== operacion ) 
		{
			bCondicion = true;
		}
	}
	document.write ( " Has acertado " + ( contador - 1 ) + " preguntas");
}

function ejercicio1_3()
{
	document.write ("<h4>1.3. Igual que el anterior pero ahora si respondemos 5 respuestas correctas seguidas, nos diga muy bien, veo que no tienes problemas.</h4>");
	
	var min, max, num1, num2, num3, bCondicion, contador, op, respuesta, operacion;
	
	min = 1;
	max = 10;
	
	bCondicion = false;
	contador = 0;
	while ( !bCondicion )
	{
		contador++;
		num1 = aleatorio(min,max);
		num2 = aleatorio(min,max);
		num3 = aleatorio(0,0);
		
		op = operaciones(num1,num2,num3);
		respuesta = op[0];
		operacion = op[1];
		
		if ( respuesta !== operacion ) 
		{
			bCondicion = true;
		}
		if ( contador === 5 )
		{
			respuesta = parseInt ( prompt ( "Muy bien, veo que no tienes problemas" ) );
		}
	}
	document.write ( " Has acertado " + ( contador - 1 ) + " preguntas");
}

function ejercicio1_4()
{
	document.write ("<h4>1.4. Igual que el anterior e incluir que nos pueda preguntar también por las restas.</h4>");
	document.write ("<h4>Aumentar el número de respuestas correctas seguidas a 10.</h4>");
	
	var min, max, num1, num2, num3, bCondicion, contador, op, respuesta, operacion;
	
	min = 1;
	max = 10;
	
	bCondicion = false;
	contador = 0;
	while ( !bCondicion )
	{
		contador++;
		num1 = aleatorio(min,max);
		num2 = aleatorio(min,max);
		num3 = aleatorio(0,1);
		
		op = operaciones(num1,num2,num3);
		respuesta = op[0];
		operacion = op[1];
		
		if ( respuesta !== operacion ) 
		{
			bCondicion = true;
		}
		if ( contador === 10 )
		{
			respuesta = parseInt ( prompt ( "Muy bien, veo que no tienes problemas" ) );
		}
	}
	document.write ( " Has acertado " + ( contador - 1 ) + " preguntas");
}

function ejercicio1_5()
{
	document.write ("<h4>1.5. Igual que el anterior e incluir multiplicaciones y divisiones. Si la división tiene más de 4 digitos decimales que no nos pida esa división y nos genere otra.</h4>");
	document.write ("<h4>Mejora la estadística.</h4>");
	
	var min, max, num1, num2, num3, bCondicion, contador, op, respuesta, operacion;
	
	min = 1;
	max = 10;
	
	bCondicion = false;
	contador = 0;
	while ( !bCondicion )
	{
		contador++;
		num1 = aleatorio(min,max);
		num2 = aleatorio(min,max);
		num3 = aleatorio(0,3);
		
		op = operaciones(num1,num2,num3,min,max);
		respuesta = op[0];
		operacion = op[1];
		
		if ( respuesta !== operacion ) 
		{
			bCondicion = true;
		}
		if ( contador === 10 )
		{
			respuesta = parseInt ( prompt ( "Muy bien, veo que no tienes problemas" ) );
		}
	}
	document.write ( " Has acertado " + ( contador - 1 ) + " preguntas");
}
