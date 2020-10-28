import { stringDefinition } from './definition';
import { getCharLength } from './get-char-length';
import { getNullableValue } from './get-nullable-value';
import { isNumber } from './is-number';
import { isString } from './is-string';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, string, null or undefined.
export function defineString(
	value: any,
	definition: any
): any {

	const mix: any = { ...stringDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const str = getNullableValue(value, isNullable);
	if (isNullable && str === null)
		return null;

	if (!isString(str))
		return def;

	// Get the string length in characters (Unicode codepoints).
	// The length of string '😀' is 2 but its character length is 1.
	const len = getCharLength(str);
	if (isNumber(mix.maxChars) && mix.maxChars >= 0 && len > mix.maxChars)
		return def;

	if (isNumber(mix.minChars) && mix.minChars >= 0 && len < mix.minChars)
		return def;

	return str;
}
