// button click action listeners with ajax calls
$(function(){
$(".add-burger").on("submit", function(event)
{
    event.preventDefault();
    var user_burger = 
    {
        name: $("#text").val().trim(),
        eaten: false
    };

    $.ajax("/api/burgers", 
    {
        type: "POST",
        data: user_burger
    }).then(function()
    {
        location.reload();
    });
});

$(".devour").on("click", function(event)
{
    var id = $(this).attr("id");

    var burger_update = 
    {
        col: "devoured",
        value: true,
        id: "id"
    };


    $.ajax("/api/burgers" + id,
    {
        type: "PUT",
        data: burger_update
    }).then(function()
    {
        location.reload();
    });
    
})
});
