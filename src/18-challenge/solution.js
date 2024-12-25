/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
export default function findInAgenda(agenda, phone) {
	/** @type {{ name: string, address: string }} */
	const childData = { name: '', address: '' }
	const kids = agenda.split('\n')
	const kid = kids.filter((kid) => kid.includes(phone))

	if (kid.length === 1) {
		const name = kid[0].split('<')[1].split('>')[0]
		let address = kid[0].split(' ').slice(1, -1).join(' ').split('<')[0].trim()
		return { name: name, address: address }
	}

	return null
}
