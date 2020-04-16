Answers = {
    FactPronistique: {},
    FactMajeur: {},
    FactMineur: {},
    Other: {},
}
let UiControler = (function () {
    let ToNext = document.getElementById("ToNext");
    let ToBack = document.getElementById("ToBack");
    // let Demarer_Test = document.getElementById("Demarer_Test");
    let StartTeTest = document.getElementById("StartTeTest");
    let theQuestions = {
        Question_1: `<div class="questions"><div class="question_1"><h1>Quel est votre âge ? </h1></div><div class="input_Q"><input type="text" id="Age"  placeholder="27 Ans"></div></div><div class="notiv" id="notification"><p>La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait être un facteur d'aggravation del’infection. En cas de fièvre, prenez du paracétamol. Cette remarque concerte les traitements pargélules ou comprimés et ne concerne pas les formes inhalées. Si vous êtes déjà sous traitement, n'arrêtez pas ce traitement, demandez l'avis de votre médecin ou de votre pharmacien. </p></div>`,
        // for the 17 other Questions
        Question_2: '<div class="questions"><div class="question_1"><h1>%TheQuestion%</h1></div><div class="radio_G"><div class="option"><input type="radio" id="OUI" name="check3" checked/><label for="OUI"> OUI</label></div><div class="option"><input type="radio" id="NON" name="check3" /><label for="NON"> NON</label></div></div></div>',
        // for the 4 option question
        Question_3: '<div class="questions"><div class="question_1"><h1>Comment vous sentez-vous ?</h1></div><div class="radio_G"><div class="option"><input type="radio" id="Option1" name="check11" checked/><label for="Option1"> Bien</label></div><div class="option"><input type="radio" id="Option2" name="check11" /><label for="Option2">Assez bien</label></div><div class="option"><input type="radio" id="Option3" name="check11" /><label for="Option3">Mal</label></div><div class="option"><input type="radio" id="Option4" name="check11" /><label for="Option4">très mal</label></div></div></div>',
        // for the input 
        Question_4: '<div class="questions"><div class="question_1"><h1>%inout%</h1></div><div class="input_Q"><input type="text" id="Age"  placeholder="%Place%"></div></div><div class="btns">',
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
    StartTeTest.addEventListener("click", function () {
        document.getElementById('section_1').style.display = "none";
        document.getElementById('section_2').style.display = "none";
        document.getElementById("section_B").style.display = "block";
        document.getElementById("section_A").style.display = "block";
        document.documentElement.scrollTop = 0;
    })
    let QuestNumber = 0;
    //  this function controle the UI 
    function UiControlers() {
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
        document.documentElement.scrollTop = 0;
        let OUI = document.getElementById("OUI");
        let NON = document.getElementById("NON");
        let TheUI = theQuestions.Question_2.replace('%TheQuestion%', Questions[QuestNumber]);
        document.getElementById("All_Questions").innerHTML = TheUI;
        if (QuestNumber == 0) {
            let Input = theQuestions.Question_1.replace("%inout%", Questions[QuestNumber])
            Input = Input.replace("%Place%", '37°C')
            document.getElementById("All_Questions").innerHTML = Input;
        }
        if (QuestNumber == 2 && OUI.checked) {
            let Input = theQuestions.Question_4.replace("%inout%", Questions[QuestNumber])
            Input = Input.replace("%Place%", '37°C')
            document.getElementById("All_Questions").innerHTML = Input;
        } else if (QuestNumber == 2 && NON.checked) {
            let TheUI = theQuestions.Question_2.replace('%TheQuestion%', Questions[QuestNumber + 1]);
            document.getElementById("All_Questions").innerHTML = TheUI;
            QuestNumber++;
        }
        if (QuestNumber == 8 && OUI.checked) {
            let TheUI = theQuestions.Question_2.replace('%TheQuestion%', Questions[QuestNumber]);
            document.getElementById("All_Questions").innerHTML = TheUI;
        } else if (QuestNumber == 8 && NON.checked) {
            let TheUI = theQuestions.Question_2.replace('%TheQuestion%', Questions[QuestNumber + 1]);
            document.getElementById("All_Questions").innerHTML = TheUI;
            QuestNumber++;
        }
        if (QuestNumber == 11) {
            let TheUI = theQuestions.Question_3.replace('%TheQuestion%', "qkerjgkr");
            document.getElementById("All_Questions").innerHTML = TheUI;
        }
        if (QuestNumber == 12 || QuestNumber == 13) {
            let Input = theQuestions.Question_4.replace("%inout%", Questions[QuestNumber])
            Input = Input.replace("%Place%", 'Enter the Value ...')
            document.getElementById("All_Questions").innerHTML = Input;
        }
    }
    // this function push the user choise into an array (Answers)
    function TheChoice() {
        if (QuestNumber >= 15) {
            if (OUI.checked) {
                Answers.FactPronistique["Answer_" + QuestNumber] = "OUI";
            } else if (NON.checked) {
                Answers.FactPronistique["Answer_" + QuestNumber] = "NON";
            }
        } else if (QuestNumber == 12) {
            let Option_1 = document.getElementById("Option1");
            let Option_2 = document.getElementById("Option2");
            let Option_3 = document.getElementById("Option3");
            if (Option_1.checked) {
                Answers.Other["Answer_12"] = "BIEN";
            } else if (Option_2.checked) {
                Answers.Other["Answer_12"] = "A_BIEN";
            } else if (Option_3.checked) {
                Answers.FactMineur["Answer_12"] = "MAL";
            } else {
                Answers.FactMineur["Answer_12"] = "T_MAL";
            }
        } else if (QuestNumber == 1 || QuestNumber == 13 || QuestNumber == 14) {
            document.getElementById("ShowBtn").style.display = "block"
            let InputS = parseInt(document.getElementById("Age").value);
            Answers.Other["Answer_" + QuestNumber] = InputS;
            if (QuestNumber == 1 && InputS < 15) {
                alert(" Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. ")
            }
        } else if (QuestNumber == 3) {
            let InputS = parseInt(document.getElementById("Age").value);
            if (InputS < 35.4) {
                Answers.FactMajeur["Answer_" + QuestNumber] = InputS;
            } else if (InputS > 39) {
                Answers.FactMineur["Answer_" + QuestNumber] = InputS;
            }
        } else if (QuestNumber == 11 || QuestNumber == 10) {
            if (OUI.checked) {
                Answers.FactMajeur["Answer_" + QuestNumber] = "OUI";

            } else if (NON.checked) {
                Answers.Other["Answer_" + QuestNumber] = "NON";
            }
        } else if (QuestNumber == 9) {
            if (OUI.checked) {
                Answers.FactMineur["Answer_" + QuestNumber] = "OUI";

            } else if (NON.checked) {
                Answers.Other["Answer_" + QuestNumber] = "NON";
            }
        } else if (QuestNumber == 1 || QuestNumber == 2 || QuestNumber == 4 || QuestNumber == 5 || QuestNumber == 6 || QuestNumber == 7 || QuestNumber == 8) {
            if (OUI.checked) {
                Answers.Other["Answer_" + QuestNumber] = "OUI";

            } else if (NON.checked) {
                Answers.Other["Answer_" + QuestNumber] = "NON";
            }
        }
    }
    ToNext.addEventListener("click", function () {
        TheChoice();
        UiControlers();
        // Switch Object Answers into an array
        if (QuestNumber == 23) {
            const AnswerS = Object.values(Answers)
            for (let i = 0; i < 4; i++) {
                AnswerS[i] = Object.values(AnswerS[i])
            }
            console.log(AnswerS)
            ShowResult();
        }
        QuestNumber++;
    });
    ToBack.addEventListener("click", function () {
        UiControlers();
        QuestNumber--;
    })
    setInterval(function () {
        document.getElementById("Counter").innerHTML = QuestNumber;
    }, 10)
})()
function ShowResult() {
    if (Answers.Answer_1 <= 15) {
        if (Answers.Answer_2 == "OUI" || (Answers.Answer_4 == "OUI" && Answers.Answer_6 == "OUI") || (Answers.Answer_4 == "OUI" && Answers.Answer_5 == "OUI") || (Answers.Answer_2 == "OUI" && Answers.Answer_7 == "OUI")) {
            if (AnswerS[0].lenght == 0) {
                if (Answers.Answer_1 < 50 && AnswerS[1].lenght == 0 && AnswerS[2].lenght == 0) {
                    alert("nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. ")
                } else if (Answers.Answer_1 > 50 && Answers.Answer_1 < 69 && AnswerS[1].lenght == 0 && (AnswerS[2].lenght == 0 || AnswerS[2].lenght < 1)) {
                    alert("téléconsultation ou médecin généraliste ou visite à domicile")
                }
            } else if (AnswerS[0].lenght !== 0) {
                if (AnswerS[1].lenght == 0 && (AnswerS[2].lenght == 0 || AnswerS[2].lenght == 1)) {
                    alert(" téléconsultation ou médecin généraliste ou visite à domicile ")
                } else if (AnswerS[1].lenght == 0 && AnswerS[2].lenght <= 2) {
                    alert("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.")
                }
            } else if (AnswerS[1].lenght <= 1) {
                alert("appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.")
            }
        }

    }
}