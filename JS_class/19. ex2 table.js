const title = document.getElementById('title')

const data = document.getElementById('data')

const csvData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85
"金金",100,60,85`

// 接下來要刪掉csv檔自動加上的“”
// 最前面//內是要取代的字，g是字串內所有都會搜尋，i是不分大小寫，逗號後面是取代為...，這邊是個空字串
const newData = csvData.replace(/"/gi, '')
console.log('newData', newData)

// 先用陣列分割把data裡面的物件分割一下
// csv檔的斷行會用"\n"，上面看不到，但我們可以以這個去進行切割
const dataArray = newData.split('\n')
console.log('dataArray', dataArray)

// 繼續用逗號切割物件

const titleList = dataArray[0].split(',')
console.log('titleList', titleList)

// 產生要輸出到網頁上的資料
let titleDisplay = ''
// for (let i = 0; i < titleList.length; i++) {
//   titleDisplay += `<th>${titleList[i]}</th>`
// }

// 也可以用for+of 或是for+in 一一列出陣列中的元素
for (let i of titleList) {
  console.log('i', i)
  titleDisplay += `<th>${[i]}</th>`
}

// 呈現標題在thead中
title.innerHTML = titleDisplay

// 接下來，要用物件的方式來描述每一行的資料
// 這邊用物件來描述是因為，分數的名稱跟值有搭配意義的, ex 國文：59分，不只是單純陣列排序而已

const students = []

//i要從1開始
for (let i = 1; i < dataArray.length; i++) {
  //現在要把每個陣列切割開，然後一一代給之後的物件值
  const temp = dataArray[i].split(',')

  //這邊就來製作物件了～
  const student = {
    name: temp[0],
    chinese: temp[1],
    math: temp[2],
    english: temp[3],
  }
  students.push(student)
}

console.log('students', students)

//等等單項科目要加總，這邊先設定初始為0
let totalChinese = 0
let totalMath = 0
let totalEnglish = 0

// 把資料呈現出來
let studentDisplay = ''
// 這邊也可以用完整for 回圈寫
// for (let i = 1; i < students; i++)
for (let i in students) {
  studentDisplay += `<tr>
  <td>${students[i].name}</td>
  <td>${students[i].chinese}</td>
  <td>${students[i].math}</td>
  <td>${students[i].english}</td>
  </tr>`

  // 這邊加每項總分，記得要換成數字的＋
  totalChinese += +students[i].chinese
  totalMath += +students[i].math
  totalEnglish += +students[i].english
}
console.log('total', totalChinese, totalMath, totalEnglish)

console.log('studentDisplay', studentDisplay)

// 最後要在每一科的最後一欄加上平均
//這個會希望是動態的，數值會變動，所以要用let
// 如果數值有小數點，就加一個toFixed包起來
let averageDisplay = `<tr>
<td>各科平均</td>
<td>${totalChinese / students.length}</td>

<td>${(totalMath / students.length).toFixed(0)}</td>

<td>${totalEnglish / students.length}</td>
</tr>`

// 呈現內容在tbody中
data.innerHTML = studentDisplay + averageDisplay
