function getResult(a, b, c) {
    "use strict";
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x.push((-b - Math.sqrt(-4 * a * c)) / 2 * a);
        x.push((-b + Math.sqrt(-4 * a * c)) / 2 * a);
    } else if (d === 0) {
        x.push((-b) / 2 * a);
    }
    return x;
}

function getAverageMark(marks) {
    "use strict";
    let averageMark;
    let quantityMarks;
    let sumMarks = 0;
    if (marks.length == 0) {
        averageMark = 0;
    } else {
        quantityMarks = marks.slice(0, 5);
        for (let i = 0; i < quantityMarks.length; i++) {
            sumMarks = sumMarks + quantityMarks[i];
        }
        averageMark = sumMarks / quantityMarks.length;
    }
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    "use ctrict";
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