let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
let btn_3 = document.getElementById("btn_3");
let section_1 = document.getElementById("section_1");
let section_2 = document.getElementById("section_2");
let section_3 = document.getElementById("section_3");
let section_A = document.getElementById("section_A");
let section_B = document.getElementById("section_B");
let btn_dema = document.getElementById("btn_dema");
let Question_1 = document.getElementById("question_1");
let time_line = document.getElementById("time_line");

btn_1.addEventListener("click", function( ) {
    section_1.style.display = "none";
    section_2.style.display = "none";
    // section_3.style.display = "none";
    section_A.style.display = "block";
    section_B.style.display = "block";

})
btn_2.addEventListener("click", function( ) {
    section_1.style.display = "none";
    section_2.style.display = "none";
    // section_3.style.display = "none";
    section_A.style.display = "block";
    section_B.style.display = "block";

})
btn_dema.addEventListener("click", function(){
    section_B.style.display = "none";
    Question_1.style.display = "block";
    time_line.style.display= "block";

})
