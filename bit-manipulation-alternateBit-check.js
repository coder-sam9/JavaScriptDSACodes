/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let bits=''
    let previousBit;
    let currentBit;
    while(n>0){
        currentBit=n%2;
        bits=currentBit+bits;
        // if(previousBit!=undefined && previousBit==currentBit){
        //     console.log(bits)
        //     return false
        // }
        // previousBit=n%2;
        n=Math.floor(n/2);
    }
    console.log(bits)
    return true
};
console.log(hasAlternatingBits(152))