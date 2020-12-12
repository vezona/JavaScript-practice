const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

// 先知道隨機數要怎麼隨機
// 按按鈕後，要出現隨機數，然後呈現在point那邊，並改變dice

start.addEventListener('click', function () {
  //  產生亂數
  const p = Math.floor(Math.random() * 6) + 1

  // 產生陣列
  const pointTextList = ['one', 'two', 'three', 'four', 'five', 'six']
  //   這個隨機數要顯示在point
  point.innerHTML = p + '點'

  //接著要用陣列來對應點數
  //注意，陣列索引值是從0開始，所以實際上的'one'是對應到索引值0，所以p需要減1
  //但也可以在pointTextList陣列裡第一個放假資料（）ex:pointTextList = ['','one', 'two', 'three', 'four', 'five', 'six']，這樣後面的p就不用減一
  dice.innerHTML = ` <i class="fas fa-dice-${pointTextList[p - 1]}"></i>`
})
