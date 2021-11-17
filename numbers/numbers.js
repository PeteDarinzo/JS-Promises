
const numbersUrl = "http://numbersapi.com";


/********************************************************
  * Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.
********************************************************/

// axios.get(`${numbersUrl}/44?json`)
//     .then(res => {
//         const fact = res.data.text;
//         $("#fact-list").append(`<li>${fact}</li>`);
//     })



/********************************************************
 * Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
 ********************************************************/


// axios.get(`${numbersUrl}/1..5,10,11,12?json`)
//     .then(res => {
//         const factObj = res.data
//         for(const number in factObj) {
//             $("#fact-list").append(`<li>${factObj[number]}</li>`);
//         }
//     })


/********************************************************
 * Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
 ********************************************************/

let numberFactPromises = [];

for (let i = 0; i <= 3; i++) {
    numberFactPromises.push(axios.get(`${numbersUrl}/101?json`));
}

Promise.all(numberFactPromises)
    .then(factArr => {
        factArr.forEach(f => {
            const fact = f.data.text;
            $("#fact-list").append(`<li>${fact}</li>`);
        });
    })
