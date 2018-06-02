/*求小于等于给定数值的质数之和。

只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

给定的数不一定是质数。 */
function sumPrimes(num) {
    let  arr = [];
    let flag;
    for(let i =2;i<=num;i++){
        flag = 1;
        for(let j =2; j <= i; j++){
            if(i % j === 0 && i !== j){
                flag = 0;
            }
        }
        if(flag){
            arr.push(i)
        }
    }
    let sum = arr.reduce((pre,curr)=>{
        return pre + curr;
    });
    return num;
  }
  
  sumPrimes(977);