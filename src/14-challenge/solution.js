/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
export default function minMovesToStables(reindeer, stables) {
	stables.sort((a, b) => a - b)
	reindeer.sort((a, b) => a - b)
	return reindeer.reduce((acc, reindeer, index) => acc + Math.abs(reindeer - stables[index]), 0)
}
