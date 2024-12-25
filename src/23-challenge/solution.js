/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
export default function findMissingNumbers(nums) {
	const numSet = new Set(nums)
	const max = Math.max(...nums)
	return Array.from({ length: max }, (_, i) => i + 1).filter((num) => !numSet.has(num))
}
