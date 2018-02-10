var animal = require ('./Animal')

class Terrestre extends animal.Animal{
        constructor (name,tipo,especie){
            super (especie)
            this.name = name
            this.tipo = tipo
            this.especie = especie
            console.log(`Se metio un ${this.tipo} llamado ${this.name} a la jaula `)
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
        return `El ${this.tipo} ${this.name} esta corriendo `
    }

}



module.exports.Terrestre = Terrestre