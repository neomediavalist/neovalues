const resultsMapping = {
    "economics": {
        "welfare_capitalism": "Welfare Capitalism",
        "social_capitalism": "Social Capitalism",
        "laissez_faire": "Laissez-Faire",
        "countereconomics": "Counter-Economics",
        "state_capitalism": "State Capitalism",
        "state_socialism": "State Socialism",
        "dirigisme": "Dirigisme",
        "keynesianism": "Keynesianism",
        "third_way": "Third Way",
        "neo_corporatism": "Neocorporatism",
        "corporatism": "Corporatism",
        "social_corporatism": "Social-Corporatism",
        "yellow_socialism": "Yellow Socialism",
        "mutualism": "Mutualism",
        "guild_socialism": "Guild Socialism",
        "syndicalism": "Syndicalism",
        "market_socialism": "Market Socialism",
        "free_socialism": "Free Socialism",
        "communization": "Communization",
        "utopian_socialism": "Utopian Socialism",
        "mutual_distributism": "Mutual-Distributism",
        "social_distributism": "Social-Distributism",
        "agrarian_socialism": "Agrarian Socialism",
        "distributism": "Distributism",
        "feudalism": "Feudalism",
        "cameralism": "Cameralism",
        "free_market_distributism": "Free Market Distributism",
    },
    "resource_management": {
        "Voluntaryism": "Voluntaryism",
        "lvt": "Land Value Tax",
        "flat_taxation": "Flat Taxation",
        "Progressive_Taxation": "Progressive Taxation",
        "Confiscatory_Taxation": "Confiscatory Taxation",
        "collective_distribution": "Collective Distribution"
    },
    "culture": {
        "postmodernism": "Postmodernism",
        "civil_liberalism": "Civil Liberalism",
        "progressivism": "Progressivism",
        "social_progressivism": "Social-Progressivism",
        "conservative_liberalism": "Conservative Liberalism",
        "liberal_conservatism": "Liberal Conservatism",
        "progressive_conservatism": "Progressive Conservatism",
        "conservatism": "Conservatism",
        "reactionaryism": "Reactionaryism",
        "paleoconservatism": "Paleoconservatism",
        "neoreactionaryism": "Neoreactionaryism",
        "traditionalism": "Traditionalism",
        "reactionary_modernism": "Reactionary Modernism"
    },
    "authority": {
        "theocracy": "Theocracy",
        "absolute": "Absolute Monarchy",
        "totalitarianism": "Totalitarianism",
        "religious_authoritarianism": "Religious Authoritarianism",
        "autocracy": "Autocracy",
        "anarchism": "Anarchism",
        "partocracy": "Partocracy",
        "representative_democracy": "Representative Democracy",
        "direct_democracy": "Direct Democracy",
        "constitutional": "Constitutional Monarchy",
        "minarchism": "Minarchism",
        "meritocracy": "Meritocracy",
        "technocracy": "Technocracy",
        "stratocracy": "Stratocracy",
        "aristocracy": "Aristocracy",
        "anarcho_monarchism": "Anarcho-Monarchism",
        "neocameralism": "Neocameralism"
    },
    "nation": {
        "Internationalism": "Internationalism",
        "Cosmopolitanism": "Cosmopolitanism",
        "civic_nationalism": "Civic Nationalism",
        "cultural_nationalism": "Cultural Nationalism",
        "ethnic_nationalism": "Ethnic Nationalism",
        "pan_nationalism": "Pan-Nationalism",
        "racial_nationalism": "Racial Nationalism",
        "Tribalism": "Tribalism",
        "egoism": "Egoism",
        "communitarianism": "Communitarianism"
    },
    "foreign": {
        "Isolationism": "Isolationism",
        "Non_Interventionism": "Non-Interventionism",
        "Realpolitik": "Realpolitik",
        "Imperialism": "Imperialism",
        "Interventionism": "Interventionism",
        "Globalism": "Globalism",
        "armed_neutrality": "Armed Neutrality"
    }
};

const subCategories = {
    "economics": {
        "welfare": ["welfare_capitalism", "social_capitalism"],
        "regulated": ["state_capitalism", "dirigisme", "keynesianism", "third_way", "neo_corporatism", "cameralism"],
        "free_cap": ["laissez_faire", "countereconomics"],
        "socialists": ["state_socialism", "free_socialism", "communization", "utopian_socialism", "syndicalism", "guild_socialism"],
        "market_left": ["agrarian_socialism", "mutualism"],
        "corpotatists": ["corporatism", "social_corporatism", "yellow_socialism"],
        "distributist": ["distributism", "social_distributism", "mutual_distributism", "agrarian_socialism", "free_market_distributism"]
    },
    "resource_management": {
        "mainstream_tax": ["flat_taxation", "Progressive_Taxation", "lvt"],
        "farleft_tax": ["Confiscatory_Taxation", "collective_distribution"]
    },
    "culture": {
        "progressive": ["progressivism", "social_progressivism", "civil_liberalism"],
        "mainstreamcon": ["conservatism", "liberal_conservatism", "progressive_conservatism", "conservative_liberalism"],
        "oldways": ["reactionaryism", "paleoconservatism"],
        "neoold": ["neoreactionaryism", "traditionalism", "reactionary_modernism"]
    },
    "authority": {
        "divine": ["theocracy", "absolute", "religious_authoritarianism"],
        "auth": ["totalitarianism", "autocracy", "partocracy", "stratocracy", "technocracy", "meritocracy", "aristocracy", "neocameralism"],
        "mainstreampower": ["representative_democracy", "direct_democracy", "minarchism", "constitutional"],
        "anarch": ["anarcho_monarchism", "anarchism"]
    },
    "nation": {
        "global": ["Internationalism", "Cosmopolitanism"],
        "modnat": ["civic_nationalism", "cultural_nationalism", "communitarianism"],
        "hitler": ["ethnic_nationalism", "pan_nationalism", "racial_nationalism", "Tribalism"]
    },
    "foreign": {
        "close": ["Isolationism", "Non_Interventionism", "armed_neutrality"],
        "neolib": ["Interventionism", "Globalism"]
    }
};

const incompatibleSubCategories = {
    "welfare": "socialists",
    "free_cap": "socialists",

    "farleft_tax": "mainstream_tax",

    "progressive": "oldways",
    "progressive": "neoold",
    "mainstreamcon": "neoold",

    "divine": "mainstreampower",
    "mainstreampower": "auth",

    "global": "hitler",

    "close": "neolib",
};

