/* 将给定的数字转换成罗马数字 */
// 方法一
function convert(num) {
    var numRoman =[["","I","II","III","IV","V","VI","VII","VIII","IX"],
                   ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
                   ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                   ["","M","MM","MMM"]];  
    var str = num.toString();
    var arr = str.split("").reverse();
    var newArr = [];
    for(var i=0; i<arr.length ;i++){
      var numR = "";
      var s = arr[i];
      numR = numRoman[i][s];
      newArr.push(numR);
    }
    return newArr.reverse().join("");
      
  }
  
  convert(12); // XII
  convert(3999) ; //  MMMCMXCIX

  // 方法二
  function convert(num) {
    var numRoman =[["","I","II","III","IV","V","VI","VII","VIII","IX"],
                   ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
                   ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                   ["","M","MM","MMM"]];  
    var i=numRoman[3][Math.floor(num/1000)];
    var j=numRoman[2][Math.floor(num%1000/100)];
    var k=numRoman[1][Math.floor(num%100/10)];
    var l=numRoman[0][num%10];
    return  i+j+k+l;      
  }
  
  convert(12); // XII
  convert(3999) ; //  MMMCMXCIX
