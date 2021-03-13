/*Create a function that takes an integer as an argument
and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number){
    if (number % 2 !=0){
      return "Odd"
    }if (number % 2 == 0){
      return "Even"}
}

/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!*/

function smash (words){
    "use strict"
    return words.join(" ")
}

/*Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).*/

let arrayOfSheep = [true, true, true, false, true, true, true, true, true, false, true,
    false, true, false, false, true, true, true, true, true, false, false, true, true]

function countSheeps(arrayOfSheep){
    let answer = 0
    for (let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i]){
        answer = answer + 1
      }
    }
    return answer
}
console.log(countSheeps(arrayOfSheep))