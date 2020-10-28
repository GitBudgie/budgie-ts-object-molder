import { definitions } from '../definition';
import { getDefinedObject as gdo } from '../get-defined-object';
import { getShouldText as gst } from './get-should-text';
import { testData, testDefinedModel, testDefinedResult } from './test-data';

// Writing a perfect set of tests for this kind of molder function
// is a tedious task. Therefore, the current practice is to refine
// the test as bugs are found.

describe('Undefined values', () => {
	const data = undefined;
	const model = undefined;
	const res = {};
	test(gst(data, model, res), () => {
		expect(gdo(data, model)).toMatchObject(res);
	});
});

describe('Null values', () => {
	const data = null;
	const model = null;
	const res = {};
	test(gst(data, model, res), () => {
		expect(gdo(data, model)).toMatchObject(res);
	});
});

describe('Empty objects', () => {
	const data = {};
	const model = {};
	const res = {};
	test(gst(data, model, res), () => {
		expect(gdo(data, model)).toMatchObject(res);
	});
});

describe('Proper default value for empty data', () => {
	const data = {};
	for (const definition of definitions) {
		const model = { value: { type: definition.type } };
		const res = { value: definition.def };
		test(gst(data, model, res), () => {
			expect(gdo(data, model)).toMatchObject(res);
		});
	}
});

describe('Proper default value for unsupported data type', () => {
	const data = { value: BigInt(1234567890) };
	for (const definition of definitions) {
		const model = { value: { type: definition.type } };
		const res = { value: definition.def };
		test(gst(data, model, res), () => {
			expect(gdo(data, model)).toMatchObject(res);
		});
	}
});

describe('Proper value for nullable data', () => {
	const testNullable = (
		definition: any,
		data: any,
		isNullable: boolean
	) => {
		const model = {
			value: {
				type: definition.type,
				isNullable
			}
		};
		const v = isNullable ? null : definition.def;
		const res = { value: v };
		test(gst(data, model, res), () => {
			expect(gdo(data, model)).toMatchObject(res);
		});
	};

	const testDefinition = (definition: any, data: any) => {
		for (const isNullable of [false, true])
			testNullable(definition, data, isNullable);
	};

	const data = { value: null };
	for (const definition of definitions)
		testDefinition(definition, data)
});

describe('A comprehensive test data and model', () => {
	const data = testData;
	const model = testDefinedModel;
	const res = testDefinedResult;
	test(gst(data, model, res, 8), () => {
		expect(gdo(data, model)).toMatchObject(res);
	});
});
