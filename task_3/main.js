let college = [
    {
        name: "Harry",
        age: 18,
        group: "ИС2-1",
        sudID: 32232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 100,
        isStudent: true
    },

    {
        name: "Ron",
        age: 18,
        group: "ССА-2-1",
        sudID: 32232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 5500,
        isStudent: true
    },
    {
        name:"Tom",
        age: 32,
        isKurator: true,
        kuratorGroup:"ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-02", "МДК-02-02", "МДК-04-01"],
        isStudent: false,
    }
];

if ( college[0]["isStudent"] === true ) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if ( college[0]["age"] >= 18 ) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний. Ему ${college[0]["age"]}`);
    } else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний. Ему ${college[0]["age"]}`);
    }
    if (college[0]["cash"] >= 4500 ) {
        console.log(`Студент ${college[0]["name"]} получает повышенную стипендию. (${college[0]["cash"]} руб.)`);
    } else if ( college[0]["cash"] <= 4400 && college[0]["cash"] >= 1) {
        console.log(`Студент ${college[0]["name"]} получает обычную стипендию. (${college[0]["cash"]} руб.)`);
    } else if  ( college[0]["cash"] === 0 ) {
        console.log(`Студент ${college[0]["name"]} не получает стипендию.`);
    }
} else if ( college[0]["isStudent"] === false ) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if ( college[0]["isKurator"] === true ) {
        console.log(`Преподаватель ${college[0]["name"]} куратор группы ${college[0][kuratorGroup]} `);
    }
}