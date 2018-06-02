/*找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。 */

/*知识点：
gcd（最大公约数）算法过程（欧几里德算法/辗转相除法） 
有两整数a和b： 
① a%b得余数c，即c=a%b 
② 若c=0，则b即为两数的最大公约数 
③ 若c≠0，则a=b，b=c，再回去执行① 
scm算法（最小公倍数算法） 
最小公倍数=两整数的乘积÷最大公约数，即scm=abs（a*b）/gcd(a,b) */
function smallestCommons(arr) {
    // 将arr按升序排序
    arr = arr.sort((a, b)=>{     
        return a-b;
    });
    // 求a和b的最小公倍数scm(smallest common multiple) scm=abs(a*b)/gcd(a,b)
    var val = arr[0];
    // 求多个数的最小公倍数：先求出两个数的scm1，再求scm1与第三个数的scm2……依次循环
    for(var i=arr[0]+1; i<=arr[1]; i++){
        //console.log(`val:${val}`);
        //console.log(`i:${i}`);
        //console.log(`最大公约数gcd(${val},${i}):${gcd(val,i)}`);
        //console.log(`最小公倍数：${val *= i/gcd(val,i)}`);
        val *= i/gcd(val,i);        
    }
    return val
  }
//求val1和val2的最大公约数（greatest common divisor）
function gcd(val1, val2){
    if(val1%val2 === 0){
        return val2;
    }else{
        return gcd(val2,val1%val2);
    }
}
  
  smallestCommons([1,5]);