import { isPopulatedString } from './is-populated-string';

// Returns true if the parameter is an "unsigned integer"-like string.
//
// The terms are strict; no whitespace or excess characters allowed.
//
// Examples:
//         isUIntLikeString('0'); // true
//         isUIntLikeString('123'); // true
//         isUIntLikeString('123.4'); // false
//         isUIntLikeString('+123'); // false
//         isUIntLikeString('-123'); // false
//         isUIntLikeString('abc'); // false
//         isUIntLikeString(null); // false
//         isUIntLikeString(''); // false
export function isUIntLikeString(obj: any): boolean {

	if (!isPopulatedString(obj))
		return false;

	return /^[0-9]+$/.test(obj);
}
