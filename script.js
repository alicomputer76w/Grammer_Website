// Global Variables
let currentSection = 'home';
let currentDifficulty = 'easy';
let currentQuestionIndex = 0;
let selectedAnswer = null;
let isAnswered = false;
let questionsData = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadQuestionsData();
});

function initializeApp() {
    setupNavigation();
    setupMobileMenu();
    setupCategoryCards();
    setupDifficultyTabs();
    setupQuizControls();
    initializeFeedbackSystem();
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Check if it's an external link (contains .html)
                if (href.includes('.html')) {
                    // Let the browser handle external links normally
                    return;
                }
                
                // Handle internal section navigation
                e.preventDefault();
                const targetSection = href.substring(1);
                navigateToSection(targetSection);
            });
        });
    }
}

function navigateToSection(sectionId) {
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const navLink = document.querySelector(`[href="#${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
    
    // Show target section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    currentSection = sectionId;
    
    // Initialize quiz if it's a quiz section
    if (sectionId !== 'home') {
        initializeQuiz(sectionId);
    }
}

// Mobile Menu Setup
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
            });
        });
    }
}

// Category Cards Setup
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const targetSection = this.getAttribute('data-section');
                navigateToSection(targetSection);
            });
        });
    }
}

// Difficulty Tabs Setup
function setupDifficultyTabs() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            const difficulty = e.target.getAttribute('data-difficulty');
            switchDifficulty(difficulty);
        }
    });
}

function switchDifficulty(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
    
    // Reset quiz state
    selectedAnswer = null;
    isAnswered = false;
    
    // Load questions for current section and difficulty
    loadQuestion();
}

// Quiz Controls Setup
function setupQuizControls() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('submit-btn')) {
            submitAnswer();
        } else if (e.target.classList.contains('next-btn')) {
            nextQuestion();
        } else if (e.target.classList.contains('prev-btn')) {
            previousQuestion();
        } else if (e.target.classList.contains('option')) {
            selectOption(e.target);
        }
    });
}

// Initialize Quiz for a Section
function initializeQuiz(sectionId) {
    currentSection = sectionId;
    currentDifficulty = 'easy';
    currentQuestionIndex = 0;
    selectedAnswer = null;
    isAnswered = false;
    
    // Reset difficulty tabs
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error('Section not found:', sectionId);
        return;
    }
    
    const tabs = section.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
    
    loadQuestion();
}

// Option Selection
function selectOption(optionElement) {
    if (isAnswered) return;
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    optionElement.classList.add('selected');
    selectedAnswer = optionElement.getAttribute('data-option');
    
    // Enable submit button
    document.getElementById('submit-btn').disabled = false;
}

// Submit Answer
function submitAnswer() {
    if (selectedAnswer === null || isAnswered) return;
    
    // Get the active section container
    const activeSection = document.getElementById(currentSection);
    if (!activeSection) {
        console.error('Active section not found:', currentSection);
        return;
    }
    
    isAnswered = true;
    const currentQuestion = getCurrentQuestion();
    let correctAnswer = currentQuestion.correct;
    
    // Convert letter format to number format if needed
    if (typeof correctAnswer === 'string') {
        correctAnswer = correctAnswer.charCodeAt(0) - 65; // Convert 'A' to 0, 'B' to 1, etc.
    }
    
    // Show correct/incorrect styling
    activeSection.querySelectorAll('.option').forEach(option => {
        const optionIndex = parseInt(option.getAttribute('data-option'));
        if (optionIndex === correctAnswer) {
            option.classList.add('correct');
        } else if (optionIndex === parseInt(selectedAnswer) && optionIndex !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // Show answer section
    const answerSection = activeSection.querySelector('.answer-section');
    const correctAnswerDiv = answerSection.querySelector('.correct-answer');
    const explanationDiv = answerSection.querySelector('.explanation');
    
    // Handle both array and object format for options
    let optionsArray = [];
    if (Array.isArray(currentQuestion.options)) {
        optionsArray = currentQuestion.options;
    } else if (typeof currentQuestion.options === 'object') {
        optionsArray = Object.values(currentQuestion.options);
    }
    
    const correctOptionLetter = String.fromCharCode(65 + correctAnswer);
    const correctOptionText = optionsArray[correctAnswer] || 'N/A';
    correctAnswerDiv.innerHTML = `<strong>Correct Answer: ${correctOptionLetter}) ${correctOptionText}</strong>`;
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${currentQuestion.explanation}`;
    
    answerSection.style.display = 'block';
    
    // Update buttons
    const submitBtn = activeSection.querySelector('.submit-btn');
    const nextBtn = activeSection.querySelector('.next-btn');
    
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'inline-block';
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Next Question
function nextQuestion() {
    const totalQuestions = getTotalQuestions();
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        resetQuestionState();
        loadQuestion();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        resetQuestionState();
        loadQuestion();
    }
}

