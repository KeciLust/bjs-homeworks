"use strict";

String.prototype.isPalindrome = function isPalindrome() {
    const str = this;
    let backString = "";
    let stringCase = str.toUpperCase();
    for (let i = str.length - 1; i > -1; i--) {
        backString += stringCase[i];
    }
    if (stringCase === backString) {
        return true;
    } else {
        return false;
    }

}

function getAverageMark(marks) {
    let marksSummary = 0;
    if (marks.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < marks.length; i++) {
            marksSummary += marks[i];
        }
        const average = marksSummary / marks.length;
        const averageMark = Math.round(average);

        return averageMark;
    }
}

function checkBirthday(birthday) {
    let now = Date.now();
    const parsedBirthday = new Date(birthday).getTime();
    let diff = now - parsedBirthday;
    let age = diff / (((365 * 24) + 6) * 60 * 60 * 1000)
    return age >= 18;
}