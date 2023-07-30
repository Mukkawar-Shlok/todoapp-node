
$('#gen_task').click(function () {
    var categoryId = $('#category').val();
    var category = $('#category option:selected').text().trim();
    var description = $('#description').val();
    var date = $('#date').val();

    if (categoryId == "") {
        alert("Category is not selected")
    } else if (description == "") {
        alert("Description is empty")
    } else if (date == "") {
        alert("Please choose date")
    } else {

        var postData = {
            categoryId: categoryId,
            category: category,
            name: description,
            date: date
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/schedule', // API endpoint
            data: postData,
            success: function (response) {
                // Handle successful response 
                // console.log(response);
                $('#description').val(" ");
                $('#date').val(" ");
                showTask();
            },
            error: function (error) {
                // Handle error response 
                console.error(error);
            }
        });


    }

});
showTask();

function showTask() {
    // Make an AJAX request using the Fetch API
    fetch('/tasks')
        .then((response) => {
            // console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            data = data.data;
            $('#task_item').empty();
            var html = '';
            for (let i = 0; i < data.length; i++) {
                html += '<tr>' + '<td>' + (parseInt(i) + 1) + '</td>' + '<td>' + data[i].description + '</td>' + '<td>' + data[i].date + '</td>' + '<td><a type="button" href="#" class="btn btn-success">' + data[i].Category + '</a>' + '</td>' + '<td><button type="button" data="' + data[i]._id + '" class="btn btn-danger item-delete">Delete</button>' + '</td>' + '</tr>';
            }
            $('#task_item').html(html);
        })
        .catch((error) => {
            // Handle any errors that occurred during the AJAX request or data processing
            console.error('Error:', error.message);
        });
}



$('#task_item').on('click', '.item-delete', function () {
    var taskId = $(this).attr('data');
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/schedule/delete', // API endpoint
        data: {
            id: taskId
        },
        success: function (response) {
            // Handle successful response 
            // console.log(response);

            showTask();
        },
        error: function (error) {
            // Handle error response 
            console.error(error);
        }
    });
});








