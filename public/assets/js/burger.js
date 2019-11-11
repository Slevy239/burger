// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    // console.log("clicked")

    var newBurger = {
      name: $("#name").val(),
      eaten: "0"
    };
    console.log(newBurger);

    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload()
      }
    )
  })
});

//   $(".change-devour").on("click", function (event) {
//     var id = $(this).data("id");
//     var newSleep = $(this).data("newsleep");

//     var newDevourState = {
//       devour: newDevour
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newDevourState
//     }).then(
//       function () {
//         console.log("changed status to", newDevour);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $("#submit").on("click", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newBurger = {
//       name: $("#ca").val().trim(),
//       devour: $("input[name='devoured']:checked").val().trim()
//     };
//     console.log(newBurger);

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function () {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-burger").on("click", function (event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE"
//     }).then(
//       function () {
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
