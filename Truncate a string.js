/*如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。*/

function truncate(str, num) {
    var cutStr = '';
    // 判断原字符串长度是否大于截断字符串长度，且截断的字符串是否大于3
    if(str.length > num && num >3){
      cutStr = str.slice(0,num-3);
        cutStr+="...";
        return cutStr;
    }
    // 判断原字符串长度是否大于截断字符串长度，截断的字符串长度大于三
    else if(str.length > num && num < 3){
        cutStr = str.slice(0,num);
        cutStr+="...";
        return cutStr;  
    }
    // 截断的字符串比原字符串长
    else{
      return str.slice(0,num); 
    }
    
  }
  
  truncate("A-tisket a-tasket A green and yellow basket", 11); // A-tisket...
  truncate("A-", 1); //A...
  truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // A-tisket a-tasket A green and yellow basket