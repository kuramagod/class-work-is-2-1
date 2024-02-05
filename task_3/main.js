let college = [
    {
        name: "Harry",
        age: 17,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 321232,
        typeLearning: "Заочная",
        task: ["ИЗО", "БЖ", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-2-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    }
];

let count = 2;

let personstdnt = college[count]["IsStudent"]
let personName = college[count]["name"]
let personAge = college[count]["age"]
let personCash = college[count]["cash"]
let personkrt = college[count]['isKurator']
let collegeGroup = college[count]["kuratorGroup"]

if ( personstdnt === true ) {
    console.log(`Вы выбрали студента ${personName}`);
    if ( personAge >= 18 ) {
        console.log(`Студент ${personName} совершеннолетний. Ему ${personAge}`);
    } else {
        console.log(`Студент ${personName} не совершеннолетний. Ему ${personAge}`);
    }
    if (personCash >= 4500 ) {
        console.log(`Студент ${personName} получает повышенную стипендию. (${personCash} руб.)`);
    } else if ( personCash <= 4400 && personCash >= 1) {
        console.log(`Студент ${personName} получает обычную стипендию. (${personName} руб.)`);
    } else if  ( personCash === 0 ) {
        console.log(`Студент ${personName} не получает стипендию.`);
    }
} else if ( personstdnt === false ) {
    console.log(`Вы выбрали студента ${personName}`);
    if ( personkrt === true ) {
        console.log(`Преподаватель ${personName} куратор группы ${collegeGroup} `);
    }
}