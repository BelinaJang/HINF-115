// hospital_room_dash.js

let rooms_arr = new Array(5);

for (let i = 0; i < rooms_arr.length; i++) {
    rooms_arr[i] = new Array(5).fill(false);
}

console.log(rooms_arr);

let cells = document.querySelectorAll("td");

for (let i=0; i<cells.length; i++) {
    cells[i].addEventListener("click", function () {
        let id = cells[i].id;
        updateRoom(id);
    });
}

function updateRoom(idOfTheRoom) {
    let theRoom = document.querySelector("#"+idOfTheRoom)
    if(theRoom.classList.contains("unusable")){
        // is unusable (under repair or under construction)
    }
    else {
        if(theRoom.classList.contains("occupied")){
            // is occupied
            theRoom.classList.remove("occupied");
            theRoom.classList.add("cleanup");
        } else {
            // is not occupied
            if (theRoom.classList.contains("cleanup")){
                // cleaned up
                theRoom.classList.remove("cleanup");
            } else {
                theRoom.classList.add("occupied");
            }
        }
    }
}

