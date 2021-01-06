function getResult(a,b,c){
    "use strict";
    let d = b** - 4 * a * c;
    let x = [];
    if ( d > 0) {
        x[0] = ( -b - Math.sqrt(b** - 4 * a * c)) / 2 * a;
        x[1] = ( -b + Math.sqrt(b** - 4 * a * c)) / 2 * a;
    } else if ( d === 0) {
        x[0] = ( -b)/ 2 * a;
    }     
      return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}