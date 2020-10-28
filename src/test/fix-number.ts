export function fixNumber(_key: string, value: any): any {

	const typ = typeof value;
	if (typ === 'number') {
		if (value === -Infinity)
			value = '(-Infinity)';
		if (value === Infinity)
			value = '(Infinity)';
		if (isNaN(value))
			value = '(NaN)';
	} else if (typ === 'bigint') {
		value = value.toString() + 'n';
	}
	return value;
}
