// Debug script to test question numbering
const fs = require('fs');

// Load the questions bank
const questionsBank = require('./questions-bank.js');

console.log('=== QUESTION NUMBERING DEBUG ===\n');

// Test each category
const categories = ['parts-of-speech', 'tenses', 'narration', 'usage'];
const difficulties = ['easy', 'medium', 'hard', 'conceptual'];

categories.forEach(category => {
    console.log(`\n--- ${category.toUpperCase()} ---`);
    
    difficulties.forEach(difficulty => {
        const questions = questionsBank.QUESTIONS_BANK[category][difficulty];
        console.log(`${difficulty}: ${questions.length} questions`);
        
        // Check first 10 questions to see if they exist
        console.log('First 10 questions exist:');
        for (let i = 0; i < Math.min(10, questions.length); i++) {
            const question = questions[i];
            if (question) {
                console.log(`  ${i + 1}: ✓ "${question.question.substring(0, 50)}..."`);
            } else {
                console.log(`  ${i + 1}: ✗ MISSING`);
            }
        }
        
        // Check for any null/undefined questions
        let nullCount = 0;
        questions.forEach((q, index) => {
            if (!q || !q.question) {
                nullCount++;
                console.log(`  NULL/UNDEFINED at index ${index + 1}`);
            }
        });
        
        if (nullCount === 0) {
            console.log(`  ✓ All questions are valid`);
        } else {
            console.log(`  ✗ Found ${nullCount} null/undefined questions`);
        }
        
        console.log('');
    });
});

// Test the helper functions
console.log('\n=== HELPER FUNCTIONS TEST ===');
console.log('getQuestions("parts-of-speech", "easy"):', questionsBank.getQuestions('parts-of-speech', 'easy').length);
console.log('getTotalQuestionCount():', questionsBank.getTotalQuestionCount());
console.log('getCategoryCount("parts-of-speech"):', questionsBank.getCategoryCount('parts-of-speech'));