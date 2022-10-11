// Jumbotron Function (sets time in jumbotron)

setInterval(function () {
    document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);




// function creating the cards for the schedule
function cardCreate(){
    var currentTime = moment().hours();
    for (var time =9; time<19; time++){
        var id = time
        var hourlyRow = $("<form>")
            .addClass("row");
        
        $(".container").append(hourlyRow);

        var timeBox = $("<div>")
            .addClass("col-1 hour")
            timeBox.text(time);
            var contents = $('<textarea>')
                .addClass('full col-10')
                if (time > currentTime) contents.addClass('future')
                else if(time < currentTime) contents.addClass('past')
                else contents.addClass('present');
                
                // Saving / local storage button create
        var submitButton = $("<button> ")
        .addClass("col-1 submitButton");
        submitButton.id= 'saveBtn';
            var saveImage = $('<i class="bi bi-save"></i>')
            submitButton.append(saveImage);

        hourlyRow.append(timeBox, contents, submitButton);
        // var input = document.getElementById('saveBtn');
        // localStorage.setItem("contents", input.val());

    console.log(id);

    }
}

cardCreate();
