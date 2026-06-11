// any
let namev2: any = "Long"

namev2 = 35

// void
const sum = (a: number, b: number): number => {
    return a + b
}

const handleLogs = (mess: string): void => {
    console.log(">>> message : ", mess)
}

// never : không trả vè giá trị gì hoặc code chạy không có hòi kết
const handleException = (errorMessage: string): never => {
    throw Error(errorMessage)
}
const runInfinity = (): void => {
    while (true) {
        console.log("Running....")
    }
}

// handleException("Long");
let a = runInfinity()
console.log(">>Check : ", a)