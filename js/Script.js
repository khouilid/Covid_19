let ToNext = document.getElementById("ToNext");
let ToBack = document.getElementById("ToBack");
let QuestNumber = 0;
Answers = {
    FactPronistique: {},
    FactMajeur: {},
    FactMineur: {},
    Other: {},
}
let AnswerS;
// thi function show the  UI result 
function TheUiResult(R) {
    let ParaResult = `<div class="information"><h1 id="tittle">Résultats</h1><p class="information_1" id="the_result_alert">${R}</p><div class="information_line"></div><p id="ParaForAll">  Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.  </p></div>`;
    document.getElementById("All_Questions").innerHTML = ParaResult;
    document.getElementById("time_line").style.display = "none";
    document.getElementById("point_2").style.backgroundColor = "white";
    document.getElementById("point_3").style.backgroundColor = "#96C5DC";
    document.getElementById("ShowBtn").style.display = "none"
    ToNext.textContent = "Répéter le test";
}
// for input 
function Question_1(Quest) {
    let HTML = `<div class="questions"><div class="question_1"><h1>${Quest}</h1></div><div class="input_Q"><input type="text" id="Age"  placeholder="Enter the Value ..."></div></div><div class="notiv" id="notification"><p>La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait être un facteur d'aggravation del’infection. En cas de fièvre, prenez du paracétamol. Cette remarque concerte les traitements pargélules ou comprimés et ne concerne pas les formes inhalées. Si vous êtes déjà sous traitement, n'arrêtez pas ce traitement, demandez l'avis de votre médecin ou de votre pharmacien. </p></div>`;
    document.getElementById("All_Questions").innerHTML = HTML;
}
//  for 17 Questions OUI/NON
function Question_2(Quest) {
    let HTML = `<div class="questions"><div class="question_1"><h1>${Quest}</h1></div><div class="radio_G"><div class="option"><input type="radio" id="OUI" name="check3"/><label for="OUI"> OUI</label></div><div class="option"><input type="radio" id="NON" name="check3"  checked/><label for="NON"> NON</label></div></div></div>`;
    document.getElementById("All_Questions").innerHTML = HTML;
}
// for  the Question Containe four Options
function Question_3() {
    let HTML = `<div class="questions"><div class="question_1"><h1>Comment vous sentez-vous ?</h1></div><div class="radio_G"><div class="option"><input type="radio" id="Option1" name="check11" checked/><label for="Option1"> Bien</label></div><div class="option"><input type="radio" id="Option2" name="check11" /><label for="Option2">Assez bien</label></div><div class="option"><input type="radio" id="Option3" name="check11" /><label for="Option3">Mal</label></div><div class="option"><input type="radio" id="Option4" name="check11" /><label for="Option4">très mal</label></div></div></div>`;
    document.getElementById("All_Questions").innerHTML = HTML;
}
// the Questions
let Questions = ["Quel est votre âge ?",
    "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
    " Quelle est votre température ?",
    "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
    "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
    "Avez-vous un mal de gorge apparu ces derniers jours ? ",
    "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?",
    "Avez-vous une fatigue inhabituelle ces derniers jours ? ",
    " cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
    "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? ",
    "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
    "Comment vous sentez-vous ?",
    "Quel est votre poids ?",
    "Quelle est votre taille ?",
    "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
    "Êtes-vous diabétique ?",
    "Avez-vous ou avez-vous eu un cancer ?",
    "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
    "Avez-vous une insuffisance rénale chronique dialysée ?",
    "Avez-vous une maladie chronique du foie ?",
    "Êtes-vous enceinte ?",
    "Avez-vous une maladie connue pour diminuer vos défenses immunitaires?",
    "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)"
]

