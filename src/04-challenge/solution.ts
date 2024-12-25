export default function createXmasTree(height: number, ornament: string): string {
	let res: string = ''
	for (let i = 1; i <= height; i++) {
		let str = '_'.repeat(height - i)
		let str2 = ornament.repeat(i * 2 - 1)
		res += str + str2 + str + '\n'
	}
	let side = '_'.repeat(height - 1)
	let base = side + '#' + side
	return res + base + '\n' + base
}
