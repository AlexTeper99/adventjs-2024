export default function decodeFilename(filename: string): string {
	return filename.slice(filename.indexOf('_') + 1, filename.lastIndexOf('.'))
}
