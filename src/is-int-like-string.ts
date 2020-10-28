import { isPopulatedString } from './is-populated-string';

// Returns true if the parameter is an integer-like string.
//
// The terms are strict; no whitespace or excess characters allowed.
//
// Examples:
//         isIntLikeString('0'); // true
//         isIntLikeString('123'); // true
//         isIntLikeString('+123'); // true
//         isIntLikeString('-123'); // true
//         isIntLikeString('--123'); // false
//         isIntLikeString('3.14'); // false
//         isIntLikeString(' 0 '); // false
//         isIntLikeString('abc'); // false
export function isIntLikeString(obj: any): boolean {

	if (!isPopulatedString(obj))
		return false;

	return /^[+-]?[0-9]+$/.test(obj);
}
