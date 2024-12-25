export default function findMissingNumbers(nums: number[]): number[] {
	const numSet = new Set(nums)
	const max = Math.max(...nums)
	return Array.from({ length: max }, (_, i) => i + 1).filter((num) => !numSet.has(num))
}
