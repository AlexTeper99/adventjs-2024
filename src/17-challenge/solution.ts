export default function detectBombs(grid: boolean[][]): number[][] {
	const positions: [number, number][] = [
		[0, -1], // izquierda
		[0, +1], // derecha
		[-1, 0], // arriba
		[+1, 0], // abajo
		[-1, -1], // diagonal arriba-izquierda
		[-1, +1], // diagonal arriba-derecha
		[+1, -1], // diagonal abajo-izquierda
		[+1, +1], // diagonal abajo-derecha
	]

	const isValidArray = (neighborRow: number, neighborCol: number): boolean => {
		return grid[neighborRow]?.[neighborCol] !== undefined
	}

	return grid.map((row: boolean[], rowIndex: number): number[] => {
		return row.map((_cell: boolean, cellIndex: number): number => {
			let counter: number = 0

			positions.forEach((pos) => {
				const neighborRow: number = rowIndex + pos[0]
				const neighborCol: number = cellIndex + pos[1]
				if (isValidArray(neighborRow, neighborCol)) {
					const cellFound: boolean = grid[neighborRow][neighborCol]
					if (cellFound === true) counter++
				}
			})

			return counter
		})
	})
}
