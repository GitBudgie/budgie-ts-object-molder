import { isDateString } from './is-date-string';
import { isString } from './is-string';
import { isTimeString } from './is-time-string';

// Returns true if the parameter is a valid date-time string.
//
// The only allowed format is "year-month-day hour:minute:second:fraction"
// ("1999-12-31 23:59:59:999"). Leading zeroes are allowed but not required.
// Supports years from -9999 to 9999.
//
// The terms are strict; no whitespace or excess characters are allowed.
// An empty string for time is accepted; it means zero.
//
// See "isDateString" for information about date values.
// See "isTimeByNumbers" for information about FOAS.
// See "isTimeString" for information about time values.
//
// Examples:
//         isDateTimeString('0-1-1'); // true
//         isDateTimeString('1999-12-31'); // true
//         isDateTimeString('1999-12-31 '); // true
//         isDateTimeString('1999-12-31 0'); // true
//         isDateTimeString('1999-12-31 0:0'); // true
//         isDateTimeString('1999-12-31 23:59:59'); // true
//         isDateTimeString('1999-12-31 23:59:59:999'); // true
//         isDateTimeString('1999-12-31 23:59:59:999999', 'us'); // true
//         isDateTimeString('1999-12-31 23:59:59:1000', 'ms'); // false
//         isDateTimeString('1999-12-31  '); // false
//         isDateTimeString('1999-12-32'); // false
//         isDateTimeString(null); // false
//         isDateTimeString(' '); // false
//         isDateTimeString(''); // false
export function isDateTimeString(
	obj: any,
	foasType: string = '',
	delimiterDate: string = '-',
	delimiterType: string = ' ',
	delimiterTime: string = ':'
): boolean {

	// The string must be at least "0-1-1".
	if (!isString(obj) || !isString(delimiterDate) ||
		!isString(delimiterType) || !isString(delimiterTime) ||
		obj.length < 5)
		return false;

	// There can be only one or two fields after type separation.
	const arr = obj.split(delimiterType);
	const len = arr.length;
	if (len > 2)
		return false;

	const [dateStr] = arr;
	const timeStr = len > 1 ? arr[1] : '';

	return (isDateString(dateStr, delimiterDate) &&
		isTimeString(timeStr, foasType, delimiterTime));
}
