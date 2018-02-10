
var gasto = 150

if (gasto>0 && gasto<= 100) {
    console.log("Efectivo")
} else { if (gasto >100 && gasto<=300 ) {
    console.log("Débito")
} else { 
    Console.log("Crédito")
}    

var x = 2
var y = 3
var z = x/y
var residuo = x%y
console.log(z)
console.log(residuo)
if (residuo == 0) {
    console.log("Exacta")
} else {
    console.log("No Exacta")
}

var x = 2
var y = 3
if (x>y) {
    console.log("Mayor"+x)
    console.log("Menor" + y)
} 
else if (x<y) {
    console.log("Mayor" + y)
    console.log("Menor" + x)
} else {
    console.log("Son Iguales")
}

var actual = 1991
var otro = 2001
var distancia = actual - otro
if (distancia > 0) {
    console.log("Han Pasado" + distancia)
} else {
    console.log("Faltan" + (-distancia))
}

var x = 1
var y = 2
var z = 3

if (x==y && y==z && x==z) {
    console.log("Los 3 números son iguales")
} else if (x!=y && y!=z && x!=z ) {
    console.log("Los 3 números son diferentes")
} else {
    console.log("2 de los números son iguales")   
}

var x = 1
var y = 2
var z = 3

if (x>y && x>Z) {
    console.log("El mayor es " + x)
} else if (y>x && y>z) {
    console.log("El mayor es " + y)
} else{
    console.log("El mayor es " + z)
}

# Series For

var x = 0 
for(var i=0;i <= 10000;i++)
{
console.log(x+i)
}

var x = 0 
for(var i=0;i <= 10000;i++)
{
if(i%2 == 0) {
    console.log(x+i)
}
    
}


var x = 0 
for(var i=0;i <= 3000;i++)
{
if(i%2 == 0) {
   x = x + i
}
    console.log(x)
}

var x = 0
var y = 1
var z = 1

console.log(x)
console.log(y)
console.log(z)
for(var i=0;i <= 100;i++)
{
    x=y
    y=z
    z=x+y 
    console.log(z)
}
    

var x = 0
var y = 1
var z = 1

console.log(x)
console.log(y)
console.log(z)
for(var i=0;i <= 100;i++)
{
    x=y
    y=z
    z=x+y 
    console.log(z)

 var array = ["cero","uno", "dos","tres","cuatro","cinco","seis", "siete", "ocho","nueve"]
 for (var i=0;i<array.length;i++){
console.log(array[i])
 }

var x = 0
var lista = []
for (i = 0; i<100; i++){
lista.push(x+i)}
console.log(lista)

var z = 3
var lista2 = []
for (i=0; i<11;i++)
lista2.push(z*i)
console.log(lista2)

var lista1 = [4,76,3,12,65,3]
var lista2 = [234,222,523,65]
for(i=0; i<lista1.length; i++){
var suma = lista1[i] + lista2[1] + lista2[2]+ lista2[3] + lista2[4]+ lista2[0]
}
console.log(suma)

function suma (x,y){
    var sumaTotal = x + y
    console.log(sumaTotal)
}

var suma2 = function (x,y){
    var sumaTotal = x + y
    console.log(sumaTotal)
}

var suma3 = (x,y) => {
    var sumaTotal = x + y
    console.log(sumaTotal)
}

suma (3,5)
suma2 (3,5)
suma3 (3,5)


