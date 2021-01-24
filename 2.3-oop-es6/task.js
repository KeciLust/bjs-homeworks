class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = `magazine`;
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = `book`;
        this.author = author;
        this.state = 100;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = `novel`;
        this.state = 100;
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = `fantastic`;
        this.state = 100;
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount, );
        this.type = `detective`;
        this.state = 100;
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        console.log(book);
        this.books.splice(this.books.indexOf(book), 1);
        return book;
    }
}
class StudentLog {
    constructor(fullName) {
        this.fullName = fullName;
        this.add = {};
    }
    getName() {
        return this.fullName;
    }
    addGrade(grade, subject) {
        if (grade >= 0 && grade < 6) {
            if (this.add[subject] === undefined) {
                this.add[subject] = [];
            }
            this.add[subject].push(grade);
            console.log(this.add[subject].length);
        } else {
            console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`);
        }
        return this.add;
    }
    getAverageBySubject(subject) {
        if (this.add[subject] === undefined) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < this.add[subject].length; i++) {
            sum += this.add[subject][i];
        }
        return sum / this.add[subject].length;
    }
    getTotalAverage() {
        if (this.add === undefined) {
            return 0;
        }
        let sum = 0;
        let sumProp = 0;
        for (let prop in this.add) {
            sum += this.getAverageBySubject([prop]);
            sumProp++;
        }
        return sum / sumProp;
    }
}