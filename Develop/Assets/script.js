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
                
                // Saving / local storage button create
        var submitButton = $("<button> ")
            .addClass("col-1 submitButton");
            var saveImage = $('<i class="bi bi-save"></i>')
            submitButton.append(saveImage);

        hourlyRow.append(timeBox, contents, submitButton);

    console.log(id);

    }
}

cardCreate();
