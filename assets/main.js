// assets/main.js

// ==========================================
// 1. CALCULATEUR DE CALORIES & MACROS
// ==========================================
function calculerMacros() {
    const sexe = document.getElementById('calcSexe').value;
    const age = parseFloat(document.getElementById('calcAge').value);
    const poids = parseFloat(document.getElementById('calcPoids').value);
    const taille = parseFloat(document.getElementById('calcTaille').value);
    const activity = parseFloat(document.getElementById('calcActivity').value);
    const goal = parseFloat(document.getElementById('calcGoal').value);

    // Vérification
    if (!age || !poids || !taille) {
        alert("Merci de remplir toutes les informations (Âge, Poids, Taille).");
        return;
    }

    // 1. Calcul du BMR (Mifflin-St Jeor)
    let bmr;
    if (sexe === 'h') {
        bmr = (10 * poids) + (6.25 * taille) - (5 * age) + 5;
    } else {
        bmr = (10 * poids) + (6.25 * taille) - (5 * age) - 161;
    }

    // 2. Calcul du TDEE (Maintenance)
    const tdee = bmr * activity;

    // 3. Cible Calorique
    const targetCalories = Math.round(tdee + goal);

    // 4. Calcul des Macros (Logique Sportive)
    // Protéines : 2g par kg de poids de corps (standard sportif)
    const proteinGrams = Math.round(poids * 2); 
    const proteinCals = proteinGrams * 4;

    // Lipides : 1g par kg de poids de corps (santé hormonale)
    const fatGrams = Math.round(poids * 1);
    const fatCals = fatGrams * 9;

    // Glucides : Le reste des calories
    let carbCals = targetCalories - (proteinCals + fatCals);
    // Sécurité pour éviter les glucides négatifs en sèche extrême
    if (carbCals < 0) carbCals = 0; 
    const carbGrams = Math.round(carbCals / 4);

    // Affichage
    document.getElementById('totalCalories').textContent = targetCalories;
    document.getElementById('resProt').textContent = proteinGrams + "g";
    document.getElementById('resLip').textContent = fatGrams + "g";
    document.getElementById('resGlu').textContent = carbGrams + "g";

    // Animation d'apparition
    const resultBox = document.getElementById('macroResult');
    resultBox.style.display = "block";
    resultBox.scrollIntoView({behavior: "smooth"});
}


// ==========================================
// 2. SIMULATEUR DE COMPLÉMENTS (AVANCÉ)
// ==========================================
function lancerDiagnostic() {
    // Inputs
    const sport = document.getElementById('sport').value;
    const frequence = document.getElementById('frequence').value;
    const objectif = document.getElementById('objectif').value;
    const age = document.getElementById('age').value;
    const diet = document.getElementById('diet').value;
    const digestion = document.getElementById('digestion').value;
    const douleur = document.getElementById('douleur').value;
    const stress = document.getElementById('stress').value;
    const budget = document.getElementById('budget').value;

    let recos = [];
    let raison = [];

    // --- LOGIQUE MULTIVITAMINES (Base) ---
    if (diet === "vege") {
        recos.push("Multivitamines (Avec B12)");
        raison.push("Essentiel car votre régime végétal peut créer des carences en B12 et Fer.");
    } else if (budget !== "etudiant") {
        recos.push("Multivitamines");
        raison.push("Assurance santé de base pour tout sportif.");
    }

    // --- LOGIQUE PROTÉINES & RÉGIME ---
    if (sport === "muscu" || sport === "crossfit") {
        if (diet === "vege") {
            recos.push("Protéine Végétale Bio");
            raison.push("Alternative végétale complète (Pois/Riz) pour votre récupération musculaire.");
        } else if (digestion === "sensible") {
            recos.push("Whey Isolat Native");
            raison.push("L'Isolat Native ne contient quasiment plus de lactose. Idéal pour votre digestion sensible.");
        } else {
            recos.push("Whey Native");
            raison.push("Le standard pour la construction musculaire après l'entraînement.");
        }
    }

    // --- LOGIQUE PERFORMANCE ---
    if ((objectif === "masse" || objectif === "perf") && sport !== "endurance") {
        recos.push("Créatine Monohydrate (Creapure®)");
        raison.push("Le supplément n°1 pour la force et l'explosivité.");
    }

    if (sport === "endurance" || (sport === "crossfit" && frequence === "elite")) {
        recos.push("Glucides en poudre (Maltodextrine)");
        raison.push("Carburant indispensable pour tenir sur les séances longues (>1h30).");
    }

    // --- LOGIQUE SANTÉ & ÂGE ---
    if (age === "vieux" || age === "senior" || douleur === "tendon") {
        recos.push("Collagène Peptides (Peptan®)");
        if (douleur === "tendon") {
            raison.push("URGENCE TENDONS : Le collagène est la brique de base pour réparer vos tendinites.");
        } else {
            raison.push("Après 30 ans, la production naturelle de collagène chute. À prendre en prévention.");
        }
    }

    if (age === "senior" || stress === "eleve" || sommeil !== "zen") {
        recos.push("Magnésium Bisglycinate");
        raison.push("Pour calmer le système nerveux et améliorer la qualité du sommeil.");
    }

    if (douleur === "dos" || (age === "senior" && budget !== "etudiant")) {
        recos.push("Oméga 3 (Epax®)");
        raison.push("Puissant anti-inflammatoire naturel pour la santé articulaire et cardiaque.");
    }

    // --- AFFICHAGE ---
    const listProduits = document.getElementById('liste-produits');
    const listRaisons = document.getElementById('liste-raisons');
    
    listProduits.innerHTML = "";
    listRaisons.innerHTML = "";

    if (recos.length === 0) {
        recos.push("Aucun complément spécifique requis");
        raison.push("Votre profil semble équilibré. Une bonne alimentation suffit pour l'instant !");
    }

    recos.forEach(prod => {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${prod}</strong>`;
        listProduits.appendChild(li);
    });

    raison.forEach(r => {
        let p = document.createElement('p');
        p.innerHTML = "• " + r;
        listRaisons.appendChild(p);
    });

    const resultBox = document.getElementById('resultats');
    resultBox.classList.add('visible');
    resultBox.style.display = "block";
    resultBox.scrollIntoView({behavior: "smooth"});
}