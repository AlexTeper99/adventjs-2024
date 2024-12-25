export default function calculatePrice(ornaments: string): number | undefined {
	if (!/^[*o^#@]*$/.test(ornaments)) return undefined

	const dec: { [key: string]: number } = {
		'*': 1,
		'o': 5,
		'^': 10,
		'#': 50,
		'@': 100,
	}

	return ornaments
		.split('')
		.reduce((acc, item, i, arr) => (dec[item] < dec[arr[i + 1]] ? acc - dec[item] : acc + dec[item]), 0)
}
