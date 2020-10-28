import { getModeledArray } from './get-modeled-array';
import { getType } from './get-type';
import { isObjectType } from './is-object-type';

// Returns a new object that is the given data modeled with the simple model.
// Returns at least an empty object.
//
// Example:
//
//         getModeledObject(
//                 {
//                         id: 3,
//                         name: 'John',
//                         isStranger: true
//                 },
//                 {
//                         id: 0,
//                         name: '',
//                         tag: ''
//                 }
//         );
//                 // { id: 3, name: 'John', tag: '' }
//
export function getModeledObject(data: any, model: any): object {

	const result: any = {};
	if (!isObjectType(model))
		return result;

	if (!isObjectType(data))
		data = {};

	const keys = Object.keys(model);
	for (const key of keys) {
		let value = model[key];
		const valueType = getType(value);
		const dataValue = data[key];

		if (valueType === 'array')
			value = getModeledArray(dataValue, value);

		else if (valueType === 'object')
			value = getModeledObject(dataValue, value);

		else if (valueType === 'boolean' ||
			valueType === 'number' ||
			valueType === 'string')
			value = getType(dataValue) === valueType
				? dataValue : value;
		else
			value = undefined;

		result[key] = value;
	}
	return result;
}
