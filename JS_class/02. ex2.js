// // 現在要確定要抓的Dom節點，我要按什麼鈕
// document.getElementById('plus')

// // 檢查取得的東西，但這邊取道的是整個HTML
// // console.log(document.getElementById('plus'))

// // 現在要確定要抓的Dom節點，哪個地方的數值要被改變
// // 現在用innerHTML (可以得到值又能改變值)取得內文字
// document.getElementById('plus').innerHTML //= 1000; 用＝可以改變他的值

// // 加一個事件監聽器，每點一次就更改數值
// // 事件監聽內要有兩個值，什麼是件、做什麼事
// document.getElementById('plus').addEventListener('click', function () {
//   // 電腦要更改數字，要做兩件事情
//   //1. 要先知道目前的數字
//   //但是從ＨＴＭＬ抓出來的都會是字串，所以要用個＋把它變成數字
//   const nowNumber = +document.getElementById('number').innerHTML

//   //2. 再把這個數字加一
//   document.getElementById('number').innerHTML = nowNumber + 1
// })

// // 現在做減號

// document.getElementById('minus').addEventListener('click', function () {
//   const nowNumber = +document.getElementById('number').innerHTML

//   document.getElementById('number').innerHTML = nowNumber - 1
// })

// ================老師的做法==================

// 因為要打一整串太長，所以先用常數抓到要改變的三個元素

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const number = document.getElementById('number')

//spinner
const dataLoading = `<div class="spinner-border" role="status">
<span class="sr-only">Loading...</span>
</div>`

//跟伺服器相接的話，要做兩件事
// 跟伺服器要資料
// 更新資料

//＝＝＝＝＝＝＝Get Data模擬從伺服器要資料
function getDataFromServer() {
  // 一開始先給的loading的圖案，遮擋資料載入時的等候時間
  number.innerHTML = dataLoading

  //模擬伺服器端的資料格式
  const jsonData = `{
  "id": 1,
  "total":1089
}`
  //將從json那邊來的字串轉換成JS物件或數值格式
  const data = JSON.parse(jsonData)
  //console.log(data.total)

  //這邊是模擬資料載入時會需要等候時間
  setTimeout(function () {
    number.innerHTML = data.total
  }, 1000)
}

//＝＝＝＝＝＝模擬更新伺服器的資料
function updateDataToServer(value) {
  const total = +number.innerHTML + value
  //Loading
  number.innerHTML = dataLoading

  //構造準備送去伺服器端put的資料
  const data = { total: total }
  // 要送到伺服器端，要轉成json字串
  const body = JSON.stringify(data)

  //這邊要做送到伺服器的動作

  //模擬從伺服器端
  const jsonData = `{
    "id": 1,
    "total":${total}
  }`
  //將從json那邊來的字串轉換成JS物件或數值格式
  const responseData = JSON.parse(jsonData)

  //這邊是模擬資料載入時會需要等候時間
  setTimeout(function () {
    number.innerHTML = responseData.total
  }, 500)
}

// 這邊開始模擬伺服器相連後的延遲更新狀況
function changeValueAsync(callback) {
  setTimeout(function () {
    callback()
  }, 500)
}

plus.addEventListener('click', function () {
  // const nowNumber = +number.innerHTML;
  // number.innerHTML = nowNumber + 1;

  //這個function是模擬伺服器相連後的延遲更新狀況
  changeValueAsync(function () {
    // // 縮寫成一行的話是
    // number.innerHTML = +number.innerHTML + 1
    updateDataToServer(1)
  })
})

minus.addEventListener('click', function () {
  // const nowNumber = +number.innerHTML;
  // number.innerHTML = nowNumber + 1;

  //這個function是模擬伺服器相連後的延遲更新狀況
  changeValueAsync(function () {
    // // 縮寫成一行的話是
    // number.innerHTML = +number.innerHTML - 1
    updateDataToServer(-1)
  })
})

//初始化畫面上的數字
getDataFromServer()


// ===================真正跟伺服器要資料
