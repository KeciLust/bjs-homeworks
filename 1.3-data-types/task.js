`use strict`;

function calculateTotalMortgage(percent, contribution, amount, date) {
    let arr = [
        percent,
        contribution,
        amount,
        date.getMonth()
    ];
    arr.name = ["Процентная ставка", "Первоначальный взнос", "Общая стоимость", "Дата погашения"];
    for (let i = 0; i < 4; i++) {
        if (!parseInt(arr[i])) {
            return `Параметр ${arr.name[i]} содержит неправильное значение ${arr[i]}`;
        }
    }

    let credit = amount - contribution;
    let now = new Date;
    let P = (percent / 100) / 12; // Месячный процент
    let timeCredit = (date.getFullYear() - now.getFullYear()) * 12 + (date.getMonth() - now.getMonth()) - 1; // Время кредита в месяцах, минус один месяц, оплата со след месяца.
    let creditMonth = credit * (P + P / (Math.pow((1 + P), timeCredit) - 1));
    let totalAmount = (creditMonth * timeCredit).toFixed(2);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    if (Number(name) || name === undefined || name === "") {
        greeting = `Привет, мир! Меня зовут Аноним.`;
        } else {greeting = `Привет, мир! Меня зовут ${name}.`;
    } console.log(greeting);
    return greeting;
}