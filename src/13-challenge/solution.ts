export default function isRobotBack(moves: string): boolean | [number, number] {
	const movements: Record<string, number> = { U: 0, D: 0, L: 0, R: 0 }
	const opposite: Record<string, string> = { U: 'D', D: 'U', L: 'R', R: 'L' }

	for (let i = 0; i < moves.length; i++) {
		const move = moves[i]
		if (move === '!') {
			movements[opposite[moves[++i]]]++
		} else if (move === '?') {
			movements[moves[++i]] ||= 1
		} else if (move === '*') {
			movements[moves[++i]] += 2
		} else {
			movements[move]++
		}
	}

	const X = movements.R - movements.L
	const Y = movements.U - movements.D
	return (!X && !Y) || [X, Y]
}
