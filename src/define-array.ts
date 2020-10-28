import { defineValue } from './define-value';
import { arrayDefinition } from './definition';
import { getNullableValue } from './get-nullable-value';
import { isArray } from './is-array';
import { isNumber } from './is-number';
import { isObjectType } from './is-object-type';
import { toBoolean } from './to-boolean';

// Returns any value because the default value (def) of the model
// can be: anything, array, null or undefined.
export function defineArray(
	value: any,
	definition: any
): any {

	const mix: any = { ...arrayDefinition, ...definition };
	const { def } = mix;
	if (value === undefined)
		return def;

	const isNullable = toBoolean(mix.isNullable);
	const arr = getNullableValue(value, isNullable);
	if (isNullable && arr === null)
		return null;

	const model = mix.model;
	if (!isArray(arr) || !isObjectType(model))
		return def;

	const items: any = [];
	const isUnique = toBoolean(mix.isUnique);
	const n = (isNumber(mix.limitLength) && mix.limitLength >= 0
		? Math.trunc(mix.limitLength) : arr.length) - 1;
	for (const item of arr) {
		if (items.length > n)
			break;

		const obj = defineValue(item, model);
		if (obj === undefined || (isUnique && items.includes(obj)))
			continue;

		items.push(obj);
	}
	return items;
}
