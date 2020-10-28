# budgie-ts-object-molder

>_**molder** (noun): "One who molds something into shape." (Wiktionary)_

Budgerigar's object molder ensures valid structure and values for an object.
Written in TypeScript (JavaScript ES6).

It is generally a good idea to ensure that an object has valid structure
and values. Such object could be unreliable data loaded from somewhere.

Nothing is exported by default.

The source code uses tabs for indentation (tab size 8).
Each line contains maximum of 80 characters.

## Installation

Install directly from [GitHub](https://www.github.com/) source repository:

```bash
npm install https://github.com/GitBudgie/budgie-ts-object-molder
```

A Node Package Manager registry publication may come some day...

## Usage

There are two ways to mold an object:

* a simple model
* a more complicated definition model

Both ways contain limitations. For example,
an array is limited to a single type. Things should be kept simple.

As regards this topic, a thing to remember is that
JavaScript Object Notation (JSON) does not support values
```-Infinity```, ```Infinity```, ```NaN``` and ```undefined```.
For example, ```JSON.stringify({ value: NaN })```
returns ```"{ "value": null }"```.

### A Simple Model

```typescript
import { getModeledObject  } from 'budgie-ts-object-molder';

// Get some data and mold it.
// The model object describes structures,
// variable types and default values.
//
// The supported variable types are: array, boolean, number, object and string.
//
// See "docs/get-modeled-object-examples.txt" file for more details.

const data = {
	age: 33,
	ids: [-6, 74, 345, NaN, 'abc', false, null, undefined],
	isActive: 'maybe',
	measurements: {
		height: 200,
		weight: 100,
		width: 80
	},
	name: 'Adam',
	tags: ['alpha', 'beta', 'gamma', 930, null],
	ignoredProperty: 3
};
const model = {
	age: 0,
	ids: [0],
	isActive: false,
	measurements: {
		height: 0,
		weight: 0
	},
	name: '',
	tags: ['']
};
const result = getModeledObject(data, model);

// The result may be something like this:

{
	age: 33,
	ids: [-6, 74, 345, NaN],
	isActive: false,
	measurements: {
		height: 200,
		weight: 100
	},
	name: 'Adam',
	tags: ['alpha', 'beta', 'gamma']
}

```

### A More Complicated Definition Model

```typescript
import { getDefinedObject } from 'budgie-ts-object-molder';

// Get some data and mold it.
// The model object describes structures,
// variable types, allowed ranges and default values.
//
// The supported variable types are: array, boolean, dateString,
// dateTimeString, number, object, string and timeString.
//
// TODO: 💻🦜
//         - Add a boolean to trim the string before length check? Maybe not.
//
// See "docs/get-defined-object-examples.txt" file for more details.

const data = getDataFromSomewhere();
const model = {
	age: {
		type: 'number',
		isInt: true
	},
	ids: {
		type: 'array',
		isUnique: true,
		model: {
			type: 'number',
			def: undefined,
			isInt: true
		}
	},
	isActive: {
		type: 'boolean'
	},
	measurements: {
		type: 'object',
		model: {
			height: {
				type: 'number'
			},
			weight: {
				type: 'number'
			}
		}
	},
	name: {
		type: 'string'
	},
	tags: {
		type: 'array',
		model: {
			type: 'string',
			def: undefined,
			maxChars: 64,
			minChars: 1
		}
	}
};
const result = getDefinedObject(data, model);

// The result may be something like in the previous example.

```

## Disclaimer
This may or may not work. Anything can change at any time.
Nothing is guaranteed. Use at your own risk!

## License
[MIT](https://choosealicense.com/licenses/mit/)
