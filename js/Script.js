// Store the Answers of the user 
let Answers = {}
// this IFEE Conctrole all the UI 
let UiControlers = (function () {
    let the_Counter = 1;
    // this tree function controle the UI
    function Startest() {
        IDs.section_1.style.display = "none";
        IDs.section_2.style.display = "none";
        IDs.section_A.style.display = "block";
        IDs.section_B.style.display = "block";
        document.documentElement.scrollTop = 0;
    }
    function UiControler(num_1, num_2, num_x) {
        IDs.time_line.style.display = "block";
        IDs["Question_" + num_1].style.display = "none";
        IDs["Question_" + num_2].style.display = "block";
        IDs.line.style.animation = `move${num_x} 2s`;
        IDs.line.style.animationFillMode = "forwards"
        document.documentElement.scrollTop = 0;
        the_Counter++;
        Counter.innerHTML= the_Counter; 
    }
    // this function push the user Checks into the Object "Answers"
    function theChoice(id1, id2, Quest) {
        let OUI = document.getElementById(id1);
        let NON = document.getElementById(id2);
        if (OUI.checked) {
            Answers[Quest] = "OUI";
        }else if(NON.checked) {
            Answers[Quest] = "NON";
        }
    }
    // this function show the result 
    function TheResult () {
        IDs.section_B.style.display = "block";
        IDs.time_line.style.display = "none";
        point_2.style.backgroundColor = "white";
        point_3.style.backgroundColor = "#96C5DC";
        IDs["Question_19"].style.display = "none";
        IDs.Question_23.style.display = "none";
        the_Counter = 1;
        tittle.innerHTML = "Résultats";
        btn_dema.innerHTML = "Répéter le test"
        ParaForAll.innerHTML = "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène."
    }
    IDs.btn_1.addEventListener("click", function () {
        Startest();
    })
    IDs.btn_2.addEventListener("click", function () {
        Startest();
    })
    IDs.btn_dema.addEventListener("click", function () {
        IDs.section_B.style.display = "none";
        IDs.Question_1.style.display = "block";
        IDs.time_line.style.display = "block";
        document.documentElement.scrollTop = 0;
        point_1.style.backgroundColor = "white";
        point_2.style.backgroundColor = "#96C5DC";
    })
    IDs.Q_2.addEventListener("click", function () {
        let OUI = document.getElementById('check1');
        let NON = document.getElementById('check2');
        if (OUI.checked) {
            UiControler(1, 20, " ");
            Answers.fièvre = "OUI";
        }
        if (NON.checked) {
            UiControler(1, 2, " ");
            Answers.fièvre = "NON";
            Counter_2.innerHTML = "/22";
        }
    });
    IDs.Q_20.addEventListener("click", function () {
        if (temp.value !== "") {
            UiControler(20, 2, 2);
            Answers.température = parseInt(temp.value);
        } else {
            temp.style.boxShadow = " 0 0 0 2px red";
            temp.style.border = " 1px solid rgba(255, 0, 0, 0.479)"
        }
    })
    IDs.Q_3.addEventListener("click", function () {
        UiControler(2, 3, 3);
        theChoice('check3', 'check4', "Toux");
    })
    IDs.Q_4.addEventListener("click", function () {
        UiControler(3, 4, 4);
        theChoice('check5', 'check6', "douleurs");
    })
    IDs.Q_5.addEventListener("click", function () {
        UiControler(4, 5, 5);
        theChoice('check7', 'check8', "mal_de_gorge")
    })
    IDs.Q_6.addEventListener("click", function () {
        UiControler(5, 6, 6);
        theChoice('check9', 'check10', "diarrhée")
    })
    IDs.Q_7.addEventListener("click", function () {
        let OUI = document.getElementById('check11');
        let NON = document.getElementById('check12');
        if (OUI.checked) {
            UiControler(6, 7, 7);
            Answers.fatigue = "OUI";
        }
        if (NON.checked) {
            UiControler(6, 8, 7);
            Answers.fatigue = "NON";
            Counter_2.innerHTML = "/21";
        }
    })
    IDs.Q_8.addEventListener("click", function () {
        UiControler(7, 8, 8);
        theChoice('check13', 'check14', "mal_fatigue")
    })
    IDs.Q_9.addEventListener("click", function () {
        UiControler(8, 9, 9);
        theChoice('check15', 'check16', "difficultés_pour_manger");
    })
    IDs.Q_10.addEventListener("click", function () {
        UiControler(9, 10, 10);
        theChoice('check17', 'check18', "gêne_respiratoire")
    })
    IDs.Q_11.addEventListener("click", function () {
        UiControler(10, 23, 11);
        let BIEN = document.getElementById('check19');
        let A_BIEN = document.getElementById('check20');
        let MAL = document.getElementById('check21');
        let T_MAL = document.getElementById('check22');
        if (BIEN.checked) {
            Answers.sente = "BIEN";
        }
        if (A_BIEN.checked) {
            Answers.sente = "A_BIEN";
        }
        if (MAL.checked) {
            Answers.sente = "MAL";
        }
        if (T_MAL.checked) {
            Answers.sente = "T_MAL";
        }
    })
    IDs.Q_23.addEventListener("click", function () {
        let age = document.getElementById("Age").value;
        Answers.age = parseInt(age);
        if (age < 15) {
            TheResult();
            the_result_alert.innerHTML = "Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. "
        } else {
            UiControler(23, 22, 12);
        }
    })
    IDs.Q_22.addEventListener("click", function () {
        UiControler(22, 21, 13)
        let Poid = document.getElementById("POID").value;
        Answers.POID = parseInt(Poid);
    })
    IDs.Q_21.addEventListener("click", function () {
        UiControler(21, 11, 14);
        let Taille = document.getElementById("taille").value;
        Answers.Taille = parseInt(Taille);
    })
    IDs.Q_12.addEventListener("click", function () {
        UiControler(11, 12, 15);
        theChoice('check23', 'check24', "Maladies_chroniques")
    })
    IDs.Q_13.addEventListener("click", function () {
        UiControler(12, 13, 16);
        theChoice('check25', 'check26', "Diabétique")
    })
    IDs.Q_14.addEventListener("click", function () {
        UiControler(13, 14, 17);
        theChoice('check27', 'check28', "Cancer")
    })
    IDs.Q_15.addEventListener("click", function () {
        UiControler(14, 15, 18);
        theChoice('check29', 'check30', "Maladie_respiratoire")
    })
    IDs.Q_16.addEventListener("click", function () {
        UiControler(15, 16, 19);
        theChoice('check31', 'check32', "Chronique_dialysée")
    })
    IDs.Q_17.addEventListener("click", function () {
        UiControler(16, 17, 20);
        theChoice('check33', 'check34', "M_chronique_du_foie")
    })
    IDs.Q_18.addEventListener("click", function () {
        UiControler(17, 18, 21);
        theChoice('check35', 'check36', "Enceinte")
    })
    IDs.Q_19.addEventListener("click", function () {
        UiControler(18, 19, 22);
        theChoice('check37', 'check38', "M_défenses_immunitaires")
    })
    IDs.Result.addEventListener("click", function () {
        theChoice('check39', 'check20', "Traitement")
        TheResult();
    })
})();
