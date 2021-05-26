export function getAsString(value: string | string[] | undefined): string {
	if (typeof value === 'undefined') return ''

	// 引数が配列の場合は最初の要素を取得する．
	if (Array.isArray(value)) {
		return value[0]
	}

	return value
}
