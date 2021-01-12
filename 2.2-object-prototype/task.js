"use strict";
//String.prototype.isPalindrome - для задачи №1
String.prototype = isPalindrome();

function isPalindrome(string) {
    let backString = "";
    string = string.toUpperCase();
    for (let i = string.length; i > 0; i--) {
        backString += string[i];
    }
    if (string === backString) {
        return true;
    } else {
        return false;
    }

}

function getAverageMark(marks) {
    let mark = 0;
    if (marks.length === 0) {
        return averageMark = 0;
    } else {
        for (let i = 0; i < marks.length; i++) {
            mark += marks[i];
        }
        let average = mark / marks.length;
        let averageMark = Math.round(average);

        return averageMark
    }
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = new Date(birthday);
    let diff = now - birthday.getTime();
    let age = diff / (((365 * 24) + 6) * 60 * 60 * 1000)
    let verdict;
if ( age >= 18) {
    return true;
}
    return false;
}
