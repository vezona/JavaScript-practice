const yearAndMonth = document.getElementById('yearAndMonth')

const title = document.getElementById('title')

const data = document.getElementById('data')

// 要得到年月日的話，用date這個方法

const now = new Date()

const nowY = now.getFullYear()

const nowM = now.getMonth() + 1

// 這邊要印出日曆最上方年月
// 如果中間不加'-'的話，系統會把數值相加，因為getyear/ getmonth是取得數值
yearAndMonth.innerHTML = nowY + '-' + nowM

//也可以不用'-'，改寫樣板字串的寫法
yearAndMonth.innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}`

// 接下來要製作一到日的title，先做一個陣列
const weekList = ['日', '一', '二', '三', '四', '五', '六']

// 然後用for回圈把title印在上方
// 這邊先宣告一個空字串，也可以不宣告，但會變成全域變數不太好
let weekTitleDisplay = ''

for (let i = 0; i < weekList.length; i++) {
  weekTitleDisplay += `<th>${weekList[i]}</th>`
}

// 寫完後，要在title這邊呈現
title.innerHTML = `<tr>${weekTitleDisplay}</tr>`

// 樣板字串是
// `${}`，把變數放在{}中間，才有辦法取得變數中的值並呈現

// 接下來要處理下方每日表格的部分，可用一元陣列，每七個換行
// 首先要知道某年的某月有幾天
console.log(now.getDate())

//這邊要計算這個月有幾天
const td = new Date(2020, 10, 0)
console.log(td.getDay())
const days = td.getDate()
//可減寫成一行
// const days = new Date(2020, 10, 0).getDate()

//計算本月的第一天是星期幾，回傳0-6，0代表星期日，1-6代表星期一到六
const fd = new Date('2020/10/1')
console.log(fd.getDay())
const weekdayFirst = fd.getDay()

console.log(days, weekdayFirst)

// 這個陣列要長這麼大
const numberOfMember = days + weekdayFirst

// 先產生一個空白陣列，在用for回圈塞資料進去
const dataTemp = []

for (let i = 0; i < numberOfMember; i++) {
  if (i < 4) {
    dataTemp.push('')
  } else {
    dataTemp.push(i - 3)
  }
}

console.log(dataTemp)

// 用tr，每七個要斷一行
let dataDisplay = '<tr>'

for (let i = 0; i < dataTemp.length; i++) {
  dataDisplay += `<td>${dataTemp[i]}</td>`

  //每七個要加入一個換列的<tr></tr>
  if ((i + 1) % 7 === 0) {
    dataDisplay += `<tr></tr>`
  }
}

dataDisplay += `<tr>`

// 寫完後，要在title這邊呈現
data.innerHTML = `${dataDisplay}`