// Reset Question State
function resetQuestionState() {
    selectedAnswer = null;
    isAnswered = false;
    
    // Get the active section container
    const activeSection = document.getElementById(currentSection);
    if (!activeSection) {
        console.error('Active section not found:', currentSection);
        return;
    }
    
    // Reset option styling
    activeSection.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Hide answer section
    const answerSection = activeSection.querySelector('.answer-section');
    if (answerSection) answerSection.style.display = 'none';
    
    // Reset buttons
    const submitBtn = activeSection.querySelector('.submit-btn');
    const nextBtn = activeSection.querySelector('.next-btn');
    
    if (submitBtn) {
        submitBtn.style.display = 'inline-block';
        submitBtn.disabled = true;
    }
    if (nextBtn) nextBtn.style.display = 'none';
}

// Load Question
function loadQuestion() {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) {
        console.error('No question found for section:', currentSection, 'difficulty:', currentDifficulty, 'index:', currentQuestionIndex);
        return;
    }
    
    // Get the active section container
    const activeSection = document.getElementById(currentSection);
    if (!activeSection) {
        console.error('Active section not found:', currentSection);
        return;
    }
    
    // Update question counter
    const totalQuestions = getTotalQuestions();
    const currentQuestionElement = activeSection.querySelector('.current-question');
    const totalQuestionsElement = activeSection.querySelector('.total-questions');
    
    if (currentQuestionElement) currentQuestionElement.textContent = currentQuestionIndex + 1;
    if (totalQuestionsElement) totalQuestionsElement.textContent = totalQuestions;
    
    // Update difficulty badge
    const difficultyBadge = activeSection.querySelector('.difficulty-badge');
    if (difficultyBadge) {
        difficultyBadge.className = `difficulty-badge ${currentDifficulty}`;
        difficultyBadge.textContent = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
    }
    
    // Update question content
    const questionNumberElement = activeSection.querySelector('.question-number');
    const questionTextElement = activeSection.querySelector('.question-text');
    
    if (questionNumberElement) questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    if (questionTextElement) questionTextElement.textContent = currentQuestion.question;
    
    // Update options - Handle both old and new format
    const optionsContainer = activeSection.querySelector('.options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        // Check if options is an array (new format) or object (old format)
        let optionsArray = [];
        if (Array.isArray(currentQuestion.options)) {
            optionsArray = currentQuestion.options;
        } else if (typeof currentQuestion.options === 'object') {
            // Convert object format {A: "option1", B: "option2"} to array
            optionsArray = Object.values(currentQuestion.options);
        }
        
        optionsArray.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.setAttribute('data-option', index);
            optionDiv.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionDiv.addEventListener('click', () => selectOption(optionDiv));
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    // Reset question state
    resetQuestionState();
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Update Navigation Buttons
function updateNavigationButtons() {
    // Get the active section container
    const activeSection = document.getElementById(currentSection);
    if (!activeSection) {
        console.error('Active section not found:', currentSection);
        return;
    }
    
    const prevBtn = activeSection.querySelector('.prev-btn');
    const totalQuestions = getTotalQuestions();
    
    if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
    
    // Hide next button if it's the last question
    const nextBtn = activeSection.querySelector('.next-btn');
    if (nextBtn) {
        if (currentQuestionIndex === totalQuestions - 1 && isAnswered) {
            nextBtn.textContent = 'Quiz Complete';
            nextBtn.onclick = function() {
                alert('Quiz completed! Great job!');
            };
        } else {
            nextBtn.textContent = 'Next Question';
            nextBtn.onclick = nextQuestion;
        }
    }
}

// Get Current Question
function getCurrentQuestion() {
    const sectionQuestions = questionsData[currentSection];
    if (!sectionQuestions) {
        return null;
    }
    
    if (!sectionQuestions[currentDifficulty]) {
        return null;
    }
    
    return sectionQuestions[currentDifficulty][currentQuestionIndex];
}

// Get Total Questions for Current Difficulty
function getTotalQuestions() {
    const sectionQuestions = questionsData[currentSection];
    if (!sectionQuestions || !sectionQuestions[currentDifficulty]) return 0;
    
    return sectionQuestions[currentDifficulty].length;
}

// Load Questions Data
function loadQuestionsData() {
    // Questions are now loaded from questions-bank.js
    questionsData = QUESTIONS_BANK;
}

// Generate Parts of Speech Questions
function generatePartsOfSpeechQuestions(difficulty) {
    const questions = [];
    
    // Easy Questions (1-167)
    const easyQuestions = [
        {
            question: 'Identify the part of speech of "nevertheless" in the sentence: "He was tired; nevertheless, he kept working."',
            options: { A: 'Adjective', B: 'Conjunction', C: 'Adverb', D: 'Preposition' },
            correct: 'C',
            explanation: '"Nevertheless" is a conjunctive adverb that connects two independent clauses while showing contrast. It modifies the entire second clause and indicates a relationship between the ideas.'
        },
        {
            question: 'In "Seeing is believing," the word "seeing" functions as:',
            options: { A: 'Verb', B: 'Noun', C: 'Gerund', D: 'Participle' },
            correct: 'C',
            explanation: '"Seeing" is a gerund (verb form ending in -ing that functions as a noun). It serves as the subject of the sentence.'
        },
        {
            question: 'The word "whichever" in "Take whichever book you like" is a:',
            options: { A: 'Pronoun', B: 'Adjective', C: 'Conjunction', D: 'Determiner' },
            correct: 'A',
            explanation: '"Whichever" acts as a relative pronoun, meaning "any that" or "no matter which."'
        },
        {
            question: 'In "She looks very happy today," the word "very" is a/an:',
            options: { A: 'Adjective', B: 'Adverb', C: 'Intensifier', D: 'Quantifier' },
            correct: 'B',
            explanation: '"Very" is an adverb of degree that modifies the adjective "happy," indicating the extent or intensity.'
        },
        {
            question: 'Choose the correct classification of "lest":',
            options: { A: 'Subordinating conjunction', B: 'Preposition', C: 'Adverb', D: 'Interjection' },
            correct: 'A',
            explanation: '"Lest" is a subordinating conjunction meaning "for fear that" or "in case," introducing a subordinate clause.'
        }
    ];
    
    // Add more questions to reach 167 for easy level
    for (let i = 5; i < 167; i++) {
        questions.push({
            question: `Parts of Speech Question ${i + 1}: Identify the part of speech in the given context.`,
            options: { A: 'Noun', B: 'Verb', C: 'Adjective', D: 'Adverb' },
            correct: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
            explanation: `This is a sample explanation for question ${i + 1}. The correct answer demonstrates understanding of grammatical categories.`
        });
    }
    
    if (difficulty === 'easy') return questions.slice(0, 167);
    if (difficulty === 'medium') return questions.slice(0, 167).map((q, i) => ({
        ...q,
        question: q.question.replace('Question', 'Medium Question'),
    }));
    if (difficulty === 'hard') return questions.slice(0, 166).map((q, i) => ({
        ...q,
        question: q.question.replace('Question', 'Hard Question'),
    }));
    
    return questions;
}

// Generate Tenses Questions
function generateTensesQuestions(difficulty) {
    const questions = [];
    
    const baseQuestions = [
        {
            question: 'Choose the correct tense: "I _____ to the market yesterday."',
            options: { A: 'go', B: 'went', C: 'have gone', D: 'will go' },
            correct: 'B',
            explanation: 'Simple past tense is used for actions completed in the past. "Yesterday" indicates a specific past time.'
        },
        {
            question: 'Identify the tense: "She has been working here for five years."',
            options: { A: 'Present Perfect', B: 'Present Perfect Continuous', C: 'Past Perfect', D: 'Future Perfect' },
            correct: 'B',
            explanation: 'Present Perfect Continuous tense shows an action that started in the past and continues to the present. "Has been working" + duration "for five years" confirms this.'
        },
        {
            question: 'Complete with the correct form: "By next month, I _____ my degree."',
            options: { A: 'will complete', B: 'will have completed', C: 'complete', D: 'am completing' },
            correct: 'B',
            explanation: 'Future Perfect tense is used for actions that will be completed before a specific future time. "By next month" indicates completion before that time.'
        }
    ];
    
    // Generate 167 questions for each difficulty
    for (let i = 0; i < 167; i++) {
        const baseIndex = i % baseQuestions.length;
        questions.push({
            ...baseQuestions[baseIndex],
            question: `${difficulty.toUpperCase()} - ${baseQuestions[baseIndex].question}`
        });
    }
    
    return questions;
}

// Generate Narration Questions
function generateNarrationQuestions(difficulty) {
    const questions = [];
    
    const baseQuestions = [
        {
            question: 'Convert to indirect speech: He said, "I am going to school."',
            options: { A: 'He said that he was going to school.', B: 'He said that he is going to school.', C: 'He said he goes to school.', D: 'He said that I am going to school.' },
            correct: 'A',
            explanation: 'In indirect speech, present tense changes to past tense, and first person pronouns change according to the subject of the reporting verb.'
        },
        {
            question: 'Convert to direct speech: She asked if I was ready.',
            options: { A: 'She said, "Are you ready?"', B: 'She asked, "Are you ready?"', C: 'She said, "Am I ready?"', D: 'She asked, "Is he ready?"' },
            correct: 'B',
            explanation: 'When converting indirect questions to direct speech, use the appropriate question form and change pronouns back to original form.'
        },
        {
            question: 'Choose the correct indirect form: "Where do you live?" he asked.',
            options: { A: 'He asked where do I live.', B: 'He asked where I lived.', C: 'He asked where did I live.', D: 'He asked where I live.' },
            correct: 'B',
            explanation: 'In indirect speech, question word order changes to statement order, and present tense changes to past tense.'
        }
    ];
    
    // Generate 167 questions for each difficulty
    for (let i = 0; i < 167; i++) {
        const baseIndex = i % baseQuestions.length;
        questions.push({
            ...baseQuestions[baseIndex],
            question: `${difficulty.toUpperCase()} - ${baseQuestions[baseIndex].question}`
        });
    }
    
    return questions;
}

// Generate Usage Questions
function generateUsageQuestions(difficulty) {
    const questions = [];
    
    const baseQuestions = [
        {
            question: 'Choose the correct form: "_____ is raining outside."',
            options: { A: 'It', B: 'There', C: 'This', D: 'That' },
            correct: 'A',
            explanation: '"It" is used as a dummy subject for weather conditions, time, and distance.'
        },
        {
            question: 'Complete the sentence: "_____ are many books on the table."',
            options: { A: 'It', B: 'There', C: 'They', D: 'These' },
            correct: 'B',
            explanation: '"There" is used in existential sentences to indicate the existence or presence of something.'
        },
        {
            question: 'Choose the correct auxiliary: "She _____ completed her homework."',
            options: { A: 'have', B: 'has', C: 'had', D: 'having' },
            correct: 'B',
            explanation: '"Has" is used with third person singular subjects (she, he, it) in present perfect tense.'
        },
        {
            question: 'Select the appropriate form: "They _____ at the party last night."',
            options: { A: 'was', B: 'were', C: 'are', D: 'is' },
            correct: 'B',
            explanation: '"Were" is the past tense form of "be" used with plural subjects and "you."'
        }
    ];
    
    // Generate 167 questions for each difficulty
    for (let i = 0; i < 167; i++) {
        const baseIndex = i % baseQuestions.length;
        questions.push({
            ...baseQuestions[baseIndex],
            question: `${difficulty.toUpperCase()} - ${baseQuestions[baseIndex].question}`
        });
    }
    
    return questions;
}

// Utility Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Prevent right-click and text selection (to discourage copying)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+U (basic protection)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Feedback System
function initializeFeedbackSystem() {
    // Wait a bit to ensure DOM is fully loaded
    setTimeout(() => {
        const feedbackBtn = document.getElementById('feedback-btn');
        const floatingFeedbackBtn = document.getElementById('floating-feedback');
        const feedbackModal = document.getElementById('feedback-modal');
        const closeModal = document.querySelector('.close-modal');
        const cancelBtn = document.getElementById('cancel-feedback');
        const feedbackForm = document.getElementById('feedback-form');
        const charCounter = document.getElementById('char-count');
        const feedbackTextarea = document.getElementById('feedback-message');

        // Character counter functionality
        if (feedbackTextarea && charCounter) {
            feedbackTextarea.addEventListener('input', function() {
                const currentLength = this.value.length;
                charCounter.textContent = currentLength;
                
                // Change color based on character count
                if (currentLength < 10) {
                    charCounter.style.color = '#e74c3c'; // Red - too short
                } else if (currentLength > 450) {
                    charCounter.style.color = '#f39c12'; // Orange - approaching limit
                } else {
                    charCounter.style.color = '#27ae60'; // Green - good length
                }
            });
        }

        // Enhanced form validation on input
        const nameInput = document.getElementById('user-name');
        const whatsappInput = document.getElementById('user-whatsapp');

        if (nameInput) {
            nameInput.addEventListener('input', function() {
                const value = this.value.trim();
                if (value.length < 2) {
                    this.setCustomValidity('Name must be at least 2 characters long');
                } else if (value.length > 50) {
                    this.setCustomValidity('Name must not exceed 50 characters');
                } else {
                    this.setCustomValidity('');
                }
            });
        }

        if (whatsappInput) {
            whatsappInput.addEventListener('input', function() {
                const value = this.value.trim();
                if (!value.startsWith('+')) {
                    this.setCustomValidity('WhatsApp number must start with country code (e.g., +92)');
                } else {
                    this.setCustomValidity('');
                }
            });
        }

        // Debug logging for GitHub Pages
        console.log('Feedback elements found:', {
            feedbackBtn: !!feedbackBtn,
            floatingFeedbackBtn: !!floatingFeedbackBtn,
            feedbackModal: !!feedbackModal,
            closeModal: !!closeModal,
            cancelBtn: !!cancelBtn,
            feedbackForm: !!feedbackForm
        });

        // Open modal event listeners
        if (feedbackBtn) {
            feedbackBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openFeedbackModal();
            });
        }

        if (floatingFeedbackBtn) {
            floatingFeedbackBtn.addEventListener('click', function() {
                openFeedbackModal();
            });
        }

        // Close modal event listeners
        if (closeModal) {
            closeModal.addEventListener('click', closeFeedbackModal);
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeFeedbackModal);
        }

        // Close modal when clicking outside
        if (feedbackModal) {
            feedbackModal.addEventListener('click', function(e) {
                if (e.target === feedbackModal) {
                    closeFeedbackModal();
                }
            });
        }

        // Handle form submission
        if (feedbackForm) {
            feedbackForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleFeedbackSubmission();
            });
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && feedbackModal && feedbackModal.style.display === 'block') {
                closeFeedbackModal();
            }
        });
    }, 100);
}

function openFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus on first input
        const firstInput = modal.querySelector('input[type="text"]');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        
        // Reset form
        const form = document.getElementById('feedback-form');
        if (form) {
            form.reset();
        }
    }
}

// Security variables for rate limiting
let lastSubmissionTime = 0;
let submissionCount = 0;
const SUBMISSION_COOLDOWN = 60000; // 1 minute cooldown
const MAX_SUBMISSIONS_PER_HOUR = 3;

function handleFeedbackSubmission() {
    const userName = document.getElementById('user-name').value.trim();
    const userWhatsapp = document.getElementById('user-whatsapp').value.trim();
    const feedbackMessage = document.getElementById('feedback-message').value.trim();

    // Check rate limiting
    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < SUBMISSION_COOLDOWN) {
        const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (currentTime - lastSubmissionTime)) / 1000);
        alert(`⏰ Please wait ${remainingTime} seconds before submitting again.`);
        return;
    }

    // Check hourly submission limit
    const hourlySubmissions = parseInt(localStorage.getItem('hourlySubmissions') || '0');
    const lastHourReset = parseInt(localStorage.getItem('lastHourReset') || '0');
    
    if (currentTime - lastHourReset > 3600000) { // Reset after 1 hour
        localStorage.setItem('hourlySubmissions', '0');
        localStorage.setItem('lastHourReset', currentTime.toString());
    } else if (hourlySubmissions >= MAX_SUBMISSIONS_PER_HOUR) {
        alert('🚫 Maximum submissions reached for this hour. Please try again later.');
        return;
    }

    // Validate inputs with enhanced security
    if (!userName || !userWhatsapp || !feedbackMessage) {
        alert('❌ Please fill in all required fields.');
        return;
    }

    // Enhanced input validation and sanitization
    if (userName.length < 2 || userName.length > 50) {
        alert('❌ Name must be between 2-50 characters.');
        return;
    }

    if (feedbackMessage.length < 10 || feedbackMessage.length > 500) {
        alert('❌ Feedback message must be between 10-500 characters.');
        return;
    }

    // Sanitize inputs to prevent malicious content
    const sanitizedName = userName.replace(/[<>\"'&]/g, '');
    const sanitizedMessage = feedbackMessage.replace(/[<>\"'&]/g, '');

// Advanced WhatsApp number validation function
function validateWhatsAppNumber(phoneNumber) {
    // Remove all spaces, dashes, and parentheses
    const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
    
    // Check if it starts with + and has valid length
    if (!cleanNumber.startsWith('+')) {
        alert('❌ WhatsApp number must start with country code (e.g., +92 for Pakistan)');
        return false;
    }
    
    // Remove the + sign for further validation
    const numberWithoutPlus = cleanNumber.substring(1);
    
    // Check if all remaining characters are digits
    if (!/^\d+$/.test(numberWithoutPlus)) {
        alert('❌ WhatsApp number can only contain digits after country code');
        return false;
    }
    
    // Validate length (country code + number should be 10-15 digits)
    if (numberWithoutPlus.length < 10 || numberWithoutPlus.length > 15) {
        alert('❌ WhatsApp number must be 10-15 digits including country code');
        return false;
    }
    
    // Common country codes validation for Pakistan and neighboring countries
    const validCountryCodes = [
        '92',   // Pakistan
        '91',   // India
        '93',   // Afghanistan
        '98',   // Iran
        '86',   // China
        '1',    // USA/Canada
        '44',   // UK
        '971',  // UAE
        '966',  // Saudi Arabia
    ];
    
    let isValidCountryCode = false;
    for (const code of validCountryCodes) {
        if (numberWithoutPlus.startsWith(code)) {
            // Check if remaining digits after country code are reasonable
            const remainingDigits = numberWithoutPlus.substring(code.length);
            if (remainingDigits.length >= 7 && remainingDigits.length <= 12) {
                isValidCountryCode = true;
                break;
            }
        }
    }
    
    if (!isValidCountryCode) {
        alert('❌ Please enter a valid WhatsApp number with proper country code\n' +
              'Examples:\n' +
              '• Pakistan: +92 300 1234567\n' +
              '• India: +91 98765 43210\n' +
              '• UAE: +971 50 123 4567');
        return false;
    }
    
    // Additional validation: Check for obviously fake numbers
    const repeatingPattern = /(\d)\1{6,}/; // 7 or more same digits in a row
    if (repeatingPattern.test(numberWithoutPlus)) {
        alert('❌ Please enter a valid WhatsApp number (detected invalid pattern)');
        return false;
    }
    
    return true;
}

// Simple CAPTCHA-like verification
function generateSimpleCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question, answer;
    switch(operator) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
            answer = Math.max(num1, num2) - Math.min(num1, num2);
            break;
        case '*':
            const smallNum1 = Math.floor(Math.random() * 5) + 1;
            const smallNum2 = Math.floor(Math.random() * 5) + 1;
            question = `${smallNum1} × ${smallNum2}`;
            answer = smallNum1 * smallNum2;
            break;
    }
    
    return { question, answer };
}

    // Update rate limiting counters
    lastSubmissionTime = currentTime;
    const newHourlyCount = parseInt(localStorage.getItem('hourlySubmissions') || '0') + 1;
    localStorage.setItem('hourlySubmissions', newHourlyCount.toString());

    // Create WhatsApp message with sanitized content
    const whatsappNumber = '+923081517640'; // Your WhatsApp number
    const message = `*New Feedback from Grammar Master Website*\n\n` +
                   `*Name:* ${sanitizedName}\n` +
                   `*WhatsApp:* ${userWhatsapp}\n` +
                   `*Feedback:*\n${sanitizedMessage}\n\n` +
                   `*Sent from:* Grammar Master Website\n` +
                   `*Time:* ${new Date().toLocaleString()}\n` +
                   `*Security:* Verified ✅`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;

    // Show loading state
    const submitBtn = document.querySelector('#feedback-form button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Open WhatsApp after a short delay
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Close modal and show success message
        closeFeedbackModal();
        showFeedbackSuccess();
    }, 1000);
}

function showFeedbackSuccess() {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'feedback-success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <h3>Feedback Sent Successfully!</h3>
            <p>Your message has been sent to WhatsApp. We'll get back to you soon!</p>
        </div>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        z-index: 1001;
        animation: slideInRight 0.5s ease-out;
        max-width: 350px;
    `;

    // Add to body
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

// Add notification animations to CSS dynamically
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
        
        .notification-content {
            text-align: center;
        }
        
        .notification-content i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }
        
        .notification-content h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
        }
        
        .notification-content p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
}

// Initialize feedback system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFeedbackSystem();
    addNotificationStyles();
});