/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
export default function drawRace(indices, length) {
	const race = indices.reduce((prevValue, value, index) => {
		const reindeerI = (value + length) % length
		let iceTrack = `${'~'.repeat(reindeerI)}${'r'.slice(~reindeerI + 2)}`.padEnd(length, '~')
		return prevValue + ' '.repeat(indices.length - index - 1) + iceTrack + ` /${index + 1}\n`
	}, '')

	return race.trimEnd()
}

// function drawRace(indices: number[], length: number): string {

//   const res : string[] = [];
//   let initial : string = ""
//   let track: string[];

//   indices.forEach((deerPos, i) => {
//    initial = " ".repeat(indices.length - i - 1)
//    track = Array(length).fill("~")
//    if(deerPos > 0){
//     track[deerPos] = "r"
//    }else if(deerPos < 0){
//       track[length + deerPos] = 'r'
//    }
//    res.push(initial + track.join("") + " /" + (i+1))
//   })

//   return res.join("\n")

// }
