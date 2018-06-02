/*给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。

例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3 */

function sumFibs(num) {
    let [...arr] = [1, 1];
    let sum = 1;
    if(num < 2){
        return sum;
    }else{        
        for (let i=2; i<num; i++){
            let subArr = arr[i-1]+arr[i-2];
            if(subArr<=num){
                arr.push(subArr);
            }
        }   
    }
    let newArr = arr.filter((val)=>{
        return val % 2 !== 0 ;
    });    
    sum = newArr.reduce((a,b)=>{
        return a + b;
    },(0,0));
    console.log(sum);
    return sum;
  }

  sumFibs(75025);// 60696
  sumFibs(1000);// 1785
  