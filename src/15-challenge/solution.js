/**
 * @param {Array<Object>} data
 * @returns {string}
 */
export default function drawTable(data) {
	const columnsSize = {}

	for (const dataValue of data) {
		for (const key in dataValue) {
			columnsSize[key] ??= key.length
			columnsSize[key] = Math.max(`${dataValue[key]}`.length, columnsSize[key])
		}
	}

	let separator = '+'
	for (const maxLength of Object.values(columnsSize)) {
		separator += '-'.repeat(maxLength + 2) + '+'
	}

	let header = '|'
	for (const [attr, maxLength] of Object.entries(columnsSize)) {
		header += ' ' + attr[0].toUpperCase() + attr.slice(1).padEnd(maxLength - 1, ' ') + ' |'
	}

	let body = ''
	for (const record of data) {
		body += '\n|'
		for (const [attr, maxLength] of Object.entries(columnsSize)) {
			body += ' ' + `${record[attr]}`.padEnd(maxLength, ' ') + ' |'
		}
	}

	return `${separator}\n${header}\n${separator}${body}\n${separator}`
}
