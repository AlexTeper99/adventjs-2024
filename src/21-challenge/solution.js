/**
 * @typedef {{ value: string; left: BinaryTree | null; right: BinaryTree | null }} BinaryTree
 */

/**
 * @param {BinaryTree | null} tree
 * @returns {number} - Height of the tree.
 */
export default function treeHeight(tree) {
	if (!tree) return 0

	const leftHeight = treeHeight(tree.left)

	const rightHeight = treeHeight(tree.right)

	return 1 + Math.max(leftHeight, rightHeight)
}
