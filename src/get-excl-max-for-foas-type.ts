import { getFoasDefinitionByType } from './get-foas-definition-by-type';

// Returns the exclusive maximum value for the FOAS type.
// Returns 0 for an invalid type.
//
// Examples:
//         getExclMaxForFoasType('ms'); // 1000
//         getExclMaxForFoasType('xx'); // 0
//         getExclMaxForFoasType(''); // 0
export function getExclMaxForFoasType(foasType: string): number {

	const def = getFoasDefinitionByType(foasType);
	return def ? def.exclMax : 0;
}
