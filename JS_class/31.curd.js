// 先統一得到目前的網頁上的要使用的DOM元素物件
const memberData = document.getElementById('memberData')

// 資料載入Loading的指示樣式
const dataLoading = `<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>`

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝刪除資料的函式，最好移到前面＝＝＝＝＝＝＝＝＝＝＝＝＝

async function deleteUserToServer(id) {
  // 伺服器網址
  //id 只能使用我們動作時的那個按鈕id（deleteUserToServer(id)）
  const url = 'http://localhost:3000/users/' + id
  // 要使用的要求方法
  const method = 'DELETE'

  // GET方法沒有body，先設定出樣版物件
  const request = new Request(url, {
    method: method,
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })

  // 從伺服器端得到的json字串
  const response = await fetch(request)
  // 剖析從伺服器端來的json字串為js的資料類型
  const responseData = await response.json()

  // 刪除後要重新load一次表單
  getUsersFromServer()
}

//＝＝＝＝＝＝＝json連接，ＧＥＴ資料的函式＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
async function getUsersFromServer() {
  // 一開始先給的loading的圖案，遮擋資料載入時的等候時間
  memberData.innerHTML = dataLoading

  //連接伺服器端的資料
  const url = 'http://localhost:3000/users'
  // 要使用的要求方法
  const method = 'GET'

  // GET方法沒有body，先設定出樣版物件（相當於postman裡面選body的格式）
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

  console.log(data)

  let display = ''

  // 接著用回圈抓出想呈現的會原資料
  for (let i = 0; i < data.length; i++) {
    display += `<tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      <td>${data[i].username}</td>
      <td>
      <button class="modify" data-id="${data[i].id}">修改</button>
      <button class="delete" data-id="${data[i].id}">刪除</button></td>
      </tr>`
  }

  setTimeout(function () {
    // 資料載入後取代原本的資料載入提示
    memberData.innerHTML = display

    // 將事件掛到修改的按鈕上＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    const modifyList = document.querySelectorAll('.modify')

    //element是函式的參數，把參數加掛事件
    modifyList.forEach(function (element) {
      element.addEventListener('click', function (event) {
        // 跳出這個東西的id
        alert(event.target.dataset.id)
      })
    })
    // 將事件掛到刪除的按鈕上＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    const deleteList = document.querySelectorAll('.delete')

    deleteList.forEach(function (element) {
      element.addEventListener('click', function (event) {
        // 這邊只是跳出現在這列的id，讓你知道他的id是什麼
        alert(event.target.dataset.id)

        // 這邊才是真正執行上面的刪除函式
        deleteUserToServer(event.target.dataset.id)
      })
    })
  }, 500)
}

getUsersFromServer()
