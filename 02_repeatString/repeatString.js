const repeatString = function(repeatStr, repeatNum) {
    let newString = repeatStr;
    console.log(repeatNum);
    if (repeatNum == 0) {
        return "";
        
    } else if (repeatNum < 0) {
        return "ERROR";
        
    } else {

        console.log("did we keep going?");
        for (let i = 0; i < repeatNum-1; i++) {
            console.log(newString);
            newString = newString.concat(repeatStr);
        }
        return newString;
    }
}

// Do not edit below this line
module.exports = repeatString;
