

type longType = number | string

const addNumberOrString = (a: longType, b: longType) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error("parameters must be numbers or strings");
}
console.log(">>>> check : ", addNumberOrString("Long", "Xuan"))
