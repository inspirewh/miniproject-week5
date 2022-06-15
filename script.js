
function startClock(){
    const clockEl = $("#clock");
    //start the clock
    setInterval(function(){

        const now = moment().format();
        clockEl.text(now)
    
    }, 1000);
}

(function(){
    startClock();
})

    //    $('#clock').html
    //}, 1000);

    //if i click on the add project button

    //open the add project dialog

    //when I click on the overlay, should cloce the dialog

    //when I click on close button should close the dialog

    //when I click the submit button - submit the dialog

    //get all the user input 

    //create a new row in the table 

    //close the dialog
