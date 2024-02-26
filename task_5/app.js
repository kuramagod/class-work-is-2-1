let temp = (e) => {
    if (e === undefined) {
        console.log('Укажите температуру!')
    } else if (e >= 25 ) {
        console.log(`Сегодня ${e} градусов. Можно надеть футболку`)
    }
}

let key = prompt("Введите тем-ру");
temp(key);