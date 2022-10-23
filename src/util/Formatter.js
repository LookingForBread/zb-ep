
function DateFormatter(){
    function toDouble(number){
        return number < 10 ? ('0'+number) : number
    }
    /**
     * 
     * @param {String|Date}} target -待格式化时间，例：2021/2/13 12:22:58
     * @param {String} formateType -格式化类型，例：yyyy-mm-dd hh:mm:ss
     * @returns 格式化后的时间
     */
    this.formate = function(target,formateType){
        let date = new Date(target);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let time;
        switch(formateType){
            case 'yyyy-m':
                time = `${year}-${month}`
                break;
            case 'yyyy-mm':
                time = `${year}-${toDouble(month)}`
                break;
            case 'yyyy-m-d':
                time = `${year}-${month}-${day}`
                break;
            case 'date':
                time = `${year}-${toDouble(month)}-${toDouble(day)}`
                break;
            case 'yyyy-mm-dd':
                time = `${year}-${toDouble(month)}-${toDouble(day)}`
                break;
            case 'yyyy-m-d h:m':
                time = `${year}-${month}-${day} ${hour}:${minute}`
                break;
            case 'yyyy-mm-dd hh:mm':
                time = `${year}-${toDouble(month)}-${toDouble(day)} ${toDouble(hour)}:${toDouble(minute)}`
                break;
            case 'yyyy-m-d h:m:s':
                time = `${year}-${month}-${day} ${hour}:${minute}:${second}`
                break;
            case 'yyyy-mm-dd hh:mm:ss':
                time = `${year}-${toDouble(month)}-${toDouble(day)} ${toDouble(hour)}:${toDouble(minute)}:${toDouble(second)}`
                break;
            case 'datetime':
                time = `${year}-${toDouble(month)}-${toDouble(day)} ${toDouble(hour)}:${toDouble(minute)}:${toDouble(second)}`
                break;
            case 'yyyy/m':
                time = `${year}/${month}`
                break;
            case 'yyyy/mm':
                time = `${year}/${toDouble(month)}`
                break;
            case 'yyyy/m/d':
                time = `${year}/${month}/${day}`
                break;
            case 'yyyy/mm/dd':
                time = `${year}/${toDouble(month)}/${toDouble(day)}`
                break;
            case 'yyyy/m/d h:m':
                time = `${year}/${month}/${day} ${hour}:${minute}`
                break;
            case 'yyyy/mm/dd hh:mm':
                time = `${year}/${toDouble(month)}/${toDouble(day)} ${toDouble(hour)}:${toDouble(minute)}`
                break;
            case 'yyyy/m/d h:m:s':
                time = `${year}/${month}/${day} ${hour}:${minute}:${second}`
                break;
            case 'yyyy/mm/dd hh:mm:ss':
                time = `${year}/${toDouble(month)}/${toDouble(day)} ${toDouble(hour)}:${toDouble(minute)}:${toDouble(second)}`
                break;
            default :
                time = `${year}-${month}-${day} ${hour}:${minute}:${second}`
        }
        return time;
    }
    /**
     * @description 获取当前时间
     * @param {String} formateType -时间格式，例： yyyy-mm-dd hh:mm:ss
     * @returns 格式化后的时间
     */
    this.now = function(formateType){
        return this.formate(new Date(),formateType)
    }
    /**
     * @description 获取月份的天数
     * @param {String|Number} year -年份
     * @param {String|Number} month -月份
     * @returns 天数
     */
    this.getMonthLength = function(year,month){
        var days = new Date(year,month,0);
        return days.getDate();
    }
    /**
     * @description 时间增加/减少天数
     * @param {String|Date} date -待计算时间
     * @param {Number} type -增减类型 1.年份 2.月份 3.天
     * @param {Number} number -需要增减的数量，若减少，为负数
     * @param {String} returnType -返回的时间格式
     * @returns 计算后时间
     */
    this.calculateDate = function(date, type , number ,returnType){
        if(!returnType) returnType = date.indexOf(' ') > -1?'yyyy-mm-dd hh:mm:ss':'yyyy-mm-dd';
        date = new Date(date);
        switch (type){
            case 1:
                date = date.setFullYear(date.getFullYear() + number)
                break;
            case 2:
                date = date.setMonth(date.getMonth() + number)
                break;
            case 3:
                date = date.setDate(date.getDate() + number)
                break;
            default: 
            date = date.setDate(date.getDate() + number)
        }
        
        return this.formate(date,returnType)
    }
}

// let now = time.now('yyyy-mm-dd hh:mm:ss');
// let formate = time.formate('2021-2-13 12:22:58','yyyy/mm/dd hh:mm:ss');
// console.log(time.calculateDate('2021-2-13 12:22:58',1,-1))
export default DateFormatter;
// module.exports = new dateFormatter();



