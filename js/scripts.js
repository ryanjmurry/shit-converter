var tsp_tbsp = function(number1) {
  return number1 / 3;
};


$(document).ready(function() {
  $("form#tsp_tbsp").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#tsp").val());
    var result = tsp_tbsp(number1);
    $("#output").text(result);

    $("#results").show();
  });
});
