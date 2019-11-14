$(document).ready(function () {


//Submit event for input data
  $(".submit").on("submit", function (event) {
    console.log("clicked")
    event.preventDefault();
//jQuery adds subsequent id with .children();
    var newId = $(this).children(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/burgers/" + newId
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
   
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: 1
    }).then(
      function () {
        location.reload()
      }
    )
  })
});
