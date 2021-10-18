// Create Object
let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}

/* Print value of property if:
 * Property starts with letter r
 *             OR
 * Values of that property is an odd number
 */
for (let property in statistics) {
  if (`${property}`[0] === 'r' || statistics[property] % 2 !== 0) {
    console.log(property)
  }
}

// Expected output: redCars, blueCars, raceCars, rareCars
