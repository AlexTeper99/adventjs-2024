/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
export default function compile(instructions) {
	let variables = {}
	let pointer = 0
	const actions = {
		MOV: (x, y) => {
			variables[y] = isNaN(x) ? Number(variables[x]) : Number(x)
			++pointer
		},
		INC: (x) => {
			variables[x] = ~~variables[x] + 1
			++pointer
		},
		DEC: (x) => {
			variables[x] = ~~variables[x] - 1
			++pointer
		},
		JMP: (x, y) => {
			if (~~variables[x] == 0) {
				pointer = y
			} else ++pointer
		},
	}

	while (pointer < instructions.length) {
		let [action, arg1, arg2 = 0] = instructions[pointer].split(' ')

		actions[action](arg1, arg2)
	}

	return variables['A']
}
