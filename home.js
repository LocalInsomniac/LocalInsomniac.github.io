var catalogueProjects = document.getElementById("catalogue-projects");

catalogueProjects.onmouseover = function () {
    document.getElementById("catalogue-description").innerHTML = "Projects";
}

catalogueProjects.onmouseout = function () {
    document.getElementById("catalogue-description").innerHTML = "Click on an icon!";
}

var catalogueSchwungus = document.getElementById("catalogue-schwungus");

catalogueSchwungus.onmouseover = function () {
    document.getElementById("catalogue-description").innerHTML = "Schwungus Software";
}

catalogueSchwungus.onmouseout = function () {
    document.getElementById("catalogue-description").innerHTML = "Click on an icon!";
}