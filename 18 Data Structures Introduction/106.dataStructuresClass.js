class Student {
	constructor(firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
		this.tardies = 0;
		this.scores = [];
	}
	fullName = () => {
		return `Your fullname is ${this.firstName} ${this.lastName}`;
	};

	markLate = () => {
		this.tardies++;
		if (this.tardies >= 3) {
			return `you are expelled`;
		}
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	};
	addScore = (score) => {
		this.scores.push(score);
		return this.scores;
	};
	calculateAverage = () => {
		let sum = this.scores.reduce((a, b) => a + b);
		return sum / this.scores.length;
	};
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();

console.log(firstStudent.markLate());

console.log(secondStudent.scores);
console.log(secondStudent.addScore(9));
console.log(secondStudent.addScore(10));
console.log(secondStudent.addScore(10));
console.log(secondStudent.addScore(9));
console.log(secondStudent.calculateAverage());
