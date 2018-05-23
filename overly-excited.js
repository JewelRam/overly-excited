// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    
let newWord = "";
    for (let i = 0; i < theWordArray.length; i++) {
        
        newWord += theWordArray[i]
        console.log(newWord);


    
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)