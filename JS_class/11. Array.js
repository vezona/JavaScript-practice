// 陣列是物件，[]裡面的稱為成員，彼此用逗號分格
// Array用length來得知陣列內有多少成員
// 陣列的索引值從0開始，並非從1

const { rules } = require("eslint-config-prettier")

[]有兩種用途
1. 定義陣列的成員 
2. 存取陣列的成員

const aArray = []
const bArray = [1, 2, 3]


const a =[1,2,3]
const b = a //同時會指向a陣列
// 但這樣就不能更改b的值，不然會影響到a

// 真正要複製但又能更改裡面的值，要用...

// 就能拷貝a，然後成為新的陣列。之後怎麼更改c陣列內的東西，都不會影響到a陣列
const c =[...a]
c[2]=999


// 陣列的基本四個處理方法，用來要把新成員送入、或把舊成員拉出

＊這兩個都是從後方爆出或推入
pop 爆出
push 推入

＊這兩個都是從前方推入或拉出
shift 拉出
unshift 推入


const d=[7,8,9]
const popValue= d.pop() //9
但爆出來後，d就會變成[7,8]


JS 中的字串其實隱含是字元的陣列，所以可以用[]去存取

const s='hello'
s[0] //h
s[3]=a //s="helao"


切割陣列
＊注意，不包含結尾
s.slice(start, [end])，[end]可寫可不寫
但這樣的寫法[]意思是，slice不包含結尾

const a = [7,8,9]

如果要取8,9
可以寫成 
a.alice(1)，代表從1往後全選

但如果寫成
a.slice(1,2)，代表結尾在2且不包含結尾，所以只會取得[7]

