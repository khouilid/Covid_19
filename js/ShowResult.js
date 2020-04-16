let ShowResult = (function () {
    IDs.Result.addEventListener("click", function () {
        Taille = (Answers.Taille) / 100;
        let BMI = Answers.POID / (Taille * Taille);             
        if (Answers.fièvre == " OUI" || (Answers.Toux == "OUI" && Answers.mal_de_gorge == "OUI") || (Answers.Toux == "OUI" && Answers.douleurs == "OUI") || (Answers.fièvre == "OUI" && Answers.diarrhée == "OUI")) {
            if (BMI > 18.5 && Answers.Cancer == "NON" && Answers.Maladies_chroniques == "NON" && Answers.Diabétique == "NON" && Answers.Maladie_respiratoire == "NON" && Answers.Chronique_dialysée == "NON" && Answers.M_chronique_du_foie == "NON" && Answers.Enceinte == "NON" && Answers.M_défenses_immunitaires == "NON" && Answers.Traitement == "NON") {
                if (Answers.age < 50 && Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.sente == "BIEN" || Answers.sente == "A_BIEN")) {
                    the_result_alert.innerHTMLL = "Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes."
                } else if (50 < Answers.age < 69 && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && ((Answers.sente == "BIEN" || Answers.sente == "A_BIEN") || Answers.fatigue == "NON" || 35.4 < Answers.température < 39)) {
                    the_result_alert.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile "
                }
            } else if (BMI <= 18.5 || Answers.Cancer == "OUI" || Answers.Maladies_chroniques == "OUI" || Answers.Diabétique == "OUI" || Answers.Maladie_respiratoire == "OUI" || Answers.Chronique_dialysée == "OUI" || Answers.M_chronique_du_foie == "OUI" || Answers.Enceinte == "OUI" || Answers.M_défenses_immunitaires == "OUI" || Answers.Traitement == "OUI") {
                if (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.fatigue == "NON" && Answers.fièvre == "NON" && Answers.sente == "BIEN" && Answers.sente == "A_BIEN")) {

                    the_result_alert.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile "
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" || Answers.température >= 39 || Answers.fièvre == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL")) {

                    the_result_alert.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile "
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" && Answers.température >= 39) || (Answers.fièvre == "OUI" && Answers.température >= 39) || (Answers.fatigue == "OUI" && Answers.fatigue == "OUI")) {

                    the_result_alert.innerHTML = "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent."
                }
            } else if (Answers.gêne_respiratoire == "OUI" || Answers.température <= 35.4 || Answers.difficultés_pour_manger == "OUI") {

                the_result_alert.innerHTML = "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent"
            }
        } else if (Answers.fièvre == "OUI" && Answers.Toux == "OUI") {
            if (BMI > 18.5 && Answers.Cancer == "NON" && Answers.Maladies_chroniques == "NON" && Answers.Diabétique == "NON" && Answers.Maladie_respiratoire == "NON" && Answers.Chronique_dialysée == "NON" && Answers.M_chronique_du_foie == "NON" && Answers.Enceinte == "NON" && Answers.M_défenses_immunitaires == "NON" && Answers.Traitement == "NON") {
                if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fièvre == "OUI" || Answers.fatigue == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL") || (Answers.fièvre == "NON" && Answers.fatigue == "NON" && Answers.sente == "BIEN" && Answers.sente == "A_BIEN")) {

                    the_result_alert.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"
                }
            } else if (BMI <= 18.5 || Answers.Cancer == "OUI" || Answers.Maladies_chroniques == "OUI" || Answers.Diabétique == "OUI" || Answers.Maladie_respiratoire == "OUI" || Answers.Chronique_dialysée == "OUI" || Answers.M_chronique_du_foie == "OUI" || Answers.Enceinte == "OUI" || Answers.M_défenses_immunitaires == "OUI" || Answers.Traitement == "OUI") {
                if (Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.fatigue == "NON" && Answers.fièvre == "NON" && Answers.sente == "BIEN" && Answers.sente == "A_BIEN")) {

                    the_result_alert.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile"
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" || Answers.température >= 39 || Answers.fièvre == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL")) {

                    the_result_alert.innerHTML = "téléconsultation ou médecin généraliste ou visite à domicile "
                } else if ((Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && Answers.température > 35.4) && (Answers.fatigue == "OUI" && Answers.température >= 39) || (Answers.fièvre == "OUI" && Answers.température >= 39) || (Answers.fatigue == "OUI" && Answers.fatigue == "OUI")) {

                    the_result_alert.innerHTML = "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.";
                }
            } else if (Answers.gêne_respiratoire == "OUI" || Answers.température <= 35.4 || Answers.difficultés_pour_manger == "OUI") {
                the_result_alert.innerHTML = "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.";
            }

        } else if (Answers.fièvre == "OUI" || Answers.Toux == "OUI" || Answers.mal_de_gorge == "OUI" || Answers.douleurs == "OUI") {
            if (Answers.age < 50 && Answers.fatigue == "NON" && Answers.gêne_respiratoire == "NON" && Answers.difficultés_pour_manger == "NON" && 35.4 < Answers.température < 39 && (Answers.sente == "BIEN" || Answers.sente == "A_BIEN")) {

                the_result_alert.innerHTML = "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. ";
            } else if (BMI < 18.5 || Answers.Cancer == "OUI" || Answers.Maladies_chroniques == "OUI" || Answers.Diabétique == "OUI" || Answers.Maladie_respiratoire == "OUI" || Answers.Chronique_dialysée == "OUI" || Answers.M_chronique_du_foie == "OUI" || Answers.Enceinte == "OUI" || Answers.M_défenses_immunitaires == "OUI" || Answers.Traitement == "OUI") {

                the_result_alert.innerHTML = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141."
            } else if (Answers.fièvre == "OUI" || Answers.fatigue == "OUI" || Answers.sente == "MAL" || Answers.sente == "T_MAL")

                the_result_alert.innerHTML = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141."
        } else {

            the_result_alert.innerHTML = "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.";
        }
    })
})();