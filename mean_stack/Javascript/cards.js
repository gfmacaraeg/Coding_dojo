class Deck{
	constructor(){
		this.deck = this.shuffle();
		}
		shuffle(){
			function notIn(value, dataset){
	 		for(let item of dataset){
	 			if(item == value){
	 				return false;
	 			}
	 		}
	 		return true;
	 		}
			var list_shuffle = []
	 		while(list_shuffle.length != 52) {
	 			let random = Math.floor(Math.random() * 52) +1
	 			if (notIn(random, list_shuffle)){
	 				list_shuffle.push(random)
	 			}

	 		}
	 		return list_shuffle
		}
		reset(){
			constructor();
		}
		deal(){
			// let random = Math.floor(Math.random() * 52) +1
			let deal = this.deck[0]
			this.deck.shift()
			return deal;
		}
}

class Player extends Deck{
	constructor(name){
		super();
		this.name = name;
		this.hand = []
	}
	get_card(){
		let dealt = this.deal();
		this.hand.push(dealt);
		return this
	}
	discard(card_number){
		let index = -1
		for (var i = 0; i < this.hand.length; i++) {
			if(this.hand[i] == card_number){
				index = i;	
			}
			
		}
		if(index > -1){
			this.hand.splice(index, 1);
		}else{
			console.log("The card is not in hand");
		}
		return this
	}
}

// let deal1 = new Deck('first');
// console.log(deal1.deal());
// console.log(deal1.deck);
let player1 = new Player('Player1');
player1.get_card().get_card()

console.log(player1.hand);
console.log(player1.deck.length)

player1.discard(player1.hand[1])
console.log(player1.hand);
console.log(player1.deck.length)



