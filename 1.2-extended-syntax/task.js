function getResult(a, b, c) {
    "use strict";
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x[0] = (-b - Math.sqrt(-4 * a * c)) / 2 * a;
        x[1] = (-b + Math.sqrt(-4 * a * c)) / 2 * a;
    } else if (d === 0) {
        x[0] = (-b) / 2 * a;
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
    // код для задачи №3 писать здесь
    // return result;
}