const labelMapping = {
    /* Third Position ideologies */
    "syndicalism|reactionary_modernism|totalitarianism|cultural_nationalism|Imperialism": "National Syndicalism",
    "corporatism|traditionalism|religious_authoritarianism|cultural_nationalism": "Clerical Fascism",
    "corporatism|paleoconservatism|autocracy|cultural_nationalism|Isolationism": "Brazilian Integralism",
    "corporatism|reactionary_modernism|totalitarianism|cultural_nationalism|Imperialism": "Fascism",
    "feudalism|traditionalism|aristocracy|racial_nationalism|Imperialism": "Evolianism",
    "corporatism|progressivism|totalitarianism|Imperialism": "Futurism",
    "state_capitalism|reactionary_modernism|totalitarianism|pan_nationalism|Imperialism": "Nazism",
    "state_capitalism|traditionalism|totalitarianism|racial_nationalism": "Neonazism",
    "yellow_socialism|traditionalism|minarchism|ethnic_nationalism|Imperialism": "Neo-Libertarian Falangism",
    "guild_socialism|reactionary_modernism|totalitarianism|ethnic_nationalism|armed_neutrality": "Strasserism",
    "yellow_socialism|traditionalism|totalitarianism|cultural_nationalism|Imperialism": "Falangism",
    "agrarian_socialism|paleoconservatism|totalitarianism|cultural_nationalism|Realpolitik": "Agrarian Fascism",
    "laissez_faire|reactionary_modernism|minarchism|cultural_nationalism|Imperialism": "Libertarian Fascism",
    "corporatism|postmodernism|totalitarianism|egoism|Imperialism": "Ego-Fascism",

    /* Reactionary ideologies */
    "agrarian_socialism|reactionaryism|aristocracy|pan_nationalism|Imperialism": "Volkism",
    "feudalism|conservatism|aristocracy|Tribalism|Imperialism": "Optimateism",
    "social_distributism|traditionalism|religious_authoritarianism|communitarianism|Globalism": "Integralism",
    "distributism|traditionalism|religious_authoritarianism|communitarianism|Globalism": "Integralism",
    "corporatism|traditionalism|religious_authoritarianism|communitarianism|Globalism": "Integralism",
    "laissez_faire|reactionaryism|autocracy|cultural_nationalism|Imperialism": "National Capitalism",

    /* Liberal ideologies */
    "laissez_faire|flat_taxation|civil_liberalism|minarchism|civic_nationalism|Non_Interventionism": "Classical Liberalism",
    "social_capitalism|Progressive_Taxation|social_progressivism|representative_democracy|civic_nationalism|Globalism": "Social Liberalism",
    "laissez_faire|flat_taxation|civil_liberalism|representative_democracy|civic_nationalism|Globalism": "Neoliberalism",
    "laissez_faire|flat_taxation|conservative_liberalism|representative_democracy|cultural_nationalism|Realpolitik": "National Liberalism",
    "welfare_capitalism|flat_taxation|conservative_liberalism|representative_democracy|civic_nationalism|Globalism": "Ordoliberalism",
    "welfare_capitalism|civil_liberalism|direct_democracy|Globalism": "Radicalism",

    /* Left-Anarchist ideologies */
    "syndicalism|collective_distribution|anarchism|Internationalism": "Anarcho-Syndicalism",
    "communization|collective_distribution|social_progressivism|anarchism|Internationalism": "Platformism",
    "free_socialism|collective_distribution|social_progressivism|anarchism|Internationalism": "Platformism",
    "countereconomics|collective_distribution|social_progressivism|anarchism|Cosmopolitanism": "Left-Agorism",
    "free_socialism|postmodernism|anarchism|Cosmopolitanism": "Post-Anarchism",
    "mutualism|anarchism": "Mutualism",
    "market_socialism|anarchism": "Market Anarchism",
    "utopian_socialism|traditionalism|anarchism|Tribalism": "National-Anarchism",
    "agrarian_socialism|lvt|reactionaryism|anarcho_monarchism|ethnic_nationalism|Isolationism": "Lys Noir",
    "communization|collective_distribution|social_progressivism|anarchism|communitarianism": "Anarcho-Communism",
    "communization|collective_distribution|social_progressivism|anarchism|egoism": "Ego-Communism",

    /* Left-Libertarian */
    "free_socialism|collective_distribution|social_progressivism|direct_democracy|Internationalism": "Communalism",
    "state_socialism|collective_distribution|social_progressivism|minarchism|Internationalism|Non_Interventionism": "Minarcho-Socialism",
    "free_socialism|collective_distribution|social_progressivism|anarchism|Internationalism": "Council Communism",
    "free_socialism|collective_distribution|social_progressivism|minarchism|Internationalism": "Libertarian Socialism",

    /* Right-Anarchist ideologies */
    "laissez_faire|Voluntaryism|civil_liberalism|anarchism|Cosmopolitanism|Non_Interventionism": "Panarchism",
    "distributism|anarchism": "Anarcho-Distributism",
    "mutual_distributism|anarchism": "Anarcho-Distributism",
    "free_market_distributism|anarchism": "Anarcho-Distributism",
    "countereconomics|lvt|anarchism": "Geoanarchism",
    "countereconomics|Voluntaryism|postmodernism|anarchism|egoism": "Avaritionism",
    "countereconomics|Voluntaryism|anarchism|Non_Interventionism": "Anarcho-Capitalism",
    "countereconomics|Voluntaryism|anarchism|Isolationism": "Anarcho-Capitalism",
    "countereconomics|Voluntaryism|reactionaryism|anarcho_monarchism|communitarianism|Non_Interventionism": "Hoppeanism",
    "countereconomics|Voluntaryism|reactionaryism|anarcho_monarchism|Tribalism|Non_Interventionism": "Hoppeanism",
    "countereconomics|Voluntaryism|paleoconservatism|anarcho_monarchism|communitarianism|Non_Interventionism": "Hoppeanism",
    "countereconomics|Voluntaryism|paleoconservatism|anarcho_monarchism|Tribalism|Non_Interventionism": "Hoppeanism",
    "countereconomics|Voluntaryism|progressivism|anarchism|Globalism": "Bleeding-Heart Anarcho-Capitalism",

    /* Right-Libertarian ideologies */
    "laissez_faire|lvt|minarchism": "Geolibertarianism",
    "laissez_faire|flat_taxation|minarchism|civic_nationalism|Interventionism": "Neolibertarianism",
    "laissez_faire|flat_taxation|conservatism|minarchism|cultural_nationalism|Non_Interventionism": "Libertarian Conservatism",
    "laissez_faire|flat_taxation|liberal_conservatism|minarchism|cultural_nationalism|Non_Interventionism": "Libertarian Conservatism",
    "laissez_faire|flat_taxation|progressive_conservatism|minarchism|cultural_nationalism|Non_Interventionism": "Libertarian Conservatism",
    "laissez_faire|flat_taxation|conservative_liberalism|minarchism|cultural_nationalism|Non_Interventionism": "Libertarian Conservatism",
    "laissez_faire|flat_taxation|paleoconservatism|minarchism|ethnic_nationalism|Isolationism": "National Libertarianism",
    "welfare_capitalism|lvt|social_progressivism|minarchism|Globalism": "Social Libertarianism",
    "welfare_capitalism|lvt|progressivism|minarchism|Globalism": "Social Libertarianism",
    "welfare_capitalism|flat_taxation|conservative_liberalism|direct_democracy|civic_nationalism|armed_neutrality": "Helvetic Model",
    "laissez_faire|Voluntaryism|paleoconservatism|minarchism|Non_Interventionism": "Paleolibertarianism",
    "laissez_faire|Voluntaryism|progressivism|minarchism|egoism|Globalism": "Bleeding-Heart Libertarianism",
    "laissez_faire|neoreactionaryism|neocameralism": "Dark Enlightenment",
    "countereconomics|neoreactionaryism|neocameralism": "Dark Enlightenment",

    /* Socialist ideologies */
    "utopian_socialism|representative_democracy|Internationalism|Non_Interventionism": "Christian Socialism",
    "state_capitalism|Progressive_Taxation|partocracy|civic_nationalism|Realpolitik": "Dengism",
    "state_socialism|collective_distribution|traditionalism|totalitarianism|cultural_nationalism|Imperialism": "National Bolshevism",
    "state_socialism|collective_distribution|reactionary_modernism|totalitarianism|cultural_nationalism|Imperialism": "National Bolshevism",
    "market_socialism|direct_democracy|progressivism|Internationalism|Globalism": "Democratic Socialism",
    "state_socialism|Confiscatory_Taxation|conservatism|partocracy|civic_nationalism|Realpolitik": "Conservative Socialism",
    "state_socialism|Confiscatory_Taxation|paleoconservatism|civic_nationalism|Isolationism": "Paleosocialism",

    /* Centre-left */
    "neo_corporatism|Progressive_Taxation|civil_liberalism|representative_democracy|civic_nationalism|Globalism": "Nordic Model",
    "social_capitalism|Progressive_Taxation|social_progressivism|representative_democracy|Internationalism|Globalism": "Social Democracy",
    "social_capitalism|Progressive_Taxation|progressivism|representative_democracy|Internationalism|Globalism": "Social Democracy",
    "social_capitalism|Progressive_Taxation|conservatism|representative_democracy|civic_nationalism|Realpolitik": "Conservative Social Democracy",

    /* Conservative ideologies */
    "welfare_capitalism|Progressive_Taxation|conservatism|representative_democracy|cultural_nationalism|Realpolitik": "National Conservatism",
    "social_capitalism|Progressive_Taxation|liberal_conservatism|representative_democracy|civic_nationalism|Internationalism": "Christian Democracy",
    "social_capitalism|Progressive_Taxation|conservatism|representative_democracy|cultural_nationalism": "Paternalistic Conservatism",
    "social_capitalism|paleoconservatism|representative_democracy|cultural_nationalism|Isolationism": "Buchanan Paleoconservatism",
    "dirigisme|paleoconservatism|representative_democracy|cultural_nationalism|Isolationism": "Hard Right Paleoconservatism",
    "cameralism|paleoconservatism|representative_democracy|cultural_nationalism|Isolationism": "Hard Right Paleoconservatism",
    "distributism|paleoconservatism|representative_democracy|cultural_nationalism|Isolationism": "Old Right Paleoconservatism",
    "free_market_distributism|paleoconservatism|representative_democracy|cultural_nationalism|Isolationism": "Old Right Paleoconservatism",
    "welfare_capitalism|liberal_conservatism|representative_democracy|civic_nationalism|Interventionism": "Neoconservatism",
    "welfare_capitalism|progressive_conservatism|representative_democracy|civic_nationalism|Interventionism": "Neoconservatism",
    "welfare_capitalism|conservative_liberalism|representative_democracy|civic_nationalism|Interventionism": "Neoconservatism",
    "welfare_capitalism|paleoconservatism|representative_democracy|civic_nationalism|Interventionism": "Mesoconservatism",
    "welfare_capitalism|liberal_conservatism|representative_democracy|civic_nationalism|Realpolitik": "Rockefeller Republicanism",
    "social_capitalism|liberal_conservatism|representative_democracy|civic_nationalism|Realpolitik": "Rockefeller Republicanism",
    "welfare_capitalism|conservative_liberalism|representative_democracy|civic_nationalism|Globalism": "Compassionate Conservatism",

    /* Marxist ideologies */
    "communization|collective_distribution|social_progressivism|Internationalism": "Italian Left Communism",
    "state_socialism|collective_distribution|conservatism|partocracy|cultural_nationalism|Isolationism": "Juche",
    "state_socialism|collective_distribution|conservatism|partocracy|cultural_nationalism|Isolationism": "Juche",
    "agrarian_socialism|collective_distribution|social_progressivism|partocracy|cultural_nationalism|Realpolitik": "Mao Zedong Thought",
    "agrarian_socialism|collective_distribution|social_progressivism|partocracy|pan_nationalism|Interventionism": "Maoism–Third Worldism",
    "state_socialism|collective_distribution|social_progressivism|partocracy|Internationalism|Interventionism": "Marxism–Leninism–Maoism",
    "state_socialism|collective_distribution|social_progressivism|representative_democracy|Cosmopolitanism|Interventionism": "Trotskyism",
    "communization|collective_distribution|postmodernism|anarchism|egoism": "Post-left",
    "state_socialism|collective_distribution|social_progressivism|partocracy|Internationalism|Interventionism": "Marxism-Leninism",
    "state_socialism|collective_distribution|conservatism|totalitarianism|cultural_nationalism|Realpolitik": "Stalinism",
    "market_socialism|collective_distribution|social_progressivism|direct_democracy|civic_nationalism|Non_Interventionism": "Titoism"
};

