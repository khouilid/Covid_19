// Store the Answers of the user 
let Answers = {}
// this function controle the UI 
let UiControlers = (function () {
    function Startest() {
        IDs.section_1.style.display = "none";
        IDs.section_2.style.display = "none";
        IDs.section_A.style.display = "block";
        IDs.section_B.style.display = "block";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function UiControler(num_1, num_2, num_x) {
        IDs.time_line.style.display = "block";
        IDs["Question_" + num_1].style.display = "none";
        IDs["Question_" + num_2].style.display = "block";
        IDs.line.style.animation = `move${num_x} 2s`;
        IDs.line.style.animationFillMode = "forwards"
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function theChoice(id1, id2, Quest) {
        let OUI = document.getElementById(id1);
        let NON = document.getElementById(id2);
        if (OUI.checked) {
            Answers[Quest] = "OUI";

        }
        if (NON.checked) {
            Answers[Quest] = "NON";

        }
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
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
        console.log(Answers);
    })
})();
let ShowResult = (function () {
    IDs.Result.addEventListener("click", function () {
        Taille = (Answers.Taille) / 100;
        let BMI = Answers.POID / (Answers.Taille * Answers.Taille);
        if (Answers.fièvre == " OUI" || (Answers.Toux == "OUI" && Answers.mal_de_gorge == "OUI") || (Answers.Toux == "OUI" && Answers.douleurs == "OUI") || (Answers.fièvre == "OUI" && Answers.diarrhée == "OUI")) {
            if (BMI > 18.5 && Answers.Cancer == "NON" && Answers.Maladies_chroniques == "NON" && Answers.Diabétique == "NON" && Answers.Maladie_respiratoire == "NON" && Answers.Chronique_dialysée == "NON" && Answers.M_chronique_du_foie == "NON" && Answers.Enceinte == "NON" && Answers.M_défenses_immunitaires == "NON" && Answers.Traitement == "NON") {
                if (Answers.age < 50 && Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.sente == "BIEN" || Answers.sente == "A_BIEN")) {
                    alert("Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.");
                } else if (50 < Answers.age < 69 && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && ((Answers.sente == "BIEN" || Answers.sente == "A_BIEN") || Answers.fatigue == "NON" || 35.4 < Answers.température < 39)) {
                    alert("téléconsultation ou médecin généraliste ou visite à domicile ");
                }
            } else if (BMI <= 18.5 || Answers.Cancer == "OUI" || Answers.Maladies_chroniques == "OUI" || Answers.Diabétique == "OUI" || Answers.Maladie_respiratoire == "OUI" || Answers.Chronique_dialysée == "OUI" || Answers.M_chronique_du_foie == "OUI" || Answers.Enceinte == "OUI" || Answers.M_défenses_immunitaires == "OUI" || Answers.Traitement == "OUI") {
                if (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.fatigue == "NON" && Answers.fièvre == "NON" && Answers.sente == "BIEN" && Answers.sente == "A_BIEN")) {
                    alert("téléconsultation ou médecin généraliste ou visite à domicile ");
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" || Answers.température >= 39 || Answers.fièvre == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL")) {
                    alert("téléconsultation ou médecin généraliste ou visite à domicile ");
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" && Answers.température >= 39) || (Answers.fièvre == "OUI" && Answers.température >= 39) || (Answers.fatigue == "OUI" && Answers.fatigue == "OUI")) {
                    alert("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.");
                }
            } else if (Answers.gêne_respiratoire == "OUI" || Answers.température <= 35.4 || Answers.difficultés_pour_manger == "OUI") {
                alert("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent");
            }
        } else if (Answers.fièvre == "OUI" && Answers.Toux == "OUI") {
            if (BMI > 18.5 && Answers.Cancer == "NON" && Answers.Maladies_chroniques == "NON" && Answers.Diabétique == "NON" && Answers.Maladie_respiratoire == "NON" && Answers.Chronique_dialysée == "NON" && Answers.M_chronique_du_foie == "NON" && Answers.Enceinte == "NON" && Answers.M_défenses_immunitaires == "NON" && Answers.Traitement == "NON") {
                if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fièvre == "OUI" || Answers.fatigue == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL") || (Answers.fièvre == "NON" && Answers.fatigue == "NON" && Answers.sente == "BIEN" && Answers.sente == "A_BIEN")) {
                    alert(" téléconsultation ou médecin généraliste ou visite à domicile");
                }
            } else if (BMI <= 18.5 || Answers.Cancer == "OUI" || Answers.Maladies_chroniques == "OUI" || Answers.Diabétique == "OUI" || Answers.Maladie_respiratoire == "OUI" || Answers.Chronique_dialysée == "OUI" || Answers.M_chronique_du_foie == "OUI" || Answers.Enceinte == "OUI" || Answers.M_défenses_immunitaires == "OUI" || Answers.Traitement == "OUI") {
                if (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.fatigue == "NON" && Answers.fièvre == "NON" && Answers.sente == "BIEN" && Answers.sente == "A_BIEN")) {
                    alert("téléconsultation ou médecin généraliste ou visite à domicile ");
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" || Answers.température >= 39 || Answers.fièvre == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL")) {
                    alert("téléconsultation ou médecin généraliste ou visite à domicile ");
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" && Answers.température >= 39) || (Answers.fièvre == "OUI" && Answers.température >= 39) || (Answers.fatigue == "OUI" && Answers.fatigue == "OUI")) {
                    alert("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.");
                }
            } else if (Answers.gêne_respiratoire == "OUI" || Answers.température <= 35.4 || Answers.difficultés_pour_manger == "OUI") {
                alert("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent");
            }

        } else if (Answers.fièvre == "OUI" || Answers.Toux == "OUI" || Answers.mal_de_gorge == "OUI" || Answers.douleurs == "OUI") {
            if (Answers.age < 50 && Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.sente == "BIEN" || Answers.sente == "A_BIEN")) {
                alert("Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. ");
            } else if (BMI < 18.5 || Answers.Cancer == "OUI" || Answers.Maladies_chroniques == "OUI" || Answers.Diabétique == "OUI" || Answers.Maladie_respiratoire == "OUI" || Answers.Chronique_dialysée == "OUI" || Answers.M_chronique_du_foie == "OUI" || Answers.Enceinte == "OUI" || Answers.M_défenses_immunitaires == "OUI" || Answers.Traitement == "OUI") {
                alert("Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.")
            } else if (Answers.fièvre == "OUI" || Answers.fatigue == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL")
                alert("Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.")
        } else {
            alert("Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.")
        }
    })
})();
