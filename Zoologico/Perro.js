var animal = require ('./Animal')

class Perro extends animal.Animal {
    constructor(raza,name,weight){
            super(name,weight)
            this.raza = raza
        console.log("Se creo un Perro")
    }

    getRaza(){
        return this.raza
    }
    
    setName(newRaza){
        this.raza=newRaza
    }

    correr(){
        //otra forma de concatenar
        return `El perro ${this.name} de la raza ${this.raza} esta corriendo`
    }
        
}

module.exports.Perro = Perro