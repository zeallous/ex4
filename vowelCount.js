function vowelCount(str){
    // HINT: split string into an array
    var tokenizedStringArray = str.split(" "); // split by space
    
    // HINT: set vowel count
    var vowelCount1 = 0;
    
   // YOUR CODE can go here
   for (i = 0; i < tokenizedStringArray.length; i++) {
        for (j = 0; j < tokenizedStringArray[i].length; j++) {
            if(isVowel(tokenizedStringArray[i].charAt(j))) {
              vowelCount1++;
            }
             
            
        } 
   }
    return vowelCount1;
}

// This is a handy function that can be used to establish whether a character is a vowel
function isVowel(vowel){
    var vowels = ["a", "e", "i", "o", "u"];
    isTrue = false;
    for (var i=0; i < vowels.length; i++){
        if (vowel === vowels[i]){            
            isTrue = true;
            break;
        }
    }
    return isTrue;
}


// the answer here should be true if you write code right
console.log(vowelCount("Hi there") === 3);
