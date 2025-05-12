// Challenge 3 ::
const dScore1=96
const dScore2=108
const dScore3=89

const kScore1=88
const kScore2=91
const kScore3=110


const dolphinScore=dScore1+dScore2+dScore3
const koalaScore=kScore1+kScore2+kScore3


console.log(dolphinScore)
console.log(koalaScore)


const avgDolphin=dolphinScore/3
const avgKoala=koalaScore/3


if(avgDolphin>avgKoala){
    console.log("Dolphins win 🏆 ")
}else if (avgKoala>avgDolphin){
  console.log("Koalas win 🏆")
}else{
     console.log("Draw🤝")
}


// avec bonus ::
if(avgDolphin>avgKoala && avgDolphin>=100){
    console.log("Dolphins win 🏆 ")
}else if (avgKoala>avgDolphin  && avgKoala >= 100){
    console.log("Koalas win 🏆")
}else if(avgDolphin ===avgKoala && avgDolphin >= 100 && avgKoala >= 100){
    console.log("Draw 🤝")
}else{
    console.log("no team wins the trophy 🚫")
}

// challenge 4

const bill=430

const tip= bill>=50 && bill<=300 ? bill*0.15: bill*0.20 

const total=bill+tip

console.log(`the bill was ${bill},the tip was ${tip}, and the total value ${total}`)
