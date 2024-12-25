/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
export default function detectBombs(grid) {
	function detectBombs(grid) {
		const positions = [
			[0, -1], // izquierda
			[0, +1], // derecha
			[-1, 0], // arriba
			[+1, 0], // abajo
			[-1, -1], // diagonal arriba-izquierda
			[-1, +1], // diagonal arriba-derecha
			[+1, -1], // diagonal abajo-izquierda
			[+1, +1], // diagonal abajo-derecha
		]

		const isValidArray = (neighborRow, neighborCol) => {
			return grid[neighborRow]?.[neighborCol] !== undefined
		}

		return grid.map((row, rowIndex) => {
			return row.map((cell, cellIndex) => {
				let counter = 0

				positions.forEach((pos) => {
					const neighborRow = rowIndex + pos[0]
					const neighborCol = cellIndex + pos[1]
					if (isValidArray(neighborRow, neighborCol)) {
						const cellFound = grid[neighborRow][neighborCol]
						if (cellFound === true) counter++
					}
				})

				return counter
			})
		})
	}
}
