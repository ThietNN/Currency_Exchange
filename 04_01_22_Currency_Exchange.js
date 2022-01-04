function convert() {
    let z = document.getElementById("in").value;
    let x = document.getElementById("fromcurrency").value;
    let y = document.getElementById("tocurrency").value;
    var c;
    if (x == "1"&& y == "2") {
        c = z / 23000
    } else if (x == "2"&& y == "1") {
        c = z * 23000
    } else {
        c = z
    }
    document.getElementById("result").innerText = "Result: " + c;
}






