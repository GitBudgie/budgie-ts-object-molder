// Returns true if the parameter is a string having at least one character.
export function isPopulatedString(obj: any): boolean {

	return typeof obj === 'string' && obj.length > 0;
}
