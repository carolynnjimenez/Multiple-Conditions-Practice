$(".class-name").click(function() {
    let year = $("[name=Grade]:checked").val();

    if (year === "2020") {
        alert("Senior");
    }
    // Write the else-if statements to convert years to class name
    else if (year === "2021") {
        alert("Junior");
    } else if (year === "2022") {
        alert("Sophomore");
    } else if (year === "2023") {
        alert("Freshman");
    }
});

// 
$(".grade-average").click(function() {

    let grade = Number($(".GPA").val());

    if (grade >= 3.5) {
        alert("A");
    } else if (grade >= 3) {
        alert("B");
    } else if (grade >= 2.5) {
        alert("C");
    } else if (grade >= 2.00) {
        alert("D");
    } else {
        alert("F");
    }

});