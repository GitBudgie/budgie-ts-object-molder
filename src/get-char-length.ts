// Returns the length of the parameter in characters (Unicode codepoints).
//
// Currently supports only strings.
//
// A surrogate pair (UTF-16 + UTF-16) is considered as one character
// even though its string length is two.
//
// Examples:
//         getCharLength(''); // 0
//         getCharLength('a'); // 1
//         getCharLength('hello'); // 5
//         getCharLength('😀'); // 1 (string length is 2)
//         getCharLength('😀😎'); // 2 (string length is 4)
//         getCharLength('😀+😎'); // 3 (string length is 5)
export function getCharLength(obj: any): number {

	return typeof obj === 'string' ? Array.from(obj).length : 0;
}
