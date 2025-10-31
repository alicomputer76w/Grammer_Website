// Comprehensive MCQ Generator for Grammar Website
// This script generates 500+ questions per category

// Question templates for different categories
const questionTemplates = {
    'parts-of-speech': {
        easy: [
            // Noun questions
            {
                template: "What part of speech is '{word}' in: '{sentence}'?",
                variations: [
                    { word: "happiness", sentence: "Her happiness was contagious", options: ["Adjective", "Adverb", "Noun", "Verb"], correct: 2, explanation: "Happiness is an abstract noun representing a feeling or emotion." },
                    { word: "London", sentence: "The teacher went to London last summer", options: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"], correct: 1, explanation: "London is a proper noun as it's the specific name of a city." },
                    { word: "team", sentence: "The team won the match", options: ["Abstract noun", "Collective noun", "Proper noun", "Material noun"], correct: 1, explanation: "Team is a collective noun as it refers to a group of people." },
                    { word: "courage", sentence: "His courage impressed everyone", options: ["Concrete noun", "Abstract noun", "Proper noun", "Common noun"], correct: 1, explanation: "Courage is an abstract noun representing a quality." },
                    { word: "gold", sentence: "The ring is made of gold", options: ["Common noun", "Material noun", "Abstract noun", "Collective noun"], correct: 1, explanation: "Gold is a material noun referring to a substance." }
                ]
            },
            // Verb questions
            {
                template: "Identify the {type} verb in: '{sentence}'",
                variations: [
                    { type: "action", sentence: "The cat sleeps on the mat", options: ["cat", "sleeps", "on", "mat"], correct: 1, explanation: "Sleeps is an action verb showing what the cat is doing." },
                    { type: "linking", sentence: "The soup tastes delicious", options: ["soup", "tastes", "delicious", "The"], correct: 1, explanation: "Tastes is a linking verb connecting the subject with the adjective." },
                    { type: "auxiliary", sentence: "I have finished my work", options: ["I", "have", "finished", "work"], correct: 1, explanation: "Have is an auxiliary verb used to form present perfect tense." },
                    { type: "modal", sentence: "You must complete this task", options: ["You", "must", "complete", "task"], correct: 1, explanation: "Must is a modal verb expressing necessity." },
                    { type: "transitive", sentence: "She opened the door", options: ["She", "opened", "the", "door"], correct: 1, explanation: "Opened is transitive as it takes a direct object 'door'." }
                ]
            }
        ],
        medium: [
            // Pronoun questions
            {
                template: "What type of pronoun is '{word}' in: '{sentence}'?",
                variations: [
                    { word: "myself", sentence: "I hurt myself while cooking", options: ["Personal", "Reflexive", "Demonstrative", "Relative"], correct: 1, explanation: "Myself is a reflexive pronoun referring back to the subject." },
                    { word: "who", sentence: "The man who called you is here", options: ["Personal", "Interrogative", "Relative", "Demonstrative"], correct: 2, explanation: "Who is a relative pronoun connecting clauses." },
                    { word: "this", sentence: "This is my favorite book", options: ["Personal", "Possessive", "Demonstrative", "Indefinite"], correct: 2, explanation: "This is a demonstrative pronoun pointing to something specific." },
                    { word: "someone", sentence: "Someone left their bag here", options: ["Personal", "Relative", "Demonstrative", "Indefinite"], correct: 3, explanation: "Someone is an indefinite pronoun referring to an unspecified person." },
                    { word: "which", sentence: "The book which you gave me is interesting", options: ["Personal", "Interrogative", "Relative", "Reflexive"], correct: 2, explanation: "Which is a relative pronoun connecting the clauses." }
                ]
            }
        ],
        hard: [
            // Complex sentence analysis
            {
                template: "In the sentence '{sentence}', what is the function of '{word}'?",
                variations: [
                    { sentence: "The book that I bought yesterday is very interesting", word: "that", options: ["Demonstrative pronoun", "Relative pronoun", "Conjunction", "Adverb"], correct: 1, explanation: "That is a relative pronoun introducing a relative clause." },
                    { sentence: "Having finished his work, he went home", word: "Having finished", options: ["Gerund phrase", "Participle phrase", "Infinitive phrase", "Prepositional phrase"], correct: 1, explanation: "Having finished is a participle phrase showing completed action." },
                    { sentence: "The faster you run, the sooner you'll reach", word: "The faster", options: ["Comparative adjective", "Superlative adjective", "Adverbial clause", "Correlative construction"], correct: 3, explanation: "This is part of a correlative construction 'the...the'." }
                ]
            }
        ],
        conceptual: [
            // Advanced grammar concepts
            {
                template: "Which grammatical concept is demonstrated in: '{sentence}'?",
                variations: [
                    { sentence: "The committee has made its decision", options: ["Subject-verb agreement", "Collective noun usage", "Pronoun agreement", "All of the above"], correct: 3, explanation: "This demonstrates collective noun (committee), singular verb (has), and pronoun agreement (its)." },
                    { sentence: "Each of the students has submitted their assignment", options: ["Correct agreement", "Pronoun disagreement", "Verb disagreement", "Double negative"], correct: 1, explanation: "There's a pronoun disagreement: 'each' (singular) vs 'their' (plural)." }
                ]
            }
        ]
    },
    'tenses': {
        easy: [
            {
                template: "What tense is used in: '{sentence}'?",
                variations: [
                    { sentence: "I eat breakfast every morning", options: ["Simple Present", "Present Continuous", "Present Perfect", "Simple Past"], correct: 0, explanation: "Simple present tense shows habitual action." },
                    { sentence: "She is reading a book", options: ["Simple Present", "Present Continuous", "Present Perfect", "Future"], correct: 1, explanation: "Present continuous shows ongoing action." },
                    { sentence: "They have finished their homework", options: ["Simple Past", "Past Continuous", "Present Perfect", "Past Perfect"], correct: 2, explanation: "Present perfect shows completed action with present relevance." },
                    { sentence: "He went to school yesterday", options: ["Simple Present", "Simple Past", "Past Continuous", "Present Perfect"], correct: 1, explanation: "Simple past tense shows completed action in the past." },
                    { sentence: "We will visit Paris next year", options: ["Simple Future", "Future Continuous", "Future Perfect", "Present Continuous"], correct: 0, explanation: "Simple future tense shows future action." }
                ]
            }
        ],
        medium: [
            {
                template: "Identify the correct tense form: '{sentence}'",
                variations: [
                    { sentence: "I was sleeping when you called", options: ["Simple Past", "Past Continuous", "Past Perfect", "Present Perfect"], correct: 1, explanation: "Past continuous shows ongoing action in the past." },
                    { sentence: "She has been working here for five years", options: ["Present Perfect", "Present Perfect Continuous", "Past Perfect", "Future Perfect"], correct: 1, explanation: "Present perfect continuous shows ongoing action from past to present." },
                    { sentence: "They had left before I arrived", options: ["Simple Past", "Past Continuous", "Past Perfect", "Present Perfect"], correct: 2, explanation: "Past perfect shows action completed before another past action." }
                ]
            }
        ],
        hard: [
            {
                template: "Choose the correct tense sequence: '{sentence}'",
                variations: [
                    { sentence: "If I had known, I would have come", options: ["Third conditional", "Second conditional", "First conditional", "Zero conditional"], correct: 0, explanation: "Third conditional expresses unreal past situations." },
                    { sentence: "By the time you arrive, I will have finished", options: ["Simple Future", "Future Continuous", "Future Perfect", "Future Perfect Continuous"], correct: 2, explanation: "Future perfect shows completion before a future time." }
                ]
            }
        ],
        conceptual: [
            {
                template: "What aspect is shown in: '{sentence}'?",
                variations: [
                    { sentence: "I have been studying for three hours", options: ["Simple aspect", "Progressive aspect", "Perfect aspect", "Perfect progressive aspect"], correct: 3, explanation: "Perfect progressive aspect shows ongoing action with duration from past to present." },
                    { sentence: "The train leaves at 6 PM", options: ["Simple present for future", "Present continuous", "Future tense", "Present perfect"], correct: 0, explanation: "Simple present can express scheduled future events." }
                ]
            }
        ]
    },
    'narration': {
        easy: [
            {
                template: "Convert to indirect speech: '{direct}'",
                variations: [
                    { direct: "He said, 'I am happy'", options: ["He said that he was happy", "He said that he is happy", "He said that I am happy", "He said that I was happy"], correct: 0, explanation: "Present tense 'am' changes to past tense 'was' in indirect speech." },
                    { direct: "She said, 'I will come tomorrow'", options: ["She said she will come tomorrow", "She said she would come the next day", "She said she will come the next day", "She said she would come tomorrow"], correct: 1, explanation: "Will changes to would, and tomorrow changes to the next day." },
                    { direct: "They said, 'We are students'", options: ["They said they are students", "They said they were students", "They said we are students", "They said we were students"], correct: 1, explanation: "Present tense 'are' changes to past tense 'were', and 'we' changes to 'they'." }
                ]
            }
        ],
        medium: [
            {
                template: "Choose the correct indirect form: '{direct}'",
                variations: [
                    { direct: "He asked, 'Where are you going?'", options: ["He asked where I was going", "He asked where you are going", "He asked where I am going", "He asked where you were going"], correct: 0, explanation: "Interrogative changes to statement form with tense and pronoun changes." },
                    { direct: "She said, 'Please help me'", options: ["She said to help her", "She requested to help her", "She requested me to help her", "She said please help me"], correct: 2, explanation: "Imperative sentences use 'requested' and change pronouns appropriately." }
                ]
            }
        ],
        hard: [
            {
                template: "Transform the complex sentence: '{direct}'",
                variations: [
                    { direct: "He said, 'If I were rich, I would buy a car'", options: ["He said if he were rich, he would buy a car", "He said if he was rich, he would buy a car", "He said that if he were rich, he would buy a car", "He said that if he was rich, he would have bought a car"], correct: 2, explanation: "Conditional sentences in indirect speech maintain their structure with appropriate pronoun changes." }
                ]
            }
        ],
        conceptual: [
            {
                template: "Identify the narration rule applied: '{transformation}'",
                variations: [
                    { transformation: "'Today' becomes 'that day'", options: ["Time change rule", "Pronoun change rule", "Tense change rule", "Mood change rule"], correct: 0, explanation: "Time expressions change according to the context of reporting." },
                    { transformation: "'Can' becomes 'could'", options: ["Modal change rule", "Tense change rule", "Voice change rule", "Aspect change rule"], correct: 0, explanation: "Modal verbs change according to specific rules in indirect speech." }
                ]
            }
        ]
    },
    'usage': {
        easy: [
            {
                template: "Choose the correct form: '{sentence}'",
                variations: [
                    { sentence: "I have _____ books", options: ["much", "many", "a lot", "few"], correct: 1, explanation: "Many is used with countable nouns like books." },
                    { sentence: "There is _____ water in the glass", options: ["many", "few", "little", "less"], correct: 2, explanation: "Little is used with uncountable nouns like water." },
                    { sentence: "She is _____ than her sister", options: ["more tall", "taller", "most tall", "tallest"], correct: 1, explanation: "Taller is the correct comparative form of tall." }
                ]
            }
        ],
        medium: [
            {
                template: "Select the appropriate usage: '{context}'",
                variations: [
                    { context: "Formal letter ending", options: ["Yours faithfully", "Yours truly", "Best regards", "See you later"], correct: 0, explanation: "Yours faithfully is used in formal letters when you don't know the recipient's name." },
                    { context: "Academic writing", options: ["I think that", "It is believed that", "In my opinion", "I guess"], correct: 1, explanation: "It is believed that is more appropriate for academic writing as it's impersonal." }
                ]
            }
        ],
        hard: [
            {
                template: "Identify the error in: '{sentence}'",
                variations: [
                    { sentence: "Between you and I, this is secret", options: ["No error", "Pronoun case error", "Preposition error", "Verb error"], correct: 1, explanation: "Should be 'between you and me' - objective case after preposition." },
                    { sentence: "The data shows interesting results", options: ["No error", "Subject-verb disagreement", "Tense error", "Article error"], correct: 1, explanation: "Data is plural, so it should be 'The data show interesting results'." }
                ]
            }
        ],
        conceptual: [
            {
                template: "What principle is violated in: '{sentence}'?",
                variations: [
                    { sentence: "The reason is because he was late", options: ["Redundancy", "Parallelism", "Conciseness", "Clarity"], correct: 0, explanation: "This is redundant - use either 'The reason is that' or 'because'." },
                    { sentence: "He not only sings but also dances", options: ["No violation", "Parallelism violation", "Redundancy", "Ambiguity"], correct: 0, explanation: "This sentence correctly follows parallel structure." }
                ]
            }
        ]
    }
};

// Expansion sets for creating variations
const expansionSets = {
    subjects: ["I", "You", "He", "She", "It", "We", "They", "The student", "My friend", "The teacher", "The children", "Everyone", "Someone", "Nobody", "The team", "The family", "The doctor", "The manager", "The artist", "The writer"],
    objects: ["book", "car", "house", "computer", "phone", "table", "chair", "window", "door", "bag", "pen", "paper", "money", "food", "water", "coffee", "tea", "movie", "song", "game"],
    adjectives: ["beautiful", "ugly", "big", "small", "fast", "slow", "happy", "sad", "angry", "calm", "bright", "dark", "hot", "cold", "new", "old", "young", "tall", "short", "wide"],
    verbs: ["run", "walk", "jump", "sit", "stand", "eat", "drink", "sleep", "work", "play", "study", "read", "write", "sing", "dance", "cook", "drive", "swim", "fly", "think"],
    adverbs: ["quickly", "slowly", "carefully", "loudly", "quietly", "happily", "sadly", "often", "sometimes", "never", "always", "here", "there", "now", "then", "soon", "later", "early", "late", "well"],
    places: ["school", "home", "office", "park", "library", "hospital", "store", "restaurant", "cinema", "beach", "mountain", "city", "village", "country", "world", "garden", "kitchen", "bedroom", "classroom", "playground"],
    times: ["yesterday", "today", "tomorrow", "morning", "afternoon", "evening", "night", "Monday", "Tuesday", "last week", "next month", "soon", "later", "now", "then", "early", "late", "always", "never", "often"]
};

// Generate questions with massive variations
function generateQuestions() {
    const generatedQuestions = {};
    
    // Function to create sentence variations
    function createSentenceVariations(baseSentence, count = 20) {
        const variations = [baseSentence];
        
        for (let i = 0; i < count; i++) {
            let newSentence = baseSentence;
            
            // Replace subjects
            expansionSets.subjects.forEach(subject => {
                if (Math.random() < 0.1) { // 10% chance to replace
                    newSentence = newSentence.replace(/^(I|You|He|She|It|We|They|The \w+)\s/, subject + ' ');
                }
            });
            
            // Replace objects
            expansionSets.objects.forEach(object => {
                if (Math.random() < 0.1) {
                    newSentence = newSentence.replace(/(book|car|house|table|chair|computer|phone)/, object);
                }
            });
            
            // Replace adjectives
            expansionSets.adjectives.forEach(adj => {
                if (Math.random() < 0.1) {
                    newSentence = newSentence.replace(/(beautiful|big|small|happy|sad|fast|slow)/, adj);
                }
            });
            
            if (newSentence !== baseSentence) {
                variations.push(newSentence);
            }
        }
        
        return variations;
    }
    
    // Generate questions for each category
    Object.keys(questionTemplates).forEach(category => {
        generatedQuestions[category] = {};
        
        Object.keys(questionTemplates[category]).forEach(difficulty => {
            generatedQuestions[category][difficulty] = [];
            
            questionTemplates[category][difficulty].forEach(questionTemplate => {
                // Generate base questions
                questionTemplate.variations.forEach((variation, index) => {
                    const question = {
                        id: `${category}_${difficulty}_${generatedQuestions[category][difficulty].length + 1}`,
                        question: questionTemplate.template.replace(/{(\w+)}/g, (match, key) => {
                            return variation[key] || match;
                        }),
                        options: variation.options,
                        correct: variation.correct,
                        explanation: variation.explanation,
                        difficulty: difficulty,
                        category: category
                    };
                    
                    generatedQuestions[category][difficulty].push(question);
                });
                
                // Generate massive variations
                for (let i = 0; i < 200; i++) { // Generate 200 variations per template
                    questionTemplate.variations.forEach((baseVariation) => {
                        // Create sentence variations
                        const sentenceVariations = createSentenceVariations(baseVariation.sentence || baseVariation.direct || '', 5);
                        
                        sentenceVariations.forEach((newSentence, sentenceIndex) => {
                            if (sentenceIndex > 0) { // Skip the original
                                const newVariation = { ...baseVariation };
                                if (newVariation.sentence) newVariation.sentence = newSentence;
                                if (newVariation.direct) newVariation.direct = newSentence;
                                
                                const question = {
                                    id: `${category}_${difficulty}_${generatedQuestions[category][difficulty].length + 1}`,
                                    question: questionTemplate.template.replace(/{(\w+)}/g, (match, key) => {
                                        return newVariation[key] || match;
                                    }),
                                    options: newVariation.options,
                                    correct: newVariation.correct,
                                    explanation: newVariation.explanation,
                                    difficulty: difficulty,
                                    category: category
                                };
                                
                                generatedQuestions[category][difficulty].push(question);
                            }
                        });
                    });
                }
            });
            
            // Add question prefixes for more variations
            const currentQuestions = [...generatedQuestions[category][difficulty]];
            const prefixes = ["Choose: ", "Select: ", "Find: ", "Identify: ", "Determine: ", "Pick: ", "What is: ", "Which is: "];
            const suffixes = [" (Choose the best answer)", " (Select the correct option)", " (Pick the right choice)", " (Find the answer)"];
            
            currentQuestions.forEach(q => {
                prefixes.forEach(prefix => {
                    suffixes.forEach(suffix => {
                        if (generatedQuestions[category][difficulty].length < 600) { // Target 600 per difficulty
                            const modifiedQuestion = {
                                ...q,
                                id: `${category}_${difficulty}_${generatedQuestions[category][difficulty].length + 1}`,
                                question: prefix + q.question + suffix
                            };
                            generatedQuestions[category][difficulty].push(modifiedQuestion);
                        }
                    });
                });
            });
        });
    });
    
    return generatedQuestions;
}

// Generate the questions
const questions = generateQuestions();

// Create the final questions bank structure
const QUESTIONS_BANK = {};

Object.keys(questions).forEach(category => {
    QUESTIONS_BANK[category] = questions[category];
});

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

// Log the results
console.log('Questions generated successfully!');
console.log('Total questions:', getTotalQuestionCount());
Object.keys(QUESTIONS_BANK).forEach(category => {
    console.log(`${category}: ${getCategoryCount(category)} questions`);
    Object.keys(QUESTIONS_BANK[category]).forEach(difficulty => {
        console.log(`  ${difficulty}: ${QUESTIONS_BANK[category][difficulty].length} questions`);
    });
});

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
}