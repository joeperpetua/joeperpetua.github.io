const projectsRaw = [
    {
        "name": "MultiLang - Translation App",
        "technologies": "Java; Python - Flask",
        "description": "Multilang is a mobile app for Android that allows you to simoultaneously translate the input text to any amount of languages desired, all at the same time. It also provides alternative variations of the translation for a more diverse option pool when translating to another language. Its main purpose is to avoid losing time when selecting the target language desired.",
        "gh_link": [
            ["API", "https://github.com/joeperpetua/multilang-web/"],
            ["App", "https://github.com/joeperpetua/multilang-app"]
        ],
        "demo_link": null,
        "status": "Functional - Work In Progress"
    },
    {
        "name": "DJapones - Spanish/Japanese Dictionary",
        "technologies": "NodeJS; ReactJS",
        "description": "Japanese to Spanish dictionary, using JMDict (fetching Jisho API) and Google Translate API to give better and more useful translations than the original JMDict in Spanish.",
        "gh_link": [
            ["API", "https://github.com/joeperpetua/djapones-api"],
            ["Website", "https://github.com/joeperpetua/djapones-webapp"]
        ],
        "demo_link": "https://djapones.web.app/",
        "status": "Not functional - Work In Progress"
    },
    {
        "name": "e-commerce Demo",
        "technologies": "PHP; SQL",
        "description": "Fully fledged ecommerce site for mobile phones. The idea is to be able to filter phones by all the features possible (hardware/software specs). Fully relational SQL database. User registration/login with cart functionality and full CRUD functionality for administration and product loading.",
        "gh_link": [
            ["Website", "https://github.com/joeperpetua/ecommerce-redesign"]
        ],
        "demo_link": "http://www.exophone.rf.gd/",
        "status": "Functional - Finished"
    },
    {
        "name": "TapRace - Mobile Game",
        "technologies": "C#; Unity; Microsoft PlayFab",
        "description": "Mobile game for Android made in 1 month. It introduces 3 play modes, including online versus matches and global leaderboards.",
        "gh_link": [
            ["App", "https://github.com/joeperpetua/TapRace"]
        ],
        "demo_link": "https://github.com/joeperpetua/TapRace/releases",
        "status": "Functional - Work In Progress"
    },
    {
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
        "name": "Automated retrieval of information - Desktop App",
        "technologies": "NodeJS; UIKit; Puppeteer",
        "description": "Desktop App that implements Puppeteer automation to retrieve data from enterprise portal and formats it into readable and comprenhensible data.",
        "gh_link": [
            ["Desktop App", "https://github.com/joeperpetua/scrap-css"]
        ],
        "demo_link": null,
        "status": "Functional - Finished"
    },
    {
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
        "name": "Busuu Export Vocabulary - Script",
        "technologies": "JavaScript",
        "description": "This script will can be used to export all the vocabulary in your Busuu account to JSON data. The data retrieved will be: keyword, translated keyword, keyword strenght, example sentence, keyword audio URL, example sentence audio URL.",
        "gh_link": [
            ["Project", "https://github.com/joeperpetua/exportVocabBusuu"]
        ],
        "demo_link": null,
        "status": "Functional - Finished"
    }
];

export {projectsRaw};