// Returns true if the parameter is a Set.
export function isSet(obj: any): boolean {

	return Object.prototype.toString.call(obj) === '[object Set]';
}
