/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */

export default function generateGiftSets(gifts) {
	const ans = []
	function backtracking(idx = 0, curr = []) {
		if (curr.length > 0) {
			ans.push([...curr])
		}

		for (let i = idx; i < gifts.length; i++) {
			curr.push(gifts[i])
			backtracking(i + 1, curr)
			curr.pop()
		}
	}

	backtracking()

	return ans.sort((a, b) => a.length - b.length)
}
