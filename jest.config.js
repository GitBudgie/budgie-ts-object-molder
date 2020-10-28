module.exports = {
	roots: [
		'<rootDir>/src'
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: [
		'js',
		'json',
		'jsx',
		'node',
		'ts',
		'tsx'
	]
}
