const display = target => time => target(time)


const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm)

const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            '0' + clockTime[key] :
            clockTime[key]
    })


const serializeClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours
    })

const appedAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "PM" : "AM"
    })

const onSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message)

const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => {
                return f(composed)
            },
            arg
        )


// 获取时钟时间作为参数，并通过本地时间规范将时钟时间转换为本地时间
const convertToCivilianTime = clockTime =>
    compose(
        appedAMPM,
        civilianHours
    )(clockTime);


// 获取本地时间，进行补0
const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime);

// 每秒调用一次时钟程序。
const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:ss:ss tt"),
            display(log)
        ),
        onSecond()
    )
startTicking()

