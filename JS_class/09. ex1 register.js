const click = document.getElementById('click')

const name = document.getElementById('name')

const phoneNumber = document.getElementById('phoneNumber')

const address = document.getElementById('address')

const account = document.getElementById('account')

const password = document.getElementById('password')

const checkPassword = document.getElementById('checkPassword')

// 不可以把值也加進變數內，否則變數就會固定值。他得直得要是空白的，按下去當下才會抓值

// click.addEventListener('click', function () {
//   //   if (name.value === '') alert('沒填姓名') 可以寫成下面的，！代表邏輯反向（真變假，假變真的意思）
//   //   這邊是利用空白字串是假家族的情況來判斷

//   //檢查姓名
//   if (!name.value) alert('沒填姓名')

//   //檢查電話
//   if (!phoneNumber.value) alert('沒填電話')

//   //檢查住址
//   if (!address.value) alert('沒填地址')

//   //檢查帳號
//   if (!account.value) alert('沒填帳號')

//   //   檢查密碼是否相等
//   if (password.value !== checkPassword.value) alert('兩次輸入密碼不同')
// })

//如果要出現錯誤字串的話，則要在ＨＴＭＬ那邊加一欄出線的字，然後先來一個錯誤字串定義

const message = document.getElementById('message')

click.addEventListener('click', function () {
  //   把錯誤拉進來，讓他每次跟著更新
  //   let error = '錯誤:'

  //   也可以把錯誤拉到最後，用三元表達式判斷錯誤
  let error = ''

  //檢查姓名
  if (!name.value) error += '沒填姓名'

  //檢查電話
  if (!phoneNumber.value) error += '沒填電話'

  //檢查住址
  if (!address.value) error += ' 沒填地址'

  //檢查帳號
  if (!account.value) error += '沒填帳號'

  //   檢查密碼長度
  if (password.value.length < 6) error += '密碼至少要六位'

  //   檢查密碼是否相等
  if (password.value !== checkPassword.value) error += '兩次輸入密碼不同'

  //   message.innerHTML = error

  //   這邊可以用三元表達式來表達有沒有錯誤訊息
  //   message.innerHTML = error ? '錯誤' + error : '輸入完成'

  message.innerHTML = error
    ? '<span style="color:red"> 錯誤：' + error + '</span>'
    : '<span style="color:green"> 輸入完成準備送出</span>'
})
