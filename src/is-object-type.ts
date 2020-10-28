import { getType } from './get-type';

// Returns true if the parameter is an object
// determined by "getType" function.
export function isObjectType(obj: any): boolean {

	return getType(obj) === 'object';
}
