const words = document.getElementById('words')

// 可以抓出這個元件的style的顏色，並更改色票
// words.style.color = 'red'

// 在CSS中有-的項目，要換到ＪＳ中時，都要改寫呈小駝峰的樣式，例如：font-size = fontSize / background-color = backgroundColor

// 現在要設定輸入框
//統一先設定
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')

const click = document.getElementById('click')

// 先抓到輸入框內的值，文字輸入框或選單等，要抓值得話要抓value

// click.addEventListener('click', function () {
//     console.log(red.value);
//     console.log(green.value);
//     console.log(blue.value);
// })

//把十進位轉乘十六進位
// click.addEventListener('click', function () {            +是為了要把它變成數字
//     console.log((+red.value).toString(16));
//     console.log((+green.value).toString(16));
//     console.log((+blue.value).toString(16));
// })

//要寫一個簡單的函示，補齊只有一位數時，前面要加0

// 先宣告一個變數
click.addEventListener('click', function () {
  let color = '#'
  color = color + (+red.value).toString(16)
  color = color + (+green.value).toString(16)
  color = color + (+blue.value).toString(16)
  console.log(color)
  words.style.color = color
})
