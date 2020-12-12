const clock = document.getElementById('clock')

const start = document.getElementById('start')

const stop = document.getElementById('stop')

// 一開始不確定是什麼值，所以先給一個null
let timerID = null

start.addEventListener('click', function () {
  // 設定時間
  timerID = setInterval(function () {
    clock.innerHTML = new Date().toLocaleTimeString()
  }, 1000)
})

stop.addEventListener('click', function () {
  if (timerID) clearInterval(timerID)
})
