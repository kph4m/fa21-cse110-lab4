// Date Object
let d = new Date()

// Time
let time = d.toLocaleTimeString()

// Prints the time every second
setInterval(function () {
  console.log(time)
}, 1000)
