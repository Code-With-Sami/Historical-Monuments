// Zones Category
let zones = ["north", "south", "east", "west"];

// Array Of Object - Historical Monuments
let monuments = [
    {
        id: "Taj-Mahal",

        img: "Assets/Images/taj-mehal-1.jpeg",
        imgTwo: "Assets/Images/taj-mehal-2.jpg",
        imgThree: "Assets/Images/architecture-3.jpg",
        imgFour: "Assets/Images/architecture-2.jpg",
        imgFive: "Assets/Images/construction-5.jpg",

        name: "Taj Mahal",
        location: "India",
        built: "1632-1653",
        excerpt: "The Taj Mahal is a UNESCO World Heritage Site and is considered one of the most beautiful buildings in the world, renowned for its architectural magnificence and symbolism of love.",

        subHeadingOne: "The Taj Mahal was commissioned by Shah Jahan",
        subHeadingTwo: "Architecture and design",
        subHeadingThree: "Construction of the taj mehal",

        headingOne: "Inspiration",
        headingTwo: "Tourism",
        headingThree: "Architecture",
        headingFour: "Construction",

        contentParaOne: `The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. <br> <br> The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2023 would be approximately ₹35 billion (US$498 million).[8] The construction project employed some 20,000 artisans under the guidance of a board of architects led by Ustad Ahmad Lahori, the emperor's court architect. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.`,

        contentParaTwo: `The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory
        of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child,
        Gauhara Begum.[14][15] Construction started in 1632,[16] and the mausoleum was completed in 1648,
        while the surrounding buildings and garden were finished five years later.[17] The imperial court
        documenting Shah Jahan's grief after the death of Mumtaz Mahal illustrates the love story held as
        the inspiration for the Taj Mahal.[18] According to contemporary historians Muhammad Amin Qazvini,
        Abdul Hamid Lahori and Muhammad Saleh Kamboh, he did not show the same level of affection to others
        as he had shown her while she was alive. He avoided royal affairs for a week due to his grief, along
        with giving up listening to music and dressing lavishly for two years. Shah Jahan was enamored by
        the beauty of the land at the south side of Agra on which a mansion belonging to Raja Jai Singh I
        stood. This place was chosen for the construction of Mumtaz's tomb by Shah Jahan and Jai Singh
        agreed to donate it to the emperor.[19]`,

        contentParaThree: `The Taj Mahal attracts a large number of tourists. UNESCO documented
        more than 2 million visitors in 2001,[81] which had increased to about 7–8 million in 2014.[82]
        A three-tier pricing system is in place, with a significantly lower entrance fee for Indian
        citizens and more expensive ones for foreigners. As of 2022, the fee for Indian citizens was
        ₹50, for citizens of SAARC and BIMSTEC countries, it was ₹540 and for other foreign tourists, it
        was ₹1,100.[83] Most tourists visit in the cooler months of October, November and February.
        Polluting traffic is not allowed near the complex and tourists must either walk from parking
        areas or catch an electric bus. The Khawasspuras (northern courtyards) are currently being
        restored for use as a new visitor centre.[84][85] In 2019, to address overtourism, the site
        instituted fines for visitors who stayed longer than three hours.[86] <br><br> The small town to the south of the Taj, known as Taj Ganji or
        Mumtazabad, was initially constructed with caravanserais, bazaars and markets to serve the needs
        of visitors and workers.[87] Lists of recommended travel destinations often feature the Taj
        Mahal, which also appears in several listings of seven wonders of the modern world, including
        the recently announced New Seven Wonders of the World, a recent poll with 100 million votes.[88] <br><br> The grounds are open from 06:00 to 19:00 hours on weekdays, except on
        Friday when the complex is open for prayers at the mosque between 12:00 and 14:00 hours. The
        complex is open for night viewing on the day of the full moon and two days before and after,[89]
        excluding Fridays and the month of Ramadan.  `,

        contentParaFour: `The Taj Mahal incorporates and expands on design traditions of Indo-Islamic and earlier Mughal architecture. Specific inspiration came from successful Timurid and Mughal buildings including the Gur-e Amir (the tomb of Timur, progenitor of the Mughal dynasty, in Samarkand),[20] Humayun's Tomb which inspired the Charbagh gardens and hasht-behesht (architecture) plan of the site, Itmad-Ud-Daulah's Tomb (sometimes called the Baby Taj), and Shah Jahan's own Jama Masjid in Delhi. While earlier Mughal buildings were primarily constructed of red sandstone, Shah Jahan promoted the use of white marble inlaid with semi-precious stones. Buildings under his patronage reached new levels of refinement.[21]`,

        contentParaFive: `The Taj Mahal is situated to the south of the walled city of Agra. Shah Jahan presented Maharaja Jai Singh I with a large palace in the centre of Agra in exchange for the land.[49] An area of roughly 1.2 hectares (3 acres) was excavated, filled with dirt to reduce seepage, and levelled at 50 metres (160 ft) above the riverbank level. In the tomb area, piles were dug and filled with stone and rubble to form the footings of the tomb. Instead of lashed bamboo, workmen constructed a colossal brick scaffold that mirrored the tomb. The scaffold was so enormous that foremen expected it to take years to dismantle.[50]`,

        pdf: "Assets/Monuments - pdf/Taj Mehal.pdf",

        zone: zones[1]
    },
    {
        id: "Great-Wall-of-China",

        img: "Assets/Images/great-wall-of-china-1.jpeg",
        imgTwo: "Assets/Images/great-wall-of-china-3.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/protection-2.jpg",
        imgFive: "Assets/Images/great-wall-of-china-1.jpeg",

        name: "Great Wall of China",
        location: "China",
        built: "7th century",
        excerpt: "Extending over 21,196 kilometers (13,170 miles), the Great Wall of China is one of the most impressive architectural feats in history, built to protect China from invasions by various nomadic groups.",

        subHeadingOne: "History of the Great Wall of China",
        subHeadingTwo: "A Symbol of Protection and Defense",
        subHeadingThree: "Preserving a World Heritage",

        headingOne: "History",
        headingTwo: "Names",
        headingThree: "Protection",
        headingFour: "World Heritage",

        contentParaOne: `The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng, literally "ten thousand li long wall") is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC,[4] with selective stretches later joined by Qin Shi Huang (220-206 BC), the first emperor of China. Little of the Qin wall remains.[5] Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368-1644). <br><br> Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, regulation or encouragement of trade and the control of immigration and emigration.`,

        contentParaTwo: `The history of the Great Wall of China began when fortifications built by various states during the Spring and Autumn (771–476 BC)[1] and Warring States periods (475–221 BC) were connected by the first emperor of China, Qin Shi Huang, to protect his newly founded Qin dynasty (221–206 BC) against incursions by nomads from Inner Asia. The walls were built of rammed earth, constructed using forced labour, and by 212 BC ran from Gansu to the coast of southern Manchuria. <br> <br> Later dynasties adopted different policies towards northern frontier defense. The Han (202 BC – 220 AD), the Northern Qi (550–574), the Jurchen-ruled Jin (1115–1234), and particularly the Ming (1369–1644) were among those that rebuilt, re-manned, and expanded the Walls, although they rarely followed Qin's routes. The Han extended the fortifications furthest to the west, the Qi built about 1,600 kilometres (990 mi) of new walls, while the Sui mobilised over a million men in their wall-building efforts. Conversely, the Tang (618–907), the Song (960–1279), the Yuan (1271–1368), and the Qing (1644–1912) mostly did not build frontier walls, instead opting for other solutions to the Inner Asian threat like military campaigning and diplomacy.`,

        contentParaThree: `The collection of fortifications known as the Great Wall of China has historically had a number of different names in both Chinese and English. <br> <br> In Chinese histories, the term "Long Wall(s)" (t 長城, s 长城, Chángchéng) appears in Sima Qian's Records of the Grand Historian, where it referred both to the separate great walls built between and north of the Warring States and to the more unified construction of the First Emperor.[9] The Chinese character 城, meaning city or fortress, is a phono-semantic compound of the "earth" radical 土 and phonetic 成, whose Old Chinese pronunciation has been reconstructed as *deŋ.[10] It originally referred to the rampart which surrounded traditional Chinese cities and was used by extension for these walls around their respective states; today, however, it is much more often the Chinese word for "city".[11] <br> <br> The longer Chinese name "Ten-Thousand Mile Long Wall" (t 萬里長城, s 万里长城, Wànlǐ Chángchéng) came from Sima Qian's description of it in the Records, though he did not name the walls as such. The AD 493 Book of Song quotes the frontier general Tan Daoji referring to "the long wall of 10,000 miles", closer to the modern name, but the name rarely features in pre-modern times otherwise.[12] The traditional Chinese mile (里, lǐ) was an often irregular distance that was intended to show the length of a standard village and varied with terrain but was usually standardized at distances around a third of an English mile (540 m).[13]`,

        contentParaFour: `At its core, the Great Wall was designed as a defensive fortification against invading forces. Towers and ramparts dot its length, providing strategic vantage points for soldiers to keep watch. The Wall's sheer magnitude was meant to dissuade potential invaders and hinder their progress, making it one of the most ambitious defensive structures in history. <br> <br> As one traverses the Wall, they encounter a stunning array of architectural styles. In some sections, the Wall is made of brick and stone, meticulously crafted and engineered. Other parts showcase the use of tamped earth, a technique where layers of earth and materials were compressed to create a solid barrier. The Wall's design adapted to the landscape, blending seamlessly with the natural contours of the land.`,

        contentParaFive: `Today, the Great Wall of China is not just a Chinese treasure but a global one. Recognized as a UNESCO World Heritage site, it serves as a reminder of the ingenuity and determination of the ancient Chinese civilizations. Efforts to preserve this wonder for future generations are ongoing, ensuring that this symbol of history and resilience will continue to stand tall against the test of time. <br> <br> Walking along the Great Wall is akin to stepping back in time. Each brick, each stone, holds within it centuries of history. It witnessed the rise and fall of dynasties, the passage of emperors, and the lives of countless soldiers who once patrolled its battlements. `,

        pdf: "Assets/Monuments - pdf/Great Wall of China.pdf",

        zone: zones[0]
    },
    {
        id: "Machu-Picchu",

        img: "Assets/Images/machu-picchu-1.jpeg",
        imgTwo: "Assets/Images/machu-picchu-2.jpg",
        imgThree: "Assets/Images/machu-picchu-2.jpg",
        imgFour: "Assets/Images/machu-picchu-3.jpg",
        imgFive: "Assets/Images/spanish.jpg",

        name: "Machu Picchu",
        location: "Peru",
        built: "Mid-15th century",
        excerpt: "Machu Picchu is an ancient Inca citadel situated in the Andes Mountains, known for its sophisticated dry-stone walls and panoramic views.",

        subHeadingOne: `In the Quechua language, machu means "old" or "old person"`,
        subHeadingTwo: "Daily life in Machu Picchu",
        subHeadingThree: "Encounters with Westerners",

        headingOne: "Etymology",
        headingTwo: "History",
        headingThree: "Ancient life",
        headingFour: "Spanish conquest",

        contentParaOne: `Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge.[2][3] Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province[4] above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.[5] In reference to the site's name, for most English or Spanish speakers, the first 'c' in Picchu is silent. In English, the name is pronounced /ˌmɑːtʃuː ˈpiːtʃuː/ MAH-choo PEE-choo[6][7] or /ˌmætʃuː ˈpiːktʃuː/ MATCH-oo PEAK-choo,[7][8] in Spanish as [ˈmatʃu ˈpitʃu] or [ˈmatʃu ˈpiɣtʃu],[9] and in Quechua (Machu Pikchu)[10] as [ˈmatʃʊ ˈpɪktʃʊ].`,

        contentParaTwo: `In the Quechua language, machu means "old" or "old person", while picchu means "pyramid; pointed, multi-sided solid; cone," though it may also refer to a "portion of coca that is chewed."[17] Thus the name of the site is sometimes interpreted as "old mountain".[18] The site is on a narrow saddle between two mountain peaks: Machu Picchu and Huayna Picchu.[19] <br> <br> A study published in 2021 in Ñawpa Pacha: Journal of the Institute of Andean Studies suggests that, in the Quechua language, the abandoned Inca site was called "Huayna Picchu", after the smaller peak at the site, or perhaps, just "Picchu". Huayna means "young" in the Quechua language. The research documents that, starting in 1911 with the publications of American historian and explorer Hiram Bingham, the name Machu Picchu became associated with the ruins.[14][20] <br><br> Evidence of references by native Quechua speakers dating to their reports to the Aziz's island, early maps, and even discussions with Bingham, is cited in the new research into historical records regarding an apparently arbitrary selection of the name Bingham associated with the site—that differed from the traditional name.[21]`,

        contentParaThree: `Machu Picchu was previously believed (by Richard L. Burger, professor of anthropology at Yale University) to have been built in the 1450s.[22] However, a 2021 study led by Burger used radiocarbon dating (specifically, AMS) to reveal that Machu Picchu may have been occupied from around 1420 to 1530 AD.[23][24] Construction appears to date from two great Inca rulers, Pachacutec Inca Yupanqui (1438–1471) and Túpac Inca Yupanqui (1472–1493). <br><br> A consensus among archaeologists is that Pachacutec ordered the construction of the royal estate for his use as a retreat, most likely after a successful military campaign. Although Machu Picchu is considered to be a "royal" estate, it would not have been passed down in the line of succession. Rather it was used for 80 years before being abandoned, seemingly because of the Spanish conquests in other parts of the Inca Empire.[22] It is possible that most of its inhabitants died from smallpox introduced by travelers before the Spanish conquistadors even arrived in the area.[27]`,

        contentParaFour: `During its use as an estate, it is estimated that about 750 people lived there, with most serving as support staff (yanaconas, yana)[28][page needed][29] who lived there permanently. Though the estate belonged to Pachacutec, religious specialists and temporary specialized workers (mayocs) lived there as well, most likely for the ruler's well-being and enjoyment. During the harsher season, staffing was reduced to about one hundred servants and a few religious specialists focused on maintenance alone.[28][page needed] <br> <br> Studies show that, according to their skeletal remains, most people who lived there were immigrants from diverse backgrounds. They lacked the chemical markers and osteological markers they would have if they had been living there their entire lives. Instead, research into skeletal remains has found bone damage from various species of water parasites indigenous to different areas of Peru. There were also varying osteological stressors and varying chemical densities suggesting varying long-term diets characteristic of specific regions that were spaced apart.[30] These diets are composed of varying levels of maize, potatoes, grains, legumes, and fish, but the last-known short-term diet for these people was overall composed of less fish and more corn. `,

        contentParaFive: `In the late 16th century, Spaniards who had recently gained control of the area documented that indigenous individuals mentioned returning to "Huayna Picchu", the name that is believed to be originally given to the site by locals.[14] The Spanish conquistador Baltasar de Ocampo had notes of a visit during the end of the 16th century to a mountain fortress called Pitcos with sumptuous and majestic buildings, erected with great skill and art, all the lintels of the doors, as well the principal as the ordinary ones, being of marble and elaborately carved.[40]`,

        pdf: "Assets/Monuments - pdf/Machu Picchu.pdf",

        zone: zones[1]
    },
    {
        id: "Colosseum",

        img: "Assets/Images/colosseum-1.jpeg",
        imgTwo: "Assets/Images/colosseum-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/colosseum-2.jpg",
        imgFive: "Assets/Images/construction-4.jpg",

        name: "Colosseum",
        location: "Italy",
        built: "AD 70-80",
        excerpt: "The Colosseum is an iconic symbol of Imperial Rome and is the largest ancient amphitheater ever built. It could hold up to 80,000 spectators.",

        subHeadingOne: "Construction, inauguration, and Roman renovations",
        subHeadingTwo: "During the 16th and 17th century",
        subHeadingThree: "Restoration in 2011",

        headingOne: "History",
        headingTwo: "Medieval",
        headingThree: "Modern",
        headingFour: "Restoration",

        contentParaOne: `The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72[1] and was completed in AD 80 under his successor and heir, Titus (r. 79–81).[2] Further modifications were made during the reign of Domitian (r. 81–96).[3] The three emperors who were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aɱfiteˈaːtro ˈflaːvjo]) by later classicists and archaeologists for its association with their family name (Flavius). <br> <br> The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete. It could hold an estimated 50,000 to 80,000 spectators at various points in its history,[4][5] having an average audience of some 65,000;[6] it was used for gladiatorial contests and public spectacles including animal hunts, executions, re-enactments of famous battles, and dramas based on Roman mythology, and briefly mock sea battles.`,

        contentParaTwo: `The site chosen was a flat area on the floor of a low valley between the Caelian, Esquiline and Palatine Hills, through which a canalised stream ran as well as an artificial lake/marsh.[21] By the 2nd century BC the area was densely inhabited. It was devastated by the Great Fire of Rome in 64 AD, following which Nero seized much of the area to add to his personal domain. He built the grandiose Domus Aurea on the site, in front of which he created an artificial lake surrounded by pavilions, gardens and porticoes. The existing Aqua Claudia aqueduct was extended to supply water to the area and the gigantic bronze Colossus of Nero was set up nearby at the entrance to the Domus Aurea.[20] <br> <br> Although the Colossus was preserved, much of the Domus Aurea was torn down. The lake was filled in and the land reused as the location for the new Flavian Amphitheatre. Gladiatorial schools and other support buildings were constructed nearby within the former grounds of the Domus Aurea. Vespasian's decision to build the Colosseum on the site of Nero's lake can be seen as a populist gesture of returning to the people an area of the city which Nero had appropriated for his own use. In contrast to many other amphitheatres, which were on the outskirts of a city, the Colosseum was constructed in the city centre, in effect, placing it both symbolically and geographically at the heart of Rome.`,

        contentParaThree: `The Colosseum underwent several radical changes of use. By the late 6th century a small chapel had been built into the structure of the amphitheater, though this apparently did not confer any particular religious significance on the building as a whole. The arena was converted into a cemetery. The numerous vaulted spaces in the arcades under the seating were converted into housing and workshops, and are recorded as still being rented out as late as the 12th century. Around 1200 the Frangipani family took over the Colosseum and fortified it, apparently using it as a castle. In the early to mid 14th century, the Pope's relocation to Avignon caused a population decline in Rome that left the region insecure. The colosseum was largely abandoned by the public and became a popular den for bandits.[28] <br><br> Severe damage was inflicted on the Colosseum by the great earthquake in 1349, causing the outer south side, lying on a less stable alluvial terrain, to collapse. Much of the tumbled stone was reused to build palaces, churches, hospitals and other buildings elsewhere in Rome. In 1377, after the Pope's return to Rome, the Colosseum was restored by a religious order called Arciconfraternita del SS. Salvatore ad Sancta Sanctorum, who then inhabited a northern portion of it until as late as the early 19th century.[29][30] The interior of the amphitheater was extensively stripped of stone, which was reused elsewhere, or (in the case of the marble façade) was burned to make quicklime.[20] The iron clamps[20] which held the stonework together were pried or hacked out of the walls, leaving numerous pockmarks which still scar the building today.`,

        contentParaFour: `During the 16th and 17th century, Church officials sought a productive role for the Colosseum. Pope Sixtus V (1585–1590) planned to turn the building into a wool factory to provide employment for Rome's prostitutes, though this proposal fell through with his premature death.[31] In 1671 Cardinal Altieri authorized its use for bullfights; a public outcry caused the idea to be hastily abandoned. <br><br> In 1749, Pope Benedict XIV endorsed the view that the Colosseum was a sacred site where early Christians had been martyred. He forbade the use of the Colosseum as a quarry and consecrated the building to the Passion of Christ and installed Stations of the Cross, declaring it sanctified by the blood of the Christian martyrs who perished there (see Significance in Christianity). However, there is no historical evidence to support Benedict's claim, nor is there even any evidence that anyone before the 16th century suggested this might be the case; the Catholic Encyclopedia concludes that there are no historical grounds for the supposition, other than the reasonably plausible conjecture that some of the many martyrs may well have been.[32]`,

        contentParaFive: `In 2011 Diego Della Valle, head of the shoe firm Tod's, entered into an agreement with local officials to sponsor a €25 million restoration of the Colosseum. Work was planned to begin at the end of 2011, taking up to two and a half years.[45] Due to the controversial nature of using a public–private partnership to fund the restoration, work was delayed and began in 2013. The restoration is the first full cleaning and repair in the Colosseum's history.[46] The first stage is to clean and restore the Colosseum's arcaded façade and replace the metal enclosures that block the ground-level arches. After three years, the work was completed on 1 July 2016, when the Italian minister of culture, Dario Franceschini, also announced that the funds have been committed to replace the floors by the end of 2018. These will provide a stage that Franceschini says will be used for "cultural events of the highest level."[47] The project also includes creating a services center and restoring the galleries and underground spaces inside the Colosseum.[48] Since 1 November 2017, the top two levels have been opened for guided visits. The fourth level held the marketplace, and the top fifth tier is where the poorest citizens, the plebeians, gathered and watched the show, bringing picnics for the day-long event.[49]`,

        pdf: "Assets/Monuments - pdf/Colosseum.pdf",

        zone: zones[3]
    },
    {
        id: "Pyramids-of-Giza",

        img: "Assets/Images/pyramids-of-giza-1.jpeg",
        imgTwo: "Assets/Images/pyramids-of-giza-2.jpg",
        imgThree: "Assets/Images/architecture.jpg",
        imgFour: "Assets/Images/history-4.jpg",
        imgFive: "Assets/Images/pyramids-of-giza-2.jpg",

        name: "Pyramids of Giza",
        location: "Egypt",
        built: "Around 2560 BC",
        excerpt: "The Pyramids of Giza are among the most recognizable structures in the world and were built as tombs for the pharaohs.",

        subHeadingOne: "Purpose of great pyramids of giza",
        subHeadingTwo: "Historical chronology",
        subHeadingThree: "Classical antiquity",

        headingOne: "Purpose",
        headingTwo: "Attribution to Khufu",
        headingThree: "Historical",
        headingFour: "Herodotus",

        contentParaOne: `The Great Pyramid of Giza[a] is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. Built c. 2600 BC,[3] over a period of about 27 years,[4] the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. It is the most famous monument of the Giza pyramid complex, which is part of the UNESCO World Heritage Site "Memphis and its Necropolis".[5] It is situated at the northeastern end of the line of the three main pyramids at Giza. <br><br> Initially standing at 146.6 metres (481 feet), the Great Pyramid was the world's tallest human-made structure for more than 3,800 years. Over time, most of the smooth white limestone casing was removed, which lowered the pyramid's height to the current 138.5 metres (454.4 ft); what is seen today is the underlying core structure.`,

        contentParaTwo: `The Great Pyramid of Giza was the tomb of pharaoh Khufu,[11] and still contains his granite sarcophagus.[12] It had, like other tombs of Egyptian elites, four main purposes:[13] In ancient Egypt, high social status was considered absolutely positive, and the monumental social inequalities were symbolized by gigantic pyramids versus smaller mastabas. The sizes of tombs were regulated officially, with their allowed dimensions written down in royal decrees. In the Old Kingdom only kings and queens could have a pyramid tomb. Architectural layout and funeral equipment were also sanctioned, and were, like access to material and workers, at the discretion of the king.[18] <br><br> The Great Pyramid's burial chambers lack inscriptions and decorations, the norm for Egyptian tombs of the fourth to late fifth dynasty, apart from work-gang graffiti that include Khufu's names.[19] Constructed around 2600 BC, it predates the custom of inscribing pyramids with text by over 200 years.[20][3] <br> <br> The pyramid complex of Khufu included two temples that were lavishly decorated and inscribed. The pyramid temple was dedicated to the Sed festival, celebrating Khufu's 30th jubilee.[21] Surviving scenes show Khufu as well as officials, priests and other characters. The valley temple remains largely unexcavated, but blocks reused by Amenemhat I depict, for instance, nautical scenes and personifications of the estates of Khufu (e.g. the estate "Khufu is beautiful").[22] The mortuary cult of Khufu which operated in these temples for hundreds of years indicates that Khufu was successfully interred in the Great Pyramid.[23] `,

        contentParaThree: `Historically the Great Pyramid had been attributed to Khufu based on the words of authors of classical antiquity, first and foremost Herodotus and Diodorus Siculus. During the Middle Ages other people were credited with the construction of the pyramid as well, for example Joseph from the Book of Genesis, Nimrod, or the legendary king Saurid ibn Salhouk.[27] <br><br> In 1837 four additional Relieving Chambers were found above the King's Chamber after tunneling to them. The chambers, previously inaccessible, were covered in hieroglyphs of red paint. The workers who were building the pyramid had marked the blocks with the names of their gangs, which included the pharaoh's name (e.g.: "The gang, The white crown of Khnum-Khufu is powerful"). The names of Khufu were spelled out on the walls over a dozen times. Another of these graffiti was found by Goyon on an exterior block of the 4th layer of the pyramid.[28] The inscriptions are comparable to those found at other sites of Khufu, such as the alabaster quarry at Hatnub[29] or the harbor at Wadi al-Jarf, and are present in pyramids of other pharaohs as well.[30][31] <br><br> Throughout the 20th century the cemeteries next to the pyramid were excavated. Family members and high officials of Khufu were buried in the East Field south of the causeway, and the West Field. Most notably the wives, children and grandchildren of Khufu, Hemiunu, Ankhaf and (the funerary cache of) Hetepheres I, mother of Khufu.`,

        contentParaFour: `In the past the Great Pyramid was dated by its attribution to Khufu alone, putting the construction of the Great Pyramid within his reign. Hence dating the pyramid was a matter of dating Khufu and the 4th dynasty. The relative sequence and synchronicity of events is the focal point of this method. <br><br> Absolute calendar dates are derived from an interlocked network of evidence, the backbone of which are the lines of succession known from ancient king lists and other texts. The reign lengths from Khufu to known points in the earlier past are summated, bolstered with genealogical data, astronomical observations, and other sources. As such, the historical chronology of Egypt is primarily a political chronology, thus independent from other types of archaeological evidence like stratigraphies, material culture, or radiocarbon dating. <br> <br> The majority of recent chronological estimates date Khufu and his pyramid roughly between 2700 and 2500 BC.[54]`,

        contentParaFive: `The ancient Greek historian Herodotus, writing in the 5th century BC, is one of the first major authors to mention the pyramid. In the second book of his work The Histories, he discusses the history of Egypt and the Great Pyramid. This report was created more than 2000 years after the structure was built, meaning that Herodotus obtained his knowledge mainly from a variety of indirect sources, including officials and priests of low rank, local Egyptians, Greek immigrants, and Herodotus's own interpreters. Accordingly, his explanations present themselves as a mixture of comprehensible descriptions, personal descriptions, erroneous reports, and fantastical legends; as a result, many of the speculative errors and confusions about the monument can be traced back to Herodotus and his work.[61][62]`,

        pdf: "Assets/Monuments - pdf/Pyramids of Giza.pdf",

        zone: zones[2]
    },
    {
        id: "Stonehenge",

        img: "Assets/Images/stonehenge-1.jpeg",
        imgTwo: "Assets/Images/stonehenge-2.jpg",
        imgThree: "Assets/Images/construction-2.jpg",
        imgFour: "Assets/Images/stonehenge-1.jpeg",
        imgFive: "Assets/Images/history-2.jpg",

        name: "Stonehenge",
        location: "United Kingdom",
        built: "Around 3000 BC",
        excerpt: "Stonehenge is a prehistoric monument consisting of a ring of standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons.",

        subHeadingOne: "Function and construction",
        subHeadingTwo: "Before the monument (from 8000 BC)",
        subHeadingThree: "Early history",

        headingOne: "construction",
        headingTwo: "Etymology",
        headingThree: "Before",
        headingFour: "History",

        contentParaOne: `Stonehenge is a prehistoric megalithic structure on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones. Inside is a ring of smaller bluestones. Inside these are free-standing trilithons, two bulkier vertical sarsens joined by one lintel. The whole monument, now ruinous, is aligned towards the sunrise on the summer solstice and sunset on the winter solstice. The stones are set within earthworks in the middle of the densest complex of Neolithic and Bronze Age monuments in England, including several hundred tumuli (burial mounds).[2] <br><br>Archaeologists believe that Stonehenge was constructed in several phases from around 3100 BC to 1600 BC, with the circle of large sarsen stones placed between 2600 BC and 2400 BC. The surrounding circular earth bank and ditch, which constitute the earliest phase of the monument, have been dated to about 3100 BC.`,

        contentParaTwo: `Stonehenge was produced by a culture that left no written records. Many aspects of Stonehenge, such as how it was built and for what purposes it was used, remain subject to debate. A number of myths surround the stones.[44] The site, specifically the great trilithon, the encompassing horseshoe arrangement of the five central trilithons, the heel stone, and the embanked avenue, are aligned to the sunset of the winter solstice and the opposing sunrise of the summer solstice.[45][46] A natural landform at the monument's location followed this line, and may have inspired its construction.[47] The excavated remains of culled animal bones suggest that people may have gathered at the site for the winter rather than the summer.[48] Further astronomical associations, and the precise astronomical significance of the site for its people, are a matter of speculation and debate.[citation needed] <br><br> There is little or no direct evidence revealing the construction techniques used by the Stonehenge builders. Over the years, various authors have suggested that supernatural or anachronistic methods were used, usually asserting that the stones were impossible to move otherwise due to their massive size. However, conventional techniques, using Neolithic technology as basic as shear legs, have been demonstrably effective at moving and placing stones of a similar size.[49] The most common theory of how prehistoric people moved megaliths has them creating a track of logs which the large stones were rolled along.[50] `,

        contentParaThree: `The Oxford English Dictionary cites Ælfric's tenth-century glossary, in which henge-cliff is given the meaning 'precipice', or stone; thus, the stanenges or Stanheng "not far from Salisbury" recorded by eleventh-century writers are "stones supported in the air". In 1740, William Stukeley notes: "Pendulous rocks are now called henges in Yorkshire ... I doubt not, Stonehenge in Saxon signifies the hanging stones."[12] Christopher Chippindale's Stonehenge Complete gives the derivation of the name Stonehenge as coming from the Old English words stān 'stone', and either hencg 'hinge' (because the stone lintels hinge on the upright stones) or hen(c)en 'to hang' or 'gallows' or 'instrument of torture' (though elsewhere in his book, Chippindale cites the 'suspended stones' etymology).[13] <br><br> The "henge" portion has given its name to a class of monuments known as henges.[12] Archaeologists define henges as earthworks consisting of a circular banked enclosure with an internal ditch.[14] As often happens in archaeological terminology, this is a holdover from antiquarian use. <br> <br> Despite being contemporary with Neolithic true henges and stone circles, Stonehenge is in many ways atypical – for example, at more than 24 feet (7.3 m) tall, its extant trilithons' lintels, held in place with mortise and tenon joints, make it unique.[15][16]`,

        contentParaFour: `Archaeologists have found four, or possibly five, large Mesolithic postholes (one may have been a natural tree throw), which date to around 8000 BC, beneath the nearby old tourist car-park in use until 2013. These held pine posts around two feet six inches (0.75 m) in diameter, which were erected and eventually rotted in situ. Three of the posts (and possibly four) were in an east–west alignment which may have had ritual significance.[17] Another Mesolithic astronomical site in Britain is Warren Field in Aberdeenshire, which is considered the world's oldest lunisolar calendar, corrected yearly by observing the midwinter solstice.[18] Similar but later sites have been found in Scandinavia.[19] A settlement that may have been contemporaneous with the posts has been found at Blick Mead, a reliable year-round spring one mile (1.6 km) from Stonehenge.[20][21] <br> <br> Salisbury Plain was then still wooded, but, 4,000 years later, during the earlier Neolithic, people built a causewayed enclosure at Robin Hood's Ball, and long barrow tombs in the surrounding landscape. In approximately 3500 BC, a Stonehenge Cursus was built 2,300 feet (700 m) north of the site as the first farmers began to clear the trees and develop the area. Other previously overlooked stone or wooden structures and burial mounds may date as far back as 4000 BC.`,

        contentParaFive: `Mike Parker Pearson, leader of the Stonehenge Riverside Project based around Durrington Walls, noted that Stonehenge appears to have been associated with burial from the earliest period of its existence: Stonehenge was a place of burial from its beginning to its zenith in the mid third millennium B.C. The cremation burial dating to Stonehenge's sarsen stones phase is likely just one of many from this later period of the monument's use and demonstrates that it was still very much a domain of the dead.[11] <br><br> Stonehenge evolved in several construction phases spanning at least 1500 years. There is evidence of large-scale construction on and around the monument that perhaps extends the landscape's time frame to 6500 years. Dating and understanding the various phases of activity are complicated by disturbance of the natural chalk by periglacial effects and animal burrowing, poor quality early excavation records, and a lack of accurate, scientifically verified dates. The modern phasing most generally agreed to by archaeologists is detailed below. Features mentioned in the text are numbered and shown on the plan, right.`,

        pdf: "Assets/Monuments - pdf/Stonehenge.pdf",

        zone: zones[3]
    },
    {
        id: "Angkor-Wat",

        img: "Assets/Images/angkor-wat-1.jpeg",
        imgTwo: "Assets/Images/angkor-wat-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/architecture.jpg",
        imgFive: "Assets/Images/decoration.jpg",

        name: "Angkor Wat",
        location: "Cambodia",
        built: "Early 12th century",
        excerpt: "Angkor Wat is the largest religious monument in the world and is renowned for its intricate architecture and extensive bas-reliefs.",

        subHeadingOne: "History of Angkor Watt",
        subHeadingTwo: "Site and plan",
        subHeadingThree: "Decoration And Design",

        headingOne: "History",
        headingTwo: "Style",
        headingThree: "Architecture",
        headingFour: "Decoration",

        contentParaOne: `Angkor Wat (/ˌæŋkɔːr ˈwɒt/; Khmer: អង្គរវត្ត, "City/Capital of Temples") is a Hindu-Buddhist temple complex in Cambodia, located on a site measuring 162.6 hectares (1,626,000 m2; 402 acres). It resides within the ancient Khmer capital city of Angkor. Guinness World Records considers it as the largest religious structure in the world.[2] Originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire by King Suryavarman II during the 12th century, it was gradually transformed into a Buddhist temple towards the end of the century; as such, it is also described as a "Hindu-Buddhist" temple.[3][4] <br><br> Angkor Wat was built at the behest of the Khmer king Suryavarman II[5] in the early 12th century in Yaśodharapura (Khmer: យសោធរបុរៈ, present-day Angkor), the capital of the Khmer Empire, as his state temple and eventual mausoleum. Angkor Wat combines two basic plans of Khmer temple architecture: the temple-mountain and the later galleried temple.`,

        contentParaTwo: `Angkor Wat lies 5.5 kilometres (3+1⁄2 mi) north of the modern town of Siem Reap, and a short distance south and slightly east of the previous capital, which was centred at Baphuon. In an area of Cambodia where there is an essential group of ancient structures, it is the southernmost of Angkor's main sites.[citation needed] <br><br> The construction of Angkor Wat took place over 28 years from 1122 to 1150 CE, during the reign of King Suryavarman II (ruled 1113–c. 1150).[1] A brahmin by the name of Divākarapaṇḍita (1040–c. 1120) was responsible for urging Suryavarman II to construct the temple.[12] All of the original religious motifs at Angkor Wat derived from Hinduism.[13] Breaking from the Shaiva tradition of previous kings, Angkor Wat was instead dedicated to Vishnu. It was built as the king's state temple and capital city. As neither the foundation stela nor any contemporary inscriptions referring to the temple have been found, its original name is unknown, but it may have been known as Vrah Viṣṇuloka after the presiding deity. Work seems to have ended shortly after the king's death, leaving some of the bas-relief decoration unfinished.[14] The term Vrah Viṣṇuloka or Parama Viṣṇuloka literally means "The king who has gone to the supreme world of Vishnu", which refer to Suryavarman II posthumously and intend to venerate his glory and memory.[10] <br><br> In 1177, approximately 27 years after the death of Suryavarman II, Angkor was sacked by the Chams, the traditional enemies of the Khmer.[15] `,

        contentParaThree: `Angkor Wat is the prime example of the classical style of Khmer architecture—the Angkor Wat style—to which it has given its name. By the 12th century, Khmer architects had become skilled and confident in the use of sandstone (rather than brick or laterite) as the main building material. Most of the visible areas are sandstone blocks, while laterite was used for the outer wall and hidden structural parts. The binding agent used to join the blocks is yet to be identified, although natural resins or slaked lime has been suggested.[52] <br><br> The temple has drawn praise above all for the harmony of its design. According to Maurice Glaize, a mid-20th-century conservator of Angkor, the temple "attains a classic perfection by the restrained monumentality of its finely balanced elements and the precise arrangement of its proportions. It is a work of power, unity, and style."[53]`,

        contentParaFour: `Angkor Wat is a unique combination of the temple mountain (the standard design for the empire's state temples) and the later plan of concentric galleries, most of which were originally derived from religious beliefs of Hinduism.[13] The construction of Angkor Wat suggests that there was a celestial significance with certain features of the temple. This is observed in the temple's east–west orientation, and lines of sight from terraces within the temple that show specific towers to be at the precise location of the solstice at sunrise.[39] The temple is a representation of Mount Meru, the home of the gods according to Hindu mythology: the central quincunx of towers symbolise the five peaks of the mountain, and the walls and moat symbolise the surrounding mountain ranges and ocean.[40] Access to the upper areas of the temple was progressively more exclusive, with the laity being admitted only to the lowest level.[41] <br><br> The Angkor Wat temple's main tower aligns with the morning sun of the spring equinox.[42][43] Unlike most Khmer temples, Angkor Wat is oriented to the west rather than the east. This has led many (including Maurice Glaize and George Coedès) to conclude that Suryavarman intended it to serve as his funerary temple.`,

        contentParaFive: `Integrated with the architecture of the building, one of the causes for its fame is Angkor Wat's extensive decoration, which predominantly takes the form of bas-relief friezes. The inner walls of the outer gallery bear a series of large-scale scenes mainly depicting episodes from the Hindu epics the Ramayana and the Mahabharata. Higham has called these "the greatest known linear arrangement of stone carving".[66] From the north-west corner anti-clockwise, the western gallery shows the Battle of Lanka (from the Ramayana, in which Rama defeats Ravana) and the Battle of Kurukshetra (from the Mahabharata, showing the mutual annihilation of the Kaurava and Pandava clans). On the southern gallery follow the only historical scene, a procession of Suryavarman II, then the 32 hells and 37 heavens of Hinduism.[67]`,

        pdf: "Assets/Monuments - pdf/Angkor Wat.pdf",

        zone: zones[2]
    },
    {
        id: "Pompeii",

        img: "Assets/Images/pompeii-1.jpeg",
        imgTwo: "Assets/Images/pompeii-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/discovery.jpg",
        imgFive: "Assets/Images/pompeii-2.jpg",

        name: "Pompeii",
        location: "Italy",
        built: "Founded in the 6th century",
        excerpt: "Pompeii was an ancient Roman city buried under volcanic ash and pumice after the eruption of Mount Vesuvius. It is one of the most significant archaeological sites in the world, offering a glimpse into ancient Roman life.",

        subHeadingOne: "Early History",
        subHeadingTwo: "Rediscovery and excavations",
        subHeadingThree: "Modern archaeology",

        headingOne: "History",
        headingTwo: "Eruption of Vesuvius",
        headingThree: "Rediscovery",
        headingFour: "Modern",

        contentParaOne: `Pompeii (/pɒmˈpeɪ(i)/ pom-PAY-(ee), Latin: [pɔmˈpei̯.iː]) was an ancient city in what is now the comune of Pompei near Naples in the Campania region of Italy. Along with Herculaneum, Stabiae, and many surrounding villas, the city was buried under 4 to 6 m (13 to 20 ft) of volcanic ash and pumice in the eruption of Mount Vesuvius in 79 AD. <br><br> Largely preserved under the ash, Pompeii offers a unique snapshot of Roman life, frozen at the moment it was buried,[1] as well as insight into ancient urban planning.[2][3] It was a wealthy town of 10,000 to 20,000 residents at the time it was destroyed.[4] It hosted many fine public buildings and luxurious private houses with lavish decorations, furnishings and artworks, which were the main attractions for early excavators; subsequent excavations have found hundreds of private homes and businesses reflecting various architectural styles and social classes, as well as numerous public buildings. Organic remains, including wooden objects and human bodies, were interred in the ash; their eventual decay allowed archaeologists to create moulds of figures in their final moments of life.`,

        contentParaTwo: `The first stable settlements on the site date to the 8th century BC when the Oscans,[18] a population of central Italy, founded five villages in the area.
        <br><br>
        With the arrival of the Greeks in Campania from around 740 BC, Pompeii entered the orbit of the Hellenic people. The most important building of this period is the Doric Temple,[19] built away from the centre in what would later become the Triangular Forum.[20]: 62  At the same time the cult of Apollo was introduced.[21] Greek and Phoenician sailors used the location as a safe port.
        <br><br>
        In the early 6th century BC, the settlement merged into a single community centred on the important crossroad between Cumae, Nola, and Stabiae and was surrounded by a tufa city wall (the pappamonte wall).[22][23] The first wall (which was also used as a base for the later wall) unusually enclosed a much greater area than the early town together with much agricultural land.[24] That such an impressive wall was built at this time indicates that the settlement was already important and wealthy. The city began to flourish and maritime trade started with the construction of a small port near the mouth of the river.[20] The earliest settlement was focused in regions VII and VIII of the town (the old town) as identified from stratigraphy below the Samnite and Roman buildings, as well as from the different and irregular street plan.`,

        contentParaThree: `The eruption lasted for two days.[51] The first phase was of pumice rain (lapilli) lasting about 18 hours, allowing most inhabitants to escape. Only approximately 1,150 bodies[52] have so far been found on site, which seems to confirm this theory, and most escapees probably managed to salvage some of their most valuable belongings; many skeletons were found with jewellery, coins, and silverware.
        <br><br>
        At some time in the night or early the next day, pyroclastic flows began near the volcano, consisting of high speed, dense, and scorching ash clouds, knocking down wholly or partly all structures in their path, incinerating or suffocating the remaining population and altering the landscape, including the coastline. By the evening of the second day, the eruption was over, leaving only haze in the atmosphere through which the sun shone weakly.
        <br><br>
        A multidisciplinary volcanological and bio-anthropological study[53] of the eruption products and victims, merged with numerical simulations and experiments, indicates that at Pompeii and surrounding towns heat was the main cause of death of people, previously believed to have died by ash suffocation. The results of the study, published in 2010, show that exposure to at least 250 °C (480 °F) hot pyroclastic flows at a distance of 10 kilometres (6 miles) from the vent was sufficient to cause instant death, even if people were sheltered within buildings. The people and buildings of Pompeii were covered in up to twelve different layers of tephra, in total, up to 6 metres (19.7 ft) deep. Archaeology in 2023 showed that some buildings collapsed due to one or more earthquakes during the eruption, killing the occupants.[54]`,

        contentParaFour: `Titus appointed two ex-consuls to organise a relief effort while donating large amounts of money from the imperial treasury to aid the victims of the volcano.[62] He visited Pompeii once after the eruption and again the following year[63] but no work was done on recovery.
        <br><br>
        Soon after the city's burial, survivors and possibly thieves came to salvage valuables, including the marble statues from the Forum and other precious materials from buildings. There is wide evidence of post-eruption disturbance, including holes made through walls. The city was not completely buried, and the tops of larger buildings would have been visible above the ash, making it obvious where to dig or salvage building material.[64] The robbers left traces of their passage, as in a house where modern archaeologists found a wall graffito saying "house dug".[65]
        <br><br>
        Over the following centuries, its name and location were forgotten, though it still appeared on the Tabula Peutingeriana of the 4th century. Further eruptions, particularly in 471–473 and 512, covered the remains more deeply. The area became known as the La Civita (the city) due to the features in the ground.[66]`,

        contentParaFive: `After those of Fiorelli, excavations continued in an increasingly more systematic and considered manner under several directors of archaeology though still with the main interest in making spectacular discoveries and uncovering more houses rather than answering the main questions about the city and its long term preservation.[76]
        <br><br>
        In the 1920s, Amedeo Maiuri excavated older layers beneath those of 79 AD for the first time to learn about the settlement history.[77] Maiuri made the last excavations on a grand scale in the 1950s, and the area south of the Via dell'Abbondanza and the city wall was almost completely uncovered, but they were poorly documented scientifically. `,

        pdf: "Assets/Monuments - pdf/Pompeii.pdf",

        zone: zones[3]
    },
    {
        id: "Alhambra",

        img: "Assets/Images/alhambra-1.jpeg",
        imgTwo: "Assets/Images/alhambra-2.jpg",
        imgThree: "Assets/Images/history3.jpg",
        imgFour: "Assets/Images/recovery.jpg",
        imgFive: "Assets/Images/architecture-4.jpg",

        name: "Alhambra",
        location: "Spain",
        built: "Established in 889 AD",
        excerpt: "The Alhambra is a palace and fortress complex located in Granada, Spain. It is a masterpiece of Moorish architecture and is known for its ornate stucco work, intricate tile mosaics, and beautiful gardens.",

        subHeadingOne: "Origins and early history",
        subHeadingTwo: "Recovery and modern restorations",
        subHeadingThree: "Layout of alhambra",

        headingOne: "history",
        headingTwo: "Etymology",
        headingThree: "Recovery",
        headingFour: "Layout",

        contentParaOne: `The Alhambra (/ælˈhæmbrə/, Spanish: [aˈlambɾa]; Arabic: الْحَمْرَاء, romanized: al-ḥamrāʼ ) is a palace and fortress complex located in Granada, Andalusia, Spain. It is one of the most famous monuments of Islamic architecture and one of the best-preserved palaces of the historic Islamic world, in addition to containing notable examples of Spanish Renaissance architecture.[1][2][3]
        <br><br>
        The complex was begun in 1238 by Muhammad I Ibn al-Ahmar, the first Nasrid emir and founder of the Emirate of Granada, the last Muslim state of Al-Andalus.[3][4] It was built on the Sabika hill, an outcrop of the Sierra Nevada which had been the site of earlier fortresses and of the 11th-century palace of Samuel ibn Naghrillah.[4][5] Later Nasrid rulers continuously modified the site. The most significant construction campaigns, which gave the royal palaces much of their definitive character, took place in the 14th century during the reigns of Yusuf I and Muhammad V.[6][7]`,

        contentParaTwo: `The evidence for a Roman presence is unclear but archeologists have found remains of ancient foundations on the Sabika hill.[20] A fortress or citadel, probably dating from the Visigothic period, existed on the hill in the 9th century.[5] The first reference to the Qal‘at al-Ḥamra was during the battles between the Arabs and the Muladies during the rule of ‘Abdallah ibn Muhammad (r. 888–912). According to surviving documents from the era, the red castle was quite small, and its walls were not capable of deterring an army intent on conquering. The first reference to al-Ḥamrāʼ  came in lines of poetry attached to an arrow shot over the ramparts, recorded by Ibn Hayyan (d. 1076):
        <br><br>
        "Deserted and roofless are the houses of our enemies;
          Invaded by the autumnal rains, traversed by impetuous winds;
        Let them within the red castle (Kalat al hamra) hold their mischievous councils;
          Perdition and woe surround them on every side."[21]
        <br><br>
        At the beginning of the 11th century, the region of Granada was dominated by the Zirids, a Sanhaja Berber group and offshoot of the Zirids who ruled parts of North Africa. When the Caliphate of Córdoba collapsed after 1009 and the Fitna (civil war) began, the Zirid leader Zawi ben Ziri established an independent kingdom for himself, the Taifa of Granada.[4] The Zirids built their citadel and palace, known as the al-Qaṣaba al-Qadīma ("Old Citadel" or "Old Palace"), on the hill now occupied by the Albaicín neighborhood.[4][5] `,

        contentParaThree: `Alhambra derives from the Arabic الْحَمْرَاء (al-Ḥamrāʼ , pronounced [alħamˈraːʔ]), meaning lit. 'the red one' (f.), the complete form of which was الْقَلْعَةُ ٱلْحَمْرَاءُ al-Qalʻat al-Ḥamrāʼ  "the red fortress (qalat)".[3][5] The "Al-" in "Alhambra" means "the" in Arabic, but this is ignored in general usage in both English and Spanish, where the name is normally given the definite article. The reference to the colour "red" in the name is due to the reddish colour of its walls, which were constructed of rammed earth.[3] The reddish colour comes from the iron oxide in the local clay used for this type of construction.[18]
        <br><br>
        Most of the names used today for specific structures and locations within the Alhambra are imaginative names coined after the medieval period, often in the 19th century.[19][6] The original Arabic names of the Nasrid-era buildings are not known, although some scholars have proposed connections between certain buildings and some of the names mentioned in historical sources.[6]`,

        contentParaFour: `Restoration work was undertaken in 1828 by the architect José Contreras, endowed in 1830 by Ferdinand VII. After the death of Contreras in 1847, it was continued by his son Rafael (died 1890) and his grandson Mariano Contreras (died 1912).[66][68] In 1830 Washington Irving lived in Granada and wrote his Tales of the Alhambra, first published in 1832, which spurred international interest in southern Spain and in its Islamic-era monuments like the Alhambra (an apartment of which he decorated in New England style).[69][8] Other artists and intellectuals, such as John Frederick Lewis and Owen Jones, helped make the Alhambra into an icon of the era with their writings and illustrations during the 19th century.[8]
        <br><br>
        Pavilion in the Court of the Lions in 19th-century photo, showing the "oriental" dome added by Rafael Contreras in 1859, later removed by Leopoldo Torres Balbás
        The Contreras family members continued to be the most important architects and conservators of the Alhambra up until 1907.[70] During this period they generally followed a theory of "stylistic restoration", which favoured the construction and addition of elements to make a monument "complete" but not necessarily corresponding to any historical reality. `,

        contentParaFive: `The Alhambra site is about 700–740 m (2,300–2,430 ft) in length and about 200–205 m (660–670 ft) at its greatest width.[3][84] It extends from west-northwest to east-southeast and covers an area of about 142,000 m2 (1,530,000 sq ft) or 35 acres.[84] It stands on a narrow promontory overlooking the Vega or Plain of Granada and carved by the river Darro on its north side as it descends from the Sierra Nevada.[85] The red earth from which the fortress is constructed is a granular aggregate held together by a medium of red clay which gives the resulting layered brick- and stone- reinforced construction (tapial calicastrado) its characteristic hue and is at the root of the name of 'the Red Hill'.[86]`,

        pdf: "Assets/Monuments - pdf/Alhambra.pdf",

        zone: zones[3]
    },
    {
        id: "Acropolis-of-Athens",

        img: "Assets/Images/acropolis-of-athens.jpg",
        imgTwo: "Assets/Images/acropolis-of-athens-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/acropolis-of-athens-2.jpg",
        imgFive: "Assets/Images/roman-2.jpg",

        name: "Acropolis of Athens",
        location: "Greece",
        built: "5th century BC",
        excerpt: "The Acropolis is a symbol of classical spirit and civilization. It contains several ancient buildings of great architectural and historic significance.",

        subHeadingOne: "Early settlement",
        subHeadingTwo: "The Periclean building program",
        subHeadingThree: "Hellenistic and Roman Period",

        headingOne: "History",
        headingTwo: "Archaic Acropolis",
        headingThree: "The Periclean",
        headingFour: "Roman Period",

        contentParaOne: `The Acropolis of Athens (Ancient Greek: ἡ Ἀκρόπολις τῶν Ἀθηνῶν, romanized: hē Akropolis tōn Athēnōn; Modern Greek: Ακρόπολη Αθηνών, romanized: Akrópoli Athinón) is an ancient citadel located on a rocky outcrop above the city of Athens, Greece, and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon. The word Acropolis is from the Greek words ἄκρον (akron, "highest point, extremity") and πόλις (polis, "city").[1] The term acropolis is generic and there are many other acropoleis in Greece. During ancient times the Acropolis of Athens was also more properly known as Cecropia, after the legendary serpent-man Cecrops, the supposed first Athenian king.`,

        contentParaTwo: `The Acropolis is located on a flattish-topped rock that rises 150 m (490 ft) above sea level in the city of Athens, with a surface area of about 3 ha (7.4 acres). While the earliest artifacts date to the Middle Neolithic era, there have been documented habitations in Attica from the Early Neolithic period (6th millennium BC).
        <br><br>
        There is little doubt that a Mycenaean megaron palace stood upon the hill during the late Bronze Age. Nothing of this structure survives except, probably, a single limestone column base and pieces of several sandstone steps.[5] Soon after the palace was constructed, a Cyclopean massive circuit wall was built, 760 meters long, up to 10 meters high, and ranging from 3.5 to 6 meters thick. From the end of the Helladic IIIB (1300–1200 BC) on,[6] this wall would serve as the main defense for the acropolis until the 5th century.[7] The wall consisted of two parapets built with large stone blocks and cemented with an earth mortar called emplekton (Greek: ἔμπλεκτον).[8] The wall uses typical Mycenaean conventions in that it followed the natural contour of the terrain and its gate, which was towards the south, was arranged obliquely, with a parapet and tower overhanging the incomers' right-hand side, thus facilitating defense. `,

        contentParaThree: `Not much is known about the architectural appearance of the Acropolis until the Archaic era. During the 7th and the 6th centuries BC, the site was controlled by Kylon during the failed Kylonian revolt,[11] and twice by Peisistratos; each of these was attempts directed at seizing political power by coups d'état. Apart from the Hekatompedon mentioned later, Peisistratos also built an entry gate or propylaea.[12] Nevertheless, it seems that a nine-gate wall, the Enneapylon,[13] had been built around the acropolis hill and incorporated the biggest water spring, the Clepsydra, at the northwestern foot.
        <br><br>
        A temple to Athena Polias, the tutelary deity of the city, was erected between 570 and 550 BC. This Doric limestone building, from which many relics survive, is referred to as the Hekatompedon (Greek for "hundred–footed"), Ur-Parthenon (German for "original Parthenon" or "primitive Parthenon"), H–Architecture or Bluebeard temple, after the pedimental three-bodied man-serpent sculpture, whose beards were painted dark blue. Whether this temple replaced an older one or just a sacred precinct or altar is not known. Probably, the Hekatompedon was built where the Parthenon now stands.[14]`,

        contentParaFour: `After winning at Eurymedon during 468 BC, Cimon and Themistocles ordered the reconstruction of the southern and northern walls of the Acropolis. Most of the major temples, including the Parthenon, were rebuilt by order of Pericles during the so-called Golden Age of Athens (460–430 BC). Phidias, an Athenian sculptor, and Ictinus and Callicrates, two famous architects, were responsible for the reconstruction.[21]
        <br><br>
        During 437 BC, Mnesicles started building the Propylaea, a monumental gate at the western end of the Acropolis with Doric columns of Pentelic marble, built partly upon the old Propylaea of Peisistratos.[22] These colonnades were almost finished during 432 BC and had two wings, the northern one decorated with paintings by Polygnotus.[23] About the same time, south of the Propylaea, building started on the small Ionic Temple of Athena Nike in Pentelic marble with tetrastyle porches, preserving the essentials of Greek temple design. After an interruption caused by the Peloponnesian War, the temple was finished during the time of Nicias' peace, <br><br> Construction of the elegant temple of Erechtheion in Pentelic marble (421–406 BC) was by a complex plan which took account of the extremely uneven ground and the need to circumvent several shrines in the area. The entrance, facing east, is lined with six Ionic columns. `,

        contentParaFive: `During the Hellenistic and Roman periods, many of the existing buildings in the area of the Acropolis were repaired to remedy damage from age and occasionally war.[31] Monuments to foreign kings were erected, notably those of the Attalid kings of Pergamon Attalos II (in front of the NW corner of the Parthenon), and Eumenes II, in front of the Propylaea. These were rededicated during the early Roman Empire to Augustus or Claudius (uncertain) and Agrippa, respectively.[32] Eumenes was also responsible for constructing a stoa on the south slope, similar to that of Attalos in the agora below.[33]
        <br><br>
        During the Julio-Claudian period, the Temple of Roma and Augustus, a small, round edifice about 23 meters from the Parthenon, was to be the last significant ancient construction on the summit of the rock.[34]`,

        pdf: "Assets/Monuments - pdf/Acropolis of Athens.pdf",

        zone: zones[3]
    },
    {
        id: "Hagia-Sophia",

        img: "Assets/Images/hagia-sophia-1.jpeg",
        imgTwo: "Assets/Images/hagia-sophia-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/construction-6.jpg",
        imgFive: "Assets/Images/hagia-sophia-2.jpg",

        name: "Hagia Sophia",
        location: "Turkey",
        built: "AD 537 ",
        excerpt: "Hagia Sophia is a symbol of Byzantine architecture and is famous for its massive dome, stunning mosaics, and historical significance as a religious and cultural landmark.",

        subHeadingOne: "Church of Constantius II",
        subHeadingTwo: "Renovation of 1847–1849",
        subHeadingThree: "Museum (1935–2020)",

        headingOne: "History",
        headingTwo: "Mosque (1453-1935)",
        headingThree: "Renovation",
        headingFour: "Museum ",

        contentParaOne: `Hagia Sophia (lit. 'Holy Wisdom'; Turkish: Ayasofya; Greek: Ἁγία Σοφία, romanized: Hagía Sofía; Latin: Sancta Sapientia), officially the Hagia Sophia Grand Mosque (Turkish: Ayasofya-i Kebir Cami-i Şerifi),[3] is a mosque, a former church, and a major cultural and historical site in Istanbul, Turkey. The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in 537 AD. The site was an Eastern Orthodox church from 360 AD to 1204, when it was converted to a Catholic church following the Fourth Crusade.[4] It was reclaimed in 1261 and remained Eastern Orthodox until the Ottoman conquest of Constantinople in 1453. It served as a mosque until 1935, when it became a museum. In 2020, the site once again became a mosque.`,

        contentParaTwo: `The first church on the site was known as the Magna Ecclesia (Μεγάλη Ἐκκλησία, Megálē Ekklēsíā, 'Great Church')[21][22] because of its size compared to the sizes of the contemporary churches in the city.[13] According to the Chronicon Paschale, the church was consecrated on 15 February 360, during the reign of the emperor Constantius II (r. 337–361) by the Arian bishop Eudoxius of Antioch.[23][24] It was built next to the area where the Great Palace was being developed. According to the 5th-century ecclesiastical historian Socrates of Constantinople, the emperor Constantius had c. 346 "constructed the Great Church alongside that called Irene which because it was too small, the emperor's father [Constantine] had enlarged and beautified".[25][23] A tradition which is not older than the 7th or 8th century reports that the edifice was built by Constantius' father, Constantine the Great (r. 306–337).[23] Hesychius of Miletus wrote that Constantine built Hagia Sophia with a wooden roof and removed 427 (mostly pagan) statues from the site.[26] The 12th-century chronicler Joannes Zonaras reconciles the two opinions, writing that Constantius had repaired the edifice consecrated by Eusebius of Nicomedia, after it had collapsed.[23] Since Eusebius was the bishop of Constantinople from 339 to 341, and Constantine died in 337, it seems that the first church was erected by Constantius.[23]`,

        contentParaThree: `Constantinople fell to the attacking Ottoman forces on 29 May 1453. Sultan Mehmed II entered the city and performed the Friday prayer and khutbah (sermon) in Hagia Sophia, and this action marked the official conversion of Hagia Sophia into a mosque.[112] The church's priests and religious personnel continued to perform Christian rites, prayers, and ceremonies until they were compelled to stop by the invaders.[105] When Mehmed and his entourage entered the church, he ordered that it be converted into a mosque immediately. One of the ʿulamāʾ (Islamic scholars) present climbed onto the church's ambo and recited the shahada ("There is no god but Allah, and Muhammad is his messenger"), thus marking the beginning of the conversion of the church into a mosque.[19][113] Mehmed is reported to have taken a sword to a soldier who tried to pry up one of the paving slabs of the Proconnesian marble floor.[114]
        <br><br>
        As described by Western visitors before 1453, such as the Córdoban nobleman Pero Tafur[115] and the Florentine geographer Cristoforo Buondelmonti,[116] the church was in a dilapidated state, with several of its doors fallen from their hinges. Mehmed II ordered a renovation of the building. Mehmed attended the first Friday prayer in the mosque on 1 June 1453.[117] Aya Sofya became the first imperial mosque of Istanbul.[118] Most of the existing houses in the city and the area of the future Topkapı Palace were endowed to the corresponding waqf.[19] From 1478, 2,360 shops, 1,300 houses, 4 caravanserais, 30 boza shops, and 23 shops of sheep heads and trotters gave their income to the foundation.[119] Through the imperial charters of 1520 (AH 926) and 1547 (AH 954), shops and parts of the Grand Bazaar and other markets were added to the foundation.[19]`,

        contentParaFour: `The 19th-century restoration of the Hagia Sophia was ordered by Sultan Abdulmejid I (r. 1823–1861) and completed between 1847 and 1849 by eight hundred workers under the supervision of the Swiss-Italian architect brothers Gaspare and Giuseppe Fossati. The brothers consolidated the dome with a restraining iron chain and strengthened the vaults, straightened the columns, and revised the decoration of the exterior and the interior of the building.[124] The mosaics in the upper gallery were exposed and cleaned, although many were recovered "for protection against further damage".[125]
        <br><br>
        Eight new gigantic circular-framed discs or medallions were hung from the cornice, on each of the four piers and at either side of the apse and the west doors. These were designed by the calligrapher Kazasker Mustafa Izzet Efendi (1801–1877) and painted with the names of Allah, Muhammad, the Rashidun (the first four caliphs: Abu Bakr, Umar, Uthman and Ali), and the two grandsons of Muhammad: Hasan and Husayn, the sons of Ali. The old chandeliers were replaced by new pendant ones.`,

        contentParaFive: `n 1935, the first Turkish President and founder of the Republic of Turkey, Mustafa Kemal Atatürk, transformed the building into a museum. During the Second World War, the minarets of the museum housed MG 08 machine guns.[129] The carpet and the layer of mortar underneath were removed and marble floor decorations such as the omphalion appeared for the first time since the Fossatis' restoration,[130] when the white plaster covering many of the mosaics had been removed. Due to neglect, the condition of the structure continued to deteriorate, prompting the World Monuments Fund (WMF) to include the Hagia Sophia in their 1996 and 1998 Watch Lists. During this time period, the building's copper roof had cracked, causing water to leak down over the fragile frescoes and mosaics. Moisture entered from below as well. Rising ground water increased the level of humidity within the monument, creating an unstable environment for stone and paint. `,

        pdf: "Assets/Monuments - pdf/Hagia Sophia.pdf",

        zone: zones[2]
    },
    {
        id: "Chichen-Itza",

        img: "Assets/Images/chichen-itza-1.jpeg",
        imgTwo: "Assets/Images/chichen-itza-2.jpg",
        imgThree: "Assets/Images/chichen-itza-2.jpg",
        imgFour: "Assets/Images/history3.jpg",
        imgFive: "Assets/Images/decline.jpg",

        name: "Chichen Itza",
        location: "Mexico",
        built: "7th to 10th centuries AD",
        excerpt: "Chichen Itza is a large pre-Columbian archaeological site known for its iconic pyramid, Temple of Kukulcan (El Castillo), and other impressive structures reflecting Mayan astronomy and architecture.",

        subHeadingOne: "Name and orthography",
        subHeadingTwo: "History, Establishment, Ascendancy",
        subHeadingThree: "According to some colonial Mayan sources",

        headingOne: "Name ",
        headingTwo: "Political organization",
        headingThree: "History",
        headingFour: "Decline",

        contentParaOne: `Chichén Itzá[nb 1] (often spelled Chichen Itza in English and traditional Yucatec Maya) was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico.[1]

        Chichén Itzá was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands. The presence of central Mexican styles was once thought to have been representative of direct migration or even conquest from central Mexico, but most contemporary interpretations view the presence of these non-Maya styles more as the result of cultural diffusion.`,

        contentParaTwo: `The Maya name "Chichen Itza" means "At the mouth of the well of the Itza." This derives from chi', meaning "mouth" or "edge", and chʼen or chʼeʼen, meaning "well". Itzá is the name of an ethnic-lineage group that gained political and economic dominance of the northern peninsula. One possible translation for Itza is "enchanter (or enchantment) of the water,"[5] from its (itz), "sorcerer", and ha, "water".[6]
        <br><br>
        The name is spelled Chichén Itzá in Spanish, and the accents are sometimes maintained in other languages to show that both parts of the name are stressed on their final syllable. Other references prefer the modern Maya orthography, Chichʼen Itzaʼ (pronounced [tʃitʃʼen itsáʔ]). This form preserves the phonemic distinction between chʼ and ch, since the base word chʼeʼen (which, however, is not stressed in Maya) begins with a postalveolar ejective affricate consonant. Traditional Yucatec Maya spelling in Latin letters, used from the 16th through mid 20th century, spelled it as "Chichen Itza" (as accents on the last syllable are usual for the language, they are not indicated as they are in Spanish). The word "Itzaʼ" has a high tone on the "a" followed by a glottal stop (indicated by the apostrophe).`,

        contentParaThree: `Several archeologists in the late 1980s suggested that unlike previous Maya polities of the Early Classic, Chichén Itzá may not have been governed by an individual ruler or a single dynastic lineage. Instead, the city's political organization could have been structured by a "multepal" system, which is characterized as rulership through council composed of members of elite ruling lineages.[14]

        This theory was popular in the 1990s, but in recent years, the research that supported the concept of the "multepal" system has been called into question, if not discredited. The current belief trend in Maya scholarship is toward the more traditional model of the Maya kingdoms of the Classic Period southern lowlands in Mexico.[15] <br><br> Chichén Itzá was a major economic power in the northern Maya lowlands during its apogee.[16] Participating in the water-borne circum-peninsular trade route through its port site of Isla Cerritos on the north coast,[17] Chichen Itza was able to obtain locally unavailable resources from distant areas such as obsidian from central Mexico and gold from southern Central America.
        <br><br>
        Between AD 900 and 1050 Chichen Itza expanded to become a powerful regional capital controlling north and central Yucatán. It established Isla Cerritos as a trading port.[18]`,

        contentParaFour: `The layout of Chichén Itzá site core developed during its earlier phase of occupation, between 750 and 900 AD.[19] Its final layout was developed after 900 AD, and the 10th century saw the rise of the city as a regional capital controlling the area from central Yucatán to the north coast, with its power extending down the east and west coasts of the peninsula.[20] The earliest hieroglyphic date discovered at Chichen Itza is equivalent to 832 AD, while the last known date was recorded in the Osario temple in 998.[21] <br><br> The Late Classic city was centered upon the area to the southwest of the Xtoloc cenote, with the main architecture represented by the substructures now underlying the Las Monjas and Observatorio and the basal platform upon which they were built.[22] <br><br> Chichén Itzá rose to regional prominence toward the end of the Early Classic period (roughly 600 AD). It was, however, toward the end of the Late Classic and into the early part of the Terminal Classic that the site became a major regional capital, centralizing and dominating political, sociocultural, economic, and ideological life in the northern Maya lowlands. The ascension of Chichen Itza roughly correlates with the decline and fragmentation of the major centers of the southern Maya lowlands.
        As Chichén Itzá rose to prominence, the cities of Yaxuna (to the south) and Coba (to the east) were suffering decline. These two cities had been mutual allies, with Yaxuna dependent upon Coba. At some point in the 10th century Coba lost a significant portion of its territory, isolating Yaxuna, and Chichen Itza may have directly contributed to the collapse of both cities.[23]`,

        contentParaFive: `According to some colonial Mayan sources (e.g., the Book of Chilam Balam of Chumayel), Hunac Ceel, ruler of Mayapan, conquered Chichén Itzá in the 13th century. Hunac Ceel supposedly prophesied his own rise to power. According to custom at the time, individuals thrown into the Cenote Sagrado were believed to have the power of prophecy if they survived. During one such ceremony, the chronicles state, there were no survivors, so Hunac Ceel leaped into the Cenote Sagrado, and when removed, prophesied his own ascension.
        <br><br>
        While there is some archeological evidence that indicates Chichén Itzá was at one time looted and sacked,[24] there appears to be greater evidence that it could not have been by Mayapan, at least not when Chichén Itzá was an active urban center.`,

        pdf: "Assets/Monuments - pdf/Chichen Itza.pdf",

        zone: zones[1]
    },
    {
        id: "Eiffel-Tower",

        img: "Assets/Images/eiffel-tower-1.jpeg",
        imgTwo: "Assets/Images/eiffel-tower-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/construction-5.jpg",
        imgFive: "Assets/Images/event.jpg",

        name: "Eiffel Tower",
        location: "France",
        built: "1889",
        excerpt: "The Eiffel Tower is a wrought iron lattice tower and one of the most recognizable structures in the world. It stands as a symbol of Paris and France's cultural heritage.",

        subHeadingOne: "History, Origin",
        subHeadingTwo: "Construction of Effiel Tower",
        subHeadingThree: "Subsequent",

        headingOne: "History",
        headingTwo: "Artists' protest",
        headingThree: "Construction",
        headingFour: "events",

        contentParaOne: `The Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: Tour Eiffel [tuʁ ɛfɛl] ⓘ) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.
        <br><br>
        Locally nicknamed "La dame de fer" (French for "Iron Lady"), it was constructed as the centerpiece of the 1889 World's Fair, and to crown the centennial anniversary of the French Revolution. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world.[5] The tower received 5,889,000 visitors in 2022.[6] The Eiffel Tower is the most visited monument with an entrance fee in the world:[7] 6.91 million people ascended it in 2015. It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site ("Paris, Banks of the Seine") in 1991.[8]`,

        contentParaTwo: `The design of the Eiffel Tower is attributed to Maurice Koechlin and Émile Nouguier, two senior engineers working for the Compagnie des Établissements Eiffel. It was envisioned after discussion about a suitable centerpiece for the proposed 1889 Exposition Universelle, a world's fair to celebrate the centennial of the French Revolution. In May 1884, working at home, Koechlin made a sketch of their idea, described by him as "a great pylon, consisting of four lattice girders standing apart at the base and coming together at the top, joined together by metal trusses at regular intervals".[10] Eiffel initially showed little enthusiasm, but he did approve further study, and the two engineers then asked Stephen Sauvestre, the head of the company's architectural department, to contribute to the design. Sauvestre added decorative arches to the base of the tower, a glass pavilion to the first level, and other embellishments. <br><br> The new version gained Eiffel's support: he bought the rights to the patent on the design which Koechlin, Nougier, and Sauvestre had taken out, and the design was put on display at the Exhibition of Decorative Arts in the autumn of 1884 under the company name. On 30 March 1885, Eiffel presented his plans to the Société des Ingénieurs Civils; after discussing the technical problems and emphasising the practical uses of the tower, he finished his talk by saying the tower would symbolise`,

        contentParaThree: `The proposed tower had been a subject of controversy, drawing criticism from those who did not believe it was feasible and those who objected on artistic grounds. Prior to the Eiffel Tower's construction, no structure had ever been constructed to a height of 300 m, or even 200 m for that matter,[14] and many people believed it was impossible. These objections were an expression of a long-standing debate in France about the relationship between architecture and engineering. It came to a head as work began at the Champ de Mars: a "Committee of Three Hundred" (one member for each metre of the tower's height) was formed, led by the prominent architect Charles Garnier and including some of the most important figures of the arts, such as William-Adolphe Bouguereau, Guy de Maupassant, Charles Gounod and Jules Massenet. A petition called "Artists against the Eiffel Tower" was sent to the Minister of Works and Commissioner for the Exposition, Adolphe Alphand, and it was published by Le Temps on 14 February 1887:
        <br><br>
        We, writers, painters, sculptors, architects and passionate devotees of the hitherto untouched beauty of Paris, protest with all our strength, with all our indignation in the name of slighted French taste, against the erection ... of this useless and monstrous Eiffel Tower ... To bring our arguments home, imagine for a moment a giddy, ridiculous tower dominating Paris like a gigantic black smokestack, crushing under its barbaric bulk Notre Dame, the Tour Saint-Jacques, the Louvre, the Dome of les Invalides, the Arc de Triomphe, all of our humiliated monuments will disappear in this ghastly dream. And for twenty years ... we shall see stretching like a blot of ink the hateful shadow of the hateful column of bolted sheet metal.[15]`,

        contentParaFour: `Work on the foundations started on 28 January 1887.[22] Those for the east and south legs were straightforward, with each leg resting on four 2 m (6.6 ft) concrete slabs, one for each of the principal girders of each leg. The west and north legs, being closer to the river Seine, were more complicated: each slab needed two piles installed by using compressed-air caissons 15 m (49 ft) long and 6 m (20 ft) in diameter driven to a depth of 22 m (72 ft)[23] to support the concrete slabs, which were 6 m (20 ft) thick. Each of these slabs supported a block of limestone with an inclined top to bear a supporting shoe for the ironwork.
        <br><br>
        Each shoe was anchored to the stonework by a pair of bolts 10 cm (4 in) in diameter and 7.5 m (25 ft) long. The foundations were completed on 30 June, and the erection of the ironwork began. The visible work on-site was complemented by the enormous amount of exacting preparatory work that took place behind the scenes: the drawing office produced 1,700 general drawings and 3,629 detailed drawings of the 18,038 different parts needed.[24] The task of drawing the components was complicated by the complex angles involved in the design and the degree of precision required: the position of rivet holes was specified to within 1 mm (0.04 in) and angles worked out to one second of arc.[25] The finished components, some already riveted together into sub-assemblies, arrived on horse-drawn carts from a factory in the nearby Parisian suburb of Levallois-Perret and were first bolted together, with the bolts being replaced with rivets as construction progressed. No drilling or shaping was done on site: if any part did not fit, it was sent back to the factory for alteration. In all, 18,038 pieces were joined using 2.5 million rivets.[22]`,

        contentParaFive: `Eiffel had a permit for the tower to stand for 20 years. It was to be dismantled in 1909, when its ownership would revert to the City of Paris. The city had planned to tear it down (part of the original contest rules for designing a tower was that it should be easy to dismantle) but as the tower proved to be valuable for many innovations in the early 20th century, particularly radio telegraphy, it was allowed to remain after the expiry of the permit, and from 1910 it also became part of the International Time Service.[35]
        <br><br>
        For the 1900 Exposition Universelle, the lifts in the east and west legs were replaced by lifts running as far as the second level constructed by the French firm Fives-Lille. These had a compensating mechanism to keep the floor level as the angle of ascent changed at the first level, `,

        pdf: "Assets/Monuments - pdf/Eiffel Tower.pdf",

        zone: zones[0]
    },
    {
        id: "Borobudur",

        img: "Assets/Images/borobudur-1.jpeg",
        imgTwo: "Assets/Images/borobudur-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/discovery.jpg",
        imgFive: "Assets/Images/construction-3.jpg",

        name: "Borobudur",
        location: "Indonesia",
        built: "9th century",
        excerpt: "Borobudur is the world's largest Buddhist temple and a UNESCO World Heritage Site. It is renowned for its intricate carvings and stupas, as well as its significance as a pilgrimage site.",

        subHeadingOne: "History, Construction",
        subHeadingTwo: "Rediscovery of Borobudur",
        subHeadingThree: "Restoration of Borobudur",

        headingOne: "History",
        headingTwo: "Etymology",
        headingThree: "Rediscovery",
        headingFour: "Restoration",

        contentParaOne: `Borobudur, also transcribed Barabudur (Indonesian: Candi Borobudur, Javanese: ꦕꦤ꧀ꦝꦶꦧꦫꦧꦸꦝꦸꦂ, romanized: Candhi Barabudhur) is a 9th-century Mahayana Buddhist temple in Magelang Regency, near the city of Magelang and the town of Muntilan, in Central Java, Indonesia.
        <br><br>
        Constructed of gray andesite-like stone,[1] the temple consists of nine stacked platforms, six square and three circular, topped by a central dome. It is decorated with 2,672 relief panels and originally 504 Buddha statues. The central dome is surrounded by 72 Buddha statues, each seated inside a perforated stupa.[2] The monument guides pilgrims through an extensive system of stairways and corridors with 1,460 narrative relief panels on the walls and the balustrades. Borobudur has one of the world's most extensive collections of Buddhist reliefs.`,

        contentParaTwo: `Hindu clerics appealed to the people of Java for generations, a fact that architect and author Jacques Dumarçay finds first mentioned in 450 AD.[25] Influence of the Sailendra and Sanjaya dynasties followed. Dumarçay says that de Casparis concluded that Sanjaya and Sailendra shared power in central Java for a century and a half, and that de Casparis traced alternating succession from 732 until 882.[26] During this time many Hindu and Buddhist monuments were built on the plains and mountains around the Kedu Plain. Buddhist monuments, including Borobudur, were erected around the same period as the Hindu Prambanan temple compound. In 732 AD, King Sanjaya commissioned a Shivalinga sanctuary to be built on the Wukir hill, only 10 km (6.2 mi) east of Borobudur.[27]
        <br><br>
        There are no known records of construction or the intended purpose of Borobudur.[28] The duration of construction has been estimated by comparison of carved reliefs on the temple's hidden foot and the inscriptions commonly used in royal charters during the 8th and 9th centuries.[28] Comparison of an Indian architectural process across temples, and acknowledgment of who was in power, enabled Dumarçay to approximately date the construction of Borobudur in five stages.[29] Loosely, the Sailendra began c. 780, and continued stages two and three c. 792 through to an unremarkable fourth stage during their decline c. 824.[30] The Sanjaya completed Borobudur's fifth stage c. 833.[30][a]`,

        contentParaThree: `In Indonesian, ancient temples are referred to as candi; thus locals refer to "Borobudur Temple" as Candi Borobudur. The term candi also loosely describes ancient structures, for example, gates and baths. The origins of name Borobudur, is derived from Boro for big and Budur for Buddha.[8] Dutch scholar J. L. Moens says the court poet Mpu Prapanca referred to a holy sanctuary at "Budur" in 1365.[9] Stamford Raffles mentioned "Bóro Bódo" and described the temple in his 1817 book on Javan history.[10][11] In a footnote, Raffles says, "Bóro is the name of the district, and bódo means ancient."[12] Most candi are named after a nearby village. If it followed Javanese language conventions and was named after the nearby village of Bore, the monument should have been named "BudurBoro". Soekmono says Raffles thought that Budur might correspond to the modern Javanese word Buda ("ancient")—i.e., "ancient Boro".[8] He also suggested that the name might derive from boro, meaning "great" or "honorable" and Budur for Buddha.[8] However, another archaeologist suggests the second component of the name (Budur) comes from Javanese term bhudhara ("mountain").[13]
        <br><br>
        Another possible etymology by Dutch archaeologist A.J. Bernet Kempers suggests that Borobudur is a corrupted simplified local Javanese pronunciation of Biara Beduhur written in Sanskrit as Vihara Buddha Uhr. The term Buddha-Uhr could mean "the city of Buddhas", while another possible term Beduhur is probably an Old Javanese term, still surviving today in Balinese vocabulary, which means "a high place", constructed from the stem word dhuhur or luhur (high). This suggests that Borobudur means vihara of Buddha located on a high place or on a hill.[14]`,

        contentParaFour: `Following its capture, Java was under British administration from 1811 to 1816. Britain's representative and governor-general was Stamford Raffles, who took great interest in the history of Java. He collected Javanese antiques and made notes through contacts with local inhabitants during his tour throughout the island.[41] On an inspection tour to Semarang in 1814, he was informed about a big monument deep in a jungle near the village of Bumisegoro.[40] He sent Hermann Cornelius [nl], a Dutch engineer who, among other antiquity explorations had uncovered the Sewu complex in 1806–07, to investigate. In two months, Cornelius and his 200 men cut down trees, burned down vegetation and dug away the earth to reveal the monument. Due to the danger of collapse, he could not unearth all galleries. Cornelius reported his findings to Raffles, including various drawings. Although Raffles mentioned the discovery in only a few sentences in his book, and did not visit the site himself, he has been credited with the monument's rediscovery, as the one who had brought it to the world's attention.[40]
        <br><br>
        Christiaan Lodewijk Hartmann, the resident of the Kedu region, continued Cornelius's work, and in 1835, the whole complex was finally unearthed. His interest in Borobudur was more personal than official. Hartmann did not write any reports of his activities, in particular, the alleged story that he discovered the large statue of Buddha in the main stupa.[42] In 1842, Hartmann investigated the main dome, although what he discovered is unknown and the main stupa remains empty.[43]`,

        contentParaFive: `Borobudur attracted attention in 1885, when the Dutch engineer Jan Willem IJzerman [id; nl], chairman of the Archaeological Society in Yogyakarta, discovered that the temple base enclosed a hidden foot.[45] Photographs made in 1890–1891 revealed reliefs on the hidden foot; the coverings were then replaced.[45] The discovery led the Dutch East Indies government to take steps to safeguard the monument. In 1900, a three-member commission formed to plan protection, and in 1902, the commission submitted a threefold proposal.[48] First, collapse could be avoided by resetting the corners, removing stones that endangered the adjacent parts, strengthening the first balustrades and restoring several niches, archways, stupas and the main dome. Second, care should be maintained and water discharge should be improved by restoring floors and spouts. Third, all loose stones should be removed, the monument cleared up to the first balustrades, disfigured stones removed and the main dome restored.[48] In 1905, the proposal was approved, and the total cost was estimated at that time around 48,800 Dutch guilders (equivalent to ƒ1,392,279 in 2022).[48]`,

        pdf: "Assets/Monuments - pdf/Borobudur.pdf",

        zone: zones[0]
    },
    {
        id: "Statue-of-Liberty",

        img: "Assets/Images/statue-of-liberty-1.jpeg",
        imgTwo: "Assets/Images/statue-of-liberty-2.jpg",
        imgThree: "Assets/Images/construction-2.jpg",
        imgFour: "Assets/Images/statue-of-liberty-2.jpg",
        imgFive: "Assets/Images/construction-5.jpg",

        name: "Statue of Liberty",
        location: "United States (New York)",
        built: "1886",
        excerpt: "The Statue of Liberty was a gift from France to the United States, symbolizing freedom and democracy. It is located on Liberty Island in New York Harbor.",

        subHeadingOne: "Design and construction process",
        subHeadingTwo: "Announcement and early work",
        subHeadingThree: "Construction in France",

        headingOne: "Origin",
        headingTwo: "Design",
        headingThree: "Announcement",
        headingFour: "Construction",

        contentParaOne: `The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886.
        <br><br>
        The statue is a figure of Libertas, the Roman goddess of liberty. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776, in Roman numerals), the date of the U.S. Declaration of Independence. A broken chain and shackle lie at her feet as she walks forward, commemorating the national abolition of slavery following the American Civil War.[8] After its dedication the statue became an icon of freedom and of the United States, being subsequently seen as a symbol of welcome to immigrants arriving by sea.`,

        contentParaTwo: `According to the National Park Service, the idea of a monument presented by the French people to the United States was first proposed by Édouard René de Laboulaye, president of the French Anti-Slavery Society and a prominent and important political thinker of his time. The project is traced to a mid-1865 conversation between Laboulaye, a staunch abolitionist, and Frédéric Bartholdi, a sculptor. In after-dinner conversation at his home near Versailles, Laboulaye, an ardent supporter of the Union in the American Civil War, is supposed to have said: "If a monument should rise in the United States, as a memorial to their independence, I should think it only natural if it were built by united effort—a common work of both our nations."[10] The National Park Service, in a 2000 report, however, deemed this a legend traced to an 1885 fundraising pamphlet, and that the statue was most likely conceived in 1870.[11] In another essay on their website, the Park Service suggested that Laboulaye was minded to honor the Union victory and its consequences, "With the abolition of slavery and the Union's victory in the Civil War in 1865, Laboulaye's wishes of freedom and democracy were turning into a reality in the United States. In order to honor these achievements, Laboulaye proposed that a gift be built for the United States on behalf of France. Laboulaye hoped that by calling attention to the recent achievements of the United States, the French people would be inspired to call for their own democracy in the face of a repressive monarchy."[12]`,

        contentParaThree: `The foundation of Bartholdi's statue was to be laid inside Fort Wood, a disused army base on Bedloe's Island constructed between 1807 and 1811. Since 1823, it had rarely been used, though during the Civil War, it had served as a recruiting station.[78] The fortifications of the structure were in the shape of an eleven-point star. The statue's foundation and pedestal were aligned so that it would face southeast, greeting ships entering the harbor from the Atlantic Ocean.[79] In 1881, the New York committee commissioned Richard Morris Hunt to design the pedestal. Within months, Hunt submitted a detailed plan, indicating that he expected construction to take about nine months.[80] He proposed a pedestal 114 feet (35 m) in height; faced with money problems, the committee reduced that to 89 feet (27 m).[81]
        <br><br>
        Hunt's pedestal design contains elements of classical architecture, including Doric portals, as well as some elements influenced by Aztec architecture.[35] The large mass is fragmented with architectural detail, in order to focus attention on the statue.[81] In form, it is a truncated pyramid, 62 feet (19 m) square at the base and 39.4 feet (12.0 m) at the top. The four sides are identical in appearance. Above the door on each side, there are ten disks upon which Bartholdi proposed to place the coats of arms of the states (between 1876 and 1889, there were 38 of them), although this was not done. Above that, a balcony was placed on each side, framed by pillars. Bartholdi placed an observation platform near the top of the pedestal, above which the statue itself rises.[82] According to author Louis Auchincloss, the pedestal "craggily evokes the power of an ancient Europe over which rises the dominating figure of the Statue of Liberty".[81] The committee hired former army General Charles Pomeroy Stone to oversee the construction work.[83] Construction on the 15-foot-deep (4.6 m) foundation began in 1883, and the pedestal's cornerstone was laid in 1884.[80] In Hunt's original conception, the pedestal was to have been made of solid granite. Financial concerns again forced him to revise his plans; the final design called for poured concrete walls, up to 20 feet (6.1 m) thick, faced with granite blocks.[84][85] This Stony Creek granite came from the Beattie Quarry in Branford, Connecticut.[86] The concrete mass was the largest poured to that time.[85]`,

        contentParaFour: `By 1875, France was enjoying improved political stability and a recovering postwar economy. Growing interest in the upcoming Centennial Exposition to be held in Philadelphia led Laboulaye to decide it was time to seek public support.[42] In September 1875, he announced the project and the formation of the Franco-American Union as its fundraising arm. With the announcement, the statue was given a name, Liberty Enlightening the World.[43] The French would finance the statue; Americans would be expected to pay for the pedestal.[44] The announcement provoked a generally favorable reaction in France, though many Frenchmen resented the United States for not coming to their aid during the war with Prussia.[43] French monarchists opposed the statue, if for no other reason than it was proposed by the liberal Laboulaye, who had recently been elected a senator for life.[44] Laboulaye arranged events designed to appeal to the rich and powerful, including a special performance at the Paris Opera on April 25, 1876, that featured a new cantata by the composer Charles Gounod. The piece was titled La Liberté éclairant le monde, the French version of the statue's announced name.[43] <br><br> Initially focused on the elites, the Union was successful in raising funds from across French society. Schoolchildren and ordinary citizens gave, as did 181 French municipalities. Laboulaye's political allies supported the call, as did descendants of the French contingent in the American Revolutionary War. Less idealistically, contributions came from those who hoped for American support in the French attempt to build the Panama Canal. The copper may have come from multiple sources and some of it is said to have come from a mine in Visnes.`,

        contentParaFive: `On his return to Paris in 1877, Bartholdi concentrated on completing the head, which was exhibited at the 1878 Paris World's Fair. Fundraising continued, with models of the statue put on sale. Tickets to view the construction activity at the Gaget, Gauthier & Co. workshop were also offered.[57] The French government authorized a lottery; among the prizes were valuable silver plate and a terracotta model of the statue. By the end of 1879, about 250,000 francs had been raised.[58]
        <br><br>
        The head and arm had been built with assistance from Viollet-le-Duc, who fell ill in 1879. He soon died, leaving no indication of how he intended to transition from the copper skin to his proposed masonry pier.[59] The following year, Bartholdi was able to obtain the services of the innovative designer and builder Gustave Eiffel.[57] Eiffel and his structural engineer, Maurice Koechlin, decided to abandon the pier and instead build an iron truss tower.`,

        pdf: "Assets/Monuments - pdf/Statue of Liberty.pdf",

        zone: zones[3]
    },
    {
        id: "Forbidden-City",

        img: "Assets/Images/forbidden-city-1.jpeg",
        imgTwo: "Assets/Images/forbidden-city-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/forbidden-city-2.jpg",
        imgFive: "Assets/Images/forbidden-city-1.jpeg",

        name: "Forbidden City",
        location: "China (Beijing)",
        built: "1406-1420",
        excerpt: "The Forbidden City served as the imperial palace and political center of China for nearly 500 years, during the Ming and Qing dynasties. It is one of the largest palace complexes in the world.",

        subHeadingOne: "History of Forbidden City",
        subHeadingTwo: "Structure of Forbidden City",
        subHeadingThree: "Walls and gates",

        headingOne: "History",
        headingTwo: "Etymology",
        headingThree: "Structure",
        headingFour: "gates",

        contentParaOne: `The Forbidden City (Chinese: 紫禁城; pinyin: zǐ jìn chéng) is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing. It is surrounded by numerous opulent imperial gardens and temples including the 22 ha (54-acre) Zhongshan Park, the sacrificial Imperial Ancestral Temple, the 69 ha (171-acre) Beihai Park, and the 23 ha (57-acre) Jingshan Park.[2] It is officially administered by the Palace Museum.
        <br><br>
        The Forbidden City was constructed from 1406 to 1420, and was the former Chinese imperial palace and winter residence of the Emperor of China from the Ming dynasty (since the Yongle Emperor) to the end of the Qing dynasty, between 1420 and 1924. The Forbidden City served as the home of Chinese emperors and their households and was the ceremonial and political center of the Chinese government for over 500 years. Since 1925, the Forbidden City has been under the charge of the Palace Museum, whose extensive collection of artwork and artifacts was built upon the imperial collections of the Ming and Qing dynasties. The Forbidden City was declared a World Heritage Site in 1987.[3]`,

        contentParaTwo: `When Hongwu Emperor's son Zhu Di became the Yongle Emperor, he moved the capital from Nanjing to Beijing, and construction began in 1406 on what would become the Forbidden City.[13]

        Construction lasted 14 years and required more than a million workers.[14] Material used include whole logs of precious Phoebe zhennan wood (Chinese: 楠木; pinyin: nánmù) found in the jungles of south-western China, and large blocks of marble from quarries near Beijing.[15] The floors of major halls were paved with "golden bricks" (Chinese: 金磚; pinyin: jīnzhuān), specially baked paving bricks from Suzhou.[14]
        <br><br>
        From 1420 to 1644, the Forbidden City was the seat of the Ming dynasty. In April 1644, it was captured by rebel forces led by Li Zicheng, who proclaimed himself emperor of the Shun dynasty.[16] He soon fled before the combined armies of former Ming general Wu Sangui and Manchu forces, setting fire to parts of the Forbidden City in the process.[17]`,

        contentParaThree: `The common English name "Forbidden City" is a translation of the Chinese name Zijin Cheng (Chinese: 紫禁城; pinyin: Zǐjìnchéng; lit. 'Purple Forbidden City'). The name Zijin Cheng first formally appeared in 1576.[10] Another English name of similar origin is "Forbidden Palace," though "city" is much closer to the original Chinese meaning. [11]
        <br><br>
        The name "Zijin Cheng" is a name with significance on many levels. Zi, or "Purple", refers to the North Star, which in ancient China was called the Ziwei Star, and in traditional Chinese astrology was the heavenly abode of the Celestial Emperor. The surrounding celestial region, the Ziwei Enclosure (Chinese: 紫微垣; pinyin: Zǐwēiyuán), was the realm of the Celestial Emperor and his family. The Forbidden City, as the residence of the terrestrial emperor, was its earthly counterpart. Jin refers to a prohibition or taboo (often used in signs saying "no entry" or "no smoking" or "X is prohibited"). Cheng originally meant a castle, fortress, or fortification, but in modern Chinese, the character means city.
        <br><br>
        Today, the site is most commonly known in Chinese as Gùgōng (故宮), which means the "Former Palace".[12] The museum which is based in these buildings is known as the "Palace museum" (Chinese: 故宮博物院; pinyin: Gùgōng Bówùyùan).`,

        contentParaFour: `The Forbidden City is a rectangle, measuring 961 m (3,153 ft) from north to south and 753 m (2,470 ft) from east to west.[5][6] It consists of 980 surviving buildings with 8,886 bays of rooms.[34][35] The layout of the Forbidden City activated and protected the imperial code of ethics as a physical installation. The courtyard was built on a massive, luxurious scale but it has the appearance of an ordinary quadrangle courtyard.[36] A common myth states that there are 9999 rooms including antechambers,[37] based on oral tradition, and it is not supported by survey evidence.[38] The Forbidden City was designed to be the centre of the ancient, walled city of Beijing. It is enclosed in a larger, walled area called the Imperial City. The Imperial City is, in turn, enclosed by the Inner City; to its south lies the Outer City.
        <br><br>
        The Forbidden City remains important in the civic scheme of Beijing. The central north–south axis remains the central axis of Beijing. This axis extends to the south through Tiananmen gate to Tiananmen Square, the ceremonial centre of the People's Republic of China, and on to Yongdingmen. To the north, it extends through Jingshan Hill to the Bell and Drum Towers.[39] `,

        contentParaFive: `The Forbidden City is surrounded by a 7.9 m (26 ft) high city wall[19] and a 6 m (20 ft) deep by 52 m (171 ft) wide moat. The walls are 8.62 m (28.3 ft) wide at the base, tapering to 6.66 m (21.9 ft) at the top.[41] These walls served as both defensive walls and retaining walls for the palace. They were constructed with a rammed earth core, and surfaced with three layers of specially baked bricks on both sides, with the interstices filled with mortar.[42]
        <br><br
        At the four corners of the wall sit towers (E) with intricate roofs boasting 72 ridges, reproducing the Pavilion of Prince Teng and the Yellow Crane Pavilion as they appeared in Song dynasty paintings.[42] `,

        pdf: "Assets/Monuments - pdf/Forbidden City.pdf",

        zone: zones[0]
    },
    {
        id: "Neuschwanstein-Castle",

        img: "Assets/Images/neuschwanstein-castle-1.jpeg",
        imgTwo: "Assets/Images/neuschwanstein-castle-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/construction-6.jpg",
        imgFive: "Assets/Images/funding.jpg",

        name: "Neuschwanstein Castle",
        location: "Germany",
        built: "1869-1886",
        excerpt: "Neuschwanstein Castle is a 19th-century Romanesque Revival palace located in Bavaria, Germany. It is one of the most famous castles in the world and served as the inspiration for Disneyland's Sleeping Beauty Castle.",

        subHeadingOne: "Inspiration and design",
        subHeadingTwo: "Construction",
        subHeadingThree: "Funding ",

        headingOne: "History",
        headingTwo: "Location",
        headingThree: "Construction",
        headingFour: "Funding Castle",

        contentParaOne: `Neuschwanstein Castle (German: Schloss Neuschwanstein, pronounced [ˈʃlɔs nɔʏˈʃvaːnʃtaɪn]; Southern Bavarian: Schloss Neischwanstoa) is a 19th-century historicist palace on a rugged hill of the foothills of the Alps in the very south of Germany, near the border with Austria. It is located in the Swabia region of Bavaria, in the municipality of Schwangau, above the incorporated village of Hohenschwangau, which is also the location of Hohenschwangau Castle. The closest larger town is Füssen. The castle stands above the narrow gorge of the Pöllat stream, east of the Alpsee and Schwansee lakes, close to the mouth of the Lech into Forggensee.`,

        contentParaTwo: `Neuschwanstein embodies both the contemporaneous architectural fashion known as castle Romanticism (German: Burgenromantik) and King Ludwig II's enthusiasm for the operas of Richard Wagner. In the 19th century, many castles were constructed or reconstructed, often with significant changes, to make them more picturesque. Palace-building projects similar to Neuschwanstein had been undertaken earlier in several of the German states and included Hohenschwangau Castle, Lichtenstein Castle, Hohenzollern Castle, and numerous buildings on the Rhine, such as Stolzenfels Castle.[10] The inspiration for the construction of Neuschwanstein came from two journeys that Ludwig took in 1867: one in May to the reconstructed Wartburg near Eisenach,[11] and another in July to the Château de Pierrefonds, which Eugène Viollet-le-Duc was transforming from a ruined castle into a historicist palace.[12][nb 3]
        <br><br>
        Neuschwanstein project drawing (Christian Jank 1869)
        Ludwig believed both buildings represented a Romanticist interpretation of the Middle Ages, as well as the musical mythology of his friend Wagner, whose operas Tannhäuser and Lohengrin had made a lasting impression on him.[13] In February 1868, Ludwig's grandfather, King Ludwig I, died, freeing the considerable sums that were previously spent on the abdicated King's appanage.[8][nb 4] `,

        contentParaThree: `The municipality of Schwangau lies at an elevation of 800 m (2,620 ft) at the southwest border of the German state of Bavaria. Its surroundings are characterised by the transition between the Alpine foothills in the south (toward the nearby Austrian border) and a hilly landscape in the north that appears flat by comparison. In the Middle Ages, three castles overlooked the villages. One was called Schwanstein Castle.[nb 1] In 1832, Ludwig's father, King Maximilian II of Bavaria, bought its ruins to replace them with the comfortable neo-Gothic palace known as Hohenschwangau Castle. Finished in 1837, the palace became his family's summer residence, and his elder son Ludwig (born 1845) spent a large part of his childhood here.[4]
        <br><br>
        Vorderhohenschwangau Castle and Hinterhohenschwangau Castle sat on a rugged hill overlooking Schwanstein Castle,[nb 2] two nearby lakes (Alpsee and Schwansee), and the village. Separated by only a moat, they jointly consisted of a hall, a keep, and a fortified tower house.[5] In the 19th century, only ruins remained of the twin medieval castles; those of Hinterhohenschwangau served as a lookout place known as Sylphenturm.[6]
        <br><br>
        The ruins above the family palace were known to the crown prince from his excursions. He first sketched one of them in his diary in 1859.[7] When the young king came to power in 1864, the construction of a new palace in place of the two ruined castles became the first in his series of palace building projects.[8] `,

        contentParaFour: `n 1868, the ruins of the medieval twin castles were completely demolished; the remains of the old keep were blown up.[25] The foundation stone for the palace was laid on 5 September 1869; in 1872, its cellar was completed, and in 1876, everything up to the first floor, the gatehouse being finished first. At the end of 1882, it was completed and fully furnished, allowing Ludwig to take provisional lodgings there and observe the ongoing construction work.[24] In 1874, management of the civil works passed from Eduard Riedel to Georg von Dollmann.[26] The topping out ceremony for the Palas was in 1880, and in 1884 the King moved in to the new building. In the same year, the direction of the project passed to Julius Hofmann [de], after Dollmann had fallen from the King's favour. The palace was erected as a conventional brick construction and later encased in various types of rock. The white limestone used for the fronts came from a nearby quarry.[27]
        <br><br>
        The sandstone bricks for the portals and bay windows came from Schlaitdorf in Württemberg. Marble from Untersberg near Salzburg was used for the windows, the arch ribs, the columns and the capitals. The Throne Hall was a later addition to the plans and required a steel framework. The transport of building materials was facilitated by scaffolding and a steam crane that lifted the material to the construction site. Another crane was used at the construction site. The recently founded Dampfkessel-Revisionsverein (Steam Boiler Inspection Association) regularly inspected both boilers.`,

        contentParaFive: `The King's demands expanded during the construction of Neuschwanstein, and so did the expenses. Drafts and estimated costs were revised repeatedly.[33] Initially a modest study was planned instead of the great throne hall, and projected guest rooms were struck from the drafts to make place for a Moorish Hall, which could not be realised due to lack of resources. Completion was originally projected for 1872 but repeatedly deferred.[33]
        <br><br>
        Neuschwanstein, the symbolic medieval knight's castle, was not King Ludwig II's only huge construction project. It was followed by the Rococo style Lustschloss of Linderhof Palace and the Baroque palace of Herrenchiemsee, a monument to the era of absolutism.[8] Linderhof, the smallest of the projects, was finished in 1886`,

        pdf: "Assets/Monuments - pdf/Neuschwanstein Castle.pdf",

        zone: zones[3]
    },
    {
        id: "Tower-of-London",

        img: "Assets/Images/tower-of-london-1.jpeg",
        imgTwo: "Assets/Images/tower-of-london-2.jpg",
        imgThree: "Assets/Images/architecture-2.jpg",
        imgFour: "Assets/Images/tower-of-london-2.jpg",
        imgFive: "Assets/Images/history-2.jpg",

        name: "Tower of London",
        location: "United Kingdom (London)",
        built: "Late 11th century",
        excerpt: "The Tower of London is a historic castle and royal palace located on the north bank of the River Thames. It has served variously as a fortress, royal residence, and prison, and is now a UNESCO World Heritage Site.",

        subHeadingOne: "Architecture, Layout ",
        subHeadingTwo: "Innermost ward",
        subHeadingThree: "Foundation and early history",

        headingOne: "Architecture",
        headingTwo: "White Tower",
        headingThree: "ward",
        headingFour: "History",

        contentParaOne: `The Tower of London, officially His Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London, England. It lies within the London Borough of Tower Hamlets, which is separated from the eastern edge of the square mile of the City of London by the open space known as Tower Hill. It was founded toward the end of 1066 as part of the Norman Conquest. The White Tower, which gives the entire castle its name, was built by William the Conqueror in 1078 and was a resented symbol of oppression, inflicted upon London by the new Norman ruling class. The castle was also used as a prison from 1100 (Ranulf Flambard) until 1952 (Kray twins),[3] although that was not its primary purpose. A grand palace early in its history, it served as a royal residence. As a whole, the Tower is a complex of several buildings set within two concentric rings of defensive walls and a moat. There were several phases of expansion, mainly under kings Richard I, Henry III, and Edward I in the 12th and 13th centuries. The general layout established by the late 13th century remains despite later activity on the site.`,

        contentParaTwo: `he Tower was oriented with its strongest and most impressive defences overlooking Saxon London, which archaeologist Alan Vince suggests was deliberate.[4] It would have visually dominated the surrounding area and stood out to traffic on the River Thames.[5] The castle is made up of three "wards", or enclosures. The innermost ward contains the White Tower and is the earliest phase of the castle. Encircling it to the north, east, and west is the inner ward, built during the reign of Richard I (1189–1199). Finally, there is the outer ward which encompasses the castle and was built under Edward I. Although there were several phases of expansion after William the Conqueror founded the Tower of London, the general layout has remained the same since Edward I completed his rebuild in 1285.
        <br>br>
        The castle encloses an area of almost 12 acres (4.9 hectares) with a further 6 acres (2.4 ha) around the Tower of London constituting the Tower Liberties – land under the direct influence of the castle and cleared for military reasons.[6] The precursor of the Liberties was laid out in the 13th century when Henry III ordered that a strip of land adjacent to the castle be kept clear.[7] Despite popular fiction, the Tower of London never had a permanent torture chamber, although the basement of the White Tower housed a rack in later periods.[8] Tower Wharf was built on the bank of the Thames under Edward I and was expanded to its current size during the reign of Richard II (1377–1399).[9]`,

        contentParaThree: `The White Tower is a keep (also known as a donjon), which was often the strongest structure in a medieval castle, and contained lodgings suitable for the lord – in this case, the king or his representative.[10] According to military historian Allen Brown, "The great tower [White Tower] was also, by virtue of its strength, majesty and lordly accommodation, the donjon par excellence".[11] As one of the largest keeps in the Christian world,[12] the White Tower has been described as "the most complete eleventh-century palace in Europe".[13] <br><br> The White Tower, not including its projecting corner towers, measures 36 by 32 metres (118 by 105 ft) at the base, and is 27 m (90 ft) high at the southern battlements. The structure was originally three storeys high, comprising a basement floor, an entrance level, and an upper floor. The entrance, as is usual in Norman keeps, was above ground, in this case on the south face, and accessed via a wooden staircase which could be removed in the event of an attack. It was probably during Henry II's reign (1154–1189) that a forebuilding was added to the south side of the tower to provide extra defences to the entrance, but it has not survived. Each floor was divided into three chambers, the largest in the west, a smaller room in the north-east, and the chapel taking up the entrance and upper floors of the south-east.[14] At the western corners of the building are square towers, while to the north-east a round tower houses a spiral staircase. At the south-east corner there is a larger semi-circular projection which accommodates the apse of the chapel. As the building was intended to be a comfortable residence as well as a stronghold, latrines were built into the walls, and four fireplaces provided warmth.[13] <br><br> The main building material is Kentish ragstone, although some local mudstone was also used. Caen stone was imported from northern France to provide details in the Tower's facing, although little of the original material survives as it was replaced with Portland stone in the 17th and 18th centuries.[15] Reigate stone was also used as ashlar and for carved details.`,

        contentParaFour: `The innermost ward encloses an area immediately south of the White Tower, stretching to what was once the edge of the River Thames. As was the case at other castles, such as the 11th-century Hen Domen, the innermost ward was probably filled with timber buildings from the Tower's foundation. Exactly when the royal lodgings began to encroach from the White Tower into the innermost ward is uncertain, although it had happened by the 1170s.[15] The lodgings were renovated and elaborated during the 1220s and 1230s, becoming comparable with other palatial residences such as Windsor Castle.[22] Construction of Wakefield and Lanthorn Towers – located at the corners of the innermost ward's wall along the river – began around 1220.[23][nb 1] They probably served as private residences for the queen and king respectively.
        <br><br>
        The earliest evidence for how the royal chambers were decorated comes from Henry III's reign: the queen's chamber was whitewashed, and painted with flowers and imitation stonework. A great hall existed in the south of the ward, between the two towers.[24] It was similar to, although slightly smaller than, that also built by Henry III at Winchester Castle.[25] Near Wakefield Tower was a postern gate which allowed private access to the king's apartments. The innermost ward was originally surrounded by a protective ditch, which had been filled in by the 1220s. Around this time, a kitchen was built in the ward.[26] Between 1666 and 1676, the innermost ward was transformed and the palace buildings removed.[27] The area around the White Tower was cleared so that anyone approaching would have to cross open ground. The Jewel House was demolished, and the Crown Jewels moved to Martin Tower.[28]`,

        contentParaFive: `Victorious at the Battle of Hastings on 14 October 1066, the invading Duke of Normandy, William the Conqueror, spent the rest of the year securing his holdings by fortifying key positions. He founded several castles along the way, but took a circuitous route toward London;[54][55] only when he reached Canterbury did he turn towards England's largest city. As the fortified bridge into London was held by Saxon troops, he decided instead to ravage Southwark before continuing his journey around southern England.[56] A series of Norman victories along the route cut the city's supply lines and in December 1066, isolated and intimidated, its leaders yielded London without a fight.[57][58] Between 1066 and 1087, William established 36 castles,[55] although references in the Domesday Book indicate that many more were founded by his subordinates.[59] The Normans undertook what has been described as "the most extensive and concentrated programme of castle-building in the whole history of feudal Europe".[60] They were multi-purpose buildings, serving as fortifications (used as a base of operations in enemy territory), centres of administration, and residences.[61]`,

        pdf: "Assets/Monuments - pdf/Tower of London.pdf",

        zone: zones[3]
    },
    {
        id: "Christ-the-Redeemer",

        img: "Assets/Images/christ-the-redeemer-1.jpeg",
        imgTwo: "Assets/Images/christ-the-redeemer-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/architecture-2.jpg",
        imgFive: "Assets/Images/construction-2.jpg",

        name: "Christ the Redeemer",
        location: "Brazil",
        built: "1931",
        excerpt: "Christ the Redeemer is a colossal statue of Jesus Christ located atop Mount Corcovado in Rio de Janeiro. It is one of the New Seven Wonders of the World and an iconic symbol of Christianity.",

        subHeadingOne: "History Of Christ the Redeemer",
        subHeadingTwo: "Architecture and design",
        subHeadingThree: "Construction And builders",

        headingOne: "History",
        headingTwo: "Restoration",
        headingThree: "Architecture",
        headingFour: "Construction",

        contentParaOne: `Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.[1][2] It is made of reinforced concrete and soapstone.[3][4][5] Christ The Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other. Although the project organisers originally accepted the design, it later changed to the statue of today, with the arms spread out wide.`,

        contentParaTwo: `Vincentian priest Pedro Maria Boss first suggested placing a Christian monument on Mount Corcovado in the mid-1850s to honor Princess Isabel, regent of Brazil and the daughter of Emperor Pedro II, but the project was not approved.[1] In 1889, the country became a republic, and owing to the separation of church and state the proposed statue was dismissed.[8]
        <br><br>
        The Catholic Circle of Rio made a second proposal for a landmark statue on the mountain in 1920.[9] The group organized an event called Semana do Monumento ("Monument Week") to attract donations and collect signatures to support the building of the statue. The organization was motivated by what they perceived as "Godlessness" in the society. The donations came mostly from Brazilian Catholics.[3] The designs considered for the "Statue of the Christ" included a representation of the Christian cross, a statue of Jesus with a globe in his hands, and a pedestal symbolizing the world.[10] The statue of Christ the Redeemer with open arms, a symbol of peace, was chosen.
        <br><br>
        Local engineer Heitor da Silva Costa and artist Carlos Oswald designed the statue.[11] French sculptor Paul Landowski created the work.[12]
        <br><br>
        In 1922, Landowski commissioned fellow Parisian Romanian sculptor Gheorghe Leonida, who studied sculpture at the Fine Arts Conservatory in Bucharest and in Italy.[13]`,

        contentParaThree: `In 1990, several organizations, including the Archdiocese of Rio de Janeiro, media company Grupo Globo, oil company Shell do Brasil, environmental regulator of IBAMA, National Institute of Historic and Artistic Heritage, and the city government of Rio de Janeiro entered into an agreement to conduct restoration work.
        <br><br>
        More work on the statue and its environs was conducted in 2003 and early 2010. In 2003, a set of escalators, walkways, and elevators were installed to facilitate access to the platform surrounding the statue. The four-month restoration in 2010[25] focused on the statue itself. The statue's internal structure was renovated and its soapstone mosaic covering was restored by removing a crust of fungi and other microorganisms and repairing small cracks. The lightning rods located in the statue's head and arms were also repaired, and new lighting fixtures were installed at the foot of the statue.[26]
        <br><br>
        The restoration involved one hundred people and used more than 60,000 pieces of stone taken from the same quarry as the original statue.[25] During the unveiling of the restored statue, it was illuminated with green-and-yellow lighting in support of the Brazil national football team playing in the 2010 FIFA World Cup.[25]`,

        contentParaFour: `Vincentian priest Pedro Maria Boss first suggested placing a Christian monument on Mount Corcovado in the mid-1850s to honor Princess Isabel, regent of Brazil and the daughter of Emperor Pedro II, but the project was not approved.[1] In 1889, the country became a republic, and owing to the separation of church and state the proposed statue was dismissed.[8]
        <br><br>
        The Catholic Circle of Rio made a second proposal for a landmark statue on the mountain in 1920.[9] The group organized an event called Semana do Monumento ("Monument Week") to attract donations and collect signatures to support the building of the statue. The organization was motivated by what they perceived as "Godlessness" in the society. The donations came mostly from Brazilian Catholics.[3] The designs considered for the "Statue of the Christ" included a representation of the Christian cross, a statue of Jesus with a globe in his hands, and a pedestal symbolizing the world.[10] The statue of Christ the Redeemer with open arms, a symbol of peace, was chosen.
        <br><br>
        Local engineer Heitor da Silva Costa and artist Carlos Oswald designed the statue.[11] French sculptor Paul Landowski created the work.[12]
        <br><br>
        In 1922, Landowski commissioned fellow Parisian Romanian sculptor Gheorghe Leonida, who studied sculpture at the Fine Arts Conservatory in Bucharest and in Italy.[13]`,

        contentParaFive: `Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.[1][2] It is made of reinforced concrete and soapstone.[3][4][5] Christ The Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other. Although the project organisers originally accepted the design, it later changed to the statue of today, with the arms spread out wide.`,

        pdf: "Assets/Monuments - pdf/Christ the Redeemer.pdf",

        zone: zones[1]
    },
    {
        id: "Sagrada-Familia",

        img: "Assets/Images/sagrada-familia-1.jpeg",
        imgTwo: "Assets/Images/sagrada-familia-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/decoration.jpg",
        imgFive: "Assets/Images/sagrada-familia-2.jpg",

        name: "Sagrada Familia",
        location: "Spain",
        built: "1882-present",
        excerpt: "The Sagrada Familia is a large unfinished Roman Catholic basilica in Barcelona, designed by the renowned architect Antoni Gaudí. It is known for its intricate façades and unique architectural style.",

        subHeadingOne: "History",
        subHeadingTwo: "Design, Plan, Spires ",
        subHeadingThree: "The church is designed",

        headingOne: "Origins",
        headingTwo: "Incidents",
        headingThree: "Design",
        headingFour: "Façades",

        contentParaOne: `The Basílica i Temple Expiatori de la Sagrada Família,[a] otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí".[4] On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.[5][6][7]
        <br><br>
        On 19 March 1882, construction of Sagrada Família began under architect Francisco de Paula del Villar. In 1883, when Villar resigned,[4] Gaudí took over as chief architect, transforming the project with his architectural and engineering style, combining Gothic and curvilinear Art Nouveau forms. Gaudí devoted the remainder of his life to the project, and he is buried in the church's crypt. At the time of his death in 1926, less than a quarter of the project was complete.[8]`,

        contentParaTwo: `Sagrada Família was inspired by a bookseller, José María Bocabella [es], founder of Asociación Espiritual de Devotos de San José (Spiritual Association of Devotees of St. Joseph). After a visit to the Vatican in 1872, Bocabella returned from Italy with the intention of building a church inspired by the basilica at Loreto. The apse crypt of the church, funded by donations, was begun 19 March 1882, on the festival of St. Joseph, to the design of the architect Francisco de Paula del Villar, whose plan was for a Gothic revival church of a standard form. The apse crypt was completed before Villar's resignation on 18 March 1883, when Antoni Gaudí assumed responsibility for its design, which he changed radically.[16] Gaudi began work on the church in 1883 but was not appointed Architect Director until 1884. <br><br> On the subject of the extremely long construction period, Gaudí is said to have remarked: "My client is not in a hurry."[17] When Gaudí died in 1926, the basilica was between 15 and 25 percent complete.[8][18] After Gaudí's death, work continued under the direction of his main disciple Domènec Sugrañes i Gras until interrupted by the Spanish Civil War in 1936. Parts of the unfinished basilica and Gaudí's models and workshop were destroyed during the war. The present design is based on reconstructed versions of the plans that were burned in a fire as well as on modern adaptations.[13] Since 1940, the architects Francesc Quintana, Isidre Puig Boada, Lluís Bonet i Garí and Francesc Cardoner have carried on the work. The illumination was designed by Carles Buïgas. The director until 2012 was the son of Lluís Bonet, Jordi Bonet i Armengol. Armengol began introducing computers into the design and construction process in the 1980s.`,

        contentParaThree: `On 19 April 2011, an arsonist started a small fire in the sacristy which forced the evacuation of tourists and construction workers.[38] The sacristy was damaged, and the fire took 45 minutes to contain.[39]
        <br><br>
        On 11 March 2020, due to the COVID-19 pandemic in Spain, construction temporarily stopped and the basilica was closed.[40] This was the first time the construction had been halted since the Spanish Civil War.[41] The Gaudí House Museum in Park Güell was also closed. The basilica reopened, initially to key workers, on 4 July 2020.[42]
        <br><br>
        On 29 November 2021, a 7 m (23 ft) twelve-pointed illuminated crystal star was installed on one of the main towers of the basilica dedicated to the Virgin Mary. Local residents have concerns about plans to build a large stairway leading up to the basilica's main entrance, unfinished at the time, which could require the demolition of three city blocks: the homes to 1,000 people as well as some businesses.[43]`,

        contentParaFour: `The style of Sagrada Família is variously likened to Spanish Late Gothic, Catalan Modernism or Art Nouveau. While the style falls within the Art Nouveau period, Nikolaus Pevsner points out that, along with Charles Rennie Mackintosh in Glasgow, Gaudí carried the Art Nouveau style far beyond its usual application as a surface decoration.[44] <br><br> While never a cathedral, Sagrada Família was planned from the outset to be a large building, comparable in size to a cathedral. Its ground-plan has obvious links to earlier Spanish cathedrals such as Burgos Cathedral, León Cathedral and Seville Cathedral. In common with Catalan and many other European Gothic cathedrals, Sagrada Família is short in comparison to its width, and has a great complexity of parts, which include double aisles, an ambulatory with a chevet of seven apsidal chapels, a multitude of steeples and three portals, each widely different in structure as well as ornament.[citation needed] Where it is common for cathedrals in Spain to be surrounded by numerous chapels and ecclesiastical buildings, the layout of Sagrada Família has an unusual feature: a covered passage or cloister which forms a rectangle enclosing the church and passing through the narthex of each of its three portals. With this peculiarity aside, the plan, influenced by Villar's crypt, barely hints at the complexity of Gaudí's design or its deviations from traditional church architecture.[citation needed] There are no exact right angles to be seen inside or outside the church, and few straight lines in the design.[45][46]`,

        contentParaFive: `The church is designed to have three grand façades: the Nativity façade to the east, the Passion façade to the west, and the Glory façade to the south (incomplete).
        <br><br>
        The Nativity façade was built before work was interrupted in 1935 and bears the most direct Gaudí influence.
        <br><br>
        The Nativity façade
        The Passion façade was built according to the design that Gaudi created in 1917. The construction began in 1954, and the steeples, built over the elliptical plan, were finished in 1976. It is especially striking for its spare, gaunt, tormented characters, including emaciated figures of Christ being scourged at the pillar; and Christ on the Cross. These controversial designs are the work of Josep Maria Subirachs.`,

        pdf: "Assets/Monuments - pdf/Sagrada Familia.pdf",

        zone: zones[3]
    },
    {
        id: "Petra",

        img: "Assets/Images/petra-1.jpeg",
        imgTwo: "Assets/Images/petra-2.jpg",
        imgThree: "Assets/Images/petra-3.jpg",
        imgFour: "Assets/Images/roman-1.jpg",
        imgFive: "Assets/Images/architecture-4.jpg",

        name: "Petra",
        location: "Jordan",
        built: "312 BC",
        excerpt: "Petra is famous for its rock-cut architecture and water conduit system. It was a major trading hub in ancient times.",

        subHeadingOne: "Petra",
        subHeadingTwo: "Roman period",
        subHeadingThree: "Layout of Petra",

        headingOne: "Emergence of Petra",
        headingTwo: "History",
        headingThree: "Roman",
        headingFour: "Layout",

        contentParaOne: `Petra (Arabic: ٱلْبَتْراء, romanized: Al-Batrāʾ; Greek: Πέτρα, "Rock"), originally known to its inhabitants as Raqmu or Raqēmō[3][4] (Nabataean: 𐢛𐢚𐢒‎ or 𐢛𐢚𐢓𐢈‎, *Raqēmō), is a historic and archaeological city in southern Jordan. Famous for its rock-cut architecture and water conduit system, Petra is also called the "Rose City" because of the colour of the sandstone[5] from which it is carved;[6] it was famously called "a rose-red city half as old as time" in a poem of 1845 by John Burgon. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba.[7] Access to the city is through a famously picturesque 1.2-kilometre-long (3⁄4 mi) gorge called the Siq, which leads directly to the Khazneh.
        <br><br>
        Cliffs near Petra, View over Wadi Arabah
        The area around Petra has been inhabited from as early as 7000 BC,[8] and the Nabataeans might have settled in what would become the capital city of their kingdom as early as the 4th century BC.`,

        contentParaTwo: `The Nabataeans were one among several nomadic Bedouin tribes that roamed the Arabian Desert and moved with their herds to wherever they could find pasture and water.[9] Although the Nabataeans were initially embedded in Aramaic culture, theories about them having Aramean roots are rejected by many modern scholars. Instead, archaeological, religious and linguistic evidence confirm that they are a northern Arabian tribe.[22] Current evidence suggests that the Nabataean name for Petra was Raqēmō, variously spelled in inscriptions as rqmw or rqm.[4]
        <br><br>
        The Jewish historian Josephus (ca. 37–100 AD) writes that the region was inhabited by the Midianites during the time of Moses, and that they were ruled by five kings, one of whom was Rekem. Josephus mentions that the city, called Petra by the Greeks, "ranks highest in the land of the Arabs" and was still called Rekeme by all the Arabs of his time, after its royal founder (Antiquities iv. 7, 1; 4, 7).[23] The Onomasticon of Eusebius also identified Rekem as Petra.[24] Arabic raqama means "to mark, to decorate", so Rekeme could be a Nabataean word referring to the famous carved rock façades. In 1964, workmen clearing rubble away from the cliff at the entrance to the gorge found several funerary inscriptions in Nabatean script. One of them was to a certain Petraios who was born in Raqmu (Rekem) and buried in Garshu (Jerash).[25][26]`,

        contentParaThree: `<b>Neolithic</b> By 7000 BC, some of the earliest recorded farmers had settled in Beidha, a Pre-Pottery Neolithic settlement just north of Petra.[8] <br><br> <b>Bronze Age</b> Petra is listed in Egyptian campaign accounts and the Amarna letters as Pel, Sela, or Seir.[19] <br><br> <b>Iron Age Edom</b> The Iron Age lasted between 1200 and 600 BC; in that time, the Petra area was occupied by the Edomites. The configuration of mountains in Petra allowed for a reservoir of water for the Edomites. This made Petra a stopping ground for merchants, making it an outstanding area for trade. Things that were traded here included wines, olive oil, and wood.
        <br><br>
        Initially, the Edomites were accompanied by Nomads who eventually left, but the Edomites stayed and made their mark on Petra before the emergence of the Nabataens. It is said that 10,000 men were thrown off of the mountain Umm el-Biyara, but this story has been debated by scholars.[20]`,

        contentParaFour: `In AD 106, when Cornelius Palma was governor of Syria, the part of Arabia under the rule of Petra was absorbed into the Roman Empire as part of Arabia Petraea, and Petra became its capital.[28] The native dynasty came to an end but the city continued to flourish under Roman rule. It was around this time that the Petra Roman Road was built. A century later, in the time of Alexander Severus, when the city was at the height of its splendor, the issue of coinage came to an end. There was no more building of sumptuous tombs, owing apparently to some sudden catastrophe, such as an invasion by the neo-Persian power under the Sassanid Empire.[7]
        <br><br>
        Meanwhile, as Palmyra (fl. 130–270) grew in importance and attracted the Arabian trade away from Petra, the latter declined. It appears, however, to have lingered on as a religious center. Another Roman road was constructed at the site. Epiphanius of Salamis (c.315–403) writes that in his time a feast was held there on December 25 in honor of the virgin Khaabou (Chaabou) and her offspring Dushara.[7] Dushara and al-Uzza were two of the main deities of the city, which otherwise included many idols from other Nabataean deities such as Allat and Manat.[29]`,

        contentParaFive: `Excavations have demonstrated that it was the ability of the Nabataeans to control the water supply that led to the rise of the desert city, creating an artificial oasis. The area is visited by flash floods, but archaeological evidence shows that the Nabataeans controlled these floods by the use of dams, cisterns, and water conduits. These innovations stored water for prolonged periods of drought and enabled the city to prosper from its sale.[48][49]
        <br><br>
        In ancient times, Petra might have been approached from the south on a track leading across the plain of Petra, around Jabal Haroun ("Aaron's Mountain"), the location of the Tomb of Aaron, said to be the burial place of Aaron, brother of Moses. Another approach was possibly from the high plateau to the north. `,

        pdf: "Assets/Monuments - pdf/Petra.pdf",

        zone: zones[2]
    },
    {
        id: "Kremlin",

        img: "Assets/Images/kremlin-1.jpeg",
        imgTwo: "Assets/Images/kremlin-2.jpg",
        imgThree: "Assets/Images/history3.jpg",
        imgFour: "Assets/Images/roman-3.jpg",
        imgFive: "Assets/Images/roman-1.jpg",

        name: "Kremlin",
        location: "Russia (Moscow)",
        built: "Late 15th century",
        excerpt: "The Moscow Kremlin is a historic fortified complex that served as the political and religious center of Russia for centuries. It includes palaces, cathedrals, and government buildings.",

        subHeadingOne: "History, Origin",
        subHeadingTwo: "period",
        subHeadingThree: "period",

        headingOne: "History",
        headingTwo: "Residence of the tsars",
        headingThree: "Imperial period",
        headingFour: "Soviet Period",

        contentParaOne: `The Moscow Kremlin (Russian: Московский Кремль, romanized: Moskovsky Kreml, IPA: [mɐˈskofskʲɪj ˈkrʲemlʲ]), also simply known as the Kremlin, is a fortified complex in the center of Moscow.[1] It is the best known of the kremlins (Russian citadels), and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers. In addition, within the complex is the Grand Kremlin Palace that was formerly the residence of the Russian emperor in Moscow. The complex now serves as the official residence of the Russian president and as a museum with almost three million visitors in 2017.[2] The Kremlin overlooks the Moskva River to the south, Saint Basil's Cathedral and Red Square to the east, and Alexander Garden to the west.
        <br><br>
        The name kremlin means "fortress inside a city",[3] and is often also used metonymically to refer to the Russian government. It previously referred to the government of the Soviet Union (1922–1991) and its leaders. The term "Kremlinology" refers to the study of Soviet and Russian politics.`,

        contentParaTwo: `The site had been continuously inhabited by Finnic peoples (especially the Meryans) since the 2nd century BCE. The Slavs occupied the south-western portion of Borovitsky Hill as early as the 11th century, as evidenced by a metropolitan seal from the 1090s which was unearthed by Soviet archaeologists in the area. The Vyatichi built a fortified structure (or "grad") on the hill where the Neglinnaya River flowed into the Moskva River.
        <br><br>
        Up to the 14th century, the site was known as the "grad of Moscow". The word "Kremlin" was first recorded in 1331[5] (though etymologist Max Vasmer mentions an earlier appearance in 1320[6]). The grad was greatly extended by Prince Yuri Dolgorukiy in 1156, destroyed by the Mongols in 1237 and rebuilt in oak by Ivan I Kalita in 1339.[7]`,

        contentParaThree: `Grand Prince Ivan III organised the reconstruction of the Kremlin, inviting a number of skilled architects from Renaissance Italy, including Petrus Antonius Solarius, who designed the new Kremlin wall and its towers, and Marcus Ruffus who designed the new palace for the prince. It was during his reign that three extant cathedrals of the Kremlin, the Deposition Church, and the Palace of Facets were constructed. The highest building of the city and Muscovite Russia was the Ivan the Great Bell Tower, built in 1505–1508 and augmented to its present height in 1600. The Kremlin walls as they now appear were built between 1485 and 1495.[7] Spasskie gates of the wall still bear a dedication in Latin praising Petrus Antonius Solarius for the design.
        <br><br>
        After construction of the new kremlin walls and churches was complete, the monarch decreed that no structures should be built in the immediate vicinity of the citadel. The Kremlin was separated from the walled merchant town (Kitay-gorod) by a 30-meter-wide moat, over which Saint Basil's Cathedral was constructed during the reign of Ivan the Terrible. The same tsar also renovated some of his grandfather's palaces, added a new palace and cathedral for his sons, and endowed the Trinity metochion inside the Kremlin. The metochion was administrated by the Trinity Monastery and contained the graceful tower church of St. Sergius, which was described by foreigners as one of the finest in the country.`,

        contentParaFour: `Although still used for coronation ceremonies, the Kremlin was abandoned and neglected until 1773, when Catherine the Great engaged Vasili Bazhenov to build her new residence there. Bazhenov produced a bombastic Neoclassical design on a heroic scale, which involved the demolition of several churches and palaces, as well as a portion of the Kremlin wall. After the preparations were over, construction was delayed due to lack of funds. Several years later the architect Matvey Kazakov supervised the reconstruction of the dismantled sections of the wall and of some structures of the Chudov Monastery and built the spacious and luxurious Offices of the Senate, since adapted for use as the principal workplace of the President of Russia.
        <br><br>
        During the Imperial period, from the early 18th and until the late 19th century, the Kremlin walls were traditionally painted white, in accordance with fashion.[9]`,

        contentParaFive: `The Soviet government moved from Petrograd (present-day Saint Petersburg) to Moscow on 12 March 1918. Vladimir Lenin selected the Kremlin Senate as his residence. Joseph Stalin also had his personal rooms in the Kremlin. He was eager to remove all the "relics of the tsarist regime" from his headquarters. Golden eagles on the towers were replaced by shining Kremlin stars, while the wall near Lenin's Mausoleum was turned into the Kremlin Wall Necropolis.
        <br><br>
        The Chudov Monastery and Ascension Convent, with their 16th-century cathedrals, were demolished to make room for the military school. The Little Nicholas Palace and the old Saviour Cathedral were pulled down as well.`,

        pdf: "Assets/Monuments - pdf/Kremlin.pdf",

        zone: zones[0]
    },
    {
        id: "Moai-Statues-of-Easter-Island",

        img: "Assets/Images/easter-Island-moai-statues-1.jpeg",
        imgTwo: "Assets/Images/easter-Island-moai-statues-2.jpg",
        imgThree: "Assets/Images/easter-Island-moai-statues-2.jpg",
        imgFour: "Assets/Images/marking.jpg",
        imgFive: "Assets/Images/history-4.jpg",

        name: "Moai Statues of Easter Island",
        location: "Chile (Easter Island)",
        built: "1400 - 1650 AD",
        excerpt: "The Moai statues are monolithic human figures carved by the indigenous people of Easter Island. They represent ancestral spirits and embody the island's rich cultural history.",

        subHeadingOne: "Description of Moai Statues of Easter Island",
        subHeadingTwo: "Markings of Moai Statues of Easter Island",
        subHeadingThree: "History of Moai Statues of Easter Island",

        headingOne: "Description",
        headingTwo: "Characteristics",
        headingThree: "Markings",
        headingFour: "History",

        contentParaOne: `Moai or moʻai (/ˈmoʊ.aɪ/ ⓘ MOH-eye; Spanish: moái; Rapa Nui: moʻai, lit. 'statue') are monolithic human figures carved by the Rapa Nui people on Rapa Nui (Easter Island) in eastern Polynesia between the years 1250 and 1500.[1][2] Nearly half are still at Rano Raraku, the main moai quarry, but hundreds were transported from there and set on stone platforms called ahu around the island's perimeter. Almost all moai have overly large heads, which account for three-eighths of the size of the whole statue. They also have no legs. The moai are chiefly the living faces (aringa ora) of deified ancestors (aringa ora ata tepuna).[3]
        <br><br>
        The statues still gazed inland across their clan lands when Europeans first visited the island in 1722, but all of them had fallen by the latter part of the 19th century.[4] The moai were toppled in the late 18th and early 19th centuries, possibly as a result of European contact or internecine tribal wars.[5]`,

        contentParaTwo: `The moai are monolithic statues, and their minimalist style reflects forms found throughout Polynesia. Moai are carved from volcanic tuff (solidified ash). The human figures would be outlined in the rock wall first, then chipped away until only the image was left.[13] The over-large heads (a three-to-five ratio between the head and the trunk, a sculptural trait consistent with the Polynesian belief in the sanctity of the chiefly head) have heavy brows and elongated noses with a distinctive fish-hook-shaped curl of the nostrils. The lips protrude in a thin pout. Like the nose, the ears are elongated and oblong in form. The jaw lines stand out against the truncated neck. The torsos are heavy, sometimes, the clavicles are subtly outlined in stone too. The arms are carved in bas relief and rest against the body in various positions, hands and long slender fingers resting along the crests of the hips, meeting at the hami (loincloth), with the thumbs sometimes pointing towards the navel. Generally, the anatomical features of the backs are not detailed, but sometimes bear a ring and girdle motif on the buttocks and lower back. Except for one kneeling moai, the statues do not have clearly visible legs.
        <br><br>
        Moʻai quarry at Rano Raraku
        Though moai are whole-body statues,[14] they are often referred to as "Easter Island heads" in some popular literature. This is partly because of the disproportionate size of most moai heads, and partly because many of the images for the island showing upright moai are of the statues on the slopes of Rano Raraku, many of which are buried to their shoulders.`,

        contentParaThree: `Easter Island statues are known for their large, broad noses and big chins, along with rectangle-shaped ears and deep eye slits. Their bodies are normally squatting, with their arms resting in different positions and are without legs. The majority of the ahu are found along the coast and face inland towards the community. There are some inland ahu such as Ahu Akivi. These moai face the community but given the small size of the island, also appear to face the coast.[11]
        <br><br> 
        In 1979, Sergio Rapu Haoa and a team of archaeologists discovered that the hemispherical or deep elliptical eye sockets were designed to hold coral eyes with either black obsidian or red scoria pupils.[16] The discovery was made by collecting and reassembling broken fragments of white coral that were found at the various sites. Subsequently, previously uncategorized finds in the Easter Island museum were re-examined and recategorized as eye fragments. It is thought that the moai with carved eye sockets were probably allocated to the ahu and ceremonial sites, suggesting that a selective Rapa Nui hierarchy was attributed to the moai design until its demise with the advent of the religion revolving around the tangata manu.
        <br><br> 
        The more recent moai had pukao on their heads, which represent the topknot of the chieftains. According to local tradition, the mana was preserved in the hair. The pukao were carved out of red scoria, a very light rock from a quarry at Puna Pau. Red itself is considered a sacred color in Polynesia. The added pukao suggest a further status to the moai.[20]`,

        contentParaFour: `When first carved, the surface of the moai was polished smooth by rubbing with pumice. However, the easily worked tuff from which most moai were carved is easily eroded, such that the best place to see the surface detail is on the few moai carved from basalt or in photographs and other archaeological records of moai surfaces protected by burials.[citation needed]
        <br><br> 
        Those moai that are less eroded typically have designs carved on their backs and posteriors. The Routledge expedition of 1914 established a cultural link[21] between these designs and the island's traditional tattooing, which had been repressed by missionaries a half-century earlier. Until modern DNA analysis of the islanders and their ancestors, this was key scientific evidence that the moai had been carved by the Rapa Nui and not by a separate group from South America.[citation needed]
        <br><br> 
        At least some of the moai were painted. One moai in the collection of the Metropolitan Museum of Art was decorated with a reddish pigment.[22] Hoa Hakananai'a was decorated with maroon and white paint until 1868, when it was removed from the island.`,

        contentParaFive: `The statues were carved by the Polynesian colonizers of the island, mostly between 1250 and 1500.[1] In addition to representing deceased ancestors, the moai, once they were erected on ahu, may also have been regarded as the embodiment of powerful living or former chiefs and important lineage status symbols. Each moai presented a status: "The larger the statue placed upon an ahu, the more mana the chief who commissioned it had."[20] The competition for grandest statue was ever prevalent in the culture of the Easter Islanders. The proof stems from the varying sizes of moai.[20]
        <br><br> 
        Completed statues were moved to ahu mostly on the coast, then erected, sometimes with pukao, red stone cylinders, on their heads. Moai must have been extremely expensive to craft and transport; not only would the actual carving of each statue require effort and resources, but the finished product was then hauled to its final location and erected.`,

        pdf: "Assets/Monuments - pdf/Moai Statues of Easter Island.pdf",

        zone: zones[1]
    },
    {
        id: "St-Peters-Basilica",

        img: "Assets/Images/st-peter's-basilica-1.jpeg",
        imgTwo: "Assets/Images/st-peter's-basilica-2.jpg",
        imgThree: "Assets/Images/st-peter's-basilica-2.jpg",
        imgFour: "Assets/Images/history-1.jpg",
        imgFive: "Assets/Images/construction-2.jpg",

        name: "St. Peter's Basilica",
        location: "Vatican City (Rome)",
        built: "1506-1626",
        excerpt: "St. Peter's Basilica is one of the largest churches in the world and a masterpiece of Renaissance architecture. It is the burial site of Saint Peter, one of the twelve apostles of Jesus.",

        subHeadingOne: "Overview Of St. Peter's Basilica",
        subHeadingTwo: "Saint Peter's burial site",
        subHeadingThree: "Plan to rebuild",

        headingOne: "Overview",
        headingTwo: "Status",
        headingThree: "History",
        headingFour: "Rebuild",

        contentParaOne: `The Papal Basilica of Saint Peter in the Vatican (Italian: Basilica Papale di San Pietro in Vaticano), or simply Saint Peter's Basilica (Latin: Basilica Sancti Petri), is a church of the Italian High Renaissance located in Vatican City, an independent microstate enclaved within the city of Rome, Italy. It was initially planned in the 15th century by Pope Nicholas V and then Pope Julius II to replace the ageing Old St. Peter's Basilica, which was built in the fourth century by Roman emperor Constantine the Great. Construction of the present basilica began on 18 April 1506 and was completed on 18 November 1626.[2]
        <br><br>
        Designed principally by Donato Bramante, Michelangelo, and Carlo Maderno, with piazza and fittings by Gian Lorenzo Bernini, St. Peter's is one of the most renowned works of Italian Renaissance architecture[3] and is the largest church in the world by interior measure.[note 1] While it is neither the mother church of the Catholic Church nor the cathedral of the Diocese of Rome (these equivalent titles being held by the Archbasilica of Saint John Lateran in Rome), St. Peter's is regarded as one of the holiest Catholic shrines. It has been described as "holding a unique position in the Christian world",[4] and as "the greatest of all churches of Christendom."[3][5]`,

        contentParaTwo: `St. Peter's is a church built in the Renaissance style located in the Vatican City west of the River Tiber and near the Janiculum Hill and Hadrian's Mausoleum. Its central dome dominates the skyline of Rome. The basilica is approached via St. Peter's Square, a forecourt in two sections, both surrounded by tall colonnades. The first space is oval and the second trapezoidal. The façade of the basilica, with a giant order of columns, stretches across the end of the square and is approached by steps on which stand two 5.55-metre (18.2 ft) statues of the first-century apostles to Rome, Saints Peter and Paul.[10][11]
        <br><br>
        The basilica is cruciform in shape, with an elongated nave in the Latin cross form but the early designs were for a centrally planned structure and this is still in evidence in the architecture. The central space is dominated both externally and internally by one of the largest domes in the world. The entrance is through a narthex, or entrance hall, which stretches across the building. One of the decorated bronze doors leading from the narthex is the Holy Door, only opened during jubilees.[10]
        <br><br>
        The interior dimensions are vast when compared to other churches.[2] One author wrote: "Only gradually does it dawn upon us – as we watch people draw near to this or that monument, strangely they appear to shrink; they are, of course, dwarfed by the scale of everything in the building. This in its turn overwhelms us."[12]`,

        contentParaThree: `St. Peter's Basilica is one of the papal basilicas (previously styled "patriarchal basilicas")[note 2] and one of the four Major Basilicas of Rome, the other Major Basilicas (all of which are also Papal Basilicas) being the Basilicas of St. John Lateran, St. Mary Major, and St. Paul outside the Walls. The rank of major basilica confers on St. Peter's Basilica precedence before all minor basilicas worldwide. However, unlike all the other Papal Major Basilicas, it is wholly within the territory, and thus the sovereign jurisdiction, of the Vatican City State, and not that of Italy.[14]
        <br><br>
        It is the most prominent building in the Vatican City. Its dome is a feature of the skyline of Rome and covers an area of 2.3 hectares (5.7 acres). One of the holiest sites of Christianity and Catholic Tradition, it is traditionally the burial site of its titular, St. Peter, who was the head of the twelve Apostles of Jesus and, according to tradition, the first Bishop of Antioch and later the first Bishop of Rome, rendering him the first Pope. Although the New Testament does not mention St. Peter's martyrdom in Rome, tradition, based on the writings of the Fathers of the Church,[clarification needed] holds that his tomb is below the baldachin and the altar of the Basilica in the "Confession". For this reason, many Popes have, from the early years of the Church, been buried near Pope St. Peter in the necropolis beneath the Basilica. Construction of the current basilica, over the old Constantinian basilica, began on 18 April 1506 and finished in 1615. At length, on 18 November 1626 Pope Urban VIII solemnly dedicated the Basilica.[2] 
        <br><br>
        St. Peter's Basilica is neither the Pope's official seat nor first in rank among the Major Basilicas of Rome. This honour is held by the Pope's cathedral, the Archbasilica of St. John Lateran, the mother church of all churches in communion with the Catholic Church.`,

        contentParaFour: `After the crucifixion of Jesus, it is recorded in the Biblical book of the Acts of the Apostles that one of his twelve disciples, Simon known as Saint Peter, a fisherman from Galilee, took a leadership position among Jesus' followers and was of great importance in the founding of the Christian Church. The name Peter is "Petrus" in Latin and "Petros" in Greek, deriving from petra which means "stone" or "rock" in Greek, and is the literal translation of the Aramaic "Kepa", the name given to Simon by Jesus. (John 1:42, and see Matthew 16:18)
        <br><br>
        Catholic tradition holds that Peter, after a ministry of thirty-four years, travelled to Rome and met his martyrdom there along with Paul on 13 October 64 AD during the reign of the Roman Emperor Nero. His execution was one of the many martyrdoms of Christians following the Great Fire of Rome. According to Jerome, Peter was crucified head downwards, by his own request because he considered himself unworthy to die in the same manner as Jesus.[23] The crucifixion took place near an ancient Egyptian obelisk in the Circus of Nero.[24] The obelisk now stands in St. Peter's Square and is revered as a "witness" to Peter's death. It is one of several ancient Obelisks of Rome.[25]`,

        contentParaFive: `By the end of the 15th century, having been neglected during the period of the Avignon Papacy, the old basilica had fallen into disrepair. It appears that the first pope to consider rebuilding or at least making radical changes was Pope Nicholas V (1447–1455). He commissioned work on the old building from Leone Battista Alberti and Bernardo Rossellino and also had Rossellino design a plan for an entirely new basilica, or an extreme modification of the old. His reign was frustrated by political problems and when he died, little had been achieved.[24] He had, however, ordered the demolition of the Colosseum and by the time of his death, 2,522 cartloads of stone had been transported for use in the new building.[24][note 3] The foundations were completed for a new transept and choir to form a domed Latin cross with the preserved nave and side aisles of the old basilica. Some walls for the choir had also been built.[32]`,

        pdf: "Assets/Monuments - pdf/St.pdf",

        zone: zones[3]
    },
    {
        id: "Karnak-Temple-Complex",

        img: "Assets/Images/karnak-temple-complex-1.jpeg",
        imgTwo: "Assets/Images/karnak-temple-complex-2.jpg",
        imgThree: "Assets/Images/karnak-temple-complex-2.jpg",
        imgFour: "Assets/Images/history-4.jpg",
        imgFive: "Assets/Images/knowledge.jpg",

        name: "Karnak Temple Complex",
        location: "Egypt (Luxor)",
        built: "2000 BC",
        excerpt: "The Karnak Temple Complex is a vast open-air museum and one of the largest religious complexes in the world. It was dedicated to the worship of the god Amun.",

        subHeadingOne: "Overview Of Karnak Temple Complex",
        subHeadingTwo: "History Of Karnak Temple Complex",
        subHeadingThree: "European knowledge of Karnak  ",

        headingOne: "Overview",
        headingTwo: "Hypostyle Hall",
        headingThree: "History",
        headingFour: "knowledge ",

        contentParaOne: `The Karnak Temple Complex, commonly known as Karnak (/ˈkɑːr.næk/),[1] comprises a vast mix of temples, pylons, chapels, and other buildings near Luxor, Egypt. Construction at the complex began during the reign of Senusret I (reigned 1971–1926 BCE) in the Middle Kingdom (c. 2000–1700 BCE) and continued into the Ptolemaic Kingdom (305–30 BCE), although most of the extant buildings date from the New Kingdom. The area around Karnak was the ancient Egyptian Ipet-isut ("The Most Selected of Places") and the main place of worship of the 18th Dynastic Theban Triad, with the god Amun as its head. It is part of the monumental city of Thebes, and in 1979 it was added to the UNESCO World Heritage List along with the rest of the city.[2] Karnak gets its name from the nearby, and partly surrounded, modern village of El-Karnak, 2.5 kilometres (1.6 miles) north of Luxor.`,

        contentParaTwo: `The complex is a vast open site and includes the Karnak Open Air Museum. It is believed to be the second[citation needed] most visited historical site in Egypt; only the Giza pyramid complex near Cairo receives more visits. It consists of four main parts, of which only the largest is currently open to the public. The term Karnak often is understood as being the Precinct of Amun-Re only, because this is the only part most visitors see. The three other parts, the Precinct of Mut, the Precinct of Montu, and the dismantled Temple of Amenhotep IV, are closed to the public. There also are a few smaller temples and sanctuaries connecting the Precinct of Mut, the Precinct of Amun-Re, and the Luxor Temple. The Precinct of Mut is very ancient, being dedicated to an Earth and creation deity, but not yet restored. The original temple was destroyed and partially restored by Hatshepsut, although another pharaoh built around it in order to change the focus or orientation of the sacred area. Many portions of it may have been carried away for use in other buildings.
        <br><br>
        The key difference between Karnak and most of the other temples and sites in Egypt is the length of time over which it was developed and used. Construction of temples started in the Middle Kingdom and continued into Ptolemaic times. Approximately thirty pharaohs contributed to the buildings, enabling it to reach a size, complexity, and diversity not seen elsewhere. Few of the individual features of Karnak are unique, but the size and number of features are vast. `,

        contentParaThree: `The Great Hypostyle Hall in the Precinct of Amun-Re has an area of 50,000 sq ft (5,000 m2) with 134 massive columns arranged in 16 rows. One hundred and twenty-two of these columns are 10 metres (33 ft) tall, and the other 12 are 21 metres (69 ft) tall with a diameter of over 3 metres (9.8 ft). The architraves, on top of these columns, are estimated to weigh 70 tons.
        <br><br>
        These architraves may have been lifted to these heights using levers. This would be a time-consuming process and also would require great balance to get to such heights. A common alternative theory regarding how they were moved is that large ramps were constructed of sand, mud, brick or stone and that the stones were then towed up the ramps. If stone had been used for the ramps, they would have been able to use much less material. The top of the ramps presumably would have employed either wooden tracks or cobblestones for towing the megaliths.
        <br><br>
        There is an unfinished pillar in an out-of-the-way location that indicates how it would have been finished. Final carving was executed after the drums were put in place so that it was not damaged while being placed.[6][7] Several experiments moving megaliths with ancient technology were made at other locations – some of which are amongst the largest monoliths in the world.`,

        contentParaFour: `The history of the Karnak complex is largely the history of Thebes and its changing role in the culture. Religious centers varied by region, and when a new capital of the unified culture was established, the religious centers in that area gained prominence. The city of Thebes does not appear to have been of great significance before the Eleventh Dynasty and previous temple building there would have been relatively small, with shrines being dedicated to the early deities of Thebes, the Earth goddess Mut and Montu. Early building was destroyed by invaders. The earliest known artifact found in the area of the temple is a small, eight-sided column from the Eleventh Dynasty, which mentions Amun-Re. Amun (sometimes called Amen) was long the local tutelary deity of Thebes. He was identified with the ram and the goose. The Egyptian meaning of Amun is "hidden" or the "hidden god".[10]
        <br><br>
        Major construction work in the Precinct of Amun-Re took place during the Eighteenth Dynasty, when Thebes became the capital of the unified Ancient Egypt. Almost every pharaoh of that dynasty added something to the temple site. Thutmose I erected an enclosure wall connecting the Fourth and Fifth pylons, which comprise the earliest part of the temple still standing in situ.`,

        contentParaFive: `Thebes' exact placement was unknown in medieval Europe, though both Herodotus and Strabo give the exact location of Thebes and how long up the Nile one must travel to reach it. Maps of Egypt, based on the 2nd century Claudius Ptolemaeus' mammoth work Geographia, had been circulating in Europe since the late 14th century, all of them showing Thebes' (Diospolis) location. Despite this, several European authors of the 15th and 16th centuries who visited only Lower Egypt and published their travel accounts, such as Joos van Ghistele and André Thévet, put Thebes in or close to Memphis.`,

        pdf: "Assets/Monuments - pdf/Karnak Temple Complex.pdf",

        zone: zones[2]
    },
    {
        id: "Mount-Rushmore",

        img: "Assets/Images/mount-rushmore-1.jpeg",
        imgTwo: "Assets/Images/mount-rushmore-2.jpg",
        imgThree: "Assets/Images/history3.jpg",
        imgFour: "Assets/Images/construction-5.jpg",
        imgFive: "Assets/Images/later.jpg",

        name: "Mount Rushmore",
        location: "United States (South Dakota)",
        built: "1927-1941",
        excerpt: "Mount Rushmore National Memorial features the sculpted heads of four U.S. presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. It is a symbol of American democracy and freedom.",

        subHeadingOne: "Six Grandfathers to Mount Rushmore",
        subHeadingTwo: "Construction Of Mount Rushmore",
        subHeadingThree: "Later developments",

        headingOne: "History",
        headingTwo: "Concept, design and funding",
        headingThree: "Construction",
        headingFour: "Later",

        contentParaOne: `The Mount Rushmore National Memorial is a national memorial centered on a colossal sculpture carved into the granite face of Mount Rushmore (Lakota: Tȟuŋkášila Šákpe, or Six Grandfathers) in the Black Hills near Keystone, South Dakota, United States. Sculptor Gutzon Borglum designed the sculpture, called Shrine of Democracy,[2] and oversaw the project's execution from 1927 to 1941 with the help of his son, Lincoln Borglum.[3][4] The sculpture features the 60-foot-tall (18 m) heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln,[5] chosen to represent the nation's birth, growth, development, and preservation, respectively.[6] Mount Rushmore attracts more than two million visitors annually[1] to the memorial park which covers 1,278 acres (2.00 sq mi; 5.17 km2).[7] The mountain's elevation is 5,725 feet (1,745 m) above sea level.[8]`,

        contentParaTwo: `Mount Rushmore and the surrounding Black Hills (Pahá Sápa) are considered sacred by Plains Indians such as the Arapaho, Cheyenne, and Lakota Sioux, who used the area for centuries as a place to pray and gather food, building materials, and medicine.[16] The Lakota called the mountain "Six Grandfathers" (Tȟuŋkášila Šákpe),[17] symbolizing ancestral deities personified as the six directions: north, south, east, west, above (sky), and below (earth).[18] In the latter half of the 19th century, expansion by the United States into the Black Hills led to the Sioux Wars. In the 1868 Treaty of Fort Laramie, the U.S. government granted exclusive use of all of the Black Hills, including Six Grandfathers, to the Sioux in perpetuity.[16][18]
        <br><br>
        Six Grandfathers was a significant part of the spiritual journey taken in the early 1870s by Lakota leader Black Elk (Heȟáka Sápa, also known as "The Sixth Grandfather"),[19] that culminated at the nearby Black Elk Peak,[17] (Hiŋháŋ Káǧa, "Making of Owls")[20][21] U.S. general George Armstrong Custer summited Black Elk Peak a few years later in 1874 during the Black Hills Expedition, which triggered the Black Hills Gold Rush and Great Sioux War of 1876.[22] In 1877, the U.S. broke the Treaty of Fort Laramie and asserted control over the area, leading to an influx of settlers and prospectors.[16][18]`,

        contentParaThree: `By the 1920s, South Dakota had become a U.S. state, and was a popular destination for road trippers visiting the Black Hills National Forest, Wind Cave National Park, and Needles Highway.[16] In 1923,[27][28] the Secretary of the South Dakota State Historical Society, Doane Robinson, who would come to be known as the "Father of Mount Rushmore",[18][29] learned about the "Shrine to the Confederacy", a project to carve the likenesses of Confederate generals into the side of Stone Mountain, Georgia, that had been underway since 1915.[16] Seeking to boost tourism to South Dakota, Robinson began promoting the idea of a similar monument in the Black Hills,[18] representing "not only the wild grandeur of its local geography but also the triumph of western civilization over that geography through its anthropomorphic representation."[30]
        <br><br>
        Robinson initially approached sculptor Lorado Taft, but Taft was ill at the time and uninterested in Robinson's project. Robinson next sought the help of then-U.S. Senator Peter Norbeck, who had established Custer State Park when he was Governor in 1919. Norbeck cautiously supported Robinson's plan, and Robinson began campaigning for it publicly. Some in the local community also supported Robinson's plan, but many opposed it vigorously.[27]
        <br><br>
        On August 20, 1924, Robinson wrote to Gutzon Borglum, the sculptor of "Shrine to the Confederacy", asking him to travel to the Black Hills region to determine whether the carving could be accomplished.[27][31] Borglum, who had involved himself with the Ku Klux Klan, one of the Stone Mountain memorial's funders, had been having disagreements with the Stone Mountain Memorial Association, and on September 24, 1924, travelled to South Dakota to meet Robinson.`,

        contentParaFour: `Between October 4, 1927, and October 31, 1941, Gutzon Borglum and 400 workers[40] sculpted the colossal 60-foot-high (18 m) carvings of United States Presidents George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln to represent the first 150 years of American history. These presidents were selected by Borglum because of their role in preserving the Republic and expanding its territory.[31][30] The carving of Mount Rushmore involved the use of dynamite, followed by the process of "honeycombing", where workers drill holes close together, allowing small pieces to be removed by hand.[41] In total, about 450,000 short tons (410,000 t) of rock were blasted off the mountainside.[42] The image of Thomas Jefferson was originally intended to appear in the area at Washington's right, but after the work there was begun, the rock was found to be unsuitable, so the work on Jefferson's figure was dynamited, and a new figure was sculpted to Washington's left.[31]
        <br><br>
        The chief carver of the mountain was Luigi Del Bianco, an artisan and stonemason who emigrated to the U.S. from Friuli in Italy and was chosen to work on this project because of his understanding of sculptural language and ability to imbue emotion in the carved portraits.[3][4]`,

        contentParaFive: `Harold Spitznagel and Cecil Doty designed the original visitor center, finished in 1957, as part of the Mission 66 effort to improve visitors' facilities at national parks and monuments across the country.[48][49] Ten years of redevelopment work culminated with the completion of extensive visitor facilities and sidewalks in 1998, such as a Visitor Center, the Lincoln Borglum Museum, and the Presidential Trail.
        <br><br>
        On October 15, 1966, Mount Rushmore was listed on the National Register of Historic Places. A 500-word essay giving the history of the United States by Nebraska student William Andrew Burkett was selected as the college-age group winner in a 1934 competition, and that essay was placed on the Entablature on a bronze plate in 1973.[43][50] In 1991, President George H. W. Bush officially dedicated Mount Rushmore.[51]`,

        pdf: "Assets/Monuments - pdf/Mount Rushmore.pdf",

        zone: zones[1]
    },
    {
        id: "Leaning-Tower-of-Pisa",

        img: "Assets/Images/leaning-tower-of-pisa-1.jpeg",
        imgTwo: "Assets/Images/leaning-tower-of-pisa-2.jpg",
        imgThree: "Assets/Images/architecture-3.jpg",
        imgFour: "Assets/Images/history-4.jpg",
        imgFive: "Assets/Images/survive.jpg",

        name: "Leaning Tower of Pisa",
        location: "Italy (Pisa)",
        built: "14th century",
        excerpt: "The Leaning Tower of Pisa is a freestanding bell tower known worldwide for its unintended tilt. It is one of the most famous landmarks in Italy.",

        subHeadingOne: "Architect Of Leaning Tower of Pisa",
        subHeadingTwo: "History following construction",
        subHeadingThree: "Earthquake survival",

        headingOne: "Architect",
        headingTwo: "Construction",
        headingThree: "History",
        headingFour: "survival",

        contentParaOne: `The Leaning Tower of Pisa (Italian: torre pendente di Pisa [ˈtorre penˈdɛnte di ˈpiːza, - ˈpiːsa][1]), or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.
        <br><br>
        The height of the tower is 55.86 metres (183 feet 3 inches) from the ground on the low side and 56.67 m (185 ft 11 in) on the high side. The width of the walls at the base is 2.44 m (8 ft 0 in). Its weight is estimated at 14,500 tonnes (16,000 short tons).[2] The tower has 296 or 294 steps; the seventh floor has two fewer steps on the north-facing staircase.
        
        `,

        contentParaTwo: `The identity of the architect of the tower is a subject of controversy. The design had long been attributed to a man named Guglielmo and to Bonanno Pisano, the latter a well-known 12th-century resident artist of Pisa known for his bronze casting, particularly in the Pisa Duomo.[7][better source needed] Pisano left Pisa in 1185 for Monreale, Sicily, only to return and die in his home town. A piece of cast bearing his name was discovered at the foot of the tower in 1820, but this may be related to the bronze door in the façade of the cathedral that was destroyed in 1595. A 2001 study seems to indicate Diotisalvi was the original architect, due to the time of construction and affinity with other Diotisalvi works, notably the bell tower of San Nicola and the Baptistery, both in Pisa.[8][page needed]`,

        contentParaThree: `Construction of the tower occurred in three stages over 199 years. On 5 January 1172, Donna Berta di Bernardo, a widow and resident of the house of dell'Opera di Santa Maria, bequeathed sixty soldi to the Opera Campanilis petrarum Sancte Marie. The sum was then used toward the purchase of a few stones which still form the base of the bell tower.[9] On 9 August 1173, the foundations of the tower were laid.[10] Work on the ground floor of the white marble campanile began on 14 August of the same year during a period of military success and prosperity. This ground floor is a blind arcade articulated by engaged columns with classical Corinthian capitals.[11] Nearly four centuries later Giorgio Vasari wrote: "Guglielmo, according to what is being said, in the year 1174, together with sculptor Bonanno, laid the foundations of the bell tower of the cathedral in Pisa".[12]
        <br><br>
        The tower began to sink after construction had progressed to the second floor in 1178. This was due to a mere three-metre foundation, set in weak, unstable subsoil, a design that was flawed from the beginning. Construction was subsequently halted for the better part of a century, as the Republic of Pisa was almost continually engaged in battles with Genoa, Lucca, and Florence. This allowed time for the underlying soil to settle. Otherwise, the tower would almost certainly have toppled.[13] On 27 December 1233, the worker Benenato, son of Gerardo Bottici, oversaw the continuation of the tower's construction.[14]
        <br><br>
        On 23 February 1260, Guido Speziale, son of Giovanni Pisano, was elected to oversee the building of the tower.[15] On 12 April 1264, the master builder Giovanni di Simone, architect of the Camposanto, and 23 workers went to the mountains close to Pisa to cut marble. The cut stones were given to Rainaldo Speziale, worker of St. Francesco.[16] In 1272, construction resumed under Di Simone. In an effort to compensate for the tilt, the engineers built upper floors with one side taller than the other. Because of this, the tower is curved.[17] Construction was halted again in 1284 when the Pisans were defeated by the Genoese in the Battle of Meloria.[10][18]`,

        contentParaFour: `Between 1589 and 1592,[22] Galileo Galilei, who lived in Pisa at the time, is said to have dropped two cannonballs of different masses from the tower to demonstrate that their speed of descent was independent of their mass, in keeping with the law of free fall. The primary source for this is the biography Racconto istorico della vita di Galileo Galilei (Historical Account of the Life of Galileo Galilei), written by Galileo's pupil and secretary Vincenzo Viviani in 1654, but only published in 1717, long after his death.[23][24]
        <br><br>
        During World War II, the Allies suspected that the Germans were using the tower as an observation post. Leon Weckstein, a U.S. Army sergeant sent to confirm the presence of German troops in the tower, was impressed by the beauty of the cathedral and its campanile, and thus refrained from ordering an artillery strike, sparing it from destruction.[25][26]
        <br><br>
        Numerous efforts have been made to restore the tower to a vertical orientation or at least keep it from falling over. Most of these efforts failed; some worsened the tilt. On 27 February 1964, the government of Italy requested aid in preventing the tower from toppling. It was, however, considered important to retain the current tilt, due to the role that this element played in promoting the tourism industry of Pisa.[27]
        <br><br>
        Starting in 1993, 870 tonnes of lead counterweights were added, which straightened the tower slightly.[28]`,

        contentParaFive: `The tower has survived at least four strong earthquakes since 1280. A 2018 engineering investigation concluded that the tower withstood the tremors because of dynamic soil-structure interaction: the height and stiffness of the tower combined with the softness of the foundation soil influences the tower's vibrational characteristics in such a way that it does not resonate with earthquake ground motion. The same soft soil that caused the leaning and brought the tower to the verge of collapse helped it survive.[38] `,

        pdf: "Assets/Monuments - pdf/Leaning Tower of Pisa.pdf",

        zone: zones[3]
    },
    {
        id: "Bagan-Temples",

        img: "Assets/Images/bagan-temples-1.jpeg",
        imgTwo: "Assets/Images/bagan-temples-2.jpg",
        imgThree: "Assets/Images/bagan-temples-2.jpg",
        imgFour: "Assets/Images/architecture-2.jpg",
        imgFive: "Assets/Images/construction-5.jpg",

        name: "Bagan Temples",
        location: "Myanmar (Bagan)",
        built: "11th-13th centuries",
        excerpt: "The Bagan Temples form one of the richest archaeological sites in Asia, with thousands of ancient Buddhist temples, stupas, and monasteries spread across the plains of Bagan.",

        subHeadingOne: "9th to 13th centuries",
        subHeadingTwo: "Architecture, Stupas",
        subHeadingThree: "Innovations Of Bagan Temples",

        headingOne: "History",
        headingTwo: "Etymology",
        headingThree: "Architecture",
        headingFour: "Innovations",

        contentParaOne: `Bagan (Burmese: ပုဂံ; MLCTS: pu.gam, IPA: [bəɡàɰ̃]; formerly Pagan) is an ancient city and a UNESCO World Heritage Site in the Mandalay Region of Myanmar.[1] From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom, the first kingdom that unified the regions that would later constitute Myanmar. During the kingdom's height between the 11th and 13th centuries, more than 10,000 Buddhist temples, pagodas and monasteries were constructed in the Bagan plains alone,[2] of which the remains of over 2200 temples and pagodas survive.`,

        contentParaTwo: `According to the Burmese chronicles, Bagan was founded in the second century AD, and fortified in 849 AD by King Pyinbya, 34th successor of the founder of early Bagan.[6] Mainstream scholarship however holds that Bagan was founded in the mid-to-late 9th century by the Mranma (Burmans), who had recently entered the Irrawaddy valley from the Nanzhao Kingdom. It was among several competing Pyu city-states until the late 10th century when the Burman settlement grew in authority and grandeur.[7]
        <br><br>
        From 1044 to 1287, Bagan was the capital as well as the political, economic and cultural nerve center of the Bagan Empire. Over the course of 250 years, Bagan's rulers and their wealthy subjects constructed over 10,000 religious monuments (approximately 1000 stupas, 10,000 small temples and 3000 monasteries)[2] in an area of 104 km2 (40 sq mi) in the Bagan plains. The prosperous city grew in size and grandeur, and became a cosmopolitan center for religious and secular studies, specializing in Pali scholarship in grammar and philosophical-psychological (abhidhamma) studies as well as works in a variety of languages on prosody, phonology, grammar, astrology, alchemy, medicine, and legal studies.[8] The city attracted monks and students from as far as India, Sri Lanka and the Khmer Empire.`,

        contentParaThree: `Bagan is the present-day standard Burmese pronunciation of the Burmese word Pugan (ပုဂံ), derived from Old Burmese Pukam (ပုကမ်). Its classical Pali name is Arimaddanapura (အရိမဒ္ဒနာပူရ, lit. "the City that Tramples on Enemies"). Its other names in Pali are in reference to its extreme dry zone climate: Tattadesa (တတ္တဒေသ, "parched land"), and Tampadīpa (တမ္ပဒီပ, "bronzed country").[4] The Burmese chronicles also report other classical names of Thiri Pyissaya (သီရိပစ္စယာ; Pali: Siripaccaya) and Tampawaddy (တမ္ပဝတီ; Pali: Tampavatī).[5]
        <br><br>
        The culture of Bagan was dominated by religion. The religion of Bagan was fluid, syncretic and by later standards, unorthodox. It was largely a continuation of religious trends in the Pyu era where Theravada Buddhism co-existed with Mahayana Buddhism, Tantric Buddhism, various Hindu (Saivite, and Vaishana) schools as well as native animist (nat) traditions. While the royal patronage of Theravada Buddhism since the mid-11th century had enabled the Buddhist school to gradually gain primacy, other traditions continued to thrive throughout the Pagan period to degrees later unseen.[8]
        <br><br>
        Bagan's basic physical layout had already taken shape by the late 11th century, which was the first major period of monument building. A main strip extending for about 9 km along the east bank of the Irrawaddy emerged during this period, with the walled core (known as "Old Bagan") in the middle. `,

        contentParaFour: `Bagan stands out for not only the sheer number of religious edifices of Myanmar but also the magnificent architecture of the buildings, and their contribution to Burmese temple design. The artistry of the architecture of pagodas in Bagan proves the achievement of Myanmar craftsmen in handicrafts. The Bagan temple falls into one of two broad categories: the stupa-style solid temple and the gu-style (ဂူ) hollow temple.
        <br><br>
        A stupa, also called a pagoda or chedi, is a massive structure, typically with a relic chamber inside. The Bagan stupas or pagodas evolved from earlier Pyu designs, which in turn were based on the stupa designs of the Andhra region, particularly Amaravati and Nagarjunakonda in present-day south-eastern India, and to a smaller extent to Ceylon.[25] The Bagan-era stupas in turn were the prototypes for later Burmese stupas in terms of symbolism, form and design, building techniques and even materials.[26]
        <br><br>
        Originally, a Ceylonese stupa had a hemispheric body (Pali: anda "the egg"), on which a rectangular box surrounded by a stone balustrade (harmika) was set. Extending up from the top of the stupa was a shaft supporting several ceremonial umbrellas. The stupa Buddhist cosmos: its shape symbolizes Mount Meru while the umbrella mounted on the brickwork represents the world's axis.[27] The brickwork pediment was often covered in stucco and decorated in relief. Pairs or series of ogres as guardian figures ('bilu') were a favourite theme in the Bagan period.[28]`,

        contentParaFive: `Although the Burmese temple designs evolved from Indic, Pyu (and possibly Mon) styles, the techniques of vaulting seem to have developed in Bagan itself. The earliest vaulted temples in Bagan date to the 11th century, while the vaulting did not become widespread in India until the late 12th century. The masonry of the buildings shows "an astonishing degree of perfection", where many of the immense structures survived the 1975 earthquake more or less intact.[27] (Unfortunately, the vaulting techniques of the Bagan era were lost in the later periods. Only much smaller gu style temples were built after Bagan. In the 18th century, for example, King Bodawpaya attempted to build the Mingun Pagoda, in the form of spacious vaulted chambered temple but failed as craftsmen and masons of the later era had lost the knowledge of vaulting and keystone arching to reproduce the spacious interior space of the Bagan hollow temples.[26])`,

        pdf: "Assets/Monuments - pdf/Bagan Temples.pdf",

        zone: zones[2]
    },
    {
        id: "Sydney-Opera-House",

        img: "Assets/Images/sydney-opera-house-1.jpeg",
        imgTwo: "Assets/Images/sydney-opera-house-2.jpg",
        imgThree: "Assets/Images/sydney-opera-house-2.jpg",
        imgFour: "Assets/Images/construction-4.jpg",
        imgFive: "Assets/Images/history-1.jpg",

        name: "Sydney Opera House",
        location: "Australia (Sydney)",
        built: "1959-1973",
        excerpt: "The Sydney Opera House is a modern architectural masterpiece and one of the most recognizable buildings in the world. It hosts a variety of performing arts events and is a UNESCO World Heritage Site.",

        subHeadingOne: "Description OF Sydney Opera House",
        subHeadingTwo: "Performance venues and facilities",
        subHeadingThree: "Origins of the project",

        headingOne: "Description",
        headingTwo: "Significant changes to Utzon's design",
        headingThree: "facilities",
        headingFour: "History",

        contentParaOne: `The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.[3][4]
        <br><br>
        Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall, the building was formally opened by Queen Elizabeth II on 20 October 1973,[5] 16 years after Utzon's 1957 selection as winner of an international design competition. The Government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction. The government's decision to build Utzon's design is often overshadowed by circumstances that followed, including cost and scheduling overruns as well as the architect's ultimate resignation.[6]`,

        contentParaTwo: `The facility features a modern expressionist design, with a series of large precast concrete "shells",[14] each composed of sections of a sphere of 75.2 metres (246 ft 8.6 in) radius,[15] forming the roofs of the structure, set on a monumental podium. The building covers 1.8 hectares (4.4 acres) of land and is 183 m (600 ft) long and 120 m (394 ft) wide at its widest point. It is supported on 588 concrete piers sunk as much as 25 m (82 ft) below sea level. The highest roof point is 67 metres above sea-level which is the same height as that of a 22-storey building. The roof is made of 2,194 pre-cast concrete sections, which weigh up to 15 tonnes each.[16]
        <br><br>
        Although the roof structures are commonly referred to as "shells" (as in this article), they are precast concrete panels supported by precast concrete ribs, not shells in a strictly structural sense.[17] Though the shells appear uniformly white from a distance, they actually feature a subtle chevron pattern composed of 1,056,006 tiles in two colours: glossy white and matte cream. The tiles were manufactured by the Swedish company Höganäs AB which generally produced stoneware tiles for the paper-mill industry.[18]
        <br><br>
        Apart from the tile of the shells and the glass curtain walls of the foyer spaces, the building's exterior is largely clad with aggregate panels composed of pink granite quarried at Tarana. Significant interior surface treatments also include off-form concrete, Australian white birch plywood supplied from Wauchope in northern New South Wales, and brush box glulam.[19]`,

        contentParaThree: `The major hall, which was originally to be a multipurpose opera/concert hall, became solely a concert hall, called the Concert Hall. The minor hall, originally for stage productions only, incorporated opera and ballet functions and was called the Opera Theatre, later renamed the Joan Sutherland Theatre. As a result, the Joan Sutherland Theatre is inadequate to stage large-scale opera and ballet. A theatre, a cinema and a library were also added. These were later changed to two live drama theatres and a smaller theatre "in the round". These now comprise the Drama Theatre, the Playhouse and the Studio respectively. These changes were primarily because of inadequacies in the original competition brief, which did not make it adequately clear how the Opera House was to be used. The layout of the interiors was changed, and the stage machinery, already designed and fitted inside the major hall, was pulled out and largely thrown away, as detailed in the 1968 BBC TV documentary Autopsy on a Dream, which "chronicles the full spectrum of controversy surrounding the construction of the Sydney Opera House".[52]
        <br><br>
        Externally, the cladding to the podium and the paving (the podium was originally not to be clad down to the water, but to be left open).
        <br><br>
        Utzon's plywood corridor designs, and his acoustic and seating designs for the interior of both major halls, were scrapped completely. His design for the Concert Hall was rejected as it only seated 2000, which was considered insufficient.[38] Utzon employed the acoustic consultant Lothar Cremer, and his designs for the major halls were later modelled and found to be very good. The subsequent Todd, Hall and Littlemore versions of both major halls have some problems with acoustics, particularly for the performing musicians. The orchestra pit in the Joan Sutherland Theatre is cramped and dangerous to musicians' hearing.[53] The Concert Hall has a very high roof, leading to a lack of early reflections onstage—perspex rings (the "acoustic clouds") hanging over the stage were added shortly before opening in an (unsuccessful) attempt to address this problem.
        `,

        contentParaFour: `The Sydney Opera House includes a number of performance venues:[20]
        <br><br>
        Concert Hall: With 2,679 seats, the home of the Sydney Symphony Orchestra and used by a large number of other concert presenters. It contains the Sydney Opera House Grand Organ, the largest mechanical tracker action organ in the world, with over 10,000 pipes.[21]
        <br><br>
        Joan Sutherland Theatre: A proscenium theatre with 1,507 seats,[22] the Sydney home of Opera Australia and The Australian Ballet. Until 17 October 2012 it was known as the Opera Theatre.[23][24]
        <br><br>
        Drama Theatre: A proscenium theatre with 544 seats, used by the Sydney Theatre Company and other dance and theatrical presenters.
        Playhouse: A non-proscenium end-stage theatre with 398 seats.
        <br><br>
        Studio: A flexible space with 280 permanent seats (some of which can be folded up) and a maximum capacity of 400, depending on configuration.
        <br><br>
        Utzon Room: A small multi-purpose venue for parties, corporate functions and small productions (such as chamber music performances).
        <br><br>
        Yallamundi Rooms: A function space hosting up to 400 people, often used for weddings or business conferences.`,

        contentParaFive: `Planning began in the late 1940s when Eugene Goossens, the Director of the New South Wales State Conservatorium of Music, lobbied for a suitable venue for large theatrical productions. The normal venue for such productions, the Sydney Town Hall, was not considered large enough. By 1954 Goossens succeeded in gaining the support of New South Wales Premier Joseph Cahill, who called for designs for a dedicated opera house. It was also Goossens who insisted that Bennelong Point be the site: Cahill had wanted it to be on or near Wynyard Railway Station in the northwest of the central business district.[25]`,

        pdf: "Assets/Monuments - pdf/Sydney Opera House.pdf",

        zone: zones[0]
    },
    {
        id: "Mont-Saint-Michel",

        img: "Assets/Images/mont-saint-michel-1.jpeg",
        imgTwo: "Assets/Images/mont-saint-michel-2.jpg",
        imgThree: "Assets/Images/mont-saint-michel-2.jpg",
        imgFour: "Assets/Images/history3.jpg",
        imgFive: "Assets/Images/tides.jpg",

        name: "Mont Saint-Michel",
        location: "France",
        built: "8th century-present",
        excerpt: "Mont Saint-Michel is a tidal island and commune in Normandy, France, known for its medieval abbey and stunning architectural beauty.",

        subHeadingOne: "Formation, Geography",
        subHeadingTwo: "From the 8th century onward",
        subHeadingThree: "Tides Of Mont Saint-Michel",

        headingOne: "Geography",
        headingTwo: "Tidal island",
        headingThree: "History",
        headingFour: "Tides",

        contentParaOne: `Mont-Saint-Michel[3] (French pronunciation: [lə mɔ̃ sɛ̃ miʃɛl]; Norman: Mont Saint Miché; English: Saint Michael's Mount) is a tidal island and mainland commune in Normandy, France.
        <br><br>
        The island[4] lies approximately one kilometre (one-half nautical mile) off France's north-western coast, at the mouth of the Couesnon River near Avranches and is 7 hectares (17 acres) in area. The mainland part of the commune is 393 hectares (971 acres) in area so that the total surface of the commune is 400 hectares (990 acres).[5][6] As of 2019, the island had a population of 29.[7]
        <br><br>
        The commune's position—on an island just a few hundred metres (yards) from land—made it accessible at low tide to the many pilgrims to its abbey, and defensible as the incoming tide stranded, drove off, or drowned would-be assailants. The island remained unconquered during the Hundred Years' War. A small garrison fended off a full attack by the English in 1433.[8] Louis XI recognised the benefits of its natural defence and turned it into a prison. The abbey was used regularly as a prison during the Ancien Régime.`,

        contentParaTwo: `Now a rocky tidal island, the mount occupied dry land in prehistoric times. As sea levels rose, erosion reshaped the coastal landscape, and several outcrops of granite emerged in the bay, having resisted the wear and tear of the ocean better than the surrounding rocks. These included Lillemer, Mont Dol, Tombelaine (the island just to the north), and Mont Tombe, later called Mont-Saint-Michel.
        <br><br>
        Mont-Saint-Michel consists of leucogranite which solidified from an underground intrusion of molten magma about 525 million years ago, during the Cambrian period, as one of the younger parts of the Mancellian granitic batholith.[12] Early studies of Mont-Saint-Michel by French geologists sometimes describe the leucogranite of the Mont as "granulite", but this granitic meaning of granulite is now obsolete.[13]
        <br><br>
        The mount has a circumference of about 960 m (3,150 ft) and its highest point is 92 m (302 ft) above sea level.[14]`,

        contentParaThree: `The connection between Mont-Saint-Michel and the mainland has changed over the centuries. Previously connected by a tidal causeway uncovered only at low tide, this was converted into a raised causeway in 1879, preventing the tide from scouring the silt around the mount. The coastal flats have been polderised to create pastureland, decreasing the distance between the shore and the island, and the Couesnon river has been canalised, reducing the dispersion of the flow of water. These factors have all encouraged silting-up of the bay.
        <br><br>
        In June 2006, the French prime minister and regional authorities announced a €200 million project (Projet Mont-Saint-Michel)[15] to build a hydraulic dam using the waters of the Couesnon and the tides to help remove the accumulated silt, and to make Mont-Saint-Michel an island again. The construction of the dam began in 2009. The project included the removal of the causeway and its visitor car park. Since April 2012, the new car park on the mainland has been located 2.5 kilometres (1+1⁄2 mi) from the island. Visitors can walk or use shuttles to cross the causeway.
        <br><br>
        In July 2014, the new bridge, by architect Dietmar Feichtinger, was opened to the public. The light bridge allows waters to flow freely around the island and improves the efficiency of the now-operational dam. The bridge, which cost €209 million, was opened by President François Hollande.[16]`,

        contentParaFour: `Before the construction of the first monastic establishment in the 8th century, the island was called Mont Tombe (Latin: tumba). According to a legend, the archangel Michael appeared in 708 to Aubert of Avranches, the bishop of Avranches, and instructed him to build a church on the rocky islet.[18]
        <br><br>
        Unable to defend his kingdom against the assaults of the Vikings, the king of the Franks agreed to grant the Cotentin peninsula and the Avranchin, including Mont-Saint-Michel traditionally linked to the city of Avranches, to the Bretons in the Treaty of Compiègne. This marked the beginning of a brief period of Breton possession of the Mont. In fact, these lands and Mont-Saint-Michel were never really included in the duchy of Brittany. Around 989–990 these traditional bishoprics, dependent of the archbishopric of Rouen and that had been left vacant during the time of the Viking raids, regained their bishops.[19]
        <br><br>
        The mount gained strategic significance again in 933 when William I Longsword annexed the Cotentin Peninsula from the weakened Duchy of Brittany. This made the mount definitively part of Normandy, and is depicted in the Bayeux Tapestry, which commemorates the Norman Conquest. Harold Godwinson is pictured on the tapestry rescuing two Norman knights from the quicksand in the tidal flats during the Breton–Norman war. Norman ducal patronage financed the spectacular Norman architecture of the abbey in subsequent centuries.[citation needed]    `,

        contentParaFive: `The tides vary greatly, at roughly 14 metres (46 ft) between highest and lowest water marks. Popularly nicknamed "St. Michael in peril of the sea" by medieval pilgrims making their way across the flats, the mount can still pose dangers for visitors who avoid the causeway and attempt the hazardous walk across the sands from the neighbouring coast.
        <br><br>
        Polderisation and occasional flooding have created salt marsh meadows that were found to be ideally suited to grazing sheep. The well-flavoured meat that results from the diet of the sheep in the pré salé (salt meadow) makes agneau de pré-salé (salt meadow or salt marsh lamb) a local specialty that may be found on the menus of restaurants that depend on income from the many visitors to the mount.`,

        pdf: "Assets/Monuments - pdf/Mont Saint.pdf",

        zone: zones[3]
    },
    {
        id: "Brandenburg-Gate",

        img: "Assets/Images/brandenburg-gate-1.jpeg",
        imgTwo: "Assets/Images/brandenburg-gate-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/war.jpg",
        imgFive: "Assets/Images/brandenburg-gate-1.jpeg",

        name: "Brandenburg Gate",
        location: "Germany (Berlin)",
        built: "1791",
        excerpt: "The Brandenburg Gate is a neoclassical triumphal arch and one of the most famous landmarks in Berlin. It has played a significant role in German history, serving as a symbol of peace and unity.",

        subHeadingOne: "Previous gates",
        subHeadingTwo: "Cold War",
        subHeadingThree: "Post-1989",

        headingOne: "History",
        headingTwo: "Description",
        headingThree: "War",
        headingFour: "Post-1989",

        contentParaOne: `The Brandenburg Gate (German: Brandenburger Tor [ˈbʁandn̩ˌbʊʁɡɐ ˈtoːɐ̯] ⓘ) is an 18th-century neoclassical monument in Berlin. One of the best-known landmarks of Germany, it was erected on the site of a former city gate that marked the start of the road from Berlin to Brandenburg an der Havel, the former capital of the Margraviate of Brandenburg. The current structure was built from 1788 to 1791 by orders of King Frederick William II of Prussia, based on designs by the royal architect Carl Gotthard Langhans. The bronze sculpture of the quadriga crowning the gate is a work by the sculptor Johann Gottfried Schadow.
        <br><br>
        The Brandenburg Gate is located in the western part of the city centre within Mitte, at the junction of Unter den Linden and Ebertstraße. The gate dominates the Pariser Platz to the east, while to the immediate west it opens onto the Platz des 18. März beyond which the Straße des 17. Juni begins. One block to the north stands the Reichstag building, home to the German parliament (Bundestag), and further to the west is the Tiergarten inner-city park. The gate also forms the monumental entry to Unter den Linden, which leads directly to the former City Palace of the Prussian monarchs (now housing the Humboldt Forum museum), and the Berlin Cathedral.`,

        contentParaTwo: `In the time of King Frederick William I (1688), shortly after the Thirty Years' War and a century before today's Brandenburg Gate was constructed, Berlin was a small walled city within a star fort with several named gates: Spandauer Tor, St. Georgen Tor, Stralower Tor, Cöpenicker Tor, Neues Tor, and Leipziger Tor (see map). Relative peace, a policy of religious tolerance, and status as capital of the Kingdom of Prussia facilitated the growth of the city. With the construction of Dorotheenstadt around 1670 and its inclusion in Berlin's city fortifications, a first gate was built on the site, approximately at the level of today's Schadowstraße, consisting of a breach through the raised wall and a drawbridge over the dug moat.[5]
        <br><br>
        With the expansion of Dorotheenstadt to the west and the construction of the Berlin Customs Wall (German: Akzisemauer) in 1734, the latter of which enclosed the old fortified city and many of its then suburbs, a predecessor of today's Brandenburg Gate was built by the Court Architect Philipp Gerlach as a city gate on the road to Brandenburg an der Havel.[6] The gate system consisted of two Baroque pylons decorated with pilasters and trophies, to which the gate wings were attached. In addition to the ornamental gate, there were simple passages for pedestrians in the wall, which were decorated with ornamental vases at this point.[7]`,

        contentParaThree: `he central portion of the gate draws from the tradition of the Roman triumphal arch, although in style it is one of the first examples of Greek Revival architecture in Germany.[2] The gate is supported by twelve fluted Doric columns, six to each side, forming five passageways. There are also walls between the pairs of columns at front and back, decorated with classicizing reliefs of the Labours of Hercules. Citizens were originally allowed to use only the outermost two passageways on each side. Its design is based on the Propylaea, the gateway to the Acropolis of Athens,[2] which also had a front with six Doric columns, though these were topped by a triangular pediment.
        <br><br>
        The central portion is flanked by L-shaped wings on either side, at a lower height, but using the same Doric order. Next to, and parallel with, the gate these are open "stoas", but the longer sides, stretching beyond the east side, have buildings set back from the columns. These are called "custom houses" for the Berlin Customs Wall, which was in force until 1860, or "gatehouses".
        <br><br>
        The Doric order of the gate mostly, but not entirely, follows Greek precedents, which had recently become much better understood by the publication of careful illustrated records. The Greek Doric does not have bases to the columns, and the fluting here follows the Greek style for Ionic and Corinthian columns, with flat fillets rather than sharp arrises between the flutes, and rounded ends to the top and bottom of flutes.`,

        contentParaFour: `After Germany's surrender at the end of the war, the Brandenburg Gate was located in the Soviet occupation zone, directly next to the border to the zone occupied by the British, which later became the border between East and West Berlin. In connection with the East German uprising of 1953, three men took down the red flag on the roof of the Brandenburg Gate and, shortly after noon on 17 June 1953, hoisted the joint black-red-gold flag of East Germany and West Germany. One of the three men, Wolfgang Panzer, probably paid for this action with his life and was never seen again.[23]
        <br><br>
        On 21 September 1956, the East Berlin magistrates decided to restore the only surviving but damaged former city gate. Despite heated arguments and mutual accusations, both parts of Berlin worked together on the restoration. The holes were patched, but were visible for many years. The quadriga was completely recreated based on a plaster cast from 1942; the reconstruction was carried out by the sculptor Otto Schnitzer and the traditional foundry Hermann Noack in Friedenau. The restoration was completed on 14 December 1957. The Iron Cross standard above the quadriga was replaced by a wreath, as originally intended, but the Iron Cross returned after German Reunification, and remains in place in 2024.`,

        contentParaFive: `When the Revolutions of 1989 occurred and the wall was demolished, the gate symbolized freedom and the desire to unify the city of Berlin. Thousands of people gathered at the wall to celebrate its fall on 9 November 1989. On 22 December 1989, the Brandenburg Gate border crossing was reopened when Helmut Kohl, the West German chancellor, walked through to be greeted by Hans Modrow, the East German prime minister. Demolition of the rest of the wall around the area took place the following year. In 1990, the quadriga was removed from the gate as part of renovation work carried out by the East German authorities following the fall of the wall in November 1989. Germany was officially reunified in October 1990.`,

        pdf: "Assets/Monuments - pdf/Brandenburg Gate.pdf",

        zone: zones[3]
    },
    {
        id: "Edinburgh-Castle",

        img: "Assets/Images/edinburgh-castle-1.jpeg",
        imgTwo: "Assets/Images/edinburgh-castle-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/war.jpg",
        imgFive: "Assets/Images/edinburgh-castle-2.jpg",

        name: "Edinburgh Castle",
        location: "United Kingdom (Scotland)",
        built: "12th century",
        excerpt: "Edinburgh Castle is a historic fortress located on Castle Rock in the heart of Edinburgh. It has served as a royal residence, military stronghold, and symbol of Scottish heritage.",

        subHeadingOne: "Pre-history of the Castle Rock",
        subHeadingTwo: "Wars of Scottish Independence",
        subHeadingThree: "Description",

        headingOne: "History",
        headingTwo: "Early Middle Ages",
        headingThree: "Wars ",
        headingFour: "Description",

        contentParaOne: `Edinburgh Castle is a historic castle in Edinburgh, Scotland. It stands on Castle Rock, which has been occupied by humans since at least the Iron Age. There has been a royal castle on the rock since at least the reign of Malcolm III in the 11th century, and the castle continued to be a royal residence until 1633. From the 15th century, the castle's residential role declined, and by the 17th century it was principally used as a military garrison. Its importance as a part of Scotland's national heritage was recognised increasingly from the early 19th century onwards, and various restoration programmes have been carried out over the past century and a half.
        <br><br>
        Edinburgh Castle has played a prominent role in Scottish history, and has served variously as a royal residence, an arsenal, a treasury, a national archive, a mint, a prison, a military fortress, and the home of the Honours of Scotland - the Scottish regalia. As one of the most important strongholds in the Kingdom of Scotland, the castle was involved in many historical conflicts from the Wars of Scottish Independence in the 14th century to the Jacobite rising of 1745. Research undertaken in 2014 identified 26 sieges in its 1,100-year history, giving it a claim to having been "the most besieged place in Great Britain and one of the most attacked in the world"`,

        contentParaTwo: `The castle stands upon the plug of an extinct volcano, which is estimated to have risen about 350 million years ago during the lower Carboniferous period. The Castle Rock is the remains of a volcanic pipe, which cut through the surrounding sedimentary rock before cooling to form very hard dolerite, a type of basalt. Subsequent glacial erosion was resisted by the dolerite, which protected the softer rock to the east, leaving a crag and tail formation.[8]
        <br><br>
        The summit of the Castle Rock is 130 metres (430 ft) above sea level, with rocky cliffs to the south, west, and north, rising to a height of 80 metres (260 ft) above the surrounding landscape.[9] This means that the only readily accessible route to the castle lies to the east, where the ridge slopes more gently. The defensive advantage of such a site is self-evident, but the geology of the rock also presents difficulties, since basalt is extremely impermeable. Providing water to the Upper Ward of the castle was problematic, and despite the sinking of a 34-metre (112 ft) deep well, the water supply often ran out during drought or siege,[10] including during the Lang Siege in 1573.[11]`,

        contentParaThree: `The castle does not re-appear in contemporary historical records from the time of Ptolemy until around AD 600. Then, in the epic Welsh poem Y Gododdin there is a reference to Din Eidyn, "the stronghold of Eidyn". This has been generally assumed to refer to the Castle Rock.[31] The poem tells of the Gododdin King Mynyddog Mwynfawr,[32] and his band of warriors, who, after a year of feasting in their fortress, set out to do battle with the Angles at "Catreath" (possibly Catterick) in Yorkshire. Despite performing glorious deeds of valour and bravery, the poem relates that the Gododdin were massacred.[33]
        <br><br>
        The Irish annals record that in 638, after the events related in Y Gododdin, "Etin" was besieged by the Angles under Oswald of Northumbria, and the Gododdin were defeated.[34] The territory around Edinburgh then became part of the Kingdom of Northumbria, which was itself absorbed by England in the 10th century. Lothian became part of Scotland, during the reign of Indulf (r.954–962).[35]
        <br><br>
        The archaeological evidence for the period in question is based entirely on the analysis of middens (domestic refuse heaps), with no evidence of structures. Few conclusions can therefore be derived about the status of the settlement during this period, although the midden deposits show no clear break since Roman times.[36]`,

        contentParaFour: `A century later, in 1286, on the death of King Alexander III, the throne of Scotland became vacant. Edward I of England was appointed to adjudicate the competing claims for the Scottish crown, but used the opportunity to attempt to establish himself as the feudal overlord of Scotland. During the negotiations, Edward stayed briefly at Edinburgh Castle and may have received homage there from the Scottish nobles.[46]
        <br><br>
        In March 1296, Edward I launched an invasion of Scotland, unleashing the First War of Scottish Independence. Edinburgh Castle soon came under English control, surrendering after a three days long bombardment.[47] Following the siege, Edward had many of the Scottish legal records and royal treasures moved from the castle to England.[46] A large garrison numbering 325 men was installed in 1300.[48] Edward also brought to Scotland his master builders of the Welsh castles, including Thomas de Houghton and Master Walter of Hereford, both of whom travelled from Wales to Edinburgh.[49] After the death of Edward I in 1307, however, England's control over Scotland weakened. On 14 March 1314, a surprise night attack by Thomas Randolph, 1st Earl of Moray recaptured the castle. John Barbour's narrative poem The Brus relates how a party of thirty hand-picked men was guided by one William Francis, a member of the garrison who knew of a route along the north face of the Castle Rock and a place where the wall might be scaled. Making the difficult ascent, Randolph's men scaled the wall, surprised the garrison and took control.[50] Robert the Bruce immediately ordered the slighting of the castle to prevent its re-occupation by the English.[51] Four months later, his army secured victory at the Battle of Bannockburn.[52][53]`,

        contentParaFive: `Edinburgh Castle is located at the top of the Royal Mile, at the west end of Edinburgh's Old Town. The volcanic Castle Rock offers a naturally defended position, with sheer cliffs to north and south, and a steep ascent from the west. The only easy approach is from the town to the east, and the castle's defences are situated accordingly, with a series of gates protecting the route to the summit of the Castle Rock.[118] In front of the castle is a long sloping forecourt known as the Esplanade. Originally the Spur, a 16th-century hornwork, was located here. The present Esplanade was laid out as a parade ground in 1753, and extended in 1845.[56] It is upon this Esplanade that the Edinburgh Military Tattoo takes place annually. From the Esplanade the Half Moon Battery is prominent, with the Royal Palace to its left.[119]`,

        pdf: "Assets/Monuments - pdf/Edinburgh Castle.pdf",

        zone: zones[3]
    },
    {
        id: "Lalibela-Churches",

        img: "Assets/Images/lalibela-churches-1.jpeg",
        imgTwo: "Assets/Images/lalibela-churches-2.jpg",
        imgThree: "Assets/Images/history3.jpg",
        imgFour: "Assets/Images/architecture-2.jpg",
        imgFive: "Assets/Images/lalibela-churches-2.jpg",

        name: "Lalibela Churches",
        location: "Ethiopia",
        built: "12th-13th centuries",
        excerpt: "The Lalibela Churches are a UNESCO World Heritage Site and consist of 11 monolithic rock-hewn churches carved out of solid rock. They are significant pilgrimage sites for Ethiopian Orthodox Christians.",

        subHeadingOne: "According to local tradition",
        subHeadingTwo: "The rock-hewn churches at Lalibela",
        subHeadingThree: "Several recent conservation",

        headingOne: "History",
        headingTwo: "Archaeological site",
        headingThree: "Architecture",
        headingFour: "Conservation",

        contentParaOne: `The eleven Rock-hewn Churches of Lalibela are monolithic churches located in the western Ethiopian Highlands near the town of Lalibela, named after the late-12th and early-13th century King Gebre Meskel Lalibela of the Zagwe dynasty, who commissioned the massive building project of 11 rock-hewn churches to recreate the holy city of Jerusalem in his own kingdom. The site remains in use by the Ethiopian Orthodox Christian Church to this day, and it remains an important place of pilgrimage for Ethiopian Orthodox worshipers.[1] It took 24 years to build all the 11 rock hewn churches.`,

        contentParaTwo: `According to local tradition, Lalibela (traditionally known as Roha) was founded by an Agew family called the Zagwa or Zagwe in 1137 AD.[2] The churches are said to have been built during the Zagwe dynasty, under the rule of King Gebre Mesqel Lalibela[3] (r. ca. 1181–1221 AD),[4] although it is more likely that they evolved into their current form over the course of several phases of construction and alteration of preexisting structures.[5]
        <br><br>
        The site of the rock-hewn churches of Lalibela was first included on the UNESCO World Heritage List in 1978.[6]`,

        contentParaThree: `At an altitude of around 2,480 metres (8,140 ft),[2] the archaeological site consists of five churches north of the town's river Jordan, five south of the river, and one independently located. The churches in each grouping are connected by a system of tunnels and trenches. Biete Giorgis, the eleventh church, is connected to the others by trenches. The northern churches are Biete Medhane Alem, Biete Maryam, Biete Golgotha Mikael, Biete Meskel, and Biete Denagel. The southern churches are Biete Amanuel, Biete Qeddus Mercoreus, Biete Abba Libanos, Biete Lehem, and Biete Gabriel-Rufael.[7]
        <br><br>
        At an altitude of around 2,480 metres (8,140 ft),[2] the archaeological site consists of five churches north of the town's river Jordan, five south of the river, and one independently located. The churches in each grouping are connected by a system of tunnels and trenches. Biete Giorgis, the eleventh church, is connected to the others by trenches. The northern churches are Biete Medhane Alem, Biete Maryam, Biete Golgotha Mikael, Biete Meskel, and Biete Denagel. The southern churches are Biete Amanuel, Biete Qeddus Mercoreus, Biete Abba Libanos, Biete Lehem, and Biete Gabriel-Rufael.[7]
        <br><br>
        At an altitude of around 2,480 metres (8,140 ft),[2] the archaeological site consists of five churches north of the town's river Jordan, five south of the river, and one independently located. The churches in each grouping are connected by a system of tunnels and trenches. Biete Giorgis, the eleventh church, is connected to the others by trenches. The northern churches are Biete Medhane Alem, Biete Maryam, Biete Golgotha Mikael, Biete Meskel, and Biete Denagel. The southern churches are Biete Amanuel, Biete Qeddus Mercoreus, Biete Abba Libanos, Biete Lehem, and Biete Gabriel-Rufael.[7]`,

        contentParaFour: `The rock-hewn churches at Lalibela are made through a subtractive processes in which space is created by removing material. Out of the 11 churches, 4 are free-standing (monolithic) and 7 share a wall with the mountain out of which they are carved. The churches are each unique, giving the site an architectural diversity that is evident by the human figures of bas-reliefs inside Bet Golgotha, and the colorful paintings of geometrical designs and biblical scenes in Bet Mariam.[3]
        <br><br>
        Moldings and string courses divide larger structural shapes into smaller sections in many of the churches.[3]
        <br><br>
        The construction of the churches are thought to have taken place in three phases.[4]`,

        contentParaFive: `Several recent conservation and restoration projects have been implemented at the site, but have been flawed in execution. A project in which the American Embassy is funding the restoration of Bet Gabriel-Rafael and subsequently Bet Golgotha-Mikael has seen issues emerge between the various parties involved in the project regarding understanding of its full scope. There has been a lack of adequate communication and sharing of information regarding project plans between the Authority for Research and Conservation of Cultural Heritage (ARCCH) and the local committee and church.[10]`,

        pdf: "Assets/Monuments - pdf/Lalibela Churches.pdf",

        zone: zones[1]
    },
    {
        id: "Terracotta-Army",

        img: "Assets/Images/terracotta-army-1.jpeg",
        imgTwo: "Assets/Images/terracotta-army-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/construction-3.jpg",
        imgFive: "Assets/Images/terracotta-army-2.jpg",

        name: "Terracotta Army",
        location: "China (Xi'an)",
        built: "Late 3rd century",
        excerpt: "The Terracotta Army is a collection of life-size terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It was buried with the emperor to protect him in the afterlife.",

        subHeadingOne: "History Of Terracotta Army",
        subHeadingTwo: "Construction Of Terracotta Army",
        subHeadingThree: "A collection of 120 objects ",

        headingOne: "History",
        headingTwo: "Necropolis",
        headingThree: "Construction",
        headingFour: "Exhibitions",

        contentParaOne: `The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose of protecting him in his afterlife.
        <br><br>
        The figures, dating from approximately the late 200s BCE,[1] were discovered in 1974 by local farmers in Lintong County, outside Xi'an, Shaanxi, China. The figures vary in height according to their rank, the tallest being the generals. The figures include warriors, chariots and horses. Estimates from 2007 were that the three pits containing the Terracotta Army hold more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses, the majority of which remain in situ in the pits near Qin Shi Huang's mausoleum.[2] Other, non-military terracotta figures have been found in other pits, including officials, acrobats, strongmen, and musicians.[3]`,

        contentParaTwo: `The construction of the tomb was described by historian Sima Qian (145–90 BCE) in Records of the Grand Historian, the first of China's 24 dynastic histories, written a century after the mausoleum's completion. Work on the mausoleum began in 246 BCE, soon after Emperor Qin (then aged 13) succeeded his father as King of Qin, and the project eventually involved 700,000 conscripted workers.[5][6] Geographer Li Daoyuan, writing six centuries after the first emperor's death, recorded in Shui Jing Zhu that Mount Li was a favoured location due to its auspicious geology: "famed for its jade mines, its northern side was rich in gold, and its southern side rich in beautiful jade; the first emperor, covetous of its fine reputation, therefore chose to be buried there".[7][8]
        <br><br>
        Sima Qian wrote that the first emperor was buried with palaces, towers, officials, valuable artifacts and wondrous objects. According to this account, 100 flowing rivers were simulated using mercury, and above them the ceiling was decorated with heavenly bodies, below which lay the features of the land. Some translations of this passage refer to "models" or "imitations"; however, those words were not used in the original text, which also makes no mention of the terracotta army.[5][9] High levels of mercury were found in the soil of the tomb mound, giving credence to Sima Qian's account.[10] Also, the Emperor is well documented for building monumental statues in human form during his reign, such as the Twelve Metal Colossi.[11][12]`,

        contentParaThree: `The necropolis was constructed as a microcosm of the emperor's imperial palace or compound,[citation needed] and covers a large area around the tomb mound of the first emperor. The earthen tomb mound is located at the foot of Mount Li and built in a pyramidal shape,[25] and is surrounded by two solidly built rammed earth walls with gateway entrances. The necropolis consists of several offices, halls, stables, other structures as well as an imperial park placed around the tomb mound.[citation needed]
        <br><br>
        The warriors stand guard to the east of the tomb. Up to 5 m (16 ft) of reddish, sandy soil had accumulated over the site in the two millennia following its construction, but archaeologists found evidence of earlier disturbances at the site. During the excavations near the Mount Li burial mound, archaeologists found several graves dating from the 18th and 19th centuries, where diggers had apparently struck terracotta fragments. These were discarded as worthless and used along with soil to backfill the excavations.[26]
        <br><br>
        The tomb appears to be a hermetically sealed space approximately 100 by 75 metres (328 ft × 246 ft).[27][28] The tomb remains unopened, possibly due to concerns over preservation of its artifacts.[27] For example, after the excavation of the Terracotta Army, the painted surface present on some terracotta figures began to flake and fade.[29] The lacquer covering the paint can curl in fifteen seconds once exposed to Xi'an's dry air and can flake off in just four minutes.[30]`,

        contentParaFour: `The terracotta army figures were manufactured in workshops by government laborers and local craftsmen using local materials. Heads, arms, legs, and torsos were created separately and then assembled by luting the pieces together. When completed, the terracotta figures were placed in the pits in precise military formation according to rank and duty.[57] In 2021, morphological studies have shown that there is a strong resemblance between the statues and that of the local region's modern inhabitants, which has led some scholars to theorize that the high level of stylistic realism stems from the figures being modelled on actual soldiers.[58][59] The faces were created using molds, and at least ten face molds may have been used.[38] Clay was then added after assembly to provide individual facial features to make each figure appear different.[60] It is believed that the warriors' legs were made in much the same way that terracotta drainage pipes were manufactured at the time. This would classify the process as assembly line production, with specific parts manufactured and assembled after being fired, as opposed to crafting a figure as one solid piece and subsequently firing it. In those times of tight imperial control, each workshop was required to inscribe its name on items produced to ensure quality control. This has aided modern historians in verifying which workshops were commandeered to make tiles and other mundane items for the terracotta army.`,

        contentParaFive: `The first exhibition of the figures outside of China was held at National Gallery of Victoria (NGV) in Melbourne in 1982.[81]
        <br><br>
        A collection of 120 objects from the mausoleum and 12 terracotta warriors were displayed at the British Museum in London as its special exhibition "The First Emperor: China's Terracotta Army" from 13 September 2007 to April 2008.[82] This exhibition made 2008 the British Museum's most successful year and made the British Museum the United Kingdom's top cultural attraction between 2007 and 2008.[83][84] The exhibition brought the most visitors to the museum since the King Tutankhamun exhibition in 1972.[83] It was reported that the 400,000 advance tickets sold out so fast that the museum extended its opening hours until midnight.[85] According to The Times, many people had to be turned away, despite the extended hours.[86] During the day of events to mark the Chinese New Year, the crush was so intense that the gates to the museum had to be shut.[86] The Terracotta Army has been described as the only other set of historic artifacts (along with the remnants of the wreck of the RMS Titanic) that can draw a crowd by the name alone.[85]`,

        pdf: "Assets/Monuments - pdf/Terracotta Army.pdf",

        zone: zones[0]
    },
    {
        id: "Potala-Palace",

        img: "Assets/Images/potala-palace-1.jpeg",
        imgTwo: "Assets/Images/potala-palace-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/architecture.jpg",
        imgFive: "Assets/Images/reference.jpg",

        name: "Potala Palace",
        location: "Tibet (Lhasa)",
        built: "7th century",
        excerpt: "The Potala Palace is a UNESCO World Heritage Site and former winter residence of the Dalai Lama. It is renowned for its Tibetan architecture, religious significance, and historical importance.",

        subHeadingOne: "The site on which the Potala Palace",
        subHeadingTwo: "Built at an altitude of 3,700 ",
        subHeadingThree: "References Of Potala Palace",

        headingOne: "History",
        headingTwo: "The Lhasa Zhol Pillars",
        headingThree: "Architecture",
        headingFour: "References",

        contentParaOne: `The Potala Palace is a dzong fortress in Lhasa, capital of the Tibet Autonomous Region in China. It was the winter palace of the Dalai Lamas from 1649 to 1959, has been a museum since then, and a World Heritage Site since 1994.
        <br></br>
        The palace is named after Mount Potalaka, the mythical abode of the bodhisattva Avalokiteśvara.[1] The 5th Dalai Lama started its construction in 1645[2] after one of his spiritual advisers, Konchog Chophel (died 1646), pointed out that the site was ideal as a seat of government, situated as it is between Drepung and Sera monasteries and the old city of Lhasa.[3] It may overlie the remains of an earlier fortress called the White or Red Palace on the site,[4] built by Songtsen Gampo in 637.[5]`,

        contentParaTwo: `The site on which the Potala Palace rises is built over a palace erected by Songtsen Gampo on the Red Hill.[9] The Potala contains two chapels on its northwest corner that conserve parts of the original building. One is the Phakpa Lhakhang, the other the Chogyel Drupuk, a recessed cavern identified as Songtsen Gampo's meditation cave.[10] Lozang Gyatso, the Great Fifth Dalai Lama, started the construction of the modern Potala Palace in 1645[2] after one of his spiritual advisers, Konchog Chophel (died 1646), pointed out that the site was ideal as a seat of government, situated as it is between Drepung and Sera monasteries and the old city of Lhasa.[3] The external structure was built in 3 years, while the interior, together with its furnishings, took 45 years to complete.[11] The Dalai Lama and his government moved into the Potrang Karpo ('White Palace') in 1649.[3] Construction lasted until 1694,[12] some twelve years after his death. The Potala was used as a winter palace by the Dalai Lama from that time. The Potrang Marpo ('Red Palace') was added between 1690 and 1694.[12]
        <br></br>
        The new palace got its name from a hill on Cape Comorin at the southern tip of India—a rocky point sacred to the bodhisattva of compassion, who is known as Avalokitesvara, or Chenrezi. The Tibetans themselves rarely speak of the sacred place as the "Potala", but rather as "Peak Potala" (Tse Potala), or most commonly as "the Peak".[13]`,

        contentParaThree: `Lhasa Zhol Village has two stone pillars or rdo-rings, an interior stone pillar or doring nangma, which stands within the village fortification walls, and the exterior stone pillar or doring chima,[29] which originally stood outside the South entrance to the village. Today the pillar stands neglected to the East of the Liberation Square, on the South side of Beijing Avenue.
        <br></br>
        The doring chima dates as far back as circa 764, "or only a little later",[30] and is inscribed with what may be the oldest known example of Tibetan writing.[31]
        <br></br>
        The pillar contains dedications to a famous Tibetan general and gives an account of his services to the king including campaigns against China which culminated in the brief capture of the Chinese capital Chang'an (modern Xi'an) in 763[32] during which the Tibetans temporarily installed as Emperor a relative of Princess Jincheng Gongzhu (Kim-sheng Kong co), the Chinese wife of Trisong Detsen's father, Me Agtsom.[33][34]
        <br></br>
        The Chinese Putuo Zongcheng Temple, also a UNESCO World Heritage Site, built between 1767 and 1771, was in part modelled after the Potala Palace. The palace was named by the American television show Good Morning America and newspaper USA Today as one of the "New Seven Wonders".[28]`,

        contentParaFour: `Built at an altitude of 3,700 m (12,100 ft), on the side of Ri Marpo ('Red Mountain') in the centre of Lhasa Valley,[25] the Potala Palace, with its vast inward-sloping walls broken only in the upper parts by straight rows of many windows, and its flat roofs at various levels, is not unlike a fortress in appearance. At the south base of the rock is a large space enclosed by walls and gates, with great porticos on the inner side. A series of tolerably easy staircases, broken by intervals of gentle ascent, leads to the summit of the rock. The whole width of this is occupied by the palace.[citation needed]
        <br></br>
        The central part of this group of buildings rises in a vast quadrangular mass above its satellites to a great height, terminating in gilt canopies similar to those on the Jokhang. This central member of Potala is called the "red palace" from its crimson colour, which distinguishes it from the rest. It contains the principal halls and chapels and shrines of past Dalai Lamas. There is in these much rich decorative painting, with jewelled work, carving and other ornamentation.
        <br></br>
        The lower white frontage on the south side of the palace was used to hoist two gigantic thangkas joined representing the figures of Tara and Sakyamuni during the Sertreng Festival on the 30th day of the second Tibetan month.[26][27]`,

        contentParaFive: ` This article incorporates text from a publication now in the public domain: Chisholm, Hugh, ed. (1911). "Lhasa". Encyclopædia Britannica. Vol. 16 (11th ed.). Cambridge University Press. pp. 529–532. (See p. 530.)
        <br></br>
        Beckwith, Christopher I. (1987). The Tibetan Empire in Central Asia. Princeton University Press. Princeton, New Jersey. ISBN 0-691-02469-3.
        <br></br>
        "Reading the Potala". Peter Bishop. In: Sacred Spaces and Powerful Places in Tibetan Culture: A Collection of Essays. (1999) Edited by Toni Huber, pp. 367–388. The Library of Tibetan Works and Archives, Dharamsala, H.P., India. ISBN 81-86470-22-0.
        <br></br>
        Das, Sarat Chandra. Lhasa and Central Tibet. (1902). Edited by W. W. Rockhill. Reprint: Mehra Offset Press, Delhi (1988), pp. 145–146; 166–169; 262-263 and illustration opposite p. 154.`,

        pdf: "Assets/Monuments - pdf/Potala Palace.pdf",

        zone: zones[0]
    },
    {
        id: "Timbuktu",

        img: "Assets/Images/timbuktu-1.jpeg",
        imgTwo: "Assets/Images/timbuktu-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/history-2.jpg",
        imgFive: "Assets/Images/history-4.jpg",

        name: "Timbuktu",
        location: "Mali",
        built: "5th century AD",
        excerpt: "Timbuktu was a center of Islamic learning and commerce in the medieval period, known for its prestigious universities, libraries, and mosques.",

        subHeadingOne: "Prehistory Of Timbuktu",
        subHeadingTwo: "History Of Timbuktu",
        subHeadingThree: "Geography Of Timbuktu",

        headingOne: "Prehistory",
        headingTwo: "Toponymy",
        headingThree: "History",
        headingFour: "Geography",

        contentParaOne: `Timbuktu (/ˌtɪmbʌkˈtuː/ TIM-buk-TOO; French: Tombouctou; Koyra Chiini: Tumbutu; Tuareg: ⵜⵏⵀⵗⵜ, romanized: Tin Bukt) is an ancient city in Mali, situated 20 kilometres (12 miles) north of the Niger River. It is the capital of the Tombouctou Region, one of the eight administrative regions of Mali, having a population of 54,453 in the 2009 census.
        <br></br>
        Archaeological evidence suggests prehistoric settlements in the region, predating the city's Islamic scholarly and trade prominence in the medieval period. Timbuktu began as a seasonal settlement and became permanent early in the 12th century. After a shift in trading routes, particularly after the visit by Mansa Musa around 1325, Timbuktu flourished, due to its strategic location, from the trade in salt, gold, and ivory. It gradually expanded as an important Islamic city on the Saharan trade route and attracted many scholars and traders before it became part of the Mali Empire early in the 14th century. In the first half of the 15th century, the Tuareg people took control for a short period, until the expanding Songhai Empire absorbed it in 1468.`,

        contentParaTwo: `Like other important Medieval West African towns such as Djenné (Jenné-Jeno), Gao, and Dia, Iron Age settlements have been discovered near Timbuktu that predate the traditional foundation date of the town. Although the accumulation of thick layers of sand has thwarted archaeological excavations in the town itself,[11][10] some of the surrounding landscape is deflating and exposing pottery shards on the surface. A survey of the area by Susan and Roderick McIntosh in 1984 identified several Iron Age sites along the el-Ahmar, an ancient wadi system that passes a few kilometers to the east of the modern town.[12]
        <br></br>
        An Iron Age tell complex located nine kilometres (5+1⁄2 mi) southeast of the Timbuktu near the Wadi el-Ahmar was excavated between 2008 and 2010 by archaeologists from Yale University and the Mission Culturelle de Tombouctou. The results suggest that the site was first occupied during the 5th century BC, thrived throughout the second half of the 1st millennium AD and eventually collapsed sometime during the late 10th or early 11th-century AD.[13][14]`,

        contentParaThree: `Over the centuries, the spelling of Timbuktu has varied a great deal: from Tenbuch on the Catalan Atlas (1375), to traveller Antonio Malfante's Thambet, used in a letter he wrote in 1447 and also adopted by Alvise Cadamosto in his Voyages of Cadamosto, to Heinrich Barth's Timbúktu and Timbu'ktu. French spelling often appears in international reference as 'Tombouctou'. The German spelling 'Timbuktu' and its variant 'Timbucktu' have passed into English and the former has become widely used in recent years. Major English-language works have employed the spelling 'Timbuctoo', and this is considered the correct English form by scholars; 'Timbuctou' and 'Timbuctu' are sometimes used as well.
        <br></br>
        The French continue to use the spelling 'Tombouctou', as they have for over a century; variants include 'Temboctou' (used by explorer René Caillié) and 'Tombouktou', but they are seldom seen. Variant spellings exist for other places as well, such as Jenne (Djenné) and Segu (Ségou).[2] As well as its spelling, Timbuktu's toponymy is still open to discussion.[a] At least four possible origins of the name of Timbuktu have been described:
        <br></br>
        Songhay origin: both Leo Africanus and Heinrich Barth believed the name was derived from two Songhay words:[3] Leo Africanus writes the Kingdom of Tombuto was named after a town of the same name, founded in 1213 or 1214 by Mansa Sulayman.[4] The word itself consisted of two parts: tin (wall) and butu (Wall of Butu). Africanus did not explain the meaning of this Butu.[3] Heinrich Barth wrote: "The town was probably so called, because it was built originally in a hollow or cavity in the sand-hills. Tùmbutu means hole or womb in the Songhay language: if it were a Temáshight (Tamashek) word, it would be written Timbuktu. The name is generally interpreted by Europeans as well of Buktu (also same word in Persian is bâkhtàr باختر = where the sun sets, West), but tin has nothing to do with well."[5]`,

        contentParaFour: `Timbuktu has become a household reference as a faraway, mysterious place, but the city itself was once a world-renowned trade powerhouse, as well as an academic hotspot of the medieval world. Timbuktu is unique in the fact that it has seen many rulers, but the city reached its golden period under the Mali Empire in the 13th and 14th centuries. Distinguished Malian Mansa Mūsā brought great fame to the city of Timbuktu when he established a university of Islamic learning there. The university taught much more than Islamic studies, though, including topics of history, rhetoric, law, science, and, most notably, medicine. Mansa Mūsā also introduced Timbuktu, and the Mali Empire in general, to the rest of the Medieval world through his Hajj, as his time in Mecca would soon inspire Arab travelers to visit North Africa. Europeans, however, would not reach the city until much later, due to the difficult and lengthy journey, thus garnering the city an aura of mystery.
        <br></br>
        Timbuktu primarily gained its wealth from local gold and salt mining, in addition to the trans-Saharan slave trade. Gold was a highly valued commodity in the Mediterranean region and salt was most popular south of the city, though arguably the biggest asset Timbuktu had was its location. The city is situated nine miles from the Niger River, making for good agricultural land, and is near the Sahara Desert, providing easily accessible trade routes. Timbuktu also acts as a midpoint between the regions of North, West, and Central Africa. Because of this, Timbuktu has developed into a cultural melting pot.`,

        contentParaFive: `Timbuktu is located on the southern edge of the Sahara 15 km (9+1⁄2 mi) north of the main channel of the River Niger. The town is surrounded by sand dunes and the streets are covered in sand. The port of Kabara is 8 km (5 mi) to the south of the town and is connected to an arm of the river by a 3 km (2 mi) canal. The canal had become heavily silted but in 2007 it was dredged as part of a Libyan financed project.[21]
        <br></br>
        The annual flood of the Niger River is a result of the heavy rainfall in the headwaters of the Niger and Bani rivers in Guinea and northern Ivory Coast. The rainfall in these areas peaks in August but the floodwater takes time to pass down the river system and through the Inner Niger Delta. At Koulikoro, 60 km (37 mi) downstream from Bamako, the flood peaks in September,[22] while in Timbuktu the flood lasts longer and usually reaches a maximum at the end of December.[23]`,

        pdf: "Assets/Monuments - pdf/Timbuktu.pdf",

        zone: zones[1]
    },
    {
        id: "Persepolis",

        img: "Assets/Images/persepolis-1.jpeg",
        imgTwo: "Assets/Images/persepolis-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/marking.jpg",
        imgFive: "Assets/Images/roman-3.jpg",

        name: "Persepolis",
        location: "Iran",
        built: "518 BC",
        excerpt: "Persepolis was the ceremonial capital of the Achaemenid Empire and is famous for its impressive palaces, gateways, and reliefs. It was destroyed by Alexander the Great in 330 BC.",

        subHeadingOne: "History, Construction",
        subHeadingTwo: "Archaeological research",
        subHeadingThree: "After the fall of the Achaemenid Empire",

        headingOne: "History",
        headingTwo: "Destruction",
        headingThree: "Research",
        headingFour: "Achaemenid Empire",

        contentParaOne: `Persepolis (/pərˈsɛpəlɪs/; Old Persian: 𐎱𐎠𐎼𐎿, romanized: Pārsa; New Persian: تخت جمشید, romanized: Takht-e Jamshīd, lit. 'Throne of Jamshid') was the ceremonial capital of the Achaemenid Empire (c. 550–330 BC). It is situated in the plains of Marvdasht, encircled by southern Zagros mountains in Iran. It is one of the key Iranian Cultural Heritages. The city of Shiraz is situated 60 km (37 mi) southwest of Persepolis. UNESCO declared the ruins of Persepolis a World Heritage Site in 1979.[2]
        <br><br>
        The earliest remains of Persepolis date back to 515 BC.[3] The city, acting as a major center for the empire, housed a palace complex and citadel designed to serve as the focal point for governance and ceremonial activities.[4] It exemplifies the Achaemenid style of architecture. The complex was taken by the army of Alexander the Great in 330 BC, and soon after, its wooden parts were completely destroyed by fire, likely deliberately.[3]`,

        contentParaTwo: `Archaeological evidence shows that the earliest remains of Persepolis date back to 515 BC. André Godard, the French archaeologist who excavated Persepolis in the early 1930s, believed that it was Cyrus the Great who chose the site of Persepolis, but that it was Darius I who built the terrace and the palaces. Inscriptions on these buildings support the belief that they were constructed by Darius.
        <br><br>
        With Darius I, the sceptre passed to a new branch of the royal house. The country's true capitals were Susa, Babylon and Ecbatana. This may be why the Greeks were not acquainted with the city until Alexander the Great took and plundered it.
        <br><br>
        Darius the Great, by Eugène Flandin (1840)
        <br><br>
        Persepolis in 1920s, photo by Harold Weston
        Darius I's construction of Persepolis was carried out parallel to that of the Palace of Susa.[12] According to Gene R. Garthwaite, the Susa Palace served as Darius' model for Persepolis.[13] Darius I ordered the construction of the Apadana and the Council Hall (Tripylon or the "Triple Gate"), as well as the main imperial Treasury and its surroundings. These were completed during the reign of his son, Xerxes I. Further construction of the buildings on the terrace continued until the downfall of the Achaemenid Empire.[14] `,

        contentParaThree: `After invading Achaemenid Persia in 330 BC, Alexander the Great sent the main force of his army to Persepolis by the Royal Road. Diodorus Siculus writes that on his way to the city, Alexander and his army were met by 800 Greek artisans who had been captured by the Persians. Most were elderly and suffered some form of mutilation, such as a missing hand or foot. They explained to Alexander the Persians wanted to take advantage of their skills in the city but handicapped them so they could not easily escape. Alexander and his staff were disturbed by the story and provided the artisans with clothing and provisions before continuing on to Persepolis. Diodorus does not cite this as a reason for the destruction of Persepolis, but it is possible Alexander started to see the city in a negative light after this encounter.[16]
        <br><br>
        Upon reaching the city, Alexander stormed the Persian Gates, a pass through modern-day Zagros Mountains. There Ariobarzanes of Persis successfully ambushed Alexander the Great's army, inflicting heavy casualties. After being held off for 30 days, Alexander the Great outflanked and destroyed the defenders. Ariobarzanes himself was killed either during the battle or during the retreat to Persepolis. Some sources indicate that the Persians were betrayed by a captured tribal chief who showed the Macedonians an alternate path that allowed them to outflank Ariobarzanes in a reversal of Thermopylae. After several months, Alexander allowed his troops to loot Persepolis.
        <br><br>
        It is believed that the fire which destroyed Persepolis started from Hadish Palace, which was the living quarters of Xerxes I, and spread to the rest of the city.[17] It is not clear if the fire was an accident or a deliberate act of revenge for the burning of the Acropolis of Athens during the second Persian invasion of Greece. Many historians argue that, while Alexander's army celebrated with a symposium, they decided to take revenge against the Persians.[18] If that is so, then the destruction of Persepolis could be both an accident and a case of revenge. The fire may also have had the political purpose of destroying an iconic symbol of the Persian monarchy that might have become a focus for Persian resistance.`,

        contentParaFour: `Odoric of Pordenone may have passed through Persepolis on his way to China in 1320, although he mentioned only a great, ruined city called "Comerum".[25] In 1474, Giosafat Barbaro visited the ruins of Persepolis, which he incorrectly thought were of Jewish origin.[26] Hakluyt's Voyages included a general account of the ruins of Persepolis attributed to an English merchant who visited Iran in 1568.[27][28] António de Gouveia from Portugal wrote about cuneiform inscriptions following his visit in 1602. His report on the ruins of Persepolis was published as part of his Relaçam in 1611.[29]
        <br><br>
        In 1618, García de Silva Figueroa, King Philip III of Spain's ambassador to the court of Abbas I, the Safavid monarch, was the first Western traveler to link the site known in Iran as "Chehel Minar" as the site known from Classical authors as Persepolis.[30][10]
        <br><br>
        Pietro Della Valle visited Persepolis in 1621, and noticed that only 25 of the 72 original columns were still standing, due to either vandalism or natural processes.[31] The Dutch traveler Cornelis de Bruijn visited Persepolis in 1704.[32]`,

        contentParaFive: `In 316 BC, Persepolis was still the capital of Persia as a province of the great Macedonian Empire (see Diodorus Siculus xix, 21 seq., 46; probably after Hieronymus of Cardia, who was living about 326). The city must have gradually declined in the course of time. The lower city at the foot of the imperial city might have survived for a longer time;[23] but the ruins of the Achaemenids remained as a witness to its ancient glory.
        <br><br>
        The nearby Estakhr gained prominence as a separate city very shortly after the decline of Persepolis. It appears that much of Persepolis' rubble was used for the building of Istakhr.[24] At the time of the Muslim invasion of Persia, Estakhr offered a desperate resistance. It was still a place of considerable importance in the first century of Islam, although its greatness was speedily eclipsed by the new metropolis of Shiraz. In the 10th century, Estakhr dwindled to insignificance. During the following centuries, Estakhr gradually declined, until it ceased to exist as a city.`,

        pdf: "Assets/Monuments - pdf/Persepolis.pdf",

        zone: zones[2]
    },
    {
        id: "Great-Mosque-of-Cordoba",

        img: "Assets/Images/great-mosque-of-cordoba-1.jpeg",
        imgTwo: "Assets/Images/great-mosque-of-cordoba-2.jpg",
        imgThree: "Assets/Images/history3.jpg",
        imgFour: "Assets/Images/construction-5.jpg",
        imgFive: "Assets/Images/great-mosque-of-cordoba-2.jpg",

        name: "Great Mosque of Cordoba",
        location: "Spain (Cordoba)",
        built: "8th century",
        excerpt: "The Great Mosque of Cordoba, also known as the Mezquita, is a symbol of Islamic Spain's cultural and architectural heritage. It features a unique blend of Moorish, Gothic, and Renaissance styles.",

        subHeadingOne: "Claims of earlier Roman temple",
        subHeadingTwo: "Construction of the mosque",
        subHeadingThree: "Expansions of the mosque",

        headingOne: "History",
        headingTwo: "Original layout",
        headingThree: "Construction",
        headingFour: "First additions",

        contentParaOne: `The Mosque–Cathedral of Córdoba[1][2] (Spanish: Mezquita-Catedral de Córdoba), officially known by its ecclesiastical name of Cathedral of Our Lady of the Assumption (Spanish: Catedral de Nuestra Señora de la Asunción),[3] is the cathedral of the Diocese of Córdoba dedicated to the Assumption of Mary and located in the Spanish region of Andalusia.[4] Due to its status as a former mosque, it is also known as the Mezquita (pronounced [meθˈkita]; 'mosque' in Spanish)[5][6] and as the Great Mosque of Córdoba.[7][2][8]
        <br></br>
        According to traditional accounts a Visigothic church, the Catholic Christian Basilica of Vincent of Saragossa, originally stood on the site of the current Mosque-Cathedral, although this has been a matter of scholarly debate.[9][10] The Great Mosque was constructed in 785 on the orders of Abd al-Rahman I, founder of the Islamic Emirate of Córdoba.[11][12][13][14] It was expanded multiple times afterwards under Abd al-Rahman's successors up to the late 10th century. Among the most notable additions, Abd al-Rahman III added a minaret (finished in 958) and his son al-Hakam II added a richly-decorated new mihrab and maqsurah section (finished in 971).[15][12] `,

        contentParaTwo: `A claim that the site of the mosque-cathedral was once a Roman temple dedicated to Janus dates as far back as Pablo de Céspedes[21][22] and is sometimes still repeated today.[23][24][25] However, Robert Knapp, in his overview of Roman-era Córdoba, has dismissed this claim as speculation based on a misunderstanding of Roman milestones found in the area.[26]
        <br></br>
        According to traditional accounts, the present-day site of the Cathedral–Mosque of Córdoba was originally a Visigothic Christian church dedicated to Saint Vincent of Saragossa,[27] which was divided and shared by Christians and Muslims after the Umayyad conquest of Hispania.[28][29][18][10] As the Muslim community grew and this existing space became too small for prayer, the basilica was expanded little by little through piecemeal additions to the building.[11]: 136  This sharing arrangement of the site lasted until 785, when the Christian half was purchased by Abd al-Rahman I, who then proceeded to demolish[9][11] the church structure and build the grand mosque of Córdoba on its site.[29][30] In return, Abd al-Rahman also allowed the Christians to rebuild other ruined churches – including churches dedicated to the Christian martyrs Saints Faustus, Januarius, and Marcellus whom they deeply revered[31] – as agreed upon in the sale terms.[32][33]`,

        contentParaThree: `The original mosque had a roughly square floor plan measuring 74 or 79 square meters per side, equally divided between a hypostyle prayer hall to the south and an open courtyard (sahn) to the north.[12]: 40 [15]: 19  As the mosque was built on a sloping site, a large amount of fill would have been necessary to create a level ground on which to build.[15]: 19  The outer walls were reinforced with large buttresses, which are still visible on the exterior today.[12]: 40 The original mosque's most famous architectural innovation, which was preserved and repeated in all subsequent Muslim-era expansions, was its rows of two-tiered arches in the hypostyle hall.[12]: 40–42 [13][15]: 20–21, 69 
        <br></br>
        The mosque's original mihrab (niche in the far wall symbolizing the direction of prayer) no longer exists today but its probable remains were found during archeological excavations between 1932 and 1936. The remains showed that the mihrab's upper part was covered with a shell-shaped hood similar to the later mihrab.[15]: 20 
        <br></br>
        Bab al-Wuzara ("Viziers' Gate", today the Puerta de San Esteban), one of the oldest surviving gates of the mosque. Its decoration dates from 855.
        The mosque originally had four entrances: one was in the center of the north wall of the courtyard (aligned with the mihrab to the south), two more were in the west and east walls of the courtyard, and a fourth one was in the middle of the west wall of the prayer hall. The latter was known as Bab al-Wuzara' (the "Viziers' Gate", today known as Puerta de San Esteban) and was most likely the entrance used by the emir and state officials who worked in the palace directly across the street from here.[12]: 40 `,

        contentParaFour: `The Great Mosque was built in the context of the new Umayyad Emirate in Al-Andalus which Abd ar-Rahman I founded in 756. Abd ar-Rahman was a fugitive and one of the last remaining members of the Umayyad royal family which had previously ruled the first hereditary caliphate based in Damascus, Syria. This Umayyad Caliphate was overthrown during the Abbasid Revolution in 750 and the ruling family were nearly all killed or executed in the process. Abd ar-Rahman survived by fleeing to North Africa and, after securing political and military support, took control of the Muslim administration in the Iberian Peninsula from its governor, Yusuf ibn Abd al-Rahman al-Fihri. Cordoba was already the capital of the Muslim province and Abd ar-Rahman continued to use it as the capital of his independent emirate.[46][15]
        <br></br>
        Construction of the mosque began in 785–786 (169 AH) and finished a year later in 786–787 (170 AH).[11]: 136 [12]: 40 [13]: 12  This relatively short period of construction was aided by the reuse of existing Roman and Visigothic materials in the area, especially columns and capitals.[12]: 40  Syrian (Umayyad), Visigothic, and Roman influences have been noted in the building's design, but the architect is not known. The craftsmen working on the project probably included local Iberians as well as people of Syrian origin. According to tradition and historical written sources, Abd ar-Rahman involved himself personally and heavily in the project, but the extent of his personal influence in the mosque's design is debated.[12]: 44 [15]: 20 [31]`,

        contentParaFive: `In 793 Abd ar-Rahman I's son and successor, Hisham I, added to the mosque a ṣawma'a, a shelter for the muezzin on top of the outer wall, as the mosque did not yet have a minaret (a feature which was not yet standard in early mosques).[15]: 21 [12]: 45 
        <br></br>
        The mosque was significantly expanded by Abd ar-Rahman II (r. 822–852) sometime between the years 833 and 848.[15]: 21 [a] This expansion preserved and repeated the original design while extending the prayer hall eight bays to the south (i.e. the length of eight arches).[13]: 15 [12]: 45 [15]: 21  This made the prayer hall 64 metres long from front to back.[12]: 45 `,

        pdf: "Assets/Monuments - pdf/Great Mosque of Cordoba.pdf",

        zone: zones[3]
    },
    {
        id: "Sigiriya",

        img: "Assets/Images/sigiriya-1.jpeg",
        imgTwo: "Assets/Images/sigiriya-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/sigiriya-2.jpg",
        imgFive: "Assets/Images/construction-5.jpg",

        name: "Sigiriya",
        location: "Sri Lanka",
        built: "5th century AD",
        excerpt: "Sigiriya is an ancient rock fortress and UNESCO World Heritage Site located atop a massive rock plateau. It is renowned for its frescoes, gardens, and breathtaking views.",

        subHeadingOne: "Historical past",
        subHeadingTwo: "Frescoes",
        subHeadingThree: "Site plan",

        headingOne: "History",
        headingTwo: "Archaeological remains and features",
        headingThree: "Frescoes",
        headingFour: "Site plan",

        contentParaOne: `Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m (590 ft) high.[2]
        <br></br>
        According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Siṃhagiri, the Lion Rock.`,

        contentParaTwo: `It is likely that the area around Sigiriya was inhabited since prehistoric times. There is clear evidence that the many rock shelters and caves in the vicinity were occupied by Buddhist monks and ascetics from as early as the 3rd century BC. The earliest evidence of human habitation at Sigiriya is the Aligala rock shelter to the east of Sigiriya rock, indicating that the area was occupied nearly five thousand years ago during the Mesolithic Period.
        <br></br>
        Buddhist monastic settlements were established during the 3rd century BC in the western and northern slopes of the boulder-strewn hills surrounding the Sigiriya rock. Several rock shelters or caves were created during this period. These shelters were made under large boulders, with carved drip ledges around the cave mouths. Rock inscriptions are carved near the drip ledges on many of the shelters, recording the donation of the shelters to the Buddhist monastic order as residences. These were made in the period between the 3rd century BCE and the 1st century AD.`,

        contentParaThree: `In 1831 Major Jonathan Forbes of the 78th (Highlanders) Regiment of Foot of the British Army, while returning on horseback from a trip to Pollonnuruwa, encountered the "brushwood-covered summit of the rock of Sigiri".[9] Sigiriya came to the attention of antiquarians and, later, archaeologists. Archaeological work at Sigiriya began on a small scale in the 1890s. H.C.P. Bell was the first archaeologist to conduct extensive research on Sigiriya. The Cultural Triangle Project, launched by the Government of Sri Lanka, focused its attention on Sigiriya in 1982. Archaeological work began on the entire city for the first time under this project. There was a sculpted lion's head above the legs and paws flanking the entrance, but the head collapsed years ago.
        <br></br>
        Sigiriya consists of an ancient citadel built by King Kashyapa during the 5th century. The Sigiriya site contains the ruins of an upper palace located on the flat top of the rock, a mid-level terrace that includes the Lion Gate and the mirror wall with its frescoes, the lower palaces clings to the slopes below the rocks. The moats, walls and gardens of the palace extended for a few hundred metres from the base of the rock. The site was both a palace and a fortress. The upper palace on the top of the rock includes cisterns cut into the rock.
        <br></br>
        Alternative stories have the primary builder of Sigiriya as King Dhatusena, with Kashyapa finishing the work in honour of his father. Still other stories describe Kashyapa as a playboy king, with Sigiriya his pleasure palace. Even Kashyapa's eventual fate is uncertain.`,

        contentParaFour: `John Still in 1907 wrote, "The whole face of the hill appears to have been a gigantic picture gallery... the largest picture in the world perhaps".[12] The paintings would have covered most of the western face of the rock, an area 140 m (460 ft) long and 40 m (130 ft) high. There are references in the graffiti to 500 ladies in these paintings. However, most have been lost forever. More frescoes, different from those on the rock face, can be seen elsewhere, for example on the ceiling of the location called the "Cobra Hood Cave".
        <br></br>
        Frescos at Sigiriya found at Cobra hood cave
        Although the frescoes are classified as in the Anuradhapura period, the painting style is considered unique;[13] the line and style of application of the paintings differing from Anuradhapura paintings. The lines are painted in a form which enhances the sense of volume of the figures. The paint has been applied in sweeping strokes, using more pressure on one side, giving the effect of a deeper colour tone towards the edge. Other paintings of the Anuradhapura period contain similar approaches to painting, but do not have the sketchy lines of the Sigiriya style, having a distinct artists' boundary line. The true identity of the ladies in these paintings still has not been confirmed. There are various ideas about their identity. Some believe that they are the ladies of the kings while others think that they are women taking part in religious observances. These pictures have a close resemblance to paintings seen in the Ajanta Caves in India.[14]`,

        contentParaFive: `Sigiriya is considered to be one of the most important urban planning sites of the first millennium, and the site plan is considered very elaborate and imaginative. The plan combined concepts of symmetry and asymmetry to intentionally interlock the man-made geometrical and natural forms of the surroundings. On the west side of the rock lies a park for the royals, laid out on a symmetrical plan; the park contains water-retaining structures, including sophisticated surface/subsurface hydraulic systems, some of which are working today. The south contains a man-made reservoir; these were extensively used from the previous capital of the dry zone of Sri Lanka. Five gates were placed at entrances. The more elaborate western gate is thought to have been reserved for the royals.[10][11]`,

        pdf: "Assets/Monuments - pdf/Sigiriya.pdf",

        zone: zones[2]
    },
    {
        id: "Palmyra",

        img: "Assets/Images/palmyra-1.jpeg",
        imgTwo: "Assets/Images/palmyra-2.jpg",
        imgThree: "Assets/Images/architecture-4.jpg",
        imgFour: "Assets/Images/people.jpg",
        imgFive: "Assets/Images/language.jpg",

        name: "Palmyra",
        location: "Syria",
        built: "2nd millennium",
        excerpt: "Palmyra was an ancient city located in an oasis in the Syrian Desert. It was a vital hub of trade and culture along the Silk Road and is known for its well-preserved ruins, including temples, columns, and arches.",

        subHeadingOne: "Region and city layout",
        subHeadingTwo: "language, and society",
        subHeadingThree: "Language",

        headingOne: "Layout",
        headingTwo: "Etymology",
        headingThree: "People",
        headingFour: "Language",

        contentParaOne: `Palmyra (/pælˈmaɪrə/ pal-MY-rə; Palmyrene: 𐡶𐡣𐡬𐡥𐡴‎ ("Image of city name written in Palmyrene script"), romanized: Tadmor; Arabic: تَدْمُر, romanized: Tadmur) is an ancient city in the eastern part of the Levant, now in the center of modern Syria. Archaeological finds date back to the Neolithic period, and documents first mention the city in the early second millennium BC. Palmyra changed hands on a number of occasions between different empires before becoming a subject of the Roman Empire in the first century AD.
        <br></br>
        The city grew wealthy from trade caravans; the Palmyrenes became renowned as merchants who established colonies along the Silk Road and operated throughout the Roman Empire. Palmyra's wealth enabled the construction of monumental projects, such as the Great Colonnade, the Temple of Bel, and the distinctive tower tombs. Ethnically, the Palmyrenes combined elements of Amorites, Arameans, and Arabs. The city's social structure was structured around kinship and clans, and its inhabitants spoke Palmyrene Aramaic, a variety of Western Middle Aramaic, while using Koine Greek for commercial and diplomatic purposes.`,

        contentParaTwo: `The city of Palmyra lies 215 km (134 mi) northeast of the Syrian capital, Damascus;[12] along with an expanded hinterland of several settlements, farms and forts, the city forms part of the region known as the Palmyrene.[13] The city is located in an oasis surrounded by palms (of which twenty varieties have been reported).[8][14] Two mountain ranges overlook the city: the northern Palmyrene mountain belt from the north and the southern Palmyrene mountains from the southwest.[15] In the south and the east Palmyra is exposed to the Syrian Desert.[15] A small wadi, al-Qubur, crosses the area, flowing from the western hills past the city before disappearing in the eastern gardens of the oasis.[16] South of the wadi is a spring, Efqa.[17] Pliny the Elder described the town in the 70s AD as famous for its desert location, for the richness of its soil,[18] and for the springs surrounding it, which made agriculture and herding possible.[note 2][18]
        <br></br>
        Palmyra began as a small Neolithic settlement near the Efqa spring on the southern bank of Wadi al-Qubur.[20] The much later Hellenistic settlement of Palmyra was also located near the Efqa spring on the southern bank of Wadi al-Qubur.[20] It had its residences expanding to the wadi's northern bank during the first century.[16] Although the city's walls at the time of Zenobia originally enclosed an extensive area on both banks of the wadi,[16] the walls rebuilt during Aurelian's reign surrounded only the northern-bank section.[21][16] Most of the city's monumental projects were built on the wadi's northern bank,[22] among them is the Temple of Bel, on a tell which was the site of an earlier temple (known as the Hellenistic temple).[23] However, excavation supports the theory that the tell was originally located on the southern bank, and the wadi was diverted south of the tell to incorporate the temple into Palmyra's late first and early second century urban organization on the north bank.[24]`,

        contentParaThree: `Records of the name "Tadmor" date from the early second millennium BC;[1] eighteenth century BC tablets from Mari written in cuneiform record the name as "Ta-ad-mi-ir", while Assyrian inscriptions of the eleventh century BC record it as "Ta-ad-mar".[2] Aramaic Palmyrene inscriptions themselves showed two variants of the name; TDMR (i.e., Tadmar) and TDMWR (i.e., Tadmor).[3][4] The etymology of the name is unclear; the standard interpretation, supported by Albert Schultens, connects it to the Semitic word for "date palm", tamar (תמר‎),[note 1][7][8] thus referring to the palm trees that surrounded the city.[8]
        <br></br>
        The Greek name Παλμύρα (Latinized Palmyra) was first recorded by Pliny the Elder in the 1st century AD.[9] It was used throughout the Greco-Roman world.[7] It is generally believed that "Palmyra" derives from "Tadmor" and linguists have presented two possibilities; one view holds that Palmyra was an alteration of Tadmor.[7] According to the suggestion by Schultens, "Palmyra" could have arisen as a corruption of "Tadmor", via an unattested form "Talmura", changed to "Palmura" by the influence of the Latin word palma (date "palm"),[1] in reference to the city's palm trees, then the name reached its final form "Palmyra".[10] The second view, supported by some philologists, such as Jean Starcky, holds that Palmyra is a translation of "Tadmor" (assuming that it meant palm), which had derived from the Greek word for palm, "palame".[1][8]
        <br></br>
        An alternative suggestion connects the name to the Syriac tedmurtā (ܬܕܡܘܪܬܐ) "miracle", hence tedmurtā "object of wonder", from the root dmr "to wonder"; this possibility was mentioned favourably by Franz Altheim and Ruth Altheim-Stiehl (1973), but rejected by Jean Starcky (1960) and Michael Gawlikowski (1974).[9] Michael Patrick O'Connor (1988) suggested that the names "Palmyra" and "Tadmor" originated in the Hurrian language.[1] As evidence, he cited the inexplicability of alterations to the theorized roots of both names (represented in the addition of -d- to tamar and -ra- to palame).`,

        contentParaFour: `At its height during the reign of Zenobia, Palmyra had more than 200,000 residents.[note 3][42] The earliest known inhabitants were the Amorites in the early second millennium BC,[43] and by the end of the millennium, Arameans were mentioned as inhabiting the area.[44][45] Arabs arrived in the city in the late first millennium BC.[46] Zabdibel, who aided the Seleucids in the battle of Raphia (217 BC), was mentioned as the commander of "the Arabs and neighbouring tribes to the number of ten thousands";[47] Zabdibel and his men were not actually identified as Palmyrenes in the texts, but the name "Zabdibel" is a Palmyrene name leading to the conclusion that he hailed from Palmyra.[48] The Arab newcomers were assimilated by the earlier inhabitants, used Palmyrene as a mother tongue,[49] and formed a significant segment of the aristocracy.[50]
        <br></br>
        The classical city also had a Jewish community; inscriptions in Palmyrene from the Beit She'arim necropolis in Lower Galilee confirm the burial of Palmyrene Jews.[51]
        <br></br>
        During the Roman period, occasionally and rarely, members of the Palmyrene families took Greek names while ethnic Greeks were few; the majority of people with Greek names, who did not belong to one of the city's families, were freed slaves.[52] The Palmyrenes seem to have disliked the Greeks, considered them foreigners, and restricted their settlement in the city.[52] During the Umayyad Caliphate, Palmyra was mainly inhabited by the Banu Kalb.[53] Benjamin of Tudela recorded the existence of 2000 Jews in the city during the twelfth century.[54] Palmyra declined after its destruction by Timur in 1400,[55] and was a village of 6,000 inhabitants at the beginning of the 20th century.[56]`,

        contentParaFive: `Until the late third century, Palmyrenes spoke Palmyrene Aramaic and used the Palmyrene alphabet.[69][70] The use of Latin was minimal, but Greek was used by wealthier members of society for commercial and diplomatic purposes,[71] and it became the dominant language during the Byzantine era.[72] There are several theories explaining the disappearance of the Palmyrene language shortly after the campaigns of Aurelian. The linguist Jean Cantineau assumed that Aurelian suppressed all aspects of Palmyrene culture, including the language, but the last Palmyrene inscription dates to 279/280, after the death of the Roman emperor in 275, thus refuting such a theory.[73] Many scholars ascribe the disappearance of the language to a change in society resulting from the reorganization of the Eastern Roman frontier following the fall of Zenobia.[73] The archaeologist Karol Juchniewicz ascribed it to a change in the ethnic composition of the city, resulting from the influx of people who did not speak Aramaic, probably a Roman legion.[21] Hartmann suggested that it was a Palmyrene initiative by nobles allied to Rome attempting to express their loyalty to the emperor; Hartmann noted that Palmyrene disappeared in the written form, and that this does not mean its extinction as spoken language.[74] After the Arab conquest, Greek was replaced by Arabic,[72] from which, although the city was surrounded by Bedouins, a Palmyrene dialect evolved.[56]`,

        pdf: "Assets/Monuments - pdf/Palmyra.pdf",

        zone: zones[2]
    },
    {
        id: "Alcazar-of-Seville",

        img: "Assets/Images/alcázar-of-seville-1.jpeg",
        imgTwo: "Assets/Images/alcázar-of-seville-2.jpg",
        imgThree: "Assets/Images/history-1.jpg",
        imgFour: "Assets/Images/alcázar-of-seville-2.jpg",
        imgFive: "Assets/Images/alcázar-of-seville-1.jpeg",

        name: "Alcázar of Seville",
        location: "Spain (Seville)",
        built: "10th century",
        excerpt: "The Alcázar of Seville is a royal palace known for its stunning Moorish architecture, lush gardens, and rich history. It is one of the oldest palaces still in use in Europe.",

        subHeadingOne: "Islamic era",
        subHeadingTwo: "Tiles",
        subHeadingThree: "Puerta del León",

        headingOne: "History",
        headingTwo: "Christian era",
        headingThree: "The palace",
        headingFour: "Puerta del León",

        contentParaOne: `The Alcázar of Seville, officially called Royal Alcázar of Seville (Spanish: Real Alcázar de Sevilla or Reales Alcázares de Sevilla),[1] is a historic royal palace in Seville, Spain. It was formerly the site of the Islamic-era citadel of the city, begun in the 10th century and then developed into a larger palace complex by the Abbadid dynasty (11th century) and the Almohads (12th to early 13th centuries). After the Castilian conquest of the city in 1248, the site was progressively rebuilt and replaced by new palaces and gardens. Among the most important of these is a richly-decorated Mudéjar-style palace built by Pedro I during the 1360s.[2][3]
        <br></br>
        The palace is a preeminent example of Mudéjar style in the Iberian Peninsula and also includes sections with Gothic and Renaissance elements. The upper stories of the Alcázar are still occupied by the royal family when they visit Seville and are administered by the Patrimonio Nacional. It was registered in 1987 by UNESCO as a World Heritage Site, along with the adjoining Seville Cathedral and the General Archive of the Indies.[4]`,

        contentParaTwo: `In the year 712, Seville was conquered by the Umayyad Caliphate. In the year 913–914, after a revolt against Cordoba's government, the first caliph of Al-Andalus Abd al-Rahman III built a fortified construction in place of a Visigothic Christian basilica.[9] It was a quadrangular, roughly square enclosure about 100 meters long on each side, fortified with walls and rectangular towers, and annexed to the city walls.[10][11] In the 11th century, during the Taifa period, the Abbadid king Al-Mu'tamid expanded the complex southwards and eastwards,[10] with a new southern enclosure measuring approximately 70 by 80 meters.[11] This new palace was called Al Mubarak (Arabic: المبارك).[2] Various additions to the construction such as stables and warehouses were also carried out.[9]
        <br></br>
        Towards 1150, the Almohad Caliphs began to develop Seville as their capital in Al-Andalus. The Almohad governor extended the fortified complex to the west, nearly doubling its size. At least six new courtyard palaces were constructed in the old enclosures and nine palaces were added in the western extensions.[11] In 1163 the caliph Abu Ya'qub Yusuf made the Alcazar his main residence in the region.[9][11] He further expanded and embellished the palace complex in 1169, adding six new enclosures to the north, south, and west sides of the existing palaces. The works were carried out by architects Ahmad ibn Baso and 'Ali al-Ghumari.[11] With the exception of the walls, nearly all previous buildings were demolished, and a total of approximately twelve palaces were built.[10] Among the new structures was a very large garden courtyard, now known as the Patio del Crucero, which stood in the old Abbadid enclosure. Between 1171 and 1198 an enormous new congregational mosque was built on the north side of the Alcazar (later transformed into the current Cathedral of Seville). A shipyard was also built nearby in 1184 and a textiles market in 1196.[11]`,

        contentParaThree: `Seville was conquered in 1248 by Ferdinand III of Castile. The former Moorish palace-citadel was taken over by the Castilian monarchs and underwent significant reconstruction and modification, such that most of the Islamic-era structure has since disappeared.[12]
        <br></br>
        A Gothic-style palace was built on the site in 1258 for Alfonso X (Ferdinand's successor).[3] It stood on the site of the present-day Patio del Crucero, incorporating and preserving parts of the Almohad-era courtyard that was found here, including the Islamic-style garden divided into quadrants by two intersecting paths. Over these paths and around the courtyard, Gothic-style vaults and pointed arches were added, along with a hall divided into several naves. Corners towers containing spiral staircases granted access to an upper terrace.[13] Of the Gothic palace today, only the upstairs Sala de las Bóvedas and the Baños de María de Padilla, with their Gothic cross-ribbed vaults, have been preserved or partially preserved.[13]
        <br></br>
        In the mid-14th century, Alfonso XI commissioned the construction of a new throne hall known as the Hall of Justice, which commemorated his victory at the Battle of Río Salado (1340).[2] It is attached to the Patio del Yeso, an Almohad-era courtyard, and also serves as its antechamber. This new addition was made in a Mudéjar style, with stucco decoration and an overall arrangement of elements directly based on contemporary Islamic Andalusi architecture.[2]`,

        contentParaFour: `The palace is known for its tile decoration. The two tile types used are majolica and arista tiles. In the arista technique, the green body is stamped and each tile segment has raised ridges. This technique produces tiles with transparent glazes that are not flat. The art of majolica ceramics was developed later in the 15th–16th centuries. The innovation made it possible to "paint" directly on ceramics covered with white opaque glazes. Being a trade center, Seville had access to large scale production of these tiles. They were mainly of geometric design inspired by arabesque ornamentation.[15]
        <br></br>
        In the 16th century, the Catholic Monarchs commissioned an Italian artist from Pisa, Francisco Niculoso (called Pisano) to make two majolica tile altarpieces for their private chapel in the palace.[16] One still exists in the oratory of the royal apartments, the other one is missing. Later, the artist Cristóbal de Augusta created a tile-work in the Palacio Gotico. It features animals, cherubs and floral designs and gives the palace a bright tapestry look.[17]`,

        contentParaFive: `The Puerta del León (Gate of the Lion), located in the outer wall of the complex, is the main access to the enclosure. Between the lintel of this gate and under a machicolation there was a painting of a lion, whose origin is unknown, although it appears in the drawings made by Richard Ford in 1832.[18][19] Until 1876 the medieval painting of the lion with the cross had been preserved, but that year, Joaquín Domínguez Bécquer being the director of the painting and gilding of the whole and being probably in very bad condition, he repainted it completely.[20][21] In 1892 this painting was replaced by a panel of azulejo designed by Manuel Tortosa y Fernández, with the historical advice of José Gestoso. The azulejo was made in the Mensaque factory[22][23] and also represents a lion,[22] in Gothic style, which appears holding a crucifix with its right claw and with a flag under its left claw. On the chest there is a tefillin reading in Latin Ad utrumque, which means "for one thing and for another", the word 'paratus' would be missing; Ad utrumque paratus,[20] thus meaning "prepared for one thing and for another".`,

        pdf: "Assets/Monuments - pdf/Alcázar of Seville.pdf",

        zone: zones[1]
    },
    {
        id: "Tower-Bridge",

        img: "Assets/Images/tower-bridge-1.jpeg",
        imgTwo: "Assets/Images/tower-bridge-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/construction-2.jpg",
        imgFive: "Assets/Images/architecture-2.jpg",

        name: "Tower Bridge",
        location: "United Kingdom (London)",
        built: "1894",
        excerpt: "Tower Bridge is a combined bascule and suspension bridge spanning the River Thames in London. It is an iconic symbol of the city and a popular tourist attraction.",

        subHeadingOne: "History, Inception",
        subHeadingTwo: "Construction Of Tower Bridge",
        subHeadingThree: "Design, Structure",

        headingOne: "History",
        headingTwo: "Attraction",
        headingThree: "Construction",
        headingFour: "Design",

        contentParaOne: `Tower Bridge is a Grade I listed combined bascule and suspension bridge in London, built between 1886 and 1894, designed by Horace Jones and engineered by John Wolfe Barry with the help of Henry Marc Brunel.[1] It crosses the River Thames close to the Tower of London and is one of five London bridges owned and maintained by the City Bridge Foundation, a charitable trust founded in 1282. The bridge was constructed to give better access to the East End of London, which had expanded its commercial potential in the 19th century. The bridge was opened by Edward, Prince of Wales and Alexandra, Princess of Wales in 1894.
        <br></br>
        The bridge is 800 feet (240 m) in length and consists of two 213-foot (65 m) bridge towers connected at the upper level by two horizontal walkways, and a central pair of bascules that can open to allow shipping. Originally hydraulically powered, the operating mechanism was converted to an electro-hydraulic system in 1972.`,

        contentParaTwo: `In the late 19th century, commercial development in the East End of London increased, leading to demand for a new river crossing downstream of London Bridge. A traditional fixed bridge at street level could not be built because it would cut off access by sailing ships to the port facilities in the Pool of London between London Bridge and the Tower of London.[2]
        <br></br>
        A Special Bridge or Subway Committee chaired by Sir Albert Joseph Altman was formed in 1877 to find a solution.[3] More than fifty designs were submitted, including one from civil engineer Sir Joseph Bazalgette, which was rejected because of a lack of sufficient headroom. A design was not approved until 1884 when it was decided to build a bascule bridge.[2][4] Sir John Wolfe Barry was appointed engineer and Sir Horace Jones the architect (who was also one of the judges).[5][6] An Act of Parliament authorising construction was passed in 1885. It specified that the opening span would provide a clear width of 200 feet (61 m) and headroom of 135 feet (41 m). The design had to be in a Gothic style.[5] Construction was funded by the City Bridge Foundation, a charity established in 1282 for maintenance of London Bridge that subsequently expanded to cover Tower Bridge, Blackfriars Bridge, Southwark Bridge and the Millennium Bridge.[7]`,

        contentParaThree: `he Tower Bridge attraction is a display housed inside the Bridge's Towers, the high-level Walkways, and the Victorian Engine Rooms. It uses films, photos, and interactive displays to explain why and how Tower Bridge was built. Visitors can access the original steam engines that once powered the bridge bascules, housed in Engine Rooms, underneath the south end of the bridge.[31]
        <br></br>
        The attraction charges an admission fee. The entrance is from the Ticket Office on the west side of the North Tower, from where visitors can climb the stairs (or take a lift) to the high-level Walkways to cross to the South Tower. In the Towers and Walkways is interpretation about the history of the Bridge. The Walkways also provide views over the city, the Tower of London and the Pool of London, and include two Glass Floors, where you can look down to see the road and River Thames below. From the South Tower, visitors can visit exit and follow the Blue Line to the Victorian Engine Rooms, with the original steam engines, which are situated in a separate building underneath the southern approach to the Bridge.[64]
        <br></br>
        Benjamin Crisler, the New York Times film critic, wrote in 1938: "Three unique and valuable institutions the British have that we in America have not: Magna Carta, the Tower Bridge and Alfred Hitchcock."[67] Architectural historian Dan Cruickshank selected Tower Bridge as one of his four choices for the 2002 BBC television documentary series Britain's Best Buildings.[68][69] The bridge and its surrounding landscape was depicted in an official BBC trailer for the 2021 Rugby League World Cup (in reference to London being one of the host cities).[70]`,

        contentParaFour: `Construction started in 1886, with the foundation stone laid by the Prince of Wales on 21 June, and took eight years.[8][9] Major contractors included Sir John Jackson (foundations),[10] Armstrong, Mitchell and Company (hydraulics), William Webster,[11] and Sir William Arrol & Co.[12] 432 people worked on the site; E W Crutwell was the resident engineer for the construction.[13]
        <br></br>
        Two piers, containing over 70,000 long tons (78,400 short tons; 71,123 t) of concrete, were sunk into the riverbed to support the construction.[14] More than 11,000 long tons (12,320 short tons; 11,177 t) of steel were used in the framework for the towers and walkways, which were then clad in Cornish granite and Portland stone to protect the underlying steelwork.[15]
        <br></br>
        Jones died in 1887, and George D. Stevenson took over the project.[16] Stevenson replaced Jones's original brick façade with the more ornate Victorian Gothic style, which made the bridge a distinctive landmark and was intended to harmonise the bridge with the nearby Tower of London.[13][16] The total cost of construction was £1,184,000[9][13] (equivalent to £143 million in 2021).[17]`,

        contentParaFive: `The bridge is 800 feet (240 m) in length with two towers each 213 feet (65 m) high, built on piers.[43] The central span of 200 feet (61 m) between the towers is split into two equal bascules, or leaves, which can be raised to an angle of 86 degrees to allow river traffic to pass.[44] The bascules, weighing over 1,000 tons each, are counterbalanced to minimise the force required and allow raising in five minutes.[45]
        <br></br>
        The two side spans are suspension bridges, each 270 feet (82 m) long, with the suspension rods anchored both at the abutments and through rods contained within the bridge's upper walkways. The pedestrian walkways are 143 feet (44 m) above the river at high tide and accessed by lifts and staircases.[5][13]
        <br></br>
        There is a chimney on the bridge that is painted to look like a lamppost. It was connected to a fireplace in a guardroom located in one of the bridge piers.[46]`,

        pdf: "Assets/Monuments - pdf/Tower Bridge.pdf",

        zone: zones[0]
    },
    {
        id: "Golden-Gate-Bridge",

        img: "Assets/Images/golden-gate-bridge-1.jpeg",
        imgTwo: "Assets/Images/golden-gate-bridge-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/architecture-4.jpg",
        imgFive: "Assets/Images/construction-3.jpg",

        name: "Golden Gate Bridge",
        location: "United States (San Francisco)",
        built: "1937",
        excerpt: "The Golden Gate Bridge is a suspension bridge that spans the Golden Gate Strait, connecting San Francisco to Marin County. It is one of the most famous bridges in the world and an engineering marvel.",

        subHeadingOne: "History, Ferry service",
        subHeadingTwo: "Design Of Goledn Gate Bridge",
        subHeadingThree: "Construction Of Goledn Gate Bridge",

        headingOne: "History",
        headingTwo: "Conception",
        headingThree: "Design",
        headingFour: "Construction",

        contentParaOne: `The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the U.S. city of San Francisco, California—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. It also carries pedestrian and bicycle traffic, and is designated as part of U.S. Bicycle Route 95. Recognized by the American Society of Civil Engineers as one of the Wonders of the Modern World,[7] the bridge is one of the most internationally recognized symbols of San Francisco and California.
        <br></br>
        The idea of a fixed link between San Francisco and Marin had gained increasing popularity during the late 19th century, but it was not until the early 20th century that such a link became feasible. Joseph Strauss served as chief engineer for the project, with Leon Moisseiff, Irving Morrow and Charles Ellis making significant contributions to its design. The bridge opened to the public in 1937 and has undergone various retrofits and other improvement projects in the decades since.`,

        contentParaTwo: `Before the bridge was built, the only practical short route between San Francisco and what is now Marin County was by boat across a section of San Francisco Bay. A ferry service began as early as 1820, with a regularly scheduled service beginning in the 1840s for the purpose of transporting water to San Francisco.[11]
        <br></br>
        In 1867, the Sausalito Land and Ferry Company opened. In 1920, the service was taken over by the Golden Gate Ferry Company, which merged in 1929 with the ferry system of the Southern Pacific Railroad, becoming the Southern Pacific-Golden Gate Ferries, Ltd., the largest ferry operation in the world.[11][12] Once for railroad passengers and customers only, Southern Pacific's automobile ferries became very profitable and important to the regional economy.[13] The ferry crossing between the Hyde Street Pier in San Francisco and Sausalito Ferry Terminal in Marin County took approximately 20 minutes and cost $1.00 per vehicle prior to 1937, when the price was reduced to compete with the new bridge.[14][15] The trip from the San Francisco Ferry Building took 27 minutes.`,

        contentParaThree: `Although the idea of a bridge spanning the Golden Gate was not new, the proposal that eventually took hold was made in a 1916 San Francisco Bulletin article by former engineering student James Wilkins.[18] San Francisco's City Engineer estimated the cost at $100 million (equivalent to $2.8 billion in 2023), and impractical for the time. He asked bridge engineers whether it could be built for less.[11] One who responded, Joseph Strauss, was an ambitious engineer and poet who had, for his graduate thesis, designed a 55-mile-long (89 km) railroad bridge across the Bering Strait.[19] At the time, Strauss had completed some 400 drawbridges—most of which were inland—and nothing on the scale of the new project.[3] Strauss's initial drawings[20] were for a massive cantilever on each side of the strait, connected by a central suspension segment, which Strauss promised could be built for $17 million (equivalent to $476 million in 2023).[11]
        <br></br>
        n May 1924, Colonel Herbert Deakyne held the second hearing on the Bridge on behalf of the Secretary of War in a request to use federal land for construction. Deakyne, on behalf of the Secretary of War, approved the transfer of land needed for the bridge structure and leading roads to the "Bridging the Golden Gate Association" and both San Francisco County and Marin County, pending further bridge plans by Strauss.[22] Another ally was the fledgling automobile industry, which supported the development of roads and bridges to increase demand for automobiles.[14]
        <br></br>
        Strauss spent more than a decade drumming up support in Northern California.[21] The bridge faced opposition, including litigation, from many sources. The Department of War was concerned that the bridge would interfere with ship traffic. The US Navy feared that a ship collision or sabotage to the bridge could block the entrance to one of its main harbors. Unions demanded guarantees that local workers would be favored for construction jobs. Southern Pacific Railroad, one of the most powerful business interests in California, opposed the bridge as competition to its ferry fleet and filed a lawsuit against the project, leading to a mass boycott of the ferry service.[11]`,

        contentParaFour: `Strauss was the chief engineer in charge of the overall design and construction of the bridge project.[16] However, because he had little understanding or experience with cable-suspension designs,[25] responsibility for much of the engineering and architecture fell on other experts. Strauss's initial design proposal (two double cantilever spans linked by a central suspension segment) was unacceptable from a visual standpoint.[20] The final suspension design was conceived and championed by Leon Moisseiff, the engineer of the Manhattan Bridge in New York City.[26]
        <br></br>
        Irving Morrow, a relatively unknown residential architect, designed the overall shape of the bridge towers, the lighting scheme, and Art Deco elements, such as the tower decorations, streetlights, railing, and walkways. The famous International Orange color was Morrow's personal selection, winning out over other possibilities, including the US Navy's suggestion that it be painted with black and yellow stripes to ensure visibility by passing ships.[16][27]
        <br></br>
        Senior engineer Charles Alton Ellis, collaborating remotely with Moisseiff, was the principal engineer of the project.[28] Moisseiff produced the basic structural design, introducing his "deflection theory" by which a thin, flexible roadway would flex in the wind, greatly reducing stress by transmitting forces via suspension cables to the bridge towers.[28] Although the Golden Gate Bridge design has proved sound, a later Moisseiff design`,

        contentParaFive: `Construction began on January 5, 1933.[11] The project cost more than $35 million[33] ($610 million in 2023 dollars[34]), and was completed ahead of schedule and $1.3 million under budget (equivalent to $28.9 million today).[35] The Golden Gate Bridge construction project was carried out by the McClintic-Marshall Construction Co., a subsidiary of Bethlehem Steel Corporation founded by Howard H. McClintic and Charles D. Marshall, both of Lehigh University.
        <br></br>
        Strauss remained head of the project, overseeing day-to-day construction and making some groundbreaking contributions. A graduate of the University of Cincinnati, he placed a brick from his alma mater's demolished McMicken Hall in the south anchorage before the concrete was poured.`,

        pdf: "Assets/Monuments - pdf/Golden Gate Bridge.pdf",

        zone: zones[1]
    },
    {
        id: "Blue-Mosque",

        img: "Assets/Images/blue-mosque-1.jpeg",
        imgTwo: "Assets/Images/blue-mosque-2.jpg",
        imgThree: "Assets/Images/history-2.jpg",
        imgFour: "Assets/Images/architecture-2.jpg",
        imgFive: "Assets/Images/construction-2.jpg",

        name: "Blue Mosque",
        location: "Turkey (Istanbul)",
        built: "1616",
        excerpt: "The Blue Mosque, also known as the Sultan Ahmed Mosque, is a historic mosque in Istanbul known for its stunning blue tiles, six minarets, and central dome. It is a masterpiece of Ottoman architecture.",

        subHeadingOne: "History, Construction",
        subHeadingTwo: "Architecture Of Blues Mosque",
        subHeadingThree: "Restorations",

        headingOne: "History",
        headingTwo: "Interior",
        headingThree: "Architecture",
        headingFour: "Restorations",

        contentParaOne: `The Blue Mosque in Istanbul, also known by its official name, the Sultan Ahmed Mosque (Turkish: Sultan Ahmet Camii), is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I and remains a functioning mosque today. It also attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.[2][3]
        <br></br>
        The mosque has a classical Ottoman layout with a central dome surrounded by four semi-domes over the prayer hall. It is fronted by a large courtyard and flanked by six minarets. On the inside, it is decorated with thousands of Iznik tiles and painted floral motifs in predominantly blue colours, which give the mosque its popular name. The mosque's külliye (religious complex) includes Ahmed's tomb, a madrasa, and several other buildings in various states of preservation.`,

        contentParaTwo: `After the Peace of Zsitvatorok, seen as a blow to Ottoman prestige, Sultan Ahmed I decided to build a large mosque in Istanbul in the hope of soliciting God's favour.[4] He was the first sultan to build an imperial mosque since Selim II (d. 1574), as both Murad III and Mehmed III before him had neglected to construct their own.[5][6]
        <br></br>
        The mosque was built on the southeast side of the old Byzantine Hippodrome, near the Hagia Sophia (the most important mosque of the Ottoman Empire[7][8]), a site of significant symbolic significance that allows it to dominate the city's skyline. The mosque's location was originally occupied by the Hippodrome's bleachers and its imperial box (where the emperor sat when attending events here). During excavations in the early 20th century, some of the ancient seats were discovered in the mosque's courtyard.[9] Given the mosque's location, size, and number of minarets, it is probable that Sultan Ahmed intended to create a monument that rivalled or surpassed the Hagia Sophia.[10]
        <br></br>
        Prior to construction, this site was occupied by the palaces of several Ottoman viziers, including Sokollu Mehmet Pasha and Güzel Ahmet Pasha, which required a costly expropriation process.[11][5] This, along with the fact that the empire was under economic stress, aroused the protests of the ulema (Islamic legal scholars), who argued that sultans should only fund the construction of an imperial mosque with spoils of conquest. Ahmed I had won no major victories and thus had to divert funds from the treasury for this expensive project.[11][3] The ulema went so far as to forbid Muslims from praying at the mosque.[11]`,

        contentParaThree: `The mosque's interior is dominated by its dome and cascading semi-domes. The main dome reaches a height of 43 metres (141 ft).[26] The weight of the dome is supported by four massive cylindrical pillars. The transition between the central dome and the pillars is achieved by four long, smooth pendentives. Smaller pendentives are used for transitions between the semi-domes and their exedrae and between the hall's corner domes and the surrounding structure. The transitions between the smaller exedrae and the supporting walls or arches are covered by muqarnas (stalactite-like sculpting) made of stucco.[27] By employing these elements, Mehmed Agha created a softer progression from the rectangular outer walls to the round central dome.[27] A two-floor gallery, supported on columns, runs along three sides of the prayer hall, except for the southeastern (or qibla) side, where the mihrab is located.[28] Two fountains are incorporated into the two northern pillars of the mosque, similar to the Süleymaniye Mosque's prayer hall.[29] The floors are covered with carpets, which are donated by the faithful and are regularly replaced as they wear out.
        <br></br>
        At ground level, the focus of the prayer hall is the mihrab, which is made of finely carved marble, with a muqarnas niche and a two inscription panels above it.[29] It is surrounded by many windows. To the right of the mihrab is the richly decorated minbar, or pulpit, where the imam stands when he is delivering his sermon at the time of noon prayer on Fridays or on holy days. The minbar is crafted from elaborately carved marble, with a summit covered by a gold-covered conical cap.[29] The mosque has been designed so that even when it is at its most crowded, everyone in the mosque can see and hear the imam,[30] with the exception of the areas behind the mosque's large pillars.[26] According to Evliya Çelebi, who saw the mosque in the 17th century, a hundred Qur'ans on lecterns inlaid with mother-of-pearl, all gifted by sultans and viziers, were placed near the mihrab.[31]`,

        contentParaFour: `The design of the mosque is based on that of the earlier Şehzade Mosque designed by Mimar Sinan in the early 16th century. The prayer hall occupies an area of 64 by 72 metres (210 by 236 ft) and has a central dome measuring 23.5 metres (77 ft) in diameter.[19] The dome is surrounded by four semi-domes, each of which is flanked by three smaller semi-domes or exedrae. Four smaller domes cover the corners of the prayer hall. On the outside, the mosque has six minarets, ablutions facilities, and a large courtyard preceding the prayer hall.[19][20]
        <br></br>
        The mosque's architect, Sedefkar Mehmed Agha, synthesized the ideas of his master Sinan, aiming for overwhelming size, majesty and splendor.[2] According to the architect's official biographer, the mosque was the culmination of his career.[6] Reflecting the classical Ottoman style of the period, the structure incorporates aspects of Byzantine architecture from the neighboring Hagia Sophia with Islamic architecture.[21] It was the last great mosque of this classical period.[22]
        <br></br>
        Architectural historian Doğan Kuban characterizes Mehmed Agha's style as having a more "sculptural" approach, with more attention brought on the details of the building and a willingness to break up its elements into smaller parts, whereas Sinan had placed more emphasis on rigorous spatial designs with relatively restrained decoration.[23] Scholar Gülru Necipoğlu states that the mosque demonstrates an emerging trend towards extravagance in the structure and decoration of Ottoman buildings during this time,`,

        contentParaFive: `In 1883, much of the mosque interior's painted decoration was replaced by new stenciled paintwork, some of which changed the original colour scheme.[15] A major fire in 1912 damaged or destroyed several of the outlying structures of the mosque complex, which were subsequently restored.[15]
        <br></br>
        A major restoration of the mosque took place in the 21st century. During preparatory work in 2013, it was discovered that the mosque's northwest minaret had shifted 5 centimetres (2.0 in) over time, constituting a potential threat to its structural stability. Work to reconstruct and repair the minaret was underway in 2015.[16] Comprehensive restoration work on the rest of the mosque began in 2018 and was finished in April 2023.[17][18]`,

        pdf: "Assets/Monuments - pdf/Blue Mosque.pdf",

        zone: zones[2]
    },
    {
        id: "Chartres-Cathedral",

        img: "Assets/Images/chartres-cathedral-1.jpeg",
        imgTwo: "Assets/Images/chartres-cathedral-2.jpg",
        imgThree: "Assets/Images/history-4.jpg",
        imgFour: "Assets/Images/construction-2.jpg",
        imgFive: "Assets/Images/construction-5.jpg",

        name: "Chartres Cathedral",
        location: "France (Chartres)",
        built: "1194-13th century",
        excerpt: "Chartres Cathedral is a medieval Catholic cathedral renowned for its Gothic architecture, stained glass windows, and labyrinth. It is a UNESCO World Heritage Site and an important pilgrimage destination.",

        subHeadingOne: "Earlier Cathedrals",
        subHeadingTwo: "Fire and reconstruction (1194–1260)",
        subHeadingThree: "2009 restoration",

        headingOne: "History",
        headingTwo: "World War II",
        headingThree: "reconstruction ",
        headingFour: "restoration",

        contentParaOne: `Chartres Cathedral, also known as the Cathedral of Our Lady of Chartres (French: Cathédrale Notre-Dame de Chartres), is a Catholic church in Chartres, France, about 80 km (50 miles) southwest of Paris, and is the seat of the Bishop of Chartres. Mostly constructed between 1194 and 1220, it stands on the site of at least five cathedrals that have occupied the site since the Diocese of Chartres was formed as an episcopal see in the 4th century. It is one of the best-known and most influential examples of High Gothic[2] and Classic Gothic architecture,[3][4] [5] It stands on Romanesque basements, while its north spire is more recent (1507–1513) and is built in the more ornate Flamboyant style.[6]
        <br></br>
        Long renowned as "one of the most beautiful and historically significant cathedrals in all of Europe,"[7] it was designated a World Heritage Site by UNESCO in 1979, which called it "the high point of French Gothic art" and a "masterpiece".[8]`,

        contentParaTwo: `At least five cathedrals have stood on this site, each replacing an earlier building damaged by war or fire. The first church dated from no later than the 4th century and was located at the base of a Gallo-Roman wall; this was put to the torch in 743 on the orders of the Duke of Aquitaine. The second church on the site was set on fire by Danish pirates in 858. This was then reconstructed and enlarged by Bishop Gislebert, but was itself destroyed by fire in 1020. A vestige of this church, now known as Saint Lubin Chapel, remains, underneath the apse of the present cathedral.[9] It took its name from Lubinus, the mid-6th-century Bishop of Chartres. It is lower than the rest of the crypt and may have been the shrine of a local saint, prior to the church's rededication to the Virgin Mary.[10]
        <br></br>
        In 962 the church was damaged by another fire and was reconstructed yet again. A more serious fire broke out on 7 September 1020, after which Bishop Fulbert (bishop from 1006 to 1028) decided to build a new cathedral. He appealed to the royal houses of Europe, and received generous donations for the rebuilding, including a gift from Cnut the Great, King of Norway, Denmark and much of England. The new cathedral was constructed atop and around the remains of the 9th-century church. It consisted of an ambulatory around the earlier chapel, surrounded by three large chapels with Romanesque barrel vault and groin vault ceilings, which still exist. On top of this structure he built the upper church, 108 meters long and 34 meters wide.[11]`,

        contentParaThree: `The Second World War, in France, was a battle between the Allies and Axis powers of Germany and Italy. In July 1944, the British and Canadians found themselves restrained just south of Caen. The Americans and their five divisions planned an alternative route to the Germans. While some Americans headed west and south, others found themselves in a sweep east of Caen that led them behind the frontline of the German forces. Hitler ordered the German commissioner, Kluge, to head west to cut off the Americans. This ultimately led the Allies to Chartres in mid-August 1944.[18]
        <br></br>
        On August 16, 1944, the cathedral was saved from destruction thanks to the American colonel Welborn Barton Griffith Jr. (1901–1944), who questioned the order he was given to target the cathedral. The Americans believed that the steeples and towers were being used as an observation post for German artillery.[19]
        <br></br>
        Griffith, accompanied by a volunteer soldier, instead decided to go and verify whether or not the Germans were using the cathedral. Griffith could see that the cathedral was empty, so he had the cathedral bells ring as a signal for the Americans not to shoot. Upon hearing the bells, the American command rescinded the order to fire. Colonel Griffith died in combat action that same day, in the town of Lèves, near Chartres. He was posthumously decorated with the Croix de Guerre avec Palme (War Cross 1939–1945), the Légion d'Honneur (Legion of Honour) and the Ordre National du Mérite (National Order of Merit) of the French government and the Distinguished Service Cross of the American government[20][21]`,

        contentParaFour: `On the night of 10 June 1194, another major fire devastated the cathedral. Only the crypt, the towers, and the new façade survived. The cathedral was already known throughout Europe as a pilgrimage destination, due to the reputed relics of the Virgin Mary that it contained. A legate of the Pope happened to be in Chartres at the time of the fire, and spread the word. Funds were collected from royal and noble patrons across Europe, as well as small donations from ordinary people. Reconstruction began almost immediately. Some portions of the building had survived, including the two towers and the Royal Portal on the west end, and these were incorporated into the new cathedral.[11]
        <br></br>
        The nave, aisles, and lower levels of the transepts of the new cathedral were probably completed first, then the choir and chapels of the apse; then the upper parts of the transept. By 1220 the roof was in place. The major portions of the new cathedral, with its stained glass and sculpture, were largely finished within just twenty-five years, extraordinarily rapid for the time. The cathedral was formally re-consecrated in October 1260, in the presence of King Louis IX of France,[15] whose coat of arms can be seen painted on a boss at the entrance to the apse, although this was added in the 14th century.[16]`,

        contentParaFive: `In 2009, the Monuments Historiques division of the French Ministry of Culture began an $18.5-million program of works at the cathedral, cleaning the inside and outside, protecting the stained glass with a coating, and cleaning and painting the inside masonry creamy-white with trompe-l'œil marbling and gilded detailing, as it may have looked in the 13th century. This has been a subject of controversy (see below).
        <br></br>
        The cathedral is the seat of the Bishop of Chartres of the Diocese of Chartres. The diocese is part of the ecclesiastical province of Tours.`,

        pdf: "Assets/Monuments - pdf/Chartres Cathedral.pdf",

        zone: zones[0]
    }
];



// For Loop For Displaying This In Home Page Top Monuments Section!
for (let i = 0; i <= 7; i++) {
    document.querySelector(".top-monument-container").innerHTML += `
    <div class="col-12 col-md-3">
    <a href="monument.html?id=${monuments[i].id}" class="card-link">
        <div class="top-monument-card card mb-5">
          <img class="top-monument-card-img-top card-img-top" src="${monuments[i].img}" alt="${monuments[i].name}">
          <div class="top-monument-card-body card-body">
            <h5 class="top-monument-card-title card-title">${monuments[i].name}</h5>
            <p class=".top-monument-card-location ">${monuments[i].location}</p>
            <p class=".top-monument-card-built ">${monuments[i].built}</p>
          </div>
          </a>
      </div>
    `
}