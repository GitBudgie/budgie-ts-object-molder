import { numberDefinition } from './definition';
import { getNullableValue } from './get-nullable-value';
import { isNonNaNNumber } from './is-non-nan-number';
import { isNumber } from './is-number';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, number, null or undefined.
export function defineNumber(
	value: any,
	definition: any
): any {

	const mix: any = { ...numberDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const num = getNullableValue(value, isNullable);
	if (isNullable && num === null)
		return null;

	if (!isNumber(num) ||
		(!toBoolean(mix.isNaNable) && isNaN(num)) ||
		(toBoolean(mix.isInt) && !Number.isInteger(num)) ||
		(isNonNaNNumber(mix.max) && num > mix.max) ||
		(isNonNaNNumber(mix.min) && num < mix.min))
		return def;

	return num;
}
