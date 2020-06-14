// ```
// function alphabetSort(message){
//   // wirte your code here
// }
// alphabetSort('hello'); // should return 'ehllo'
// ```
function alphabetSort(message){
  return message.split('').sort().join('');
}
alphabetSort('hello');