const ideologyGroups = {
    "Third Position": [
        "National Syndicalism", 
        "Clerical Fascism", 
        "Brazilian Integralism", 
        "Fascism", 
        "Evolianism", 
        "Futurism", 
        "Nazism", 
        "Neonazism", 
        "Strasserism",
        "Agrarian Fascism",
        "Ego-Fascism",
        "Libertarian Fascism"
    ],
    "Reactionary": [
        "Volkism",
        "Optimateism", 
        "Integralism",
        "National Capitalism",
    ],
    "Liberal": [
        "Classical Liberalism", 
        "Social Liberalism", 
        "Neoliberalism", 
        "National Liberalism", 
        "Ordoliberalism",
        "Radicalism"
    ],
    "Left-Anarchist": [
        "Anarcho-Syndicalism", 
        "Platformism", 
        "Left-Agorism", 
        "Post-Anarchism", 
        "Mutualism", 
        "Market Anarchism", 
        "National-Anarchism",
        "Lys Noir", 
        "Anarcho-Communism", 
        "Ego-Communism"
    ],
    "Left-Libertarian": [
        "Communalism", 
        "Minarcho-Socialism", 
        "Council Communism", 
        "Libertarian Socialism"
    ],
    "Right-Anarchist": [
        "Panarchism", 
        "Anarcho-Distributism", 
        "Geoanarchism", 
        "Avaritionism", 
        "Anarcho-Capitalism", 
        "Hoppeanism", 
        "Bleeding-Heart Anarcho-Capitalism"
    ],
    "Right-Libertarian": [
        "Geolibertarianism", 
        "Neolibertarianism", 
        "Libertarian Conservatism", 
        "National Libertarianism", 
        "Social Libertarianism", 
        "Helvetic Model", 
        "Paleolibertarianism", 
        "Bleeding-Heart Libertarianism", 
        "Dark Enlightenment"
    ],
    "Socialist": [
        "Christian Socialism", 
        "Dengism", 
        "National Bolshevism", 
        "Democratic Socialism", 
        "Conservative Socialism", 
        "Paleosocialism"
    ],
    "Centre-Left": [
        "Nordic Model", 
        "Social Democracy", 
        "Conservative Social Democracy"
    ],
    "Conservative": [
        "National Conservatism", 
        "Christian Democracy", 
        "Paternalistic Conservatism", 
        "Buchanan Paleoconservatism",
        "Hard Right Paleoconservatism",
        "Old Right Paleoconservatism", 
        "Neoconservatism", 
        "Mesoconservatism",
        "Rockefeller Republicanism",
        "Compassionate Conservatism"
    ],
    "Marxist": [
        "Italian Left Communism", 
        "Juche", 
        "Mao Zedong Thought", 
        "Maoism–Third Worldism", 
        "Marxism–Leninism–Maoism", 
        "Trotskyism", 
        "Post-left", 
        "Marxism-Leninism", 
        "Stalinism", 
        "Titoism"
    ]
};

const categories = ["economics", "resource_management", "culture", "authority", "nation", "foreign"];

