(function () {
  $("#random-btn").click ( function (){
    var min = Number ($("#input-number").attr("min"));
    var max = Number ($("#input-number").attr("max"));
    var count = max - min + 1;
    var randomNumber = Math.random ();
    var number = Math.floor (randomNumber * count) + min;
    $("#input-number").val(number);
  });

  $("#fizzbuzz-btn").click( function () {
    var number = $("#input-number").val();
    countTo (number);
  });

  function countTo (number) {
    var bIsTrColosed = false;
    var htmlStr = "";
    for (var n=1; n<=number; n++) {
      // Open a record
      if (n % 10 === 1) {
        htmlStr += "<tr>";
        bIsTrColosed = false;
      }

      // Display a number
      var fizzBuzz = getFizzBuzz (n);
      htmlStr += "<td class=" + fizzBuzz.className + ">" + fizzBuzz.display + "</td>"

      // Close a record
      if ( n % 10 === 0) {
        htmlStr += "</tr>";
        bIsTrColosed = true;
      }
    }

    // CLose a record if it is not.
    if (!bIsTrColosed) {
      htmlStr += "</tr>";
    }

    // display the data to the table.
    $("#output-table").html (htmlStr);
  }

  function getFizzBuzz (number) {
    var bIsFizz = ((number % 3) === 0);
    var bIsBuzz = ((number % 5) === 0);
    if (bIsFizz && bIsBuzz) {
      return { display: "FizzBuzz", className: "fizzbuzz-number" };
    } else if (bIsFizz) {
      return { display: "Fizz", className: "fizz-number"};
    } else if (bIsBuzz){
      return { display: "Buzz", className: "buzz-number"};
    } else {
      // number.toString();
      return { display: number, className: "regular-number"};
    }
  }
})();
