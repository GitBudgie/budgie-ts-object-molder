import { getModeledObject } from './get-modeled-object';
import { getType } from './get-type';
import { isArray } from './is-array';

// Returns a new array that is the given data modeled with the simple model.
// Returns at least an empty array.
//
// The very first item of the model dictates the type of the items.
//
// Example:
//
//         getModeledArray(
//                 [1, 2, 3, NaN, 'a', false, null, undefined],
//                 [0]
//         );
//                 // [1, 2, 3, NaN]
//
export function getModeledArray(data: any, model: any): any[] {

	const result: any[] = [];
	if (!isArray(data) || !isArray(model) || model[0] === undefined)
		return result;

	const value = model[0];
	const valueType = getType(value);
	const keys = Object.keys(data);
	for (const key of keys) {
		const dataValue = data[key];
		const dataValueType = getType(dataValue);
		if (dataValueType !== valueType)
			continue;

		if (dataValueType === 'array')
			result.push(getModeledArray(dataValue, value));

		else if (dataValueType === 'object')
			result.push(getModeledObject(dataValue, value));

		else if (dataValueType === 'boolean' ||
			dataValueType === 'number' ||
			dataValueType === 'string')
			result.push(dataValue);
	}
	return result;
}
