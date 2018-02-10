class Animal{
    constructor (especie){
        this.especie = especie
        console.log(`Se creo un Animal de la especie ${this.especie} `)
    }

    getEspecie(){
        return this.especie
    }

    setEspecie(newEspecie){
        this.especie =newEspecie
    }
}
module.exports.Animal = Animal

