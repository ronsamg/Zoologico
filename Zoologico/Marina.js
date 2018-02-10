var Animal = require ('./Animal')

class Marina extends Animal.Animal{
        constructor (name,tipo,especie){
            super (especie)
            this.name = name
            this.tipo = tipo
            this.especie = especie
            console.log(`Se metio un ${this.tipo} llamado ${this.name} a la Jaula`)
    }

    getName(){
        return this.name
    }

    setName(newName){
        this.name =newName
    }

    getTipo(){
        return this.tipo
    }

    setTipo(newTipo){
        this.tipo =newTipo
    }

    getEspecie(){
        return this.especie
    }
    
    setEspecie(newEspecie){
        this.especie = newEspecie
    }

    movimiento(){
        return `El ${this.tipo} ${this.name} esta nadando `
    }

}
module.exports.Marina = Marina

