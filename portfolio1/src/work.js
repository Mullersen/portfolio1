export default {
    projects: [{
            name: "Tweeter",
            slug: "tweeter",
            image: "tweeter.png",
            id: 1,
            header: "A fake Twitter project",
            description: "Built on Laravel the project leverages the MVC design pattern for the landing pages where the client can tweet and edit/delete own tweets, using a MySQL database. The project has a login feature built with Laravel Auth scaffolding. Additional features like commenting with gifs, integrated with the GIPHY API, liking/unliking tweets, and private messaging are all built with Vue.js with a JSON API backend to minimize immediate loading-time and improve user experience. The project is hosted with a self-configured Apache server.",
            github: "https://github.com/Mullersen/Tweeter",
            website: "https://tweeterproject.tk/",
        },
        {
            name: "Inside Canada",
            slug: "inside-canada",
            image: "insidecanada.png",
            id: 2,
            header: " An e-commerce travel site with client-side buildable addon features",
            description: "The project is built on Laravel, solely with a Vue.js frontend utilizing a JSON API backend and a MySQL database. When the client chooses an addon VUEX is used for state management, and cookies as a means for storing and transferring data to the cart. The website also has an admin feature that uses Axios to delete and add new travel-addons and images using the Laravel Flysystem. The project is hosted with a self-configured Apache server.",
            github: "https://github.com/Mullersen/MVP",
            website: "https://insidecanada.ml/",
        },
        {
            name: "Okotoks Pizza",
            slug: "okotoks-pizza",
            image: "pizza.png",
            id: 3,
            header: "A CSS3 and SASS project for a fake pizza restaurant",
            description: "A project built in vanilla CSS and SASS",
            github: "https://github.com/Mullersen/Okotoks-Pizza",
            website: "https://okotokspizzaproject.ml/",
        },
    ]
}