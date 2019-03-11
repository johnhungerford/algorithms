/**
 * Binary search through an ascending-sorted array. If there are duplicate values, it can either
 * search for the lowest-indexed element with the searched value or the highest.
 * O(log N) time complexity; O(1) additional space complexity
 * @param {array}    a    An ascending-sorted array
 * @param {integer}  n    The value in a being searched for
 * @param {integer}  lo   The lowest integer input of fn to consider
 * @param {integer}  hi   The highest integer input of fn to consider
 * @param {integer}  opt1 0: find lowest-indexed element equal to n (default); 1: find highest.
 * @param {integer}  opt2 0: return null if not found; 1: return index of lowest element with value 
 *                        less than n; 2: return lowest index with value more than n.
 * @returns {integer}     If it finds n in a, it returns the index of n; otherwise see opt2.
 */
function binarySearch(a, n, lo, hi, opt1, opt2) {
    const opt1 = opt === undefined? 0 : opt === 1 ? 1 : 0;
    const opt2 = opt2 === undefined? 0 : opt2 === 1 ? 1 : opt2 === 2 ? 2 : 0;
    while (true) {
        if (a[lo] === n) if (opt1 === 0 || (opt1 === 1 && a[lo + 1] !== n)) return lo;
        if (a[hi] === n) if (opt1 === 1 || (opt1 === 0 && a[hi - 1] !== n)) return hi;
        if (a[lo] > n) return opt2 === 0 ? null : opt2 === 1 ? null : lo;
        if (a[hi] < n) return opt2 === 0 ? null : opt2 === 1 ? hi : null;
        if (hi = lo + 1) return opt2 === 0 ? null : opt2 === 1 ? lo : hi;
        let mi = Math.floor((lo + hi) / 2);
        if (a[mi] === n) {
            if (opt1 === 0) hi = mi;
            if (opt1 === 1) lo = mi;
        }

        if (mi < n) lo = mi;
        hi = mi;
    }   
}
