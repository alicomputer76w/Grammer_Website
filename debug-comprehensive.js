// Comprehensive debug script for question numbering issue
const fs = require('fs');

// Load the questions bank
const questionsBank = require('./questions-bank.js');

console.log('=== COMPREHENSIVE QUESTION NUMBERING DEBUG ===\n');

function checkQuestionContinuity(category, difficulty) {
    console.log(`\n--- Checking ${category} - ${difficulty} ---`);
    const questions = questionsBank.QUESTIONS_BANK[category][difficulty];
    
    console.log(`Total questions: ${questions.length}`);
    
    let nullCount = 0;
    let invalidCount = 0;
    let validCount = 0;
    
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        
        if (question === null || question === undefined) {
            nullCount++;
            console.log(`  Index ${i}: NULL/UNDEFINED`);
        } else if (!question.question || !question.options || !Array.isArray(question.options)) {
            invalidCount++;
            console.log(`  Index ${i}: INVALID STRUCTURE`);
        } else {
            validCount++;
        }
    }
    
    console.log(`Valid: ${validCount}, Invalid: ${invalidCount}, Null: ${nullCount}`);
    
    // Check for gaps in the array
    let hasGaps = false;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i] === undefined) {
            hasGaps = true;
            console.log(`  GAP at index ${i}`);
        }
    }
    
    if (!hasGaps) {
        console.log('✓ No gaps found in array');
    }
    
    return { validCount, invalidCount, nullCount, hasGaps };
}

// Test all categories and difficulties
const categories = ['parts-of-speech', 'tenses', 'narration', 'usage'];
const difficulties = ['easy', 'medium', 'hard', 'conceptual'];

let totalIssues = 0;

categories.forEach(category => {
    difficulties.forEach(difficulty => {
        const result = checkQuestionContinuity(category, difficulty);
        if (result.invalidCount > 0 || result.nullCount > 0 || result.hasGaps) {
            totalIssues++;
        }
    });
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total categories with issues: ${totalIssues}`);

// Test array access patterns
console.log('\n=== ARRAY ACCESS PATTERN TEST ===');
const testCategory = 'parts-of-speech';
const testDifficulty = 'easy';
const testQuestions = questionsBank.QUESTIONS_BANK[testCategory][testDifficulty];

console.log(`Testing ${testCategory} - ${testDifficulty} (${testQuestions.length} questions)`);

// Simulate the frontend access pattern
for (let i = 0; i < Math.min(20, testQuestions.length); i++) {
    const question = testQuestions[i];
    const displayNumber = i + 1;
    
    if (question && question.question) {
        console.log(`Index ${i} -> Display ${displayNumber}: ✓ "${question.question.substring(0, 40)}..."`);
    } else {
        console.log(`Index ${i} -> Display ${displayNumber}: ✗ PROBLEM`);
    }
}

// Check if the issue might be with array length vs actual content
console.log('\n=== ARRAY LENGTH VS CONTENT CHECK ===');
categories.forEach(category => {
    difficulties.forEach(difficulty => {
        const questions = questionsBank.QUESTIONS_BANK[category][difficulty];
        const actualLength = questions.length;
        const definedCount = questions.filter(q => q !== undefined && q !== null).length;
        
        if (actualLength !== definedCount) {
            console.log(`${category}-${difficulty}: Length=${actualLength}, Defined=${definedCount} - MISMATCH!`);
        }
    });
});

console.log('\nDebug complete.');