function str() {
    document.getElementById('section_1').style.display = "none";
    document.getElementById('section_2').style.display = "none";
    document.getElementById("section_B").style.display = "block";
    document.getElementById("section_A").style.display = "block";
    document.documentElement.scrollTop = 0;
}
document.getElementById("StartTeTest").addEventListener("click", str)
document.getElementById("btn_2").addEventListener("click", str)
//  this function controle the UI 
function UiControlers() {
    document.documentElement.scrollTop = 0;
    ToNext.textContent = "Question Suivente";
    document.getElementById("time_line").style.display = "block";
    document.getElementById("point_1").style.backgroundColor = "white";
    document.getElementById("point_2").style.backgroundColor = "#96C5DC";
    document.getElementById("line").animate([{
        width: (4.38 * (QuestNumber + 1)) + "%"
    }], {
        duration: 1000,
        fill: "forwards"
    });
    let OUI = document.getElementById("OUI");
    let NON = document.getElementById("NON");
    Question_2(Questions[QuestNumber])
    if (QuestNumber == 2 && OUI.checked) {
        Question_1(Questions[QuestNumber]);
        document.getElementById("notification").style.display = "none"
    } else if (QuestNumber == 2 && NON.checked) {
        Question_2(Questions[3])
        QuestNumber++;
    }
    if (QuestNumber == 8 && OUI.checked) {
        Question_2(Questions[QuestNumber])
    } else if (QuestNumber == 8 && NON.checked) {
        Question_2(Questions[QuestNumber + 1])
        QuestNumber++;
    }
    if (QuestNumber == 11) {
        Question_3()
    }
    if (QuestNumber == 12 || QuestNumber == 13 || QuestNumber == 0) {
        Question_1(Questions[QuestNumber])
        if (QuestNumber !== 0) {
            document.getElementById("notification").style.display = "none"
        }
    }
}
// this function push the user choise into an array (Answers)
function TheChoice() {
    let OUI = document.getElementById("OUI");
    let NON = document.getElementById("NON");
    if (QuestNumber == 1) {
        document.getElementById("ShowBtn").style.display = "block";
        let Inputo = parseInt(document.getElementById("Age").value);
        if (Inputo < 15) {
            TheUiResult("Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ");
            QuestNumber = 23;
        } else if (Inputo >= 15){
            Question_1(Questions[2]);
        }
    }
    if (QuestNumber == 1) {
        InputS = parseInt(document.getElementById("Age").value);
        Answers.Other["Answer_" + QuestNumber] = InputS;
    } else if (QuestNumber == 3) {
        let InputS = parseInt(document.getElementById("Age").value);
        if (InputS < 35.4) {
            Answers.FactMajeur["Answer_" + QuestNumber] = InputS;
        } else if (InputS > 39) {
            Answers.FactMineur["Answer_" + QuestNumber] = InputS;
        }
    } else if (QuestNumber == 2 || QuestNumber == 4 || QuestNumber == 5 || QuestNumber == 6 || QuestNumber == 7 || QuestNumber == 8) {
        if (OUI.checked) {
            Answers.Other["Answer_" + QuestNumber] = "OUI";
        } else if (NON.checked) {
            Answers.Other["Answer_" + QuestNumber] = "NON";
        }
    } else if (QuestNumber == 9) {
        if (OUI.checked) {
            Answers.FactMineur["Answer_" + QuestNumber] = "OUI";
        } else if (NON.checked) {
            Answers.Other["Answer_" + QuestNumber] = "NON";
        }
    } else if (QuestNumber == 11 || QuestNumber == 10) {
        if (OUI.checked) {
            Answers.FactMajeur["Answer_" + QuestNumber] = "OUI";
        } else if (NON.checked) {
            Answers.Other["Answer_" + QuestNumber] = "NON";
        }
    } else if (QuestNumber == 12) {
        let Option_1 = document.getElementById("Option1");
        let Option_2 = document.getElementById("Option2");
        let Option_3 = document.getElementById("Option3");
        let Option_4 = document.getElementById("Option4");
        if (Option_1.checked || Option_2.checked) {
            Answers.Other["Answer_12"] = "BIEN";
        } else if (Option_3.checked || Option_4.checked) {
            Answers.FactMineur["Answer_12"] = "MAL";
        }
    } else if (QuestNumber == 13 || QuestNumber == 14) {
        let InputS = parseInt(document.getElementById("Age").value);
        Answers.Other["Answer_" + QuestNumber] = InputS;
    } else if (QuestNumber >= 15 && (QuestNumber == 23 &&  Answers.Other.Answer_1 >= 15) && QuestNumber < 24) {
        if (OUI.checked) {
            Answers.FactPronistique["Answer_" + QuestNumber] = "OUI";
        } else if (NON.checked) {
            Answers.Other["Answer_" + QuestNumber] = "NON";
        }
    }
}
// this function give the the user her result
function ShowResult() {
    let Fact_P_Num = AnswerS[0].slice();
    let Fact_M_Num = AnswerS[1].slice();
    let Fact_N_Num = AnswerS[2].slice();
    if (Answers.Other.Answer_2 == "OUI" || (Answers.Other.Answer_4 == "OUI" && Answers.Other.Answer_6 == "OUI") || (Answers.Other.Answer_4 == "OUI" && Answers.Other.Answer_5 == "OUI") || (Answers.Other.Answer_2 == "OUI" && Answers.Other.Answer_7 == "OUI")) {
        if (Fact_M_Num.length >= 1 && Fact_P_Num.length >= 0) {
            TheUiResult("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent");
        } else if (Fact_P_Num.length == 0) {
            if (Fact_M_Num.length == 0 && Fact_N_Num.length == 0 && Answers.Other.Answer_1 < 50) {
                TheUiResult("nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. ")
            } else if ((Fact_M_Num.length == 0 && Fact_N_Num.length >= 1) || (Fact_M_Num.length == 0 && Fact_N_Num.length == 0 && Answers.Other.Answer_1 >= 50 && Answers.Other.Answer_1 <= 69)) {
                TheUiResult("téléconsultation ou médecin généraliste ou visite à domicile");
            }
        } else if (Fact_P_Num.length > 0) {
            if (Fact_M_Num.length == 0 && (Fact_N_Num.length == 0 || Fact_N_Num.length == 1)) {
                TheUiResult("téléconsultation ou médecin généraliste ou visite à domicile");
            } else if (Fact_M_Num.length == 0 && Fact_N_Num.length >= 2) {
                TheUiResult("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent")
            }
        }
    } else if (Answers.Other.Answer_2 == "OUI" && Answers.Other.Answer_4 == "OUI") {
        if (Fact_M_Num.length >= 1 && Fact_P_Num.length >= 0) {
            TheUiResult("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent")
        } else if (Fact_P_Num.length == 0 && Fact_M_Num.length == 0 && Fact_N_Num.length >= 0) {
            TheUiResult(" téléconsultation ou médecin généraliste ou visite à domicile ")
        } else if (Fact_P_Num.length >= 1) {
            if (Fact_M_Num.length == 0 && (Fact_N_Num.length == 0 || Fact_N_Num.length == 1)) {
                TheUiResult("téléconsultation ou médecin généraliste ou visite à domicile")
            } else if (Fact_M_Num.length == 0 && Fact_N_Num.length >= 2) {
                TheUiResult("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent")
            }
        }
    } else if (Answers.Other.Answer_2 == "OUI" || Answers.Other.Answer_4 == "OUI" || Answers.Other.Answer_6 == "OUI" || Answers.Other.Answer_7 == "OUI") {
        if (Fact_M_Num.length == 0 && Fact_N_Num.length == 0) {
            TheUiResult("Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.")
        } else if (Fact_P_Num.length > 0 || Fact_M_Num.length > 0 || Fact_N_Num.length > 0) {
            TheUiResult(" Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. ")
        }
    } else {
        TheUiResult("Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.")
    }
}
ToNext.addEventListener("click", () => {
    TheChoice();
    UiControlers();
    if (QuestNumber == 23) {
        AnswerS = Object.values(Answers)
        for (let i = 0; i < 4; i++) {
            AnswerS[i] = Object.values(AnswerS[i])
        }
        ShowResult();
    }
    if (QuestNumber == 24) {
        Question_1(Questions[0])
        document.getElementById("point_3").style.backgroundColor = "white";
        document.getElementById("point_2").style.backgroundColor = "#96C5DC";
        QuestNumber -= 24;
    }
    QuestNumber++;
    document.getElementById("Counter").innerHTML = QuestNumber;
});
ToBack.addEventListener("click", () => {
    QuestNumber--;
    Question_2(Questions[QuestNumber])
    document.getElementById("Counter").innerHTML = QuestNumber;
})