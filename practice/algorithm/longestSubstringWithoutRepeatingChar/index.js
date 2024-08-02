// Represent a window of characters using start and end pointers
// Store the characters of current window to a set data type
// Tract the longest length of set

// input is a string
// output is longest length of substring

function longestSubstring(s) {
    // initialize start pointer, set, and longest variable
    let start = 0;                                              // start = 6
    let set = new Set();                                        // set = {}
    let longest = 0;                                            // longest = 0

    // Iterate each char in s                                   // s = 'abbefghifgr', s.length = 11
    for (let end = 0; end < s.length; end++) {                  // end = 10
        // If char at end is already in set, remove it from set
        while (set.has(s[end])) {                               // s[end] = r
            set.delete(s[start]);
            start++
        }

        // Add the char at end to the set
        set.add(s[end]);                                        // set = {h, i, f, g, r}

        // Update the longest substring
        longest = Math.max(longest, end - start + 1)            // longest = 6
    }
    return set;
}

console.log(longestSubstring('abbe'));
console.log(longestSubstring('abbefggg'));
console.log(longestSubstring('abbefghifgr'));