function letterCasePermutation(s: string): string[] {
    const res: string[] = [];
    const path: string[] = [];

    function dfs(i: number) {
        if (i === s.length) {
        res.push(path.join(""));
        return;
        }

        const ch: string = s[i]!;

        if (/[a-zA-Z]/.test(ch)) {
        // branch 1: lowercase
        path.push(ch.toLowerCase());
        dfs(i + 1);
        path.pop();

        // branch 2: uppercase
        path.push(ch.toUpperCase());
        dfs(i + 1);
        path.pop();
        } else {
        // digit: only one way
        path.push(ch);
        dfs(i + 1);
        path.pop();
        }
    }

    dfs(0);
    return res;
};

console.log(letterCasePermutation("3z4"))