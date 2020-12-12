const x = 10

if (x > 100) {
  console.log('x>100')
} else if (x < 50) {
  //要不然，如果....
  console.log('x<50') //else if 是找到後執行完畢，就不會再往下走
} else {
  console.log('x<100')
}

//一般建議只用if /else就好，不用加else if，否則邏輯會比較有問題。實務上else if也非常少用

// 甚至可以都用if就好，這樣邏輯較清楚
// if (x > 100) {
//   console.log('x>100')
// }

// if (x < 100) {
//   console.log('x<100')
// }



//初學者常犯錯誤是寫成這樣
 const x=10
 if (100>x>10){
     console.log('100>x>10')
 }

 //正確寫法要用&&，這個是代表邏輯的"與/且 and"，兩個都要同時滿足的意思
 const x=10
 if (100>x && x>10){
     console.log('100>x>10')
 }

 可以簡寫成
 if (100>x && x>10) console.log('100>x>10')

// 邏輯的"或 or" 要用兩條線


//三元運算，要在if內都只有一行的情況下才可以使用
// 三元運算是一種表達式
// 問句？如果true就給:如果false就給


//SWITCH是用來判斷各種情況的，如果選一要給什麼、選二要給什麼等等

const fruit = '芒果'
switch (fruit){

    //如果選擇香蕉
    case'香蕉': 
         // 給出什麼回應
        console.log('hi')
        //然後要停止，break跳出離開，不用往下執行
        break

    //如果選擇香蕉
    case'香蕉': 
        console.log('hi')
        break

}