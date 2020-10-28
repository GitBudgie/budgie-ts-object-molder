// Returns true if the parameter is a finite number.
export function isFiniteNumber(obj: any): boolean {

	return typeof obj === 'number' && isFinite(obj);
}
