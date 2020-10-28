import { isSafeInt } from './is-safe-int';

// Returns true if the date - defined by safe integer numbers - is valid.
//
// Supports years from -9999 to 9999.
// The month parameter is an order number (1 - 12), not an index (0 - 11).
//
// Examples:
//         isDateByNumbers(2020, 1, 26); // true
//         isDateByNumbers(2525, 12, 31); // true
//         isDateByNumbers(-9999, 12, 31); // true
//         isDateByNumbers(3535, 13, 32); // false
export function isDateByNumbers(
	year: number = 0,
	month: number = 0,
	day: number = 0
): boolean {

	// The built-in Date accepts only integer numbers.
	if (!isSafeInt(year) || !isSafeInt(month) || !isSafeInt(day))
		return false;

	// Avoid surely invalid values.
	if (year < -9999 || year > 9999 || month < 1 || month > 12 ||
		day < 1 || day > 31)
		return false;

	// Month and day should be set together.
	const d = new Date(0);
	d.setUTCFullYear(year);
	d.setUTCMonth(--month, day);

	// The Date may be "Invalid Date" after setting extreme values.
	return (!Number.isNaN(d.valueOf()) &&
		d.getUTCFullYear() === year &&
		d.getUTCMonth() === month &&
		d.getUTCDate() === day);
}
