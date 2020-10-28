import { defineArray } from './define-array';
import { defineBoolean } from './define-boolean';
import { defineDateString } from './define-date-string';
import { defineDateTimeString } from './define-date-time-string';
import { defineNumber } from './define-number';
import { defineObject } from './define-object';
import { defineString } from './define-string';
import { defineTimeString } from './define-time-string';
import { isObjectType } from './is-object-type';

// Returns the value of a supported type, the default value, null or undefined.
export function defineValue(value: any, definition: any): any {

	if (!isObjectType(definition))
		return;

	switch (definition.type) {
		case 'array':
			return defineArray(value, definition);
		case 'boolean':
			return defineBoolean(value, definition);
		case 'dateString':
			return defineDateString(value, definition);
		case 'dateTimeString':
			return defineDateTimeString(value, definition);
		case 'number':
			return defineNumber(value, definition);
		case 'object':
			return defineObject(value, definition);
		case 'string':
			return defineString(value, definition);
		case 'timeString':
			return defineTimeString(value, definition);
	}
}
