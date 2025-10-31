// Script to export generated questions to questions-bank.js
const generator = require('./generate-questions.js');
const fs = require('fs');

const content = `// Comprehensive Questions Bank for English Grammar MCQs - Generated with 500+ Questions Per Category
const QUESTIONS_BANK = ${JSON.stringify(generator.QUESTIONS_BANK, null, 2)};

// Helper functions
function getQuestions(category, difficulty, count = 10) {
    if (!QUESTIONS_BANK[category] || !QUESTIONS_BANK[category][difficulty]) {
        return [];
    }
    const questions = QUESTIONS_BANK[category][difficulty];
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomQuestions(category, count = 10) {
    if (!QUESTIONS_BANK[category]) {
        return [];
    }
    const allQuestions = [];
    Object.keys(QUESTIONS_BANK[category]).forEach(difficulty => {
        allQuestions.push(...QUESTIONS_BANK[category][difficulty]);
    });
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getAllQuestions() {
    const allQuestions = [];
    Object.keys(QUESTIONS_BANK).forEach(category => {
        Object.keys(QUESTIONS_BANK[category]).forEach(difficulty => {
            allQuestions.push(...QUESTIONS_BANK[category][difficulty]);
        });
    });
    return allQuestions;
}

function getTotalQuestionCount() {
    let total = 0;
    Object.keys(QUESTIONS_BANK).forEach(category => {
        Object.keys(QUESTIONS_BANK[category]).forEach(difficulty => {
            total += QUESTIONS_BANK[category][difficulty].length;
        });
    });
    return total;
}

function getCategoryCount(category) {
    if (!QUESTIONS_BANK[category]) return 0;
    let count = 0;
    Object.keys(QUESTIONS_BANK[category]).forEach(difficulty => {
        count += QUESTIONS_BANK[category][difficulty].length;
    });
    return count;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUESTIONS_BANK,
        getQuestions,
        getRandomQuestions,
        getAllQuestions,
        getTotalQuestionCount,
        getCategoryCount
    };
}`;

fs.writeFileSync('questions-bank.js', content);
console.log('Questions bank file updated successfully!');
console.log('Total questions exported:', generator.getTotalQuestionCount());
Object.keys(generator.QUESTIONS_BANK).forEach(category => {
    console.log(`${category}: ${generator.getCategoryCount(category)} questions`);
});