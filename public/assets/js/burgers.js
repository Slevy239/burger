$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#name").val(),
      devoured: 0
    }

    console.log(newBurger);
    // var burger_id = $(this).children(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/burgers/" + newBurger
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});
