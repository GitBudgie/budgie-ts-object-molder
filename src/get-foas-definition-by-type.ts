import { FoasDefinition } from './classes/foas-definition';
import { foasDefinitions } from './foas-definitions';

// Returns the FoasDefinition by the type.
// Returns null for an invalid type.
//
// Examples:
//         getFoasDefinitionByType('ms'); // { ... }
//         getFoasDefinitionByType('xx'); // null
//         getFoasDefinitionByType(''); // null
export function getFoasDefinitionByType(
	foasType: string
): FoasDefinition | null {

	for (const def of foasDefinitions)
		if (def.foasType === foasType)
			return def;

	return null;
}
