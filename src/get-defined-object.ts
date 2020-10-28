import { defineValue } from './define-value';
import { isObjectType } from './is-object-type';

// Returns a new object that is the given data modeled with the defined model.
// Returns at least an empty object.
//
// Example:
//
//         getDefinedObject(
//                 {
//                         id: 3,
//                         name: null
//                         isStranger: true
//                 },
//                 {
//                         id: { type: 'number' },
//                         name: { type: 'string', isNullable: true }
//                 }
//         );
//                 // { id: 3, name: null }
//
export function getDefinedObject(data: any, model: any): object {

	const result: any = {};
	if (!isObjectType(model))
		return result;

	if (!isObjectType(data))
		data = {};

	const keys = Object.keys(model);
	for (const key of keys) {
		const value = defineValue(data[key], model[key]);
		if (value !== undefined)
			result[key] = value;
	}
	return result;
}
