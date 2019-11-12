$(function() {
$(".create-form").on("submit", function(event) {
  event.preventDefault();
  
  var newBurger = {
    name: $("#name").val(),
    eaten: 0

  };
  $.ajax("/api/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("added new burger");
      location.reload();
    }
  )
})









})