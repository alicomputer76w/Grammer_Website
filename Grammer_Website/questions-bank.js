// Comprehensive Questions Bank for English Grammar MCQs
const QUESTIONS_BANK = {
    'parts-of-speech': {
        easy: [
            {
                question: "What part of speech is the word 'quickly' in the sentence: 'She runs quickly'?",
                options: ["Noun", "Verb", "Adverb", "Adjective"],
                correct: 2,
                explanation: "Adverbs modify verbs, adjectives, or other adverbs. 'Quickly' modifies the verb 'runs' and tells us how she runs."
            },
            {
                question: "Identify the noun in: 'The beautiful garden has many flowers.'",
                options: ["beautiful", "garden", "has", "many"],
                correct: 1,
                explanation: "A noun is a person, place, thing, or idea. 'Garden' is a place, making it a noun."
            },
            {
                question: "Which word is a verb in: 'Children play in the park'?",
                options: ["Children", "play", "in", "park"],
                correct: 1,
                explanation: "A verb shows action or state of being. 'Play' shows what the children are doing."
            },
            {
                question: "What part of speech is 'happy' in: 'She is happy today'?",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                correct: 2,
                explanation: "Adjectives describe or modify nouns and pronouns. 'Happy' describes 'she'."
            },
            {
                question: "Identify the preposition: 'The book is on the table.'",
                options: ["book", "is", "on", "table"],
                correct: 2,
                explanation: "Prepositions show relationships between words. 'On' shows the relationship between 'book' and 'table'."
            }
        ],
        medium: [
            {
                question: "In 'The running water was crystal clear', what part of speech is 'running'?",
                options: ["Verb", "Gerund", "Participle", "Noun"],
                correct: 2,
                explanation: "Here 'running' is a present participle used as an adjective to describe 'water'."
            },
            {
                question: "What is the function of 'that' in: 'I know that you are right'?",
                options: ["Pronoun", "Conjunction", "Determiner", "Adverb"],
                correct: 1,
                explanation: "'That' here is a subordinating conjunction introducing the noun clause 'that you are right'."
            },
            {
                question: "Identify the abstract noun: 'His honesty impressed everyone.'",
                options: ["His", "honesty", "impressed", "everyone"],
                correct: 1,
                explanation: "Abstract nouns name ideas, qualities, or concepts that cannot be touched. 'Honesty' is a quality."
            },
            {
                question: "What part of speech is 'well' in: 'She sings well'?",
                options: ["Adjective", "Adverb", "Noun", "Interjection"],
                correct: 1,
                explanation: "'Well' modifies the verb 'sings', telling us how she sings, making it an adverb."
            },
            {
                question: "In 'Swimming is good exercise', what is 'swimming'?",
                options: ["Present participle", "Gerund", "Verb", "Adjective"],
                correct: 1,
                explanation: "'Swimming' is a gerund (verb form ending in -ing used as a noun) serving as the subject."
            }
        ],
        hard: [
            {
                question: "What is the grammatical function of 'whatever' in: 'Whatever you decide is fine with me'?",
                options: ["Relative pronoun", "Interrogative pronoun", "Indefinite pronoun", "Demonstrative pronoun"],
                correct: 0,
                explanation: "'Whatever' is a relative pronoun that introduces the noun clause 'whatever you decide'."
            },
            {
                question: "Identify the type of 'that' in: 'The house that we bought is beautiful.'",
                options: ["Demonstrative pronoun", "Relative pronoun", "Conjunction", "Determiner"],
                correct: 1,
                explanation: "'That' is a relative pronoun introducing the adjective clause 'that we bought' which modifies 'house'."
            },
            {
                question: "What part of speech is 'down' in: 'He walked down the street'?",
                options: ["Adverb", "Preposition", "Adjective", "Verb"],
                correct: 1,
                explanation: "'Down' is a preposition showing the direction of movement along 'the street'."
            },
            {
                question: "In 'The more you practice, the better you become', what is 'the more'?",
                options: ["Comparative adjective", "Correlative conjunction", "Adverbial phrase", "Determiner phrase"],
                correct: 1,
                explanation: "'The more...the better' is a correlative conjunction structure showing proportional relationship."
            },
            {
                question: "What is 'being' in: 'Being late, he missed the train'?",
                options: ["Gerund", "Present participle", "Past participle", "Auxiliary verb"],
                correct: 1,
                explanation: "'Being' is a present participle in a participial phrase that modifies the subject 'he'."
            }
        ],
        conceptual: [
            {
                question: "Which sentence demonstrates the dual nature of participles?",
                options: ["The broken window needs repair", "She is running fast", "Having finished work, he left", "The singing bird is beautiful"],
                correct: 2,
                explanation: "Participles have dual nature - verbal (can take objects/adverbs) and adjectival (modify nouns). 'Having finished work' shows both: 'finished' takes object 'work' (verbal) while the phrase modifies 'he' (adjectival)."
            },
            {
                question: "What distinguishes a gerund from a present participle in function?",
                options: ["Gerunds end in -ing, participles don't", "Gerunds function as nouns, participles as adjectives", "Gerunds are always subjects", "There is no difference"],
                correct: 1,
                explanation: "Both gerunds and present participles end in -ing, but gerunds function as nouns (subjects, objects, etc.) while present participles function as adjectives or in verb phrases."
            },
            {
                question: "In transformational grammar, what makes 'up' different in 'look up the word' vs 'look up the hill'?",
                options: ["Different meanings only", "Particle vs preposition", "Adverb vs adjective", "No difference"],
                correct: 1,
                explanation: "In 'look up the word', 'up' is a particle forming phrasal verb 'look up' (meaning search). In 'look up the hill', 'up' is a preposition showing direction."
            },
            {
                question: "What syntactic property allows 'that' to be omitted in 'I think (that) you're right'?",
                options: ["Optional complementizer deletion", "Ellipsis", "Gapping", "Pronoun dropping"],
                correct: 0,
                explanation: "In English, the complementizer 'that' introducing object clauses can be optionally deleted, a phenomenon called complementizer deletion."
            },
            {
                question: "Which analysis best explains why 'the poor' can function as a noun phrase?",
                options: ["Adjective nominalization", "Zero derivation", "Ellipsis of head noun", "Functional shift"],
                correct: 2,
                explanation: "'The poor' involves ellipsis of the head noun 'people' (the poor [people]). The adjective 'poor' modifies an understood noun."
            }
        ]
    },
    
    tenses: {
        easy: [
            {
                question: "Which tense is used in: 'I am reading a book'?",
                options: ["Simple Present", "Present Continuous", "Present Perfect", "Past Continuous"],
                correct: 1,
                explanation: "Present Continuous tense is used for actions happening at the moment of speaking. The structure is: am/is/are + verb+ing."
            },
            {
                question: "Choose the correct form: 'She _____ to school every day.'",
                options: ["go", "goes", "going", "gone"],
                correct: 1,
                explanation: "Simple Present tense uses 'goes' for third person singular (he/she/it). The base form 'go' is used with I/you/we/they."
            },
            {
                question: "What tense is: 'They played football yesterday'?",
                options: ["Present Perfect", "Past Simple", "Past Continuous", "Present Simple"],
                correct: 1,
                explanation: "Past Simple tense is used for completed actions in the past. 'Played' is the past form of 'play'."
            },
            {
                question: "Fill in the blank: 'I _____ my homework now.'",
                options: ["do", "am doing", "did", "have done"],
                correct: 1,
                explanation: "Present Continuous 'am doing' is used because the action is happening right now (indicated by 'now')."
            },
            {
                question: "Which is correct: 'He _____ here for two hours.'",
                options: ["is waiting", "waits", "has been waiting", "waited"],
                correct: 2,
                explanation: "Present Perfect Continuous 'has been waiting' is used for actions that started in the past and continue to the present."
            },
            {
                question: "Choose the right tense: 'Tomorrow I _____ to the market.'",
                options: ["go", "went", "will go", "am going"],
                correct: 2,
                explanation: "Simple Future 'will go' is used for future actions. 'Tomorrow' indicates future time."
            },
            {
                question: "What tense is: 'She has finished her work'?",
                options: ["Past Simple", "Present Perfect", "Past Perfect", "Present Continuous"],
                correct: 1,
                explanation: "Present Perfect 'has finished' is used for completed actions with present relevance."
            },
            {
                question: "Fill in: 'While I _____ TV, the phone rang.'",
                options: ["watch", "was watching", "watched", "have watched"],
                correct: 1,
                explanation: "Past Continuous 'was watching' is used for ongoing actions interrupted by another action in the past."
            },
            {
                question: "Choose: 'We _____ dinner at 7 PM every day.'",
                options: ["eat", "are eating", "ate", "have eaten"],
                correct: 0,
                explanation: "Simple Present 'eat' is used for habitual actions. 'Every day' indicates a routine."
            },
            {
                question: "What tense: 'The children _____ in the garden now.'",
                options: ["play", "played", "are playing", "have played"],
                correct: 2,
                explanation: "Present Continuous 'are playing' is used for actions happening at the moment of speaking."
            },
            {
                question: "Fill in: 'I _____ this book last week.'",
                options: ["read", "am reading", "have read", "was reading"],
                correct: 0,
                explanation: "Past Simple 'read' is used for completed actions at a specific time in the past ('last week')."
            },
            {
                question: "Choose: 'She _____ her keys.'",
                options: ["lose", "lost", "has lost", "is losing"],
                correct: 2,
                explanation: "Present Perfect 'has lost' is used when the exact time is not specified and the result affects the present."
            },
            {
                question: "What tense: 'They _____ football every Sunday.'",
                options: ["play", "are playing", "played", "have played"],
                correct: 0,
                explanation: "Simple Present 'play' is used for regular, repeated actions. 'Every Sunday' indicates routine."
            },
            {
                question: "Fill in: 'I _____ to London next month.'",
                options: ["go", "went", "will go", "have gone"],
                correct: 2,
                explanation: "Simple Future 'will go' is used for future plans. 'Next month' indicates future time."
            },
            {
                question: "Choose: 'He _____ when I called him.'",
                options: ["sleeps", "slept", "was sleeping", "has slept"],
                correct: 2,
                explanation: "Past Continuous 'was sleeping' is used for ongoing actions interrupted by another past action."
            },
            {
                question: "What tense: 'We _____ here since 2010.'",
                options: ["live", "lived", "are living", "have lived"],
                correct: 3,
                explanation: "Present Perfect 'have lived' is used with 'since' to show actions that started in the past and continue to the present."
            },
            {
                question: "Fill in: 'The train _____ at 9 AM tomorrow.'",
                options: ["leave", "left", "leaves", "will leave"],
                correct: 2,
                explanation: "Simple Present 'leaves' is used for scheduled future events like timetables."
            },
            {
                question: "Choose: 'I _____ my friend yesterday.'",
                options: ["meet", "met", "am meeting", "have met"],
                correct: 1,
                explanation: "Past Simple 'met' is used for completed actions at a specific time in the past ('yesterday')."
            },
            {
                question: "What tense: 'She _____ cooking dinner.'",
                options: ["finish", "finished", "has finished", "is finishing"],
                correct: 2,
                explanation: "Present Perfect 'has finished' is used for recently completed actions with present relevance."
            },
            {
                question: "Fill in: 'We _____ a movie tonight.'",
                options: ["watch", "watched", "are watching", "will watch"],
                correct: 3,
                explanation: "Simple Future 'will watch' is used for future plans. 'Tonight' indicates future time."
            }
        ],
        medium: [
            {
                question: "Choose the correct tense: 'By next year, I _____ my degree.'",
                options: ["will complete", "will have completed", "complete", "am completing"],
                correct: 1,
                explanation: "Future Perfect 'will have completed' is used for actions that will be finished before a specific time in the future."
            },
            {
                question: "What's the difference between 'I lived here' and 'I have lived here'?",
                options: ["No difference", "Past vs Present Perfect", "Formal vs Informal", "British vs American"],
                correct: 1,
                explanation: "'I lived here' (Past Simple) suggests the action is completely finished. 'I have lived here' (Present Perfect) suggests connection to the present."
            },
            {
                question: "Select the appropriate tense: 'When I arrived, they _____ already _____.'",
                options: ["have/left", "had/left", "were/leaving", "will/leave"],
                correct: 1,
                explanation: "Past Perfect 'had left' is used for actions completed before another past action (my arrival)."
            },
            {
                question: "Which is correct: 'I _____ English for five years now.'",
                options: ["study", "am studying", "have been studying", "studied"],
                correct: 2,
                explanation: "Present Perfect Continuous 'have been studying' emphasizes the duration of an ongoing action from past to present."
            },
            {
                question: "Choose the right form: 'This time tomorrow, I _____ on the beach.'",
                options: ["will lie", "will be lying", "lie", "am lying"],
                correct: 1,
                explanation: "Future Continuous 'will be lying' is used for actions that will be in progress at a specific time in the future."
            },
            {
                question: "What tense: 'She said she _____ the movie before.'",
                options: ["saw", "has seen", "had seen", "was seeing"],
                correct: 2,
                explanation: "Past Perfect 'had seen' is used in reported speech when the original statement was in Present Perfect."
            }
        ],
        hard: [
            {
                question: "Which sentence correctly uses the Future Perfect Continuous?",
                options: ["By 2025, I will work here for 10 years", "By 2025, I will have been working here for 10 years", "By 2025, I will be working here for 10 years", "By 2025, I work here for 10 years"],
                correct: 1,
                explanation: "Future Perfect Continuous 'will have been working' emphasizes the duration of an action up to a point in the future."
            },
            {
                question: "In 'I wish I _____ more careful yesterday', which is correct?",
                options: ["was", "had been", "would be", "am"],
                correct: 1,
                explanation: "After 'wish' for past regrets, we use Past Perfect 'had been' to express something contrary to past reality."
            },
            {
                question: "Choose the correct sequence: 'After he _____ the letter, he _____ it immediately.'",
                options: ["wrote/sent", "had written/sent", "was writing/sent", "writes/sends"],
                correct: 1,
                explanation: "Past Perfect 'had written' for the first completed action, then Past Simple 'sent' for the subsequent action."
            },
            {
                question: "What's the subtle difference: 'I have been living here' vs 'I have lived here'?",
                options: ["No difference", "Continuous emphasizes ongoing nature", "Perfect is more formal", "Continuous is incorrect"],
                correct: 1,
                explanation: "Present Perfect Continuous emphasizes the ongoing, temporary nature, while Present Perfect focuses on the experience or result."
            },
            {
                question: "In conditional sentences, which is correct: 'If I _____ rich, I _____ a mansion.'",
                options: ["am/will buy", "were/would buy", "was/will buy", "would be/buy"],
                correct: 1,
                explanation: "Second conditional uses Past Simple 'were' in if-clause and 'would + base verb' in main clause for hypothetical situations."
            }
        ],
        conceptual: [
            {
                question: "What aspectual meaning does Present Perfect Continuous convey that Present Perfect doesn't?",
                options: ["Completion", "Duration and ongoing nature", "Past time reference", "Future possibility"],
                correct: 1,
                explanation: "Present Perfect Continuous emphasizes the durative aspect and ongoing nature of actions, while Present Perfect focuses on completion or result."
            },
            {
                question: "Why is 'I am loving it' considered non-standard in traditional grammar?",
                options: ["Wrong tense", "Stative verbs resist progressive aspect", "Informal language", "American vs British"],
                correct: 1,
                explanation: "Stative verbs like 'love' traditionally don't take progressive aspect because they describe states rather than actions. However, this is changing in modern usage."
            },
            {
                question: "What temporal relationship does Past Perfect establish?",
                options: ["Simultaneous past actions", "Anteriority in past context", "Habitual past actions", "Completed past actions"],
                correct: 1,
                explanation: "Past Perfect establishes anteriority - it shows that one past action occurred before another past action or time."
            },
            {
                question: "In 'I have been to Paris' vs 'I have gone to Paris', what's the semantic difference?",
                options: ["Tense difference", "Been implies return, gone implies current location", "Formal vs informal", "No difference"],
                correct: 1,
                explanation: "'Have been to' implies completed journey with return, while 'have gone to' suggests the person is still there or the focus is on departure."
            },
            {
                question: "What makes the Future-in-the-Past construction 'would + base verb' different from conditional 'would'?",
                options: ["No difference", "Temporal vs modal meaning", "Formal vs informal", "British vs American"],
                correct: 1,
                explanation: "Future-in-the-Past 'would' expresses temporal relationship (future from past perspective), while conditional 'would' expresses hypothetical or polite meaning."
            }
        ],
        medium: [
            {
                question: "Which sentence correctly uses the present perfect continuous tense?",
                options: ["I have been studying for three hours", "I am studying for three hours", "I studied for three hours", "I will study for three hours"],
                correct: 0,
                explanation: "Present perfect continuous (have/has been + verb+ing) is used for actions that started in the past and continue to the present."
            },
            {
                question: "Choose the correct past perfect form: 'By the time I arrived, they _____ already _____.'",
                options: ["have, left", "had, left", "were, leaving", "are, leaving"],
                correct: 1,
                explanation: "Past perfect (had + past participle) is used for actions completed before another past action."
            },
            {
                question: "What is the correct future continuous form?",
                options: ["I will studying", "I will be study", "I will be studying", "I will have study"],
                correct: 2,
                explanation: "Future continuous is formed with 'will be + verb+ing' for actions that will be in progress at a specific future time."
            },
            {
                question: "Select the sentence with correct present perfect usage:",
                options: ["I have seen this movie yesterday", "I have seen this movie last week", "I have seen this movie before", "I have seen this movie two days ago"],
                correct: 2,
                explanation: "Present perfect is used with indefinite time expressions like 'before', 'already', 'yet', not with specific past time markers."
            },
            {
                question: "Which shows the correct sequence of tenses?",
                options: ["He said he will come tomorrow", "He said he would come tomorrow", "He said he comes tomorrow", "He said he came tomorrow"],
                correct: 1,
                explanation: "In reported speech, 'will' changes to 'would' when the reporting verb is in the past tense."
            }
        ],
        hard: [
            {
                question: "Which sentence demonstrates the correct use of the future perfect continuous tense?",
                options: ["By next year, I will have been working here for five years", "By next year, I will work here for five years", "By next year, I will be working here for five years", "By next year, I have been working here for five years"],
                correct: 0,
                explanation: "Future perfect continuous (will have been + verb+ing) shows an action that will continue up to a point in the future."
            },
            {
                question: "Choose the sentence with the most appropriate tense sequence:",
                options: ["If I knew you were coming, I would have prepared dinner", "If I had known you were coming, I would have prepared dinner", "If I know you were coming, I would prepare dinner", "If I will know you are coming, I will prepare dinner"],
                correct: 1,
                explanation: "Third conditional uses 'if + past perfect' with 'would have + past participle' for hypothetical past situations."
            },
            {
                question: "What is the correct form for expressing habitual past actions that no longer occur?",
                options: ["I was going to school every day", "I went to school every day", "I used to go to school every day", "I have gone to school every day"],
                correct: 2,
                explanation: "'Used to' is specifically used for past habits or states that no longer exist in the present."
            },
            {
                question: "Which sentence correctly uses the past perfect continuous?",
                options: ["I had been waiting for two hours when he arrived", "I was waiting for two hours when he arrived", "I have been waiting for two hours when he arrived", "I will have been waiting for two hours when he arrives"],
                correct: 0,
                explanation: "Past perfect continuous (had been + verb+ing) shows an ongoing action that was completed before another past action."
            },
            {
                question: "Select the sentence with correct conditional perfect usage:",
                options: ["If you would have called, I would come", "If you had called, I would have come", "If you have called, I would have come", "If you call, I would have come"],
                correct: 1,
                explanation: "Third conditional structure: If + past perfect, would have + past participle for unreal past conditions."
            }
        ]
    },
    
    narration: {
        easy: [
            {
                question: "Change to indirect speech: He said, 'I am happy.'",
                options: ["He said that he is happy", "He said that he was happy", "He said that I am happy", "He said that I was happy"],
                correct: 1,
                explanation: "In indirect speech, 'I' changes to 'he' and present tense 'am' changes to past tense 'was'."
            },
            {
                question: "Convert: She said, 'I will come tomorrow.'",
                options: ["She said she will come tomorrow", "She said she would come the next day", "She said I will come tomorrow", "She said I would come the next day"],
                correct: 1,
                explanation: "In indirect speech: 'I' becomes 'she', 'will' becomes 'would', and 'tomorrow' becomes 'the next day'."
            },
            {
                question: "Change: 'Are you coming?' he asked.",
                options: ["He asked if I am coming", "He asked if you are coming", "He asked if I was coming", "He asked if you were coming"],
                correct: 2,
                explanation: "In indirect questions: 'Are you' becomes 'if I was', and present tense changes to past tense."
            },
            {
                question: "Convert: 'Close the door,' she said.",
                options: ["She said to close the door", "She told to close the door", "She said that close the door", "She told me close the door"],
                correct: 0,
                explanation: "For commands in indirect speech, we use 'said to + infinitive' or 'told + object + to infinitive'."
            },
            {
                question: "Change: He said, 'I can swim.'",
                options: ["He said he can swim", "He said he could swim", "He said I can swim", "He said I could swim"],
                correct: 1,
                explanation: "In indirect speech, 'can' changes to 'could' and 'I' changes to 'he'."
            },
            {
                question: "Convert: 'What is your name?' she asked.",
                options: ["She asked what is my name", "She asked what was my name", "She asked what my name was", "She asked what my name is"],
                correct: 2,
                explanation: "In indirect questions, we use statement word order: 'what my name was' not 'what was my name'."
            }
        ],
        medium: [
            {
                question: "Change: 'I have been working here since 2020,' he said.",
                options: ["He said he has been working there since 2020", "He said he had been working there since 2020", "He said he was working there since 2020", "He said he is working there since 2020"],
                correct: 1,
                explanation: "Present Perfect Continuous 'have been working' changes to Past Perfect Continuous 'had been working', and 'here' becomes 'there'."
            },
            {
                question: "Convert: 'If I were you, I would accept the offer,' she advised.",
                options: ["She advised that if she were me, she would accept the offer", "She advised me that if I were her, I would accept the offer", "She advised me that if she were I, she would accept the offer", "She advised that if I were she, I would accept the offer"],
                correct: 0,
                explanation: "In conditional sentences in indirect speech, pronouns change but the conditional structure remains: 'if she were me, she would accept'."
            },
            {
                question: "Change: 'I may not come tomorrow,' he said.",
                options: ["He said he may not come the next day", "He said he might not come the next day", "He said he will not come the next day", "He said he would not come the next day"],
                correct: 1,
                explanation: "'May' changes to 'might' in indirect speech, and 'tomorrow' becomes 'the next day'."
            },
            {
                question: "Convert: 'I wish I had studied harder,' she said.",
                options: ["She said she wishes she had studied harder", "She said she wished she had studied harder", "She said she wished she has studied harder", "She said she wishes she has studied harder"],
                correct: 1,
                explanation: "Present tense 'wish' changes to past tense 'wished', but Past Perfect 'had studied' remains unchanged."
            },
            {
                question: "Change: 'You must finish this today,' the teacher said.",
                options: ["The teacher said I must finish that today", "The teacher said I had to finish that that day", "The teacher said you must finish this today", "The teacher said you had to finish this that day"],
                correct: 1,
                explanation: "'Must' changes to 'had to', 'you' becomes 'I', 'this' becomes 'that', and 'today' becomes 'that day'."
            }
        ],
        hard: [
            {
                question: "Convert: 'I would have helped you if you had asked me,' he said.",
                options: ["He said he would have helped me if I had asked him", "He said he will have helped me if I had asked him", "He said he would help me if I had asked him", "He said he would have helped me if I have asked him"],
                correct: 0,
                explanation: "Third conditional remains unchanged in indirect speech, but pronouns change: 'you' to 'me', 'me' to 'him'."
            },
            {
                question: "Change: 'Let's go to the cinema,' she suggested.",
                options: ["She suggested to go to the cinema", "She suggested going to the cinema", "She suggested that we go to the cinema", "She suggested we should go to the cinema"],
                correct: 1,
                explanation: "For suggestions with 'Let's', we use 'suggested + gerund' (going) or 'suggested that + clause'."
            },
            {
                question: "Convert: 'I'd rather you didn't smoke here,' he said.",
                options: ["He said he would rather I didn't smoke there", "He said he had rather I didn't smoke there", "He said he would rather I don't smoke there", "He said he rather I didn't smoke there"],
                correct: 0,
                explanation: "'I'd rather' (I would rather) remains 'would rather' in indirect speech, with appropriate pronoun and place changes."
            },
            {
                question: "Change: 'If only I could fly!' she exclaimed.",
                options: ["She exclaimed that if only she could fly", "She exclaimed if only she could fly", "She exclaimed that only if she could fly", "She exclaimed only if she could fly"],
                correct: 0,
                explanation: "Exclamations in indirect speech use 'that' and change pronouns appropriately while keeping the exclamatory meaning."
            },
            {
                question: "Convert: 'You needn't have worried,' he told her.",
                options: ["He told her she needn't have worried", "He told her she didn't need to worry", "He told her she hadn't needed to worry", "He told her she wouldn't need to worry"],
                correct: 0,
                explanation: "'Needn't have + past participle' (past necessity) remains unchanged in indirect speech as it already refers to past time."
            }
        ],
        conceptual: [
            {
                question: "Why does 'I said I was tired' not necessarily mean the speaker is still tired?",
                options: ["Grammatical error", "Backshifting rule in indirect speech", "Tense sequence error", "Ambiguous meaning"],
                correct: 1,
                explanation: "Backshifting in indirect speech moves tenses one step back in time. 'I am tired' becomes 'I was tired' regardless of current state."
            },
            {
                question: "When can we avoid backshifting in indirect speech?",
                options: ["Never", "When the statement is still true", "In formal writing only", "With modal verbs only"],
                correct: 1,
                explanation: "Backshifting can be avoided when the reported statement expresses a general truth or is still true at the time of reporting."
            },
            {
                question: "What's the pragmatic difference between 'He said he would come' and 'He said he will come'?",
                options: ["No difference", "Different levels of certainty about fulfillment", "Formal vs informal", "Past vs present reporting"],
                correct: 1,
                explanation: "'Would come' (backshifted) suggests uncertainty about fulfillment, while 'will come' (no backshift) suggests the promise/plan is still valid."
            },
            {
                question: "Why is 'She asked me what was my name' incorrect in standard English?",
                options: ["Wrong tense", "Indirect questions require statement word order", "Missing 'that'", "Pronoun error"],
                correct: 1,
                explanation: "Indirect questions must follow statement word order (subject + verb), not question order (verb + subject)."
            },
            {
                question: "What semantic shift occurs in 'He said, \"I will help you\"' vs 'He said he would help me'?",
                options: ["No change", "From commitment to reported commitment", "From future to past", "From certain to uncertain"],
                correct: 1,
                explanation: "Direct speech presents the original commitment, while indirect speech reports that commitment, creating semantic distance from the original speaker's intention."
            }
        ],
        medium: [
            {
                question: "Convert: 'I may come tomorrow,' he said.",
                options: ["He said he may come the next day", "He said he might come the next day", "He said he will come the next day", "He said he would come the next day"],
                correct: 1,
                explanation: "'May' changes to 'might' in indirect speech, and 'tomorrow' becomes 'the next day'."
            },
            {
                question: "Change: 'Where have you been?' she asked me.",
                options: ["She asked me where I have been", "She asked me where I had been", "She asked me where have I been", "She asked me where had I been"],
                correct: 1,
                explanation: "Present Perfect changes to Past Perfect in indirect speech, and question word order changes to statement order."
            },
            {
                question: "Convert: 'Don't make noise,' the teacher told the students.",
                options: ["The teacher told the students not to make noise", "The teacher told the students don't make noise", "The teacher told the students to not make noise", "The teacher said the students not to make noise"],
                correct: 0,
                explanation: "Negative commands use 'told + object + not to + base verb'."
            },
            {
                question: "Change: 'I wish I were rich,' he said.",
                options: ["He said he wished he was rich", "He said he wished he were rich", "He said he wishes he were rich", "He said he wish he were rich"],
                correct: 1,
                explanation: "In indirect speech, 'wish' remains unchanged when expressing hypothetical situations, and subjunctive 'were' is maintained."
            },
            {
                question: "Convert: 'How beautiful the sunset is!' she exclaimed.",
                options: ["She exclaimed that how beautiful the sunset was", "She exclaimed that the sunset was very beautiful", "She exclaimed how beautiful the sunset was", "She exclaimed the sunset is very beautiful"],
                correct: 2,
                explanation: "Exclamatory sentences starting with 'how' retain the structure but change tense: 'is' becomes 'was'."
            }
        ],
        hard: [
            {
                question: "Convert: 'I would have helped you if you had asked me,' he said.",
                options: ["He said he would have helped me if I had asked him", "He said he will have helped me if I had asked him", "He said he would help me if I had asked him", "He said he would have helped me if I have asked him"],
                correct: 0,
                explanation: "Third conditional remains unchanged in indirect speech, but pronouns change: 'you' to 'me', 'me' to 'him'."
            },
            {
                question: "Change: 'Let's go to the cinema,' she suggested.",
                options: ["She suggested to go to the cinema", "She suggested going to the cinema", "She suggested that we go to the cinema", "She suggested we should go to the cinema"],
                correct: 1,
                explanation: "For suggestions with 'Let's', we use 'suggested + gerund' (going) or 'suggested that + clause'."
            },
            {
                question: "Convert: 'I'd rather you didn't smoke here,' he said.",
                options: ["He said he'd rather I didn't smoke there", "He said he would rather I don't smoke there", "He said he'd rather I hadn't smoked there", "He said he would rather I didn't smoke here"],
                correct: 0,
                explanation: "'I'd rather you didn't' remains in the same form, but pronouns and place adverbs change: 'you' to 'I', 'here' to 'there'."
            },
            {
                question: "Change: 'If only I had studied harder!' she regretted.",
                options: ["She regretted that if only she had studied harder", "She regretted that she had not studied harder", "She regretted not having studied harder", "She regretted if only she had studied harder"],
                correct: 2,
                explanation: "Regret about past actions is expressed as 'regretted + not + gerund perfect' or 'regretted that + clause'."
            },
            {
                question: "Convert: 'Would that I were young again!' he sighed.",
                options: ["He sighed that he wished he were young again", "He sighed would that he were young again", "He sighed that would he were young again", "He sighed he would be young again"],
                correct: 0,
                explanation: "The archaic 'Would that' (expressing a wish) converts to 'wished that' in indirect speech."
            }
        ]
    },

    usage: {
        easy: [
            {
                question: "Choose the correct option: '_____ is raining outside.'",
                options: ["It", "There", "This", "That"],
                correct: 0,
                explanation: "'It' is used as a dummy subject for weather conditions. We say 'It is raining' not 'There is raining'."
            },
            {
                question: "Fill in the blank: '_____ are many books on the shelf.'",
                options: ["It", "There", "They", "These"],
                correct: 1,
                explanation: "'There' is used in existential sentences to indicate the existence of something. 'There are' is used with plural nouns."
            },
            {
                question: "Which is correct: 'She _____ a teacher.'",
                options: ["am", "is", "are", "be"],
                correct: 1,
                explanation: "'Is' is used with third person singular subjects (he, she, it). 'She is a teacher' is correct."
            },
            {
                question: "Choose the right form: 'They _____ students.'",
                options: ["am", "is", "are", "was"],
                correct: 2,
                explanation: "'Are' is used with plural subjects and with 'you'. 'They are students' is correct."
            },
            {
                question: "Fill in: 'I _____ a book.'",
                options: ["has", "have", "had", "having"],
                correct: 1,
                explanation: "'Have' is used with first person (I, we) and second person (you) and plural subjects. 'I have a book' is correct."
            },
            {
                question: "Which is correct: 'He _____ a car.'",
                options: ["has", "have", "had", "having"],
                correct: 0,
                explanation: "'Has' is used with third person singular subjects (he, she, it). 'He has a car' is correct."
            },
            {
                question: "Choose: '_____ were late yesterday.'",
                options: ["I", "You", "He", "She"],
                correct: 1,
                explanation: "'Were' is used with 'you' (singular and plural), 'we', and 'they'. Among the options, only 'You' takes 'were'."
            },
            {
                question: "Fill in: 'The book _____ on the table yesterday.'",
                options: ["is", "are", "was", "were"],
                correct: 2,
                explanation: "'Was' is used with singular subjects in the past tense. 'The book' is singular, so 'was' is correct."
            }
        ],
        medium: [
            {
                question: "Choose the correct usage: '_____ seems to be a problem with the computer.'",
                options: ["It", "There", "This", "That"],
                correct: 1,
                explanation: "'There seems to be' is an existential construction indicating the existence of a problem."
            },
            {
                question: "Which is appropriate: '_____ is important to exercise regularly.'",
                options: ["It", "There", "This", "Exercise"],
                correct: 0,
                explanation: "'It' is used as a dummy subject when the real subject (to exercise regularly) comes later in the sentence."
            },
            {
                question: "Select the correct form: 'Neither John nor Mary _____ present.'",
                options: ["am", "is", "are", "were"],
                correct: 1,
                explanation: "With 'neither...nor', the verb agrees with the subject closer to it. 'Mary' is singular, so 'is' is correct."
            },
            {
                question: "Choose: 'The team _____ won the championship.'",
                options: ["has", "have", "had", "having"],
                correct: 0,
                explanation: "'Team' is a collective noun treated as singular in American English, so 'has' is correct."
            },
            {
                question: "Which is correct: 'Each of the students _____ a book.'",
                options: ["has", "have", "had", "having"],
                correct: 0,
                explanation: "'Each' is always singular, so it takes 'has' regardless of the plural noun that follows."
            },
            {
                question: "Fill in: 'If I _____ rich, I would travel the world.'",
                options: ["am", "was", "were", "are"],
                correct: 2,
                explanation: "In second conditional (hypothetical situations), we use 'were' for all persons after 'if'."
            }
        ],
        hard: [
            {
                question: "Distinguish the usage: '_____ having been no response, we proceeded.' vs '_____ was no response, so we proceeded.'",
                options: ["There/It", "It/There", "There/There", "It/It"],
                correct: 2,
                explanation: "Both use 'There' - the first is an absolute construction 'There having been', the second is simple past 'There was'."
            },
            {
                question: "Choose the sophisticated usage: '_____ remains to be seen whether the plan will work.'",
                options: ["It", "There", "This", "That"],
                correct: 0,
                explanation: "'It remains to be seen' is an idiomatic expression where 'it' is an anticipatory subject for the whether-clause."
            },
            {
                question: "Select the formal register: 'Should _____ be any questions, please contact me.'",
                options: ["it", "there", "they", "you"],
                correct: 1,
                explanation: "In formal conditional constructions, 'should there be' (inverted form of 'if there should be') is used."
            },
            {
                question: "Which maintains subject-verb agreement: 'A number of students _____ absent' vs 'The number of students _____ increasing.'",
                options: ["are/is", "is/are", "are/are", "is/is"],
                correct: 0,
                explanation: "'A number of' takes plural verb (are), while 'The number of' takes singular verb (is)."
            },
            {
                question: "Choose the correct existential: '_____ to have been several attempts made.'",
                options: ["It appears", "There appear", "It appear", "There appears"],
                correct: 1,
                explanation: "'There appear to have been' - 'appear' agrees with the logical subject 'several attempts' (plural)."
            }
        ],
        conceptual: [
            {
                question: "What's the fundamental difference between 'it' and 'there' as dummy subjects?",
                options: ["No difference", "'It' for weather, 'there' for existence", "'It' anticipates clauses, 'there' introduces new information", "Both B and C"],
                correct: 3,
                explanation: "'It' serves as anticipatory subject for clauses and in weather expressions, while 'there' introduces new information in existential constructions. Both are dummy subjects but serve different discourse functions."
            },
            {
                question: "Why is 'There seems to be a problem' preferred over 'It seems to be a problem'?",
                options: ["Grammatical rule", "Existential vs anticipatory function", "Formal vs informal", "No preference"],
                correct: 1,
                explanation: "'There seems' introduces new information (existential), while 'It seems' would anticipate a clause. The existential function is appropriate for introducing 'a problem'."
            },
            {
                question: "What principle governs 'have/has' distribution beyond person and number?",
                options: ["Only person and number", "Semantic role of subject", "Temporal reference", "Aspectual meaning"],
                correct: 3,
                explanation: "'Have/has' as auxiliary verbs create perfect aspect (completed actions with present relevance), while as main verbs they indicate possession or relationships."
            },
            {
                question: "How does the choice between 'was/were' in conditionals reflect grammatical vs semantic agreement?",
                options: ["No difference", "'Were' shows subjunctive mood regardless of person", "'Was' is always wrong in conditionals", "Regional variation only"],
                correct: 1,
                explanation: "In conditionals, 'were' represents subjunctive mood (hypothetical/contrary-to-fact), overriding normal person agreement. This shows semantic (mood-based) rather than grammatical (person-based) agreement."
            },
            {
                question: "What makes 'There having been no objections, we proceeded' different from 'There were no objections, so we proceeded'?",
                options: ["Same meaning, different style", "Absolute construction vs coordinate clauses", "Formal vs informal", "Temporal difference"],
                correct: 1,
                explanation: "The first uses an absolute construction (participial phrase) showing sophisticated syntax, while the second uses coordinate clauses. The absolute construction is more concise and formal."
            }
        ]
    }
};

// Helper function to get questions by category and difficulty
function getQuestions(category, difficulty) {
    return QUESTIONS_BANK[category] && QUESTIONS_BANK[category][difficulty] 
        ? QUESTIONS_BANK[category][difficulty] 
        : [];
}

// Helper function to get random questions
function getRandomQuestions(category, difficulty, count = 10) {
    const questions = getQuestions(category, difficulty);
    if (questions.length === 0) return [];
    
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, questions.length));
}