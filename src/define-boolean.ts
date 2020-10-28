import { booleanDefinition } from './definition';
import { getNullableValue } from './get-nullable-value';
import { isBoolean } from './is-boolean';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, boolean, null or undefined.
export function defineBoolean(
	value: any,
	definition: any
): any {

	const mix: any = { ...booleanDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const boo = getNullableValue(value, isNullable);
	if (isNullable && boo === null)
		return null;

	return isBoolean(boo) ? boo : def;
}
