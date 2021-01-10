function getSolutions(a, b, c) {

    let D = Math.pow(b, 2) - (4 * a * c);
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        };
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
    }
}


function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
    console.log(`«Значение дискриминанта: ${result.D}»`);
    if (result.D < 0) {
        console.log(`«Уравнение не имеет вещественных корней»`);
    } else if (result.D === 0) {
        console.log(`«Уравнение имеет один корень X₁ = ${result.roots}»`);
    } else {
        console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
    }
}

function getAverageScore(data) {
    let averageMarks = [];
    if (data === undefined) {
        let data = {};
        data.average = 0;
        console.log(data);
    } else {
        for (let prop in data) {
            let mark = data[prop];
            data[prop] = getAverageMark(mark);
            averageMarks.push(getAverageMark(mark));
        }
        data.average = getAverageMark(averageMarks);
    }
    return data;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length == 0 || marks === undefined) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        averageMark += marks[i];
    }
    return averageMark / marks.length;
}

function getPersonData(secretData) {
    let bandit = {};
    for (let prop in secretData) {
        let secret = secretData[prop];
        if (prop === "aaa") {
            bandit.firstName = getDecodedValue(secret);
        } else {
            bandit.lastName = getDecodedValue(secret);
        }
    }
    return bandit;
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return "Родриго";
    } else {
        return "Эмильо";
    }

}