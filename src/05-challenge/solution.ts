export type Shoe = {
	type: 'I' | 'R'
	size: number
}

export default function organizeShoes(shoes: Shoe[]): number[] {
	const matchedPairs = []
	const counts: { [key: number]: { R: number; I: number } } = {}

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
