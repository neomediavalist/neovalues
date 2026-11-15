const categories = ["economics", "resource_management", "culture", "authority", "nation", "foreign", "technology", "social_control", "territorial_organization"];

const categoryTitles = {
    "economics": "Economics",
    "resource_management": "Resource Management",
    "culture": "Culture",
    "authority": "Authority",
    "nation": "Nation",
    "foreign": "Foreign Policy",
    "technology": "Technology",
    "social_control": "Social Control",
    "territorial_organization": "Territorial Organization"
};

const categoryValues = {
    economics: [
        "social_market",
        "rhine_capitalism",
        "paternalistic_capitalism",
        "social_solidarity_economy",
        "ordnungspolitik",
        "residualism",
        "basic_income_capitalism",
        "laissez_faire",
        "countereconomics",
        "state_capitalism",
        "state_socialism",
        "dirigisme",
        "keynesianism",
        "third_way",
        "neo_corporatism",
        "corporatism",
        "social_corporatism",
        "yellow_socialism",
        "mutualism",
        "guild_socialism",
        "syndicalism",
        "market_socialism",
        "free_socialism",
        "communization",
        "utopian_socialism",
        "mutual_distributism",
        "social_distributism",
        "agrarian_socialism",
        "distributism",
        "feudalism",
        "cameralism",
        "free_market_distributism",
        "parecon",
        "corporatocracy",
        "hierarchical_communism"
    ],
    resource_management: [
        "Voluntaryism",
        "lvt",
        "mixed_lvt",
        "tariff_funding",
        "fair_tax",
        "flat_taxation",
        "Progressive_Taxation",
        "Confiscatory_Taxation",
        "collective_distribution"
    ],
    culture: [
        "postmodernism",
        "civil_liberalism",
        "progressivism",
        "social_progressivism",
        "conservative_liberalism",
        "liberal_conservatism",
        "progressive_conservatism",
        "conservatism",
        "traditionalist_conservatism",
        "reactionaryism",
        "paleoconservatism",
        "neoreactionaryism",
        "religious_traditionalism",
        "perennial_traditionalism",
        "reactionary_modernism",
        "alternative_modernism",
        "secular_humanism",
        "amoralism"
    ],
    authority: [
        "theocracy",
        "absolute",
        "ethical_statism",
        "religious_authoritarianism",
        "autocracy",
        "anarchism",
        "partocracy",
        "representative_democracy",
        "referendum_democracy",
        "councilism",
        "communalism",
        "digital_democracy",
        "constitutional",
        "minarchism",
        "meritocracy",
        "technocracy",
        "stratocracy",
        "aristocracy",
        "anarcho_monarchism",
        "neocameralism",
        "syndicracy",
        "demarchy",
        "polycentrism"
    ],
    nation: [
        "Cosmopolitanism",
        "civic_nationalism",
        "cultural_nationalism",
        "religious_nationalism",
        "ethnic_nationalism",
        "pan_nationalism",
        "racial_nationalism",
        "Tribalism",
        "egoism",
        "communitarianism",
        "romantic_nationalism",
        "civilizationism",
        "multiculturalism"
    ],
    foreign: [
        "Isolationism",
        "Non_Interventionism",
        "Realpolitik",
        "Imperialism",
        "Interventionism",
        "Globalism",
        "armed_neutrality",
        "Internationalism",
        "alter_globalism",
        "irredentism",
        "pacifism",
        "mercantilism"
    ],
    technology: [
        "primitivism",
        "neoluddism",
        "agrarianism",
        "conservationism",
        "environmentalism",
        "instrumentalism",
        "industrialism",
        "post_industrialism",
        "ecomodernism",
        "technogaianism",
        "prometheanism",
        "technocapitalism",
        "extropianism",
        "techno_fatalism",
        "transhumanism",
        "posthumanism",
        "convivialism"
    ],
    social_control: [
        "civil_libertarianism",
        "permissivism",
        "civic_paternalism",
        "legal_moralism",
        "securitism",
        "disciplinarianism",
        "regimentalism",
        "totalism",
        "retributivism",
        "reputationalism"
    ],
    territorial_organization: [
        "municipalism",
        "confederalism",
        "federalism",
        "regionalism",
        "centralism",
        "hypercentralism",
        "subsidiarity",
        "suzerainty"
    ]
};

const subCategories = {
    "economics": {
        "welfare": ["social_market", "rhine_capitalism", "paternalistic_capitalism", "social_solidarity_economy", "ordnungspolitik", "residualism", "basic_income_capitalism"],
        "regulated": ["state_capitalism", "dirigisme", "keynesianism", "third_way", "neo_corporatism", "cameralism", "corporatocracy"],
        "free_cap": ["laissez_faire", "countereconomics"],
        "socialists": ["state_socialism", "free_socialism", "communization", "utopian_socialism", "syndicalism", "guild_socialism", "parecon"],
        "market_left": ["agrarian_socialism", "mutualism", "market_socialism"],
        "corporatists": ["corporatism", "social_corporatism", "yellow_socialism", "hierarchical_communism"],
        "distributist": ["distributism", "social_distributism", "mutual_distributism", "free_market_distributism", "feudalism"]
    },
    "resource_management": {
        "mainstream_tax": ["flat_taxation", "Progressive_Taxation", "lvt", "mixed_lvt", "tariff_funding", "fair_tax"],
        "farleft_tax": ["Confiscatory_Taxation", "collective_distribution"],
        "voluntary_tax": ["Voluntaryism"]
    },
    "culture": {
        "progressive": ["progressivism", "social_progressivism", "civil_liberalism", "postmodernism", "secular_humanism"],
        "mainstreamcon": ["conservatism", "liberal_conservatism", "progressive_conservatism", "conservative_liberalism"],
        "oldways": ["reactionaryism", "paleoconservatism", "traditionalist_conservatism"],
        "neoold": ["neoreactionaryism", "reactionary_modernism", "religious_traditionalism", "perennial_traditionalism", "alternative_modernism"],
        "anti_moral": ["amoralism"]
    },
    "authority": {
        "divine": ["theocracy", "absolute", "religious_authoritarianism"],
        "auth": ["ethical_statism", "autocracy", "partocracy", "stratocracy", "technocracy", "meritocracy", "aristocracy", "neocameralism"],
        "mainstreampower": ["representative_democracy", "referendum_democracy", "councilism", "communalism", "digital_democracy", "minarchism", "constitutional", "demarchy"],
        "functional_rep": ["syndicracy"],
        "anarch": ["anarcho_monarchism", "anarchism", "polycentrism"]
    },
    "nation": {
        "global": ["Cosmopolitanism"],
        "modnat": ["civic_nationalism", "cultural_nationalism", "romantic_nationalism", "religious_nationalism", "civilizationism", "communitarianism", "multiculturalism"],
        "hitler": ["ethnic_nationalism", "pan_nationalism", "racial_nationalism", "Tribalism"],
        "individualist": ["egoism"]
    },
    "foreign": {
        "close": ["Isolationism", "Non_Interventionism", "armed_neutrality"],
        "neolib": ["Interventionism", "Globalism", "Internationalism", "alter_globalism"],
        "expansionist": ["Imperialism", "Realpolitik", "irredentism", "mercantilism"],
        "pacifist": ["pacifism"]
    },
    "technology": {
        "anti_tech": ["primitivism", "neoluddism", "agrarianism"],
        "eco_stewardship": ["conservationism", "environmentalism", "convivialism"],
        "industrial_core": ["instrumentalism", "industrialism", "post_industrialism", "ecomodernism"],
        "accelerationist": ["prometheanism", "technocapitalism", "extropianism", "techno_fatalism"],
        "post_biological": ["transhumanism", "posthumanism", "technogaianism"]
    },
    "social_control": {
        "libertarian_sc": ["civil_libertarianism", "permissivism"],
        "paternal_sc": ["civic_paternalism", "legal_moralism"],
        "surveillance_sc": ["securitism", "disciplinarianism", "retributivism"],
        "regime_sc": ["regimentalism", "totalism"],
        "communal_sc": ["reputationalism"]
    },
    "territorial_organization": {
        "decentralist": ["municipalism", "confederalism"],
        "balanced_territory": ["federalism", "regionalism", "subsidiarity", "suzerainty"],
        "centralist": ["centralism", "hypercentralism"]
    }
};

const incompatibleSubCategories = {
    "welfare": ["socialists"],
    "socialists": ["welfare", "free_cap"],
    "free_cap": ["socialists"],
    "farleft_tax": ["mainstream_tax", "voluntary_tax"],
    "mainstream_tax": ["farleft_tax"],
    "voluntary_tax": ["farleft_tax"],
    "progressive": ["oldways", "neoold"],
    "oldways": ["progressive"],
    "neoold": ["progressive", "mainstreamcon"],
    "mainstreamcon": ["neoold"],
    "divine": ["mainstreampower", "anarch"],
    "mainstreampower": ["divine", "auth"],
    "auth": ["mainstreampower", "anarch"],
    "anarch": ["auth", "divine"],
    "global": ["hitler"],
    "hitler": ["global"],
    "close": ["neolib"],
    "neolib": ["close"],
    "libertarian_sc": ["regime_sc"],
    "regime_sc": ["libertarian_sc"],
    "decentralist": ["centralist"],
    "centralist": ["decentralist"]
};

const ideologyGroups = {
    "Third Position": [
        "National Syndicalism",
        "Clerical Fascism",
        "Brazilian Integralism",
        "Italian Fascism",
        "Peronism",
        "Ba'athism",
        "Sansepolcrismo",
        "Evolianism",
        "Futurism",
        "National-Socialism",
        "Strasserism",
        "Falangism",
        "Agrarian Fascism",
        "Ecofascism",
        "Sorelianism",
        "Rexism",
        "Legionarianism",
        "Techno-Fascism",
        "National Solidarity",
        "Cosmist Vanguardism",
        "Duginism",
        "Fiumanism",
        "Eneasism",
        "Social Nationalism",
        "Ethnocacerismo",
        "National Primitivism",
        "Social-Bonapartism",
        "Tridemism",
        "Nationalist Kemalism",
        "National Collectivism",
        "Nazi-Maoism",
        "Savinkovism",
        "Mosleyism",
        "Revolutionary Nationalism"
    ],
    "Reactionary": [
        "Volkism",
        "Optimateism",
        "Integralism",
        "National Capitalism",
        "Feudal Monarchism",
        "Carlism",
        "Autocratic Monarchism",
        "Theocratic Distributism",
        "Reactionary Feudalism",
        "Clerical Monarchism",
        "Neo-Absolutism",
        "Aristocratic Cameralism",
        "Developmental Theocracy",
        "Classical Eurasianism",
        "Mladorossism",
        "National Social Capitalism",
        "Right-State Liberalism",
        "Monarquia Syndicalista",
        "Serenissimism"
    ],
    "Conservative": [
        "National Conservatism",
        "Paleoconservatism",
        "Neoconservatism",
        "Mesoconservatism",
        "Red Toryism",
        "Green Conservatism",
        "Clerical Conservatism",
        "Gaullism",
        "Free-Market Conservatism",
        "Agrarian Conservatism",
        "Liberal Toryism",
        "Social Gaullism",
        "Neo-Gaullism",
        "Bonapartist Gaullism",
        "One-Nation Conservatism",
        "Conservative Technoliberalism",
        "Right-Social Authoritarianism",
        "Kjærsgaardism",
        "Kekkonism",
        "Putinism",
        "Post-Soviet Autocracy"
    ],
    "Centrist": [
        "Radicalism",
        "Third Way",
        "Christian Democracy",
        "Compassionate Conservatism",
        "Rockefeller Republicanism",
        "Democratic Transhumanism",
        "Neo-Solidarism",
        "Steppe Eurasianism",
        "Classical Kemalism",
        "Catholic Social Teaching",
        "Bleeding-Heart Authoritarianism",
        "Austro-Corporatism",
        "Davos System"
    ],
    "Centre-Left": [
        "Nordic Model",
        "Social Democracy",
        "Conservative Social Democracy",
        "Social Distributism",
        "Liberal Socialism",
        "Social Georgism",
        "Agrarian Social Democracy",
        "Progressive Corporatism",
        "Left-Gaullism",
        "Green Social Democracy",
        "Geo-Social Democracy",
        "Christian Social Democracy",
        "Police Labourism",
        "Left-Social Authoritarianism",
        "Progressive Social Authoritarianism",
        "Left-Wing Populism",
        "Left-Social Democracy",
        "Social-Helveticism",
        "Left Kemalism",
        "Longism"
    ],
    "Liberal": [
        "Classical Liberalism",
        "Neoliberalism",
        "National Liberalism",
        "Social Liberalism",
        "Ordoliberalism",
        "Bleeding-Heart Liberalism",
        "Geo-Liberalism",
        "Green Liberalism",
        "Whiggism",
        "Muscular Liberalism",
        "Transatlantic Federalism",
        "New Deal Liberalism",
        "Venizelism",
        "Liberal Social Authoritarianism",
        "Technoliberalism",
        "American Model",
        "Techno-Neoliberalism",
        "Tsaingwenism",
        "Liberal Imperialism",
        "Liberal Meritocracy"
    ],
    "Socialist": [
        "Christian Socialism",
        "National Bolshevism",
        "Democratic Socialism",
        "Conservative Socialism",
        "Paleosocialism",
        "Cybernetic Socialism",
        "Utopian Communitarianism",
        "Syndicalist Republicanism",
        "Left-Eurasianism",
        "Socialist Technoliberalism",
        "Mugabeism",
        "Old Left-Populism",
        "Left-State Liberalism",
        "American Technocracy",
        "Fabian Socialism",
        "Ujamaa"
    ],
    "Marxist": [
        "Italian Left Communism",
        "Juche",
        "Mao Zedong Thought",
        "Marxism Leninism Maoism",
        "Trotskyism",
        "Marxism-Leninism",
        "Stalinism",
        "Titoism",
        "Dengism",
        "Luxemburgism",
        "Eurocommunism",
        "Hoxhaism",
        "Castroism",
        "Guevarism",
        "Cyber-Communism",
        "De Leonism",
        "National Communism"
    ],
    "Left-Libertarian": [
        "Communalism",
        "Minarcho-Socialism",
        "Council Communism",
        "Libertarian Socialism",
        "Democratic Confederalism",
        "Guild Socialism",
        "Eco-Socialism",
        "Fourierism",
        "Gandhian Socialism",
        "Scythianism",
        "Proutism"
    ],
    "Centre-Libertarian": [
        "Geolibertarianism",
        "Social Libertarianism",
        "Helvetic Model",
        "Bleeding-Heart Libertarianism",
        "Minarcho-Distributism",
        "Pirate Politics",
        "Agorist Minarchism",
        "Communal Distributism",
        "Yangism",
        "Libertarian Social Democracy",
        "Progressive Helveticism",
        "Cosmopolitan Distributism",
        "Cyber-Federalism"
    ],
    "Right-Libertarian": [
        "Neolibertarianism",
        "Libertarian Conservatism",
        "National Libertarianism",
        "Paleolibertarianism",
        "Dark Enlightenment",
        "Cyber-Libertarianism",
        "Objectivism",
        "Fusionism",
        "Minarcho-Avaritionism"
    ],
    "Left-Anarchist": [
        "Anarcho-Syndicalism",
        "Left-Agorism",
        "Lys Noir",
        "Anarcho-Communism",
        "Solarpunk Anarchism",
        "Christian Anarchism",
        "Insurrectionary Anarchism",
        "Catholic Workerism"
    ],
    "Centre-Anarchist": [
        "Mutualism",
        "Market Anarchism",
        "Mutualist Distributism",
        "Panarchism",
        "Geoanarchism",
        "Green Anarchism",
        "Anarcho-Primitivism",
        "Post-Anarchism",
        "Post-left",
        "Anarcho-Transhumanism",
        "Ego-Communism",
        "National-Anarchism",
        "Ego-Mutualism"
    ],
    "Right-Anarchist": [
        "Anarcho-Capitalism",
        "Hoppeanism",
        "Bleeding-Heart Anarcho-Capitalism",
        "Free-Market Anarcho-Distributism",
        "Traditionalist Anarcho-Distributism",
        "Crypto-Anarchism",
        "Avaritionism",
        "Autarchism",
        "Agorism"
    ],
    "Accelerationist": [
        "Left-Accelerationism",
        "Right-Accelerationism",
        "Effective Accelerationism",
        "Unconditional Accelerationism"
    ],
    "Dystopian": [
        "Neo-Libertarian Falangism",
        "Ingsoc",
        "Neo-Bolshevism",
        "Obliteration of the Self",
        "World State Fordism",
        "Gileadism",
        "One State Benefactorism",
        "Cyberpunk Corpostatism",
        "Fireman Statism",
        "Soylentism",
        "Burgundian System",
        "Russian Imperial Cult"
    ]
};

