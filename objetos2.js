class Animal{
    constructor (name,weight=0){
        this.name = name
        this.weight = weight
        console.log("Se creo un animal")
    }

    getName(){
        return this.name
    }

    setName(newName){
        this.name =newName
    }

    comer(comida){
        return "El " + this.name + " de "+ this.weight +" Kg " + " esta comiendo " + comida + "."
    }

}

var animal = new Animal("Jaguar",50)
console.log(animal.comer("Carne"))


