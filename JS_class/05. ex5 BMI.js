const height = document.getElementById('height')

const weight = document.getElementById('weight')

const click = document.getElementById('click')

const output = document.getElementById('output')

click.addEventListener('click', function () {
  // 現在計算平方，可以用兩個，也可以用數學公式Math.pow(height/100,2)
  // height2 = ((+height.value) / 100) * ((+height.value) / 100)

  height2 = Math.pow(+height.value / 100, 2)

  // 現在把體重除上換算好的高，限制在小數點2位數以內
  output.innerHTML = (+weight.value / height2).toFixed(2)
})
