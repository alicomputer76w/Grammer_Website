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
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = this.getAttribute('href').substring(1);
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
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
    
    // Show target section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
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
        if (e.target.id === 'submit-btn') {
            submitAnswer();
        } else if (e.target.id === 'next-btn') {
            nextQuestion();
        } else if (e.target.id === 'prev-btn') {
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
    const tabs = section.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[0].classList.add('active');
    
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
    
    isAnswered = true;
    const currentQuestion = getCurrentQuestion();
    const correctAnswer = currentQuestion.correct;
    
    // Show correct/incorrect styling
    document.querySelectorAll('.option').forEach(option => {
        const optionIndex = parseInt(option.getAttribute('data-option'));
        if (optionIndex === correctAnswer) {
            option.classList.add('correct');
        } else if (optionIndex === parseInt(selectedAnswer) && optionIndex !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // Show answer section
    const answerSection = document.getElementById('answer-section');
    const correctAnswerDiv = answerSection.querySelector('.correct-answer');
    const explanationDiv = answerSection.querySelector('.explanation');
    
    const correctOptionLetter = String.fromCharCode(65 + correctAnswer);
    correctAnswerDiv.innerHTML = `<strong>Correct Answer: ${correctOptionLetter}) ${currentQuestion.options[correctAnswer]}</strong>`;
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${currentQuestion.explanation}`;
    
    answerSection.style.display = 'block';
    
    // Update buttons
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    
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
    
    // Reset option styling
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Hide answer section
    document.getElementById('answer-section').style.display = 'none';
    
    // Reset buttons
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').style.display = 'none';
}

// Load Question
function loadQuestion() {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) {
        console.error('No question found for section:', currentSection, 'difficulty:', currentDifficulty, 'index:', currentQuestionIndex);
        return;
    }
    
    // Update question counter
    const totalQuestions = getTotalQuestions();
    const currentQuestionElement = document.querySelector('.current-question');
    const totalQuestionsElement = document.querySelector('.total-questions');
    
    if (currentQuestionElement) currentQuestionElement.textContent = currentQuestionIndex + 1;
    if (totalQuestionsElement) totalQuestionsElement.textContent = totalQuestions;
    
    // Update difficulty badge
    const difficultyBadge = document.querySelector('.difficulty-badge');
    if (difficultyBadge) {
        difficultyBadge.className = `difficulty-badge ${currentDifficulty}`;
        difficultyBadge.textContent = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
    }
    
    // Update question content
    const questionNumberElement = document.querySelector('.question-number');
    const questionTextElement = document.getElementById('question-text');
    
    if (questionNumberElement) questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    if (questionTextElement) questionTextElement.textContent = currentQuestion.question;
    
    // Update options
    const optionsContainer = document.getElementById('options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        currentQuestion.options.forEach((option, index) => {
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
    const prevBtn = document.getElementById('prev-btn');
    const totalQuestions = getTotalQuestions();
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Hide next button if it's the last question
    const nextBtn = document.getElementById('next-btn');
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

// Get Current Question
function getCurrentQuestion() {
    const sectionQuestions = questionsData[currentSection];
    if (!sectionQuestions || !sectionQuestions[currentDifficulty]) return null;
    
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
    const feedbackBtn = document.getElementById('feedback-btn');
    const floatingFeedbackBtn = document.getElementById('floating-feedback');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancel-feedback');
    const feedbackForm = document.getElementById('feedback-form');

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

function handleFeedbackSubmission() {
    const userName = document.getElementById('user-name').value.trim();
    const userWhatsapp = document.getElementById('user-whatsapp').value.trim();
    const feedbackMessage = document.getElementById('feedback-message').value.trim();

    // Validate inputs
    if (!userName || !userWhatsapp || !feedbackMessage) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate WhatsApp number format (basic validation)
    const whatsappRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (!whatsappRegex.test(userWhatsapp)) {
        alert('Please enter a valid WhatsApp number.');
        return;
    }

    // Create WhatsApp message
    const whatsappNumber = '+923081517640'; // Your WhatsApp number
    const message = `*New Feedback from Grammar Master Website*\n\n` +
                   `*Name:* ${userName}\n` +
                   `*WhatsApp:* ${userWhatsapp}\n` +
                   `*Feedback:*\n${feedbackMessage}\n\n` +
                   `*Sent from:* Grammar Master Website\n` +
                   `*Time:* ${new Date().toLocaleString()}`;

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