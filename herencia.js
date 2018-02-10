
class Perro extends Animal {
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

class Pajaro extends Animal {
    constructor(especie,name,weight){
            super(name,weight)
            this.especie = especie
        console.log("Se creo un Pajaro")
    }

    getEspecie(){
        return this.especie
    }
    
    setName(newEspecie){
        this.especie=newEspecie
    }

    volar(){
        return `El Pajaro ${this.name} de la especie ${this.especie} esta volando`
    }
        
}

var pug = new Perro ("Pug","Tabule",20)
console.log(pug)


var colibri = new Pajaro ("Colibri","Alas")
console.log(colibri)


function comerComida(Animal){
    console.log(Animal.comer("Comida"))
}

comerComida(pug)