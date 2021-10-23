// Generar números aleatorios.
function genNumAleat( numMin, numMax ) {
	var numAleat;
	
	numAleat = Math.floor( Math.random() * ( numMax - numMin + 1 ) ) + numMin;
	
	return numAleat;
}

// Escribe título h1,h2, h3.. h6
function setTextTag( typeTitle, title ) {
	if ( typeTitle === "1" || typeTitle === 1 ) {
		document.write( "<h1>" + title + "</h1>" );
	} else if ( typeTitle === "2" || typeTitle === 2 ) {
		document.write( "<h2>" + title + "</h2>" );
	} else if ( typeTitle === "p" ) {
		document.write( "<p>" + title + "</p>" );
	}
	
}