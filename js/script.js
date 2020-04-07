let IDs = {
    btn_1: document.getElementById("btn_1"),
    btn_2: document.getElementById("btn_2"),
    btn_3: document.getElementById("btn_3"),
    section_1: document.getElementById("section_1"),
    section_2: document.getElementById("section_2"),
    section_3: document.getElementById("section_3"),
    section_A: document.getElementById("section_A"),
    section_B: document.getElementById("section_B"),
    btn_dema: document.getElementById("btn_dema"),
    time_line: document.getElementById("time_line"),
    Question_2: document.getElementById("question_2"),
    line: document.getElementById("line"),
    Q_2: document.getElementById("Q_2"),
    Q_3: document.getElementById("Q_3"),
    Q_4: document.getElementById("Q_4"),
    Q_5: document.getElementById("Q_5"),
    Q_6: document.getElementById("Q_6"),
    Q_7: document.getElementById("Q_7"),
    Q_8: document.getElementById("Q_8"),
    Q_9: document.getElementById("Q_9"),
    Q_10: document.getElementById("Q_10"),
    Q_11: document.getElementById("Q_11"),
    Q_12: document.getElementById("Q_12"),
    Q_13: document.getElementById("Q_13"),
    Q_14: document.getElementById("Q_14"),
    Q_15: document.getElementById("Q_15"),
    Q_16: document.getElementById("Q_16"),
    Q_17: document.getElementById("Q_17"),
    Q_18: document.getElementById("Q_18"),
    Q_19: document.getElementById("Q_19"),
    Question_1: document.getElementById("question_1"),
    Question_2: document.getElementById("question_2"),
    Question_3: document.getElementById("question_3"),
    Question_4: document.getElementById("question_4"),
    Question_5: document.getElementById("question_5"),
    Question_6: document.getElementById("question_6"),
    Question_7: document.getElementById("question_7"),
    Question_8: document.getElementById("question_8"),
    Question_9: document.getElementById("question_9"),
    Question_10: document.getElementById("question_10"),
    Question_11: document.getElementById("question_11"),
    Question_12: document.getElementById("question_12"),
    Question_13: document.getElementById("question_13"),
    Question_14: document.getElementById("question_14"),
    Question_15: document.getElementById("question_15"),
    Question_16: document.getElementById("question_16"),
    Question_17: document.getElementById("question_17"),
    Question_18: document.getElementById("question_18"),
    Question_19: document.getElementById("question_19"),

}

IDs.btn_1.addEventListener("click", function( ) {
    IDs.section_1.style.display = "none";
    IDs.section_2.style.display = "none";
    IDs.section_A.style.display = "block";
    IDs.section_B.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
btn_2.addEventListener("click", function( ) {
    IDs.section_1.style.display = "none";
    IDs.section_2.style.display = "none";
    IDs.section_A.style.display = "block";
    IDs.section_B.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.btn_dema.addEventListener("click", function(){
    IDs.section_B.style.display = "none";
    IDs.Question_1.style.display = "block";
    IDs.time_line.style.display= "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_2.addEventListener("click", function(){
    IDs.Question_1.style.display = "none";
    IDs.time_line.style.display= "block";
    IDs.Question_2.style.display= "block";
    IDs.line.style.animation = "move2 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_3.addEventListener("click", function(){
    IDs.Question_1.style.display = "none";
    IDs.time_line.style.display= "block";
    IDs.Question_2.style.display= "none";
    IDs.Question_3.style.display= "block";
    IDs.line.style.animation = "move3 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_4.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_3.style.display= "none";
    IDs.Question_4.style.display= "block";
    IDs.line.style.animation = "move4 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_5.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_4.style.display= "none";
    IDs.Question_5.style.display= "block";
    IDs.line.style.animation = "move5 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_6.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_5.style.display= "none";
    IDs.Question_6.style.display= "block";
    IDs.line.style.animation = "move6 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_7.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_6.style.display= "none";
    IDs.Question_7.style.display= "block";
    IDs.line.style.animation = "move7 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_8.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_7.style.display= "none";
    IDs.Question_8.style.display= "block";
    IDs.line.style.animation = "move8 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_9.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_8.style.display= "none";
    IDs.Question_9.style.display= "block";
    IDs.line.style.animation = "move9 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_10.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_9.style.display= "none";
    IDs.Question_10.style.display= "block";
    IDs.line.style.animation = "move10 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_11.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_10.style.display= "none";
    IDs.Question_11.style.display= "block";
    IDs.line.style.animation = "move11 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_12.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_11.style.display= "none";
    IDs.Question_12.style.display= "block";
    IDs.line.style.animation = "move12 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_13.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_12.style.display= "none";
    IDs.Question_13.style.display= "block";
    IDs.line.style.animation = "move13 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_14.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_13.style.display= "none";
    IDs.Question_14.style.display= "block";
    IDs.line.style.animation = "move14 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_15.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_14.style.display= "none";
    IDs.Question_15.style.display= "block";
    IDs.line.style.animation = "move15 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_16.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_15.style.display= "none";
    IDs.Question_16.style.display= "block";
    IDs.line.style.animation = "move16 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_17.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_16.style.display= "none";
    IDs.Question_17.style.display= "block";
    IDs.line.style.animation = "move17 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_18.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_17.style.display= "none";
    IDs.Question_18.style.display= "block";
    IDs.line.style.animation = "move18 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.Q_19.addEventListener("click", function(){
    IDs.time_line.style.display= "block";
    IDs.Question_18.style.display= "none";
    IDs.Question_19.style.display= "block";
    IDs.line.style.animation = "move19 2s";
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
