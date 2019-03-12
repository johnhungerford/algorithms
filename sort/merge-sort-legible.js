function mergeSortLegible(arr, cmp) {
    // Default comparator
    const fn = cmp instanceof Function ? cmp : (a,b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        if (a === b) return 0;
    }

    if(arr.length <= 1) return arr; // Don't don't do anything for trivial arrays
    let n = 0;
    let a = 1;
    // Get array length's power of two (how many times to double to cover whole array)
    while(a < arr.length) {
        a = a*2;
        n += 1;
    }

    // i counts how mnay times to double; j counts the doubled amount
    for (let i = 0, j = 1; i <= n ; i++, j = 2*j) {
        // iterate up the array in groups of 2*j, so k through k+j-1 is half a group
        // and k+j through k+2*j-1 is the next half
        for(let k = 0; k + j < arr.length; k += 2*j) {
            const a = [];
            let iLo =0;       // counts place in a[iLo]
            let iHi = k + j;  // counts place in arr[iHi]
            let hict = 0;
            for(let l = k; l < k + 2*j && l < arr.length; l++) {
                let loval = iLo >= a.length ? arr[l] : a[iLo];
                if(iHi > l) {
                    if (iHi >= k + (2*j) || iHi >= arr.length || fn(loval, arr[iHi]) != 1){
                        console.log('choosing lo: '+loval);
                        if(iLo >= a.length) continue;
                        a.push(arr[l]);
                        arr[l] = a[iLo];
                        iLo += 1;
                        continue
                    }
                } 

                a.push(arr[l]);
                arr[l] = arr[iHi];
                iHi += 1;
            }
        }
    }

    return arr;
}

module.exports = mergeSortLegible;