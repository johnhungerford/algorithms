/**
 * Non-recursive, balanced merge sort. In place as much as possible. Can sort arrays of any kind
 * of elements, if a comparator is provided. 
 * O(NlogN) time complexity, O(N) additional space complexity
 * @param {array}    arr  Array of any kind of object.
 * @param {function} cmp  Comparator function. Should have form: 
 *                        function(a,b) returns -1 if a < b, 1 if a > b, and 0 if a == b.
 */
function mergeSort(arr, cmp) {
    const fn = cmp instanceof Function ? cmp : (a,b) => { return a > b ? 1 : a < b ? -1 : 0; }
    if(arr.length === 1) return arr;
    let n, a;
    for(n = 0, a = 1; a < arr.length; a = 2*a, n += 1);
    for (let i = 0, j = 1; i <= n ; i++, j = 2*j) {
        for(let k = 0; k + j < arr.length; k += 2*j) {
            const a = [];
            let iLo =0, iHi = k + j;
            for(let l = k; l < k + 2*j && l < arr.length; l++) {
                let loval = iLo >= a.length ? arr[l] : a[iLo];
                if(iHi > l) {
                    if (iHi >= k + (2*j) || iHi >= arr.length || fn(loval, arr[iHi]) != 1) {
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
}
