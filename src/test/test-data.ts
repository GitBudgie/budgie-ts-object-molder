import { getCharLength } from '../get-char-length';
import { getUniqueItems } from '../get-unique-items';
import { isBoolean } from '../is-boolean';
import { isDateString } from '../is-date-string';
import { isDateTimeString } from '../is-date-time-string';
import { isFiniteNumber } from '../is-finite-number';
import { isNumber } from '../is-number';
import { isObjectType } from '../is-object-type';
import { isString } from '../is-string';
import { isTimeString } from '../is-time-string';

// Data for a comprehensive object test.

const miscValues = [
	undefined, undefined,
	null, null,
	[], [], [0, 1, 2], ['a', 'b', 'c'], [null, null, undefined],
	false, false, true, true,
	NaN, NaN, -Infinity, Infinity,
	-999, -100, -50, -3.14, -1, 0, 1, 3.14, 50, 100, 999,
	{}, {},
	{ name: null }, { name: '' }, { name: 'John' }, { name: '😀' },
	'', ' ', '        ', '1234567890', '😀', '😀😁😎', '🏳️',
	'cat', 'cat', 'dog', 'horse', 'hippo', 'elephant', 'budgerigar'
];

const dateStringValues = [
	'1999-12-31', '1999-2-28', '1999-2-29', 'year-month-day'
];

const dateTimeStringValues = [
	'1999-12-31', '1999-12-31 ', '1999-12-31 23:59:59',
	'year-month-day hour:minute:second'
];

const timeStringValues = [
	'00:00:00', '23:59:59', '23:59:59:999', '', '0',
	'-00:-00:-00', 'hour:minute:second'
];

export const testData = {
	booleans: miscValues,
	limitedBooleans: miscValues,
	uniqueBooleans: miscValues,
	uniqueNullableBooleans: miscValues,
	numbers: miscValues,
	integers: miscValues,
	rangedNumbers: miscValues,
	NaNableFiniteNumbers: miscValues,
	objectsWithName: miscValues,
	strings: miscValues,
	rangedStrings: miscValues,
	dateStrings: dateStringValues,
	dateTimeStrings: dateTimeStringValues,
	timeStrings: timeStringValues
};

export const testDefinedModel = {
	booleans: {
		type: 'array',
		model: {
			type: 'boolean'
		}
	},
	limitedBooleans: {
		type: 'array',
		limitLength: 10,
		model: {
			type: 'boolean'
		}
	},
	uniqueBooleans: {
		type: 'array',
		isUnique: true,
		model: {
			type: 'boolean',
			def: undefined
		}
	},
	uniqueNullableBooleans: {
		type: 'array',
		isUnique: true,
		model: {
			type: 'boolean',
			def: undefined,
			isNullable: true
		}
	},
	numbers: {
		type: 'array',
		model: {
			type: 'number'
		}
	},
	integers: {
		type: 'array',
		model: {
			type: 'number',
			isInt: true
		}
	},
	rangedNumbers: {
		type: 'array',
		model: {
			type: 'number',
			max: 10,
			min: -10
		}
	},
	NaNableFiniteNumbers: {
		type: 'array',
		model: {
			type: 'number',
			isNaNable: true
		}
	},
	objectsWithName: {
		type: 'array',
		model: {
			type: 'object',
			model: {
				name: {
					type: 'string'
				}
			}
		}
	},
	strings: {
		type: 'array',
		model: {
			type: 'string'
		}
	},
	rangedStrings: {
		type: 'array',
		model: {
			type: 'string',
			def: undefined,
			maxChars: 8,
			minChars: 4
		}
	},
	dateStrings: {
		type: 'array',
		model: {
			type: 'dateString',
			def: undefined
		}
	},
	dateTimeStrings: {
		type: 'array',
		model: {
			type: 'dateTimeString',
			def: undefined
		}
	},
	timeStrings: {
		type: 'array',
		model: {
			type: 'timeString',
			def: undefined
		}
	}
};

export const testDefinedResult = {

	// The array gets tested with the the other types.

	// Boolean

	booleans: miscValues.map(v => isBoolean(v) ? v : false),

	limitedBooleans: miscValues.map(v => isBoolean(v) ? v : false)
		.slice(0, 10),

	uniqueBooleans: getUniqueItems(miscValues.filter(v => isBoolean(v))),

	uniqueNullableBooleans: getUniqueItems(
		miscValues.filter(v => isBoolean(v) || v === null)),

	// Number

	numbers: miscValues.map(v => isFiniteNumber(v) ? v : 0),

	integers: miscValues.map(v => Number.isInteger(v) ? v : 0),

	rangedNumbers: miscValues.map(
		v => isNumber(v) && v! >= -10 && v! <= 10 ? v : 0),

	NaNableFiniteNumbers: miscValues.map(
		v => isFiniteNumber(v) || Number.isNaN(v) ? v : 0),

	// Object

	objectsWithName: miscValues.map(
		(v: any) => isObjectType(v) && 'name' in v! && isString(v.name)
			? v : {}),

	// String

	strings: miscValues.map(v => isString(v) ? v : ''),

	rangedStrings: miscValues.filter(v => isString(v) &&
		getCharLength(v) >= 4 && getCharLength(v) <= 8),

	// Date and time

	dateStrings: dateStringValues.filter(v => isDateString(v)),

	dateTimeStrings: dateTimeStringValues.filter(v => isDateTimeString(v)),

	timeStrings: timeStringValues.filter(v => isTimeString(v))
};
