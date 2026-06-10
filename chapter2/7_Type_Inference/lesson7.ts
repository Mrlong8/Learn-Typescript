let countts: string = "Bùi Xuân Long";

countts = "Long"

console.log(">>> Check : ", countts)

let test = ["Long", "Xuan", "typescript", 34];

test.push(53);

// kiểu number

let sothuc: number = 9.6;

let num1: bigint = 9999999999999999999n; // dùng với số lớn

// Kiểu  String
let name1: string = "Long 'CNTT2' \"Khoa CNTT\" "

let name3: string = "Ăn Cơm Chưa"

let name2: string = `Long 'CNTT2' 
 "Khoa CNTT" ${name3} `
console.log(">>>> Check name : ", name2)

// kiểu Boolean

let status1: boolean = true;
let check: boolean = false;
check = true;
let pro: boolean = Boolean("DragonBX") // rÔng = false 

console.log(">>> Check Pro : ", pro);

// Kiểu ObJect

let mine1: {
    name1: string,
    age: number
}
mine1 = {
    name1: "long",
    age: 1
}

// cách viết khác
let mine2: {
    name2: string,
    age: number
} = {
    name2: "long",
    age: 1
}

mine1.name1 = "dùng"

console.log(" >>> Check mine : ", mine1)