
const pages = [
    {
        name: "Inicio",
        path: "documentationBackendES.html"
    },
    {
        name: "Modelos",
        path: "explication-controllersES.html"
    },
    {
        name: "Middleware",
        path: "explicationDFbackendES.html"
    },
    {
        name: "Autenticación",
        path: "documentationAdminES.html"
    },
    {
        name: "Rutas",
        path: "partie2AdminES.html"
    },
    {
        name: "Controladores",
        path: "partie3AdminES.html"
    },
    {
        name: "Servicios",
        path: "partieUserES.html"
    },
    {
        name: "Servicios",
        path: "dernierPartieFES.html"
    }
];

const pharma = document.getElementById("pharma");

pharma.innerHTML = `
    <nav class="navbar">

        <div class="navbar-logo">
            <a href="index.html">
                Documentación
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
