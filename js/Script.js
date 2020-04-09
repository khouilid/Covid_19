// Store the Answers of the user 
let Answers = {}
// this function controle the UI 
let UiControlers = (function () {
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
        if (OUI.checked) {
            UiControler(1, 20, " ");
            Answers.fièvre = "OUI";
        }
        if (NON.checked) {
            UiControler(1, 2, " ");
            Answers.fièvre = "NON";
        }
    });
    IDs.IQ_2.addEventListener("click", function () {
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
        let OUI = document.getElementById('check3');
        let NON = document.getElementById('check4');
        if (OUI.checked) {
            Answers.Toux = "OUI";

        }
        if (NON.checked) {
            Answers.Toux = "NON";

        }
    })
    IDs.Q_4.addEventListener("click", function () {
        UiControler(3, 4, 4);
        let OUI = document.getElementById('check5');
        let NON = document.getElementById('check6');
        if (OUI.checked) {
            Answers.douleurs = "OUI";

        }
        if (NON.checked) {
            Answers.douleurs = "NON";

        }
    })
    IDs.Q_5.addEventListener("click", function () {
        UiControler(4, 5, 5);
        let OUI = document.getElementById('check7');
        let NON = document.getElementById('check8');
        if (OUI.checked) {
            Answers.mal_de_gorge = "OUI";

        }
        if (NON.checked) {
            Answers.mal_de_gorge = "NON";

        }
    })
    IDs.Q_6.addEventListener("click", function () {
        UiControler(5, 6, 6);
        let OUI = document.getElementById('check9');
        let NON = document.getElementById('check10');
        if (OUI.checked) {
            Answers.diarrhée = "OUI";

        }
        if (NON.checked) {
            Answers.diarrhée = "NON";

        }
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
        }
    })
    IDs.Q_8.addEventListener("click", function () {
        UiControler(7, 8, 8);
        let OUI = document.getElementById('check13');
        let NON = document.getElementById('check14');
        if (OUI.checked) {
            Answers.mal_fatigue = "OUI";
        }
        if (NON.checked) {
            Answers.mal_fatigue = "NON";
        }
    })
    IDs.Q_9.addEventListener("click", function () {
        UiControler(8, 9, 9);
        let OUI = document.getElementById('check15');
        let NON = document.getElementById('check16');
        if (OUI.checked) {
            Answers.difficultés_pour_manger = "OUI";
        }
        if (NON.checked) {
            Answers.difficultés_pour_manger = "NON";
        }
    })
    IDs.Q_10.addEventListener("click", function () {
        UiControler(9, 10, 10);
        let OUI = document.getElementById('check17');
        let NON = document.getElementById('check18');
        if (OUI.checked) {
            Answers.gêne_respiratoire = "OUI";
        }
        if (NON.checked) {
            Answers.gêne_respiratoire = "NON";
        }
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
    IDs.IQ_5.addEventListener("click", function () {
        let age = document.getElementById("Age").value;
        Answers.age = parseInt(age);
        if (age < 15) {
            alert(" Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ")
        } else {
            UiControler(23, 22, 12);
        }
    })
    IDs.IQ_4.addEventListener("click", function () {
        UiControler(22, 21, 13)
        let Poid = document.getElementById("POID").value;
        Answers.POID = parseInt(Poid);

    })
    IDs.IQ_3.addEventListener("click", function () {
        UiControler(21, 11, 14);
        let Taille = document.getElementById("taille").value;
        Answers.Taille = parseInt(Taille);
    })
    IDs.Q_12.addEventListener("click", function () {
        UiControler(11, 12, 15);
        let OUI = document.getElementById('check23');
        let NON = document.getElementById('check24');
        if (OUI.checked) {
            Answers.Maladies_chroniques = "OUI";
        }
        if (NON.checked) {
            Answers.Maladies_chroniques = "NON";
        }
    })
    IDs.Q_13.addEventListener("click", function () {
        UiControler(12, 13, 16);
        let OUI = document.getElementById('check25');
        let NON = document.getElementById('check26');
        if (OUI.checked) {
            Answers.Diabétique = "OUI";
        }
        if (NON.checked) {
            Answers.Diabétique = "NON";
        }
    })
    IDs.Q_14.addEventListener("click", function () {
        UiControler(13, 14, 17);
        let OUI = document.getElementById('check27');
        let NON = document.getElementById('check28');
        if (OUI.checked) {
            Answers.Cancer = "OUI";
        }
        if (NON.checked) {
            Answers.Cancer = "NON";
        }
    })
    IDs.Q_15.addEventListener("click", function () {
        UiControler(14, 15, 18);
        let OUI = document.getElementById('check29');
        let NON = document.getElementById('check30');
        if (OUI.checked) {
            Answers.Maladie_respiratoire = "OUI";
        }
        if (NON.checked) {
            Answers.Maladie_respiratoire = "NON";
        }
    })
    IDs.Q_16.addEventListener("click", function () {
        UiControler(15, 16, 19);
        let OUI = document.getElementById('check31');
        let NON = document.getElementById('check32');
        if (OUI.checked) {
            Answers.Chronique_dialysée = "OUI";
        }
        if (NON.checked) {
            Answers.Chronique_dialysée = "NON";
        }
    })
    IDs.Q_17.addEventListener("click", function () {
        UiControler(16, 17, 20);
        let OUI = document.getElementById('check33');
        let NON = document.getElementById('check34');
        if (OUI.checked) {
            Answers.M_chronique_du_foie = "OUI";
        }
        if (NON.checked) {
            Answers.M_chronique_du_foie = "NON";
        }
    })
    IDs.Q_18.addEventListener("click", function () {
        UiControler(17, 18, 21);
        let OUI = document.getElementById('check35');
        let NON = document.getElementById('check36');
        if (OUI.checked) {
            Answers.Enceinte = "OUI";
        }
        if (NON.checked) {
            Answers.Enceinte = "NON";
        }
    })
    IDs.Q_19.addEventListener("click", function () {
        UiControler(18, 19, 22);
        let OUI = document.getElementById('check37');
        let NON = document.getElementById('check38');
        if (OUI.checked) {
            Answers.M_défenses_immunitaires = "OUI";
        }
        if (NON.checked) {
            Answers.M_défenses_immunitaires = "NON";
        }
    })
    IDs.Result.addEventListener("click", function () {
        // UiControler(18, 19 ,22);
        let OUI = document.getElementById('check39');
        let NON = document.getElementById('check20');
        if (OUI.checked) {
            Answers.Traitement = "OUI";
        }
        if (NON.checked) {
            Answers.Traitement = "NON";
        };
        console.log(Answers);
    })
})();
let ShowResult = (function () {
    IDs.Result.addEventListener("click", function () {
        if (Answers.fièvre == "NON" && Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.age < 50 && 35.4 < Answers.température < 39) {
            alert("Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.");
        } else if ((Answers.fièvre == "NON" && Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 50 < Answers.age < 69 && 35.4 < Answers.température < 39)) {
            alert("téléconsultation ou médecin généraliste ou visite à domicile");
        } else if ((Answers.fièvre !== "NON" || Answers.fatigue !== "NON" || Answers.gêne_respiratoire !== "NON" || Answers.difficultés_pour_manger !== "NON") && 50 < Answers.age < 69) {
            alert("téléconsultation ou médecin généraliste ou visite à domicile");
        } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fièvre == "OUI" || Answers.fatigue == "OUI" || Answers.température < 39)) {
            alert(" téléconsultation ou médecin généraliste ou visite à domicile ");
        } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fièvre == "NON" && Answers.fatigue == "NON")) {
            alert(" téléconsultation ou médecin généraliste ou visite à domicile ");
        } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && ((Answers.fièvre == "OUI" && Answers.fatigue == "OUI" && Answers.température < 39) || (Answers.fièvre == "NON" && Answers.fatigue == "OUI" && Answers.température >= 39) || (Answers.fièvre == "OUI" && Answers.fatigue == "NON" && Answers.température >= 39))) {
            alert("Appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.");
        } else if (Answers.fièvre == "OUI" && Answers.Toux == "OUI" && (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && ((Answers.fatigue == "OUI" && Answers.température < 39) || (Answers.fatigue == "OUI" && Answers.température >= 39) || (Answers.fatigue == "NON" && Answers.température >= 39))) {
            alert("téléconsultation ou médecin généraliste ou visite à domicile ");
        } else if (Answers.fièvre == "OUI" && Answers.Toux == "OUI" && (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4 && Answers.fatigue == "NON")) {
            alert(" téléconsultation ou médecin généraliste ou visite à domicile ");
        } else if (Answers.fièvre == "OUI" && Answers.Toux == "OUI" && (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4 && Answers.fatigue == "OUI")) {
            alert(" appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent");
        } else if ((Answers.Toux == "OUI" || Answers.fièvre == "OUI" || Answers.mal_de_gorge == "OUI" || Answers.douleurs == "OUI") && (Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON")) {
            alert("Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. ")
        } else if ((Answers.Toux == "OUI" || Answers.fièvre == "OUI" || Answers.mal_de_gorge == "OUI" || Answers.douleurs == "OUI") && (Answers.fatigue == "NON" || Answers.gêne_respiratoire == "NON" || Answers.difficultés_pour_manger == "NON")) {
            alert("Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. ")
        } else if (Answers.fièvre == "NON" && Answers.Toux == "NON" && Answers.douleurs == "NON" && Answers.mal_de_gorge == "NON" && Answers.diarrhée == "NON" && Answers.fatigue == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.gêne_respiratoire == "NON" && Answers.sente == "BIEN" && Answers.Maladies_chroniques == "NON" && Answers.Diabétique == "NON" && Answers.Cancer == "NON" && Answers.Maladie_respiratoire == "NON" && Answers.Chronique_dialysée == "NON" && Answers.M_chronique_du_foie == "NON" && Answers.Enceinte == "NON" && Answers.M_défenses_immunitaires == "NON" && Answers.Traitement == "NON") {
            alert("Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. ")
        } else {
            alert("Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.")
        }
    })


})();