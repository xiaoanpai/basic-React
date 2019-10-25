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
      ampm: (clockTime.hours >= 12) ? "PM": "AM"
  })

  module.export = {
    serializeClockTime,
    civilianHours,
    appedAMPM
  }