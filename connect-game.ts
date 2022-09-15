import {Board} from "./board";

const rlp = require("readline");

const rl = rlp.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export class ConnectGame {
	private board = new Board(6, 7);
	
	constructor(private n: number) {
	
	}
	
	async startGame() {
		this.board.clearBoard();
		let player = ["X", "Y"][Math.floor(Math.random() * 2)] as "X" | "Y";
		let prefix = "";
		let winner;
		while (!(winner = this.isFinished())) {
			this.board.printBoard();
			let availablePosition = await this.askPlayer(player, prefix);
			if (availablePosition) {
				prefix = availablePosition;
				continue;
			}
			prefix = "";
			player = player == "X" ? "Y" : "X";
		}
	}
	
	private async askPlayer(player: "X" | "Y", prefix = "") {
		if (prefix) console.log(prefix);
		let ans = await this.ask("Player " + player + ", please choose a position: ");
		let pos = Number(ans);
		if (!pos || pos > this.board.x || pos < 1)
			return "Please choose a correct position number";
		pos -= 1;
		let lowestUnfilled = this.getLowestUnfilledY(pos);
		if (lowestUnfilled == -1)
			return "The position is already full";
		this.board.setItemAt(pos, lowestUnfilled, player);
		return "";
	}
	
	private getLowestUnfilledY(x: number) {
		for (let i = this.board.x; i >= 0; i--)
			if (this.board.getItemAt(x, i) == "-")
				return i;
		return -1;
	}
	
	private ask = async (question: string) => new Promise<string>(resolve =>
		rl.question(question, input => resolve(input)),
	);
	
	
	isFinished() {
		// let playerXVert = false, playerXHoriz = false, playerXDiag = false;
		// let playerYVert = false, playerYHoriz = false, playerYDiag = false;
		//
		// for (let y = 0; y < this.board.y; y++)
		// 	for (let x = 0; x < this.board.x; x++) {
		// 		if (this.board)
		// 			for (let n = 0; n < this.n; n++) {
		//
		// 			}
		// 	}
		return "";
	}
}