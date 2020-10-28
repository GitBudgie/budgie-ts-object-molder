import { getModeledObject as gmo } from '../get-modeled-object';
import { getShouldText as gst } from './get-should-text';

// Writing a perfect set of tests for this kind of molder function
// is a tedious task. Therefore, the current practice is to refine
// the test as bugs are found.

let data: any;
let model: any;
let res: any;

describe('Undefined values', () => {
	data = undefined;
	model = undefined;
	res = {};
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('Null values', () => {
	data = null;
	model = null;
	res = {};
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('Empty objects', () => {
	data = {};
	model = {};
	res = {};
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('A boolean must be a boolean', () => {

	data = {};
	model = { yes: true };
	res = { yes: true };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: null };
	model = { yes: true };
	res = { yes: true };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: true };
	model = { yes: true };
	res = { yes: true };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: false };
	model = { yes: false };
	res = { yes: false };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: 123 };
	model = { yes: true };
	res = { yes: true };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: 'yes' };
	model = { yes: true };
	res = { yes: true };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: [] };
	model = { yes: true };
	res = { yes: true };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { yes: 123 };
	model = { yes: false };
	res = { yes: false };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('A number must be a number', () => {

	data = {};
	model = { age: 0 };
	res = { age: 0 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: null };
	model = { age: 0 };
	res = { age: 0 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: true };
	model = { age: 0 };
	res = { age: 0 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: 'old' };
	model = { age: 0 };
	res = { age: 0 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: [] };
	model = { age: 0 };
	res = { age: 0 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: 33 };
	model = { age: 0 };
	res = { age: 33 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: NaN };
	model = { age: 33 };
	res = { age: NaN };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { age: 1337 };
	model = { age: Infinity };
	res = { age: 1337 };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('A string must be a string', () => {

	data = {};
	model = { name: '' };
	res = { name: '' };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { name: null };
	model = { name: '' };
	res = { name: '' };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { name: true };
	model = { name: '' };
	res = { name: '' };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { name: 930 };
	model = { name: '' };
	res = { name: '' };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { name: [] };
	model = { name: '' };
	res = { name: '' };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { name: 'Jamie' };
	model = { name: 'Adam' };
	res = { name: 'Jamie' };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('An object must be an object', () => {

	data = {};
	model = { data: {} };
	res = { data: {} };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: null };
	model = { data: {} };
	res = { data: {} };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: true };
	model = { data: {} };
	res = { data: {} };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: 4096 };
	model = { data: {} };
	res = { data: {} };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: 'John' };
	model = { data: {} };
	res = { data: {} };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: [] };
	model = { data: {} };
	res = { data: {} };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: {} };
	model = { data: { age: 33 } };
	res = { data: { age: 33 } };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { data: { age: NaN } };
	model = { data: { age: 33 } };
	res = { data: { age: NaN } };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('An array must be an array', () => {

	data = {};
	model = { arr: [] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: null };
	model = { arr: [] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: true };
	model = { arr: [] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: 4096 };
	model = { arr: [] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: 'Jane' };
	model = { arr: [] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: [] };
	model = { arr: [] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: {} };
	model = { arr: [0] };
	res = { arr: [] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: [1, 'foo', {}, []] };
	model = { arr: [0] };
	res = { arr: [1] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: [1, 'foo', {}, []] };
	model = { arr: [''] };
	res = { arr: ['foo'] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: [1, 'foo', {}, []] };
	model = { arr: [{}] };
	res = { arr: [{}] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: [1, 'foo', {}, []] };
	model = { arr: [[]] };
	res = { arr: [[]] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});

	data = { arr: [[1]] };
	model = { arr: [[0]] };
	res = { arr: [[1]] };
	test(gst(data, model, res), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});

describe('An example data and model', () => {
	data = {
		age: 33,
		ids: [-6, 74, 345, NaN, 'abc', false, null, undefined],
		isActive: true,
		measurements: {
			height: 200,
			weight: 100,
			width: 80
		},
		name: 'Adam',
		tags: ['alpha', 'beta', 'gamma', 930, null],
		ignoredProperty: 3
	};
	model = {
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
	res = {
		age: 33,
		ids: [-6, 74, 345, NaN],
		isActive: true,
		measurements: {
			height: 200,
			weight: 100
		},
		name: 'Adam',
		tags: ['alpha', 'beta', 'gamma']
	};
	test(gst(data, model, res, 8), () => {
		expect(gmo(data, model)).toMatchObject(res);
	});
});
