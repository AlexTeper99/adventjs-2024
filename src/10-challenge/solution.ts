type Instruction = string
type Variables = Record<string, number>
type ActionFunction = (arg1: string, arg2?: string | number | undefined) => void
type Actions = Record<string, ActionFunction>
export default function compile(instructions: Instruction[]): number {
	let variables: Variables = {}
	let pointer: number = 0

	const actions: Actions = {
		MOV: (x: string, y: string | number | undefined) => {
			if (y !== undefined) variables[y] = isNaN(Number(x)) ? Number(variables[x]) : Number(x)

			++pointer
		},
		INC: (x: string) => {
			variables[x] = ~~variables[x] + 1
			++pointer
		},
		DEC: (x: string) => {
			variables[x] = ~~variables[x] - 1
			++pointer
		},
		JMP: (x: string, y: string | number | undefined) => {
			if (~~variables[x] === 0) {
				pointer = Number(y)
			} else {
				++pointer
			}
		},
	}

	while (pointer < instructions.length) {
		const [action, arg1, arg2 = 0] = instructions[pointer].split(' ')
		actions[action](arg1, arg2)
	}

	return variables['A']
}
