var objeto = {}

//console.log(typeof(objeto))

var jetta = {
    motor:"V4",
    ruedas:4,
    marca:"Nissan",
    acelerar: function(){
        console.log(this.motor)
        return "ARRANCANDO"
    }

}
console.log(jetta.acelerar())

/*
var factura = {
    subTotal: 100,
    iva: 0.16,
    total: function(){
        return (subTotal + (subTotal * iva)) }

}     
console.log(factura.total())

*/

// Sintaxis de Objetos para poder reutilizarlo
function Auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

    var arrancar = function() {
        return "Arrancó el " + modelo
    }
    this.arrancar = arrancar
}

var jetta = new Auto("VW","Jetta",2010)
console.log(jetta.arrancar())
var tsuru = new Auto("Nissan","Tsuru",2010)
console.log(tsuru.arrancar())




