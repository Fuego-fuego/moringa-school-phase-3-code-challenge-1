function annualBankTotal(transactionAmounts, transactionDates ){

    const  totalTransactionAmounts = transactionAmounts.reduce((acc,cur)=> acc+=cur)
    
    const negativeTransactionCounts = negativeTransactionCount(transactionAmounts)
    const negativeTransactionTotals = negativeTransactionTotal(transactionAmounts)

    if(negativeTransactionCounts > 2 && negativeTransactionTotals < -99){

        annualTotal = totalTransactionAmounts - 5*11
        return annualTotal
    }else{

        annualTotal = totalTransactionAmounts - 5*12
        return annualTotal
    }

    

}

// Test cases
const dates = ['...','...','...','...'];
const arr1 = [100,100,100,-10];
const arr2 = [180,-50, -25,-25]
const arr3 = [1,-1,0,-150,1]
const arr4 = [100,100,-10,-20,-20]
const arr5 = [-60,60,-40,-20]

function negativeTransactionCount(transactionAmounts){
        let count = 0
        for(transaction of transactionAmounts){
            if(transaction < 0){
                count++;
            }
        }
        return count
}

function negativeTransactionTotal(transactionAmounts){

        let sum = 0;
        for(transaction of transactionAmounts){
            if(transaction < 0){
                sum+=transaction
            }
        }
        return sum
}


// console.log(negativeTransactionCount(arr1))
// console.log(negativeTransactionTotal(arr1))

// console.log(negativeTransactionCount(arr2))
// console.log(negativeTransactionTotal(arr2))

console.log(annualBankTotal(arr1,dates))
console.log(annualBankTotal(arr2,dates))
console.log(annualBankTotal(arr3,dates))
console.log(annualBankTotal(arr4,dates))
console.log(annualBankTotal(arr5,dates))