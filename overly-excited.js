// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in","the","light","of","the","moon"];
let nextSentence = ["poop", "poop", "poop"];
let question = "?"
function addExcitement (theWordArray, question) {
    let wow = "!";
    // Each time the for loop executes, you're going to add one more word to this string
    
let newWord = "";
    for (let i = 1; i < theWordArray.length; i++) {
        
        newWord += ` ${theWordArray[i-1]}`;
        console.log(newWord);
      if (i % 3 === 0) {
        newWord += question;
        question += "!";
      
    

    }
    }   

}

// Invoke the function and pass in the array
addExcitement(nextSentence, "&")