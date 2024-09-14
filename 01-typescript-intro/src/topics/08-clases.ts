export class Person{

    constructor(
        public name: string,
        public lastName: string, 
        private address: string = 'No Address'
    ){}

}

// export class Hero extends Person{

//     constructor(public superpoder: string, name: string, address: string){
//         super(name, address);
//     }
// }

export class Hero {

    //public person: Person;
    constructor(
        public superpoder: string, 
        public name: string, 
        public address: string, 
        public person: Person){
        //this.person = new Person(name);
    }
}

const tony = new Person('Tony', 'Stark', 'Madrid')

const test = new Hero('Volar','Rodrigo', 'Valencia', tony);
console.log(test)