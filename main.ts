import {ConnectGame} from "./connect-game";

async function main() {
	let connectGame = new ConnectGame(5);
	await connectGame.startGame();
}

main();