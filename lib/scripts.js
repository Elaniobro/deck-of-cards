'use-strict'
/**
 * @class Deck
 * @desc Generates a deck of playing cards
 */
class Deck {
    /**
    * @constructor
    * @param {Function}
    */
    constructor() {
        this.cards = [];
        this.getDeck();
        this.renderDeck();
        this.shuffle();
    }

    /**
     * @method getDeck
     * @param {Function}
     * @return new Deck of cards
     */
    getDeck() {
        const { cards } = this;
        const suits = ['diamonds', 'clubs', 'hearts', 'spades'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        suits.forEach((suit) => {
            values.forEach((value) => {
                let card = { value: value, suit: suit };
                cards.push(card);
            })
        })

        return cards;
    }
    /**
     * @method renderDeck
     * @param {Function}
     */
    renderDeck() {
        console.log('renderDeck');
        const { cards } = this;
        document.querySelector('.card-deck').innerHTML = '';
        cards.forEach((card) => {
            const cardItem = document.createElement('div');
            const cardType = document.createElement('div');
            const cardTypeInvert = document.createElement('div');

            const cardValue = document.createElement('div');
            const cardSuit = document.createElement('div');

            const cardValueInvert = document.createElement('div');
            const cardSuitInvert = document.createElement('div');

            cardItem.classList.add('cards__card', `cards__suit--${card.suit}`);
            cardValue.classList.add(`cards__card--value-${card.value}`);
            cardSuit.classList.add(`cards__card--suit-${card.suit}`);

            cardValueInvert.classList.add('cards__card--invert', `cards__card--value-${card.value}`);
            cardSuitInvert.classList.add('cards__card--invert', `cards__card--suit-${card.suit}`);

            cardType.classList.add('cards__type-wrapper--normal')
            cardTypeInvert.classList.add('cards__type-wrapper--invert')

            cardValue.innerHTML = card.value
            cardValueInvert.innerHTML = card.value;
            cardType.appendChild(cardValue);
            cardType.appendChild(cardSuit)

            cardTypeInvert.appendChild(cardValueInvert);
            cardTypeInvert.appendChild(cardSuitInvert);

            cardItem.appendChild(cardType);
            cardItem.appendChild(cardTypeInvert);
            document.querySelector('.card-deck').appendChild(cardItem);
        });
    }
    /**
     * @method shuffle
     * @param {Function}
     * @return shuffled deck of cards
     */
    shuffle() {
        const { cards } = this;

        for (let i = 0; i < 1000; i++) {
            const location1 = Math.floor((Math.random() * cards.length));
            const location2 = Math.floor((Math.random() * cards.length));
            let tmp = cards[location1];

            cards[location1] = cards[location2];
            cards[location2] = tmp;
        }
        return cards;
    }
}

const shuffleBtn = document.querySelector('.shuffle');
const reDealBtn = document.querySelector('.re-deal');
let cards;

shuffleBtn.addEventListener('click', () => {
    cards.shuffle();
    cards.renderDeck();
});

reDealBtn.addEventListener('click', () => load());

function load() {
    document.querySelector(".card-deck").innerHTML = "";
    cards = new Deck();
    cards.renderDeck;
}

window.addEventListener("load", load, false);
