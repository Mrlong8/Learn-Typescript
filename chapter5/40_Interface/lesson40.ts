
interface IPerson {
    firstName: string;
    lastName: string;
}

function getFullName(
    person: IPerson
) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: "Long",
    lastName: "Xuan"
};

console.log(getFullName(person40))
