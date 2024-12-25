export default function removeSnow(s: string): string {
	let word = [...s]
	let i = 0

	while (i < word.length - 1) {
		if (word[i] === word[i + 1]) {
			word.splice(i, 2)
			i = Math.max(0, i - 1)
		} else {
			i++
		}
	}

	return word.join('')
}
