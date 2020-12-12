const a = [1, 2, 3, 4, 5]

// for回圈可以拿來處理各種陣列
for(let i=0:i<a.length;i++){
    console.log([i,a[i]])


}


// forEach不一定能處理所有陣列
//以a陣列為起點，呼叫某個函式
// 包在某個方法裡面的函式，通常稱為回調、回呼callback (呼叫函式)
a.forEach(function(value, index, array){
//對陣列元素做某些事

console.log(index,value)
})
