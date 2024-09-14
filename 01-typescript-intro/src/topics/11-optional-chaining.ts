
export interface Passenger{
    name:string;
    children?: string[];
}

const p1 :Passenger = {
    name: 'Rodrigo'
}

const p2 :Passenger = {
    name: 'Isabel',
    children :['Hugo', 'Mateo'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren)
}

const returnChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren)
    return howManyChildren
}

printChildren(p1)
printChildren(p2)

//returnChildren(p1) // Error ! fuerza a decirle que siempre va a tener hijos
returnChildren(p2)