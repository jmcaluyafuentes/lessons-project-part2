function longestSubstring(s) {
    let start = 0;
    let newSet = new Set();
    let longest = 0;

    for (let end = 0; end < s.length; end++) { // 'abbc' end = 3
        while (newSet.has(s[end])) { // s[3] = c
            newSet.delete(s[start]);
            start++;                   // start: 2
        }

        newSet.add(s[end]); // {b}
        longest = Math.max(longest, end - start + 1) // 2 or 2 is 2
    }
    return longest;
}

console.log(longestSubstring('abbc'));
console.log(longestSubstring('aabceddg')); 5 //'abced'