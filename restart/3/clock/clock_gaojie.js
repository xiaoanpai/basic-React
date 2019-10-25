// const display = target => time => target(time)
const display = function (time) {
    console.log(time)
}


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

module.export = {
    display,
    formatClock,
    prependZero
}