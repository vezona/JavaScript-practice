const table99 = document.getElementById('table99')

//用for回圈做一個九九乘法表

//先宣告一個字串，這個是要呈現在DOM元素的字串
// 先來個tbody開頭
let display = '<tbody>'

// 因為是二維的 ?x?，所以會有內外兩個for回圈
for (let i = 1; i < 10; i++) {
  display += '<tr>'

  for (let j = 1; j < 10; j++) {
    display += '<td>'
    // 中間進行運算

    display += i
    display += 'x'
    display += j
    display += '='
    display += i * j

    //td要來個結尾
    display += '</td>'
  }

  display += '</tr>'
}

//這是結尾
display += '</tbody>'
table99.innerHTML = display
