import { dateStringDefinition } from './definition';
import { getNullableValue } from './get-nullable-value';
import { isDateString } from './is-date-string';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, dateString, null or undefined.
export function defineDateString(
	value: any,
	definition: any
): any {

	const mix: any = { ...dateStringDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const str = getNullableValue(value, isNullable);
	if (isNullable && str === null)
		return null;

	if (!isDateString(str, mix.delimiter))
		return def;

	return str;
}
