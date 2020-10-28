import { isDateByNumbers } from './is-date-by-numbers';
import { isIntLikeString } from './is-int-like-string';
import { isString } from './is-string';

// Returns true if the parameter is a valid date string.
//
// The only allowed format is "year-month-day" ("1999-12-31").
// Leading zeroes are allowed but not required.
// Supports years from -9999 to 9999.
//
// The terms are strict; no whitespace or excess characters are allowed.
// All three safe integer numbers - year, month and date - are required.
//
// Examples:
//         isDateString('0-1-1'); // true
//         isDateString('2020-10-21'); // true
//         isDateString('-1:1:1', ':'); // true
//         isDateString('+2020-10-21'); // true
//         isDateString(' 2020-01-01 '); // false
//         isDateString('2020-02-30'); // false
//         isDateString('0-0-0'); // false
//         isDateString(null); // false
//         isDateString(''); // false
export function isDateString(obj: any, delimiter: string = '-'): boolean {

	// The string must be at least "0-1-1".
	if (!isString(obj) || !isString(delimiter) || obj.length < 5)
		return false;

	const arr = obj.split(delimiter);
	if (arr.length !== 3 || !arr.every(isIntLikeString))
		return false;

	const [year, month, day] = arr.map(Number);
	return isDateByNumbers(year, month, day);
}
