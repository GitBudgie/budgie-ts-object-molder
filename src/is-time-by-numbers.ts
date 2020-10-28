import { getExclMaxForFoasType } from './get-excl-max-for-foas-type';
import { isSafeInt } from './is-safe-int';
import { isString } from './is-string';

// Returns true if the time - defined by numbers - is valid.
//
// All numeric parameters must be safe integers.
//
// FOAS stands for fraction of a second.
// The supported FOAS types are "ms", "us" and "ns".
// The "foas" number is accepted as-is if "foasType" is an empty string.
//
// Examples:
//         isTimeByNumbers(0, 0, 0); // true
//         isTimeByNumbers(23, 59, 59); // true
//         isTimeByNumbers(23, 59, 59, 999, 'ms'); // true
//         isTimeByNumbers(23, 59, 59, 9999999999); // true
//         isTimeByNumbers(23, 59, 59, 999999, 'us'); // true
//         isTimeByNumbers(23, 59, 59, 999999999, 'ns'); // true
//         isTimeByNumbers(24, 60, 61, 1000, 'ms'); // false
export function isTimeByNumbers(
	hour: number = 0,
	minute: number = 0,
	second: number = 0,
	foas: number = 0,
	foasType: string = ''
): boolean {

	if (!isSafeInt(hour) || !isSafeInt(minute) || !isSafeInt(second) ||
		!isSafeInt(foas) || !isString(foasType))
		return false;

	let isFoasOk = true;
	if (foasType.length > 0) {
		const n = getExclMaxForFoasType(foasType);
		isFoasOk = foas > -1 && foas < n;
	}

	return (hour > -1 && hour < 24 &&
		minute > -1 && minute < 60 &&
		second > -1 && second < 60 && isFoasOk);
}
