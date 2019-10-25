// 记录每秒时钟状态变化
// setInterval(logClockTime, 1000);

function logClockTime() {
    // 获取本地时间格式的时钟时间字符串
    let time = geClockTime();

    // 清空控制台并记录时间

    console.clear()
    console.log(time)
}

function geClockTime() {
    // 获取当前时间
    let date = new Date();

    // 序列化时钟时间

    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM'
    }

    // 转换成当地时间
    if (time.hours == 12) {
        time.ampm = 'PM'
    } else if (time.hours > 12) {
        time.ampm = "PM"
        time.hours -= 12
    }

    // 为小时位置上预制0，以便构造双位数字
    if (time.hours < 10) {
        time.hours = '0' + time.hours
    }

    // 为分钟位置上预置0，
    if (time.minutes < 10) {
        time.minutes = '0' + time.minutes
    }


    // 为秒钟位置上预置0，
    if (time.seconds < 10) {
        time.seconds = '0' + time.seconds
    }

    // 将时钟时间格式化为一个字符串'hh:mm:ss tt'
    return {
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds,
        timeOfDay: time.ampm
    }
}


export { geClockTime }
