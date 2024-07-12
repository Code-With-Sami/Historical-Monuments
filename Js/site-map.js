let pages = [
    {
        name: 'Home',
        url: 'index.html'
    },
    {
        name: 'About Us',
        url: 'about.html'
    },
    {
        name: 'Historical Monuments',
        url: 'historicalMonuments.html'
    },
    {
        name: 'Seven Wonders',
        url: 'sevenWonders.html'
    },
    {
        name: 'Feedback',
        url: 'feedback.html'
    },
    {
        name: 'Galley',
        url: 'gallery.html'
    },
    {
        name: 'Contact',
        url: 'contact-us.html'
    },
    {
        name: 'Travel With US',
        url: 'travel-with-us.html'
    },
    {
        name: 'Site Map',
        url: 'site-map.html'
    }
];
for(let i = 0; i < pages.length; i++){
    document.querySelector('#pages-link').innerHTML += `
    <div class=" col-12 col-md-4 px-0 px-md-3 px-lg-4 px-xxl-5">
            <ul>
                <li class="map-links"><a class="text-decoration-none map-links" href="${pages[i].url}">${pages[i].name}</a></li>
            </ul>
        </div>
    `
};
let wonders = [
    {
        name: 'Great Wall Of China',
        url: 'wonder.html?id=Wonder-Great-Wall-of-China'
    },{
        name: 'Petra',
        url: 'wonder.html?id=Wonder-Petra'
    },{
        name: 'Christ the Redeemer',
        url: 'wonder.html?id=Wonder-Christ-the-Redeemer'
    },{
        name: 'Machu Picchu',
        url: 'wonder.html?id=Wonder-Machu-Picchu'
    },{
        name: 'Chichen Itza',
        url: 'wonder.html?id=Wonder-Chichen-Itza'
    },{
        name: 'Colosseum',
        url: 'Html/wonder.html?id=Wonder-Colosseum'
    }
];
for(let i = 0; i < wonders.length; i++){
    document.querySelector('#wonders-link').innerHTML += `
    <div class=" col-12 col-md-4 px-0 px-md-3 px-lg-4 px-xxl-5">
            <ul>
                <li class="map-links"><a class="text-decoration-none map-links" href="${wonders[i].url}">${wonders[i].name}</a></li>
            </ul>
        </div>
    `
};
let monuments = [
    {
        name: 'Taj Mahal',
        url: 'monument.html?id=Taj-Mahal'
    },{
        name: 'Great Wall of China',
        url: 'monument.html?id=Great-Wall-of-China'
    },{
        name: 'Machu Picchu',
        url: 'monument.html?id=Machu-Picchu'
    },{
        name: 'Colosseum',
        url: 'monument.html?id=Colosseum'
    },{
        name: 'Pyramids of Giza',
        url: 'monument.html?id=Pyramids-of-Giza'
    },{
        name: 'Stonehenge',
        url: 'monument.html?id=Stonehenge'
    }
    ,{
        name: 'Angkor Wat',
        url: 'monument.html?id=Angkor-Wat'
    }
    ,{
        name: 'Pompeii',
        url: 'monument.html?id=Pompeii'
    }
    ,{
        name: 'Alhambra',
        url: 'monument.html?id=Alhambra'
    }
    ,{
        name: 'Acropolis of Athens',
        url: 'monument.html?id=Acropolis-of-Athens'
    }
    ,{
        name: 'Hagia Sophia',
        url: 'monument.html?id=Hagia-Sophia'
    }
    ,{
        name: 'Chichen Itza',
        url: 'monument.html?id=Chichen-Itza'
    }
    ,{
        name: 'Eiffel Tower',
        url: 'monument.html?id=Eiffel-Tower'
    }
    ,{
        name: 'Parthenon',
        url: 'monument.html?id=Parthenon'
    }
    ,{
        name: 'Borobudur',
        url: 'monument.html?id=Borobudur'
    }
    ,{
        name: 'Statue of Liberty',
        url: 'monument.html?id=Statue-of-Liberty'
    }
    ,{
        name: 'Forbidden City',
        url: 'monument.html?id=Forbidden-City'
    }
    ,{
        name: 'Neuschwanstein Castle',
        url: 'monument.html?id=Neuschwanstein-Castle'
    }
    ,{
        name: 'Tower of London',
        url: 'monument.html?id=Tower-of-London'
    }
    ,{
        name: 'Christ the Redeemer',
        url: 'monument.html?id=Christ-the-Redeemer'
    }
    ,{
        name: 'Sagrada Familia',
        url: 'monument.html?id=Sagrada-Familia'
    }
    ,{
        name: 'Petra',
        url: 'monument.html?id=Petra'
    }
    ,{
        name: 'Kremlin',
        url: 'monument.html?id=Kremlin'
    }
    ,{
        name: 'Moai Statues of Easter Island',
        url: 'monument.html?id=Moai-Statues-of-Easter-Island'
    }
    ,{
        name: 'St Peters Basilica',
        url: 'monument.html?id=St-Peters-Basilica'
    }
    ,{
        name: 'Karnak Temple Complex',
        url: 'monument.html?id=Karnak-Temple-Complex'
    }
    ,{
        name: 'Mount Rushmore',
        url: 'monument.html?id=Mount-Rushmore'
    }
    ,{
        name: 'Leaning Tower of Pisa',
        url: 'monument.html?id=Leaning-Tower-of-Pisa'
    }
    ,{
        name: 'Bagan Temples',
        url: 'monument.html?id=Bagan-Temples'
    }
    ,{
        name: 'Sydney Opera House',
        url: 'monument.html?id=Sydney-Opera-House'
    }
    ,{
        name: 'Mont Saint Michel',
        url: 'monument.html?id=Mont-Saint-Michel'
    }
    ,{
        name: 'Brandenburg Gate',
        url: 'monument.html?id=Brandenburg-Gate'
    }
    ,{
        name: 'Edinburgh Castle',
        url: 'monument.html?id=Edinburgh-Castle'
    }
    ,{
        name: 'Lalibela Churches',
        url: 'monument.html?id=Lalibela-Churches'
    }
    ,{
        name: 'Terracotta Army',
        url: 'monument.html?id=Terracotta-Army'
    }
    ,{
        name: 'Potala Palace',
        url: 'monument.html?id=Potala-Palace'
    }
    ,{
        name: 'Timbuktu',
        url: 'monument.html?id=Timbuktu'
    }
    ,{
        name: 'Persepolis',
        url: 'monument.html?id=Persepolis'
    }
    ,{
        name: 'Great Mosque of Cordoba',
        url: 'monument.html?id=Great-Mosque-of-Cordoba'
    }
    ,{
        name: 'Palmyra',
        url: 'monument.html?id=Palmyra'
    }
    ,{
        name: 'Alcazar of Seville',
        url: 'monument.html?id=Alcazar-of-Seville'
    }
    ,{
        name: 'Tower Bridge',
        url: 'monument.html?id=Tower-Bridge'
    }
    ,{
        name: 'Golden Gate Bridge',
        url: 'monument.html?id=Golden-Gate-Bridge'
    }
    ,{
        name: 'Blue-Mosque',
        url: 'monument.html?id=Blue-Mosque'
    }
    ,{
        name: 'Chartres Cathedral',
        url: 'monument.html?id=Chartres-Cathedral'
    }
];
for(let i = 0; i < monuments.length; i++){
    document.querySelector('#monuments-link').innerHTML += `
    <div class=" col-12 col-md-4 px-0 px-md-3 px-lg-4 px-xxl-5">
            <ul>
                <li class="map-links"><a class="text-decoration-none map-links" href="${monuments[i].url}">${monuments[i].name}</a></li>
            </ul>
        </div>
    `
};
