/*创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.

给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指
由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 (如 D = {2, 3}), 
你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). */
function sym() {
    let args = Array.from(arguments);
    let newArr = [];
    //console.log(args);
    let temp = args.reduce((pre,curr,index)=>{
        let a = pre.filter(item=>{
            return !curr.includes(item);
        });
        let b = curr.filter(item=>{
            return !pre.includes(item);
        });
        return a.concat(b);    
    });
    let c = temp.filter((item,index,array)=>{
        return array.indexOf(item) == index;
    });
    return c;
  }
  
sym([1, 2, 3], [5, 2, 1, 4]); // [3, 4, 5]
ym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// [1, 4, 5]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);// [ 7, 4, 6, 2, 5, 9, 8, 1 ]