
const pages = [
    {
        name: "Home",
        path: "documentationBackendENG.html"
    },
    {
        name: "Models",
        path: "explication-controllersENG.html"
    },
    {
        name: "Middleware",
        path: "explicationDFbackendENG.html"
    },
    {
        name: "Authentication",
        path: "documentationAdminENG.html"
    },
    {
        name: "Routes",
        path: "partie2AdminENG.html"
    },
    {
        name: "Controllers",
        path: "explication-controllersENG.html"
    },
    {
        name: "Services",
        path: "partie3AdminENG.html"
    },
    {
        name: "Services",
        path: "dernierPartieFENG.html"
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
