let questionsByCategory = {};
const categoryOrder = [
    "economics",
    "resource_management",
    "culture",
    "authority",
    "nation",
    "foreign",
    "technology",
    "social_control",
    "territorial_organization"
];

let currentCategoryIndex = 0;
let currentQuestions = {};
let results = {};
let history = [];
let currentNodeId = null;

function getLocalizedQuestionText(node) {
    if (!node) return "";
    const lang = (typeof I18n !== 'undefined') ? I18n.currentLanguage : 'en';
    const defaultLang = (typeof I18n !== 'undefined') ? I18n.defaultLanguage : 'en';

    if (typeof node[lang] === 'string' && node[lang].trim() !== "") {
        return node[lang];
    }
    if (typeof node[defaultLang] === 'string' && node[defaultLang].trim() !== "") {
        return node[defaultLang];
    }
    return node.text || "";
}

function getLocalizedOptionText(opt) {
    if (!opt) return "";
    const lang = (typeof I18n !== 'undefined') ? I18n.currentLanguage : 'en';
    const defaultLang = (typeof I18n !== 'undefined') ? I18n.defaultLanguage : 'en';

    if (typeof opt[lang] === 'string' && opt[lang].trim() !== "") {
        return opt[lang];
    }
    if (typeof opt[defaultLang] === 'string' && opt[defaultLang].trim() !== "") {
        return opt[defaultLang];
    }
    return opt.text || "";
}

function initQuiz() {
    if (typeof questionsData !== 'undefined') {
        questionsByCategory = questionsData;
        startQuizCategory(categoryOrder[currentCategoryIndex]);
        return;
    }

    fetch('questions_tree.json')
        .then(res => res.json())
        .then(data => {
            questionsByCategory = data;
            startQuizCategory(categoryOrder[currentCategoryIndex]);
        })
        .catch(err => {
            console.error("Failed to load questions_tree.json:", err);
            const questionEl = document.getElementById('question');
            if (questionEl) {
                questionEl.innerText = "Error loading question tree. If testing locally, run a local web server (e.g. npx serve or python -m http.server).";
            }
        });
}

function loadCategoryMap(category) {
    currentQuestions = {};
    if (questionsByCategory[category]) {
        questionsByCategory[category].forEach(q => {
            currentQuestions[q.id] = q;
        });
    }
}

function startQuizCategory(category, targetId = null) {
    loadCategoryMap(category);
    const catList = questionsByCategory[category];
    if (!catList || catList.length === 0) return;

    const firstId = targetId || catList[0].id;
    renderNode(currentQuestions[firstId]);
}

function selectOption(nextId) {
    history.push({
        categoryIndex: currentCategoryIndex,
        nodeId: currentNodeId,
        results: { ...results }
    });

    const category = categoryOrder[currentCategoryIndex];
    const node = currentQuestions[nextId];

    if (!node || !node.options) {
        results[category] = nextId;
        currentCategoryIndex++;

        if (currentCategoryIndex < categoryOrder.length) {
            startQuizCategory(categoryOrder[currentCategoryIndex]);
        } else {
            localStorage.setItem('quizResults', JSON.stringify(results));
            window.location.href = 'results.html';
        }
    } else {
        renderNode(node);
    }
}

function renderNode(node) {
    if (!node) return;
    currentNodeId = node.id;

    const questionEl = document.getElementById('question');
    const buttonsDiv = document.getElementById('buttons');
    if (!questionEl || !buttonsDiv) return;

    buttonsDiv.innerHTML = '';
    questionEl.innerText = getLocalizedQuestionText(node);

    if (node.options && node.options.length > 3) {
        buttonsDiv.classList.add('multi-column');
    } else {
        buttonsDiv.classList.remove('multi-column');
    }

    if (node.options) {
        node.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = getLocalizedOptionText(opt);
            if (opt.color) btn.style.backgroundColor = opt.color;
            btn.onclick = () => selectOption(opt.next);
            buttonsDiv.appendChild(btn);
        });
    }

    updateBackButton();
}

function previousQuestion() {
    if (history.length === 0) {
        window.location.href = 'Instruction.html';
        return;
    }

    const prevState = history.pop();
    currentCategoryIndex = prevState.categoryIndex;
    results = prevState.results;
    loadCategoryMap(categoryOrder[currentCategoryIndex]);
    renderNode(currentQuestions[prevState.nodeId]);
}

function updateBackButton() {
    const backBtn = document.getElementById('back-button');
    if (!backBtn) return;

    if (typeof I18n !== 'undefined') {
        backBtn.innerText = history.length === 0
            ? I18n.t("backToInstructions")
            : I18n.t("prevQuestion");
    } else {
        backBtn.innerText = history.length === 0 ? "Back to Instructions" : "Previous Question";
    }
}

document.addEventListener('DOMContentLoaded', initQuiz);

window.addEventListener('languageChanged', () => {
    if (currentNodeId && currentQuestions[currentNodeId]) {
        renderNode(currentQuestions[currentNodeId]);
    }
    updateBackButton();
});
