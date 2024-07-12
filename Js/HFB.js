// Navbar
document.getElementById("nav-placeholder").innerHTML += `
<!-- Nav Bar -->

    <div class="container-fluid">

        <!-- Logo -->

        <a href="index.html"><img src="Assets/Logo/historical-monument-logo-3.png" alt="historical Monuments"></a>

        <!--  Toggle Button For Mobile Devices-->

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!--  Navigation Menu -->

        <div class="collapse navbar-collapse " id="navbarNav">
            <ul id="navbarUl" class="navbar-nav mx-auto gap-2">
                <li class="nav-item nav-typo">
                    <a class="nav-link " aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item nav-typo">
                    <a class="nav-link "  href="about.html">About</a>
                </li>
                <li class="nav-item nav-typo">
                    <a class="nav-link" href="historicalMonuments.html">Monuments</a>
                </li>
                <li class="nav-item nav-typo">
                    <a class="nav-link" href="sevenWonders.html">Seven Wonders</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        feedback
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="feedback.html">FeedBack</a></li>
                      <li><a class="dropdown-item" href="travel-with-us.html">Travel With Us</a></li>
                    </ul>
                  </li>
                <!-- <li class="nav-item nav-typo">
                    <a class="nav-link" href="feedback.html">feedback</a>
                </li> -->
                <li class="nav-item nav-typo">
                    <a class="nav-link" href="site-map.html">Site Map</a>
                </li>
                <li class="nav-item nav-typo">
                    <a class="nav-link" href="gallery.html">Gallery</a>
                </li>
                <!-- Contact icon For small  devices -->
                <li class="nav-item nav-typo contact-icon d-none">
                    <a class="nav-link" href="contact-us.html"><i class="fa-solid fa-phone"
                            style="color: var(--harvesBlessing);"></i></a>
                </li>
            </ul>

            <!-- Contact - Btn -->

            <a href="contact-us.html">
                <button class="btn nav-contact-btn nav-typo" src="contact-us.html">Contact Us</button>
            </a>

        </div>
    </div>
<!-- End Navbar -->
`

// Footer 
document.getElementById("footerPlaceholder").innerHTML += `
<!-- Footer Start -->
<div
    class="footer-logo container mx-auto mb-5 text-center d-md-flex flex-row justify-content-center align-items-center">

    <div class="w-100 line"></div>

    <div class="w-50">
        <img src="Assets/Logo/historical-monument-logo-3.png" alt="" height="65" class="mx-3">
    </div>

    <div class="w-100 line"></div>

</div>

<div class="footer-container container row mx-auto py-3 my-5">
    <div class="col col-md-3 py-3 py-lg-0">
        <img src="Assets/Logo/historical-monument-logo-3.png    " alt="" class="mb-4 footer-about-img">
        <h2 class="footer-heading d-none footer-about-heading">Historical Monument</h2>
        <p class="footer-text text-content">
            Hiatorical Monuments is a non-profit organization that aims to promote the preservation and
            appreciation of the world's most iconic historical monuments.
        </p>
    </div>

    <div class="col col-md-3 py-3">
        <h3 class="footer-heading">Monuments</h3>
        <ul class="mt-4">
            <li class=""><a href="monument.html?id=Persepolis"
                    class="text-decoration-none map-links">Persepolis</a></li>
            <li class=""><a href="monument.html?id=Sigiriya"
                    class="text-decoration-none map-links">Sigiriya</a></li>
            <li class=""><a href="monument.html?id=Palmyra"
                    class="text-decoration-none map-links">Palmyra</a></li>
            <li class=""><a href="monument.html?id=Tower-Bridge"
                    class="text-decoration-none map-links">Tower Bridge</a></li>
            <li class=""><a href="monument.html?id=Alcazar-of-Seville"
                    class="text-decoration-none map-links">Alcázar of Seville</a></li>
            <li class=""><a href="monument.html?id=Blue-Mosque"
                    class="text-decoration-none map-links">Blue Mosque</a></li>
            <li class=""><a href="monument.html?id=Timbuktu"
                    class="text-decoration-none map-links">Timbuktu</a></li>
            <li class=""><a href="monument.html?id=Potala-Palace"
                    class="text-decoration-none map-links">Potala Palace</a></li>
            <li class=""><a href="monument.html?id=Terracotta-Army"
                    class="text-decoration-none map-links">Terracotta Army</a></li>
            <li class=""><a href="monument.html?id=Mount-Rushmore"
                    class="text-decoration-none map-links">Mount Rushmore</a></li>
        </ul>
    </div>

    <div class="col col-md-3 py-3">
        <h3 class="footer-heading">Wonders</h3>
        <ul class="mt-4">
            <li class=""><a href="wonder.html?id=Wonder-Petra"
                    class="text-decoration-none map-links">Petra</a></li>
            <li class=""><a href="wonder.html?id=Wonder-Machu-Picchu"
                    class="text-decoration-none map-links">Machu Pichu</a></li>
            <li class=""><a href="wonder.html?id=Wonder-Great-Wall-of-China"
                    class="text-decoration-none map-links">Great Wall Of China</a></li>
            <li class=""><a href="wonder.html?id=Wonder-Christ-the-Redeemer"
                    class="text-decoration-none map-links">Christ The Remember</a></li>
            <li class=""><a href="wonder.html?id=Wonder-Colosseum"
                    class="text-decoration-none map-links">Colleseum</a></li>
        </ul>
    </div>

    <div class="col col-md-3 py-3">
        <h3 class="footer-heading">Links</h3>
        <ul class="mt-4">
            <li class=""><a href="about.html" class="text-decoration-none map-links">About Us</a></li>
            <li class=""><a href="historicalMonuments.html" class="text-decoration-none map-links">Historical
                    Monuments</a></li>
            <li class=""><a href="sevenWonders.html" class="text-decoration-none map-links">Seven wonders</a>
            </li>
            <li class=""><a href="travel-with-us.html" class="text-decoration-none map-links">Travel With Us</a>
            </li>
            <li class=""><a href="feedback.html" class="text-decoration-none map-links">feedback</a></li>
            <li class=""><a href="site-map.html" class="text-decoration-none map-links">Site Map</a></li>
            <li class=""><a href="gallery.html" class="text-decoration-none map-links">Gallery</a></li>
            <li class=""><a href="contact-us.html" class="text-decoration-none map-links">Contact Us</a></li>
        </ul>
    </div>


</div>

<div class="footer-copyright container mx-auto d-flex flex-column justify-content-center align-items-center ">

    <div class="w-100 line"></div>

    <div class="w-100 mt-5 mb-4">
        <p class="text-content text-center">Copyright &#169; 2024 | Historical Monuments | All Rights Reserved</p>
    </div>

</div>
<!-- Footer End -->
`