import fn from './solution'

describe('Challenge 26: Calculate the completed percentege', () => {
	it('Test 01', () => {
		const result: string = fn('01:00:00', '03:00:00')
		const expected: string = '33%'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn('02:00:00', '04:00:00')
		const expected: string = '50%'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn('01:00:00', '01:00:00')
		const expected: string = '100%'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: string = fn('00:10:00', '01:00:00')
		const expected: string = '17%'
		expect(result).toBe(expected)
	})
})
