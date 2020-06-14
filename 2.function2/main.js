// ```
// function palindrome(message){
//   // wirte your code here
// }
// palindrome('hello'); // should return false
// palindrome('abcba'); // should return true
// ```
function palindrome(message){
    if(message.length == 0 || message.length == 1) return true;
    for(var i = 0;i < message.length/2;i++){
        if(message[i] != message[message.length-i-1]){
            return false;
        }
    }
    return true;
}
palindrome('hello'); 
palindrome('abcba'); 