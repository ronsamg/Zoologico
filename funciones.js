
//Diferentes Sintaxis de Funciones 

function suma(x,y) {
        var sumaTotal = x + y
        console.log(sumaTotal)
} 

var suma2 = function(x,y){
    var sumaTotal = x + y
    return sumaTotal
    console.log(sumaTotal)
}

//con Lambda o Flecha =>
var suma3 = (x,y) => {
    var sumaTotal = x + y
    return sumaTotal
    console.log(sumaTotal)   
}


// Comparación Mayor que
var comparacion = (x,y) => {
    var mayorque = x >= y
    console.log(mayorque)
}

// Serie de Fibonacci
var fibonacci = (fibo,fibo2) => {

    
     var resultado=0; 
 
    for(i = 0; i < 10; i++) { 
        fibo = fibo + fibo2; 
        fibo2 = fibo - fibo2; 
        console.log(resultado+= ' | ' + fibo); 
    }    
} 

//Contador de FOR
var contador =(x) =>{

    for (var i = 0; i<100; i++){
	    if((i%2)==0){
		    x = x + 1
        }
    }
console.log(x)
}


//Acumulador
var acumulador = (x) =>{
    for (var i = 0; i<5; i++){
        x = x + i
        
    }
    console.log(x)
}


//Strings
var comoEstas = (comoEstas1) =>{
    var separado = comoEstas1.split(" ");
    console.log(separado)

}

var helloWorld = (slice) => {
    var slice5 =  slice.slice(1,5)
    console.log(slice5)
}

suma(5,3)
suma2(5,3)
suma3(5,3)
comparacion(5,4)
fibonacci (1,1)
contador (0)
acumulador(1)
comoEstas ("Hola Como Estas Campeon")
helloWorld ("Hello World!!!")



