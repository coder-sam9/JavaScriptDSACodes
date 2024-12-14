var numDifferentIntegers = function (word) {
  let stringArray = [];
  let numberString = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!isNaN(char)) {
      console.log(
        "in the code for",
        "char=",
        char,
        "numberString=",
        numberString
      );
      // if(numberString==''){
      if (char == "0" && numberString == "") {
        console.log(
            "in the code for 0",
            "char=",
            char,
            "numberString=",
            numberString,
            "i=",i,
            isNaN(word[i+1]),!stringArray.includes('0')
          );
        if (
          isNaN(word[i + 1]) && !stringArray.includes('0')
        ) {
            console.log("in the push 0")
          stringArray.push("0");
        } else {console.log('in the continue');continue;}
      } else {
        numberString = numberString + char;
        // }
        console.log(
          "in the code for seccond if",
          "char=",
          char,
          "numberString=",
          numberString
        );
      }
    } else if (numberString != "") {
      console.log(
        "in the code for else if",
        "char=",
        char,
        "numberString=",
        numberString
      );
      if (!stringArray.includes(numberString)) {
        stringArray.push(numberString);
      }
      numberString = "";
    }
  }
//   if (numberString != "") {
//     if (!stringArray.includes(numberString)) {
//       stringArray.push(numberString);
//       numberString = "";
//     }
//   }
  console.log("string array", stringArray);
  return stringArray.length;
};
console.log(numDifferentIntegers("4w31am0e"));
