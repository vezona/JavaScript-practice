// 數字的地方要特別注意的是浮點數會有小數點的問題
const US = document.getElementById('US')
const NT = document.getElementById('NT')

const moneyInput = document.getElementById('moneyInput')

const moneyOutput = document.getElementById('moneyOutput')

// 輸入美金得新台幣
US.addEventListener('click', function () {
  console.log(moneyInput.value)

  //要先轉為數字，才能加減乘除
  const money = +moneyInput.value
  //toFixed()是指小數點要保留幾位，這邊0位
  moneyOutput.innerHTML = (28.53 * money).toFixed(0)

  // 也可以寫成這樣，簡寫變換數字，但一定要key放在右邊，不可以把value放在右邊
  moneyOutput.innerHTML = +moneyInput.value * 28.53
})

// 減法
NT.addEventListener('click', function () {
  //要先轉為數字，才能加減乘除
  const money = +moneyInput.value
  //toFixed()是指小數點要保留幾位，這邊0位
  //除法要小心，如果數字變成除0，會變成無限大
  moneyOutput.innerHTML = (money / 28.53).toFixed(2)
})
