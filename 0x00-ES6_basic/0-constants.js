function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  }
  
function getLast() {
    return ' is okay';
  }
  
function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
var ans = taskFirst() + taskNext();
console.log(ans);