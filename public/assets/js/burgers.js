$(document).ready(function () {

  $(".submit").on("submit", function (event) {
    console.log("clicked")
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
    event.preventDefault();

    var id = $(this).data("id");
    var newDevoured = $(this).data("neweaten");

    var newState = {
      devoured: 1
    };
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("state changed to " + newDevoured);
        location.reload()
      }
    )
  })
});