const labelColors = {
    "No exact match": "#5C5C5C",

    /* Fascist & Third Position */
    "National Syndicalism": "#372f53ff",
    "Clerical Fascism": "#58542cff",
    "Brazilian Integralism": "#253f50ff",
    "Fascism": "#503f29ff",
    "Evolianism": "#3c2e4bff",
    "Futurism": "#2b314eff",
    "Nazism": "#2B2B2B",
    "Neonazism": "#2B2B2B",
    "Neo-Libertarian Falangism": "#726e3aff",
    "Strasserism": "#3f1e1eff",
    "Falangism": "#4a1c1cff",
    "Agrarian Fascism": "#1f421cff",
    "Ego-Fascism": "#1e444bff",
    "Libertarian Fascism": "#7e722eff",

    //Reactionary
    "Volkism": "#3b1515ff",
    "Optimateism": "#21273dff",
    "Integralism": "#63a9c5ff",
    "National Capitalism": "#77632aff",

    /* Liberal ideologies */
    "Classical Liberalism": "#71beebff",
    "Social Liberalism": "#4B92DB",
    "Neoliberalism": "#54ABC7",
    "National Liberalism": "#3D5A80",
    "Ordoliberalism": "#518699",
    "Radicalism": "#a15c8dff",

    /* Left-Anarchist ideologies */
    "Anarcho-Syndicalism": "#941313",
    "Platformism": "#7D0000",
    "Left-Agorism": "#632f2fff",
    "Post-Anarchism": "#520000ff",
    "Mutualism": "#db4804ff",
    "Market Anarchism": "#C74A0A",
    "National-Anarchism": "#533027ff",
    "Lys Noir": "#242424ff",
    "Anarcho-Communism": "#a11111ff",
    "Ego-Communism": "#005a5aff",

    // Left Libertarian
    "Communalism": "#bb5030ff",
    "Minarcho-Socialism": "#FF4D4D",
    "Council Communism": "#740909ff",
    "Libertarian Socialism": "#ac3232ff",

    /* Right-Anarchist ideologies */
    "Panarchism": "#7f73bdff",
    "Anarcho-Distributism": "#d49621ff",
    "Geoanarchism": "#8cb148ff",
    "Avaritionism": "#aeb645ff",
    "Anarcho-Capitalism": "#D4CB20",
    "Hoppeanism": "#e0bf00ff",
    "Bleeding-Heart Anarcho-Capitalism": "#faca47ff",

    /* Right Libertarian ideologies */
    "Geolibertarianism": "#709e3cff",
    "Neolibertarianism": "#B8860B",
    "Libertarian Conservatism": "#c5b30fff",
    "National Libertarianism": "#6b5d2fff",
    "Social Libertarianism": "#eebb2fff",
    "Helvetic Model": "#77ccccff",
    "Paleolibertarianism": "#72406aff",
    "Bleeding-Heart Libertarianism": "#887f00ff",
    "Dark Enlightenment": "#6d5000ff",

    /* Socialist ideologies */
    "Christian Socialism": "#8B0000",
    "Dengism": "#DE2910",
    "National Bolshevism": "#690000ff",
    "Democratic Socialism": "#E34234",
    "Conservative Socialism": "#7e1e1eff",
    "Paleosocialism": "#77223eff",

    /* centre left */
    "Nordic Model": "#fa6161ff",
    "Social Democracy": "#FF3333",
    "Conservative Social Democracy": "#c92b2bff",

    /* Conservative ideologies */
    "National Conservatism": "#002366",
    "Christian Democracy": "#3C5A99",
    "Paternalistic Conservatism": "#0047AB",
    "Buchanan Paleoconservatism": "#442d52ff",
    "Hard Right Paleoconservatism": "#231431ff",
    "Old Right Paleoconservatism": "#592572ff",
    "Neoconservatism": "#25257aff",
    "Mesoconservatism": "#3c1e5fff",
    "Rockefeller Republicanism": "#692828ff",
    "Compassionate Conservatism": "#314a8fff",

    /* Marxist ideologies */
    "Italian Left Communism": "#B22222",
    "Juche": "#C00000",
    "Mao Zedong Thought": "#EE1C25",
    "Maoism–Third Worldism": "#D40000",
    "Marxism–Leninism–Maoism": "#ED1C24",
    "Trotskyism": "#CC0000",
    "Post-left": "#700000",
    "Marxism-Leninism": "#CD0000",
    "Stalinism": "#A52A2A",
    "Titoism": "#bb4747ff"
};

const categoryTitles = {
    "economics": "Economic systems",
    "resource_management": "Resource management",
    "culture": "Cultural values",
    "authority": "Authority",
    "nation": "National identity",
    "foreign": "Foreign policy"
};

