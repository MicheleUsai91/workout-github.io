function calcoloMassimale() {
    let kg = document.getElementById("pesoMassimale").value;
    let reps = document.getElementById("repsMassimale").value;
    document.getElementById("resMassimale").innerHTML = Math.round(kg / (1.0278 - (0.0278 * reps)));
}

function calcoloReps() {
    let max = document.getElementById("pesoReps").value;
    let reps = document.getElementById("repsReps").value;
    document.getElementById("resReps").innerHTML = Math.round(max * (1.0 - (reps / 40.0)));
}

function volume() {
    let kg = document.getElementById("pesoVol").value;
    let reps = document.getElementById("repsVol").value;
    document.getElementById("resVol").innerHTML = Math.round(kg * reps);
}

function weightConverter() {
    let weight = document.getElementById("pesoConv").value;
    let type = document.querySelector('input[name="kgToLbs"]:checked').value;
    let factor = type === "kg" ? 1.0 / 2.2046 : 2.2046;
    document.getElementById("resConv").innerHTML = Math.round(weight * factor);
}

function showTable(id) {
    const t = document.querySelectorAll("[id^='table-']");
    const h = document.querySelectorAll("[id^='h-']");
    for (var i=0; i<t.length; i++) {
        t[i].hidden = t[i].id.includes(id) ? !t[i].hidden : true;
        h[i].style = h[i].id.includes(id) ? "border-bottom: 2px solid black" : "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ids = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
    const day = new Date().getDay();
    const id = ids[day];
    showTable(id);
})