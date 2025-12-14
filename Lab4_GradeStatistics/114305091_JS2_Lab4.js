console.log("JS loaded");

let submitBtn = document.getElementById("submitBtn");
let tableBody = document.getElementById("tableBody");

let mathInputEl = document.getElementById("math");
let engInputEl = document.getElementById("english");


submitBtn.addEventListener("click", function () {

    let mathValue = mathInputEl.value; 
    let engValue = engInputEl.value;  

    if (mathValue === "" || engValue === "") {
        alert("Please enter both grades");
        return;
    }

    let math = Number(mathValue);
    let english = Number(engValue);
    let avg = ((math + english) / 2).toFixed(2);

    let row = document.createElement("tr");
    let rowCount = tableBody.rows.length + 1;

    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;

    tableBody.appendChild(row);

    updateColumnAverages();

    mathInputEl.value = "";
    engInputEl.value = "";
});

function updateColumnAverages() {
    let rows = tableBody.getElementsByTagName("tr");
    let mathSum = 0;
    let engSum = 0;

    for (let i = 0; i < rows.length; i++) {
        mathSum += Number(rows[i].children[1].textContent);
        engSum += Number(rows[i].children[2].textContent);
    }

    let count = rows.length;

    document.getElementById("mathAvg").textContent = (mathSum / count).toFixed(2);
    document.getElementById("engAvg").textContent = (engSum / count).toFixed(2);
    document.getElementById("overallAvg").textContent =
        ((mathSum + engSum) / (count * 2)).toFixed(2);
}