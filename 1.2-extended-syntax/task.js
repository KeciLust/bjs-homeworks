"use strict";

function getResult(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x.push((-b - Math.sqrt(d)) / 2 * a);
        x.push((-b + Math.sqrt(d)) / 2 * a);
    } else if (d === 0) {
        x.push(-b / (2 * a));
    }
    return x;
}

function getAverageMark(marks) {
    let quantityMarks;
    let sumMarks = 0;
    if (marks.length == 0) {
        return "0";
    }
    quantityMarks = marks.slice(0, 5);
    for (let i = 0; i < quantityMarks.length; i++) {
        sumMarks = sumMarks + quantityMarks[i];
    }
    return sumMarks / quantityMarks.length;
}

function askDrink(name, dateOfBirthday) {
    let fullTime = dateOfBirthday.getTime();
    let now = new Date();
    let result
    let checkAge = now - fullTime - 568036800000 //Столько миллисекунд в 18 годах(к каждому году добавленно 6 часов)
    if (checkAge >= 0) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
    return result;
}