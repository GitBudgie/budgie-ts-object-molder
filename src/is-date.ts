// Returns true if the parameter is a valid Date.
export function isDate(obj: any): boolean {

	return (Object.prototype.toString.call(obj) === "[object Date]" &&
		!Number.isNaN(obj.valueOf()));
}
