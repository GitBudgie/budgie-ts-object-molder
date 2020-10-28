import { timeStringDefinition } from './definition';
import { getNullableValue } from './get-nullable-value';
import { isTimeString } from './is-time-string';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, timeString, null or undefined.
export function defineTimeString(
	value: any,
	definition: any
): any {

	const mix: any = { ...timeStringDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const str = getNullableValue(value, isNullable);
	if (isNullable && str === null)
		return null;

	if (!isTimeString(str, mix.foasType, mix.delimiter))
		return def;

	return str;
}
