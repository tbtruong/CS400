
/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. 
*/


   function* sentToWords(sentence) {
       const words = sentence.split(" "); 
       while (words) {
           yield words.shift()
       }
       return;
   }

   const test = sentToWords("All I know is something like a bird within her sang");
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   console.log(test.next().value);
   