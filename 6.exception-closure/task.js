function parseCount(count) {
 if (Number.parseFloat(count)) {
    return Number.parseFloat(count)
 } else {
    throw new Error('Невалидное значение')
 }
};

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
};

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if (this.sideA + this.sideB < this.sideC || 
            this.sideA + this.sideC < this.sideB || 
            this.sideB + this.sideC < this.sideA) {
            throw new Error('Треугольник с такими сторонами не существует')
         }
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC
    }

    get area() {
        let p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3))
    }
};

function getTriangle(sideA, sideB, sideC) {
    let errorObject = {
        get perimeter() {
            return this.perimeter = 'Ошибка! Треугольник не существует'
        },

        get area() {
            return this.area = 'Ошибка! Треугольник не существует'
        }
    };

    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return errorObject
    }
    
}