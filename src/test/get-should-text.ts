import { fixNumber } from './fix-number';

export function getShouldText(
	data: any,
	model: any,
	res: any,
	space: number = 0
): string {

	let resStr = '';
	let dataStr = '';
	let modelStr = '';
	try {
		modelStr = JSON.stringify(model, fixNumber, space);
		dataStr = JSON.stringify(data, fixNumber, space);
		resStr = JSON.stringify(res, fixNumber, space);
	} catch (e) {
		//console.log(e);
	}
	return `should\n       return ${resStr}` +
		`\n   given data ${dataStr}` +
		`\n    and model ${modelStr}\n`;
}
