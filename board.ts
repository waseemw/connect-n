export class Board {
	private matrix: string[][] = [];
	private readonly xLength: number;
	private readonly yLength: number;
	
	constructor(public readonly x: number, public readonly y: number) {
		this.xLength = this.x.toString().length;
		this.yLength = this.y.toString().length;
		for (let i = 0; i < y; i++)
			this.matrix.push([]);
	}
	
	getItemAt(x: number, y: number) {
		return this.matrix[x][y];
	}
	
	setItemAt(x: number, y: number, i: string) {
		this.matrix[x][y] = i[0];
	}
	
	clearBoard() {
		for (let i = 0; i < this.y; i++)
			for (let j = 0; j < this.x; j++)
				this.matrix[i][j] = "-";
	}

	private printHorizontalPoints() {
		let line = "";
		while (line.length < this.xLength)
			line += " ";
		line += "  ";
		for (let i = 0; i < this.y; i++) {
			let displayNumber = (i + 1).toString();
			while (displayNumber.length < this.yLength)
				displayNumber += " ";
			line += (i + 1) + "  ";
		}
		console.log(line);
	}
	
	printBoard() {
		console.clear();
		this.printHorizontalPoints();
		let line = "";
		for (let i = 0; i < this.x; i++) {
			line = (i + 1).toString();
			while (line.length < this.xLength)
				line += " ";
			line += "  ";
			for (let j = 0; j < this.y; j++) {
				let item = this.matrix[j][i].toString();
				line += item + "  ";
			}
			console.log(line);
		}
	}
	
}
