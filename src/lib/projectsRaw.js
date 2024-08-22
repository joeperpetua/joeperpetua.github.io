const projectsRaw = [
    {
        "id": "multilang",
        "name": "WAAM - Windows Advanced Attributes Manager",
        "technologies": "C#; WPF",
        "description": "Windows Advanced Attributes Manager (WAAM) is a Windows tool that allows users to quickly preview and modify file and folder advanced attributes such as temporary, sparse, offline, hidden, read-only, system, and more. It provides a user-friendly interface for managing file system attributes efficiently.",
        "gh_link": [
            ["Desktop App", "https://github.com/joeperpetua/WindowsAdvancedAttributesManager"]
        ],
        "demo_link": "https://github.com/joeperpetua/WindowsAdvancedAttributesManager/releases",
        "status": "Functional - Finished"
    },
    {
        "id": "multilang",
        "name": "MultiLang - Translation App",
        "technologies": "ReactJS; Flutter; Java; Python - Flask",
        "description": "Multilang is a mobile app for Android that allows you to simultaneously translate the input text to any amount of languages desired, all at the same time. It also provides alternative variations of the translation for a more diverse option pool when translating to another language. Its main purpose is to avoid losing time when selecting the target language desired.",
        "gh_link": [
            ["Website", "https://github.com/joeperpetua/multilang-web"],
            ["App - Flutter", "https://github.com/joeperpetua/multilang-flutter"],
            ["App - Android Native", "https://github.com/joeperpetua/multilang-app"],
            ["API", "https://github.com/joeperpetua/multilang-api/"]
        ],
        "demo_link": "https://joeperpetua.github.io/multilang",
        "status": "Functional - WIP"
    },
    {
        "id": "djapones",
        "name": "DJapones - Spanish/Japanese Dictionary",
        "technologies": "NodeJS; ReactJS",
        "description": "Japanese to Spanish dictionary, using JMDict (fetching Jisho API) and <a rel='noreferrer' target='_blank' href='https://github.com/joeperpetua/multilang-web/'>MultiLang API</a> to give better and more useful translations than the original JMDict in Spanish.",
        "gh_link": [
            ["Website", "https://github.com/joeperpetua/djapones-webapp"],
            ["API", "https://github.com/joeperpetua/djapones-api"]
        ],
        "demo_link": "https://djapones.web.app/",
        "status": "Functional - WIP"
    },
    {
        "id": "exophone",
        "name": "ExoPhone - e-commerce Demo",
        "technologies": "PHP; SQL; ReactJS; Phonegap",
        "description": "Fully fledged ecommerce site for mobile phones. The idea is to be able to filter phones by all the features possible (hardware/software specs). Fully relational SQL database. User registration/login with cart functionality and full CRUD functionality for administration and product loading.",
        "gh_link": [
            ["Website", "https://github.com/joeperpetua/ecommerce-redesign"],
            ["App", "https://github.com/joeperpetua/exo-app"]
        ],
        "demo_link": "http://www.exophone.rf.gd/",
        "status": "Functional - Finished"
    },
    {
        "id": "taprace",
        "name": "TapRace - Mobile Game",
        "technologies": "C#; Unity; Microsoft PlayFab",
        "description": "Mobile game for Android made in 1 month. It introduces 3 play modes, including online versus matches and global leaderboards.",
        "gh_link": [
            ["App", "https://github.com/joeperpetua/TapRace"]
        ],
        "demo_link": "https://github.com/joeperpetua/TapRace/releases",
        "status": "Functional - Finished"
    },
    {
        "id": "debug-extractor",
        "name": "Debug Extractor - Desktop App",
        "technologies": "Python; appJar",
        "description": "Desktop app to extract compressed files and open them with either VSCode or Sublime Text. Mostly used to work with compressed log files from Synology NAS products.",
        "gh_link": [
            ["App", "https://github.com/joeperpetua/debug-extractor"]
        ],
        "demo_link": "https://github.com/joeperpetua/debug-extractor/releases",
        "status": "Functional - Finished"
    },
    {
        "id": "mirai-translate",
        "name": "MiraiTranslate Chrome Extension",
        "technologies": "JavaScript",
        "description": "This extension opens MiraiTranslate in a new tab and autocompletes the selected test into the translation box. The extension actually supports the following features:<br></br>- Opening Mirai's site in either a new tab or a popup window.<br></br>- Setting the target language translation.",
        "gh_link": [
            ["Chrome Extension", "https://github.com/joeperpetua/mirai-extension"]
        ],
        "demo_link": "https://chrome.google.com/webstore/detail/miraitranslate-search-ext/bjnbgbjhinhcafgfhhlonneeepmkggoo",
        "status": "Functional - Finished"
    },
    {
        "id": "rtk-core6k",
        "name": "Optimized RTK-Core6K - Japanese Anki Deck",
        "technologies": "NodeJS; Anki Connect API",
        "description": "This is a modification of the <a rel='noreferrer' target='_blank' href='https://djtguide.neocities.org/anki.html'>Japanese Optimized Core 6K</a> deck filtered and ordered by Remembering the Kanji 6th Edition (2200 kanji) lessons. The deck contains subdecks for each lesson of the book, in each subdeck there are words of the Core 6K that contain the kanji seen on the lesson, this assuring you to learn vocabulary of which you know all the kanjis. Some sorting and filtering algorithms had to be created to achieve this end result.",
        "gh_link": [
            ["Project", "https://github.com/joeperpetua/RTK-Core6K"]
        ],
        "demo_link": "https://github.com/joeperpetua/RTK-Core6K/releases",
        "status": "Functional - Finished"
    },
    {
        "id": "js-injector",
        "name": "Simple JS Injector - Firefox Extension",
        "technologies": "JavaScript",
        "description": "Adaptation to Mozilla Firefox of JS Injector, from <a rel='noreferrer' target='_blank' href='https://github.com/hex0cter/js-injector'>Daniel Han</a>. This addon creates a small popup that lets you paste some JS code and inject it into the page you are currently seeing.",
        "gh_link": [
            ["Extension", "https://github.com/joeperpetua/simple-js-injector"]
        ],
        "demo_link": "https://addons.mozilla.org/firefox/addon/simple-javascript-injector/",
        "status": "Functional - Finished"
    },
    {
        "id": "tg-twitter-bot",
        "name": "Watch Tweets and notify to Telegram Bot - Script",
        "technologies": "NodeJS; Twitter API; Telegram API",
        "description": "This script will get the latest tweet from a Twitter user, then it will compare it with the local saved latest tweet. If the fetched tweet is different than the stored one, then it will use a Telegram bot to send a new message to a Telegram user and notify it of the new tweet.",
        "gh_link": [
            ["Project", "https://github.com/joeperpetua/twitter-watch-to-tg"]
        ],
        "demo_link": null,
        "status": "Functional - Finished"
    },
    {
        "id": "busuu-export",
        "name": "Busuu Export Vocabulary - Script",
        "technologies": "JavaScript",
        "description": "This script will can be used to export all the vocabulary in your Busuu account to JSON data. The data retrieved will be: keyword, translated keyword, keyword strenght, example sentence, keyword audio URL, example sentence audio URL.",
        "gh_link": [
            ["Project", "https://github.com/joeperpetua/exportVocabBusuu"]
        ],
        "demo_link": null,
        "status": "Functional - Finished"
    },
    {
        "id": "portfolio-old",
        "name": "Portfolio - Old version",
        "technologies": "JavaScript; Materialize",
        "description": "Old portfolio, done a few years ago. Featured multilanguage support, but now the service is deprecated. Also served as a file storage.",
        "gh_link": [
            ["Portfolio", "https://github.com/joeperpetua/portfolio-old"]
        ],
        "demo_link": "https://joeperpetua.github.io/portfolio-old/",
        "status": "Functional - Finished"
    },
    {
        "id": "portfolio",
        "name": "Portfolio - Current version",
        "technologies": "ReactJS",
        "description": "New portfolio, done to update it in a more simple way, portraying all the projects done over the last few years.",
        "gh_link": [
            ["Portfolio", "https://github.com/joeperpetua/joeperpetua.github.io"]
        ],
        "demo_link": "https://joeperpetua.github.io/",
        "status": "Functional - Finished"
    }
];

export {projectsRaw};