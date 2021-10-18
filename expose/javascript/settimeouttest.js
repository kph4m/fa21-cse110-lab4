function printNums () {
  // Prints 1 immediately
  console.log(1)

  // Prints 2 after 1 second
  setTimeout(function () {
    console.log(2)
  }, 1000)

  // Prints 3 immediately
  setTimeout(function () {
    console.log(3)
  }, 0)

  // Prints 4 immediately
  console.log(4)
}

printNums()
