/**
 * @param {string[]} box
 * @returns {boolean} True if the gift is inside the box
 */
export default function inBox(box) {
	const regex = new RegExp(/^# *\* *#$/g)
	let i
	let line
	for (i = 1; i < box.length - 1; i++) {
		line = box[i]
		if (regex.test(line)) return true
	}
	return false
}
