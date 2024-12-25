/**
 * @param {number} height
 * @param {string} ornament
 * @returns {string}
 */
export default function createXmasTree(height, ornament) {
	let res = ''
	for (let i = 1; i <= height; i++) {
		let str = '_'.repeat(height - i)
		let str2 = ornament.repeat(i * 2 - 1)
		res += str + str2 + str + '\n'
	}
	let side = '_'.repeat(height - 1)
	let base = side + '#' + side
	return res + base + '\n' + base
}
