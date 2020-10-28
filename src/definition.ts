export const arrayDefinition = {
	type: 'array',
	def: [],
	isNullable: false,
	isUnique: false,
	model: {
		type: 'number'
	},
	limitLength: -1
};

export const booleanDefinition = {
	type: 'boolean',
	def: false,
	isNullable: false
};

export const dateStringDefinition = {
	type: 'dateString',
	def: '0000-01-01',
	delimiter: '-',
	isNullable: false
};

export const dateTimeStringDefinition = {
	type: 'dateTimeString',
	def: '0000-01-01 00:00:00',
	delimiterDate: '-',
	delimiterTime: ':',
	delimiterType: ' ',
	foasType: '',
	isNullable: false
};

export const numberDefinition = {
	type: 'number',
	def: 0,
	isInt: false,
	isNaNable: false,
	isNullable: false,
	max: Number.MAX_VALUE,
	min: -Number.MAX_VALUE
};

export const objectDefinition = {
	type: 'object',
	def: {},
	isNullable: false,
	model: {}
};

export const stringDefinition = {
	type: 'string',
	def: '',
	isNullable: false,
	maxChars: -1,
	minChars: -1
};

export const timeStringDefinition = {
	type: 'timeString',
	def: '00:00:00',
	delimiter: ':',
	foasType: '',
	isNullable: false
};

export const definitions = [
	arrayDefinition,
	booleanDefinition,
	dateStringDefinition,
	dateTimeStringDefinition,
	numberDefinition,
	objectDefinition,
	stringDefinition,
	timeStringDefinition
];
