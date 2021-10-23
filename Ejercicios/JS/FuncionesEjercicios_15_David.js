
function ejercicio1 (texto)
{
	document.write ( "<h4>Ejercicio 1. Convierta a mayúsculas cualquier texto.</h4>" );
	document.write ( texto + "<br>" );
	return  texto.toUpperCase();
}

function ejercicio2 (texto1)
{
	document.write ( "<h4>Ejercicio 2. Convierta a mayúsculas la primera letra y última letra de cualquier texto.</h4>" );
	
	var texto2;
	
	texto2 = "";
	for ( i = 0; i < texto1.length; i++ )
	{
		if ( i === 0 || i === texto1.length - 1 )
		{
			texto2 += texto1 [ i ].toUpperCase();
		}
		else
		{
			texto2 += texto1 [ i ];	
		}
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio3 (texto1)
{
	document.write ( "<h4>Ejercicio 3. Convierta a mayúsculas la primera letra de cada palabra de cualquier texto.</h4>" );
	
	var texto2, vectorPalabras, palabra;
	
	texto2 = "";
	vectorPalabras = texto1.split(" ");
	for ( i = 0; i < vectorPalabras.length; i++ )
	{
		palabra = "";
		for ( j = 0; j < vectorPalabras[ i ].length; j++ )
		{
			if ( j === 0 )
			{
				palabra += vectorPalabras[ i ][ j ].toUpperCase();
			}
			else 
			{
				palabra += vectorPalabras[ i ][ j ];
			}
		}
		vectorPalabras [ i ] = palabra ;
	}
	texto2 = vectorPalabras.join(" ");
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio4 (texto1)
{
	document.write ( "<h4>Ejercicio 4. Convierta a mayúsculas la primera y ultima letra de cada palabra de cualquier texto.</h4>" );

	var texto2, vectorPalabras, palabra;

	texto2 = "";
	vectorPalabras = texto1.split(" ");
	for ( i = 0; i < vectorPalabras.length; i++ )
	{
		palabra = "";
		for ( j = 0; j < vectorPalabras[ i ].length; j++ )
		{
			if ( vectorPalabras[ i ][ j ] ===',' || vectorPalabras[ i ][ j ] ==='.' )
			{
				palabra += vectorPalabras [ i ][ j - 1 ].toUpperCase();
				palabra += vectorPalabras [ i ][ j ];
			}
			else if ( j === 0 || j === vectorPalabras[ i ].length - 1 )
			{
				palabra += vectorPalabras [ i ][ j ].toUpperCase();
			}
			else 
			{
				palabra += vectorPalabras[ i ][ j ];
			}
		}
		vectorPalabras [ i ] = palabra ;
	}
	texto2 = vectorPalabras.join(" ");
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio5 (texto1)
{
	document.write ( "<h4>Ejercicio 5. Convierta a mayúsculas y minúsculas alternativamente cada caracter de cualquier texto.</h4>" );
	
	var texto2;
	
	texto2 = "";
	for ( i = 0; i < texto1.length; i++ )
	{
		if ( i%2 === 0 )
		{
			texto2 += texto1[ i ].toUpperCase();
		}
		else
		{
			texto2 += texto1[ i ];
		}
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio6 (texto1)
{
	document.write ( "<h4>Ejercicio 6. Convierta a mayúsculas y minúsculas alternativamente cada caracter ( no tenga en cuenta los espacios en blanco, los puntos, las comas, y cualquier caracter de separación que se le ocurra) de cualquier texto.</h4>" );
	
	var texto2, vectorPalabras, palabra, contador;
	
	texto2 = "";
	vectorPalabras = texto1.split(" ");
	for ( i = 0; i < vectorPalabras.length; i++ )
	{
		palabra = "";
		contador = 0;
		for ( j = 0; j < vectorPalabras[ i ].length; j++ )
		{
			if ( contador%2 === 0 )
			{
				palabra += vectorPalabras[ i ][ j ].toUpperCase();
			}
			else 
			{
				palabra += vectorPalabras[ i ][ j ];
			}
			contador++;
		}
		vectorPalabras [ i ] = palabra ;
	}
	texto2 = vectorPalabras.join(" ");
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio7 (texto1)
{
	document.write ( "<h4>Ejercicio 7. Cree una función que convierta a mayúsculas solo los nombres propios del texto que se le envíe. CREE UN ARRAY CON 5 NOMBRES PROPIOS.</h4>" );
	
	var texto2, vectorPalabras, palabra, nombres, simbolo;
	
	texto2 = "";
	vectorPalabras = texto1.split(" ");
	nombres = [ "alejandro" , "alicia" , "ana" , "ignacio" , "lucas" ];
	for ( i = 0; i < vectorPalabras.length; i++ )
	{
		palabra = "";
		simbolo = "";
		for ( j = 0; j < vectorPalabras[ i ].length; j++ )
		{
			if ( vectorPalabras[ i ][ j ] !=="," && vectorPalabras[ i ][ j ] !="." )
			{
				palabra += vectorPalabras[ i ][ j ];
			}
			else if ( vectorPalabras[ i ][ j ] ==="," )
			{
				simbolo = ",";
			}
			else if ( vectorPalabras[ i ][ j ] ==="." )
			{
				simbolo = ".";
			}
		}
		for ( k = 0; k < nombres.length ; k++ )
		{
			if ( nombres[ k ] === palabra )
			{
				palabra = palabra.toUpperCase();
			}
		}
		palabra += simbolo;
		vectorPalabras[ i ] = palabra;
	}
	texto2 = vectorPalabras.join(" ");
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio8 (texto1)
{
	document.write ( "<h4>Ejercicio 8. Haga que un texto tenga doble espaciado.</h4>" );
	document.write ( "<h4>Ejercicio 9. Tenga en cuenta que ese texto puede venir con más de un doble espacio.</h4>" );
	
	var texto2, espaciado, vectorTexto1;
	
	texto2 = "";
	espaciado = "&nbsp&nbsp";
	
	vectorTexto1 = texto1.split( " " );
	for ( j = 0; j < vectorTexto1.length; j++ )
	{
		if ( vectorTexto1[ j ] !== "")
		{
			texto2 = texto2 + vectorTexto1[ j ] + espaciado;
		}
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio10_1 (texto1)
{
	document.write ( "<h4>Ejercicio 10.1.Haga una función que quite todas las vocales de un texto.</h4>" );
	document.write ( "<h4>Ejercicio 10.2. Tanto minúsculas como mayúsculas, con tildes o sin tildes.</h4>" );
	document.write ( "<h4>Ejercicio 10.3. Que sustituye todas esas vocales( con mayus o minus, con/sin tildes ) por espacios en blanco y los espacios en blanco por _ ( guion bajo).</h4>" );
	
	var texto2, prohibidos, bCondicion;
	
	texto2 = "";
	prohibidos = [ 65 , 69 , 73 , 79 , 85 , 97 , 101 , 105 , 111 , 117 , 193 , 201 , 205 , 211 , 218 , 225 , 233 , 237 , 243 , 250 ];
	
	for ( i = 0; i < texto1.length ; i++ )
	{
		bCondicion = false;
		for ( j = 0; j < prohibidos.length; j++)
		{
			if ( texto1.charCodeAt( i ) === prohibidos[ j ] )
			{
				texto2 += "&nbsp";
				bCondicion = true;
			}
		}
		if ( !bCondicion )
		{
			if ( texto1[ i ] === " " )
			{
				texto2 += "_";
			}
			else
			{
				texto2 += texto1[ i ];
			}
		}
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio10_4 (texto1)
{
	document.write ( "<h4>Ejercicio 10.4. Crea una función que cambie de un texto la primera letra por la segunda, y la segunda por la primera, la tercera con la cuarta, y la cuarta por la tercera....</h4>" );
	
	var texto2, texto3, texto4, vectorTexto1, contador1, contador2;
	
	texto2 = "";
	texto3 = "";
	texto4 = "";
	vectorTexto1 = texto1.split( "" );
	contador1 = 0;
	contador2 = 0;
	for ( i = 0; i < vectorTexto1.length; i++ )
	{
		if ( vectorTexto1[ i ] !== "," && vectorTexto1[ i ] !== "." && vectorTexto1[ i ] !== " " )
		{
			texto2 += vectorTexto1 [ i ];
		}
	}
	for ( j = 1; j < texto2.length; j += 2 )
	{
		texto3 += texto2[ j ];
		texto3 += texto2[ j - 1 ];
	}
	for ( k = 0; k < texto1.length; k++ )
	{
		contador = contador1 + contador2;
		if ( contador < texto1.length )
		{
			if ( texto1[ k ] !== " " && texto1[ k ] !== "," && texto1[ k ] !== "." )
			{
				texto4 += texto3[ contador1 ];
				contador1 ++;
			}
			else
			{
				texto4 += texto1[ k ];
				contador2 ++;
			}
		}
	}
	document.write ( texto1 + "<br>");
	return texto4;
}

function ejercicio11_1 (texto1)
{
	document.write ( "<h4>Ejercicio 11.1. Crea una función que elimine todos los caracteres como puntos, comas, guiones, puntos y coma, dos puntos, signos de admiración, signos de interrogación.</h4>" );
	
	var texto2;
	
	texto2 = "";
	
	for ( i = 0; i < texto1.length; i++ )
	{
		if ( texto1[ i ] !== "." &&  texto1[ i ] !== "," &&  texto1[ i ] !== "-" &&  texto1[ i ] !== ";" &&  texto1[ i ] !== ":" &&  texto1[ i ] !== "¡" &&  texto1[ i ] !== "!" &&  texto1[ i ] !== "?"  &&  texto1[ i ] !== "¿" )
		{
			texto2 += texto1[ i ];
		}
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio11_2 (texto1)
{
	document.write ( "<h4>Ejercicio 11.2. Crea una función que cambie la primera palabra por la segunda palabra, y la segunda por la primera, la tercera por la cuarta, y la cuarta por la tercera...(igual que 10.4 pero con palabras).</h4>" );
	
	var texto2, texto3, vectorTexto2, vectorTexto3, palabra, bCondicion, contador;
	
	texto2 = "";
	texto3 = "";
	vectorTexto2 = [];
	vectorTexto3 = [];
	
	for ( i = 0; i < texto1.length; i++ )
	{
		if ( texto1[ i ] !== "." &&  texto1[ i ] !== "," &&  texto1[ i ] !== "-" &&  texto1[ i ] !== ";" &&  texto1[ i ] !== ":" &&  texto1[ i ] !== "¡" &&  texto1[ i ] !== "!" &&  texto1[ i ] !== "?"  &&  texto1[ i ] !== "¿" )
		{
			texto2 += texto1[ i ];
		}
	}
	
	palabra = "";
	bCondicion = false;
	for ( j = 0; j < texto2.length + 1; j++ )
	{
		if (bCondicion && texto2[ j ] !== " ")
		{
			vectorTexto2[ vectorTexto2.length ] = palabra;
			palabra = "";
			bCondicion = false;
			palabra += texto2[ j ];
		}
		else if ( texto2[ j ] !== " " )
		{
			palabra += texto2[ j ];
		}
		else 
		{
			bCondicion = true;
		}
	}
	
	for ( k = 0; k < vectorTexto2.length; k += 2 )
	{
		vectorTexto3[ k ] = vectorTexto2[ k + 1 ];
		vectorTexto3[ k + 1 ] = vectorTexto2[ k ];
	}
	
	contador = 0;
	bCondicion = false;
	for ( i = 0; i < texto1.length; i++ )
	{
		if ( texto1[ i ] !== "." &&  texto1[ i ] !== "," &&  texto1[ i ] !== "-" &&  texto1[ i ] !== ";" &&  texto1[ i ] !== ":" &&  texto1[ i ] !== "¡" &&  texto1[ i ] !== "!" &&  texto1[ i ] !== "?"  &&  texto1[ i ] !== "¿" && texto1[ i ] !== " " && !bCondicion )
		{
			texto3 += vectorTexto3[ contador ];
			contador++;
			bCondicion = true;
		}
		else if ( texto1[ i ] === "." ||  texto1[ i ] === "," ||  texto1[ i ] === "-" ||  texto1[ i ] === ";" ||  texto1[ i ] === ":" ||  texto1[ i ] === "¡" ||  texto1[ i ] === "!" ||  texto1[ i ] === "?"  ||  texto1[ i ] === "¿" || texto1[ i ] === " " )
		{
			texto3 += texto1[ i ];
			bCondicion = false;
		}
	}
	document.write ( texto1 + "<br>" );
	return texto3;
}

function ejercicio11_3 (texto1)
{
	document.write ( "<h4>Ejercicio 11.3. Crea una función que escriba el texto al revés. // Por ejemplo: </h4>" );
	document.write ( "<h4>Hola que tal?</h4>" );
	document.write ( "<h4>en</h4>" );
	document.write ( "<h4>?lat euq aloH</h4>" );
	
	var texto2, vectorTexto1, vector;
	
	texto2 = "";
	vectorTexto1 = texto1.split( " " );
	vectorTexto1 = vectorTexto1.reverse();
	for ( i = 0; i < vectorTexto1.length; i++ )
	{
		vector = vectorTexto1[ i ].split( "" );
		vector = vector.reverse();
		texto2 += vector.join("") + " ";
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio11_4 (texto1)
{
	document.write ( "<h4>Ejercicio 11.4. Lo mismo que el anterior pero a nivel de palabras. Por ejemplo:</h4>" );
	document.write ( "<h4>Hola que tal estas?</h4>" );
	document.write ( "<h4>en</h4>" );
	document.write ( "<h4>estas? tal que Hola</h4>" );
	
	var texto2, vectorTexto1;
	
	texto2 = "";
	vectorTexto1 = texto1.split( " " );
	vectorTexto1 = vectorTexto1.reverse();
	for ( i = 0; i < vectorTexto1.length; i++ )
	{
		texto2 += vectorTexto1[ i ] + " ";
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio12 (texto1)
{
	document.write ( "<h4>Ejercicio 12. Que convierta los caracteres que están en mayúsculas a minúsculas y las mayúsculas a minúsculas.</h4>" );

	var texto2, a;

	texto2 = "";
	for ( i = 0; i < texto1.length; i++ )
	{
		a = texto1[ i ];
		if ( a === a.toUpperCase() )
		{
			texto2 += a.toLowerCase();
		}
		else if ( a === a.toLowerCase() )
		{
			texto2 += a.toUpperCase();
		}
		else
		{
			texto2 += texto1[ i ];
		}
	}
	document.write ( texto1 + "<br>" );
	return texto2;
}

function ejercicio13 (texto1)
{
	document.write ( "<h4>Ejercicio 13. Palindromos. Los palindromos son palabras o frases que se leen igual de izquierda a derecha que de derecha a izquierda. Son como los números capicuas.</h4>" );
	document.write ( "<h4>Una palabra palíndroma sería Ana.</h4>" );
	document.write ( "<h4>Para detectar que una palabra o frase es palíndroma hay que eliminar los signos como comas, puntos,... eliminar los espacios en blanco también convertir mayúsculas en minúsculas., quitar tildes, convertir vocales con tildes en sin tildes.</h4>" );
	document.write ( "<h4>Y luego comprobar que el primer caracter es igual que el último.</h4>" );
	document.write ( "<h4>Un palíndromo de tipo frase es: La ruta nos aporto otro paso natural.</h4>" );
	document.write ( "<h4>Otro: A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá.</h4>" );
	
	var texto2, texto3, texto4, texto5, minus, minusTilde, a, bCondicion, vector;
	
	texto2 = "";
	for ( i = 0; i < texto1.length; i++ )
	{
		if ( texto1[ i ] !== "." &&  texto1[ i ] !== "," &&  texto1[ i ] !== "-" &&  texto1[ i ] !== ";" &&  texto1[ i ] !== ":" &&  texto1[ i ] !== "¡" &&  texto1[ i ] !== "!" &&  texto1[ i ] !== "?"  &&  texto1[ i ] !== "¿" )
		{
			texto2 += texto1[ i ];
		}
	}
	
	texto3 = "";
	for ( i = 0; i < texto2.length; i++ )
	{
		a = texto2[ i ];
		if ( a === a.toUpperCase() )
		{
			texto3 += a.toLowerCase();
		}
		else
		{
			texto3 += texto2[ i ];
		}
	}
	
	prohibidos = [ 65 , 69 , 73 , 79 , 85 , 97 , 101 , 105 , 111 , 117 , 193 , 201 , 205 , 211 , 218 , 225 , 233 , 237 , 243 , 250 ];
	minus = [ 97 , 101 , 105 , 111 , 117 ];
	minusTilde = [ 225 , 233 , 237 , 243 , 250 ];
	
	texto4 = "";
	for ( i = 0; i < texto3.length; i++ )
	{
		bCondicion = false;
		a = texto3[ i ];
		a = a.charCodeAt();

		if ( a === minusTilde[ 0 ] || a === minusTilde[ 1 ] || a === minusTilde[ 2 ] || a === minusTilde[ 3 ] || a === minusTilde[ 4 ] )
		{
			for ( j = 0; j < minus.length; j++ )
			{
				if ( a === minusTilde[ j ] )
				{
					texto4 += String.fromCharCode( minus[ j ] );
					bCondicion = true;
					break;
				}
			}
		}
		if (!bCondicion)
		{
			texto4 += texto3[ i ];
		}
	}
	
	vector = texto4.split(" ");
	texto5 = vector.join("");
	
	bCondicion = false;
	for ( i = 0; i < texto5.length; i++ )
	{
		if ( texto5[ i ] !== texto5[ texto5.length - 1 - i ] )
		{
			document.write( "No es palíndromo" + "<br>" );
			bCondicion = true;
			break;
		}
	}
	if ( !bCondicion )
	{
		document.write( "Es un palíndromo" + "<br>" );
	}
	
	document.write(texto1 + "<br>" );
	return texto5;
}

