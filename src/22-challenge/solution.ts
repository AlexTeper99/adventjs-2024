export default function generateGiftSets(gifts: string[]): string[][] {
	const ans: string[][] = []
	function backtracking(idx = 0, curr: string[] = []) {
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
