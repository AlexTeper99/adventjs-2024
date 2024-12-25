export type Inventory = Array<{ name: string; quantity: number; category: string }>

export default function organizeInventory(inventory: Inventory): object {
	const res: Record<string, Record<string, number>> = {}
	for (let { name, quantity, category } of inventory) {
		res[category] = res[category] ?? {}
		res[category][name] = (res[category][name] ?? 0) + quantity
	}
	return res
}
