//function for creating category unlke task location.reload is used instead of creating new function to reload category
$('#submit').click(function () {
    var category = $('#category').val();
    if (category == "") {
        alert('Please add category')
    } else {

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/category/', // API endpoint
            data: {
                name: category
            },
            success: function (response) {
                // Handle successful response 
                // console.log(response);
                $('#category').val(" ");
                location.reload()
            },
            error: function (error) {
                // Handle error response 
                console.error(error);
            }
        });
    }
});

