const fruits = ["apple", "banana", "orange", "grapes", "watermelon"]

let isFound = "nahi mila"

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits);
    if (fruits[i] === "apple") {
        isFound = "mil gaya";
    }
}

console.log(isFound);


const matrix1 =
    [
        [12, 11, 10],
        [9, 8, 7],
        [6, 5, 4]
    ];

const matrix2 =
    [
        [12, 11, 10],
        [9, 8, 7],
        [6, 5, 4]
    ];


for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1.length; j++) {
        console.log(matrix1[i][j] + matrix2[i][j]);
    }
}