/*比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。*/ 

// 方法一： 通过两个for循环来进行比较
function diff(arr1, arr2) {
     var newArr =[];
     for(var i=0;i<arr1.length;i++){
       var idx = arr2.indexOf(arr1[i]); // 数组arr1在arr2中的不同项
       if(idx == -1){
         newArr.push(arr1[i]);
       } 
     }
     for(var j=0;j<arr2.length;j++){
       var idx2 = arr1.indexOf(arr2[j]); // 数组arr2在arr1中的不同项
       if(idx2 == -1){
         newArr.push(arr2[j]);
       }
     }
    return newArr;
   }
   
   diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite"]);// ["andesite", "grass", "dirt", "pink wool", "dead shrub", "diorite"]

// 方法二： 使用filter()方法
function diff(arr1, arr2) {
    var a1 = arr1.filter(function(val){
        return arr2.indexOf(val) === -1;
      });
      var a2 = arr2.filter(function(val){
        return arr1.indexOf(val) === -1;
      });
      return a1.concat(a2);
  }
  
  diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite"]);// ["andesite", "grass", "dirt", "pink wool", "dead shrub", "diorite"]
