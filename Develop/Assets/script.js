// var moment = require ('moment')
// moment().format(); 

function go(){
    var currentTime = 12;
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

        var submitButton = $("<button> ")
            .addClass("col-1 submitButton");
            var saveImage = $('<i class="bi bi-save-fill"></i>')
            submitButton.append(saveImage);

        hourlyRow.append(timeBox, contents, submitButton);
    console.log(id);

    }
}
// document.getElementById('currentDay').textContent = moment().format('MMM Do YYYY, h:mm:ss a');
// console.log(moment().format('MMM Do YYYY, h:mm:ss a'));
go();
// console.log(go);
