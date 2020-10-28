// Returns true if the parameter is a Map.
export function isMap(obj: any): boolean {

	return Object.prototype.toString.call(obj) === '[object Map]';
}
