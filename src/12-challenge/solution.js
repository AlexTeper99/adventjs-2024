/** @param {string} ornaments
 * @return {number|undefined} - The price of the tree
 */
export default function calculatePrice(ornaments) {
	if (!/^[*o^#@]*$/.test(ornaments)) return undefined
	const decorations = {
		'*': 1,
		'o': 5,
		'^': 10,
		'#': 50,
		'@': 100,
	}

	return ornaments
		.split('')
		.reduce(
			(acc, item, i, arr) =>
				decorations[item] < decorations[arr[i + 1]] ? acc - decorations[item] : acc + decorations[item],
			0
		)
}
