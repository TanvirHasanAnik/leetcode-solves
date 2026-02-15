function mergeAlternately(word1: string, word2: string): string {
    let result = "";
    const max = Math.max(word1.length, word2.length);

    for (let i = 0; i < max; i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    return result;
};

console.log(mergeAlternately("abc","pqr"))