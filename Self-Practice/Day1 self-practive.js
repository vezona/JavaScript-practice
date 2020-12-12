const plus = document.getElementById('plus')

const minus = document.getElementById('minus')

const number = document.getElementById('number')

plus.addEventListener('click', function () {
  number.innerHTML = +number.innerHTML + 1
})

minus.addEventListener('click', function () {
  number.innerHTML = +number.innerHTML - 1
})

////////////ＥＸ2

////////////ＥＸ  選擇縣市表單
