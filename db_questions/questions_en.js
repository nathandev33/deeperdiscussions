let questions = [
  {
    number: 0,
    text: "What is your most precious memory?",
    category: "",
  },
  {
    number: 1,
    text: "What have you tried recently that you enjoyed?",
    category: "",
  },
  {
    number: 0,
    text: "What is the least useful know-how you have?",
    category: "",
  },
  {
    number: 2,
    text: "What do you wish you had more time for?",
    category: "",
  },
  {
    number: 3,
    text: "What makes you feel really alive?",
    category: "",
  },
  {
    number: 4,
    text: "What have you achieved when you thought it was impossible before?",
    category: "",
  },
  {
    number: 5,
    text: "What do you do differently than most other people?",
    category: "",
  },
  {
    number: 6,
    text: "What's the most spontaneous thing you've done so far?",
    category: "",
  },
  {
    number: 7,
    text: "Who are you currently thinking about the most and why?",
    category: "",
  },
  {
    number: 8,
    text: "What 3 things do you have in common with all the people in the room?",
    category: "",
  },
  {
    number: 9,
    text: "If you could choose from all the people in the world, who would you most like to have dinner with?",
    category: "",
  },

  {
    number: 11,
    text: 'What does a "perfect" day look like to you?',
    category: "",
  },
  {
    number: 12,
    text: "When was the last time you sang to yourself? And when in front of someone else?",
    category: "",
  },
  {
    number: 14,
    text: "Do you have a premonition of what your death will look like?",
    category: "",
  },
  {
    number: 15,
    text: "Have you ever been beaten by anyone (other than your parents)?",
    category: "",
  },
  {
    number: 16,
    text: "If you could change anything about the way you were raised, what would it be?",
    category: "",
  },
  {
    number: 17,
    text: "Take 4 minutes and tell your life story in as much detail as you can.",
    category: "",
  },
  {
    number: 18,
    text: "If you could wake up tomorrow with one arbitrary trait or skill, what would it be?",
    category: "",
  },
  {
    number: 19,
    text: "If you had a crystal ball that could tell you the truth about your life, your future, or anything else, what would you want to know?",
    category: "",
  },
  {
    number: 20,
    text: "Is there something you've been wanting to do for a long time? Why haven't you done it yet?",
    category: "",
  },
  {
    number: 21,
    text: "What is your greatest achievement in life?",
    category: "",
  },
  {
    number: 22,
    text: "Ask someone: what are 3 things you find positive about me?",
    category: "",
  },
  {
    number: 23,
    text: "Do you feel you had a happier childhood than most other people?",
    category: "",
  },
  {
    number: 24,
    text: "Ask someone: if we were to become partners, what do you think is important for me to know about you?",
    category: "",
  },
  {
    number: 25,
    text: "When was the last time you cried in front of another person? And when have you cried all by yourself?",
    category: "",
  },
  {
    number: 26,
    text: "What is too serious to joke about, if there is such a thing in your opinion?",
    category: "",
  },
  {
    number: 27,
    text: "Your home, where all your possessions are located, will catch fire. After you save your loved ones and pets, you have time to go back for just one more thing. What would that be? And why?",
    category: "",
  },
  {
    number: 28,
    text: "If you were to die tonight without being able to communicate in any way, what would you most regret not telling someone? And why haven't you done it yet?",
    category: "",
  },
  {
    number: 29,
    text: "Of all your family members, whose death would affect you the most? Why?",
    category: "",
  },
  {
    number: 30,
    text: "You know you're gonna die in 20 seconds. What would be your last words?",
    category: "",
  },
  {
    number: 31,
    text: "How is your life compared to how you imagined it as a child?",
    category: "",
  },
  {
    number: 32,
    text: "What do you think was the biggest obstacle to achieving your goals?",
    category: "",
  },
  {
    number: 34,
    text: "What do you consider to be the most difficult period in your life?",
    category: "",
  },
  {
    number: 35,
    text: "What do you think is the best and worst way to propose to someone?",
    category: "",
  },
  {
    number: 36,
    text: "What are some common assumptions/assumptions people have about you that aren't necessarily true?",
    category: "",
  },
  {
    number: 37,
    text: "What are you looking forward to when you go home?",
    category: "",
  },
  {
    number: 38,
    text: "How do you spend the nights you can't sleep?",
    category: "",
  },
  {
    number: 39,
    text: "Imagine being released from prison after 10 years. How would you spend your first day of freedom?",
    category: "",
  },
  {
    number: 40,
    text: "What's the common trait of everyone you've dated?",
    category: "",
  },
  {
    number: 41,
    text: "Where do you go and what do you do when you need to recharge?",
    category: "",
  },
  {
    number: 42,
    text: "If you found out you were going blind in a year, what would you want to see?",
    category: "",
  },
  {
    number: 43,
    text: "Ask one person in the room: what is your view/opinion of me?",
    category: "",
  },
  {
    number: 44,
    text: "What emotion do you feel most often?",
    category: "",
  },
  {
    number: 45,
    text: "What makes you feel loved?",
    category: "",
  },
  {
    number: 46,
    text: "How do you want people to feel when they are with you?",
    category: "",
  },
  {
    number: 47,
    text: "What's a dream/wish you've never said out loud?",
    category: "",
  },
  {
    number: 48,
    text: "What do you lie about most often?",
    category: "",
  },
  {
    number: 49,
    text: "If you had to change your name, what would you want?",
    category: "",
  },
  {
    number: 50,
    text: "When do you feel most vulnerable?",
    category: "",
  },
  {
    number: 51,
    text: "What's usually guaranteed to make you laugh?",
    category: "",
  },
  {
    number: 52,
    text: "Is it easy for you to speak kindly to yourself and like yourself?",
    category: "",
  },
  {
    number: 53,
    text: "What annoys you most about people?",
    category: "",
  },
  {
    number: 54,
    text: "What are you most afraid of?",
    category: "",
  },
  {
    number: 55,
    text: "Which of these values is most important to you - money, recognition, independence, honor?",
    category: "",
  },
  {
    number: 56,
    text: "What nickname have you ever had and what gave you that nickname?",
    category: "",
  },
  {
    number: 57,
    text: "What would you like your life to look like in 5 years? What would your typical day look like?",
    category: "",
  },
  {
    number: 59,
    text: "What experience has most influenced your life?",
    category: "",
  },
  {
    number: 60,
    text: "What is your relationship with your parents? How is it different from your childhood/adolescent relationship?",
    category: "",
  },
  {
    number: 61,
    text: "How would your best friend describe you?",
    category: "",
  },
  {
    number: 62,
    text: "Do you follow your heart or your mind more often?",
    category: "",
  },
  {
    number: 63,
    text: "Do you prefer to go on a date with one person - with the understanding that it can go either way - or to go on dates with multiple people at a time and then eventually develop a relationship with the person who fits you best?",
    category: "",
  },
  {
    number: 64,
    text: "What's one thing you'd like to change about today?",
    category: "",
  },
  {
    number: 65,
    text: "What's the craziest thing you've done with someone?",
    category: "",
  },
  {
    number: 66,
    text: "What did a relationship with a person who's already broken up teach you?",
    category: "",
  },
  {
    number: 67,
    text: "What's the best advice anyone's ever given you?",
    category: "",
  },
  {
    number: 68,
    text: "What is your favorite childhood memory?",
    category: "",
  },
  {
    number: 69,
    text: "What do you do when you get angry?",
    category: "",
  },
  {
    number: 70,
    text: "What's your favorite romantic moment?",
    category: "",
  },
  {
    number: 71,
    text: "What would you like people to know about you?",
    category: "",
  },
  {
    number: 72,
    text: "What's one thing you wish you could change about yourself?",
    category: "",
  },
  {
    number: 73,
    text: "Would you forgive your partner if he cheated on you?",
    category: "",
  },
  {
    number: 74,
    text: "What is your favorite movie/book and what made it appeal to you so much?",
    category: "",
  },
  {
    number: 75,
    text: "Do you consider yourself an introvert or an extrovert? On what basis?",
    category: "",
  },
  {
    number: 77,
    text: "How do you feel about sharing your passwords (for mobile, cloud, email, etc.) with your partner?",
    category: "",
  },
  {
    number: 78,
    text: "How do you feel about your best friends of the opposite sex?",
    category: "",
  },
  {
    number: 79,
    text: 'If you were looking for a partner through an online dating site, what would you write in the box "my requirements for a future partner (no train goes through it!):"',
    category: "",
  },
  {
    number: 80,
    text: "What are usually your first thoughts upon waking up?",
    category: "",
  },
  {
    number: 81,
    text: "Have you ever doubted your sanity or that you are sane?",
    category: "",
  },
  {
    number: 82,
    text: "What have you ever said or done that still makes you crazy just thinking about it?",
    category: "",
  },
  {
    number: 83,
    text: "What's the first thing you focus on after you walk into someone's apartment/house?",
    category: "",
  },
  {
    number: 85,
    text: "What song did you listen to when you were in love?",
    category: "",
  },
  {
    number: 86,
    text: "When did you experience the most physical pain?",
    category: "",
  },
  {
    number: 87,
    text: "What is your worst childhood experience?",
    category: "",
  },
  {
    number: 88,
    text: "What modern trend annoys you the most?",
    category: "",
  },
  {
    number: 89,
    text: "What were you like in elementary school?",
    category: "",
  },
  {
    number: 90,
    text: "When did you trick someone the most?",
    category: "",
  },
  {
    number: 92,
    text: "When was the last time you got into an embarrassing situation?",
    category: "",
  },
  {
    number: 93,
    text: "What new habit have you introduced into your life in the last year?",
    category: "",
  },
  {
    number: 94,
    text: "When was the last time you pretended to be sick?",
    category: "",
  },
  {
    number: 95,
    text: "If you could create and administer your new state, what would it be like?",
    category: "",
  },
  {
    number: 96,
    text: "Do you want your children to be like you?",
    category: "",
  },
  {
    number: 97,
    text: "What's your number one priority tomorrow?",
    category: "",
  },
  {
    number: 98,
    text: "What do you like about yourself?",
    category: "",
  },
  {
    number: 99,
    text: "What is the most common thing that makes you change your mind?",
    category: "",
  },
  {
    number: 100,
    text: 'What classmate was the most "cool" in high school and where is he/she now?',
    category: "",
  },
  {
    number: 101,
    text: "Did you happen to meet someone years later and were completely surprised by how they live now?",
    category: "",
  },
  {
    number: 102,
    text: "When was the last time you had a fit of laughter?",
    category: "",
  },
  {
    number: 103,
    text: "What's the easiest way for someone to lose your confidence?",
    category: "",
  },
  {
    number: 104,
    text: "How would you change the way criminals are punished?",
    category: "",
  },
  {
    number: 105,
    text: "What can be learned about you from a search of your room?",
    category: "",
  },

  {
    number: 110,
    text: "Do you believe a person must change before you forgive them?",
    category: "",
  },
  {
    number: 111,
    text: "When have you ever felt like an outsider?",
    category: "",
  },
  {
    number: 112,
    text: "Do you feel like you had to earn your parents' love during your childhood?",
    category: "",
  },
  {
    number: 115,
    text: "How different would your best friends' lives be if they had never met you?",
    category: "",
  },
  {
    number: 116,
    text: "In what ways have you stayed the same over the last 10 years?",
    category: "",
  },
  {
    number: 117,
    text: "If you lost your memory, what three people would help you remember the most from your past?",
    category: "",
  },
  {
    number: 118,
    text: "How do you envision your daily routine after you retire?",
    category: "",
  },
  {
    number: 119,
    text: "What's a surefire recipe for getting into an argument with your parents?",
    category: "",
  },
  {
    number: 120,
    text: "Ask one person in the room: what was your impression of me when we first met?",
    category: "",
  },
  {
    number: 121,
    text: "What's your record for the most hours you've not slept and when did that happen?",
    category: "",
  },
  {
    number: 122,
    text: "Your current life is just an alternate future. In reality, you're fifteen. What would you say to your 15-year-old self if you had the chance?",
    category: "",
  },
  {
    number: 123,
    text: "What's your least favorite memory from school?",
    category: "",
  },
  {
    number: 124,
    text: "When and how did you first encounter the idea of an afterlife?",
    category: "",
  },
  {
    number: 125,
    text: "If you had a lucid dream every night, what would you dream about?",
    category: "",
  },
  {
    number: 126,
    text: "What part of what you ask of someone else do you not do yourself?",
    category: "",
  },
  {
    number: 128,
    text: "If you could ask your 2050 self one question, what would it be?",
    category: "",
  },
  {
    number: 130,
    text: "Do you still love someone you were in love with in the past?",
    category: "",
  },
  {
    number: 131,
    text: "Did you break someone's heart?",
    category: "",
  },
  {
    number: 133,
    text: "What's your favorite meme?",
    category: "",
  },
  {
    number: 134,
    text: "What mobile app do you use most often?",
    category: "",
  },
  {
    number: 135,
    text: "Have you ever cut your own hair? How did it turn out?",
    category: "",
  },
  {
    number: 136,
    text: "Have you ever deliberately given someone bad advice?",
    category: "",
  },
  {
    number: 137,
    text: "Are you going to tell someone something in a few years or more? Why don't you tell him now?",
    category: "",
  },
  {
    number: 138,
    text: "Have you ever had a fight with anyone? With who and for what?",
    category: "",
  },
];

