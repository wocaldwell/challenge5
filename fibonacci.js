function* fibonacci() {
  var fibNum1 = 0;
  var fibNum2 = 1;
  while (true) {
    var current = fibNum1;
    fibNum1 = fibNum2;
    fibNum2 = current + fibNum1;
    var reset = yield current;
    if (reset){
        fibNum1 = 0;
        fibNum2 = 1;
    }
  }
}

var sequence = fibonacci();
for (var i = 0; i < 1000; i++) {         // Log the first 1000 numbers
  console.log(sequence.next().value);
}
 console.log(sequence.next(true).value); // Reset the counter
for (var i = 0; i < 100; i++) {
  console.log(sequence.next().value);    // Log the first 100 numbers
}