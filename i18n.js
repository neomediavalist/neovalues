const I18n = {
    supportedLanguages: ['en', 'uk', 'ru', 'de', 'es'],
    defaultLanguage: 'en',
    currentLanguage: 'en',
    languageNames: {
        en: 'English',
        uk: 'Українська',
        ru: 'Русский',
        de: 'Deutsch',
        es: 'Español'
    },
    languageIcons: {
        en: 'icons/language/en.png',
        uk: 'icons/language/ua.png',
        ru: 'icons/language/ru.png',
        de: 'icons/language/de.png',
        es: 'icons/language/es.png'
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

        this.closeSwitcher();
        this.updateSwitcherUI();
        this.translateDOM();
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    },

    toggleSwitcher() {
        const container = document.querySelector('.lang-switcher');
        if (!container) return;
        const isOpen = container.classList.toggle('open');
        const trigger = container.querySelector('.lang-current-btn');
        if (trigger) trigger.setAttribute('aria-expanded', String(isOpen));
    },

    closeSwitcher() {
        const container = document.querySelector('.lang-switcher');
        if (!container) return;
        container.classList.remove('open');
        const trigger = container.querySelector('.lang-current-btn');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
    },

    renderTriggerIcon(triggerBtn, lang) {
        const name = this.languageNames[lang] || lang.toUpperCase();
        triggerBtn.innerHTML = '';
        triggerBtn.setAttribute('aria-label', `Current language: ${name}`);
        triggerBtn.title = name;

        const img = document.createElement('img');
        img.src = this.languageIcons[lang];
        img.alt = name;
        img.onerror = () => {
            triggerBtn.textContent = lang.toUpperCase();
        };
        triggerBtn.appendChild(img);
    },

    renderDropdownOptions(dropdownEl) {
        dropdownEl.innerHTML = '';
        const otherLanguages = this.supportedLanguages.filter(lang => lang !== this.currentLanguage);

        otherLanguages.forEach(lang => {
            const name = this.languageNames[lang] || lang.toUpperCase();
            const optionBtn = document.createElement('button');
            optionBtn.type = 'button';
            optionBtn.className = 'lang-option-btn';
            optionBtn.setAttribute('data-lang', lang);
            optionBtn.onclick = (e) => {
                e.stopPropagation();
                this.setLanguage(lang);
            };

            const img = document.createElement('img');
            img.className = 'lang-option-icon';
            img.src = this.languageIcons[lang];
            img.alt = '';
            img.onerror = () => {
                img.style.display = 'none';
            };

            const labelSpan = document.createElement('span');
            labelSpan.className = 'lang-option-label';
            labelSpan.textContent = name;

            optionBtn.appendChild(img);
            optionBtn.appendChild(labelSpan);
            dropdownEl.appendChild(optionBtn);
        });
    },

    updateSwitcherUI() {
        const container = document.querySelector('.lang-switcher');
        if (!container) return;
        const triggerBtn = container.querySelector('.lang-current-btn');
        const dropdownEl = container.querySelector('.lang-dropdown');

        if (triggerBtn) this.renderTriggerIcon(triggerBtn, this.currentLanguage);
        if (dropdownEl) this.renderDropdownOptions(dropdownEl);
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

        const triggerBtn = document.createElement('button');
        triggerBtn.type = 'button';
        triggerBtn.className = 'lang-current-btn';
        triggerBtn.setAttribute('aria-haspopup', 'true');
        triggerBtn.setAttribute('aria-expanded', 'false');
        triggerBtn.onclick = (e) => {
            e.stopPropagation();
            this.toggleSwitcher();
        };

        const dropdownEl = document.createElement('div');
        dropdownEl.className = 'lang-dropdown';
        dropdownEl.setAttribute('role', 'menu');

        container.appendChild(triggerBtn);
        container.appendChild(dropdownEl);
        document.body.prepend(container);

        this.updateSwitcherUI();

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                this.closeSwitcher();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSwitcher();
            }
        });
    }
};

I18n.init();
window.addEventListener('DOMContentLoaded', () => {
    I18n.injectSwitcher();
    I18n.translateDOM();
});