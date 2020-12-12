const desk = document.getElementById('desk')

// 先製作一個函式，負責印出卡片
function createCard(suit, point) {
  return {
    //裡面是一個物件，負責看噗克牌點數與花色
    //這邊用的是這個資料庫https://tairraos.github.io/Poker.JS/的寫法
    //suit: 'h','d','s','c'
    // point:1-13
    //displayPoint: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    suit: suit,
    point: point,
    display: function () {
      let displayPoint = ''

      switch (this.point) {
        case 1:
          displayPoint = 'A'
          break
        case 11:
          displayPoint = 'J'
          break
        case 12:
          displayPoint = 'Q'
          break

        case 13:
          displayPoint = 'K'
          break
        default:
          displayPoint = this.point
          break
      }
      return Poker.getCardImage(100, this.suit, displayPoint)
    },
  }
}

let cards = []
function initCards() {
  const suits = ['h', 'd', 's', 'c']
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  //這邊就要兩個for回圈～一個看花色、一個看點數
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < points.length; j++) {
      cards.push(createCard(suits[i], points[j]))
    }
  }
}
console.log(cards)

const card = createCard('s', 1)
document.getElementById('desk').appendChild(card.display())
