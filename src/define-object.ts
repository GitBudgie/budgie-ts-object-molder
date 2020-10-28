import { objectDefinition } from './definition';
import { getDefinedObject } from './get-defined-object';
import { getNullableValue } from './get-nullable-value';
import { isObjectType } from './is-object-type';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, object, null or undefined.
export function defineObject(
	value: any,
	definition: any
): any {

	const mix: any = { ...objectDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const obj = getNullableValue(value, isNullable);
	if (isNullable && obj === null)
		return null;

	if (!isObjectType(obj))
		return def;

	const model = mix.model;
	if (isObjectType(model))
		// Recursion using the initial function.
		return getDefinedObject(obj, model);

	return def;
}