let poznavaci_ = [
  {
    number: 0,
    text: "What is your most precious memory?",
    category: "",
  },
  {
    number: 1,
    text: "What have you tried recently that you enjoyed?",
    category: "",
  },
  {
    number: 0,
    text: "What is the least useful know-how you have?",
    category: "",
  },
  {
    number: 2,
    text: "What do you wish you had more time for?",
    category: "",
  },
  {
    number: 3,
    text: "What makes you feel really alive?",
    category: "",
  },
  {
    number: 4,
    text: "What have you achieved when you thought it was impossible before?",
    category: "",
  },
  {
    number: 5,
    text: "What do you do differently than most other people?",
    category: "",
  },
  {
    number: 6,
    text: "What's the most spontaneous thing you've done so far?",
    category: "",
  },
  {
    number: 7,
    text: "Who are you currently thinking about the most and why?",
    category: "",
  },
  {
    number: 8,
    text: "What 3 things do you have in common with all the people in the room?",
    category: "",
  },
  {
    number: 9,
    text: "If you could choose from all the people in the world, who would you most like to have dinner with?",
    category: "",
  },

  {
    number: 11,
    text: 'What does a "perfect" day look like to you?',
    category: "",
  },
  {
    number: 12,
    text: "When was the last time you sang to yourself? And when in front of someone else?",
    category: "",
  },
  {
    number: 14,
    text: "Do you have a premonition of what your death will look like?",
    category: "",
  },
  {
    number: 15,
    text: "Have you ever been beaten by anyone (other than your parents)?",
    category: "",
  },
  {
    number: 16,
    text: "If you could change anything about the way you were raised, what would it be?",
    category: "",
  },
  {
    number: 17,
    text: "Take 4 minutes and tell your life story in as much detail as you can.",
    category: "",
  },
  {
    number: 18,
    text: "If you could wake up tomorrow with one arbitrary trait or skill, what would it be?",
    category: "",
  },
  {
    number: 19,
    text: "If you had a crystal ball that could tell you the truth about your life, your future, or anything else, what would you want to know?",
    category: "",
  },
  {
    number: 20,
    text: "Is there something you've been wanting to do for a long time? Why haven't you done it yet?",
    category: "",
  },
  {
    number: 21,
    text: "What is your greatest achievement in life?",
    category: "",
  },
  {
    number: 22,
    text: "Ask someone: what are 3 things you find positive about me?",
    category: "",
  },
  {
    number: 23,
    text: "Do you feel you had a happier childhood than most other people?",
    category: "",
  },
  {
    number: 24,
    text: "Ask someone: if we were to become partners, what do you think is important for me to know about you?",
    category: "",
  },
  {
    number: 25,
    text: "When was the last time you cried in front of another person? And when have you cried all by yourself?",
    category: "",
  },
  {
    number: 26,
    text: "What is too serious to joke about, if there is such a thing in your opinion?",
    category: "",
  },
  {
    number: 27,
    text: "Your home, where all your possessions are located, will catch fire. After you save your loved ones and pets, you have time to go back for just one more thing. What would that be? And why?",
    category: "",
  },
  {
    number: 28,
    text: "If you were to die tonight without being able to communicate in any way, what would you most regret not telling someone? And why haven't you done it yet?",
    category: "",
  },
  {
    number: 29,
    text: "Of all your family members, whose death would affect you the most? Why?",
    category: "",
  },
  {
    number: 30,
    text: "You know you're gonna die in 20 seconds. What would be your last words?",
    category: "",
  },
  {
    number: 31,
    text: "How is your life compared to how you imagined it as a child?",
    category: "",
  },
  {
    number: 32,
    text: "What do you think was the biggest obstacle to achieving your goals?",
    category: "",
  },
  {
    number: 34,
    text: "What do you consider to be the most difficult period in your life?",
    category: "",
  },
  {
    number: 35,
    text: "What do you think is the best and worst way to propose to someone?",
    category: "",
  },
  {
    number: 36,
    text: "What are some common assumptions/assumptions people have about you that aren't necessarily true?",
    category: "",
  },
  {
    number: 37,
    text: "What are you looking forward to when you go home?",
    category: "",
  },
  {
    number: 38,
    text: "How do you spend the nights you can't sleep?",
    category: "",
  },
  {
    number: 39,
    text: "Imagine being released from prison after 10 years. How would you spend your first day of freedom?",
    category: "",
  },
  {
    number: 40,
    text: "What's the common trait of everyone you've dated?",
    category: "",
  },
  {
    number: 41,
    text: "Where do you go and what do you do when you need to recharge?",
    category: "",
  },
  {
    number: 42,
    text: "If you found out you were going blind in a year, what would you want to see?",
    category: "",
  },
  {
    number: 43,
    text: "Ask one person in the room: what is your view/opinion of me?",
    category: "",
  },
  {
    number: 44,
    text: "What emotion do you feel most often?",
    category: "",
  },
  {
    number: 45,
    text: "What makes you feel loved?",
    category: "",
  },
  {
    number: 46,
    text: "How do you want people to feel when they are with you?",
    category: "",
  },
  {
    number: 47,
    text: "What's a dream/wish you've never said out loud?",
    category: "",
  },
  {
    number: 48,
    text: "What do you lie about most often?",
    category: "",
  },
  {
    number: 49,
    text: "If you had to change your name, what would you want?",
    category: "",
  },
  {
    number: 50,
    text: "When do you feel most vulnerable?",
    category: "",
  },
  {
    number: 51,
    text: "What's usually guaranteed to make you laugh?",
    category: "",
  },
  {
    number: 52,
    text: "Is it easy for you to speak kindly to yourself and like yourself?",
    category: "",
  },
  {
    number: 53,
    text: "What annoys you most about people?",
    category: "",
  },
  {
    number: 54,
    text: "What are you most afraid of?",
    category: "",
  },
  {
    number: 55,
    text: "Which of these values is most important to you - money, recognition, independence, honor?",
    category: "",
  },
  {
    number: 56,
    text: "What nickname have you ever had and what gave you that nickname?",
    category: "",
  },
  {
    number: 57,
    text: "What would you like your life to look like in 5 years? What would your typical day look like?",
    category: "",
  },
  {
    number: 59,
    text: "What experience has most influenced your life?",
    category: "",
  },
  {
    number: 60,
    text: "What is your relationship with your parents? How is it different from your childhood/adolescent relationship?",
    category: "",
  },
  {
    number: 61,
    text: "How would your best friend describe you?",
    category: "",
  },
  {
    number: 62,
    text: "Do you follow your heart or your mind more often?",
    category: "",
  },
  {
    number: 63,
    text: "Do you prefer to go on a date with one person - with the understanding that it can go either way - or to go on dates with multiple people at a time and then eventually develop a relationship with the person who fits you best?",
    category: "",
  },
  {
    number: 64,
    text: "What's one thing you'd like to change about today?",
    category: "",
  },
  {
    number: 65,
    text: "What's the craziest thing you've done with someone?",
    category: "",
  },
  {
    number: 66,
    text: "What did a relationship with a person who's already broken up teach you?",
    category: "",
  },
  {
    number: 67,
    text: "What's the best advice anyone's ever given you?",
    category: "",
  },
  {
    number: 68,
    text: "What is your favorite childhood memory?",
    category: "",
  },
  {
    number: 69,
    text: "What do you do when you get angry?",
    category: "",
  },
  {
    number: 70,
    text: "What's your favorite romantic moment?",
    category: "",
  },
  {
    number: 71,
    text: "What would you like people to know about you?",
    category: "",
  },
  {
    number: 72,
    text: "What's one thing you wish you could change about yourself?",
    category: "",
  },
  {
    number: 73,
    text: "Would you forgive your partner if he cheated on you?",
    category: "",
  },
  {
    number: 74,
    text: "What is your favorite movie/book and what made it appeal to you so much?",
    category: "",
  },
  {
    number: 75,
    text: "Do you consider yourself an introvert or an extrovert? On what basis?",
    category: "",
  },
  {
    number: 77,
    text: "How do you feel about sharing your passwords (for mobile, cloud, email, etc.) with your partner?",
    category: "",
  },
  {
    number: 78,
    text: "How do you feel about your best friends of the opposite sex?",
    category: "",
  },
  {
    number: 79,
    text: 'If you were looking for a partner through an online dating site, what would you write in the box "my requirements for a future partner (no train goes through it!):"',
    category: "",
  },
  {
    number: 80,
    text: "What are usually your first thoughts upon waking up?",
    category: "",
  },
  {
    number: 81,
    text: "Have you ever doubted your sanity or that you are sane?",
    category: "",
  },
  {
    number: 82,
    text: "What have you ever said or done that still makes you crazy just thinking about it?",
    category: "",
  },
  {
    number: 83,
    text: "What's the first thing you focus on after you walk into someone's apartment/house?",
    category: "",
  },
  {
    number: 85,
    text: "What song did you listen to when you were in love?",
    category: "",
  },
  {
    number: 86,
    text: "When did you experience the most physical pain?",
    category: "",
  },
  {
    number: 87,
    text: "What is your worst childhood experience?",
    category: "",
  },
  {
    number: 88,
    text: "What modern trend annoys you the most?",
    category: "",
  },
  {
    number: 89,
    text: "What were you like in elementary school?",
    category: "",
  },
  {
    number: 90,
    text: "When did you trick someone the most?",
    category: "",
  },
  {
    number: 92,
    text: "When was the last time you got into an embarrassing situation?",
    category: "",
  },
  {
    number: 93,
    text: "What new habit have you introduced into your life in the last year?",
    category: "",
  },
  {
    number: 94,
    text: "When was the last time you pretended to be sick?",
    category: "",
  },
  {
    number: 95,
    text: "If you could create and administer your new state, what would it be like?",
    category: "",
  },
  {
    number: 96,
    text: "Do you want your children to be like you?",
    category: "",
  },
  {
    number: 97,
    text: "What's your number one priority tomorrow?",
    category: "",
  },
  {
    number: 98,
    text: "What do you like about yourself?",
    category: "",
  },
  {
    number: 99,
    text: "What is the most common thing that makes you change your mind?",
    category: "",
  },
  {
    number: 100,
    text: 'What classmate was the most "cool" in high school and where is he/she now?',
    category: "",
  },
  {
    number: 101,
    text: "Did you happen to meet someone years later and were completely surprised by how they live now?",
    category: "",
  },
  {
    number: 102,
    text: "When was the last time you had a fit of laughter?",
    category: "",
  },
  {
    number: 103,
    text: "What's the easiest way for someone to lose your confidence?",
    category: "",
  },
  {
    number: 104,
    text: "How would you change the way criminals are punished?",
    category: "",
  },
  {
    number: 105,
    text: "What can be learned about you from a search of your room?",
    category: "",
  },

  {
    number: 110,
    text: "Do you believe a person must change before you forgive them?",
    category: "",
  },
  {
    number: 111,
    text: "When have you ever felt like an outsider?",
    category: "",
  },
  {
    number: 112,
    text: "Do you feel like you had to earn your parents' love during your childhood?",
    category: "",
  },
  {
    number: 115,
    text: "How different would your best friends' lives be if they had never met you?",
    category: "",
  },
  {
    number: 116,
    text: "In what ways have you stayed the same over the last 10 years?",
    category: "",
  },
  {
    number: 117,
    text: "If you lost your memory, what three people would help you remember the most from your past?",
    category: "",
  },
  {
    number: 118,
    text: "How do you envision your daily routine after you retire?",
    category: "",
  },
  {
    number: 119,
    text: "What's a surefire recipe for getting into an argument with your parents?",
    category: "",
  },
  {
    number: 120,
    text: "Ask one person in the room: what was your impression of me when we first met?",
    category: "",
  },
  {
    number: 121,
    text: "What's your record for the most hours you've not slept and when did that happen?",
    category: "",
  },
  {
    number: 122,
    text: "Your current life is just an alternate future. In reality, you're fifteen. What would you say to your 15-year-old self if you had the chance?",
    category: "",
  },
  {
    number: 123,
    text: "What's your least favorite memory from school?",
    category: "",
  },
  {
    number: 124,
    text: "When and how did you first encounter the idea of an afterlife?",
    category: "",
  },
  {
    number: 125,
    text: "If you had a lucid dream every night, what would you dream about?",
    category: "",
  },
  {
    number: 126,
    text: "What part of what you ask of someone else do you not do yourself?",
    category: "",
  },
  {
    number: 128,
    text: "If you could ask your 2050 self one question, what would it be?",
    category: "",
  },
  {
    number: 130,
    text: "Do you still love someone you were in love with in the past?",
    category: "",
  },
  {
    number: 131,
    text: "Did you break someone's heart?",
    category: "",
  },
  {
    number: 133,
    text: "What's your favorite meme?",
    category: "",
  },
  {
    number: 134,
    text: "What mobile app do you use most often?",
    category: "",
  },
  {
    number: 135,
    text: "Have you ever cut your own hair? How did it turn out?",
    category: "",
  },
  {
    number: 136,
    text: "Have you ever deliberately given someone bad advice?",
    category: "",
  },
  {
    number: 137,
    text: "Are you going to tell someone something in a few years or more? Why don't you tell him now?",
    category: "",
  },
  {
    number: 138,
    text: "Have you ever had a fight with anyone? With who and for what?",
    category: "",
  },
];

