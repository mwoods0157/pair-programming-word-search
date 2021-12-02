/*const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}

module.exports = wordSearch*/

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
    }
    return true;
}




const wordSearch = function(array, word) {
    //Creates array of the word
    let wordArray = word.split('');
    
    //First for loop checks whether the word is found in any row (subArray) in the array
    for (let i = 0; i < array.length; i++) {
        if (eqArrays(array[i], wordArray)) {
            return true;
        } 
    }
    //Second for loop checks whether the word is found in any column in the array
    for (let i = 0; i < array[0].length; i++) { //Iterates through row
        //Creates a newArray each time the first for loop goes
        let newArray = [];
        //Iterates through the outer loop
        for (let j = 0; j < array.length; j++) { //Iterates through column
            //Pushes that value to the newArray
            newArray.push(array[j][i]); 
            if (eqArrays(newArray, wordArray)) {
               return true;
            }
        }
        //If the wordArray and newArray are equal, we know the word can be found
    }
}
