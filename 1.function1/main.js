// ```
// function reverseString(message){
//   // wirte your code here
// }
// reverseString('hello'); // should return 'olleh'
// ```
function reverseString(message){
   return message.split('').reverse().join('');
}
reverseString('hello');