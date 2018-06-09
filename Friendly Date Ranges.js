/*把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。

易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).

记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，
则结束日期就不用写年份了；在这种情况下，如果月份开始和结束日期如果在同一个月，则结束日期月份也不用写了。

另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。

例如:

包含当前年份和相同月份的时候，makeFriendlyDates(["2017-01-02", "2017-01-05"]) 
应该返回 ["January 2nd","5th"]

不包含当前年份，makeFriendlyDates(["2003-08-15", "2009-09-21"]) 
应该返回 ["August 15th, 2003", "September 21st, 2009"]。

请考虑清楚所有可能出现的情况，包括传入的日期区间是否合理。对于不合理的日期区间，
直接返回 undefined 即可 */

function makeFriendlyDates(arr) {
    let [oldDay, newDay] = arr;
    let beginArr = oldDay.split('-');
    let finalArr = newDay.split('-');
    let month = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
    let beginMonth = month[parseInt(beginArr[1],10)];
    let beginDay = Day(beginArr[2]);
    let finalMonth = month[parseInt(finalArr[1],10)];
    let finalDay = Day(finalArr[2]);
    let newArr =[];
    let beginStr="";
    let finalStr="";

    if(compare(beginArr[0],finalArr[0])){
        console.log('begin的年大于final的年');
        return;
    }
    if(isOneYear(beginArr, finalArr)){ // 在一年之内

        if(beginArr[0]==finalArr[0]){ // 年份相同
            if(beginArr[1]==finalArr[1]){ // 同一月份
                if(beginArr[2]==finalArr[2]){ // 同一天
                    beginStr = `${beginMonth} ${beginDay}, ${beginArr[0]}`;
                    newArr.push(beginStr);
                }else{
                    beginStr = `${beginMonth} ${beginDay}`;
                    newArr.push(beginStr);
                    newArr.push(finalDay);
                } 
            }else{
                beginStr = `${beginMonth} ${beginDay}`;
                finalStr = `${finalMonth} ${finalDay}`;
                newArr.push(beginStr);
                newArr.push(finalStr);
            }
            
        }else{  // 年份不同
            if(beginArr[1]==finalArr[1]){ // 月份相同
                if(beginArr[2]==finalArr[2]){
                    beginStr = `${beginMonth} ${beginDay}, ${beginArr[0]}`;
                    finalStr = `${finalMonth} ${finalDay}, ${finalArr[0]}`;
                    newArr.push(beginStr);
                    newArr.push(finalStr);
                }else{
                    beginStr = `${beginMonth} ${beginDay}, ${beginArr[0]}`;
                    finalStr = `${finalMonth}, ${finalDay}`;
                    newArr.push(beginStr);
                    newArr.push(finalStr);
                }
                
            }else{// 月份不同
                if(finalArr[0]==2018){
                    beginStr = `${beginMonth} ${beginDay}`;
                    finalStr = `${finalMonth} ${finalDay}`;
                    newArr.push(beginStr);
                    newArr.push(finalStr);
                }else{
                    beginStr = `${beginMonth} ${beginDay}, ${beginArr[0]}`;
                    finalStr = `${finalMonth} ${finalDay}`;
                    newArr.push(beginStr);
                    newArr.push(finalStr);
                }
                
            } 
            
        }
    }else{
        beginStr = `${beginMonth} ${beginDay}, ${beginArr[0]}`;
        finalStr = `${finalMonth} ${finalDay}, ${finalArr[0]}`;
        newArr.push(beginStr);
        newArr.push(finalStr);
    }
    console.log(newArr);
    return newArr;

    // 比较函数。如果a>b 则返回1；a<=b 则返回0
    function compare(a, b){
        a = Number(a);
        b = Number(b);
        if(a>b){
            return 1;
        }else{
            return 0;
        }
    }
    // 选择天数的格式
    function Day(val){
        val = Number(val);
        switch(val){
            case 1:
                return '1st';
            case 21:
                return '21st';
            case 31:
                return '31st';
            case 2:
                return '2nd';
            case 22:
                return '22nd';
            case 3:
                return '3rd';
            case 23: 
                return '23rd';
            default:
                return val+'th';
        }
    }
    // 判断是否在同一年
    function isOneYear(val1, val2){
        if(val2[0] - val1[0]>1){
            return false;
        }else{
            if(val1[0] == val2[0]){ // 同一年
                return true;
            }else{
                if(val2[1] > val1[1]){ // 后一个月份大于前一个的月份 则不在同一年
                    return false;
                }else if(val2[1] < val1){ // 后一个月份小于前一个月份
                    return true;
                }else{  // 月份相等
                    if(val2[2] < val1[1]){ // 后一个天数小于前一个天数 则在一年之内
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        }
    }

  }
  
  makeFriendlyDates(['2017-01-02', '2017-01-05']);//[ 'January 2nd', '5th' ]
  makeFriendlyDates(["2001-12-20", "2001-12-20"]);//[ 'December 20th, 2001' ]
  makeFriendlyDates(["2017-02-01", "2017-03-03"]);//[ 'February 1st', 'March 3rd' ]
  makeFriendlyDates(["2010-10-23", "2011-10-22"]);//[ 'October 23rd, 2010', 'October, 22nd' ]
  makeFriendlyDates(["2017-07-12", "2018-06-13"]);//[ 'July 12th', 'June 13th' ]
  makeFriendlyDates(["2008-10-31", "2009-10-31"]);//[ 'October 31st, 2008', 'October 31st, 2009' ]
  makeFriendlyDates(["2003-08-15", "2009-09-21"]);//[ 'August 15th, 2003', 'September 21st, 2009' ]
  makeFriendlyDates(["2016-05-11", "2017-04-04"]);//[ 'May 11th, 2016', 'April 4th' ]
  makeFriendlyDates(["2017-07-12", "2018-06-13"]); // [ 'July 12th', 'June 13th' ]
  makeFriendlyDates(["2010-10-23", "2011-10-22"]); // [ 'October 23rd, 2010', 'October, 22nd' ]
  
