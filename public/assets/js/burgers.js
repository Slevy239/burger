$(document).ready(function () {

  $(".submit").on("submit", function (event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function (data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });

  $("#eat").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("neweaten") === false;

    var newState = {
      devoured: newDevoured
    };
    $.ajax("/burgers/create/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("state changed to " + newState.devoured);
        location.reload()
      }
    )
  })
});
