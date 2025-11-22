class Game {

    constructor(this, player_1: string, player_2: string)
}

class Board {

    constructor() {
	this.board: Map<[number, number], string> = MakeBoard()
    }

    private MakeBoard(): Map<[number, number], string> {

    // This function NEEDS to be run just only once at the begging of the game
    
    // Map <array, string>:
    
    // 1. array -> coordinates (x, y)
    // 2. string -> empty or occupaid (player_name) 
    
    const board = new Map<[number, number], string>;
    for(let i: number = 0; i < 3; i++) {
	for (let j: number = 0; j < 3; j++) {
	    board.set([i, j], "empty");
	}
    }
    return board;
    }

    private CheckBoard(): boolean {

    // Check if any of the player winned the game:
    
    // If so -> return TRUE
    // If not -> return FALSE

    for (let i: number = 0; i < 3; i++) {
	for (let j: number = 0; j < 3; j++) {
	    
	}
    }
	
    if (check_game == false) {return false}
    else if (check_game == true) {return true}
    }
}

function CheckGameStatus(board_map: Map<string, string, string>): boolean {

}

function RenderBoard()



export default MakeBoard;
