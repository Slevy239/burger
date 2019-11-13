$(document).ready(function () {
  $(".create-form").on("submit", function (event) {
        event.preventDefault();

    var newBurger ={
     name: $("#name").val(),
     eaten: 0
    }
    var thisBurger = $(this).children("#name").val();
    console.log(newBurger);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + thisBurger
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});

