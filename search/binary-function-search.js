/**
 * Binary search through an ascending-sorted array. If there are duplicate values, it can either
 * search for the lowest-indexed element with the searched value or the highest.
 * O(log N) time complexity; O(1) additional space complexity
 * @param {function} fn   A function with a slope greater than or equal to zero at all within
 *                        range of search (lo - hi)
 * @param {integer}  n    The value in a being searched for
 * @param {integer}  lo   The lowest integer input of fn to consider
 * @param {integer}  hi   The highest integer input of fn to consider
 * @param {integer}  opt1 0: find lowest integer whose fn value is equal to n (default); 
 *                        or 1: find highest.
 * @param {integer}  opt2 Determines behavior if n is not found: 0: return null; 1: return highest
 *                        integer whose fn value is less than n; 2: return lowest integer with fn 
 *                        value more than n.
 * @returns {integer} If it finds n in a, it returns the index of n; otherwise see opt2.
 */
function binaryFunctionSearch(fn, n, lo, hi, opt1, opt2) {
    const o1 = opt1 === undefined ? 0 : opt1 === 1 ? 1 : 0;
    const o2 = opt2 === undefined ? 0 : opt2 === 1 ? 1 : opt2 === 2 ? 2 : 0;
    while (true) {
        const lov = fn(lo);
        const hiv = fn(hi);
        if (lov === n) if (o1 === 0 || (o1 === 1 && fn(lo + 1) !== n)) return lo;
        if (hiv === n) if (o1 === 1 || (o1 === 0 && fn(hi - 1) !== n)) return hi;
        if (lov > n) return o2 === 0 ? null : o2 === 1 ? null : lo;
        if (hiv < n) return o2 === 0 ? null : o2 === 1 ? hi : null;
        if (hi = lo + 1) return o2 === 0 ? null : o2 === 1 ? lo : hi;
        let mi = Math.floor((lo + hi) / 2);
        const miv = fn(mi);
        if (miv === n) {
            if (o1 === 0) hi = mi;
            if (o1 === 1) lo = mi;
        }

        if (mi < n) lo = mi;
        hi = mi;
    }   
}

module.exports = binaryFunctionSearch;