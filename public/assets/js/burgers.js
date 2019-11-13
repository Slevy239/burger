$(function () {


  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#name").val(),
      eaten: 0
    };

    console.log(newBurger);
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added new burger");

        // $("#name").val("")
        location.reload();
      }
    )
  });

  $(".eat").on("click", function (event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten") === false;

    var newState = {
      eaten: newEaten
    };
    console.log("id: " + id);
    console.log("eaten: " + newState.eaten);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("changed state to ", newEaten);
        location.reload();
      }
    )
  })
})