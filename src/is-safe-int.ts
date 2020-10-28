// Returns true if the parameter is a safe integer.
export function isSafeInt(obj: any): boolean {

	return typeof obj === 'number' && Number.isSafeInteger(obj);
}
