let sum4 = (x: number, y: number, z?: number): number => {
    if (z) {
        return x + y + z;
    }
    return x + y

}
console.log(">>Check Suum : ", sum4(2, 3, 4))