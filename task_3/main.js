// let students = ["Андрей", "Иван", "Стас"];
// students[50] = "Индекс 50"
// console.log(students)

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
// college[1][1] = 112
// let kab = college[1][1]
// console.log(college);

let number = [1,2,3,4,5,6,7]
console.log(number);

const coutLenght = 5

if (number.length === coutLenght) {
    console.log("Норм")
} else if ( number.length < coutLenght ) {
    let result = coutLenght - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно увеличить до ${coutLenght}. Прибавьте к массиву значение ${result}`);
} else if ( number.length > coutLenght ) {
    result = number.length - coutLenght;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно уменьшить до ${coutLenght}. Удалите из массива ${result} значение`)
}
