export default function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
	const kids = agenda.split('\n')
	const kid = kids.filter((kid) => kid.includes(phone))

	if (kid.length === 1) {
		const name = kid[0].split('<')[1].split('>')[0]
		let address = kid[0].split(' ').slice(1, -1).join(' ').split('<')[0].trim()
		return { name: name, address: address }
	}

	return null
}
