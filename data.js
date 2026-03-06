const resultsMapping = {
    "economics": {
        "welfare_capitalism": "Welfare Capitalism",
        "social_capitalism": "Social Capitalism",
        "laissez_faire": "Laissez-Faire",
        "agorism": "Agorism",
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
        "feudalism": "Feudalism"
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
        "traditionalism": "Traditionalism"
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
        "stratocracy": "Stratocracy"
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
        "egoism": "Egoism"
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
        "regulated": ["state_capitalism", "dirigisme", "keynesianism", "third_way", "neo_corporatism"],
        "free_cap": ["laissez_faire", "agorism"],
        "socialists": ["state_socialism", "free_socialism", "communization", "utopian_socialism", "syndicalism", "guild_socialism"],
        "market_left": ["agrarian_socialism", "mutualism"],
        "corpotatists": ["corporatism", "social_corporatism", "yellow_socialism"],
        "distributist": ["distributism", "social_distributism", "mutual_distributism", "agrarian_socialism"]
    },
    "resource_management": {
        "mainstream_tax": ["flat_taxation", "Progressive_Taxation", "lvt"],
        "farleft_tax": ["Confiscatory_Taxation", "collective_distribution"]
    },
    "culture": {
        "progressive": ["progressivism", "social_progressivism", "civil_liberalism"],
        "mainstreamcon": ["conservatism", "liberal_conservatism", "progressive_conservatism", "conservative_liberalism"],
        "oldways": ["reactionaryism", "paleoconservatism"],
        "neoold": ["neoreactionaryism", "traditionalism"]
    },
    "authority": {
        "divine": ["theocracy", "absolute", "religious_authoritarianism"],
        "auth": ["totalitarianism", "autocracy", "partocracy", "stratocracy", "technocracy", "meritocracy"],
        "mainstreampower": ["representative_democracy", "direct_democracy", "minarchism"]
    },
    "nation": {
        "global": ["Internationalism", "Cosmopolitanism"],
        "modnat": ["civic_nationalism", "cultural_nationalism"],
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
    /* Fascist & Third Position ideologies */
    "syndicalism|collective_distribution|reactionaryism|totalitarianism|cultural_nationalism": "National Syndicalism",
    "corporatism|reactionaryism|religious_authoritarianism|cultural_nationalism": "Clerical Fascism",
    "corporatism|paleoconservatism|autocracy|cultural_nationalism|Isolationism": "Integralism",
    "corporatism|reactionaryism|totalitarianism|Imperialism": "Fascism",
    "corporatism|traditionalism|totalitarianism|Imperialism": "Evolianism",
    "corporatism|progressivism|totalitarianism|Imperialism": "Futurism",
    "state_capitalism|totalitarianism|pan_nationalism|Imperialism": "Nazism",
    "state_capitalism|totalitarianism|racial_nationalism": "Neonazism",
    "yellow_socialism|minarchism|Imperialism": "Neo-Libertarian Falangism",

    /* Liberal ideologies */
    "laissez_faire|flat_taxation|civil_liberalism|representative_democracy|civic_nationalism|Non_Interventionism": "Classical Liberalism",
    "social_capitalism|Progressive_Taxation|social_progressivism|representative_democracy|civic_nationalism|Globalism": "Social Liberalism",
    "laissez_faire|flat_taxation|civil_liberalism|representative_democracy|civic_nationalism|Globalism": "Neoliberalism",
    "laissez_faire|flat_taxation|conservative_liberalism|representative_democracy|cultural_nationalism|Realpolitik": "National Liberalism",
    "welfare_capitalism|flat_taxation|conservative_liberalism|representative_democracy|civic_nationalism|Globalism": "Ordoliberalism",

    /* Left-Anarchist ideologies */
    "syndicalism|collective_distribution|anarchism|Internationalism": "Anarcho-Syndicalism",
    "communization|collective_distribution|social_progressivism|anarchism|Internationalism": "Platformism",
    "free_socialism|collective_distribution|social_progressivism|direct_democracy|Internationalism": "Communalism",
    "agorism|Voluntaryism|social_progressivism|anarchism|Cosmopolitanism": "Left-Agorism",
    "free_socialism|postmodernism|anarchism|Cosmopolitanism": "Post-Anarchism",
    "mutualism|anarchism": "Mutualism",
    "market_socialism|anarchism": "Market Anarchism",

    /* Right-Anarchist ideologies */
    "laissez_faire|Voluntaryism|civil_liberalism|anarchism|Cosmopolitanism|Non_Interventionism": "Panarchism",
    "laissez_faire|Voluntaryism|neoreactionaryism|technocracy|Isolationism": "Dark Enlightenment",
    "distributism|anarchism": "Anarcho-Distributism",
    "laissez_faire|lvt|anarchism": "Geoanarchism",
    "laissez_faire|Voluntaryism|postmodernism|anarchism|egoism": "Avaritionism",
    "laissez_faire|Voluntaryism|civil_liberalism|anarchism|Non_Interventionism": "Anarcho-Capitalism",
    "laissez_faire|Voluntaryism|reactionaryism|anarchism|Non_Interventionism": "Hoppeanism",
    "laissez_faire|Voluntaryism|progressivism|anarchism|Non_Interventionism": "Bleeding-Heart Anarcho-Capitalism",
    "Tribalism|anarchism": "National-Anarchism",

    /* Libertarian ideologies */
    "laissez_faire|lvt|minarchism": "Geolibertarianism",
    "laissez_faire|flat_taxation|minarchism|civic_nationalism|Interventionism": "Neolibertarianism",
    "laissez_faire|flat_taxation|conservatism|minarchism|cultural_nationalism|Non_Interventionism": "Libertarian Conservatism",
    "laissez_faire|flat_taxation|paleoconservatism|minarchism|ethnic_nationalism|Isolationism": "National Libertarianism",
    "welfare_capitalism|lvt|social_progressivism|minarchism|Non_Interventionism": "Social Libertarianism",
    "welfare_capitalism|flat_taxation|conservative_liberalism|direct_democracy|civic_nationalism|armed_neutrality": "Helvetic Model",
    "laissez_faire|Voluntaryism|conservatism|minarchism|Non_Interventionism": "Paleolibertarianism",
    "laissez_faire|Voluntaryism|progressivism|minarchism|Non_Interventionism": "Bleeding-Heart Libertarianism",

    /* Socialist ideologies */
    "free_socialism|collective_distribution|minarchism|Internationalism|Non_Interventionism": "Minarcho-Socialism",
    "utopian_socialism|representative_democracy|Internationalism|Non_Interventionism": "Christian Socialism",
    "state_capitalism|Progressive_Taxation|conservative_liberalism|partocracy|civic_nationalism|Realpolitik": "Dengism",
    "state_socialism|collective_distribution|traditionalism|totalitarianism|cultural_nationalism|Imperialism": "National Bolshevism",
    "market_socialism|representative_democracy|progressivism|Internationalism": "Democratic Socialism",
    "social_capitalism|Progressive_Taxation|representative_democracy|Internationalism": "Social Democracy",

    /* Conservative ideologies */
    "welfare_capitalism|Progressive_Taxation|conservatism|representative_democracy|cultural_nationalism|Realpolitik": "National Conservatism",
    "social_capitalism|Progressive_Taxation|liberal_conservatism|representative_democracy|civic_nationalism|Internationalism": "Christian Democracy",
    "welfare_capitalism|Progressive_Taxation|conservatism|representative_democracy|cultural_nationalism": "Paternalistic Conservatism",
    "laissez_faire|flat_taxation|paleoconservatism|representative_democracy|cultural_nationalism|Isolationism": "Paleoconservatism",
    "welfare_capitalism|liberal_conservatism|representative_democracy|civic_nationalism|Interventionism": "Neoconservatism",
    "welfare_capitalism|conservative_liberalism|representative_democracy|civic_nationalism|Interventionism": "Neoconservatism",

    /* Marxist ideologies */
    "communization|collective_distribution|social_progressivism|Internationalism": "Italian Left Communism",
    "state_socialism|collective_distribution|conservatism|partocracy|cultural_nationalism|Isolationism": "Juche",
    "agrarian_socialism|collective_distribution|social_progressivism|totalitarianism|cultural_nationalism|Realpolitik": "Mao Zedong Thought",
    "agrarian_socialism|collective_distribution|social_progressivism|totalitarianism|pan_nationalism|Interventionism": "Maoism–Third Worldism",
    "state_socialism|collective_distribution|social_progressivism|totalitarianism|Internationalism|Interventionism": "Marxism–Leninism–Maoism",
    "state_socialism|collective_distribution|social_progressivism|representative_democracy|Internationalism|Interventionism": "Trotskyism",
    "communization|collective_distribution|postmodernism|anarchism|egoism": "Post-left",
    "state_socialism|collective_distribution|social_progressivism|partocracy|Internationalism|Interventionism": "Marxism-Leninism",
    "state_socialism|collective_distribution|conservatism|totalitarianism|cultural_nationalism|Realpolitik": "Stalinism",
    "market_socialism|collective_distribution|social_progressivism|direct_democracy|civic_nationalism|Non_Interventionism": "Titoism"
};

const categories = ["economics", "resource_management", "culture", "authority", "nation", "foreign"];

const labelColors = {
    "No exact match": "#5C5C5C",

    /* Fascist & Third Position - Browns, Dark Purples, and Greys */
    "National Syndicalism": "#7B3F00",
    "Clerical Fascism": "#4B3621",
    "Integralism": "#153e5aff",
    "Fascism": "#694F2C",
    "Evolianism": "#47345C",
    "Futurism": "#1B2A6B",
    "Nazism": "#2B2B2B",
    "Neonazism": "#1A1A1A",
    "Neo-Libertarian Falangism": "#E8DA02",

    /* Liberal ideologies - Light Blues and Cyans */
    "Classical Liberalism": "#F0B138",
    "Social Liberalism": "#4B92DB",
    "Neoliberalism": "#54ABC7",
    "National Liberalism": "#3D5A80",
    "Ordoliberalism": "#518699",

    /* Left-Anarchist ideologies - Reds and Dark Oranges */
    "Anarcho-Syndicalism": "#941313",
    "Platformism": "#7D0000",
    "Communalism": "#298b29ff",
    "Left-Agorism": "#996515",
    "Post-Anarchism": "#602147",
    "Mutualism": "#db4804ff",
    "Market Anarchism": "#C74A0A",

    /* Right-Anarchist ideologies - Yellows and Blacks */
    "Panarchism": "#6D5ACD",
    "Dark Enlightenment": "#6d4100ff",
    "Anarcho-Distributism": "#FFA500",
    "Geoanarchism": "#3e7740ff",
    "Avaritionism": "#aeb645ff",
    "Anarcho-Capitalism": "#D4CB20",
    "Hoppeanism": "#e0bf00ff",
    "Bleeding-Heart Anarcho-Capitalism": "#ffbe69ff",
    "National-Anarchism": "#5E2C2C",

    /* Libertarian ideologies - Purples and Golds */
    "Geolibertarianism": "#228B22",
    "Neolibertarianism": "#B8860B",
    "Libertarian Conservatism": "#6495ED",
    "National Libertarianism": "#556B2F",
    "Social Libertarianism": "#ff7b7bff",
    "Helvetic Model": "#78d4e4ff",
    "Paleolibertarianism": "#660896",
    "Bleeding-Heart Libertarianism": "#d1c300ff",

    /* Socialist ideologies - Bright Reds and Roses */
    "Minarcho-Socialism": "#FF4D4D",
    "Christian Socialism": "#8B0000",
    "Dengism": "#DE2910",
    "National Bolshevism": "#690000ff",
    "Democratic Socialism": "#E34234",
    "Social Democracy": "#FF3333",

    /* Conservative ideologies - Deep Blues and Sea Greens */
    "National Conservatism": "#002366",
    "Christian Democracy": "#3C5A99",
    "Paternalistic Conservatism": "#0047AB",
    "Paleoconservatism": "#003366",
    "Neoconservatism": "#25257aff",

    /* Marxist ideologies - Crimson and Dark Reds */
    "Italian Left Communism": "#B22222",
    "Juche": "#C00000",
    "Mao Zedong Thought": "#EE1C25",
    "Maoism–Third Worldism": "#D40000",
    "Marxism–Leninism–Maoism": "#ED1C24",
    "Trotskyism": "#CC0000",
    "Post-left": "#700000",
    "Marxism-Leninism": "#CD0000",
    "Stalinism": "#A52A2A",
    "Titoism": "#304192"
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
    // economics
    "welfare_capitalism": "A capitalist economy that includes extensive social welfare policies. It features a market-based system supported by a safety net, including public education, healthcare, and pensions.",
    "laissez_faire": "An \"arms-off\" economic environment where transactions between private parties are free from government intervention, including regulations, privileges, tariffs, and subsidies.",
    "agorism": "A revolutionary market anarchism that advocates for the creation of a society based on voluntary exchanges, primarily through \"counter-economics\" (the black and grey markets).",
    "state_capitalism": "A system where the state undertakes commercial economic activity and the means of production are organized and managed as state-owned enterprises.",
    "dirigisme": "An economic system where the state exerts strong directive influence over investment and the market, rather than merely regulating it, common in mid-20th-century France.",
    "keynesianism": "An economic theory advocating for increased government expenditures and lower taxes to stimulate demand and pull the global economy out of depression.",
    "third_way": "A centrist position that attempts to reconcile right-wing and left-wing politics by advocating a synthesis of right-wing economics and left-wing social policies.",
    "neo_corporatism": "A cooperative relationship between the government and major interest groups (like labor unions and business associations) to manage the national economy through negotiation.",
    "corporatism": "The organization of society into corporate groups—such as agricultural, labor, or scientific—on the basis of their common interests or social functions.",
    "social_corporatism": "",
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
    // nation
    "Internationalism": "A political principle advocating for greater political or economic cooperation among nations and peoples for the common good.",
    "Cosmopolitanism": "The idea that all human beings are members of a single community, based on a shared morality that transcends national and local boundaries.",
    "civic_nationalism": "A form of nationalism based on shared political values and citizenship within a state, rather than shared ethnicity or race.",
    "cultural_nationalism": "A form of nationalism where the nation is defined by a shared culture—language, traditions, and heritage—rather than ancestry or race.",
    "ethnic_nationalism": "A form of nationalism wherein the nation is defined in terms of ethnicity, which always includes some element of shared descent or ancestry.",
    "pan_nationalism": "A form of nationalism dedicated to the unification of disparate groups into a single nation based on shared cultural, linguistic, or ethnic ties across borders.",
    "racial_nationalism": "An ideology that defines national identity based on a specific race, often advocating for the preservation or dominance of that race.",
    "Tribalism": "The rejection of nationalism in favor of a return to primitive, organic tribal identities. It prioritizes kinship, local lineage, and ancient communal bonds.",
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
    "agorism": "https://commons.wikimedia.org/wiki/File:Agorism-symbol.svg",
    //"state_capitalism": "",
    "dirigisme": "https://quark88.github.io/ideosorter/",
    //"keynesianism": "",
    "third_way": "https://quark88.github.io/ideosorter/",
    //"neo_corporatism": "",
    "corporatism": "https://polcompball.wiki/Corporatism",
    "social_corporatism": "https://polcompball.wiki/Corporatism",
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
                                //foreign
    "Isolationism": "https://polcompball.wiki/Isolationism",
    //"Non_Interventionism": "",
    //"Realpolitik": "",
    "Imperialism": "https://polcompball.wiki/Imperialism",
    "Interventionism": "https://commons.wikimedia.org/wiki/File:Flag_of_NATO.svg",
    "Globalism": "https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Nations.svg",
    //"armed_neutrality": ""
};
