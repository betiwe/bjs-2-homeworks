function parseCount (num) {
	let parseNumber = Number.parseFloat(num);
	if (Number.isNaN(parseNumber)) {
		throw new Error('Невалидное значение');
	} 
	return parseNumber
}


function validateCount(num) {
	try {
		return parseCount(num);
	} catch (error) {
		return error;
	}
}


class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;
		this.triangleError()
		if(firstSide === undefined || secondSide === undefined || thirdSide === undefined) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	get perimeter() {
		let perim = this.firstSide + this.secondSide + this.thirdSide;
		return perim;
	}
	
	get area() {
		let semiPerimeter = this.perimeter * 1/2;
		return +Math.sqrt(semiPerimeter*(semiPerimeter - this.firstSide)*(semiPerimeter - this.secondSide)*(semiPerimeter - this.thirdSide)).toFixed(3);
	}

	triangleError() {
		if (this.firstSide > this.secondSide + this.thirdSide || this.secondSide > this.firstSide + this.thirdSide || this.thirdSide > this.firstSide + this.secondSide) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

}

function getTriangle(firstSide, secondSide, thirdSide) {
	try {
		const triangle = new Triangle(firstSide, secondSide, thirdSide);
		return triangle;
	} catch (error) {
		let err = {
			get perimeter() {
			  return "Ошибка! Треугольник не существует";
			},
			get area() {
			  return "Ошибка! Треугольник не существует";
			}
		  };
		return err;
	}
}
