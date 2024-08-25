interface Card {
    suit: string;
    card: number;
}


interface Deck{
    suits: string[];
    cards:number[];
    createCardPicker(this:Deck):() => Card
}



let deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(This:Deck) {
        return ()=> {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

