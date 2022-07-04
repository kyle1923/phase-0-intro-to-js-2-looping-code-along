// Code your solutions in this file

function writeCards(cards, event) {
    let messages = []
    for (let i = 0; i < cards.length; i++) {
      messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
    }


console.log(writeCards(names));
function countDown() {
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
}
}