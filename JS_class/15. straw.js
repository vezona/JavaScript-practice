const rand = Math.floor(Math.random() * 100) + 1

console.log(rand)

//1-3
if (rand > 0 && rand < 4) {
  console.log('5星卡')
  const rand2 = Math.floor(Math.random() * 3) + 1
  console.log(rand2)
}

//4-20
if (rand > 3 && rand < 21) console.log('4星卡')

//21-100
if (rand > 20) console.log('3星卡')
