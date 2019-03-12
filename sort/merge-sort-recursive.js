function mergeSortRecursive(arrin) {
	if (arrin.length === 1) return arrin;
	if (arrin.length === 2) {
		if (arrin[0] > arrin[1]) {
			const x = arrin[0];
			arrin[0] = arrin[1];
			arrin[1] = x;
		}

		return arrin;
	}

	const mid = Math.ceil((arrin.length - 1) / 2);
	var lo = [];
	var hi = [];
	for (let i = 0; i < mid; i++) {
		lo.push(arrin[i]);
		hi.push(arrin[i+mid]);
	}

	if(2 * mid < arrin.length) hi.push(arrin[arrin.length - 1]);

	lo = mergeSort(lo);
	hi = mergeSort(hi);

	let iHi = 0;
	let iLo = 0;
	for(let i = 0; i < arrin.length; i++) {
		if(iHi >= hi.length || lo[iLo] <= hi[iHi]) {
			arrin[i] = lo[iLo];
			iLo += 1;
		} else {
			arrin[i] = hi[iHi];
			iHi += 1;
		}
	}

	return arrin;
}

module.exports = mergeSortRecursive;