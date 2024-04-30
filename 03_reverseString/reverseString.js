const reverseString = function(someString) {
    let reverseString = [];

    for (let i = 0; i < someString.length; i++) {
        reverseString.push(someString.charAt(i));
        console.log(someString.charAt(i));
    }

    reverseString.reverse();
    let reversedString = reverseString.join('');

    console.log(reversedString);

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
