/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
export default function decodeFilename(filename) {
	return filename.slice(filename.indexOf('_') + 1, filename.lastIndexOf('.'))
}
