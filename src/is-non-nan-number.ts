import { isNumber } from './is-number';

export function isNonNaNNumber(obj: any): boolean {

	return isNumber(obj) && !isNaN(obj);
}
