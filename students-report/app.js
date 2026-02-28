
function getSubjects() {
    let sub1 = Number(document.getElementById("sub1").value) || 0;
    let sub2 = Number(document.getElementById("sub2").value) || 0;
    let sub3 = Number(document.getElementById("sub3").value) || 0;
    let sub4 = Number(document.getElementById("sub4").value) || 0;
    let sub5 = Number(document.getElementById("sub5").value) || 0;

    return [sub1, sub2, sub3, sub4, sub5];
}

function calculateResult() {
    let marks = getSubjects();

    let totalMarks = marks.reduce((total, mark) => total + mark, 0);

    let percentage = (totalMarks / 500) * 100;

    let grade;
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    // Update the HTML with results
    document.getElementById("total").innerText = totalMarks;
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("grade").innerText = grade;
}