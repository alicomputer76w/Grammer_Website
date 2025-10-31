// Test script to verify questions bank functionality
const questionsBank = require('./questions-bank.js');

console.log('=== QUESTIONS BANK TEST ===');
console.log('Total questions:', questionsBank.getTotalQuestionCount());
console.log('');

// Test each category
const categories = ['parts-of-speech', 'tenses', 'narration', 'usage'];
categories.forEach(category => {
    console.log(`${category.toUpperCase()}:`);
    console.log(`  Total: ${questionsBank.getCategoryCount(category)} questions`);
    
    // Test each difficulty level
    const difficulties = ['easy', 'medium', 'hard', 'conceptual'];
    difficulties.forEach(difficulty => {
        const questions = questionsBank.getQuestions(category, difficulty, 3);
        console.log(`  ${difficulty}: ${questions.length} sample questions loaded`);
        if (questions.length > 0) {
            console.log(`    Sample: "${questions[0].question.substring(0, 50)}..."`);
        }
    });
    console.log('');
});

// Test random questions
console.log('RANDOM QUESTIONS TEST:');
const randomQuestions = questionsBank.getRandomQuestions('parts-of-speech', 5);
console.log(`Retrieved ${randomQuestions.length} random questions from parts-of-speech`);

console.log('');
console.log('=== TEST COMPLETED SUCCESSFULLY ===');