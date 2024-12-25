export default function drawTable(data: Array<Record<string, string | number>>): string {
	const columnsSize: { [key: string]: number } = {}

	for (const dataValue of data) {
		for (const key in dataValue) {
			columnsSize[key] ??= key.length
			columnsSize[key] = Math.max(`${dataValue[key]}`.length, columnsSize[key])
		}
	}

	let separator = '+'
	for (const maxLength of Object.values(columnsSize)) {
		separator += '-'.repeat((maxLength as number) + 2) + '+'
	}

	let header = '|'
	for (const [attr, maxLength] of Object.entries(columnsSize)) {
		header += ' ' + attr[0].toUpperCase() + attr.slice(1).padEnd((maxLength as number) - 1, ' ') + ' |'
	}

	let body = ''
	for (const record of data) {
		body += '\n|'
		for (const [attr, maxLength] of Object.entries(columnsSize)) {
			body += ' ' + `${record[attr]}`.padEnd(maxLength as number, ' ') + ' |'
		}
	}

	return `${separator}\n${header}\n${separator}${body}\n${separator}`
}
