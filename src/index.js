// Temporary imports for testing
import nftData from '../meta.geojson' assert {type: 'json'};

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/b454cb32e4.js" crossorigin="anonymous"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="/dist/output.css" rel="stylesheet">
        </head>
        <body>
            <nav class="bg-teal-600 shadow-md">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <!-- Mobile menu button-->
                            <button type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex items-center text-black">
                                <div class="block lg:hidden">
                                    <a href=""><i class="fa-solid fa-dragon text-white fa-2xl"></i> Blillow</a>
                                </div>                                
                                <div class="hidden lg:block">
                                    <a href=""><i class="fa-solid fa-dragon text-white fa-2xl"></i></a>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                    <a href="/src/dashboard.html" class="activeLink text-white px-3 py-2 rounded-md text-sm font-medium home-links"
                                        aria-current="page">Dashboard</a>

                                    <a href="#" class="notactive text-white px-3 py-2 rounded-md text-sm font-medium home-links">Team</a>

                                    <a href="#"
                                        class="notactive px-3 py-2 text-white rounded-md text-sm font-medium home-links">Projects</a>

                                    <a href="/src/createNFT.html"
                                        class="notactive px-3 py-2 text-white rounded-md text-sm font-medium home-links">Sell NFT</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button"
                                class="bg-gray-800 p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span class="sr-only">View notifications</span>
                                <!-- Heroicon name: outline/bell -->
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>

                            <!-- Profile dropdown -->
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button"
                                        class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="">
                                    </button>
                                </div>

                                <div id="profile_button"
                                    class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                        id="user-menu-item-0">Your Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                        id="user-menu-item-1">Settings</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                        id="user-menu-item-2">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile menu, show/hide based on menu state. -->
                <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page">Dashboard</a>

                        <a href="#"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                        <a href="#"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                        <a href="#"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
        </body>
        </html>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/b454cb32e4.js" crossorigin="anonymous"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="/dist/output.css" rel="stylesheet">
        </head>
        
        <body class="bg-gray-200">
            <footer class="bottom-0 left-0 right-0 ">
                <div class="p-3 bg-teal-600 text-gray-200">
                    <div class="max-w-7xl mx-auto">
                        <div class="hidden sm:block" aria-hidden="true">
                            <div class="py-5">
                                <div class="border-t border-gray-200"></div>
                            </div>
                        </div>
        
                        <!-- Needs work -->
                        <div class="flex flex-col">
                            <div class="mb-5 m-auto p-auto">
                                <ul class="flex flex-wrap text-center">
                                    <li class="ml-0 md:ml-7 grow"><a href="">About</a></li>
                                    <li class="ml-6 md:ml-7 grow"><a href="">Blogs</a></li>
                                    <li class="ml-6 md:ml-7 grow"><a href="">Career</a></li>
                                    <li class="ml-8 md:ml-7 grow"><a href="">Accesibility</a></li>
                                    <li class="ml-6 md:ml-7 grow"><a href="">Partners</a></li>
                                </ul>
                            </div>
        
                            <div class="mb-5 text-center">
                                <a target="_blank" href="https://facebook.com"><i class="fa-brands fa-facebook fa-lg"></i></a>
                                <a target="_blank" href="https://instagram.com"><i class="ml-7 fa-brands fa-instagram fa-lg"></i></a>
                                <a target="_blank" href="https://twitter.com"><i class="ml-7 fa-brands fa-twitter fa-lg"></i></a>
                                <a target="_blank" href="https://github.com"><i class="ml-7 fa-brands fa-github fa-lg"></i></a>
                                <a target="_blank" href="https://linkedin.com"><i class="ml-7 fa-brands fa-linkedin fa-lg"></i></a>
                            </div>
        
                            <div class="text-center">
                                © Blillow, Inc. All rights reserved.
                            </div>
                        </div>
        
                    </div>
                </div>
                </div>
            </footer>
        </body>
        
        </html>`
    }
}

window.customElements.define('app-navbar', Navbar);
window.customElements.define('app-footer', Footer);

// Navbar 
const userButton = document.getElementById('user-menu-button');
const profileButton = document.getElementById('profile_button');

userButton.addEventListener("click", function (e) {
    window.removeEventListener("mouseup", function (e) { });
    profileButton.classList.toggle("hidden");
});

window.addEventListener("mouseup", function (e) {
    if (e.target != userButton && e.target.parentNode != userButton) {
        profileButton.classList.add("hidden");
    }
})

// Toggle links from active to notactive
const navLinks = document.querySelectorAll('.home-links');
for (const link of navLinks) {
    link.addEventListener("click", function () {
        navLinks.forEach(links => {
            links.classList.remove('activeLink');
            links.classList.add('notactive');
        })

        this.classList.add('activeLink');
    })
}

if (document.body.classList.contains('dashboard')) {
    // NFT card list
    const nftCard = nftData['features'];

    class Card extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <!doctype html>
            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style.css">
                <script src="https://kit.fontawesome.com/b454cb32e4.js" crossorigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="/dist/output.css" rel="stylesheet">
            </head>
            <body>
                <div class="flex-1 basis-1 justify-center mt-8 overflow-inherit">
                    <div class="flex-1">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm transition ease-in-out delay-150 hover:scale-110">
                            <a href="#!" class="nft-info">
                                <div class="h-52 w-auto"><img class="nft-img-info rounded-t-lg h-full w-full object-cover" src="${nftCard[i].properties.img}" alt="nft" /></div>
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-bold mb-2" id="nft-name">${nftCard[i].properties.title}</h5>
                                <p class="text-purple-600 text-base font-medium" id="nft-description">
                                    ${nftCard[i].properties.description}
                                </p>
                                <p class="text-gray-700 text-base mb-2" id="nft-real-address">
                                    ${nftCard[i].properties.home_address}
                                </p>

                                <div class="flex flex-row justify-start">
                                    <div class="mr-1"><span class="text-3xl font-bold" id="price">${nftCard[i].properties.price}</span></div>
                                    <div class="flex items-center"><i class="fa-brands fa-ethereum fa-xl"></i></div>
                                </div>

                                <div class="flex flex-row justify-start mt-2">
                                    <button
                                        class="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed mr-2 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Move</button>
                                    <button
                                        class="px-6 py-2.5 bg-purple-600 text-white text-base font-medium leading-tight rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
    `
        }
    }

    window.customElements.define("nft-card", Card);

    // To create multiple available nft cards as long as there is more JSON data.
    for (var i in nftCard) {
        const newCard = document.createElement("nft-card");
        const nftList = document.getElementById("nft-available-list");
        nftList.appendChild(newCard);
    }

    // Create nft bidding cards
    for (var i in nftCard) {
        const newCard = document.createElement("nft-card");
        const nftList = document.getElementById("nft-bidding-list");
        nftList.appendChild(newCard);
    }

    // Renders Map
    mapboxgl.accessToken = '<Your_Key>';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [-74.5, 40],
        zoom: 3
    });

    // Create Markers
    // Temporary Token ID 
    let tokenID = 0;
    nftCard.forEach(data => {
        data.properties.id = tokenID;
        tokenID++;
    })

    // Generate points on map
    map.on('load', () => {
        /* Add the data to your map as a layer */
        map.addLayer({
            id: 'locations',
            type: 'circle',
            /* Add a GeoJSON source containing place coordinates and information. */
            source: {
                type: 'geojson',
                data: nftData
            }
        });
    });

    function flyToLocation(nft) {
        map.flyTo({
            center: nft.geometry.coordinates,
            zoom: 15
        });
    }


    function createPopUp(nftCard) {
        const popUps = document.getElementsByClassName('mapboxgl-popup mapboxgl-popup-anchor-bottom');

        // This is not detecting popUps
        if (popUps[0]) {
            popUps[0].remove();
        }

        const popup = new mapboxgl.Popup()
            .setLngLat(nftCard.geometry.coordinates)
            .setHTML(`<h3>Sweetgreen</h3><h4>${nftCard.properties.description}</h4>`)
            .addTo(map);


    }

    const nftMapInfo = document.getElementsByClassName('nft-info');
    const nftMapImgInfo = document.getElementsByClassName('nft-img-info');

    for (let i = 0; i < nftMapInfo.length; i++) {
        nftMapInfo[i].addEventListener("click", function () {

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

            nftCard.forEach(data => {
                if (data.properties.img === nftMapImgInfo[i].getAttribute('src')) {
                    flyToLocation(data);
                    createPopUp(data);
                }
            });

        })
    }

    // Dropdown Filters
    const bbButton = document.getElementById("bbButton")
    const bbdropdown = document.getElementById("bb_dropdown");

    bbButton.addEventListener("click", function () {
        bbdropdown.classList.toggle("hidden");
        priceDropdown.classList.add("hidden");
        homeStyleDropdown.classList.add("hidden");
        moreDropdown.classList.add("hidden");
    })

    const priceBtn = document.getElementById("priceBtn");
    const priceDropdown = document.getElementById("price_dropdown");

    priceBtn.addEventListener("click", function () {
        priceDropdown.classList.toggle("hidden");
        bbdropdown.classList.add("hidden");
        homeStyleDropdown.classList.add("hidden");
        moreDropdown.classList.add("hidden");

    })

    const homeStyleBtn = document.getElementById("homeStyleBtn");
    const homeStyleDropdown = document.getElementById("homeStyleDropdown");

    homeStyleBtn.addEventListener("click", function () {
        homeStyleDropdown.classList.toggle("hidden");
        priceDropdown.classList.add("hidden");
        bbdropdown.classList.add("hidden");
        moreDropdown.classList.add("hidden");

    })

    // Home style select/deselect
    let selectAllbtn = document.getElementById("selectAllbtn");
    let selectAll = document.getElementById("selectAll");

    const select = () => {
        let choices = document.querySelectorAll(".home-choices");
        for (let i = 0; i < choices.length; i++) {
            choices[i].checked = true;
        }
    }

    const deselect = () => {
        let choices = document.querySelectorAll(".home-choices");
        for (let i = 0; i < choices.length; i++) {
            choices[i].checked = false;
        }
    }

    selectAllbtn.addEventListener("click", function () {

        switch (selectAllbtn.checked) {
            case (true):
                select();
                selectAll.innerHTML = "Deselect All";
                break;
            case (false):
                deselect();
                selectAll.innerHTML = "Select All";
        }
    })

    const moreBtn = document.getElementById("moreBtn");
    const moreDropdown = document.getElementById("moreDropdown");

    moreBtn.addEventListener("click", function () {
        if (window.innerWidth > 767) {
            moreDropdown.classList.toggle("hidden");
            priceDropdown.classList.add("hidden");
            homeStyleDropdown.classList.add("hidden");
            bbdropdown.classList.add("hidden");
        }
    })
}

if (document.body.classList.contains("createNFT")) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaXZldHRlbWFyaWU5NyIsImEiOiJjbDNjMHB4ODYwM204M2RwYXF2bHh2c3JxIn0.qk5Frp812nC_HH1thoOQJA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [-74.5, 40],
        zoom: 3
    });

    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];

    const selectCountry = document.getElementById("country");

    countryList.forEach(country => {
        let option = document.createElement("option");
        option.value = country;
        option.text = country;
        selectCountry.appendChild(option);
    })

    const nftSetPrice = document.getElementById("nft-setPrice");
    const setPrice = document.getElementById("setPrice");

    nftSetPrice.addEventListener("click", function () {
        setPrice.classList.toggle("hidden");
    })

}
