// 先統一得到目前的網頁上的要使用的DOM元素物件
const targetText = document.getElementById('target')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')

// 資料載入的指示樣式
const dataLoading = `<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>`




//＝＝＝＝＝＝＝真正跟json連接
async function getDataFromServer() {
  // 一開始先給的loading的圖案，遮擋資料載入時的等候時間
  number.innerHTML = dataLoading

  //連接伺服器端的資料
  const url = 'http://localhost:3000/counter'
  // 要使用的要求方法
  const method = 'GET'

// GET方法不有body，先設定出樣版物件
const request = new Request(url, {
  method: method,
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
})

  // 從伺服器端得到的json字串
  const response = await fetch(request)
  //將從json那邊來的字串轉換成JS物件或數值格式
  const data = await response.json()
  //console.log(data.total)


//＝＝＝＝＝＝模擬更新伺服器的資料
function updateDataToServer(value) {
  const total = +number.innerHTML + value
  //Loading
  number.innerHTML = dataLoading

  //構造準備送去伺服器端put的資料
  const data = { total: total }
  // 要送到伺服器端，要轉成json字串
  const body = JSON.stringify(data)
  const method = 

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
