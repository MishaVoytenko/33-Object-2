const time = {
  years: new Date().getFullYear(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),

  addSeconds(seconds) {
    this.seconds += seconds;
    this.normalizeTime();
  },

  addMinutes(minutes) {
    this.minutes += minutes;
    this.normalizeTime();
  },

  addHours(hours) {
    this.hours += hours;
    this.normalizeTime();
  },

  normalizeTime() {
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }

    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  }
};

const addTime = (time, deltaSeconds, deltaMinutes, deltaHours) => {
  time.seconds += deltaSeconds;
  time.minutes += deltaMinutes;
  time.hours += deltaHours;
  time.normalizeTime();
  console.log(time)
};

console.log(addTime(time, 0, 10, 0))
