type Movement = 'U' | 'D' | 'R' | 'L'
type Space = '·' | '@' | '*' | 'o'

export type Board = string[]
export type Result = 'none' | 'crash' | 'eat'

export default function moveTrain(board: Board, mov: Movement): Result {
	const moveActions: Record<Movement, number> = {
		D: board[0].length + 1,
		L: -1,
		R: 1,
		U: -board[0].length - 1,
	}

	const resultActions: Record<Exclude<Space, '@'> | '|' | 'undefined', Result> = {
		'·': 'none',
		'*': 'eat',
		'|': 'crash',
		'o': 'crash',
		'undefined': 'crash',
	}

	const boardStringified: string = board.join('|')

	const trainI: number = boardStringified.indexOf('@')
	if (trainI === -1) return 'none'

	const nextTrainCell = boardStringified[trainI + moveActions[mov]] as Exclude<Space, '@'> | 'undefined'

	return resultActions[nextTrainCell]
}

/*
type Space = '·' | '@' | '*' | 'o'
type Board = Space[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  let jHead = board.findIndex((row) => row.includes("@"));
   let iHead = board.at(jHead).indexOf("@");
  
    // Mapeo de movimientos
  const movementMap  = {
    'U': { i: 0, j: -1 },
    'D': { i: 0, j: 1 },
    'L': { i: -1, j: 0 },
    'R': { i: 1, j: 0 }
  };

  // Calcular la nueva posición
  const { i, j } = movementMap[mov];
  const newHeadPos= {
    i: iHead + i,
    j: jHead  + j
  };

  // Comprobar si la nueva posición es válida
  // Choque borde 1
  if (newHeadPos.i < 0 || newHeadPos.j < 0 ) {
    return 'crash';
  }

  // Choque borde 2
  if(newHeadPos.i >= board.length || newHeadPos.j >= board[0].length) return "crash"

  const nextSpace = board[newHeadPos.j][newHeadPos.i];

  // Comprobar lo que encuentra el tren
  if (nextSpace === 'o' ) {
    return 'crash'; // Se choca con un obstáculo
  } 
  if (nextSpace === '*') {
    return 'eat'; // Se come la comida
  }

  return 'none'; // Movimiento válido sin colisiones 
}



*/