let hypoteticke_ = [
  {
    number: 0,
    text: "What laws would you repeal if you could?",
    category: "",
  },
  {
    number: 0,
    text: "What laws would you make if you could?",
    category: "",
  },
  {
    number: 113,
    text: "If a law were to be made that made it mandatory to pass a knowledge and skills test before someone could raise a child, would you support it?",
    category: "",
  },
  {
    number: 108,
    text: "If we were stranded on a desert island, what role would each of us play?",
    category: "",
  },
  {
    number: 106,
    text: "Would you rather go to prison for life for a murder you didn't commit or kill someone and be free?",
    category: "",
  },
  {
    number: 0,
    text: "Would you rather date a person who loves you but you don't, or a person you love but he doesn't love you?",
    category: "",
  },
  {
    number: 58,
    text: "Would you rather live with a partner (but without a child) or with a child (but without a partner)?",
    category: "",
  },
  {
    number: 13,
    text: "Imagine you know you're going to live to be 90. At 30, you can choose to keep the body and looks or the mind of your 30-year-old self for the remaining 60 years. Which will you choose?",
    category: "",
  },
  {
    number: 0,
    text: "Every time someone breaks a bone in your body, you get 250,000 CZK. How many bones would you have broken?",
    category: "",
  },
  {
    number: 0,
    text: "Would you like to live in a world where every person had a bubble over their head that said what they were thinking right now?",
    category: "",
  },
  {
    number: 0,
    text: "Would you want to be more intelligent if it meant you'd be less happy too?",
    category: "",
  },
  {
    number: 0,
    text: "If you were offered 20,000 CZK to dance for 5 minutes without music and on a stage in a stadium full of people, would you accept?",
    category: "",
  },
  {
    number: 0,
    text: "If you could be a man (if you're a woman) / woman (if you're a man) for a day, what new things would you try?",
    category: "",
  },
  {
    number: 0,
    text: "This room is on fire and only you can save all but one of this room. Who's there not room for?",
    category: "",
  },
  {
    number: 0,
    text: "If you could erase everyone's memory and put any memory in their minds, what would it be?",
    category: "",
  },
  {
    number: 0,
    text: "What would you do if you found out you were adopted?",
    category: "",
  },
  {
    number: 0,
    text: "Your sibling/boyfriend is lying tied up on the left rail. There are 10 people you don't know tied to the right rail. The train is now coming very fast on the left track, would you switch to the right?",
    category: "",
  },
  {
    number: 0,
    text: "Would you rather forget who you are or who everyone else is?",
    category: "",
  },
  {
    number: 0,
    text: "If your setter had an accident a week before the wedding that caused him/her to lose both legs, would he/she take? would you have married him/her? then?",
    category: "",
  },
  {
    number: 0,
    text: "If you don't brush your teeth, wash your face, use deodorant or anything like that for 1 year, you will get 1 million CZK. You may not tell anyone about this deal for the entire year. Do you accept?",
    category: "",
  },
  {
    number: 0,
    text: "Would you rather wear two sizes bigger or smaller?",
    category: "",
  },
  {
    number: 0,
    text: "You made a mistake at work that no one noticed. Would you point it out or continue on and hope the matter doesn't come up?",
    category: "",
  },
  {
    number: 0,
    text: "If you could go back in time and kill Hitler as a newborn baby, would you do it?",
    category: "",
  },
  {
    number: 0,
    text: "If you won 3,000 Kč for having a tarantula crawl all over you for 30 minutes, would you accept? If not, how much would they have to offer you to get you to accept?",
    category: "",
  },
  {
    number: 0,
    text: "Would you accept a job for 50,000 CZK/month where you sit in a black room for 8.5 hours every day and do nothing (and not sleep)?",
    category: "",
  },
  {
    number: 0,
    text: "In a terrible storm, you drive through a deserted area in a car. You see 3 hitchhikers. You only have one place to stop?",
    category: "",
  },
  {
    number: 0,
    text: "Would you leave the partner you're supposed to marry tomorrow forever if they offered you $5 million? $100 million? ",
    category: "",
  },
  {
    number: 0,
    text: "A stranger holds a gun to your head and tells you to tell him the only reason why he shouldn't kill you. What would you say?",
    category: "",
  },
  {
    number: 0,
    text: "Who would you call to help you bury a dead body? Would he do it?",
    category: "",
  },
];

