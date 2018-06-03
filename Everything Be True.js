/*完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，
并且属性(pre)对应的值为真。函数返回ture。反之，返回false。

记住：你只能通过中括号来访问对象的变量属性(pre) */

function every(collection, pre) {
    // Is everyone being true?
    return collection.every(function(item,index,array){
      return item[pre];
    });
  }
  
  every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // true
  every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");// false