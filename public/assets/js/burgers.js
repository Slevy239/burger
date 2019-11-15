$(document).ready(function () {
  //Submit event for input data
  $(".submit").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#add").val(),
      devoured: 0
    }

    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function (data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });

  //Click event for click event.
  $("#eat").on("click", function (event) {
    event.preventDefault();
    //jQuery pulls clicked id and column value
    var id = $(this).data("id");
    var devour = 1

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devour
    }).then(
      function () {
        console.log("devoured")
        location.reload()
      }
    )
  })
});
