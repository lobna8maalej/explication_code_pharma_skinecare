
const pages = [
    {
        name: "Início",
        path: "documentationBackendBR.html"
    },
    {
        name: "Modelos",
        path: "explication-controllersBR.html"
    },
    {
        name: "Middleware",
        path: "explicationDFbackendBR.html"
    },
    {
        name: "Autenticação",
        path: "documentationAdminBR.html"
    },
    {
        name: "Rotas",
        path: "partie2AdminBR.html"
    },
    {
        name: "Controladores",
        path: "partie3AdminBR.html"
    },
    {
        name: "Serviços",
        path: "partieUserBR.html"
    },
    {
        name: "Serviços",
        path: "dernierPartieFBR.html"
    }
];

const pharma = document.getElementById("pharma");

pharma.innerHTML = `
    <nav class="navbar">

        <div class="navbar-logo">
            <a href="index.html">
                Documentação
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
