import { isArray } from './is-array';

// Returns the unique items from the array.
//
// Example:
//         getUniqueItems([2, 2, 'a', 'a', NaN, 3.14]);
//                 // [2, 'a', NaN, 3.14]
export function getUniqueItems(items: any[]): any[] {

	const arr: any[] = [];
	if (!isArray(items))
		return arr;

	for (const obj of items)
		if (!arr.includes(obj))
			arr.push(obj);

	return arr;
}

/*

According to benchmarks, the above "for - includes" is a bit faster.

export function getUniqueItems(values: any[]): any[] {

	return values.filter((value, index, valuesSelf) =>
		valuesSelf.findIndex(item =>
			Object.is(item, value)) === index);
}

*/
