const I18n = {
    supportedLanguages: ['en', 'uk', 'ru'],
    defaultLanguage: 'en',
    currentLanguage: 'en',
    languageLabels: {
        en: 'EN',
        uk: 'UA',
        ru: 'RU'
    },
    languageIcons: {
        en: 'icons/language/en.png',
        uk: 'icons/language/ua.png',
        ru: 'icons/language/ru.png'
    },

    init() {
        const saved = localStorage.getItem('nv_lang');
        this.currentLanguage = (saved && this.supportedLanguages.includes(saved)) 
            ? saved 
            : this.defaultLanguage;
        document.documentElement.setAttribute('lang', this.currentLanguage);
    },

    t(key) {
        const langData = TRANSLATIONS[this.currentLanguage]?.ui || {};
        return langData[key] || TRANSLATIONS[this.defaultLanguage]?.ui[key] || key;
    },

    getCategoryTitle(catId) {
        const langData = TRANSLATIONS[this.currentLanguage]?.categories || {};
        return langData[catId] || (typeof categoryTitles !== 'undefined' && categoryTitles[catId]) || catId;
    },

    getValueName(category, valId) {
        const langData = TRANSLATIONS[this.currentLanguage]?.values || {};
        if (langData[valId]) return langData[valId];
        return valId.replace(/_/g, ' ');
    },

    getIdeologyName(ideologyName) {
        const langData = TRANSLATIONS[this.currentLanguage]?.ideologies || {};
        return langData[ideologyName] || TRANSLATIONS[this.defaultLanguage]?.ideologies?.[ideologyName] || ideologyName;
    },

    getIdeologyGroupTitle(groupName) {
        const langData = TRANSLATIONS[this.currentLanguage]?.ideologyGroups || {};
        return langData[groupName] || TRANSLATIONS[this.defaultLanguage]?.ideologyGroups?.[groupName] || groupName;
    },

    getDescription(id) {
        const langData = TRANSLATIONS[this.currentLanguage]?.descriptions || {};
        return langData[id] || TRANSLATIONS[this.defaultLanguage]?.descriptions?.[id] || "Description coming soon!";
    },

    setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) return;
        this.currentLanguage = lang;
        localStorage.setItem('nv_lang', lang);
        document.documentElement.setAttribute('lang', lang);
        
        this.updateSwitcherUI();
        this.translateDOM();
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    },

    updateSwitcherUI() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLanguage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    translateDOM() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            if (!('i18nDefault' in el.dataset)) {
                el.dataset.i18nDefault = el.innerText;
            }
            const key = el.getAttribute('data-i18n');
            const defaultText = TRANSLATIONS[this.defaultLanguage]?.ui?.[key] || el.dataset.i18nDefault;

            if (this.currentLanguage === this.defaultLanguage) {
                el.innerText = defaultText;
            } else {
                el.innerText = TRANSLATIONS[this.currentLanguage]?.ui?.[key] || defaultText;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            if (!('i18nDefault' in el.dataset)) {
                el.dataset.i18nDefault = el.innerHTML;
            }
            const key = el.getAttribute('data-i18n-html');
            const defaultHtml = TRANSLATIONS[this.defaultLanguage]?.ui?.[key] || el.dataset.i18nDefault;

            if (this.currentLanguage === this.defaultLanguage) {
                el.innerHTML = defaultHtml;
            } else {
                el.innerHTML = TRANSLATIONS[this.currentLanguage]?.ui?.[key] || defaultHtml;
            }
        });
    },

    injectSwitcher() {
        if (document.querySelector('.lang-switcher')) return;
        const container = document.createElement('div');
        container.className = 'lang-switcher';
        this.supportedLanguages.forEach(lang => {
            const btn = document.createElement('button');
            const label = this.languageLabels[lang] || lang.toUpperCase();
            btn.className = `lang-btn ${lang === this.currentLanguage ? 'active' : ''}`;
            btn.setAttribute('data-lang', lang);
            btn.setAttribute('aria-label', `Switch to ${label}`);
            btn.title = label;
            btn.onclick = () => this.setLanguage(lang);

            const img = document.createElement('img');
            img.src = this.languageIcons[lang];
            img.alt = label;
            img.onerror = () => {
                btn.innerText = label;
            };

            btn.appendChild(img);
            container.appendChild(btn);
        });
        document.body.prepend(container);
    }
};

I18n.init();
window.addEventListener('DOMContentLoaded', () => {
    I18n.injectSwitcher();
    I18n.translateDOM();
});
