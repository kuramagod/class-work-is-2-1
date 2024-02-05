let college = [
    {name: "Tom", age: 17, group: "Ис2-2"},
    {name: "Bob", age: 15, group: "Ис2-1"},
    {name: "Stan", age: 16, group: "Ис2-1"},
    {name: "Harry", age: 17, group: "Ис2-2"}
];

let count = 2;
let studentAge = college[count]["age"];
let studentName = college[count]["name"];

if (studentAge >= 18) {
    console.log(`Студен ${studentName} совершеннолетний. Ему ${studentAge}`)
} else if ( studentAge < 18 ) {
    console.log(`Студен ${studentName} не совершеннолетний. Ему ${studentAge}`)
} 