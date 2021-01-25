function parseCount(number) {
    let newNumber = Number.parseInt(number);
    if (isNaN(newNumber)) {

        throw new Error("Невалидное значение");
    }
    return newNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (c + b) < a) {

            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return +(this.a + this.b + this.c);
    }
    getArea() {
        const p = this.getPerimeter();
        return +Math.sqrt((p / 2) * (p / 2 - this.a) * (p / 2 - this.b) * (p / 2 - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {

        return {
            getArea: () => `Ошибка! Треугольник не существует`,
            getPerimeter: () => `Ошибка! Треугольник не существует`
        }
    }
}