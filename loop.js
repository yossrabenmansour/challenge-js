// 1
const bills=[22,295,176,440,37,105,10,1100,86,52];

const tips=[];
const totals=[];

//2
function calcTip(bill){
  return   bill>=50 && bill<=300 ? bill*0.15: bill*0.20 
}
//3
for(i=0; i<bills.length; i++){

   const tip=calcTip(bills[i])

   tips.push(tip)

   totals.push(tip+bills[i])
}
//4
function calcAverage(arr){
    let sum=0;
    for (i=0; i<arr.length;i++){
        sum+=arr[i]
    }
 return sum/arr.length
}

//4.3
console.log(`bills : ${bills}`)
console.log(`tips : ${tips}`)
console.log(`totals : ${totals}`)
console.log(`average total : ${calcAverage(totals)}`)
