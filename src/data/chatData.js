/* ------------------------------------------------------------------
   Mock AI content for the interactive demonstration.
   Every topic provides three answer styles:
   - standard: terse, technical (used by the conventional interface)
   - friendly: plain, supportive (used by the older-adult-friendly interface)
   - simpler:  an even simpler re-explanation ("Explain More Simply")
   ------------------------------------------------------------------ */

export const CHAT_TOPICS = [
  {
    id: 'what-is-ai',
    keywords: ['what is ai', 'what is artificial intelligence', 'artificial intelligence', 'define ai', 'about ai', 'ai'],
    standard:
      'Artificial intelligence is a field of computing focused on building systems that can perform tasks associated with human intelligence, such as understanding language, recognizing images, and making predictions.',
    friendly:
      'AI is technology that helps computers do tasks that usually need human thinking. For example, AI can answer questions, recognize images, and help people find information.',
    simpler:
      'Think of AI as a helpful computer assistant. You ask it something in your own words, and it tries to understand and help — a bit like asking a well-read librarian for directions.',
  },
  {
    id: 'capabilities',
    keywords: ['what can you do', 'what can you help', 'how can you help', 'what do you do', 'help me', 'capabilities'],
    standard:
      'I can answer questions, draft text such as emails or messages, summarize information, and help you find answers on a wide range of topics.',
    friendly:
      'I can help you with everyday questions. For example, I can write a message for you, explain something in simple words, or help you find information. You just type what you need, and I will do my best to help.',
    simpler:
      'In short: you ask, I help. Try typing something like "write a birthday message" or "explain what AI is".',
  },
  {
    id: 'write-message',
    keywords: ['write a birthday', 'birthday message', 'write an email', 'write a message', 'write a letter', 'email', 'letter', 'message'],
    standard:
      'Here is a short draft: "Hello, I would like to ask about a recent transaction on my account. Could you please look into it and let me know? Thank you." Would you like the tone or length adjusted?',
    friendly:
      'Of course. Here is a warm, simple message you can use: "Happy birthday! I hope your day is full of joy and the year ahead brings you good health and happiness." You can ask me to make it shorter, longer, or more personal.',
    simpler:
      'This message says two kind things: happy birthday, and good wishes for the year ahead. You can copy it and change any words you like.',
  },
  {
    id: 'weather',
    keywords: ['weather', 'rain', 'raining', 'temperature', 'forecast', 'sunny'],
    standard:
      "I don't have access to live weather data in this demonstration. In a full AI application, I would retrieve the current forecast for your location and summarize it.",
    friendly:
      'This is a demonstration, so I can\'t check the real weather. In the full version, I would tell you today\'s forecast in plain words — for example: "It will be sunny and warm today, so a light jacket is enough."',
    simpler:
      "Short answer: I can't see real weather in this demo. In the real app, I would give you today's weather in one or two easy sentences.",
  },
  {
    id: 'recipe',
    keywords: ['recipe', 'cook', 'cooking', 'oats', 'meal', 'food', 'breakfast'],
    standard:
      'A basic preparation: combine rolled oats with milk or water, cook for 5 minutes, and top with fruit or nuts. Would you like a more detailed recipe?',
    friendly:
      'Here is a simple idea: cook half a cup of oats with a cup of milk for about five minutes, then add banana or honey on top. Would you like me to explain each step more slowly?',
    simpler:
      'Very simply: mix oats with milk, warm it for five minutes, and add fruit. Three easy steps.',
  },
  {
    id: 'new-chat',
    keywords: ['new chat', 'start a new', 'how do i start', 'delete chat', 'chat history', 'start over'],
    standard:
      'To start a new conversation, select the plus icon in the sidebar. Previous conversations remain available in the history list.',
    friendly:
      'To start a new conversation, press the large "New Chat" button at the top of the left panel. Your earlier conversations stay saved in the list below, so you can always come back to them.',
    simpler:
      'Press "New Chat" — the big button on the left. Nothing is lost; old chats stay in your list.',
  },
  {
    id: 'health',
    keywords: ['medicine', 'health', 'doctor', 'tablet', 'medical', 'pain', 'hospital', 'clinic'],
    standard:
      'I can provide general health information, but I am not a substitute for professional medical advice. Please consult a qualified doctor for any medical concern.',
    friendly:
      'I can share general information, but for anything about your health it is always best to speak with your doctor — they know you and your history. Would you like help writing down questions to ask at your next visit?',
    simpler:
      'I can give general information only. For health questions, please ask your doctor — that is always the safest choice.',
  },
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon', 'namaste'],
    standard: 'Hello. How can I assist you today?',
    friendly:
      "Hello, and welcome! I'm glad you're here. You can ask me anything in your own words — or try one of the example questions below the chat.",
    simpler: 'Hello! Just type what you would like to know, in your own words.',
  },
  {
    id: 'who-are-you',
    keywords: ['who are you', 'what are you', 'your name', 'are you real'],
    standard:
      'I am a simulated AI assistant created for this research demonstration. Responses are predefined and stored locally.',
    friendly:
      "I'm a friendly AI assistant, built to show how a chat can be designed for comfort and clarity. My answers here are examples, prepared in advance for this demonstration.",
    simpler:
      "I'm a pretend AI helper made for this research demo, so you can try the design safely.",
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'thank you', 'great', 'nice', 'well done'],
    standard: "You're welcome. Let me know if there is anything else I can help with.",
    friendly:
      "You're very welcome! It's a pleasure to help. If anything is ever unclear, just ask me to explain it again — I'm happy to repeat things.",
    simpler: "You're welcome! Ask me anything else, any time.",
  },
  {
    id: 'fallback',
    keywords: [],
    standard:
      "I'm a demonstration assistant with a limited set of prepared answers. Try asking about artificial intelligence, the weather, recipes, or writing a message.",
    friendly:
      "I'm sorry, I don't have an answer prepared for that yet. This demo understands a few example topics — for instance: \"What is artificial intelligence?\", \"Write a birthday message\", or \"What can you help me with?\"",
    simpler:
      'I didn\'t understand that one. Try a short question, like "What is AI?" — or pick one of the example questions.',
  },
];

