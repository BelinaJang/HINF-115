document.addEventListener("DOMContentLoaded", function() {
    var m = moment(),
        destination = document.querySelector("#moment_test"),
        p = document.createElement("p"),
        newContent = document.createTextNode(m.format());
    p.appendChild(newContent);
    document.querySelector("#moment_test").append(p);
});