function getValue(eleID) {
    let numVal = parseFloat(document.getElementById(eleID).value);
    console.log(eleID + ": " + numVal);
    return numVal;
}

function clearContent(passedID) {
    passedID.innerHTML = "";
}

function populateSchedule() {
    console.log("------ populateSchedule ------");
    let pillTotalCount = getValue("pill-count");
    let pillDoseCount = getValue("dose-amount");

    // return if invalid input
    if (pillTotalCount < 0 || pillDoseCount <= 0) { //Belina : made change here as well
        alert("That is an invalid input. Enter positive numbers.");
        return;
    } else {

    // !!! WANT TO CONTINUE FROM HERE ONLY IF pillDoesCount is positive number 
    // Belina: Only show the schedule when inputs are valid
    
        let freqUnits = pillTotalCount / pillDoseCount;
        console.log("pillTotalCount: " + pillTotalCount + " pillDoesCount: " + pillDoseCount + " freqUnits: " + freqUnits);
        
        console.log("test");
        let date = new Date();
        let idSchedule = document.getElementById("schedule");
        let idDosefreq = document.getElementById("dose-freq");
        
        // clear the content of div#schedule
        clearContent(idSchedule);

        // alert if freqUnits is not a multiple of pillTotalCount
        if (freqUnits % 1 != 0) {
            alert("Number of pills per dose is not a multiple of pill count");
        } else {
            // proceed only with valid input Belina: also put the rest inside else here
            console.log("valid input");

            if (idDosefreq.value == "daily") {
                for (let i=0; i<freqUnits; i++) {
                    date.setDate(date.getDate() + 1);
                    let pillSchedule = document.createElement("p");
                    pillSchedule.innerHTML = "Take " + pillDoseCount + " pills on " + date.toDateString();
                    idSchedule.appendChild(pillSchedule);
                }

            } else if (idDosefreq.value == "twiceAday") {
                for (let i=0; i<freqUnits/2; i++) {
                    date.setDate(date.getDate() + 1);
                    let pillSchedule = document.createElement("p");
                    pillSchedule.innerHTML = "Take " + pillDoseCount * 2 + " pills on " + date.toDateString();
                    idSchedule.appendChild(pillSchedule);
                }

            } else if (idDosefreq.value == "everytwodays") {
                date.setDate(date.getDate() - 1); // for the first schedule to start on next day
                for (let i=0; i<freqUnits; i++) {
                    date.setDate(date.getDate() + 2);
                    let pillSchedule = document.createElement("p");
                    pillSchedule.innerHTML = "Take " + pillDoseCount + " pills on " + date.toDateString();
                    idSchedule.appendChild(pillSchedule);
                }

            } else {
                date.setDate(date.getDate() - 6);
                for (let i=0; i<freqUnits; i++) {
                    date.setDate(date.getDate() + 7);
                    let pillSchedule = document.createElement("p");
                    pillSchedule.innerHTML = "Take " + pillDoseCount + " pills on " + date.toDateString();
                    idSchedule.appendChild(pillSchedule);
                }
            }

        }
    }
}

