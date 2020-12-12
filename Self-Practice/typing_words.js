const typing = document.getElementById('typing')

const text = '一個一個打出我要的字串～～'

const click = document.getElementById('click')
const speed = 200

console.log(text.length)

let i = 0
function typeWrite() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i)
    i++
    setTimeout(typeWrite, speed)
  }
}

click.addEventListener('click', function () {
  typeWrite()
})
