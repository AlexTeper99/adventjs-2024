export default function minMovesToStables(reindeer: number[], stables: number[]): number {
	stables.sort((a, b) => a - b)
	reindeer.sort((a, b) => a - b)
	return reindeer.reduce((acc, reindeer, index) => acc + Math.abs(reindeer - stables[index]), 0)
}
