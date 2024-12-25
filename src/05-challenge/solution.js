/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
export default function organizeShoes(shoes) {
	const matchedPairs = []
	const counts = {}

	for (const shoe of shoes) {
		// cuenta
		counts[shoe.size] ??= { R: 0, I: 0 }
		counts[shoe.size][shoe.type]++

		const currentCounts = counts[shoe.size]
		if (currentCounts.R > 0 && currentCounts.I > 0) {
			matchedPairs.push(Number(shoe.size))
			currentCounts.R--
			currentCounts.I--
		}
	}

	return matchedPairs
}
