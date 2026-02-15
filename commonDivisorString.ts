function gcdOfStrings(str1: string, str2: string): string {
    // Step 1: pattern compatibility check
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Step 2: gcd of lengths
    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const len = gcd(str1.length, str2.length);

    // Step 3: extract the divisor
    return str1.slice(0, len);
}
