// ```
// function countWords(message){
//   // wirte your code here
// }
// countWords('Good morning, I love JavaScript.'); // should return 5
// ```
function countWords(message){
  return message.split(' ').length;
}
countWords('Good morning, I love JavaScript.');