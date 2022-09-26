// we are working with date.
// when we test if we want some other date to be as output of this function
// we need to go with mocking with sinon js
// refer greeter-test-sinon.js
exports.greet = function (name) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var now = new Date(); // today's date
  var formattedDate = now.toLocaleDateString("en-US", options);
  return `Hello, ${name}! Today is ${formattedDate}`;
}