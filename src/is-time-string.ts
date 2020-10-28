import { isString } from './is-string';
import { isTimeByNumbers } from './is-time-by-numbers';
import { isUIntLikeString } from './is-uint-like-string';

// Returns true if the parameter is a valid time string.
//
// The only allowed format is "hour:minute:second:fraction" ("23:59:59:999").
// Leading zeroes are allowed but not required.
//
// The terms are strict; no whitespace or excess characters are allowed.
// All the parameters are optional but must be non-negative safe integers.
// An empty string for time is accepted; it means zero.
//
// See "isTimeByNumbers" for information about FOAS.
//
// Examples:
//         isTimeString(''); // true
//         isTimeString('0'); // true
//         isTimeString('0:0'); // true
//         isTimeString('0:0:0'); // true
//         isTimeString('23:59:59'); // true
//         isTimeString('23:59:59:9999'); // true
//         isTimeString('23:59:59:999999', 'us'); // true
//         isTimeString('023:059:059:0999999', 'ns'); // true
//         isTimeString('23:59:59:1000', 'ms'); // false
//         isTimeString(' 23 : 59 : 59 '); // false
//         isTimeString('24:60:61'); // false
//         isTimeString('-0:-0:-0'); // false
//         isTimeString(null); // false
//         isTimeString(' '); // false
export function isTimeString(
	obj: any,
	foasType: string = '',
	delimiter: string = ':'
): boolean {

	if (!isString(obj) || !isString(delimiter))
		return false;

	if (obj.length < 1)
		return true;

	// Allow sparing notation: '23:' -> '23:0'. Just ':' is not valid.
	const arr = obj.split(delimiter).map(
		(s: string, i: number) => s.length < 1 && i > 0 ? '0' : s);

	const len = arr.length;
	if (len > 4 || !arr.every(isUIntLikeString))
		return false;

	const hour = Number(arr[0]);
	const minute = len > 1 ? Number(arr[1]) : 0;
	const second = len > 2 ? Number(arr[2]) : 0;
	const foas = len > 3 ? Number(arr[3]) : 0;

	return isTimeByNumbers(hour, minute, second, foas, foasType);
}
