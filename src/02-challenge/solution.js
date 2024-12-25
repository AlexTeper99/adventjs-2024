/**
 * @param {string[]} names
 * @returns {string}
 */
export default function createFrame(names) {
	const maxNameLength = [...names].sort((a, b) => b.length - a.length).at(0).length
	const longestBorder = '*'.repeat(maxNameLength + 4)
	const namesWithSpaces = []

	for (const name of names) {
		namesWithSpaces.push(`* ${name}${' '.repeat(maxNameLength - name.length)} *`)
	}

	return `${longestBorder}\n${namesWithSpaces.join('\n')}\n${longestBorder}`
}
