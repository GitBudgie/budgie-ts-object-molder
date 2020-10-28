import { dateTimeStringDefinition } from './definition';
import { getNullableValue } from './get-nullable-value';
import { isDateTimeString } from './is-date-time-string';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, dateTimeString, null or undefined.
export function defineDateTimeString(
	value: any,
	definition: any
): any {

	const mix: any = { ...dateTimeStringDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const str = getNullableValue(value, isNullable);
	if (isNullable && str === null)
		return null;

	if (!isDateTimeString(str, mix.foasType, mix.delimiterDate,
		mix.delimiterType, mix.delimiterTime))
		return def;

	return str;
}
