/*有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。
而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。

所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6 */

function pairwise(arr, arg) {
    var l=arr.length,res=0;
    for(var i=0;i<l;i++){
      for(var j=i+1;j<l;j++){
        if(arr[i]+arr[j]===arg){
          res=res+i+j;
          arr[i]="unuse";
          arr[j]="unuse";
        }
      }
    }
    console.log(res);
    return res;
  }
  airwise([1, 4, 2, 3, 0, 5], 7);// 11.
  pairwise([1, 3, 2, 4], 4);// 1.
  pairwise([1, 1, 1], 2);// 1.
  pairwise([0, 0, 0, 0, 1, 1], 1);// 10.
  pairwise([], 100);//0.