/*用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), 
setLastName(last), and setFullName(firstAndLast).

所有有参数的方法只接受一个字符串参数.

所有的方法只与实体对象交互. */

var Person = function(firstAndLast) {
    var nameArr = firstAndLast.split(" ");
   
    this.getFirstName = function(){
      return nameArr[0];
    };
    this.getLastName = function(){
      return nameArr[1];
    };
    this.getFullName = function(){
      return nameArr[0] + " " + nameArr[1];
    };  
    this.setFirstName = function(first){
      nameArr[0] = first;
    };
    this.setLastName = function(last){
      nameArr[1] = last;
    };
    this.setFullName = function(firstAndLast){
      nameArr[0] = firstAndLast.split(" ")[0];
      nameArr[1] = firstAndLast.split(" ")[1];
    };
  };
  
  var bob = new Person('Bob Ross');
   // Object.keys(bob).length;//6.
   // bob instanceof Person;// true.
   // bob.firstName // undefined.
   // bob.lastName //undefined.
   // bob.getFirstName() // "Bob".
   // bob.getLastName() // "Ross".
   // bob.getFullName() // "Bob Ross".
   // bob.getFullName() //"Haskell Ross" after bob.setFirstName("Haskell").
   // bob.getFullName() // "Haskell Curry" after bob.setLastName("Curry").
   // bob.getFullName() // "Haskell Curry" 在 bob.setFullName("Haskell Curry") 之后.
   // bob.getFirstName() // "Haskell" 在 bob.setFullName("Haskell Curry") 之后.
   // bob.getLastName() // "Curry" 在 bob.setFullName("Haskell Curry") 之后.
