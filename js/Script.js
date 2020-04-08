IDs.btn_1.addEventListener("click", function () {
    IDs.section_1.style.display = "none";
    IDs.section_2.style.display = "none";
    IDs.section_A.style.display = "block";
    IDs.section_B.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.btn_2.addEventListener("click", function () {
    IDs.section_1.style.display = "none";
    IDs.section_2.style.display = "none";
    IDs.section_A.style.display = "block";
    IDs.section_B.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
IDs.btn_dema.addEventListener("click", function () {
    IDs.section_B.style.display = "none";
    IDs.Question_1.style.display = "block";
    IDs.time_line.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})

function UiControler(num_1, num_2, num_x) {
    IDs.time_line.style.display = "block";
    IDs["Question_" + num_1].style.display = "none";
    IDs["Question_" + num_2].style.display = "block";
    IDs.line.style.animation = `move${num_x} 2s`;
    IDs.line.style.animationFillMode = "forwards"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
IDs.Q_2.addEventListener("click", function () {
    let OUI = document.getElementById('check1');
    let NON = document.getElementById('check2');
    if(OUI.checked){
        UiControler(1, 20," ");
    }if (NON.checked){
        UiControler(1, 2 , " ");
    }

});

IDs.IQ_2.addEventListener("click", function () {
        if( temp.value !== ""){
            UiControler(20, 2, 2);
        }else{
           temp.style.boxShadow = " 0 0 0 2px red";
           temp.style.border = " 1px solid rgba(255, 0, 0, 0.479)"
        }
        
        
})

IDs.Q_3.addEventListener("click", function () {
    UiControler(2, 3 ,3);
})
IDs.Q_4.addEventListener("click", function () {
    UiControler(3, 4,4);

})
IDs.Q_5.addEventListener("click", function () {
    UiControler(4, 5, 5);

})
IDs.Q_6.addEventListener("click", function () {
    UiControler(5, 6 , 6);

})
IDs.Q_7.addEventListener("click", function () {
    let OUI = document.getElementById('check11');
    let NON = document.getElementById('check12');
    if(OUI.checked){
        UiControler(6, 7 , 7);
    }if (NON.checked){
        UiControler(6, 8, 7);
    }

})
IDs.Q_8.addEventListener("click", function () {
    UiControler(7, 8 , 8);

})
IDs.Q_9.addEventListener("click", function () {
    UiControler(8, 9, 9);


})
IDs.Q_10.addEventListener("click", function () {
    UiControler(9, 10, 10);

})
IDs.Q_11.addEventListener("click", function () {
    UiControler(10, 23 ,11);



})
IDs.IQ_5.addEventListener("click", function () {
      let age = document.getElementById("Age").value;
      if(age < 15){
          alert(" Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ")
      }else{
          UiControler(23, 22, 12);
      }
    
})
IDs.IQ_4.addEventListener("click", function () {
      UiControler(22, 21, 13)
    
})
IDs.IQ_3.addEventListener("click", function () {
    UiControler(21, 11, 14);
    
})


IDs.Q_12.addEventListener("click", function () {
    UiControler(11, 12, 15);

})
IDs.Q_13.addEventListener("click", function () {
    UiControler(12, 13, 16);

})
IDs.Q_14.addEventListener("click", function () {
    UiControler(13, 14 ,17);

})
IDs.Q_15.addEventListener("click", function () {
    UiControler(14, 15 ,18);

})
IDs.Q_16.addEventListener("click", function () {
    UiControler(15, 16 , 19);


})
IDs.Q_17.addEventListener("click", function () {
    UiControler(16, 17 , 20);

})
IDs.Q_18.addEventListener("click", function () {
    UiControler(17, 18 , 21);

})
IDs.Q_19.addEventListener("click", function () {
    UiControler(18, 19 ,22);

})





