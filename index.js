// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);



const messages = [];
const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];
function writeCards(names, event) {
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
    }
return messages;
}
writeCards(names);
*/

function writeCards(names, event) {
    const messages = [];
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
    };
return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(n){
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return n;
}
countDown(10);
