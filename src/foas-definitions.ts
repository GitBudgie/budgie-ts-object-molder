import { FoasDefinition } from './classes/foas-definition';

// FOAS stands for fraction of a second (time measurement).
//
// The allowed FOAS types are "ms", "us" and "ns"
// (millisecond, microsecond and nanosecond).
// An empty string ("") for the FOAS type indicates
// that FOAS is accepted as-is as long as it is a non-negative safe integer.
//
// Each FOAS type has a certain padding length to construct padded values.
// The millisecond has three digits ("001").
//
// The exclusive maximum value for a FOAS type is the smallest invalid value.
// The millisecond can have the range 0 - 999; thus 1000 is invalid.

// The FOAS definitions.
export const foasDefinitions: FoasDefinition[] = [
	new FoasDefinition('ms', 3, 1000),
	new FoasDefinition('us', 6, 1000000),
	new FoasDefinition('ns', 9, 1000000000)
];
