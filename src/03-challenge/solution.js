/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object}
 */
export default function organizeInventory(inventory) {
	const res = {}
	for (let { name, quantity, category } of inventory) {
		res[category] = res[category] ?? {}
		res[category][name] = (res[category][name] ?? 0) + quantity
	}
	return res
}
