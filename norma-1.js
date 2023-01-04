function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

let date = new Date()
alert(formatDate(d))



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
