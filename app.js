// // Challenge 3 ::
// const dScore1=96
// const dScore2=108
// const dScore3=89

// const kScore1=88
// const kScore2=91
// const kScore3=110


// const dolphinScore=dScore1+dScore2+dScore3
// const koalaScore=kScore1+kScore2+kScore3


// console.log(dolphinScore)
// console.log(koalaScore)


// const avgDolphin=dolphinScore/3
// const avgKoala=koalaScore/3


// if(avgDolphin>avgKoala){
//     console.log("Dolphins win 🏆 ")
// }else if (avgKoala>avgDolphin){
//   console.log("Koalas win 🏆")
// }else{
//      console.log("Draw🤝")
// }


// // avec bonus ::
// if(avgDolphin>avgKoala && avgDolphin>=100){
//     console.log("Dolphins win 🏆 ")
// }else if (avgKoala>avgDolphin  && avgKoala >= 100){
//     console.log("Koalas win 🏆")
// }else if(avgDolphin ===avgKoala && avgDolphin >= 100 && avgKoala >= 100){
//     console.log("Draw 🤝")
// }else{
//     console.log("no team wins the trophy 🚫")
// }

// challenge 4

// const bill=430

// const tip= bill>=50 && bill<=300 ? bill*0.15: bill*0.20 

// const total=bill+tip

// console.log(`the bill was ${bill},the tip was ${tip}, and the total value ${total}`)


///coding-chalange-func


// const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3

// const avgDolphin1=calcAverage(44,23,71)
// const avgKoala1=calcAverage(65,54,49)

// const avgDolphin2=calcAverage(85,54,41)
// const avgKoala2=calcAverage(23,34,27)


// function checkWinner(avgDolphin,avgKoala){
//     if (avgDolphin>=avgKoala*2){
//         console.log(`Dolphins win ${avgDolphin} vs ${avgKoala}`)
//     }else if (avgKoala>=avgDolphin*2){
//         console.log(`Koala win ${avgKoala} vs ${avgDolphin}`)
//     }else{
//         console.log("No team wins !! ")
//     }
// }

// checkWinner(avgDolphin1,avgKoala1)
// checkWinner(avgDolphin2,avgKoala2)


/////funct

//////1
function calcTip(bill){
  return   bill>=50 && bill<=300 ? bill*0.15: bill*0.20 
}

console.log(calcTip(100))
 
const bills=[125,555,44]

const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

const total=[bills[0]+tips[0], bills[1]+tips[1], bills[2]+bills[2]]

console.log(bills)
console.log(tips)
console.log(total)

