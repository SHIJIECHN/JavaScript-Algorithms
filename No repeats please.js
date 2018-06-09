/*把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的
字符串个数.连续重复只以单个字符为准

例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有
两个 (aba and aba)没有连续重复的字符 (在本例中是 a). */

function permAlone(str) {
    var arr=str.split("");
    var perarr=[];
    var begin=0;
    //创建正则，如果字符串全重复，则直接return 0
    var reg = /(.)\1+/g;
    console.log(str.match(reg));
    if(str.match(reg)!==null && str.match(reg)[0]===str){
        return 0;
    }
    //用于交换的函数
    function swap(idx1,idx2){
        var temp=arr[idx1];
        arr[idx1]=arr[idx2];
        arr[idx2]=temp;
    }
    //如果begin到了最后一个字符，可以将这个字符串加入到全排列数组中了
    function permall(arr,begin){
     if(begin==arr.length-1){
        perarr[perarr.length]=arr.join("");
      return;
     }
     for(var i=0;(i+begin)<arr.length;i++){
        swap(begin,begin+i);
        permall(arr,begin+1);
        swap(begin,begin+i);
     }
    }
    permall(arr,begin);
    //返回相邻不重复的数量
    return perarr.filter(function(val) {
        return !val.match(reg);
    }).length;
   }
    
  
  permAlone('abcdefa');