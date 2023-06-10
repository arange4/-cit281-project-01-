/*
    CIT 281 Project 1
    Name: Aidan Range
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Generate a random string of lowercase letters with a length between 5 and 25
function generateRandomString() {
    const length = getRandomInteger(5, 26);
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInteger(0, letters.length);
        result += letters[randomIndex];
    }

    return result;
}

// Output the random string to the console
console.log(generateRandomString());

