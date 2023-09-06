// Triangle Perimeter Assignment Start Code
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    // Input
    let xA = +document.getElementById("xA-in").value;
    let yA = +document.getElementById("yA-in").value;
    let xB = +document.getElementById("xB-in").value;
    let yB = +document.getElementById("yB-in").value;
    let xC = +document.getElementById("xC-in").value;
    let yC = +document.getElementById("yC-in").value;

    // Process
    let AB = dist(xA, yA, xB, yB);
    let AC = dist(xA, yA, xC, yC);
    let BC = dist(xB, yB, xC, yC);

    // Output
    document.getElementById("ab-out").innerHTML = AB
    document.getElementById("ac-out").innerHTML = AC
    document.getElementById("bc-out").innerHTML = BC
    document.getElementById("abc-out").innerHTML = AB + AC + BC
}

function dist(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}