const descriptions = {
    // ideologies
    /* Fascist & Third Position */
    "National Syndicalism": "A synthesis of revolutionary syndicalism and integral nationalism. It advocates for a state organized into worker-run industrial corporations, replacing liberal democracy and class struggle with national unity and productive labor.",
    "Clerical Fascism": "An ideology combining fascist political and economic principles with strong religious traditionalism. It seeks to integrate the church into the state apparatus to enforce moral order and national identity.",
    "Brazilian Integralism": "A 1930s movement inspired by Italian Fascism but emphasizing Christian virtues and multiracialism. It focused on social hierarchy, anti-communism, and the Integral State under the motto \"Union, Fatherland, and Family.\"",
    "Fascism": "The original fascist movement led by Mussolini. It champions extreme statism (Everything in the State), corporatism, and aggressive expansionism, seeking to restore the glory of the Roman Empire through a totalitarian regime.",
    "Evolianism": "Based on Julius Evola’s Traditionalism. It rejects the modern world, advocating for a return to a spiritual, aristocratic hierarchy and a \"Warrior Ethos\" to overcome the perceived decay of materialistic society.",
    "Futurism": "An artistic and social movement that glorified modernity, speed, technology, and violence. It heavily influenced early Italian Fascism by demanding the destruction of old institutions to make way for a dynamic, industrialized future.",
    "Nazism": "Also known as National Socialism, this ideology centers on extreme biological racism and antisemitism. It advocates for the supremacy of the Aryan race, the leadership principle (Führerprinzip), and the acquisition of Lebensraum (living space).",
    "Neonazism": "Post-WWII movements seeking to revive Nazi ideology. They typically focus on white supremacy, Holocaust denial, and the preservation of Western culture against perceived threats from immigration, globalization, and minority groups.",
    "Neo-Libertarian Falangism": "An Easter egg. An ideology created by an Albanian on TikTok, combining yellow socialism, anarcho-capitalism, the ideas of Primo de Rivera, and imperialism.",
    "Strasserism": "A radical, 'left-wing' variant of National Socialism. It emphasizes anti-capitalism and worker-led economic structures alongside extreme ethnic nationalism, rejecting the Hitlerite focus on personal dictatorship in favor of a mass-völkisch movement.",
    "Falangism": "A form of National Syndicalism originating in Spain, emphasizing National Catholicism and the unity of classes under a corporate state. It seeks to transcend both capitalism and socialism through a spiritual and national revolution.",
    "Agrarian Fascism": "An ideology that applies fascist principles to rural society, idealizing the peasantry and small-scale farming as the backbone of the nation. It opposes urban industrialism and seeks a return to an organic, land-based social hierarchy.",
    "Libertarian Fascism": "Also called Minarcho-Fascism, it is a post-libertarian ideology combining extreme economic liberty with an ultranationalist state. It views individual freedom and national rebirth as interdependent, supporting a minimal but efficient state that governs according to national interest and Social Darwinist principles.",
    "Ego-Fascism": "A hyperindividualist and ultranationalist ideology inspired by the principle of 'Everything within the state.' It replaces the traditional concept of the state with the 'ego' or a 'union of egoists,' demanding total dominance and the subjugation of others to serve the ego’s self-interest.",
    
    // reactionary
    "Volkism": "Volkism is a German ethnic-nationalist movement emphasizing \"blood and soil.\" It idealizes a mystical, organic union of a racially pure people (the Volk) rooted in their ancestral land and traditional folklore.",
    "Optimateism": "Authoritarian-right governance by a meritocratic elite. It enforces rigid class hierarchies and aristocratic privileges, prioritizing institutional stability and ancestral traditions over populist or radical democratic reforms.",
    "Integralism": "Integralism is an authoritarian, culturally reactionary, and Distributist ideology. It rejects secularism and Enlightenment values, seeking a society where the state submits to spiritual authority and law is grounded in inherited traditions.",
    "National Capitalism": "An authoritarian ideology that blends capitalism with nationalism. It argues that market competition should be used to serve the national interest, frequently combining Nazi social principles with economic liberalism.",

    /* Liberal ideologies */
    "Classical Liberalism": "The foundational ideology of individual liberty, private property, and free markets. It advocates for a limited \"night-watchman state,\" the rule of law, and civil liberties, viewing government intervention as a threat to freedom.",
    "Social Liberalism": "A development that balances individual liberty with social justice. It supports state intervention in the economy (like healthcare and education) to ensure equal opportunity and a \"level playing field\" for all citizens.",
    "Neoliberalism": "A mid-20th-century resurgence of market-oriented policies. It emphasizes deregulation, privatization, free trade, and reducing government spending to enhance the role of the private sector in the economy and promote global competition.",
    "National Liberalism": "A variant that combines liberal economic and civil policies with a strong emphasis on national sovereignty and identity. It often supports restricted immigration and prioritizes the interests of the nation-state over internationalism.",
    "Ordoliberalism": "The \"German model\" of liberalism. It argues that the state must ensure the free market produces results close to its theoretical potential by creating a strict legal framework and preventing monopolies or cartels.",
    "Radicalism": "An early liberal movement advocating for fundamental systemic reform. It champions universal suffrage, secularism, and the removal of traditional privileges, seeking to reconstruct society through rational principles and direct democratic participation.",
    /* Left-Anarchist ideologies */
    "Anarcho-Syndicalism": "A revolutionary strategy where labor unions are the primary vehicle for social change. It aims to abolish the state and wage labor through direct action, replacing them with a system of worker-managed federations.",
    "Platformism": "An organizational theory emphasizing the need for anarchist groups to maintain tactical and theoretical unity. It advocates for collective responsibility and a \"General Union of Anarchists\" to provide a clear, coherent revolutionary program.",
    "Left-Agorism": "A market-based anarchism that uses \"counter-economics\" to undermine the state. It views the freed market as a tool for radical liberation, prioritizing worker cooperatives and decentralized entrepreneurship over corporate capitalism.",
    "National-Anarchism": "heterodox ideology that combines anarchist opposition to the state with racial idealism and ethnic separatism. It advocates for self-governing, autonomous intentional communities organized along distinct ethnic or cultural lines.",
    "Post-Anarchism": "A theoretical synthesis of classical anarchism and post-structuralist thought. It questions essentialist views of human nature and power, focusing on resisting modern forms of domination that are not strictly tied to the state.",
    "Mutualism": "Founded by Pierre-Joseph Proudhon, it advocates for a society where workers own their means of production. It relies on a \"bank of the people\" for interest-free credit and trade based on labor-value equivalence.",
    "Market Anarchism": "An anti-capitalist philosophy that supports freed markets as a means to abolish authority. It champions worker cooperatives and mutual aid, arguing that without state intervention, corporate monopolies and wage labor would naturally collapse.",
    "Lys Noir": "Lys Noir (Black Lilyism) is an anarcho-royalist, anti-modern, and agrarian ideology. It seeks to abolish the state to restore a decentralized monarchy, blending traditionalism with degrowth, nationalized banking, and universal basic income.",
    "Anarcho-Communism": "A stateless philosophy advocating for the abolition of hierarchy, private property, and wages. It envisions self-governing communes where resources are shared freely based on need, ensuring both communal autonomy and individual liberty.",
    "Ego-Communism": "A synthesis of Stirnerite Egoism and Communism. It argues that communal ownership is the best tool for the individual to satisfy their own desires, liberating the 'unique' from the constraints of both capital and the state.",

    // left libertarian
    "Communalism": "Proposed by Murray Bookchin, it seeks to replace the state with a network of directly democratic, local popular assemblies. It integrates ecological concerns with a post-scarcity vision of self-governing, confederated urban and rural communities.",
    "Minarcho-Socialism": "A rare synthesis advocating for a minimal state that exists solely to protect a decentralized, socialist economy. It combines anti-authoritarianism with the collective ownership of the means of production through local communes.",
    "Council Communism": "A far-left ideology rejecting the vanguard party model. It advocates for worker-led revolution organized through democratic workers' councils, emphasizing spontaneous direct action and the total control of production by the proletariat themselves.",
    "Libertarian Socialism": "A broad anti-authoritarian movement seeking a socialist economy without a centralized state. It emphasizes decentralized planning and worker-owned cooperatives, aiming to maximize economic equality and individual freedom through grassroots voluntary associations.",

    /* Right-Anarchist ideologies */
    "Panarchism": "A political philosophy advocating for the coexistence of all political systems. It proposes that individuals should have the right to freely join or leave any jurisdiction without being forced to change their physical location.",
    "Anarcho-Distributism": "A synthesis of anarchist principles and Distributist economic theory. It seeks to abolish the state while ensuring the widespread private ownership of the means of production, primarily through small-scale cooperatives and family businesses.",
    "Geoanarchism": "Based on Georgist principles, it argues that while individuals should own the fruits of their labor, the land and natural resources belong to everyone. It advocates for a \"Single Tax\" on land value.",
    "Avaritionism": "An extreme, egoist form of Anarcho-Capitalism. It rejects all moral constraints and social contracts, championing a \"might makes right\" approach where individuals use any means necessary to acquire wealth, power, and dominance.",
    "Anarcho-Capitalism": "A philosophy advocating for the elimination of the state in favor of individual sovereignty, private property, and free markets. It suggests that all services, including law and protection, should be provided by private competitors.",
    "Hoppeanism": "A variant of Anarcho-Capitalism developed by Hans-Hermann Hoppe. It combines Austrian economics with cultural conservatism, famously advocating for \"physical removal\" of those whose lifestyles are deemed incompatible with a stable, private-property-based social order.",
    "Bleeding-Heart Anarcho-Capitalism": "A perspective that argues a stateless, free-market society is the most effective way to help the marginalized and the poor. it emphasizes that market competition empowers the disadvantaged by dismantling state-protected monopolies.",

    /* Right Libertarian ideologies */
    "Geolibertarianism": "A synthesis of libertarianism and Georgism. It asserts that individuals own their labor, but land and natural resources are common property, often advocating for a land value tax to fund limited government functions.",
    "Neolibertarianism": "Combines libertarian domestic policy with a neoconservative, interventionist foreign policy. It supports free markets at home while advocating for the use of military power to spread democratic values and liberty across the globe.",
    "Libertarian Conservatism": "A fusionist ideology combining conservative social values with libertarian economic policies. It emphasizes small government and private property, viewing organic social institutions like the family as essential for maintaining a free society.",
    "National Libertarianism": "Integrates libertarian principles with a strong focus on national sovereignty and identity. It generally favors domestic free markets and individual rights while supporting restricted immigration and protectionist measures to preserve the nation-state.",
    "Social Libertarianism": "Pairs libertarian civil and economic freedoms with a robust social safety net. It often advocates for a Universal Basic Income, arguing that true liberty requires the elimination of economic coercion and systemic poverty.",
    "Helvetic Model": "Modeled after the Swiss system, it emphasizes radical decentralization, direct democracy, and armed neutrality. It prioritizes local sovereignty and frequent citizen referendums to ensure the central state remains strictly minimal and accountable.",
    "Paleolibertarianism": "A strategy seeking to unite libertarianism with cultural traditionalism. It opposes state intervention while championing old-school Western values and decentralized political authority to resist the perceived decay of modern, secular liberal society.",
    "Bleeding-Heart Libertarianism": "A perspective that defends free markets and property rights based on their benefits to the poor. It argues that libertarian institutions are the most effective way to achieve social justice and uplift marginalized groups.",
    "Dark Enlightenment": "Also known as Neoreaction (NRx), it rejects egalitarianism and democracy. It advocates for a return to traditional monarchical or \"cameralist\" structures, viewing the modern state as an inefficient and failing \"Cathedral.\"",
    
    /* Socialist ideologies */
    "Christian Socialism": "An ideology that views the teachings of Jesus as fundamentally opposed to capitalism. It advocates for social justice, wealth redistribution, and the common ownership of resources based on religious ethics and solidarity.",
    "Dengism": "The official ideology of the Communist Party of China since Deng Xiaoping. It allows private enterprise and foreign investment to develop productive forces while maintaining strict, one-party political control.",
    "National Bolshevism": "A syncretic ideology combining Bolshevik economic radicalism with extreme ethnic nationalism. It seeks a National Revolution to overthrow the liberal order, often advocating for a Eurasian or nationalist-socialist superstate.",
    "Democratic Socialism": "A political philosophy supporting a socialist economy through democratic means. It rejects the revolutionary \"vanguard\" model, instead seeking to achieve social ownership and workplace democracy via the existing parliamentary or electoral process.",
    "Conservative Socialism": "A political philosophy that fuses state-controlled economics with traditional social values. It advocates for public ownership of industry and wealth redistribution to ensure national stability and the preservation of established culture.",
    "Paleosocialism": "A syncretic ideology combining state-led socialist economics with paleoconservative social values. It advocates for public ownership to support the working class while strictly preserving traditional morality, national sovereignty, and regional cultural identities.",

    /* centre left */
    "Nordic Model": "A social-democratic framework combining free-market capitalism with a comprehensive welfare state. It emphasizes high taxes, collective bargaining, and extensive public services to ensure social mobility and economic security.",
    "Social Democracy": "A political ideology that promotes a capitalist economy regulated by the state. It uses high taxes to fund a broad welfare system, ensuring social equality, public services, and worker protections.",
    "Conservative Social Democracy": "A political framework that supports a regulated market economy and a comprehensive welfare state while upholding traditional cultural values. It promotes social safety nets and worker protections to ensure national stability and the preservation of established social institutions.",

    /* Conservative ideologies */
    "National Conservatism": "A movement emphasizing national sovereignty, cultural identity, and traditional values. It prioritizes the interests of the nation-state over international cooperation, often advocating for restricted immigration and protectionist economic measures.",
    "Christian Democracy": "Applying Christian social ethics to politics, it balances social conservatism with a social market economy. It emphasizes \"subsidiarity\"—solving problems locally—while maintaining a robust welfare state and democratic institutions.",
    "Paternalistic Conservatism": "Also known as \"One-Nation Conservatism,\" it advocates for state intervention to maintain social stability and assist the poor. It seeks to preserve traditional hierarchies by ensuring the state fulfills its social obligations.",
    "Buchanan Paleoconservatism": "A variant of paleoconservatism associated with Pat Buchanan. It emphasizes economic protectionism, a non-interventionist foreign policy ('America First'), and a strict defense of traditional social values and national sovereignty.",
    "Hard Right Paleoconservatism": "An uncompromising form of paleoconservatism that often overlaps with reactionary sentiment. It favors rigid social hierarchies, technocratic or aristocratic governance, and a total rejection of the liberal international order.",
    "Old Right Paleoconservatism": "Inspired by the pre-WWII American 'Old Right,' this ideology combines anti-interventionism with a distributist or small-scale market approach. It views both big government and big business as threats to local community and liberty.",
    "Neoconservatism": "A philosophy advocating for the active promotion of democracy and liberal values worldwide, often through an interventionist foreign policy. It supports free markets and believes the state must maintain a stable international order.",
    "Mesoconservatism": "A moderate form of conservatism occupying the middle ground between paleoconservatism and neoconservatism. It supports a stable international order and interventionist security while maintaining a strong commitment to domestic traditional values and national identity.",
    "Rockefeller Republicanism": "A moderate to liberal faction of the GOP prevalent in the mid-20th century. It supports a pragmatic blend of fiscal responsibility, social welfare programs, and active internationalism, favoring government-business partnerships over pure laissez-faire economics.",
    "Compassionate Conservatism": "A political philosophy that uses private and faith-based initiatives to address social problems. It maintains traditional conservative values like fiscal restraint and personal responsibility while advocating for a proactive government role in empowering the disadvantaged.",

    /* Marxist ideologies */
    "Italian Left Communism": "A variant that rejects parliamentarianism and trade unions, emphasizing a pure Marxist party. It critiques the USSR as state capitalist and advocates for a global, uncompromising proletarian revolution.",
    "Juche": "The state ideology of North Korea, emphasizing national self-reliance (Chaju), a strong military (Songun), and absolute loyalty to the supreme leader as the center of the revolutionary body.",
    "Mao Zedong Thought": "A derivation of Marxism-Leninism adapted for agrarian societies. it focuses on the revolutionary potential of the peasantry, the \"Mass Line,\" and continuous struggle to prevent bureaucratic decay.",
    "Maoism–Third Worldism": "A theory arguing that the \"labor aristocracy\" in the West benefits from imperialism. It claims that the primary revolutionary force is now the oppressed peoples of the Global South.",
    "Marxism–Leninism–Maoism": "A contemporary synthesis asserting that Maoism is a third, higher stage of Marxism. It advocates for \"Protracted People's War\" and \"Cultural Revolution\" as universal tools for achieving communism.",
    "Trotskyism": "Based on Leon Trotsky’s theories, it advocates for \"Permanent Revolution\" and internationalism. It opposes the bureaucracy of \"socialism in one country\" and supports workers' democracy against totalitarianism.",
    "Post-left": "An anarchist critique that rejects the traditional \"Left\" as being too focused on morality, work, and organizational hierarchy. It emphasizes individual desire, play, and the immediate subversion of social control.",
    "Marxism-Leninism": "The official ideology of the USSR and Eastern Bloc. It advocates for a vanguard party to lead the proletariat, democratic centralism, and a state-planned economy to build a socialist society.",
    "Stalinism": "The practice of Marxism-Leninism under Joseph Stalin. It is characterized by \"Socialism in One Country,\" rapid forced industrialization, agricultural collectivization, and a highly centralized, often repressive, state apparatus.",
    "Titoism": "Developed in Yugoslavia, it emphasizes \"Market Socialism\" and worker self-management. It sought a middle path between the West and the USSR through a policy of geopolitical non-alignment.",
    
    // economics
    "welfare_capitalism": "A capitalist economy that includes extensive social welfare policies. It features a market-based system supported by a safety net, including public education, healthcare, and pensions.",
    "laissez_faire": "An \"arms-off\" economic environment where transactions between private parties are free from government intervention, including regulations, privileges, tariffs, and subsidies.",
    "countereconomics": "A revolutionary market anarchism that advocates for the creation of a society based on voluntary exchanges, primarily through black and grey markets.",
    "state_capitalism": "A system where the state undertakes commercial economic activity and the means of production are organized and managed as state-owned enterprises.",
    "dirigisme": "An economic system where the state exerts strong directive influence over investment and the market, rather than merely regulating it, common in mid-20th-century France.",
    "keynesianism": "An economic theory advocating for increased government expenditures and lower taxes to stimulate demand and pull the global economy out of depression.",
    "third_way": "A centrist position that attempts to reconcile right-wing and left-wing politics by advocating a synthesis of right-wing economics and left-wing social policies.",
    "neo_corporatism": "A cooperative relationship between the government and major interest groups (like labor unions and business associations) to manage the national economy through negotiation.",
    "corporatism": "The organization of society into corporate groups—such as agricultural, labor, or scientific—on the basis of their common interests or social functions.",
    "social_corporatism": "A framework where the state organizes the economy into industrial sectors to facilitate cooperation between labor and capital, specifically empowering workers' syndicates over the bourgeoisie to ensure social equity.",
    "yellow_socialism": "A model by Pierre Biétry as an alternative to \"Red\" Marxism. It organizes workers into unions that negotiate profit-sharing with business groups under a strong authoritarian state, emphasizing national cooperation over class war.",
    "mutualism": "An anarchist school of thought advocating a society where each person might possess a means of production, with trade based on labor-value and mutual credit.",
    "guild_socialism": "A movement advocating for worker control of industry through a system of national guilds in a reciprocal relationship with a state.",
    "syndicalism": "A revolutionary strategy where workers' unions (syndicates) seize control of the economy through strikes and direct action to manage society.",
    "market_socialism": "An economic system where the means of production are publicly or cooperatively owned, but production and consumption are guided by market forces.",
    "mutual_distributism": "A hybrid focusing on the wide ownership of property (distributism) coupled with mutual aid and cooperative credit systems.",
    "social_distributism": "A variant of distributism that emphasizes social justice and the common good, often utilizing state mechanisms to ensure property is widely distributed.",
    "distributism": "An economic ideology holding that the world's productive assets should be widely owned rather than concentrated in the hands of the state or a few individuals.",
    "social_capitalism": "A market economy balanced by robust social welfare programs and regulations. It seeks to preserve private enterprise while ensuring a high standard of living and reduced inequality through state intervention.",
    "state_socialism": "An economic system where the state owns the means of production and manages the economy centrally. It aims to eliminate private profit in favor of state-led distribution and industrial development.",
    "free_socialism": "A stateless, anti-authoritarian philosophy advocating for worker-owned cooperatives and decentralized planning. It rejects both private property and state control, favoring voluntary associations and direct democracy.",
    "communization": "A theory suggesting the immediate abolition of the state, money, and social classes during a revolution. Rather than a transition period, it views the act of revolution as the direct creation of communism.",
    "utopian_socialism": "An early socialist school based on moral or visionary grounds rather than class struggle. It envisions ideal, self-sustaining communities established through peaceful persuasion and voluntary cooperation rather than revolution.",
    "agrarian_socialism": "A movement focusing on the redistribution of land to the peasantry and collective farming. It emphasizes rural communal living and views the farmer, rather than the urban worker, as the revolutionary lead.",
    "feudalism": "A medieval social hierarchy based on land ownership and personal loyalty. Nobility granted land to vassals in exchange for military service, while peasants (serfs) lived on and worked the land for protection.",
    "cameralism": "A form of state management where the economy is organized like a large household, focusing on maximizing the national treasury and resources through expert administrative oversight and centralized coordination.",
    "free_market_distributism": "A variant of distributism that heavily relies on laissez-faire mechanisms. It argues that in a truly freed market without state privileges, corporate monopolies would naturally collapse, leading to a widespread distribution of small-scale property.",
    // resource_management
    "Voluntaryism": "A system where the state is prohibited from collecting taxes by force. It relies entirely on voluntary taxation, funding public services through consensual donations, lotteries, or service fees rather than mandatory levies.",
    "lvt": "Land Value Tax is a levy on the unimproved value of land, excluding buildings or improvements. It discourages land speculation, promotes efficient usage, and captures socially created value for public benefit.",
    "flat_taxation": "A tax system with a constant marginal rate, usually applied to personal or corporate income, where everyone pays the same percentage regardless of earnings.",
    "Progressive_Taxation": "A tax system where the tax rate increases as the taxable amount increases, shifting the burden toward those with higher incomes.",
    "Confiscatory_Taxation": "An extremely high tax rate—often near 100%—above a certain income threshold, intended to redistribute wealth or limit extreme inequality.",
    "collective_distribution": "An economic principle where goods and services are allocated based on the needs or contributions of the community. It prioritizes shared access over individual ownership to ensure equitable resource management.",
    // culture
    "postmodernism": "A skeptical worldview that questions \"grand narratives,\" objective truth, and traditional authority, emphasizing the role of language, power, and individual perspective.",
    "civil_liberalism": "A political philosophy emphasizing the protection of individual rights and civil liberties against state interference or social coercion.",
    "progressivism": "A political philosophy based on the Idea of Progress, asserting that advancements in science, technology, and social organization can improve the human condition.",
    "social_progressivism": "An emphasis on using government or social action to address social issues such as poverty, inequality, and discrimination to advance society.",
    "conservative_liberalism": "A variant of liberalism that combines liberal values like freedom and individual rights with more conservative social and cultural stances.",
    "liberal_conservatism": "A conservative ideology that incorporates liberal views on the economy and individual liberty while maintaining a commitment to traditional institutions.",
    "progressive_conservatism": "A movement that seeks to combine conservative social principles with progressive policies designed to address social problems and improve living conditions.",
    "conservatism": "political and social philosophy promoting traditional social institutions and practices, often skeptical of rapid social or political change.",
    "reactionaryism": "A political viewpoint that favors a return to a previous political state of society, often opposing modern social and political developments.",
    "paleoconservatism": "A traditionalist form of conservatism emphasizing national identity, regionalism, traditional morality, and an anti-interventionist foreign policy.",
    "neoreactionaryism": "An anti-democratic movement that rejects the Enlightenment, advocating for a return to older forms of government like absolute monarchy or corporate governance, while maintaining technological advances.",
    "traditionalism": "A philosophical school asserting a single, metaphysical Truth underlying all major religions. It rejects modernism and secularism, advocating for a return to sacred hierarchies, ancient rituals, and the primordial wisdom of the past.",
    "reactionary_modernism": "A synthesis of historical social values and advanced technology, embracing industrial power and modern science to strengthen and protect the traditional or romantic heritage of a people.",
    // authority
    "theocracy": "A form of government in which a deity is recognized as the supreme ruling authority, giving guidance to human intermediaries who manage day-to-day affairs.",
    "absolute": "A form of monarchy in which the monarch holds supreme autocratic authority, not restricted by written laws, a constitution, or custom.",
    "totalitarianism": "A political system where the state recognizes no limits to its authority and strives to regulate every aspect of public and private life.",
    "religious_authoritarianism": "A system where a dictator seeks political legitimacy by positioning themselves as the primary defender of a specific religion. It uses religious identity to unify the state and suppress dissent.",
    "autocracy": "A system of government by one person with absolute power, where the ruler's decisions are subject to neither external legal restraints nor regularized mechanisms of popular control.",
    "anarchism": "A political philosophy that advocates for self-governed societies based on voluntary institutions and the abolition of the state and all non-voluntary hierarchies.",
    "partocracy": "A form of government where one political party dominate the political process and state apparatus rather than the citizens or individual representative",
    "representative_democracy": "A system of government where all eligible citizens vote on representatives to pass laws and govern the country on their behalf.",
    "direct_democracy": "A form of democracy in which people decide on policy initiatives directly, rather than through representatives.",
    "constitutional": "A form of government where a monarch acts as the head of state within the parameters of a written or unwritten constitution. The monarch’s powers are legally limited, often serving as a symbolic or stabilizing national figurehead.",
    "minarchism": "A libertarian political philosophy advocating for a \"night-watchman state,\" which only provides protection from aggression, theft, and contract violations.",
    "meritocracy": "A social or political system in which power and responsibility are vested in individual people based on their demonstrated ability and talent.",
    "technocracy": "A system of governance where decision-makers are selected on the basis of their expertise in a given area of responsibility, particularly scientific or technical knowledge.",
    "stratocracy": "A form of government headed by military chiefs, where the military and the state are traditionally or constitutionally the same entity.",
    "aristocracy": "A system where power is held by a distinguished class of citizens who possess the inherited status, education, and long-term land-based stakes required to provide stable governance for society.",
    "anarcho_monarchism": "A social arrangement where a monarch exists solely to prevent the formation of a state, acting as a symbolic protector of a society based on individual liberty and voluntary cooperation.",
    "neocameralism": "A structure where the state functions as a high-performance joint-stock corporation, managed by a professional executive and owned by shareholders to ensure maximum administrative efficiency and social order.",
    // nation
    "Internationalism": "A political principle advocating for greater political or economic cooperation among nations and peoples for the common good.",
    "Cosmopolitanism": "The idea that all human beings are members of a single community, based on a shared morality that transcends national and local boundaries.",
    "civic_nationalism": "A form of nationalism based on shared political values and citizenship within a state, rather than shared ethnicity or race.",
    "cultural_nationalism": "A form of nationalism where the nation is defined by a shared culture—language, traditions, and heritage—rather than ancestry or race.",
    "ethnic_nationalism": "A form of nationalism wherein the nation is defined in terms of ethnicity, which always includes some element of shared descent or ancestry.",
    "pan_nationalism": "A form of nationalism dedicated to the unification of disparate groups into a single nation based on shared cultural, linguistic, or ethnic ties across borders.",
    "racial_nationalism": "An ideology that defines national identity based on a specific race, often advocating for the preservation or dominance of that race.",
    "Tribalism": "The rejection of nationalism in favor of a return to primitive, organic tribal identities. It prioritizes kinship, local lineage, and ancient communal bonds.",
    "communitarianism": "A framework that prioritizes the local community as the primary source of identity, emphasizing that individual well-being and social stability are rooted in shared values and strong local bonds.",
    "egoism": "A radical philosophy positing that individual self-interest is the only valid basis for action. It rejects all \"spooks\"—abstract concepts like the state, morality, or religion—that limit personal autonomy.",
    // foreign policy
    "Isolationism": "A policy of remaining apart from the affairs or interests of other groups, especially the political affairs of other countries.",
    "Non_Interventionism": "A foreign policy which holds that political rulers should avoid alliances with other nations and avoid all wars not related to direct self-defense.",
    "Realpolitik": "A system of politics or principles based on practical rather than moral or ideological considerations.",
    "Imperialism": "A policy of extending a country's power and influence through diplomacy, economic dominance, or military force over other territories.",
    "Interventionism": "A policy of proactive activity undertaken by a nation-state to manipulate or influence the economy or politics of another country.",
    "Globalism": "The operation or planning of economic and foreign policy on a global basis, favoring free trade, open borders, and international cooperation.",
    "armed_neutrality": "A foreign policy where a nation refuses to take sides in a conflict but maintains a strong military to defend its sovereignty. It signals that any violation of neutrality will be met with force."
};

