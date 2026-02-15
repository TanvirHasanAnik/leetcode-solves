function maximumWealth(accounts: number[][]): number {
    const totalCustomers = accounts.length
    const totalAccounts = accounts[0]?.length
    let maxWealth = 0;
    let currentCustomerWealth = 0;
    for(let i = 0; i < totalCustomers; i++){
        for(let j = 0; j < totalAccounts!; j++){
            currentCustomerWealth += accounts[i]![j]!
        }
        (currentCustomerWealth > maxWealth) && (maxWealth = currentCustomerWealth)
        currentCustomerWealth = 0
    }
    return maxWealth
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))