const pages = [
    {
        name: "Accueil",
        path: "documentationBackend.html"
    },
    {
        name: "Modèles",
        path: "explication-controllers.html"
    },
    {
        name: "Middleware",
        path: "explicationDFbackend.html"
    },
    {
        name: "Authentification",
        path: "documentationAdmin.html"
    },
    {
        name: "Routes",
        path: "partie2Admin.html"
    },
    {
        name: "Contrôleurs",
        path: "partie3Admin.html"
    },
    {
        name: "Services",
        path: "partieUser.html"
    },
    {
        name: "Services",
        path: "dernierPartieF.html"
    }
];

const pharma = document.getElementById("pharma");

pharma.innerHTML = `
    <nav class="navbar">

        <div class="navbar-logo">
            <a href="index.html">
                Documentation
            </a>
        </div>

        <ul class="navbar-links">

            ${pages.map(page => `
                <li>
                    <a href="${page.path}">
                        ${page.name}
                    </a>
                </li>
            `).join("")}

        </ul>

    </nav>
`;