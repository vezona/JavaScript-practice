//產生隨機數，但要先設定剪刀 石頭 布 分別是1、2、3，電腦才能認得

const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

const scissor = document.getElementById('scissor')
const paper = document.getElementById('paper')
const stone = document.getElementById('stone')

//先預設使用者跟電腦在還沒按下鍵時，他的數值都是0
// 設定剪刀=1 石頭=2 布=3，要注意陣列的索引值是從0開始！
const stateList = ['剪刀', '石頭', '布']

//判斷輸贏的過程，會有三種狀況，電腦贏、你贏、平手
// 視finalState的數值為：0、1、2
const finalList = ['電腦贏', '你贏', '平手']

//記錄使用者出了什麼拳，先給個預設狀況
let userState = 0
//記錄電腦出了什麼拳，先給個預設狀況
let comState = 0

// 記錄輸贏最後結果，先給個預設狀況
let finalState = 0
// 按下剪刀按鍵時==================================
scissor.addEventListener('click', function () {
  //按下剪刀時，使用者的狀態是剪刀=1
  userState = 1

  //要呈現你出的東西是
  user.innerHTML = '你出' + stateList[userState - 1]

  //按下鍵時，電腦要產生隨機一個亂數
  comState = Math.floor(Math.random() * (3 - 1 + 1)) + 1

  //要呈現電腦出的東西是
  computer.innerHTML = '電腦出' + stateList[comState - 1]

  //現在要判斷誰贏誰輸（很難，目前只有二元能判斷）
  // 建議先用紙筆寫下邏輯思考過程
  //只要兩個值相等，就是平手，最簡單
  if (userState === comState) finalState = 2

  //   下面三項是列出你贏的情況，因為預設是電腦贏 （let finalState=0）
  if (userState === 2 && comState === 1) finalState = 1
  if (userState === 3 && comState === 2) finalState = 1
  if (userState === 1 && comState === 3) finalState = 1

  ///呈現文字在網頁上
  result.innerHTML = '最後結果: ' + finalList[finalState]

  //重設所有出拳與結果
  userState = 0
  comState = 0
  finalState = 0
})

// 把重複的功能寫成一個簡單函示
//韓式通常有兩個功能， ＋還原重設
//唯一會改變的是每次userState的狀態，所以設定一個參數userStateNow放入函數，然後帶入userState的數值
// function的內容基本上就是整個剪刀內的內容
function play(userStateNow) {
  userState = userStateNow

  //要呈現你出的東西是
  user.innerHTML = '你出' + stateList[userState - 1]

  //按下鍵時，電腦要產生隨機一個亂數
  comState = Math.floor(Math.random() * (3 - 1 + 1)) + 1

  //要呈現電腦出的東西是
  computer.innerHTML = '電腦出' + stateList[comState - 1]

  //現在要判斷誰贏誰輸（很難，目前只有二元能判斷）
  // 建議先用紙筆寫下邏輯思考過程
  //只要兩個值相等，就是平手，最簡單
  if (userState === comState) finalState = 2

  //   下面三項是列出你贏的情況，因為預設是電腦贏 （let finalState=0）
  if (userState === 2 && comState === 1) finalState = 1
  if (userState === 3 && comState === 2) finalState = 1
  if (userState === 1 && comState === 3) finalState = 1

  ///呈現文字在網頁上
  result.innerHTML = '最後結果: ' + finalList[finalState]

  //重設所有出拳與結果
  userState = 0
  comState = 0
  finalState = 0
}

// 接下來就是把play的函式帶入其他兩個選項中

// 按下石頭按鍵時==================================
stone.addEventListener('click', function () {
  play(2)
})

// 按下布按鍵時==================================
paper.addEventListener('click', function () {
  play(3)
})
