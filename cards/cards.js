

const cardsUrl = "http://deckofcardsapi.com";
let deckId = "";

/********************************************************
 * Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
 ********************************************************/


// axios.get(`${cardsUrl}/api/deck/new/shuffle/?deck_count=1`)
//     .then((res) => {
//         console.log(res);
//         deckId = res.data.deck_id;
//         return axios.get(`${cardsUrl}/api/deck/${deckId}/draw/?count=1`)
//     })
//     .then((res) => {
//         const value = res.data.cards[0].value;
//         const suit = res.data.cards[0].suit;
//         console.log(`${value} of ${suit}`)
//     })



/********************************************************
 *Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a *request to the same API to get one more card from the same deck.

Once you have both cards, console.log the values and suits of *both cards.
 ********************************************************/


// axios.get(`${cardsUrl}/api/deck/new/shuffle/?deck_count=1`)
//     .then((res) => {
//         console.log(res);
//         deckId = res.data.deck_id;
//         return axios.get(`${cardsUrl}/api/deck/${deckId}/draw/?count=1`)
//     })
//     .then((res) => {
//         const value = res.data.cards[0].value;
//         const suit = res.data.cards[0].suit;
//         console.log(`${value} of ${suit}`)
//         return axios.get(`${cardsUrl}/api/deck/${deckId}/draw/?count=1`)
//     })
//     .then((res) => {
//         const value = res.data.cards[0].value;
//         const suit = res.data.cards[0].suit;
//         console.log(`${value} of ${suit}`)
//     })



/*
Generate angle between 311 and 39 degrees 
*/
function getRandomAngle() {
    const rotation = Math.floor(Math.random() * 40);
    const sign = Math.floor(Math.random() * 2)
    if (sign === 0) {
        return rotation * (-1);
    } else {
        return rotation;
    }
}

/*
Generate small (+/- 24px) shift
*/
function getRandomTranslation() {
    const translation = Math.floor(Math.random() * 25);
    const sign = Math.floor(Math.random() * 2)
    if (sign === 0) {
        return translation * (-1);
    } else {
        return translation;
    }
}

axios.get(`${cardsUrl}/api/deck/new/shuffle/?deck_count=1`)
    .then((res) => {
        console.log(res);
        deckId = res.data.deck_id;
    })

function drawCard() {
    axios.get(`${cardsUrl}/api/deck/${deckId}/draw/?count=1`)
        .then((res) => {
            console.log(res.data);
            if (res.data.remaining === 0) {
                $("#draw-button").html("NO CARDS REMAINING")
            }
            $("#counter").html(`Cards Remaining: ${res.data.remaining}`)
            const image = res.data.cards[0].image;
            // generate random angles and rotations for cards
            const rotation = getRandomAngle();
            const x = getRandomTranslation();
            const y = getRandomTranslation();
            $("#draw-pile").append(`<div class="card position-absolute" style="transform: rotate(${rotation}deg) translate(${x}px, ${y}px);"><img src="${image}"></div>`);
        })
}

$("#draw-button").on("click", () => {
    drawCard();
})