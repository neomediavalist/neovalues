let questionsByCategory = {};
let categoryOrder = ["economics", "culture", "authority"];
let currentCategoryIndex = 0;
let currentQuestions = {};
let results = {};

fetch('questions_tree.json')
  .then(res => res.json())
  .then(data => {
    questionsByCategory = data;
    startCategory(categoryOrder[currentCategoryIndex]);
  });

function startCategory(category) {
  // Reset the question lookup for the new category
  currentQuestions = {};
  questionsByCategory[category].forEach(q => currentQuestions[q.id] = q);
  
  // Start with the first question in this category
  const firstId = questionsByCategory[category][0].id;
  renderNode(currentQuestions[firstId]);
}

/**
 * LOGIC: Decides what happens after a user makes a choice
 */
function selectOption(nextId) {
  const category = categoryOrder[currentCategoryIndex];
  const node = currentQuestions[nextId];

  // Check if this is a "Leaf Node" (a result)
  if (!node.options) {
    results[category] = node.id; // Save result
    currentCategoryIndex++;

    if (currentCategoryIndex < categoryOrder.length) {
      // Move to next category immediately
      startCategory(categoryOrder[currentCategoryIndex]);
    } else {
      // Finish quiz
      localStorage.setItem('quizResults', JSON.stringify(results));
      window.location.href = 'results.html';
    }
  } else {
    // It's just another question in the same category
    renderNode(node);
  }
}

/**
 * RENDERING: Only updates the HTML elements
 */
function renderNode(node) {
  const questionEl = document.getElementById('question');
  const buttonsDiv = document.getElementById('buttons');

  // Clear UI
  buttonsDiv.innerHTML = '';
  questionEl.innerText = node.text || "";

  // Create buttons for the current node's options
  node.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt.text;
    if (opt.color) btn.style.backgroundColor = opt.color;

    // The button only triggers the Logic Handler
    btn.onclick = () => selectOption(opt.next);
    buttonsDiv.appendChild(btn);
  });
}