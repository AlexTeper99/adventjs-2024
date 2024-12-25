export default function fixPackages(packages: string): string {
	let firstEnd = packages.indexOf(')')

	if (firstEnd != -1) {
		const lastStart = packages.lastIndexOf('(', firstEnd)
		const toRev = [...packages.slice(lastStart + 1, firstEnd)]
		const prefix = packages.slice(0, lastStart)
		const reversed = toRev.reverse().join('')
		const sufix = packages.slice(firstEnd + 1)
		packages = fixPackages(prefix + reversed + sufix)
	}
	return packages
}
