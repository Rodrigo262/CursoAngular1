function classDecorator<T extends {new(...args:any[]):{}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

//Esto es my raro tener que hacerlo. En el navegador me da un error, pero debería de añadir las propiedades del decorador a la clase
//Los decoradores son funciones que pueden añadir propiedades, métodos, etc...

@classDecorator
class superClass{
    public myProperty: string = 'Abc123'

    print(){
        console.log('Hola Mundo')
    }
}

console.log(superClass);
const myClass = new superClass();
console.log(myClass);