export const SUGGESTIONS = {
  accessible: [
    'What is artificial intelligence?',
    'Write a birthday message',
    'What can you help me with?',
    'How do I start a new chat?',
  ],
  conventional: [
    'Explain transformers',
    'Draft an email',
    'Summarize a topic',
  ],
};

export const ACCESSIBLE_CHATS = [
  {
    id: 'c1',
    title: 'Weather this week',
    meta: 'Yesterday',
    seed: [
      { role: 'user', text: 'Will it rain on Thursday?' },
      {
        role: 'assistant',
        topicId: 'weather',
        text: 'This is a demonstration, so I can\'t check the real weather. In the full version, I would tell you today\'s forecast in plain words — for example: "It will be sunny and warm today, so a light jacket is enough."',
      },
    ],
  },
  {
    id: 'c2',
    title: 'Email to the bank',
    meta: 'Tuesday',
    seed: [
      { role: 'user', text: 'Help me write a short email to my bank.' },
      {
        role: 'assistant',
        topicId: 'write-message',
        text: 'Of course. Here is a simple draft you can use: "Hello, I would like to ask about a recent transaction on my account. Could you please look into it and let me know? Thank you." Would you like me to make it more formal or shorter?',
      },
    ],
  },
  {
    id: 'c3',
    title: 'Recipes with oats',
    meta: 'Last week',
    seed: [
      { role: 'user', text: 'Give me a simple oats recipe.' },
      {
        role: 'assistant',
        topicId: 'recipe',
        text: 'Here is a simple idea: cook half a cup of oats with a cup of milk for about five minutes, then add banana or honey on top. Would you like me to explain each step more slowly?',
      },
    ],
  },
  {
    id: 'c4',
    title: 'Questions for my doctor',
    meta: 'Last week',
    seed: [
      { role: 'user', text: 'Can you help me prepare for a doctor visit?' },
      {
        role: 'assistant',
        topicId: 'health',
        text: 'I can share general information, but for anything about your health it is always best to speak with your doctor. I can help you write down your questions before the visit — would that help?',
      },
    ],
  },
];

export const CONVENTIONAL_CHATS = [
  {
    id: 'k1', title: 'react_hooks_debug', meta: '12:40', group: 'today', unread: true,
    seed: [
      { role: 'user', text: 'why does my effect run twice' },
      { role: 'assistant', text: 'In React 18 StrictMode, effects run twice in development to surface side effects. This does not occur in production builds.' },
    ],
  },
  {
    id: 'k2', title: 'trip_itinerary_v3', meta: '11:02', group: 'today',
    seed: [
      { role: 'user', text: '3-day itinerary, Kyoto' },
      { role: 'assistant', text: 'Day 1: Fushimi Inari, Gion. Day 2: Arashiyama, Kinkaku-ji. Day 3: Nishiki Market, museum district.' },
    ],
  },
  {
    id: 'k3', title: 'paper_summarizer', meta: '18:27', group: 'yesterday',
    seed: [
      { role: 'user', text: 'summarize abstract' },
      { role: 'assistant', text: 'The paper proposes a transformer variant with 18% fewer parameters at comparable accuracy. Training details in §4.' },
    ],
  },
  {
    id: 'k4', title: 'regex_help', meta: '09:14', group: 'yesterday', unread: true,
    seed: [
      { role: 'user', text: 'regex for ISO dates' },
      { role: 'assistant', text: 'Try /^\\d{4}-\\d{2}-\\d{2}$/. For validation with ranges, use a date library instead.' },
    ],
  },
  {
    id: 'k5', title: 'csv_cleaner', meta: 'Mon', group: 'week',
    seed: [
      { role: 'user', text: 'dedupe rows' },
      { role: 'assistant', text: 'df.drop_duplicates(subset=["id"], keep="last") after normalising whitespace.' },
    ],
  },
  {
    id: 'k6', title: 'startup_names', meta: 'Sun', group: 'week',
    seed: [
      { role: 'user', text: 'name ideas, fintech' },
      { role: 'assistant', text: 'Ledgerly, Mintfold, Kernwise, Payline, Numera.' },
    ],
  },
  {
    id: 'k7', title: 'ml_notes_2', meta: 'Sat', group: 'week',
    seed: [
      { role: 'user', text: 'bias-variance recap' },
      { role: 'assistant', text: 'Bias: error from wrong assumptions. Variance: error from sensitivity to the training sample. Managed via regularisation and model capacity.' },
    ],
  },
  {
    id: 'k8', title: 'docker_cleanup', meta: 'Fri', group: 'week',
    seed: [
      { role: 'user', text: 'free disk space' },
      { role: 'assistant', text: 'docker system prune -a --volumes. Check docker system df first.' },
    ],
  },
];