/*把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];*/

function chunk(arr, size) {
    var newArr=[];
    for(var k =0 ; k<arr.length; k+=size){
      newArr.push(arr.slice(k,k+size));
    }
    return newArr;
  }
  
  chunk(["a", "b", "c", "d"], 2);// [["a", "b"], ["c", "d"]]
  chunk([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]]