//注意：下拉式選單中，選擇事件時，不是用click，而是用Change！！

//用for回圈去產生年的選項，ＨＴＭＬ那邊就不用一個一個寫option
const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

//寫for回圈時，建議先把下方的go live關掉，不要讓他即時更新，以麵沒寫完更新就跳入無窮迴圈

// 先定義年
// 通常都會用請選擇這個來檢查，避免人家沒有甜
let yearOptions = `<option value="0">請選擇</option>`

for (let i = 1910; i < 2011; i++) {
  yearOptions += `<option value="${i}">${i} </option>`
}

//再產生每一年的選項
year.innerHTML = yearOptions

// 月！！！！
let monthOptions = `<option value="0">請選擇</option>`

for (let i = 1; i < 13; i++) {
  monthOptions += `<option value="${i}">${i} </option>`
}
month.innerHTML = monthOptions

// 日！！！！
let dateOptions = `<option value="0">請選擇</option>`

for (let i = 1; i < 32; i++) {
  dateOptions += `<option value="${i}">${i} </option>`
}
date.innerHTML = dateOptions

// ====================

//用change事件來得到選到的值
let y = 0
let m = 0
let d = 0

year.addEventListener('change', function () {
  y = +year.value
})

month.addEventListener('change', function () {
  m = +month.value

  // 如果年月都有選，更新日，會自動產生日的設定
  if (m > 0 && y > 0) {
    const currentDays = new Date(y, m, 0).getDate()
    console.log(currentDays) //確定有抓到會調整日的數量

    let dateOptions = `<option value="0">請選擇</option>`

    for (let i = 1; i < currentDays + 1; i++) {
      dateOptions += `<option value="${i}">${i} </option>`
    }

    date.innerHTML = dateOptions
  }
})

date.addEventListener('change', function () {
  d = +date.value
})

// 檢查三個值年月日是否都有選擇
if (y && m && d) {
}

// 檢查是否滿18歲～～

const check = document.getElementById('checkAge')
const message = document.getElementById('message')

check.addEventListener('click', function () {
  const today = new Date()

  //抓今年
  const todayYear = today.getFullYear()

  //   注意，月的回傳值是0-11，所以要加一
  const todayMonth = today.getMonth() + 1

  //抓本月
  const todayDate = today.getDate()

  // 預設為未滿18歲，這樣才有一個能比較的值，用布林值就好
  let over18 = false

  // 年相減19以上
  if (todayYear - y > 19) over18 = true

  // 年相減剛好18, 判斷月份

  if (todayYear - y === 18 && todayMonth > m) over18 = true

  // 年相減剛好18, 月份也相同，判斷日期
  if (todayYear - y === 18 && todayMonth - m === m && todayDate >= d)
    over18 = true

  message.innerHTML = over18
    ? '<h3 style="color:blue">Pass</h3> '
    : '<h3 style="color:red"> stop</h3>'
})
