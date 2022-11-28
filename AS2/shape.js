window.onload = function() {
    document.getElementById("option2").style.display = "none";
}

function displayInput() {
    var opSelected = document.getElementById("inputOption").value;
    if (opSelected == "option1") {
        document.getElementById("option1").style.display = "block";
        document.getElementById("option2").style.display = "none";
    } else {
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "block";
    }
}

function checkInput (input1, input2, input3) {
    return(Math.sign(input1) != 1 || Math.sign(input2) != 1  || Math.sign(input3) != 1);
}

function displayOutput (val) {
    var variable = ["r1", "r2", "h", "s", "tsa", "vol"];
        unit = ["m", "m", "m", "m", "m<sup>2</sup>", "m<sup>3</sup>"];
    for (var i=0; i<val.length; i++) {
        document.getElementById(variable[i]).innerHTML = "<p>" + val[i].toFixed(2).toString() + unit[i] + "</p>";
    }
}

function calcShape() {
    var opSelected = document.getElementById("inputOption").value,
        r1 = document.getElementById("radius1").value, 
        r2 = document.getElementById("radius2").value,
        tsa,
        v;
    const pi = 3.1415926535898;

    if (opSelected == "option1") {
        var h = document.getElementById("height").value, 
        s;

        if(checkInput(r1,r2,h)) {
            // if any of inputs are NOT a number
            alert("That is not a valid input! Please input positive numbers.");
        } else {
            // all inputs are number
            r1 = Number(r1);
            r2 = Number(r2);
            h = Number(h);
    
            //Slant height of a conical frustum
            s = ((r1-r2)**2 + h**2)**(1/2);
            //Total surface area (TSA)
            tsa = pi*((r1)**2 + (r2)**2 + (r1+r2)*s);
            //Volume
            v = (1/3)*pi*h*(r1**2 + r2**2 + (r1*r2));
            
            displayOutput([r1,r2,h,s,tsa,v]);
        }
    } else {
        var h, 
            s = document.getElementById("slant").value;
        
        if(checkInput(r1,r2,s)) { 
            // if any of inputs are NOT a number
            alert("That is not a valid input! Please input positive numbers.");
        } else {
            // all inputs are number
            r1 = Number(r1);
            r2 = Number(r2);
            s = Number(s);

            h = (s**2 - (r1-r2)**2)**(1/2);
            tsa = pi*((r1)**2 + (r2)**2 + (r1+r2)*s);
            v = (1/3)*pi*h*(r1**2 + r2**2 + (r1*r2));

            displayOutput([r1,r2,h,s,tsa,v]);
        }
    }
}

