export function getNullableValue<T>(
	value: T,
	isNullable: boolean = false
): T | null {

	return value === null && isNullable ? null : value;
}
