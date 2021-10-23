function defDOM23() {
	var nodosBotones, nodosNumero;
	var i;
	
	nodosBotones = document.getElementsByClassName( "botones" );
	
	// Establecer la función mostrarMensaje al evento click del botón Crear.
	nodosBotones[ 0 ].onclick = crearNumeros;
	nodosBotones[ 1 ].onclick = borrarNumeros;
	
	nodosNumero = document.getElementsByClassName( "numero" );
	for ( i = 0; i < nodosNumero.length; i++ ) {
		nodosNumero[ i ].onmouseenter = modoinverso;
		nodosNumero[ i ].onmouseleave = modoinverso;
	}
	
}

function modoinverso() {
	if ( this.innerHTML % 2 === 0 ) {
		this.classList.toggle( "colorparinverso" );
	} else {
		this.classList.toggle( "colorimparinverso" );
	}
}

function crearNumeros() {
	var aleat;
	var nodos;
	var i;
	
	borrarNumeros();

	nodos = document.getElementsByClassName( "numero" );
	
	i = 0;
	while ( i < 6 ) {
		aleat = genNumAleat( 1, 49 );
		bRepetido = false;
		for ( j = 0; j <= i - 1 && !bRepetido; j++ ) {
			if ( nodos[ j ].innerHTML === aleat.toString() ) {
				bRepetido = true;
			}
		}
		
		if ( !bRepetido ) {
			nodos[ i ].innerHTML = aleat;
			
			if ( aleat % 2 === 0 ) {
				//nodos[ i ].className = "numero colorpar";
				nodos[ i ].classList.add( "colorpar" );
			} else {
				//nodos[ i ].className = "numero colorimpar";
				nodos[ i ].classList.add( "colorimpar" );
			}
			i++;
		}
	}
}

function borrarNumeros() {
	var nodos;
	var i;
	
	nodos = document.getElementsByClassName( "numero" );
	
	for ( i = 0; i < 6; i++ ) {
		nodos[ i ].innerHTML = "x";
		//nodos[ i ].className = "numero";
		
		nodos[ i ].classList.remove( "colorpar" );
		nodos[ i ].classList.remove( "colorimpar" );
		nodos[ i ].classList.remove( "colorparinverso" );
		nodos[ i ].classList.remove( "colorimparinverso" );
	}
}



