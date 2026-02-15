function matrixBlockSum(mat: number[][], k: number): number[][] {
        const n = mat.length;
    const m = mat[0]!.length;

    const prefix: number[][] = Array.from({ length: n + 1 }, () =>
        Array(m + 1).fill(0)
    );

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            prefix[i + 1][j + 1] =
                mat[i][j]
                + prefix[i][j + 1]
                + prefix[i + 1][j]
                - prefix[i][j];
        }
    }

    const result: number[][] = Array.from({ length: n }, () =>
        Array(m).fill(0)
    );

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            const r1 = Math.max(0, i - k);
            const c1 = Math.max(0, j - k);
            const r2 = Math.min(n - 1, i + k);
            const c2 = Math.min(m - 1, j + k);

            result[i][j] =
                prefix[r2 + 1][c2 + 1]
                - prefix[r1][c2 + 1]
                - prefix[r2 + 1][c1]
                + prefix[r1][c1];
        }
    }

    return result;
};