let crazy_ = [
  {
    number: 0,
    text: "What do you like to smell even though most people don't?",
    category: "",
  },

  {
    number: 0,
    text: "Would you go to a nude beach? Why?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever lied to your best friend? About what?",
    category: "",
  },
  {
    number: 0,
    text: "Did you ever happen to walk into a room as a child just as your parents were doing it? What was going through your head?",
    category: "",
  },
  {
    number: 0,
    text: "Do you ever admire yourself in the mirror?",
    category: "",
  },
  {
    number: 0,
    text: "When was the last time you flexed your muscles or anything else in front of a mirror?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever regretted something you put on social media? What?",
    category: "",
  },
  {
    number: 0,
    text: "What's the most illegal thing you've ever done?",
    category: "",
  },
  {
    number: 0,
    text: "What in your web browsing history would you be ashamed of if someone saw?",
    category: "",
  },
  {
    number: 0,
    text: "What's your worst habit?",
    category: "",
  },
  {
    number: 0,
    text: "What do you usually think about when you're on the toilet?",
    category: "",
  },
  {
    number: 0,
    text: "Who do you think is the worst dressed person in the room?",
    category: "",
  },
  {
    number: 0,
    text: "What's the longest time you've left fallen food on the floor and then eaten it?",
    category: "",
  },
  {
    number: 0,
    text: "What's the last thing you searched for on the internet?",
    category: "",
  },
  {
    number: 0,
    text: "Do you ever pee in the shower?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever gone a whole day without underwear?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever stolen anything?",
    category: "",
  },
  {
    number: 0,
    text: "What's the weirdest thing you've ever been caught doing in the mirror?",
    category: "",
  },
  {
    number: 0,
    text: "Has a teacher ever caught you cheating on a test?",
    category: "",
  },
  {
    number: 0,
    text: "What do you have in your folders, apps, etc. that are specifically password protected or hidden?",
    category: "",
  },
  {
    number: 0,
    text: "Who was the first person you fell in love with?",
    category: "",
  },
  {
    number: 0,
    text: "Do you have an imaginary friend? Have you?",
    category: "",
  },
  {
    number: 0,
    text: "What's the craziest thing you did when you were drunk?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever been in a secret relationship with someone?",
    category: "",
  },
  {
    number: 0,
    text: "What part of your body do you wash first when you bathe/shower?",
    category: "",
  },
  {
    number: 0,
    text: "Do you ever imagine what it would be like to punch someone with your fist or open a car door right in front of a passing cyclist, etc.?",
    category: "",
  },
  {
    number: 0,
    text: "When was the last time you totally screwed up and no one noticed?",
    category: "",
  },
  {
    number: 0,
    text: "What's the weirdest thing you've ever done on public transport?",
    category: "",
  },
  {
    number: 0,
    text: "What's the cruelest or meanest thing you've ever said to someone?",
    category: "",
  },
  {
    number: 0,
    text: "Who do you envy the most and what?",
    category: "",
  },
  {
    number: 0,
    text: "Would you like to date your childhood sweetheart now?",
    category: "",
  },
  {
    number: 0,
    text: "What's the cheapest gift you've ever received and from whom?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever lied about your age?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever lied to your boss? About what?",
    category: "",
  },
  {
    number: 0,
    text: "Who in your family and friends annoys you the most and why?",
    category: "",
  },
  {
    number: 0,
    text: "What is the most scandalous photo in your storage?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever been in love with a colleague?",
    category: "",
  },
  {
    number: 0,
    text: "Have you ever stalked someone or someone stalked you?",
    category: "",
  },
  {
    number: 0,
    text: "How many people have you kissed?",
    category: "",
  },
  {
    number: 0,
    text: "What child of your friends do you secretly dislike?",
    category: "",
  },
  {
    number: 0,
    text: "What's the weirdest thing you've ever said to a stranger?",
    category: "",
  },
  {
    number: 0,
    text: "Who in the room do you trust the least?",
    category: "",
  },
  {
    number: 0,
    text: "If you could change one thing about your partner's appearance, what would it be?",
    category: "",
  },
  {
    number: 0,
    text: "What is the most embarrassing thing that has happened to you on a date with another person?",
    category: "",
  },
];

export { questions, poznavaci_, hypoteticke_, crazy_ };
