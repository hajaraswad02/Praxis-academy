document.getElementsByTagName('title')[0].innerHTML = "0057 - MatrixAddition_Demo";

var body = document.getElementsByTagName('body')[0];
var print = function ( text ) {
	
	if ( text === undefined )
		text = "";	
	
	text = addHTMLWhitespaces( text );
	text = justifyText( text, 200 );

	body.innerHTML += text;
}
var println = function ( text ) {
		
	if ( text === undefined )
		text = "";	
	
	print( text + '</br>' );
}
String.prototype.format = function() {
	
	var result = this;
	
	for ( i = 0; i < arguments.length; i++ ) {
		
		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}
	
	return result;
}
var addHTMLWhitespaces = function ( text ) {
	
	var pattern = new RegExp(" ", "g" );
	return text.replace( pattern, '&nbsp;' );
}
var justifyText = function ( text, inlineChars ) {
	
	var result = "";
	
	for ( var i = 0, counter = 1; i < text.length; i++ ) {
		
		if ( counter == inlineChars ) {
			
			if ( text[ i ] == " " || text[ i ] == "&" && isWhiteSpaceCode( text, i ) ) {
				
				result += "</br>";
				counter = 1;
			}
		}
		else {
			counter++;
		}
		result += text[ i ];
	}

	return result;
}
var isWhiteSpaceCode = function ( text, index ) {
	
	var result = true;
	
	var code = "&nbsp;";
	if ( ( index + code.length ) <= text.length ) {
		
		for ( var i = 0; result && i < code.length; )
			if ( text[ index++ ] != code[ i++ ] )
				result = false;
	}

	return result;
}
var run = function () {

	var matrix_A = 
	[
		[ 1, 3, 1 ],
		[ 1, 0, 0 ]
	];

	var matrix_B = 
	[
		[ 0, 0, 5 ],
		[ 7, 5, 0 ]
	];	
	
	println( "Matrix A:" );
	printMatrix( matrix_A );
	println("");
	
	println( "Matrix B:" );
	printMatrix( matrix_B );
	println("");
	
	println( "Sum of Matrix A + Matrix B:" );
	var matrixResult = sum( matrix_A, matrix_B );
	printMatrix( matrixResult );
}

function printMatrix( matrix ) {
	
	for ( var i in matrix ) {
		
		for ( var j in matrix[ i ] ) {
			
			print( matrix[ i ][ j ] + "  " );
		}
		println( "" );
	}
}

function sum( mA, mB ) {
	
	var result = [];
	
	result = new Array( mA.length );
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( mA[ i ].length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			
			result[ i ][ j ] = mA[ i ][ j ] + mB[ i ][ j ];
		}
	}
	
	return result;
}

run();