const iconSources = {
                                // economics
    "welfare_capitalism": "https://www.veryicon.com/icons/miscellaneous/yuantong-icon/8-public-welfare-relief.html",
    //"laissez_faire": "",
    "countereconomics": "https://commons.wikimedia.org/wiki/File:Agorism-symbol.svg",
    //"state_capitalism": "",
    "dirigisme": "https://quark88.github.io/ideosorter/",
    //"keynesianism": "",
    "third_way": "https://quark88.github.io/ideosorter/",
    //"neo_corporatism": "",
    //"corporatism": "",
    //"social_corporatism": "",
    "yellow_socialism": "https://quark88.github.io/ideosorter/",
    "mutualism": "https://commons.wikimedia.org/wiki/File:Mutualismo.svg",
    "guild_socialism": "https://www.reddit.com/r/leftistvexillology/comments/1cex7kz/my_take_on_a_flag_for_guild_socialism/",
    "syndicalism": "https://commons.wikimedia.org/wiki/File:Hammer_Torch_and_Cog_Syndicalism.png",
    "market_socialism": "https://www.reddit.com/r/leftistvexillology/comments/1kqh025/market_socialism_flag3_versions/",
    "mutual_distributism": "https://commons.wikimedia.org/wiki/File:Hound_of_Distributism.svg",
    "social_distributism": "https://commons.wikimedia.org/wiki/File:Hound_of_Distributism.svg",
    "distributism": "https://commons.wikimedia.org/wiki/File:Hound_of_Distributism.svg",
    "social_capitalism": "https://polcompball.wiki/Social_Capitalism",
    "state_socialism": "https://polcompball.wiki/Socialism",
    "free_socialism": "https://commons.wikimedia.org/wiki/File:%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9F%D0%A1%D0%A0%D0%9C.svg",
    "communization": "https://www.deviantart.com/neobolshevik/art/Communization-theory-Flag-1206433111",
    "utopian_socialism": "https://www.reddit.com/r/leftistvexillology/comments/1cryitt/possible_flags_for_the_utopian_community_of/",
    "agrarian_socialism": "https://polcompball.wiki/Agrarian_Socialism",
    "feudalism": "https://en.wikipedia.org/wiki/File:Flag_of_medieval_France.png",
    //"cameralism": "",
    //"free_market_distributism": "",
                                //resource_management
    "Voluntaryism": "https://en.wikipedia.org/wiki/File:VforVoluntary_normal.svg",
    "lvt": "https://www.reddit.com/r/georgism/comments/ffs4yt/inspired_by_uwufflytimes_design_on_rvexillology_i/",
    //"flat_taxation": "",
    //"Progressive_Taxation": "",
    //"Confiscatory_Taxation": "",
    "collective_distribution": "https://commons.wikimedia.org/wiki/File:Hammer_and_sickle.svg",
                                //culture
    "postmodernism": "https://commons.wikimedia.org/wiki/File:Chaos_star.svg",
    "civil_liberalism": "https://www.reddit.com/r/vexillology/comments/10jfwzi/flag_for_liberalism/",
    "progressivism": "https://philosophyball.miraheze.org/wiki/Progressivism",
    "social_progressivism": "https://commons.wikimedia.org/wiki/File:Eiserne_Front_Symbol.svg",
    "conservative_liberalism": "https://polcompball.wiki/Conservative_Liberalism",
    "liberal_conservatism": "https://polcompball.wiki/Liberal_Conservatism",
    "progressive_conservatism": "https://polcompball.wiki/Progressive_Conservatism",
    "conservatism": "https://commons.wikimedia.org/wiki/File:Republicanlogo.svg",
    "reactionaryism": "https://polcompball.wiki/Reactionaryism",
    "paleoconservatism": "https://www.reddit.com/r/vexillology/comments/i80yuz/flag_for_the_american_paleoconservative_movement/",
    "neoreactionaryism": "https://polcompball.wiki/Neoreactionaryism",
    //"traditionalism": "",
    "reactionary_modernism": "https://polcompball.wiki/Reactionary_Modernism",
                                //authority
    "theocracy": "https://commons.wikimedia.org/wiki/File:Emblem_of_the_Holy_See_(vatican.va).svg",
    //"absolute": "",
    "totalitarianism": "https://commons.wikimedia.org/wiki/File:Flag_of_the_National_Fascist_Party_(PNF)_variant_2.svg",
    "religious_authoritarianism": "https://commons.wikimedia.org/wiki/File:Cross_Santiago.svg",
    //"autocracy": "",
    "anarchism": "https://commons.wikimedia.org/wiki/File:Anarchy-symbol.svg",
    "partocracy": "https://commons.wikimedia.org/wiki/File:Lenin-Silhoutte_.svg",
    //"representative_democracy": "",
    //"direct_democracy": "",
    //"constitutional": "",
    "minarchism": "https://commons.wikimedia.org/wiki/File:Gadsden_flag.svg",
    "meritocracy": "https://commons.wikimedia.org/wiki/File:Meritocracy_symbol.jpg",
    "technocracy": "https://commons.wikimedia.org/wiki/File:TechnocracyMonad.svg",
    "stratocracy": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_the_Hellenic_Republic_(1973-1974).svg",
    //"aristocracy": "",
    "anarcho_monarchism": "https://www.reddit.com/r/vexillology/comments/aqt0of/flag_of_anarchomonarchy/",
    //"neocameralism": "",
                                //nation
    //"Internationalism": "",
    "Cosmopolitanism": "https://commons.wikimedia.org/wiki/File:International_Flag_of_Planet_Earth.svg",
    "civic_nationalism": "https://polcompball.wiki/Civic_Nationalism",
    "cultural_nationalism": "https://polcompball.wiki/Cultural_Nationalism",
    "ethnic_nationalism": "https://polcompball.wiki/Ethnonationalism",
    "pan_nationalism": "https://polcompball.wiki/Irredentism",
    "racial_nationalism": "https://polcompball.wiki/Racial_Nationalism",
    "Tribalism": "https://polcompball.wiki/Tribalism",
    //"egoism": "",
    "communitarianism": "https://polcompball.wiki/Communitarianism",
                                //foreign
    "Isolationism": "https://polcompball.wiki/Isolationism",
    //"Non_Interventionism": "",
    //"Realpolitik": "",
    "Imperialism": "https://polcompball.wiki/Imperialism",
    "Interventionism": "https://commons.wikimedia.org/wiki/File:Flag_of_NATO.svg",
    "Globalism": "https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Nations.svg",
    //"armed_neutrality": ""
};