const ideologies = {
    /* ===============================
        1. THIRD POSITION
    =============================== */
    "National Syndicalism": {
        economics: ["syndicalism", "hierarchical_communism"],
        culture: ["reactionary_modernism", "alternative_modernism"],
        authority: ["ethical_statism", "syndicracy"],
        nation: "romantic_nationalism",
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "Brazilian Integralism": {
        economics: "corporatism",
        culture: "religious_traditionalism",
        authority: "religious_authoritarianism",
        nation: "cultural_nationalism",
        social_control: "disciplinarianism",
        territorial_organization: "centralism"
    },
    "Italian Fascism": {
        economics: "corporatism",
        culture: "reactionary_modernism",
        authority: "ethical_statism",
        nation: "romantic_nationalism",
        foreign: "Imperialism",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: "centralism"
    },
    "Evolianism": {
        economics: "feudalism",
        culture: "perennial_traditionalism",
        authority: "aristocracy",
        nation: "civilizationism",
        foreign: "Imperialism",
        technology: "techno_fatalism",
        social_control: "disciplinarianism"
    },
    "Futurism": {
        economics: "corporatism",
        culture: "alternative_modernism",
        authority: "technocracy",
        nation: "romantic_nationalism",
        foreign: "Imperialism",
        technology: "prometheanism"
    },
    "National-Socialism": {
        economics: ["dirigisme", "state_capitalism", "corporatism"],
        culture: "reactionary_modernism",
        authority: "ethical_statism",
        nation: ["pan_nationalism", "racial_nationalism"],
        foreign: "Imperialism",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: ["hypercentralism", "centralism"]
    },
    "Agrarian Fascism": {
        economics: "agrarian_socialism",
        culture: "traditionalist_conservatism",
        authority: ["autocracy", "ethical_statism"],
        nation: "romantic_nationalism",
        technology: "agrarianism",
        social_control: "disciplinarianism"
    },
    "Strasserism": {
        economics: ["guild_socialism", "social_corporatism", "hierarchical_communism"],
        culture: "reactionary_modernism",
        authority: "ethical_statism",
        nation: ["racial_nationalism", "ethnic_nationalism"],
        technology: "industrialism",
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "Falangism": {
        economics: ["yellow_socialism", "corporatism"],
        culture: "traditionalist_conservatism",
        authority: "ethical_statism",
        nation: "romantic_nationalism",
        foreign: "Imperialism",
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "Sansepolcrismo": {
        economics: "corporatism",
        culture: "progressivism",
        authority: "autocracy",
        nation: "civic_nationalism",
        foreign: "Imperialism",
        technology: "industrialism"
    },
    "Ecofascism": {
        economics: "dirigisme",
        culture: "reactionaryism",
        authority: "ethical_statism",
        nation: "ethnic_nationalism",
        foreign: "Isolationism",
        technology: ["conservationism", "primitivism"],
        social_control: "totalism"
    },
    "Sorelianism": {
        economics: ["syndicalism", "hierarchical_communism"],
        culture: "alternative_modernism",
        authority: "ethical_statism",
        nation: "cultural_nationalism",
        foreign: "Realpolitik"
    },
    "Legionarianism": {
        economics: ["corporatism", "social_corporatism"],
        culture: "religious_traditionalism",
        authority: "religious_authoritarianism",
        nation: ["religious_nationalism", "romantic_nationalism"],
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "Peronism": {
        economics: ["dirigisme", "social_corporatism"],
        resource_management: "Progressive_Taxation",
        culture: "progressive_conservatism",
        nation: ["cultural_nationalism", "civic_nationalism"],
        foreign: "Non_Interventionism",
        social_control: "civic_paternalism"
    },
    "Techno-Fascism": {
        economics: "corporatism",
        culture: "reactionary_modernism",
        authority: "ethical_statism",
        nation: "cultural_nationalism",
        foreign: "Imperialism",
        technology: "transhumanism"
    },
    "National Solidarity": {
        economics: "yellow_socialism",
        culture: "reactionary_modernism",
        authority: "autocracy",
        nation: "cultural_nationalism",
        foreign: "Imperialism"
    },
    "Clerical Fascism": {
        economics: "corporatism",
        culture: "religious_traditionalism",
        authority: "religious_authoritarianism",
        nation: "religious_nationalism",
        foreign: ["Imperialism", "Realpolitik"],
        social_control: ["legal_moralism", "disciplinarianism", "regimentalism"],
        territorial_organization: "centralism"
    },
    "Rexism": {
        economics: "corporatism",
        culture: "religious_traditionalism",
        authority: "religious_authoritarianism",
        nation: "religious_nationalism",
        foreign: "armed_neutrality"
    },
    "Ba'athism": {
        economics: "state_capitalism",
        resource_management: "Progressive_Taxation",
        culture: "alternative_modernism",
        authority: "autocracy",
        nation: "pan_nationalism",
        foreign: "Imperialism"
    },
    "Cosmist Vanguardism": {
        economics: "state_capitalism",
        culture: "alternative_modernism",
        authority: "ethical_statism",
        nation: "pan_nationalism",
        technology: "extropianism"
    },
    "Duginism": {
        economics: "corporatism",
        culture: "perennial_traditionalism",
        authority: "autocracy",
        nation: "civilizationism",
        foreign: "Imperialism",
        social_control: "legal_moralism"
    },
    "Fiumanism": {
        economics: "social_corporatism",
        culture: ["alternative_modernism", "reactionary_modernism"],
        authority: ["ethical_statism", "autocracy"],
        nation: "romantic_nationalism",
        foreign: "Non_Interventionism",
        social_control: "permissivism"
    },
    "Eneasism": {
        economics: ["dirigisme", "state_capitalism"],
        resource_management: "Progressive_Taxation",
        culture: ["traditionalist_conservatism", "conservatism"],
        authority: "technocracy",
        nation: "cultural_nationalism",
        foreign: ["armed_neutrality", "Realpolitik"],
        technology: "industrialism",
        social_control: ["disciplinarianism", "legal_moralism"],
        territorial_organization: "centralism"
    },
    "Social Nationalism": {
        economics: ["rhine_capitalism", "social_market"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["traditionalist_conservatism", "religious_traditionalism"],
        authority: ["representative_democracy", "partocracy"],
        nation: ["cultural_nationalism", "religious_nationalism"],
        foreign: "Realpolitik",
        technology: "industrialism",
        social_control: "legal_moralism",
        territorial_organization: "centralism"
    },
    "Ethnocacerismo": {
        economics: ["state_socialism", "agrarian_socialism"],
        resource_management: "collective_distribution",
        culture: ["reactionaryism", "traditionalist_conservatism"],
        authority: "stratocracy",
        nation: ["racial_nationalism", "ethnic_nationalism"],
        foreign: ["Imperialism", "Realpolitik"],
        technology: ["industrialism", "instrumentalism"],
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "National Primitivism": {
        economics: ["corporatism", "distributism"],
        resource_management: "collective_distribution",
        culture: ["reactionaryism", "perennial_traditionalism"],
        authority: ["ethical_statism", "autocracy"],
        nation: ["ethnic_nationalism", "Tribalism"],
        foreign: "Isolationism",
        technology: "primitivism",
        social_control: ["regimentalism", "disciplinarianism"],
        territorial_organization: ["centralism", "regionalism"]
    },
    "Social-Bonapartism": {
        economics: "dirigisme",
        resource_management: "Progressive_Taxation",
        culture: ["alternative_modernism", "reactionary_modernism", "progressive_conservatism"],
        authority: "autocracy",
        nation: ["civic_nationalism", "cultural_nationalism"],
        foreign: "Imperialism",
        technology: "industrialism",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Tridemism": {
        economics: "dirigisme",
        resource_management: ["lvt", "mixed_lvt"],
        authority: "meritocracy",
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Nationalist Kemalism": {
        economics: ["dirigisme", "corporatism", "state_capitalism"],
        resource_management: ["Progressive_Taxation", "flat_taxation"],
        culture: ["conservatism", "reactionary_modernism", "progressive_conservatism"],
        authority: ["partocracy", "ethical_statism", "autocracy"],
        nation: ["ethnic_nationalism", "cultural_nationalism"],
        foreign: ["Realpolitik", "Isolationism"],
        technology: "industrialism",
        social_control: ["disciplinarianism", "regimentalism", "securitism"],
        territorial_organization: "centralism"
    },
    "National Collectivism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "reactionary_modernism",
        authority: "ethical_statism",
        nation: "ethnic_nationalism",
        foreign: "Isolationism",
        technology: ["instrumentalism", "industrialism"],
        social_control: "totalism",
        territorial_organization: ["hypercentralism", "centralism"]
    },
    "Nazi-Maoism": {
        economics: "agrarian_socialism",
        resource_management: "collective_distribution",
        culture: "reactionary_modernism",
        authority: ["autocracy", "ethical_statism"],
        nation: "racial_nationalism",
        foreign: "alter_globalism",
        technology: ["instrumentalism", "industrialism"],
        social_control: ["totalism", "regimentalism"],
        territorial_organization: "centralism"
    },
    "Savinkovism": {
        economics: ["dirigisme", "corporatism"],
        resource_management: "Progressive_Taxation",
        culture: "reactionary_modernism",
        authority: "autocracy",
        nation: "romantic_nationalism",
        foreign: ["Imperialism", "irredentism"],
        technology: "industrialism",
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "Mosleyism": {
        economics: "corporatism",
        culture: "reactionary_modernism",
        authority: ["ethical_statism", "syndicracy"],
        nation: "civilizationism",
        foreign: ["Imperialism", "mercantilism"],
        technology: "industrialism",
        social_control: "regimentalism",
        territorial_organization: "centralism"
    },
    "Revolutionary Nationalism": {
        economics: ["guild_socialism", "syndicalism", "market_socialism", "agrarian_socialism"],
        resource_management: ["collective_distribution", "Progressive_Taxation", "Confiscatory_Taxation"],
        culture: ["alternative_modernism", "social_progressivism", "progressivism"],
        authority: ["syndicracy", "councilism", "referendum_democracy", "communalism"],
        nation: ["pan_nationalism", "cultural_nationalism", "ethnic_nationalism", "romantic_nationalism"],
        foreign: ["alter_globalism", "Internationalism", "irredentism"],
        social_control: ["reputationalism", "civic_paternalism", "disciplinarianism", "regimentalism", "securitism"],
        territorial_organization: ["subsidiarity", "municipalism", "confederalism", "federalism", "regionalism"]
    },

    /* ===============================
        2. REACTIONARY
    =============================== */
    "Volkism": {
        economics: ["agrarian_socialism", "feudalism"],
        culture: "reactionaryism",
        authority: "autocracy",
        nation: ["romantic_nationalism", "ethnic_nationalism"],
        technology: "agrarianism",
        social_control: "legal_moralism"
    },
    "Optimateism": {
        economics: ["feudalism", "cameralism"],
        culture: "traditionalist_conservatism",
        authority: "aristocracy",
        foreign: "Imperialism",
        social_control: "legal_moralism"
    },
    "Integralism": {
        economics: ["social_distributism", "distributism", "corporatism"],
        culture: "religious_traditionalism",
        authority: "religious_authoritarianism",
        nation: "communitarianism",
        territorial_organization: ["regionalism", "centralism", "subsidiarity"]
    },
    "National Capitalism": {
        economics: "laissez_faire",
        resource_management: "tariff_funding",
        culture: "reactionaryism",
        authority: "autocracy",
        nation: "cultural_nationalism",
        foreign: "Imperialism"
    },
    "Carlism": {
        economics: ["distributism", "corporatism"],
        culture: "religious_traditionalism",
        authority: "absolute",
        nation: "religious_nationalism",
        social_control: "legal_moralism",
        territorial_organization: ["regionalism", "federalism"]
    },
    "Autocratic Monarchism": {
        economics: ["cameralism", "feudalism", "dirigisme", "state_capitalism"],
        culture: "traditionalist_conservatism",
        authority: "absolute",
        nation: "cultural_nationalism",
        foreign: "Realpolitik",
        technology: ["industrialism", "instrumentalism"]
    },
    "Theocratic Distributism": {
        economics: "distributism",
        culture: "religious_traditionalism",
        authority: "theocracy",
        nation: "communitarianism",
        foreign: "Isolationism"
    },
    "Reactionary Feudalism": {
        economics: "feudalism",
        culture: "reactionaryism",
        authority: "aristocracy",
        nation: "cultural_nationalism",
        foreign: "Isolationism",
        social_control: "legal_moralism"
    },
    "Neo-Absolutism": {
        economics: "state_capitalism",
        culture: "neoreactionaryism",
        authority: "absolute",
        nation: "cultural_nationalism",
        foreign: "Realpolitik"
    },
    "Aristocratic Cameralism": {
        economics: "cameralism",
        culture: "reactionaryism",
        authority: "aristocracy",
        nation: "cultural_nationalism",
        foreign: "Isolationism"
    },
    "Feudal Monarchism": {
        economics: "feudalism",
        culture: ["religious_traditionalism", "traditionalist_conservatism"],
        authority: "absolute",
        nation: "cultural_nationalism",
        foreign: ["Non_Interventionism", "Isolationism", "armed_neutrality"],
        technology: "neoluddism",
        territorial_organization: "suzerainty"
    },
    "Clerical Monarchism": {
        economics: "cameralism",
        culture: "religious_traditionalism",
        authority: "religious_authoritarianism",
        nation: "religious_nationalism",
        foreign: "Non_Interventionism"
    },
    "Developmental Theocracy": {
        economics: "third_way",
        culture: "traditionalist_conservatism",
        authority: "theocracy",
        nation: "religious_nationalism",
        technology: "industrialism"
    },
    "Classical Eurasianism": {
        economics: "dirigisme",
        culture: "traditionalist_conservatism",
        authority: "meritocracy",
        nation: "civilizationism",
        foreign: "Realpolitik",
        social_control: "disciplinarianism",
        territorial_organization: ["federalism", "suzerainty"]
    },
    "Mladorossism": {
        economics: "state_socialism",
        culture: ["traditionalist_conservatism", "religious_traditionalism"],
        authority: "absolute",
        nation: "civilizationism",
        social_control: "regimentalism"
    },
    "National Social Capitalism": {
        economics: ["social_market", "rhine_capitalism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["reactionaryism", "traditionalist_conservatism"],
        authority: ["autocracy", "representative_democracy"],
        nation: "ethnic_nationalism",
        foreign: ["Isolationism", "Realpolitik"],
        technology: "industrialism",
        social_control: ["legal_moralism", "disciplinarianism"],
        territorial_organization: "centralism"
    },
    "Right-State Liberalism": {
        economics: "laissez_faire",
        resource_management: "flat_taxation",
        culture: ["progressivism", "civil_liberalism"],
        authority: "autocracy",
        nation: ["racial_nationalism", "civilizationism"],
        foreign: "Imperialism",
        technology: ["transhumanism", "industrialism"],
        social_control: ["disciplinarianism", "regimentalism"],
        territorial_organization: ["hypercentralism", "centralism"]
    },
    "Monarquia Syndicalista": {
        economics: "syndicalism",
        resource_management: "Progressive_Taxation",
        culture: "religious_traditionalism",
        authority: ["constitutional", "syndicracy"],
        nation: "cultural_nationalism",
        foreign: "Non_Interventionism",
        social_control: "disciplinarianism",
        territorial_organization: ["regionalism", "subsidiarity"]
    },
    "Serenissimism": {
        economics: ["cameralism", "corporatism"],
        resource_management: "tariff_funding",
        culture: "traditionalist_conservatism",
        authority: "aristocracy",
        nation: "communitarianism",
        foreign: "mercantilism",
        social_control: "legal_moralism",
        territorial_organization: "suzerainty"
    },

    /* ===============================
        3. CONSERVATIVE
    =============================== */
    "National Conservatism": {
        economics: "residualism",
        resource_management: "Progressive_Taxation",
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: "Realpolitik",
        social_control: "legal_moralism",
        territorial_organization: ["centralism", "federalism", "regionalism"]
    },
    "Paleoconservatism": {
        economics: ["distributism", "free_market_distributism", "dirigisme", "cameralism", "paternalistic_capitalism", "residualism"],
        resource_management: ["tariff_funding", "flat_taxation"],
        culture: "paleoconservatism",
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: "Isolationism",
        social_control: "legal_moralism"
    },
    "Neoconservatism": {
        economics: "residualism",
        culture: ["liberal_conservatism", "progressive_conservatism", "conservative_liberalism"],
        authority: "representative_democracy",
        nation: ["civic_nationalism", "civilizationism"],
        foreign: "Interventionism"
    },
    "Mesoconservatism": {
        economics: "residualism",
        culture: ["traditionalist_conservatism", "conservatism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Interventionism",
        social_control: "legal_moralism"
    },
    "Red Toryism": {
        economics: ["paternalistic_capitalism", "social_distributism"],
        resource_management: "Progressive_Taxation",
        culture: "traditionalist_conservatism",
        authority: "constitutional",
        nation: "cultural_nationalism",
        foreign: "Non_Interventionism"
    },
    "Green Conservatism": {
        economics: "social_market",
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: "representative_democracy",
        nation: ["cultural_nationalism", "communitarianism"],
        technology: "conservationism"
    },
    "Clerical Conservatism": {
        economics: "paternalistic_capitalism",
        culture: "religious_traditionalism",
        authority: "representative_democracy",
        nation: "religious_nationalism",
        foreign: "Non_Interventionism",
        social_control: "legal_moralism"
    },
    "Gaullism": {
        economics: "dirigisme",
        culture: ["conservatism", "alternative_modernism"],
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: "armed_neutrality",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Free-Market Conservatism": {
        economics: "laissez_faire",
        resource_management: ["flat_taxation", "tariff_funding"],
        culture: "conservatism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        social_control: ["legal_moralism", "civil_libertarianism"],
        territorial_organization: ["federalism", "centralism", "regionalism"]
    },
    "Agrarian Conservatism": {
        economics: "distributism",
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: "representative_democracy",
        nation: "communitarianism",
        technology: "agrarianism"
    },
    "Liberal Toryism": {
        economics: "keynesianism",
        culture: "progressive_conservatism",
        authority: ["representative_democracy", "constitutional"],
        nation: "cultural_nationalism", 
        foreign: "Globalism",
        social_control: "civic_paternalism",
        territorial_organization: ["centralism", "regionalism"]
    },
    "Social Gaullism": {
        economics: ["yellow_socialism", "neo_corporatism"],
        resource_management: "Progressive_Taxation",
        culture: "progressive_conservatism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "armed_neutrality",
        technology: "industrialism",
        social_control: "civic_paternalism",
        territorial_organization: ["regionalism", "centralism"]
    },
    "Neo-Gaullism": {
        economics: "rhine_capitalism",
        culture: "liberal_conservatism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        technology: "instrumentalism",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Bonapartist Gaullism": {
        economics: "dirigisme",
        resource_management: "Progressive_Taxation",
        culture: "conservatism",
        authority: "autocracy",
        nation: "cultural_nationalism",
        foreign: "armed_neutrality",
        technology: "industrialism",
        social_control: "disciplinarianism",
        territorial_organization: "hypercentralism"
    },
    "One-Nation Conservatism": {
        economics: ["paternalistic_capitalism", "social_market", "keynesianism"],
        resource_management: "Progressive_Taxation",
        culture: ["progressive_conservatism", "liberal_conservatism"],
        authority: "constitutional",
        nation: ["cultural_nationalism", "civic_nationalism"],
        foreign: "Realpolitik",
        technology: ["instrumentalism", "industrialism"],
        social_control: "civic_paternalism",
        territorial_organization: ["regionalism", "centralism"]
    },
    "Conservative Technoliberalism": {
        economics: ["social_market", "basic_income_capitalism"],
        resource_management: "flat_taxation",
        culture: ["liberal_conservatism", "conservatism"],
        authority: "representative_democracy",
        nation: ["civic_nationalism", "civilizationism"],
        foreign: "Globalism",
        technology: "post_industrialism",
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "regionalism"]
    },
    "Right-Social Authoritarianism": {
        economics: ["third_way", "residualism"],
        resource_management: ["flat_taxation", "Progressive_Taxation", "mixed_lvt"],
        culture: ["liberal_conservatism", "conservatism"],
        authority: ["autocracy", "stratocracy"],
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        technology: ["industrialism", "instrumentalism"],
        social_control: "securitism",
        territorial_organization: "centralism"
    },
    "Kjærsgaardism": {
        economics: "rhine_capitalism",
        resource_management: "Progressive_Taxation",
        culture: "traditionalist_conservatism",
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: "Isolationism",
        social_control: ["legal_moralism", "disciplinarianism"],
        territorial_organization: "centralism"
    },
    "Kekkonism": {
        economics: "neo_corporatism",
        culture: "progressive_conservatism",
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: ["Realpolitik", "armed_neutrality"],
        technology: "industrialism",
        territorial_organization: ["centralism", "regionalism"]
    },
    "Putinism": {
        economics: ["state_capitalism", "dirigisme", "corporatocracy"],
        resource_management: "flat_taxation",
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: "autocracy",
        nation: "civilizationism",
        foreign: ["Imperialism", "Realpolitik", "irredentism"],
        technology: ["industrialism", "instrumentalism"],
        social_control: "securitism",
        territorial_organization: ["centralism", "regionalism"]
    },
    "Post-Soviet Autocracy": {
        economics: ["state_capitalism", "corporatocracy"],
        resource_management: ["flat_taxation", "Progressive_Taxation"],
        culture: "conservatism",
        authority: "autocracy",
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        technology: "industrialism",
        social_control: "securitism",
        territorial_organization: "centralism"
    },

    /* ===============================
        4. CENTRIST
    =============================== */
    "Radicalism": {
        economics: ["social_solidarity_economy", "social_market"],
        culture: ["civil_liberalism", "secular_humanism"],
        authority: ["representative_democracy", "referendum_democracy", "demarchy"],
        nation: "civic_nationalism",
        foreign: "Internationalism"
    },
    "Third Way": {
        economics: "third_way",
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Globalism", "Interventionism"],
        technology: "post_industrialism"
    },
    "Christian Democracy": {
        economics: ["social_market", "paternalistic_capitalism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["liberal_conservatism", "conservative_liberalism", "progressive_conservatism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Internationalism"
    },
    "Compassionate Conservatism": {
        economics: "residualism",
        culture: ["progressive_conservatism", "conservative_liberalism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Globalism", "Interventionism"],
        social_control: "civic_paternalism"
    },
    "Rockefeller Republicanism": {
        economics: ["keynesianism", "social_market"],
        culture: "liberal_conservatism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Realpolitik", "Internationalism"]
    },
    "Democratic Transhumanism": {
        economics: "basic_income_capitalism",
        culture: ["progressivism", "social_progressivism"],
        authority: "representative_democracy",
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        technology: ["transhumanism", "technogaianism"]
    },
    "Neo-Solidarism": {
        economics: "social_solidarity_economy",
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Internationalism",
        technology: ["ecomodernism", "environmentalism"]
    },
    "Steppe Eurasianism": {
        economics: ["dirigisme", "state_capitalism"],
        culture: "progressive_conservatism",
        authority: "technocracy",
        nation: "civilizationism",
        foreign: "Realpolitik",
        social_control: "civic_paternalism"
    },
    "Classical Kemalism": {
        economics: "dirigisme",
        resource_management: "Progressive_Taxation",
        culture: ["progressivism", "secular_humanism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Non_Interventionism",
        technology: "industrialism",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Catholic Social Teaching": {
        economics: ["paternalistic_capitalism", "social_corporatism"],
        resource_management: "Progressive_Taxation",
        culture: ["progressive_conservatism", "conservatism"],
        authority: "representative_democracy",
        nation: "communitarianism",
        foreign: "Internationalism",
        technology: ["conservationism", "environmentalism"],
        social_control: "civic_paternalism",
        territorial_organization: ["regionalism", "confederalism", "federalism", "subsidiarity"]
    },
    "Bleeding-Heart Authoritarianism": {
        economics: ["ordnungspolitik", "laissez_faire"],
        resource_management: "flat_taxation",
        culture: ["progressivism", "social_progressivism"],
        authority: "autocracy",
        nation: ["Cosmopolitanism", "civic_nationalism"],
        foreign: "Globalism",
        technology: "instrumentalism",
        social_control: "permissivism",
        territorial_organization: "centralism"
    },
    "Austro-Corporatism": {
        economics: "neo_corporatism",
        culture: ["liberal_conservatism", "progressive_conservatism"],
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: "armed_neutrality",
        territorial_organization: "federalism"
    },
    "Davos System": {
        economics: ["rhine_capitalism", "third_way"],
        resource_management: ["mixed_lvt", "Progressive_Taxation"],
        culture: ["progressivism", "civil_liberalism"],
        authority: "technocracy",
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        technology: ["post_industrialism", "ecomodernism"],
        social_control: "civic_paternalism",
        territorial_organization: "federalism"
    },

    /* ===============================
        5. CENTRE-LEFT
    =============================== */
    "Nordic Model": {
        economics: "neo_corporatism",
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["social_progressivism", "civil_liberalism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "Globalism"],
        social_control: "civic_paternalism",
        territorial_organization: ["centralism", "federalism", "regionalism"]
    },
    "Social Democracy": {
        economics: ["social_market", "rhine_capitalism", "keynesianism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "Globalism", "alter_globalism", "armed_neutrality"],
        technology: ["industrialism", "instrumentalism"],
        social_control: "civic_paternalism",
        territorial_organization: ["federalism", "centralism", "regionalism"]
    },
    "Conservative Social Democracy": {
        economics: ["social_market", "social_solidarity_economy"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "conservatism",
        authority: "representative_democracy",
        nation: ["communitarianism", "cultural_nationalism"],
        foreign: ["Internationalism", "Realpolitik", "armed_neutrality"]
    },
    "Social Distributism": {
        economics: "social_distributism",
        resource_management: ["Progressive_Taxation", "mixed_lvt", "lvt"],
        culture: ["social_progressivism", "civil_liberalism"],
        authority: "representative_democracy",
        nation: "communitarianism",
        foreign: "alter_globalism"
    },
    "Liberal Socialism": {
        economics: "market_socialism",
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "Globalism"]
    },
    "Social Georgism": {
        economics: "social_market",
        resource_management: ["lvt", "mixed_lvt"],
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Globalism", "Internationalism"]
    },
    "Agrarian Social Democracy": {
        economics: ["social_distributism", "social_market"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "progressive_conservatism",
        authority: "representative_democracy",
        nation: "communitarianism",
        foreign: ["Internationalism", "alter_globalism", "armed_neutrality"],
        technology: "agrarianism"
    },
    "Progressive Corporatism": {
        economics: ["neo_corporatism", "rhine_capitalism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "social_progressivism",
        authority: "representative_democracy",
        foreign: "Internationalism"
    },
    "Left-Gaullism": {
        economics: ["dirigisme", "social_solidarity_economy"],
        resource_management: "Progressive_Taxation",
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "armed_neutrality"
    },
    "Green Social Democracy": {
        economics: ["social_market", "keynesianism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["social_progressivism", "progressivism"],
        authority: "representative_democracy",
        nation: ["civic_nationalism", "Cosmopolitanism"],
        foreign: ["Internationalism", "alter_globalism", "armed_neutrality", "Globalism"],
        technology: "environmentalism",
        social_control: "civic_paternalism",
        territorial_organization: ["federalism", "regionalism", "centralism"]
    },
    "Geo-Social Democracy": {
        economics: ["social_corporatism", "keynesianism"],
        resource_management: ["lvt", "mixed_lvt"],
        culture: ["social_progressivism", "progressivism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "alter_globalism", "armed_neutrality", "Globalism"],
        technology: ["environmentalism", "instrumentalism"],
        social_control: "civic_paternalism",
        territorial_organization: ["federalism", "centralism", "regionalism"]
    },
    "Christian Social Democracy": {
        economics: ["social_solidarity_economy", "social_market"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "progressive_conservatism",
        authority: "representative_democracy",
        nation: ["communitarianism", "civic_nationalism"],
        foreign: ["Internationalism", "alter_globalism", "armed_neutrality", "Globalism"],
        technology: ["environmentalism", "instrumentalism"],
        social_control: "civic_paternalism",
        territorial_organization: ["federalism", "regionalism"]
    },
    "Police Labourism": {
        economics: ["social_corporatism", "keynesianism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["social_progressivism", "progressive_conservatism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Realpolitik", "Interventionism"],
        technology: ["industrialism", "instrumentalism"],
        social_control: ["securitism", "retributivism"],
        territorial_organization: "centralism"
    },
    "Left Kemalism": {
        economics: ["state_socialism", "market_socialism"],
        resource_management: "Confiscatory_Taxation",
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "armed_neutrality",
        technology: "industrialism",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Left-Social Authoritarianism": {
        economics: ["social_corporatism", "guild_socialism", "dirigisme"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["progressive_conservatism", "alternative_modernism", "social_progressivism"],
        authority: "autocracy",
        nation: ["pan_nationalism", "civic_nationalism"],
        foreign: ["Realpolitik", "Non_Interventionism"],
        technology: "industrialism",
        social_control: ["disciplinarianism", "civic_paternalism"],
        territorial_organization: "centralism"
    },
    "Progressive Social Authoritarianism": {
        economics: ["state_capitalism", "social_corporatism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["progressivism", "social_progressivism"],
        authority: ["autocracy", "partocracy"],
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        technology: "industrialism",
        social_control: ["disciplinarianism", "regimentalism"],
        territorial_organization: "centralism"
    },
    "Left-Wing Populism": {
        economics: ["keynesianism", "market_socialism"],
        resource_management: "Confiscatory_Taxation",
        culture: "social_progressivism",
        authority: ["referendum_democracy", "representative_democracy"],
        nation: "civic_nationalism",
        foreign: "alter_globalism",
        technology: ["environmentalism", "instrumentalism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "regionalism"]
    },
    "Left-Social Democracy": {
        economics: "market_socialism",
        resource_management: "Confiscatory_Taxation",
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "communitarianism",
        foreign: ["Internationalism", "alter_globalism"],
        technology: "industrialism",
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Social-Helveticism": {
        economics: ["social_market", "rhine_capitalism", "keynesianism"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "social_progressivism",
        authority: "referendum_democracy",
        nation: "civic_nationalism",
        foreign: "armed_neutrality",
        social_control: "civic_paternalism",
        territorial_organization: "federalism"
    },
    "Longism": {
        economics: ["keynesianism", "paternalistic_capitalism"],
        resource_management: "Confiscatory_Taxation",
        culture: "progressive_conservatism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Isolationism",
        technology: ["industrialism", "instrumentalism"],
        social_control: "civic_paternalism",
        territorial_organization: "federalism"
    },

    /* ===============================
        6. LIBERAL
    =============================== */
    "Classical Liberalism": {
        economics: "laissez_faire",
        resource_management: ["flat_taxation", "tariff_funding", "lvt", "Voluntaryism"],
        culture: "civil_liberalism",
        authority: ["minarchism", "representative_democracy"],
        nation: "civic_nationalism",
        foreign: "Non_Interventionism",
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "centralism", "regionalism"]
    },
    "Neoliberalism": {
        economics: ["residualism", "laissez_faire"],
        resource_management: "flat_taxation",
        culture: ["civil_liberalism", "progressivism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Globalism",
        technology: ["post_industrialism", "extropianism"]
    },
    "National Liberalism": {
        economics: "laissez_faire",
        resource_management: "flat_taxation",
        culture: "conservative_liberalism",
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: "Realpolitik"
    },
    "Social Liberalism": {
        economics: "social_market",
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: ["civil_liberalism", "social_progressivism", "progressivism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Globalism", "Internationalism"],
        technology: "post_industrialism",
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "centralism", "regionalism"]
    },
    "Ordoliberalism": {
        economics: "ordnungspolitik",
        culture: ["conservative_liberalism", "liberal_conservatism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Globalism", "Internationalism"]
    },
    "Bleeding-Heart Liberalism": {
        economics: "basic_income_capitalism",
        resource_management: "Progressive_Taxation",
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        social_control: "civil_libertarianism"
    },
    "Geo-Liberalism": {
        economics: ["basic_income_capitalism", "laissez_faire"],
        resource_management: ["lvt", "mixed_lvt"],
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: ["civic_nationalism", "Cosmopolitanism"],
        foreign: "Globalism"
    },
    "Green Liberalism": {
        economics: "social_market",
        resource_management: "Progressive_Taxation",
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: ["civic_nationalism", "Cosmopolitanism"],
        foreign: "Globalism",
        technology: "environmentalism"
    },
    "Whiggism": {
        economics: "laissez_faire",
        culture: "conservative_liberalism",
        authority: "constitutional",
        nation: "civic_nationalism",
        foreign: "Realpolitik"
    },
    "Muscular Liberalism": {
        economics: ["third_way", "residualism"],
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: ["cultural_nationalism", "civilizationism"],
        foreign: "Interventionism",
        social_control: "civic_paternalism"
    },
    "Transatlantic Federalism": {
        economics: ["ordnungspolitik", "social_market", "third_way"],
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: "civilizationism",
        foreign: ["Globalism", "Interventionism", "Internationalism"],
        technology: ["post_industrialism", "industrialism"],
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "New Deal Liberalism": {
        economics: "keynesianism",
        resource_management: "Progressive_Taxation",
        culture: ["civil_liberalism", "progressive_conservatism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "Interventionism"],
        technology: "industrialism",
        social_control: "civic_paternalism",
        territorial_organization: "federalism"
    },
    "Venizelism": {
        economics: ["social_solidarity_economy", "social_market"],
        resource_management: "Progressive_Taxation",
        culture: ["conservative_liberalism", "liberal_conservatism"],
        authority: "representative_democracy",
        nation: ["pan_nationalism", "cultural_nationalism"],
        foreign: ["Imperialism", "irredentism"],
        technology: ["industrialism", "instrumentalism"],
        social_control: "civic_paternalism",
        territorial_organization: "centralism"
    },
    "Liberal Social Authoritarianism": {
        economics: ["third_way", "keynesianism"],
        resource_management: "Progressive_Taxation",
        culture: ["social_progressivism", "civil_liberalism"],
        authority: ["partocracy", "autocracy"],
        nation: "civic_nationalism",
        foreign: ["Globalism", "Interventionism"],
        technology: ["instrumentalism", "industrialism"],
        social_control: ["securitism", "disciplinarianism"],
        territorial_organization: "centralism"
    },
    "Technoliberalism": {
        economics: "ordnungspolitik",
        resource_management: "Progressive_Taxation",
        culture: "civil_liberalism",
        authority: "representative_democracy",
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        technology: "post_industrialism",
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "American Model": {
        economics: ["laissez_faire", "residualism"],
        resource_management: "Progressive_Taxation",
        culture: ["civil_liberalism", "conservative_liberalism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Interventionism",
        technology: ["industrialism", "instrumentalism"],
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "Techno-Neoliberalism": {
        economics: ["residualism", "laissez_faire"],
        resource_management: "flat_taxation",
        culture: ["civil_liberalism", "progressivism"],
        authority: "technocracy",
        nation: "Cosmopolitanism",
        foreign: ["Globalism", "Interventionism"],
        technology: "post_industrialism",
        social_control: ["securitism", "civic_paternalism"],
        territorial_organization: ["centralism", "federalism", "regionalism"]
    },
    "Tsaingwenism": {
        economics: "third_way",
        resource_management: ["Progressive_Taxation", "mixed_lvt"],
        culture: "progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Globalism",
        technology: "environmentalism",
        social_control: "civil_libertarianism",
        territorial_organization: "centralism"
    },
    "Liberal Imperialism": {
        economics: ["laissez_faire", "ordnungspolitik"],
        resource_management: ["flat_taxation", "Progressive_Taxation"],
        culture: ["conservative_liberalism", "civil_liberalism", "liberal_conservatism"],
        authority: ["representative_democracy", "meritocracy"],
        nation: ["cultural_nationalism", "romantic_nationalism", "civic_nationalism"],
        foreign: "Imperialism",
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "centralism", "regionalism"]
    },
    "Liberal Meritocracy": {
        economics: ["social_market", "third_way"],
        resource_management: "Progressive_Taxation",
        culture: "civil_liberalism",
        authority: "meritocracy",
        nation: "civic_nationalism",
        foreign: ["Interventionism", "Globalism"],
        technology: ["ecomodernism", "post_industrialism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "centralism"]
    },
    
    /* ===============================
        7. SOCIALIST
    =============================== */
    "Christian Socialism": {
        economics: ["utopian_socialism", "guild_socialism"],
        culture: ["social_progressivism", "progressive_conservatism"],
        authority: "representative_democracy",
        nation: "communitarianism",
        foreign: "Non_Interventionism"
    },
    "National Bolshevism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: ["perennial_traditionalism", "reactionary_modernism"],
        authority: "partocracy",
        nation: ["cultural_nationalism", "romantic_nationalism", "civilizationism"],
        foreign: "Imperialism"
    },
    "Democratic Socialism": {
        economics: ["market_socialism", "free_socialism", "state_socialism"],
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["alter_globalism", "Internationalism"]
    },
    "Conservative Socialism": {
        economics: "state_socialism",
        resource_management: "Confiscatory_Taxation",
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: "partocracy",
        nation: ["cultural_nationalism", "communitarianism"],
        foreign: "Realpolitik"
    },
    "Paleosocialism": {
        economics: "state_socialism",
        resource_management: "Confiscatory_Taxation",
        culture: "paleoconservatism",
        nation: ["communitarianism", "cultural_nationalism"],
        foreign: "Isolationism"
    },
    "Cybernetic Socialism": {
        economics: ["state_socialism", "guild_socialism"],
        culture: ["social_progressivism", "progressivism"],
        authority: ["technocracy", "digital_democracy"],
        foreign: "Internationalism",
        technology: "prometheanism"
    },
    "Utopian Communitarianism": {
        economics: "utopian_socialism",
        resource_management: ["collective_distribution", "Voluntaryism"],
        culture: ["social_progressivism", "progressivism"],
        authority: "communalism",
        nation: "communitarianism",
        foreign: ["Non_Interventionism", "alter_globalism"],
        social_control: ["permissivism", "civil_libertarianism"],
        territorial_organization: "municipalism"
    },
    "Syndicalist Republicanism": {
        economics: "syndicalism",
        resource_management: ["collective_distribution", "Progressive_Taxation"],
        culture: "social_progressivism",
        authority: ["representative_democracy", "syndicracy"],
        nation: "civic_nationalism",
        foreign: ["Internationalism", "armed_neutrality"],
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "centralism", "regionalism", "subsidiarity"]
    },
    "Left-Eurasianism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "alternative_modernism",
        authority: "partocracy",
        nation: "civilizationism",
        foreign: "alter_globalism",
        social_control: "regimentalism"
    },
    "Socialist Technoliberalism": {
        economics: "market_socialism",
        resource_management: ["Progressive_Taxation", "Confiscatory_Taxation"],
        culture: ["progressivism", "civil_liberalism"],
        authority: ["representative_democracy", "digital_democracy"],
        nation: ["Cosmopolitanism", "civic_nationalism"],
        foreign: "alter_globalism",
        technology: ["ecomodernism", "prometheanism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["federalism", "regionalism"]
    },
    "Mugabeism": {
        economics: ["agrarian_socialism", "state_socialism"],
        resource_management: ["Confiscatory_Taxation", "collective_distribution"],
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: ["autocracy", "partocracy"],
        nation: "pan_nationalism",
        foreign: ["Non_Interventionism", "alter_globalism"],
        technology: "instrumentalism",
        social_control: ["disciplinarianism", "legal_moralism"],
        territorial_organization: "centralism"
    },
    "Old Left-Populism": {
        economics: ["state_socialism", "agrarian_socialism"],
        resource_management: "Confiscatory_Taxation",
        culture: ["conservatism", "traditionalist_conservatism"],
        authority: "representative_democracy",
        nation: "cultural_nationalism",
        foreign: ["Non_Interventionism", "alter_globalism"],
        technology: ["industrialism", "instrumentalism"],
        social_control: "legal_moralism",
        territorial_organization: ["centralism", "regionalism"]
    },
    "Left-State Liberalism": {
        economics: ["state_capitalism", "dirigisme"],
        resource_management: "Progressive_Taxation",
        culture: ["postmodernism", "progressivism"],
        authority: ["autocracy", "partocracy"],
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        technology: "instrumentalism",
        social_control: ["totalism", "disciplinarianism"],
        territorial_organization: ["hypercentralism", "centralism"]
    },
    "American Technocracy": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "progressivism",
        authority: "technocracy",
        nation: "civic_nationalism",
        foreign: "Isolationism",
        technology: "prometheanism",
        social_control: "civic_paternalism",
        territorial_organization: "federalism"
    },
    "Fabian Socialism": {
        economics: ["state_socialism", "dirigisme"],
        resource_management: "Progressive_Taxation",
        culture: "progressivism",
        authority: ["representative_democracy", "technocracy"],
        nation: "civic_nationalism",
        foreign: "Internationalism",
        technology: ["post_industrialism", "instrumentalism"],
        social_control: "civic_paternalism",
        territorial_organization: "municipalism"
    },
    "Ujamaa": {
        economics: "agrarian_socialism",
        resource_management: "collective_distribution",
        culture: "progressive_conservatism",
        authority: "partocracy",
        nation: "pan_nationalism",
        foreign: "Non_Interventionism",
        technology: "agrarianism",
        social_control: "civic_paternalism",
        territorial_organization: "regionalism"
    },

    /* ===============================
        8. MARXIST
    =============================== */
    "Italian Left Communism": {
        economics: "communization",
        resource_management: "collective_distribution",
        culture: ["progressivism", "social_progressivism"],
        authority: "partocracy",
        nation: "Cosmopolitanism",
        foreign: "Internationalism"
    },
    "Juche": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: ["conservatism", "traditionalist_conservatism", "reactionary_modernism"],
        authority: "autocracy",
        nation: "cultural_nationalism",
        foreign: "Isolationism",
        technology: "industrialism",
        social_control: "regimentalism"
    },
    "Mao Zedong Thought": {
        economics: "agrarian_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "partocracy",
        nation: ["cultural_nationalism", "civic_nationalism"],
        foreign: "Realpolitik"
    },
    "Marxism Leninism Maoism": {
        economics: "agrarian_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "partocracy",
        nation: "pan_nationalism",
        foreign: ["Internationalism", "Interventionism", "alter_globalism"]
    },
    "Trotskyism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "partocracy",
        nation: "Cosmopolitanism",
        foreign: "Internationalism"
    },
    "Marxism-Leninism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "partocracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "Interventionism"]
    },
    "Stalinism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "conservatism",
        authority: ["partocracy", "autocracy"],
        nation: "cultural_nationalism",
        foreign: "Realpolitik",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: ["centralism", "hypercentralism"]
    },
    "Titoism": {
        economics: "market_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "partocracy",
        nation: "civic_nationalism",
        foreign: "Non_Interventionism",
        territorial_organization: ["federalism", "regionalism"]
    },
    "Dengism": {
        economics: "state_capitalism",
        culture: "alternative_modernism",
        authority: "partocracy",
        nation: "civic_nationalism",
        foreign: "Realpolitik",
        technology: ["industrialism", "post_industrialism"],
        social_control: "disciplinarianism",
        territorial_organization: ["centralism", "regionalism"]
    },
    "Luxemburgism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "councilism",
        nation: "Cosmopolitanism",
        foreign: "Internationalism"
    },
    "Eurocommunism": {
        economics: "market_socialism",
        resource_management: ["Progressive_Taxation", "Confiscatory_Taxation"],
        culture: "social_progressivism",
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: "Internationalism"
    },
    "Hoxhaism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "conservatism",
        authority: "partocracy",
        nation: "cultural_nationalism",
        foreign: "Isolationism",
        technology: "industrialism",
        social_control: "totalism"
    },
    "Castroism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: ["autocracy", "partocracy"],
        nation: "cultural_nationalism",
        foreign: "Interventionism",
        technology: "industrialism"
    },
    "Guevarism": {
        economics: "agrarian_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "autocracy",
        foreign: "Interventionism"
    },
    "Cyber-Communism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "technocracy",
        foreign: "Internationalism",
        technology: "prometheanism"
    },
    "De Leonism": {
        economics: "syndicalism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: ["councilism", "syndicracy"],
        nation: "Cosmopolitanism",
        foreign: "Internationalism",
        technology: "industrialism"
    },
    "National Communism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "partocracy",
        nation: "cultural_nationalism",
        foreign: "Realpolitik",
        technology: ["ecomodernism", "industrialism"],
        social_control: ["civic_paternalism", "disciplinarianism"],
        territorial_organization: "centralism"
    },

    /* ===============================
        9. LEFT-LIBERTARIAN
    =============================== */
    "Communalism": {
        economics: "free_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "communalism",
        nation: ["communitarianism", "Cosmopolitanism"],
        foreign: ["alter_globalism", "Internationalism"],
        technology: "environmentalism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Minarcho-Socialism": {
        economics: ["free_socialism", "market_socialism"],
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "minarchism",
        foreign: "Non_Interventionism"
    },
    "Council Communism": {
        economics: ["free_socialism", "communization"],
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "councilism",
        nation: "Cosmopolitanism",
        foreign: "Internationalism"
    },
    "Libertarian Socialism": {
        economics: ["free_socialism", "parecon"],
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: ["councilism", "communalism"],
        nation: "Cosmopolitanism",
        foreign: ["alter_globalism", "Internationalism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Democratic Confederalism": {
        economics: ["free_socialism", "parecon"],
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "communalism",
        nation: "multiculturalism",
        foreign: "alter_globalism",
        technology: ["environmentalism", "convivialism"],
        social_control: "civil_libertarianism",
        territorial_organization: "municipalism"
    },
    "Guild Socialism": {
        economics: "guild_socialism",
        resource_management: ["collective_distribution", "Progressive_Taxation", "Confiscatory_Taxation"],
        culture: "social_progressivism",
        authority: "councilism",
        nation: "communitarianism",
        foreign: "Non_Interventionism",
        territorial_organization: ["municipalism", "confederalism", "federalism"]
    },
    "Eco-Socialism": {
        economics: "free_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "communalism",
        foreign: "Internationalism",
        technology: ["conservationism", "environmentalism"]
    },
    "Fourierism": {
        economics: "utopian_socialism",
        culture: "social_progressivism",
        authority: ["communalism", "anarchism"],
        nation: "communitarianism",
        foreign: "alter_globalism",
        social_control: "permissivism"
    },
    "Gandhian Socialism": {
        economics: "market_socialism",
        culture: "religious_traditionalism",
        authority: "communalism",
        nation: "communitarianism",
        foreign: ["Internationalism", "pacifism"],
        technology: ["agrarianism", "convivialism"],
        social_control: "reputationalism",
        territorial_organization: "municipalism"
    },
    "Scythianism": {
        economics: "agrarian_socialism",
        culture: "alternative_modernism",
        authority: ["referendum_democracy", "anarchism"],
        nation: "civilizationism",
        social_control: "permissivism"
    },
    "Proutism": {
        economics: ["free_socialism", "market_socialism"],
        resource_management: "collective_distribution",
        culture: ["progressivism", "social_progressivism"],
        authority: "referendum_democracy",
        nation: "Cosmopolitanism",
        foreign: ["Globalism", "alter_globalism"],
        technology: "conservationism",
        social_control: "civil_libertarianism",
        territorial_organization: ["confederalism", "municipalism"]
    },

    /* ===============================
        10. CENTRE-LIBERTARIAN
    =============================== */
    "Geolibertarianism": {
        economics: "laissez_faire",
        resource_management: "lvt",
        culture: "civil_liberalism",
        authority: "minarchism",
        foreign: ["Non_Interventionism", "Globalism"],
        social_control: "civil_libertarianism"
    },
    "Social Libertarianism": {
        economics: "basic_income_capitalism",
        resource_management: "lvt",
        culture: "social_progressivism",
        authority: "minarchism",
        nation: "civic_nationalism",
        foreign: "Globalism",
        social_control: "civil_libertarianism"
    },
    "Helvetic Model": {
        economics: ["ordnungspolitik", "social_market", "laissez_faire"],
        culture: ["civil_liberalism", "conservative_liberalism"],
        authority: "referendum_democracy",
        nation: "civic_nationalism",
        foreign: "armed_neutrality",
        social_control: "civil_libertarianism",
        territorial_organization: ["confederalism", "federalism"]
    },
    "Bleeding-Heart Libertarianism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: ["progressivism", "social_progressivism"],
        authority: "minarchism",
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        social_control: "civil_libertarianism"
    },
    "Minarcho-Distributism": {
        economics: ["free_market_distributism", "distributism"],
        culture: "traditionalist_conservatism",
        authority: "minarchism",
        nation: "communitarianism",
        technology: "neoluddism"
    },
    "Pirate Politics": {
        economics: "basic_income_capitalism",
        culture: ["civil_liberalism", "social_progressivism"],
        authority: "digital_democracy",
        nation: "Cosmopolitanism",
        foreign: ["Globalism", "alter_globalism"],
        technology: "prometheanism",
        social_control: "civil_libertarianism"
    },
    "Agorist Minarchism": {
        economics: "countereconomics",
        culture: "civil_liberalism",
        authority: "minarchism",
        foreign: "Non_Interventionism",
        social_control: "civil_libertarianism"
    },
    "Communal Distributism": {
        economics: "social_distributism",
        culture: "social_progressivism",
        authority: "communalism",
        nation: "communitarianism",
        foreign: "alter_globalism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Yangism": {
        economics: "basic_income_capitalism",
        resource_management: "Progressive_Taxation",
        culture: ["progressivism", "social_progressivism"],
        authority: "representative_democracy",
        nation: "civic_nationalism",
        foreign: ["Internationalism", "Interventionism"],
        technology: "ecomodernism",
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "Libertarian Social Democracy": {
        economics: ["social_market", "basic_income_capitalism"],
        resource_management: ["lvt", "Progressive_Taxation", "mixed_lvt"],
        culture: "social_progressivism",
        authority: "minarchism",
        nation: ["Cosmopolitanism", "civic_nationalism"],
        foreign: ["Non_Interventionism", "Globalism"],
        technology: ["environmentalism", "instrumentalism"],
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "Progressive Helveticism": {
        economics: "social_market",
        culture: ["progressivism", "social_progressivism"],
        authority: "referendum_democracy",
        nation: ["civic_nationalism", "communitarianism"],
        foreign: "armed_neutrality",
        technology: ["ecomodernism", "environmentalism"],
        social_control: ["permissivism", "civil_libertarianism"],
        territorial_organization: ["federalism", "confederalism"]
    },
    "Cosmopolitan Distributism": {
        economics: "social_distributism",
        resource_management: ["collective_distribution", "Progressive_Taxation"],
        culture: "social_progressivism",
        authority: "communalism",
        nation: "Cosmopolitanism",
        foreign: "alter_globalism",
        technology: ["conservationism", "environmentalism"],
        social_control: ["permissivism", "civil_libertarianism"],
        territorial_organization: "municipalism"
    },
    "Cyber-Federalism": {
        economics: ["social_solidarity_economy", "social_market", "ordnungspolitik"],
        resource_management: ["flat_taxation", "mixed_lvt"],
        culture: ["conservative_liberalism", "civil_liberalism"],
        authority: "digital_democracy",
        nation: ["communitarianism", "civic_nationalism"],
        foreign: ["Realpolitik", "armed_neutrality"],
        technology: ["ecomodernism", "post_industrialism"],
        social_control: ["permissivism", "civil_libertarianism"],
        territorial_organization: "federalism"
    },

    /* ===============================
        11. RIGHT-LIBERTARIAN
    =============================== */
    "Neolibertarianism": {
        economics: "laissez_faire",
        resource_management: "flat_taxation",
        culture: "civil_liberalism",
        authority: "minarchism",
        nation: "civic_nationalism",
        foreign: "Interventionism",
        social_control: ["securitism", "civil_libertarianism"],
        territorial_organization: "federalism"
    },
    "Libertarian Conservatism": {
        economics: "laissez_faire",
        resource_management: "flat_taxation",
        culture: ["conservatism", "liberal_conservatism", "conservative_liberalism", "traditionalist_conservatism"],
        authority: ["minarchism", "representative_democracy"],
        nation: "cultural_nationalism",
        foreign: "Non_Interventionism",
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "National Libertarianism": {
        economics: "laissez_faire",
        resource_management: "flat_taxation",
        culture: ["paleoconservatism", "conservatism"],
        authority: "minarchism",
        nation: ["cultural_nationalism", "ethnic_nationalism"],
        foreign: "Isolationism",
        social_control: "securitism",
        territorial_organization: "federalism"
    },
    "Paleolibertarianism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: ["paleoconservatism", "traditionalist_conservatism"],
        authority: "minarchism",
        nation: ["cultural_nationalism", "communitarianism"],
        foreign: "Non_Interventionism",
        social_control: "civil_libertarianism",
        territorial_organization: ["confederalism", "federalism"]
    },
    "Dark Enlightenment": {
        economics: ["laissez_faire", "cameralism"],
        culture: "neoreactionaryism",
        authority: "neocameralism",
        technology: ["technocapitalism", "posthumanism"],
        social_control: ["securitism", "totalism"],
        territorial_organization: ["centralism", "hypercentralism"]
    },
    "Cyber-Libertarianism": {
        economics: "laissez_faire",
        culture: "civil_liberalism",
        authority: "minarchism",
        nation: "Cosmopolitanism",
        foreign: ["Globalism", "Non_Interventionism"],
        technology: ["technocapitalism", "extropianism"],
        social_control: "civil_libertarianism"
    },
    "Objectivism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: ["civil_liberalism", "secular_humanism"],
        authority: "minarchism",
        nation: "egoism",
        foreign: "Non_Interventionism",
        technology: "industrialism",
        social_control: "civil_libertarianism"
    },
    "Fusionism": {
        economics: "laissez_faire",
        culture: "traditionalist_conservatism",
        authority: ["minarchism", "representative_democracy"],
        nation: "civic_nationalism",
        foreign: ["Interventionism", "Realpolitik"],
        technology: "industrialism",
        social_control: "civil_libertarianism",
        territorial_organization: "federalism"
    },
    "Minarcho-Avaritionism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: "postmodernism",
        authority: "minarchism",
        nation: "egoism",
        technology: "technocapitalism",
        social_control: "permissivism"
    },

    /* ===============================
        12. LEFT-ANARCHIST
    =============================== */
    "Anarcho-Syndicalism": {
        economics: "syndicalism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "anarchism",
        foreign: "Internationalism",
        technology: "industrialism",
        social_control: "civil_libertarianism",
        territorial_organization: "confederalism"
    },
    "Left-Agorism": {
        economics: "countereconomics",
        resource_management: ["collective_distribution", "Voluntaryism"],
        culture: "social_progressivism",
        authority: "anarchism",
        nation: "Cosmopolitanism",
        foreign: "alter_globalism",
        social_control: ["civil_libertarianism", "permissivism"],
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Lys Noir": {
        economics: ["agrarian_socialism", "feudalism"],
        culture: "reactionaryism",
        authority: "anarcho_monarchism",
        nation: ["ethnic_nationalism", "romantic_nationalism"],
        foreign: "Isolationism",
        technology: ["neoluddism", "conservationism"],
        social_control: "legal_moralism",
        territorial_organization: ["regionalism", "confederalism"]
    },
    "Anarcho-Communism": {
        economics: "communization",
        resource_management: "collective_distribution",
        culture: ["social_progressivism", "progressivism"],
        authority: "anarchism",
        nation: ["Cosmopolitanism", "communitarianism"],
        foreign: ["Internationalism", "alter_globalism"],
        technology: ["environmentalism", "industrialism"],
        social_control: ["civil_libertarianism", "permissivism"],
        territorial_organization: ["confederalism", "municipalism"]
    },
    "Solarpunk Anarchism": {
        economics: "free_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "communalism",
        nation: "Cosmopolitanism",
        foreign: "alter_globalism",
        technology: ["technogaianism", "convivialism"],
        social_control: ["permissivism", "reputationalism"],
        territorial_organization: "municipalism"
    },
    "Christian Anarchism": {
        economics: ["utopian_socialism", "distributism"],
        resource_management: "Voluntaryism",
        culture: "religious_traditionalism",
        authority: "anarchism",
        nation: "communitarianism",
        foreign: "pacifism",
        social_control: "reputationalism",
        territorial_organization: "municipalism"
    },
    "Insurrectionary Anarchism": {
        economics: ["communization", "free_socialism"],
        resource_management: "collective_distribution",
        culture: ["postmodernism", "social_progressivism"],
        authority: "anarchism",
        nation: "egoism",
        foreign: "alter_globalism",
        social_control: "permissivism",
        territorial_organization: "municipalism"
    },
    "Catholic Workerism": {
        economics: ["mutual_distributism", "utopian_socialism"],
        resource_management: "collective_distribution",
        culture: "religious_traditionalism",
        authority: "anarchism",
        nation: "communitarianism",
        foreign: ["Non_Interventionism", "pacifism"],
        technology: ["agrarianism", "convivialism"],
        social_control: "reputationalism",
        territorial_organization: "municipalism"
    },

    /* ===============================
        13. CENTRE-ANARCHIST
    =============================== */
    "Mutualism": {
        economics: "mutualism",
        culture: ["civil_liberalism", "social_progressivism"],
        authority: "anarchism",
        nation: "communitarianism",
        foreign: ["alter_globalism", "Internationalism"],
        social_control: "civil_libertarianism",
        territorial_organization: "confederalism"
    },
    "Market Anarchism": {
        economics: ["market_socialism", "mutualism"],
        culture: "civil_liberalism",
        authority: "anarchism",
        nation: "Cosmopolitanism",
        foreign: ["alter_globalism", "Non_Interventionism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["confederalism", "municipalism"]
    },
    "Mutualist Distributism": {
        economics: "mutual_distributism",
        culture: ["traditionalist_conservatism", "social_progressivism"],
        authority: "anarchism",
        nation: "communitarianism",
        foreign: ["Non_Interventionism", "alter_globalism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Panarchism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: "civil_liberalism",
        authority: "polycentrism",
        nation: "Cosmopolitanism",
        foreign: "Non_Interventionism",
        social_control: "permissivism"
    },
    "Geoanarchism": {
        economics: ["laissez_faire", "mutualism"],
        resource_management: "lvt",
        culture: "civil_liberalism",
        authority: "anarchism",
        nation: "Cosmopolitanism",
        foreign: ["Non_Interventionism", "alter_globalism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Green Anarchism": {
        economics: "free_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: "anarchism",
        nation: "communitarianism",
        foreign: "alter_globalism",
        technology: ["conservationism", "environmentalism"],
        social_control: "civil_libertarianism",
        territorial_organization: ["confederalism", "municipalism"]
    },
    "Anarcho-Primitivism": {
        economics: "free_socialism",
        authority: "anarchism",
        nation: "Tribalism",
        foreign: "Isolationism",
        technology: "primitivism",
        social_control: "permissivism"
    },
    "Post-Anarchism": {
        economics: "free_socialism",
        culture: "postmodernism",
        authority: "anarchism",
        nation: "Cosmopolitanism",
        foreign: "alter_globalism",
        social_control: ["permissivism", "civil_libertarianism"],
        territorial_organization: "confederalism"
    },
    "Post-left": {
        economics: "communization",
        resource_management: "collective_distribution",
        culture: ["postmodernism", "amoralism"],
        authority: "anarchism",
        nation: "egoism",
        social_control: "permissivism"
    },
    "Anarcho-Transhumanism": {
        economics: ["free_socialism", "mutualism", "communization"],
        culture: "social_progressivism",
        authority: "anarchism",
        technology: ["transhumanism", "technogaianism"],
        social_control: "permissivism",
        territorial_organization: "confederalism"
    },
    "Ego-Communism": {
        economics: "communization",
        resource_management: "collective_distribution",
        culture: ["postmodernism", "amoralism"],
        authority: "anarchism",
        nation: "egoism",
        foreign: "alter_globalism",
        social_control: "permissivism",
        territorial_organization: "municipalism"
    },
    "National-Anarchism": {
        economics: ["distributism", "mutual_distributism"],
        culture: ["perennial_traditionalism", "reactionaryism"],
        authority: "anarchism",
        nation: ["Tribalism", "ethnic_nationalism"],
        foreign: "Isolationism",
        technology: "neoluddism",
        social_control: ["legal_moralism", "disciplinarianism"],
        territorial_organization: "municipalism"
    },
    "Ego-Mutualism": {
        economics: "mutualism",
        culture: ["postmodernism", "civil_liberalism"],
        authority: "anarchism",
        nation: "egoism",
        foreign: ["alter_globalism", "Non_Interventionism"],
        social_control: ["civil_libertarianism", "permissivism"],
        territorial_organization: ["municipalism", "confederalism"]
    },

    /* ===============================
        14. RIGHT-ANARCHIST
    =============================== */
    "Anarcho-Capitalism": {
        economics: ["laissez_faire", "countereconomics"],
        resource_management: "Voluntaryism",
        culture: "civil_liberalism",
        authority: ["anarchism", "polycentrism"],
        nation: "Cosmopolitanism",
        foreign: ["Non_Interventionism", "Globalism"],
        social_control: ["civil_libertarianism", "permissivism"],
        territorial_organization: ["confederalism", "municipalism"]
    },
    "Hoppeanism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: ["paleoconservatism", "reactionaryism"],
        authority: ["anarchism", "anarcho_monarchism"],
        nation: ["communitarianism", "Tribalism"],
        foreign: ["Non_Interventionism", "Isolationism"],
        social_control: "disciplinarianism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Bleeding-Heart Anarcho-Capitalism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: ["social_progressivism", "progressivism"],
        authority: "anarchism",
        nation: "Cosmopolitanism",
        foreign: "Globalism",
        social_control: ["civil_libertarianism", "permissivism"],
        territorial_organization: "confederalism"
    },
    "Traditionalist Anarcho-Distributism": {
        economics: "distributism",
        resource_management: "Voluntaryism",
        culture: ["religious_traditionalism", "traditionalist_conservatism"],
        authority: "anarchism",
        nation: "communitarianism",
        foreign: "Non_Interventionism",
        technology: "neoluddism",
        social_control: ["legal_moralism", "civil_libertarianism"],
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Crypto-Anarchism": {
        economics: ["countereconomics", "laissez_faire"],
        resource_management: "Voluntaryism",
        culture: "civil_liberalism",
        authority: "anarchism",
        nation: "Cosmopolitanism",
        foreign: ["Globalism", "Non_Interventionism"],
        technology: ["technocapitalism", "extropianism"],
        social_control: "civil_libertarianism"
    },
    "Avaritionism": {
        economics: ["laissez_faire", "countereconomics"],
        resource_management: "Voluntaryism",
        culture: ["postmodernism", "amoralism"],
        authority: ["anarchism", "polycentrism"],
        nation: "egoism",
        technology: "technocapitalism",
        social_control: "permissivism"
    },
    "Autarchism": {
        economics: "laissez_faire",
        resource_management: "Voluntaryism",
        culture: "civil_liberalism",
        authority: "anarchism",
        nation: "egoism",
        foreign: ["Isolationism", "Non_Interventionism"],
        social_control: ["civil_libertarianism", "permissivism"]
    },
    "Free-Market Anarcho-Distributism": {
        economics: "free_market_distributism",
        resource_management: "Voluntaryism",
        culture: ["traditionalist_conservatism", "civil_liberalism"],
        authority: "anarchism",
        nation: "communitarianism",
        social_control: "civil_libertarianism",
        territorial_organization: ["municipalism", "confederalism"]
    },
    "Agorism": {
        economics: "countereconomics",
        resource_management: "Voluntaryism",
        culture: "civil_liberalism",
        authority: "anarchism",
        nation: ["egoism", "Cosmopolitanism"],
        foreign: "Non_Interventionism",
        social_control: ["civil_libertarianism", "permissivism"],
        territorial_organization: ["confederalism", "municipalism"]
    },

    /* ===============================
        15. ACCELERATIONIST
    =============================== */
    "Left-Accelerationism": {
        economics: "free_socialism",
        resource_management: "collective_distribution",
        culture: "social_progressivism",
        authority: ["digital_democracy", "minarchism"],
        foreign: "Internationalism",
        technology: "prometheanism"
    },
    "Right-Accelerationism": {
        economics: "countereconomics",
        resource_management: "Voluntaryism",
        culture: "postmodernism",
        authority: "anarchism",
        technology: "technocapitalism"
    },
    "Effective Accelerationism": {
        economics: "laissez_faire",
        culture: ["progressivism", "civil_liberalism"],
        authority: "minarchism",
        technology: "extropianism"
    },
    "Unconditional Accelerationism": {
        economics: "laissez_faire",
        culture: ["postmodernism", "amoralism"],
        authority: "anarchism",
        nation: "egoism",
        technology: "techno_fatalism"
    },

    /* ===============================
        16. DYSTOPIAN
    =============================== */
    "Neo-Libertarian Falangism": {
        economics: "yellow_socialism",
        culture: "religious_traditionalism",
        authority: "minarchism",
        nation: "ethnic_nationalism",
        foreign: "Imperialism",
        technology: "industrialism",
        social_control: "civil_libertarianism",
        territorial_organization: "hypercentralism"
    },
    // 1984 Superstates
    "Ingsoc": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "postmodernism",
        authority: "partocracy",
        foreign: "Imperialism",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: "hypercentralism"
    },
    "Neo-Bolshevism": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        authority: "partocracy",
        foreign: "Imperialism",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: "hypercentralism"
    },
    "Obliteration of the Self": {
        economics: "state_socialism",
        culture: "alternative_modernism",
        authority: "ethical_statism",
        foreign: "Imperialism",
        social_control: "totalism",
        territorial_organization: "hypercentralism"
    },
    // Brave New World (Huxley)
    "World State Fordism": {
        economics: "state_capitalism",
        authority: ["technocracy", "meritocracy"],
        foreign: "Globalism",
        technology: "transhumanism",
        social_control: ["disciplinarianism", "civic_paternalism"],
        territorial_organization: "hypercentralism"
    },
    // The Handmaid's Tale (Atwood)
    "Gileadism": {
        culture: "religious_traditionalism",
        authority: ["theocracy", "religious_authoritarianism"],
        nation: "religious_nationalism",
        social_control: "totalism",
        territorial_organization: "centralism"
    },
    // We (Zamyatin)
    "One State Benefactorism": {
        culture: "progressivism",
        authority: ["technocracy", "autocracy"],
        technology: ["prometheanism", "industrialism"],
        social_control: "totalism",
        territorial_organization: "hypercentralism"
    },
    // Cyberpunk Megacorporatism
    "Cyberpunk Corpostatism": {
        economics: "corporatocracy",
        culture: "neoreactionaryism",
        authority: "neocameralism",
        nation: "egoism",
        foreign: "Imperialism",
        technology: "transhumanism",
        social_control: "securitism",
        territorial_organization: "confederalism"
    },
    // Fahrenheit 451 (Bradbury)
    "Fireman Statism": {
        economics: "state_capitalism",
        culture: "postmodernism",
        authority: "autocracy",
        foreign: "Isolationism",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: "centralism"
    },
    "Soylentism": {
        economics: "state_capitalism",
        culture: "reactionary_modernism",
        authority: "autocracy",
        foreign: "Isolationism",
        technology: "industrialism",
        social_control: "totalism",
        territorial_organization: "centralism"
    },
    // TNO
    "Burgundian System": {
        economics: "state_socialism",
        resource_management: "collective_distribution",
        culture: "reactionary_modernism",
        authority: "stratocracy",
        nation: "racial_nationalism",
        foreign: "Isolationism",
        technology: "techno_fatalism",
        social_control: "totalism",
        territorial_organization: "hypercentralism"
    },
    "Russian Imperial Cult": {
        economics: "state_capitalism",
        resource_management: "confiscatory_taxation",
        culture: "religious_traditionalism",
        authority: "absolute",
        nation: "ethnic_nationalism",
        foreign: "Isolationism",
        technology: "industrialism",
        social_control: "disciplinarianism",
        territorial_organization: "hypercentralism"
    }
}
    /*
    "": {
        economics: [""],
        resource_management: [""],
        culture: [""],
        authority: [""],
        nation: [""],
        foreign: [""],
        social_control: [""],
        territorial_organization: [""]
    },
    */

const labelColors = {
    "No exact match": "#5C5C5C",

    /* 1. Third Position */
    "National Syndicalism": "#372f53ff",
    "Clerical Fascism": "#58542cff",
    "Brazilian Integralism": "#253f50ff",
    "Italian Fascism": "#663718ff",
    "Peronism": "#23506eff",
    "Ba'athism": "#1e4d2bff",
    "Sansepolcrismo": "#59331eff",
    "Evolianism": "#3c2e4bff",
    "Futurism": "#2b314eff",
    "National-Socialism": "#2B2B2B",
    "Strasserism": "#3f1e1eff",
    "Falangism": "#4a1c1cff",
    "Agrarian Fascism": "#1f421cff",
    "Ecofascism": "#1b381eff",
    "Sorelianism": "#4a2424ff",
    "Rexism": "#461b2eff",
    "Legionarianism": "#183820ff",
    "Techno-Fascism": "#2b2e53ff",
    "National Solidarity": "#4f2b38ff",
    "Cosmist Vanguardism": "#36214f",
    "Duginism": "#3d1833",
    "Fiumanism": "#542238",
    "Eneasism": "#1e4638",
    "Social Nationalism": "#592834",
    "Ethnocacerismo": "#6b1d1d",
    "National Primitivism": "#2b3d1f",
    "Social-Bonapartism": "#1f3a60",
    "Tridemism": "#002b80",
    "Nationalist Kemalism": "#5c2020",
    "National Collectivism": "#421212",
    "Nazi-Maoism": "#7a1a1a",
    "Savinkovism": "#5c3317",
    "Mosleyism": "#1a1a36",
    "Revolutionary Nationalism": "#59202cff",

    /* 2. Reactionary */
    "Volkism": "#3b1515ff",
    "Optimateism": "#21273dff",
    "Integralism": "#63a9c5ff",
    "National Capitalism": "#77632aff",
    "Feudal Monarchism": "#2a2d47ff",
    "Carlism": "#822424ff",
    "Autocratic Monarchism": "#1d233dff",
    "Theocratic Distributism": "#634727ff",
    "Reactionary Feudalism": "#2c1c38ff",
    "Clerical Monarchism": "#442b57ff",
    "Neo-Absolutism": "#1a1e36ff",
    "Aristocratic Cameralism": "#2f3825ff",
    "Developmental Theocracy": "#614e2d",
    "Classical Eurasianism": "#263e36",
    "Mladorossism": "#1c2e47",
    "National Social Capitalism": "#635324",
    "Right-State Liberalism": "#3b5675",
    "Monarquia Syndicalista": "#1b4370",
    "Serenissimism": "#7d1d2b",

    /* 3. Conservative */
    "National Conservatism": "#002366",
    "Paleoconservatism": "#442d52ff",
    "Neoconservatism": "#25257aff",
    "Mesoconservatism": "#3c1e5fff",
    "Red Toryism": "#5e345eff",
    "Green Conservatism": "#284f37ff",
    "Clerical Conservatism": "#3e386eff",
    "Gaullism": "#1c3866ff",
    "Free-Market Conservatism": "#2b4d7aff",
    "Agrarian Conservatism": "#4d4a27ff",
    "Liberal Toryism": "#206095",
    "Social Gaullism": "#274878",
    "Neo-Gaullism": "#1f569c",
    "Bonapartist Gaullism": "#193561",
    "One-Nation Conservatism": "#1a4380",
    "Conservative Technoliberalism": "#2d5f7a",
    "Right-Social Authoritarianism": "#3a496b",
    "Kjærsgaardism": "#8c2e2e",
    "Kekkonism": "#235368",
    "Putinism": "#1c385c",
    "Post-Soviet Autocracy": "#385266",

    /* 4. Centrist */
    "Radicalism": "#a15c8dff",
    "Third Way": "#58789eff",
    "Christian Democracy": "#3C5A99",
    "Compassionate Conservatism": "#314a8fff",
    "Rockefeller Republicanism": "#692828ff",
    "Democratic Transhumanism": "#277a94",
    "Neo-Solidarism": "#6e5d31",
    "Steppe Eurasianism": "#2d6b63",
    "Classical Kemalism": "#b82929",
    "Catholic Social Teaching": "#5c3d75",
    "Bleeding-Heart Authoritarianism": "#6e5485",
    "Austro-Corporatism": "#9e2f43ff",
    "Davos System": "#00487c",

    /* 5. Centre-Left */
    "Nordic Model": "#fa6161ff",
    "Social Democracy": "#FF3333",
    "Conservative Social Democracy": "#c92b2bff",
    "Social Distributism": "#cf5338ff",
    "Liberal Socialism": "#d14b4bff",
    "Social Georgism": "#478f54ff",
    "Agrarian Social Democracy": "#a84b36ff",
    "Progressive Corporatism": "#c74242ff",
    "Left-Gaullism": "#214c78",
    "Green Social Democracy": "#2e8555",
    "Geo-Social Democracy": "#3b9468",
    "Christian Social Democracy": "#a8384b",
    "Police Labourism": "#8c2735",
    "Left-Social Authoritarianism": "#8f2424",
    "Progressive Social Authoritarianism": "#9e2a45",
    "Left-Wing Populism": "#db3246",
    "Left-Social Democracy": "#c42735",
    "Social-Helveticism": "#cf3838",
    "Left Kemalism": "#d92b2b",
    "Longism": "#a8501f",

    /* 6. Liberal */
    "Classical Liberalism": "#71beebff",
    "Neoliberalism": "#54ABC7",
    "National Liberalism": "#3D5A80",
    "Social Liberalism": "#4B92DB",
    "Ordoliberalism": "#518699",
    "Bleeding-Heart Liberalism": "#5ca0d3ff",
    "Geo-Liberalism": "#4f9e61ff",
    "Green Liberalism": "#38a169ff",
    "Whiggism": "#846594ff",
    "Muscular Liberalism": "#2b6cb0",
    "Transatlantic Federalism": "#4688b8",
    "New Deal Liberalism": "#3474b4",
    "Venizelism": "#2e6da4",
    "Liberal Social Authoritarianism": "#385e82",
    "Technoliberalism": "#3399b8",
    "American Model": "#244c8a",
    "Techno-Neoliberalism": "#33738f",
    "Tsaingwenism": "#1b8a36",
    "Liberal Imperialism": "#2a5f78",
    "Liberal Meritocracy": "#2b82a3",

    /* 7. Socialist */
    "Christian Socialism": "#8B0000",
    "National Bolshevism": "#690000ff",
    "Democratic Socialism": "#E34234",
    "Conservative Socialism": "#7e1e1eff",
    "Paleosocialism": "#77223eff",
    "Cybernetic Socialism": "#822639ff",
    "Utopian Communitarianism": "#963629ff",
    "Syndicalist Republicanism": "#a82020ff",
    "Left-Eurasianism": "#782222",
    "Socialist Technoliberalism": "#bd334b",
    "Mugabeism": "#2f5926",
    "Old Left-Populism": "#822424",
    "Left-State Liberalism": "#702963",
    "American Technocracy": "#1d4e89",
    "Fabian Socialism": "#9e2a2b",
    "Ujamaa": "#1b7a42",

    /* 8. Marxist */
    "Italian Left Communism": "#B22222",
    "Juche": "#C00000",
    "Mao Zedong Thought": "#EE1C25",
    "Marxism Leninism Maoism": "#ED1C24",
    "Trotskyism": "#CC0000",
    "Marxism-Leninism": "#CD0000",
    "Stalinism": "#A52A2A",
    "Titoism": "#bb4747ff",
    "Dengism": "#DE2910",
    "Luxemburgism": "#ad1818ff",
    "Eurocommunism": "#bd2828ff",
    "Hoxhaism": "#781414ff",
    "Castroism": "#b82323ff",
    "Guevarism": "#c71e1eff",
    "Cyber-Communism": "#872235ff",
    "De Leonism": "#a32121ff",
    "National Communism": "#b81d24",

    /* 9. Left-Libertarian */
    "Communalism": "#bb5030ff",
    "Minarcho-Socialism": "#FF4D4D",
    "Council Communism": "#740909ff",
    "Libertarian Socialism": "#ac3232ff",
    "Democratic Confederalism": "#387a38ff",
    "Guild Socialism": "#a83e20ff",
    "Eco-Socialism": "#2f6b36ff",
    "Fourierism": "#a64966",
    "Gandhian Socialism": "#94552b",
    "Scythianism": "#8c4e20",
    "Proutism": "#c45a25",

    /* 10. Centre-Libertarian */
    "Geolibertarianism": "#709e3cff",
    "Social Libertarianism": "#eebb2fff",
    "Helvetic Model": "#77ccccff",
    "Bleeding-Heart Libertarianism": "#887f00ff",
    "Minarcho-Distributism": "#ad8326ff",
    "Pirate Politics": "#5d43a6ff",
    "Agorist Minarchism": "#73802eff",
    "Communal Distributism": "#a65d28ff",
    "Yangism": "#4a77b5",
    "Libertarian Social Democracy": "#e07a38",
    "Progressive Helveticism": "#43afa1ff",
    "Cosmopolitan Distributism": "#4871a7ff",
    "Cyber-Federalism": "#20808a",

    /* 11. Right-Libertarian */
    "Neolibertarianism": "#B8860B",
    "Libertarian Conservatism": "#c5b30fff",
    "National Libertarianism": "#6b5d2fff",
    "Paleolibertarianism": "#72406aff",
    "Dark Enlightenment": "#6d5000ff",
    "Cyber-Libertarianism": "#3b8094ff",
    "Objectivism": "#256285ff",
    "Fusionism": "#7c7224ff",
    "Minarcho-Avaritionism": "#8c7e1e",

    /* 12. Left-Anarchist */
    "Anarcho-Syndicalism": "#941313",
    "Left-Agorism": "#632f2fff",
    "Lys Noir": "#242424ff",
    "Anarcho-Communism": "#a11111ff",
    "Solarpunk Anarchism": "#428a47ff",
    "Christian Anarchism": "#802222ff",
    "Insurrectionary Anarchism": "#851212ff",
    "Catholic Workerism": "#7a2020",

    /* 13. Centre-Anarchist */
    "Mutualism": "#db4804ff",
    "Market Anarchism": "#C74A0A",
    "Mutualist Distributism": "#b8531dff",
    "Panarchism": "#7f73bdff",
    "Geoanarchism": "#8cb148ff",
    "Green Anarchism": "#1f6b2aff",
    "Anarcho-Primitivism": "#234d20ff",
    "Post-Anarchism": "#520000ff",
    "Post-left": "#700000",
    "Anarcho-Transhumanism": "#3a6073ff",
    "Ego-Communism": "#005a5aff",
    "National-Anarchism": "#533027ff",
    "Ego-Mutualism": "#c26b1aff",

    /* 14. Right-Anarchist */
    "Anarcho-Capitalism": "#D4CB20",
    "Hoppeanism": "#e0bf00ff",
    "Bleeding-Heart Anarcho-Capitalism": "#faca47ff",
    "Free-Market Anarcho-Distributism": "#c49823ff",
    "Traditionalist Anarcho-Distributism": "#a8811eff",
    "Crypto-Anarchism": "#3f7a8cff",
    "Avaritionism": "#aeb645ff",
    "Autarchism": "#c2a632ff",
    "Agorism": "#8c821eff",

    /* 15. Accelerationist */
    "Left-Accelerationism": "#c93c3cff",
    "Right-Accelerationism": "#75631eff",
    "Effective Accelerationism": "#d69e15ff",
    "Unconditional Accelerationism": "#1f1f1fff",

    /* 16. Dystopian */
    "Neo-Libertarian Falangism": "#726e3aff",
    "Ingsoc": "#1a1a24",
    "Neo-Bolshevism": "#631515",
    "Obliteration of the Self": "#4a3818",
    "World State Fordism": "#2b5c70",
    "Gileadism": "#631b26",
    "One State Benefactorism": "#4a708b",
    "Cyberpunk Corpostatism": "#822987",
    "Fireman Statism": "#a33612",
    "Soylentism": "#4b6336",
    "Burgundian System": "#1b122c",
    "Russian Imperial Cult": "#3a152d"
};

const iconSources = {
    // economics
    "social_market": "https://www.reddit.com/r/vexillology/comments/lawj47/social_democracy_flag/",
    "rhine_capitalism": "",
    "paternalistic_capitalism": "https://wiki.polcompball.co.uk/Paternalistic_Conservatism",
    "social_solidarity_economy": "https://www.itcilo.org/courses/mooc-social-and-solidarity-economy",
    "ordnungspolitik": "https://wiki.polcompball.co.uk/Ordo-Liberalism",
    "residualism": "https://wiki.polcompball.co.uk/Welfarism",
    "basic_income_capitalism": "https://wiki.polcompball.co.uk/Social_Libertarianism",
    "laissez_faire": "",
    "countereconomics": "https://commons.wikimedia.org/wiki/File:Agorism-symbol.svg",
    "state_capitalism": "",
    "dirigisme": "https://quark88.github.io/ideosorter/",
    "keynesianism": "",
    "third_way": "https://quark88.github.io/ideosorter/",
    "neo_corporatism": "",
    "corporatism": "",
    "social_corporatism": "",
    "yellow_socialism": "https://quark88.github.io/ideosorter/",
    "mutualism": "https://commons.wikimedia.org/wiki/File:Mutualismo.svg",
    "guild_socialism": "https://www.reddit.com/r/leftistvexillology/comments/1cex7kz/my_take_on_a_flag_for_guild_socialism/",
    "syndicalism": "https://commons.wikimedia.org/wiki/File:Hammer_Torch_and_Cog_Syndicalism.png",
    "market_socialism": "https://www.reddit.com/r/leftistvexillology/comments/1kqh025/market_socialism_flag3_versions/",
    "mutual_distributism": "https://commons.wikimedia.org/wiki/File:Hound_of_Distributism.svg",
    "social_distributism": "https://commons.wikimedia.org/wiki/File:Hound_of_Distributism.svg",
    "distributism": "https://commons.wikimedia.org/wiki/File:Hound_of_Distributism.svg",
    "state_socialism": "https://polcompball.wiki/Socialism",
    "free_socialism": "https://commons.wikimedia.org/wiki/File:%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9F%D0%A1%D0%A0%D0%9C.svg",
    "communization": "https://www.deviantart.com/neobolshevik/art/Communization-theory-Flag-1206433111",
    "utopian_socialism": "https://www.reddit.com/r/leftistvexillology/comments/1cryitt/possible_flags_for_the_utopian_community_of/",
    "agrarian_socialism": "https://polcompball.wiki/Agrarian_Socialism",
    "feudalism": "https://en.wikipedia.org/wiki/File:Flag_of_medieval_France.png",
    "cameralism": "",
    "parecon": "https://libcom.org/article/parecon-or-libertarian-communism",
    "corporatocracy": "https://quark88.github.io/ideosorter/",
    "hierarchical_communism": "ai",

    // resource_management
    "Voluntaryism": "https://en.wikipedia.org/wiki/File:VforVoluntary_normal.svg",
    "lvt": "https://www.reddit.com/r/georgism/comments/ffs4yt/inspired_by_uwufflytimes_design_on_rvexillology_i/",
    "flat_taxation": "",
    "Progressive_Taxation": "",
    "Confiscatory_Taxation": "",
    "collective_distribution": "https://commons.wikimedia.org/wiki/File:Hammer_and_sickle.svg",
    "mixed_lvt": "https://quark88.github.io/ideosorter/",
    "tariff_funding": "https://wiki.polcompball.co.uk/Protectionism",
    "fair_tax": "https://www.moran.senate.gov/public/index.cfm/fairtax",

    // culture
    "postmodernism": "https://commons.wikimedia.org/wiki/File:Chaos_star.svg",
    "civil_liberalism": "https://www.reddit.com/r/vexillology/comments/10jfwzi/flag_for_liberalism/",
    "progressivism": "https://philosophyball.miraheze.org/wiki/Progressivism",
    "social_progressivism": "https://commons.wikimedia.org/wiki/File:Eiserne_Front_Symbol.svg",
    "conservative_liberalism": "https://polcompball.wiki/Conservative_Liberalism",
    "liberal_conservatism": "https://polcompball.wiki/Liberal_Conservatism",
    "progressive_conservatism": "https://polcompball.wiki/Progressive_Conservatism",
    "conservatism": "https://commons.wikimedia.org/wiki/File:Republicanlogo.svg",
    "traditionalist_conservatism": "https://wiki.polcompball.co.uk/File:Trad_flag.svg",
    "reactionaryism": "https://polcompball.wiki/Reactionaryism",
    "paleoconservatism": "https://www.reddit.com/r/vexillology/comments/i80yuz/flag_for_the_american_paleoconservative_movement/",
    "neoreactionaryism": "https://polcompball.wiki/Neoreactionaryism",
    "religious_traditionalism": "https://commons.wikimedia.org/wiki/File:Traditionalist_Catholicism_Symbol.jpg",
    "perennial_traditionalism": "",
    "reactionary_modernism": "https://polcompball.wiki/Reactionary_Modernism",
    "alternative_modernism": "",
    "amoralism": "https://www.reddit.com/r/vexillology/comments/1hpycru/nihilism_flag/",

    // authority
    "theocracy": "https://commons.wikimedia.org/wiki/File:Emblem_of_the_Holy_See_(vatican.va).svg",
    "absolute": "",
    "ethical_statism": "https://commons.wikimedia.org/wiki/File:Flag_of_the_National_Fascist_Party_(PNF)_variant_2.svg",
    "religious_authoritarianism": "https://commons.wikimedia.org/wiki/File:Cross_Santiago.svg",
    "autocracy": "",
    "anarchism": "https://commons.wikimedia.org/wiki/File:Anarchy-symbol.svg",
    "partocracy": "https://commons.wikimedia.org/wiki/File:Lenin-Silhoutte_.svg",
    "representative_democracy": "",
    "referendum_democracy": "",
    "councilism": "",
    "communalism": "https://historica.fandom.com/wiki/Collectivism",
    "digital_democracy": "https://digitaldemocracy.world/digital-democracy/",
    "constitutional": "",
    "minarchism": "https://commons.wikimedia.org/wiki/File:Gadsden_flag.svg",
    "meritocracy": "https://commons.wikimedia.org/wiki/File:Meritocracy_symbol.jpg",
    "technocracy": "https://commons.wikimedia.org/wiki/File:TechnocracyMonad.svg",
    "stratocracy": "https://commons.wikimedia.org/wiki/File:Coat_of_Arms_of_the_Hellenic_Republic_(1973-1974).svg",
    "aristocracy": "",
    "anarcho_monarchism": "https://www.reddit.com/r/vexillology/comments/aqt0of/flag_of_anarchomonarchy/",
    "neocameralism": "",
    "syndicracy": "https://kaiserreich.wiki/Syndicalist_Workers_League",
    "demarchy": "https://www.sortitionfoundation.org/lab",
    "polycentrism": "https://www.reddit.com/r/vexillology/comments/erclso/the_flag_of_ancient_athens_after_winning_the/",

    // nation
    "Cosmopolitanism": "https://commons.wikimedia.org/wiki/File:International_Flag_of_Planet_Earth.svg",
    "civic_nationalism": "https://polcompball.wiki/Civic_Nationalism",
    "cultural_nationalism": "https://polcompball.wiki/Cultural_Nationalism",
    "ethnic_nationalism": "https://polcompball.wiki/Ethnonationalism",
    "pan_nationalism": "https://polcompball.wiki/Irredentism",
    "racial_nationalism": "https://polcompball.wiki/Racial_Nationalism",
    "Tribalism": "https://polcompball.wiki/Tribalism",
    "egoism": "",
    "communitarianism": "https://polcompball.wiki/Communitarianism",
    "religious_nationalism": "",
    "romantic_nationalism": "",
    "civilizationism": "",
    "multiculturalism": "https://static.vecteezy.com/system/resources/previews/059/414/717/non_2x/group-of-people-holding-hands-icon-vector.jpg",

    // foreign
    "Isolationism": "https://polcompball.wiki/Isolationism",
    "Non_Interventionism": "",
    "Realpolitik": "",
    "Imperialism": "https://polcompball.wiki/Imperialism",
    "Interventionism": "",
    "Globalism": "https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Nations.svg",
    "armed_neutrality": "",
    "Internationalism": "",
    "alter_globalism": "https://www.reddit.com/r/vexillology/comments/1g7z6gu/the_liberanarchist_flag_a_flag_for_a_fictional/",
    "pacifism": "https://www.fotw.info/flags/de%7Ddove.html",
    "mercantilism": "https://www.pinterest.com/pin/725149977497576069/",
    "irredentism": "ai",

    // technology
    "primitivism": "",
    "neoluddism": "https://www.reddit.com/r/vexillology/comments/1tq54tc/flag_design_for_neoluddism/",
    "conservationism": "",
    "environmentalism": "https://commons.wikimedia.org/wiki/File:Ecology_symbol.svg",
    "instrumentalism": "https://iconscout.com/free-icon/free-technical-tools-icon_1317001",
    "industrialism": "",
    "ecomodernism": "https://www.reddit.com/r/solarpunk/comments/1cvs20p/redesigned_my_solarpunk_iconlogo_from_2022_and/",
    "prometheanism": "https://www.goodreads.com/book/show/55207396-prometheism",
    "technocapitalism": "https://www.reddit.com/r/chaosmagick/comments/1cnd9h1/ccrus_numogram/",
    "extropianism": "https://www.reddit.com/r/vexillology/comments/isiysk/a_flag_for_anarchoextropianism/",
    "techno_fatalism": "https://technooptimism.org/about/",
    "transhumanism": "https://en.wikipedia.org/wiki/File:Transhumanism_h+.svg",
    "posthumanism": "",
    "technogaianism": "",
    "agrarianism": "https://wiki.polcompball.co.uk/File:Agrarian_flag.svg",
    "post_industrialism": "https://wiki.polcompball.co.uk/File:Postindusnewflag.png",
    "convivialism": "https://convivialism.org/",

    // social_control
    "civil_libertarianism": "https://wiki.polcompball.co.uk/File:Civilbert_flag.svg",
    "permissivism": "",
    "civic_paternalism": "https://wiki.polcompball.co.uk/Paternalism",
    "legal_moralism": "https://philosophyball.miraheze.org/wiki/Moralism",
    "securitism": "",
    "disciplinarianism": "",
    "regimentalism": "",
    "totalism": "",
    "retributivism": "ai",
    "reputationalism": "ai",

    // territorial_organization
    "municipalism": "https://www.reddit.com/r/vexillology/comments/4o8mfw/flag_for_the_communalistlibertarian_municipalist/",
    "confederalism": "https://commons.wikimedia.org/wiki/File:Democratic_confederalism.png",
    "federalism": "https://wiki.polcompball.co.uk/Federalism",
    "regionalism": "",
    "centralism": "",
    "hypercentralism": "https://www.reddit.com/r/vexillology/comments/1h5uzl8/created_flags_for_my_fictional_totalitarian/",
    "subsidiarity": "ai",
    "suzerainty": "ai"
};
