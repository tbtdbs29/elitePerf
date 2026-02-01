// assets/layout.js

/**
 * Système de Layout Global ElitePerf
 * @param {boolean} isSubFolder - Mettre 'true' si le fichier est dans le dossier /blog
 * @param {string} activePage - L'ID de la page active ('home', 'blog', 'calc', 'comparatif')
 */
function initLayout(isSubFolder, activePage) {
    
    // 1. Gestion des chemins (../ si on est dans un sous-dossier)
    const prefix = isSubFolder ? "../" : "";

    // 2. HEADER GLOBAL
    const headerHTML = `
        <div class="container">
            <nav>
                <a href="${prefix}index.html" class="logo">Elite<span style="color:var(--accent)">Perf</span></a>
                <ul class="nav-links">
                    <li><a href="${prefix}index.html" class="${activePage === 'home' ? 'active' : ''}">Accueil</a></li>
                    <li><a href="${prefix}blog/index.html" class="${activePage === 'blog' ? 'active' : ''}">Guide & Blog</a></li>
                    <li><a href="${prefix}calculateur.html" class="${activePage === 'calc' ? 'active' : ''}">Calculateur</a></li>
                    <li><a href="${prefix}comparatif.html" class="${activePage === 'comparatif' ? 'active' : ''}">Comparatif</a></li>
                    <li><a href="${prefix}simulateur.html" class="cta-nav">Faire mon diagnostic</a></li>
                </ul>
            </nav>
        </div>
    `;

    // 3. FOOTER GLOBAL (AVEC DISCLAIMER PASSIONNÉ)
    const footerHTML = `
        <div class="container footer-grid">
            <div>
                <h3>ElitePerf</h3>
                <p>L'expertise sans concession.</p>
                <div style="margin-top: 20px; font-size: 0.85rem; color: #bdc3c7; border-top: 1px solid #486076; padding-top: 15px; line-height: 1.5;">
                    <em>
                    "Ce site est réalisé par un passionné de nutrition sportive. Les avis exprimés ici sont personnels, subjectifs et basés sur mes propres recherches. Je ne suis ni médecin, ni nutritionniste diplômé."
                    </em>
                </div>
            </div>
            <div>
                <h4>Outils</h4>
                <a href="${prefix}simulateur.html">Simulateur</a>
                <a href="${prefix}calculateur.html">Calculateur Calories</a>
                <a href="${prefix}comparatif.html">Comparatif Qualité</a>
            </div>
            <div>
                <h4>Navigation</h4>
                <a href="${prefix}index.html">Accueil</a>
                <a href="${prefix}blog/index.html">Blog</a>
            </div>
            <div>
                <h4>Transparence</h4>
                <p>Nous recommandons Nutripure pour leur traçabilité exemplaire.</p>
                <p style="font-size:0.8rem; margin-top:10px; opacity:0.7; border: 1px dashed #777; padding: 5px; display:inline-block;">Code : MONCODE</p>
            </div>
        </div>
        <div style="text-align:center; background:#1a252f; padding:10px; font-size:0.8rem; color:#7f8c8d; margin-top:30px;">
            &copy; 2024 ElitePerf - En tant que Partenaire Nutripure, je réalise un bénéfice sur les achats remplissant les conditions requises.
        </div>
    `;

    // 4. Injection
    document.querySelector('header').innerHTML = headerHTML;
    document.querySelector('footer').innerHTML = footerHTML;
}