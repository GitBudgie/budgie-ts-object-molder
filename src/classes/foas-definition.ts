export class FoasDefinition {

	foasType: string;
	padLength: number;
	exclMax: number;

	constructor(
		foasType: string = '',
		padLength: number = 0,
		exclMax: number = 0
	) {
		this.foasType = foasType;
		this.padLength = padLength;
		this.exclMax = exclMax;
	}
}
