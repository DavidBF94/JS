
function ejercicio1()
{
	document.write ("<h4>Ejercicio 1.</h4>");
	document.write ("<h4>Validación de la letra del DNI.</h4>");
	document.write ("<h4>El algoritmo consiste en que el usuario introduzca su DNI incluyendo la letra (separada por un guion). Debe validar que la letra el DNI es correcto.</h4>");
	document.write ("<h4>Para validar que la letra es la que le corresponde el número se divide entre 23 y el número de resto debe coincidir según el siguiente array.</h4>");
	document.write ("<h4>var arLetras = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T' ];</h4>");
	document.write ("<h4>Indique si el DNI es valido o no o el formato no es correcto.</h4>");
	
	var arLetras, dni, dniNum, dniLetra, indiceLetraCorrecta, 
	
	arLetras = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T' ];
	
	dni = prompt ( "Introduce tu DNI con un guión entre la letra y el número por favor ( la letra en mayúscula )" );
	
	dniNum = dni.slice( 0 , 8 );
	dniLetra = dni[ 9 ];
	
	while ( dni.length > 10 || dni[ 8 ] !== "-" || isNaN( parseInt( dniNum ) ) || !isNaN( parseInt( dniLetra ) ) )
	{
		dni = prompt ( "El formato del DNI que has introducido no es válido. Prueba otra vez por favor. Introduce tu DNI con un guión entre la letra y el número por favor ( la letra en mayúscula )" );
		dniNum = dni.slice( 0 , 8 );
		dniLetra = dni[ 9 ];
	}
	
	indiceLetraCorrecta = parseInt(dniNum) % 23;
	
	if ( dniLetra === arLetras [ indiceLetraCorrecta ] )
	{
		prompt ( "DNI aceptado" );
	}
	else
	{
		prompt ( "DNI no aceptado" );
	}
}

function ejercicio2()
{
	document.write ("<h4>Ejercicio 2.</h4>");
	document.write ("<h4>Cree un algoritmo que nos genere 10 DNI’S correctos.</h4>");
	
	var arLetras, min, max, nAleat;
	
	arLetras = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T' ];
	
	min = 10000000;
	max = 99999999;
	
	for ( i = 0; i < 10; i++)
	{
		nAleat = Math.floor(Math.random() * (max - min + 1) + min);
		document.write( nAleat + "-" + arLetras[ nAleat % 23] + "<br>" );
	}
}

function ejercicio3_1(opcion)
{
	document.write ("<h4>Ejercicio 3.1.</h4>");
	document.write ("<h4>Calcular los números primos entre 1 y 10000.</h4>");
	document.write ("<h4>Existen varios metodos de calculo:</h4>");
	
	document.write ("<h4>1. Forma ( NADA EFICIENTE ). Dividir el número entre todos los anteriores hasta el 2. Por ejemplo 13 lo dividiriamos entre 12, 11, 10, 9, 8, ..3 y 2. Si el resto es en todos los casos distintos de 0, el número podemos asegurar que es primo. Si</h4>");
	document.write ("<h4>en alguna división es 0. Dejamos de dividir por el resto de números ya que podemos considerar que no es primo.</h4>");
	document.write ("<h4>2. Forma ( POCO EFICIENTE ). Dividir el número entre todos los anteriores pero empezando en mitad del número. Por ejemplo 13, lo dividiriamos entre 6, 5, 4, 3 y 2. Y lo mismo que el anterior con respecto al resto.</h4>");
	document.write ("<h4>3. Forma ( EFICIENTE ). Dividir el número entre todos los anteriores pero empezando en la raiz cuadrada del número. Por ejemplo, la raiz cuadrada de 13 es 3,6055.. así que solo tendríamos que dividirlo entre 3 y 2. Y lo mismo que el anterior con</h4>");
	document.write ("<h4>respecto al resto</h4>");
	document.write ("<h4>4. Forma ( BASTANTE EFICIENTE ). Es dividir el número 13 entre los anteriores números primos y empezando en la raiz cuadrada del número. Por ejemplo,la raiz cuadrada de 27 es 5,19.. así que solo lo dividiriamos entre 5, 3 y 2. Nos saltariamos el</h4>");
	document.write ("<h4>4 ya que no es primo. Esta solución requiere ir guardando los números primos obtenidos en un array.</h4>");
	document.write ("<h4>Realizar una única función para las cuatro formas. Hay que pasarle el número de forma.</h4>");
	
	var lim, bCondicion, primos, condicion, indice, inicio, fin, tiempo;
	
	lim = 10000;
	
	if ( opcion === 1 )
	{
		inicio = new Date().getTime();
		document.write( "<h4>FORMA 1</h4>" );
		
		document.write( 2 + " ");
		
		for ( i = 3; i < (lim + 1); i++)
		{
			bCondicion = false;
			for ( j = i - 1; j > 1; j--)
			{
				if ( i % j === 0 )
				{
					bCondicion = true;
					break;
				}
			}
			if ( !bCondicion )
			{
				document.write( i + " " );
			}
		}
		fin = new Date().getTime();
	}
	
	else if ( opcion === 2 )
	{
		inicio = new Date().getTime();
		document.write( "<h4>FORMA 2</h4>" );
		
		document.write( 2 + " ");
		
		for ( i = 3; i < (lim + 1); i++)
		{
			bCondicion = false;
			for ( j = Math.floor( i / 2 ); j > 1; j--)
			{
				if ( i % j === 0 )
				{
					bCondicion = true;
					break;
				}
			}
			if ( !bCondicion )
			{
				document.write( i + " " );
			}
		}
		fin = new Date().getTime();
	}
	
	else if ( opcion === 3 )
	{
		inicio = new Date().getTime();
		document.write( "<h4>FORMA 3</h4>" );
		
		document.write( 2 + " ");
		
		for ( i = 3; i < (lim + 1); i++)
		{
			bCondicion = false;
			for ( j = Math.floor( Math.sqrt( i ) ); j > 1; j--)
			{
				if ( i % j === 0 )
				{
					bCondicion = true;
					break;
				}
			}
			if ( !bCondicion )
			{
				document.write( i + " " );
			}
		}
		fin = new Date().getTime();
	}
	
	else if ( opcion === 4 )
	{
		inicio = new Date().getTime();
		document.write( "<h4>FORMA 4</h4>" );
		
		primos = [];
		primos[ 0 ] = 2;
		document.write( primos[ 0 ] + " ");
		contador = 0;
		
		for ( i = 3; i < (lim + 1); i++)
		{
			bCondicion = false;
			indice = primos.indexOf( Math.floor( Math.sqrt( i ) ) );
			if ( indice === - 1)
			{
				indice = contador;
			}
			for ( j = indice; j > -1; j--)
			{
				if ( i % primos[ j ] === 0 )
				{
					bCondicion = true;
					break;
				}
			}
			if ( !bCondicion )
			{
				contador++;
				primos[ contador ] = i;
				document.write( primos[ contador ] + " " );
			}
		}
		fin = new Date().getTime();
	}
	tiempo = fin - inicio;
	document.write( "<h5>Tiempo de ejecución: " + tiempo );
}
