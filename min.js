const myCar = {
  manufacturer: 'ford',
  model: 'focus',
  year: 2020,
  speed: 100,
  tank: 60,
  fuel: 8,
  drivers: ['Misha', 'Vova']
}

// console.log(myCar)
// myCar.drivers = 'Vova'
// console.log(myCar)

// const isDriver = 'Kolya'
// let found = false

// myCar.drivers[2] = isDriver

// for (let i = 0; i < myCar.drivers.length; i++) {
//   const driver = myCar.drivers[i];
//   if (isDriver == driver) {
//     found = true
//     break
//   }
// }
// console.log(Object.values(myCar))

// console.log({ found })

const distance = 1000

let time = distance / myCar.speed
time += Math.floor(time / 4)
console.log(time)