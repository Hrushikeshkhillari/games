// Sentence data
const sentences = [
  "The dog barks at strangers",
  "He reads a book daily",
  "She paints colorful landscapes",
  "The sun sets behind mountains",
  "They swim in the pool",
  "The cat purrs when petted",
  "He cooks delicious Italian food",
  "She listens to calming music",
  "The car drives through town",
  "They play board games together",
  "He likes to watch action movies",
  "She goes for a walk",
  "The ocean waves crash loudly",
  "The bird sings a melody",
  "He works out at the gym",
  "She practices playing guitar",
  "The flower blooms in spring",
  "They visit family on holidays",
  "He likes to watch football",
  "She reads poetry out loud",
  "The wind blows through trees",
  "The horse gallops through fields",
  "He enjoys solving puzzles",
  "She writes short stories",
  "The baby crawls on floor",
  "They run in the park",
  "He takes photographs of nature",
  "She goes to bed early",
  "The moon shines brightly tonight",
  "The tree provides shade",
  "He rides his bike around town",
  "She sings in the choir",
  "The airplane takes off quickly",
  "They have a picnic in park",
  "He likes to watch comedy shows",
  "She cooks healthy meals",
  "The river flows gently downstream",
  "The snow falls softly from sky",
  "He drinks coffee in the morning",
  "She practices playing piano",
  "The child blows bubbles outside",
  "They ride on the rollercoaster",
  "He enjoys watching basketball",
  "She reads a novel before bed",
  "The clock chimes every hour",
  "The sun shines brightly today",
  "He plays video games on weekends",
  "She takes a dance class",
  "The bus drives through city",
  "The star twinkles in sky",
  "He takes a long hike",
  "She goes to the beach",
  "The camera captures the moment",
  "They explore the city together",
  "He is an avid fisherman",
  "She is learning a new language",
  "The butterfly flutters its wings",
  "The train travels through mountains",
  "He plays soccer with friends",
  "She goes shopping for clothes",
  "The bell rings loudly at school",
  "The apple falls from the tree",
  "He watches a movie with family",
  "She goes to the theater to watch a play",
  "The motorcycle speeds down highway",
  "They go to the arcade to play games",
  "He likes to play golf on weekends",
  "She practices ballet at the studio",
  "The church bell tolls on Sunday",
  "The lion roars in the jungle",
  "He climbs a mountain",
  "She goes to the art museum",
  "The ship sails across the ocean",
  "They go to the amusement park",
  "He enjoys listening to jazz music",
  "She cooks dinner for her family",
  "The airplane lands safely",
  "The snake slithers on the ground",
  "He goes to the basketball game",
  "She reads a magazine in the park",
  "The dolphin swims in the ocean",
  "They go on a road trip",
  "He likes to watch hockey",
  "She practices yoga in the morning",
  "The helicopter flies overhead",
  "The spider crawls up the wall",
  "He goes to the baseball game",
  "The boat sails on the lake",
  "He listens to podcasts daily",
  "She draws with colored pencils",
  "The wind chimes make music",
  "They go on a hike",
  "The snowman melts in the sun",
  "He writes poetry in his notebook",
  "She does yoga in the park",
  "The fire crackles in the fireplace",
  "They go for a bike ride",
  "He watches the sunset",
  "She eats lunch with friends",
  "The child plays with toys",
  "The sun is shining bright",
  "I like eating pizza sometimes",
  "Dogs are great companions always",
  "The sky is so blue",
  "Life is full of surprises",
  "He plays basketball very well",
  "I love spending time outdoors",
  "The ocean is vast and beautiful",
  "Music makes me happy always",
  "She dances like a pro",
  "I enjoy reading mystery novels",
  "Hes a good listener always",
  "The trees are turning green",
  "She sings like an angel",
  "Cooking is my favorite hobby",
  "The mountains are so majestic",
  "They love each other deeply",
  "Running is great exercise always",
  "The moon is full tonight",
  "She has a beautiful voice",
  "I like to travel often",
  "The stars are twinkling brightly",
  "Hes a talented musician always",
  "We should be kind always",
  "The beach is so relaxing",
  "Shes a skilled artist always",
  "I love spending time with friends",
  "The flowers smell so sweet",
  "Hes a great teacher always",
  "We should protect our environment",
  "The wind is blowing hard",
  "Shes a wonderful storyteller always",
  "I love watching movies sometimes",
  "The world is full of wonders",
  "Hes a hardworking student always",
  "We should appreciate what we have",
  "The snow is falling softly",
  "Shes a loyal friend always",
  "I love playing video games sometimes",
  "The city is so vibrant",
  "Hes a generous person always",
  "We should always help others",
  "The rain is pouring heavily",
  "Shes a brave warrior always",
  "I love listening to music always",
  "The desert is so vast",
  "Hes a loving father always",
  "We should be grateful always",
  "The leaves are changing colors",
  "Shes a reliable employee always",
  "I love swimming in the pool",
  "The park is so peaceful",
  "Hes a trustworthy friend always",
  "We should forgive each other",
  "The clouds are so fluffy",
  "Shes a talented dancer always",
  "I love hiking in the mountains",
  "The river is so refreshing",
  "Hes a responsible person always",
  "We should respect each other",
  "The sunsets are so beautiful",
  "Shes a creative writer always",
  "I love playing sports sometimes",
  "The architecture is so impressive",
  "Hes a patient doctor always",
  "We should be honest always",
  "The sea is so calm",
  "Shes a thoughtful listener always",
  "I love attending concerts sometimes",
  "The countryside is so peaceful",
  "Hes a dedicated worker always",
  "We should show compassion always",
  "The waves are so mesmerizing",
  "Shes a good public speaker always",
  "I love trying new things sometimes",
  "The wildlife is so diverse",
  "Hes a talented athlete always",
  "We should be understanding always",
  "The night sky is so mysterious",
  "Shes a skilled chef always",
  "I love visiting new places",
  "The history is so fascinating",
  "Hes a wise old man always",
  "We should be patient always",
  "The gardens are so beautiful",
  "Shes a passionate activist always",
  "I love eating ice cream sometimes",
  "The waterfalls are so breathtaking",
  "Hes a successful businessman always",
  "We should be tolerant always"
];

let filteredSentences = [];

// Utility functions
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Check if two words are anagrams
function isAnagram(word1, word2) {
  const clean1 = word1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  const clean2 = word2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return clean1.length > 0 && clean1 === clean2 && word1.toLowerCase() !== word2.toLowerCase();
}

// Find anagram matches in a sentence
function findAnagramMatches(sentence, searchTerm) {
  const matches = [];
  const words = sentence.split(/\s+/);
  
  if (!searchTerm || searchTerm.trim() === '') return matches;
  
  words.forEach((word) => {
    if (isAnagram(word, searchTerm)) {
      matches.push({
        word: word,
        index: words.indexOf(word)
      });
    }
  });
  
  return matches;
}

// Detect patterns in sentence
function detectPatterns(sentence) {
  const patterns = [];
  const words = sentence.split(' ');
  
  // Check for reversed words
  words.forEach(word => {
    const reversed = reverseString(word.toLowerCase());
    if (words.some(w => w.toLowerCase() === reversed && w.toLowerCase() !== word.toLowerCase())) {
      patterns.push({ type: 'reversed', word: word, match: reversed });
    }
  });
  
  // Check for palindromes
  words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanWord.length > 2 && cleanWord === reverseString(cleanWord)) {
      patterns.push({ type: 'palindrome', word: word });
    }
  });
  
  // Check for repeated words
  const wordCount = {};
  words.forEach(word => {
    const cleanWord = word.toLowerCase();
    wordCount[cleanWord] = (wordCount[cleanWord] || 0) + 1;
  });
  Object.keys(wordCount).forEach(word => {
    if (wordCount[word] > 1) {
      patterns.push({ type: 'repeated', word: word, count: wordCount[word] });
    }
  });
  
  return patterns;
}

// Filter sentences based on search
function filterSentences() {
  const searchValue = document.getElementById('searchInput').value.trim();
  const searchLower = searchValue.toLowerCase();
  
  if (searchValue === '') {
    filteredSentences = sentences;
    displaySentences();
    return;
  }
  
  filteredSentences = sentences.filter(sentence => {
    const sentenceLower = sentence.toLowerCase();
    
    // Check for direct match
    if (sentenceLower.includes(searchLower)) {
      return true;
    }
    
    // Check for anagram matches
    const anagramMatches = findAnagramMatches(sentence, searchValue);
    if (anagramMatches.length > 0) {
      return true;
    }
    
    return false;
  });
  
  displaySentences();
}

// Highlight search terms in text
function highlightText(text, searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') {
    return text;
  }
  
  const searchLower = searchTerm.toLowerCase().replace(/[^a-z]/g, '');
  const words = text.split(/(\s+)/);
  const highlightedWords = [];
  
  words.forEach(word => {
    const wordLower = word.toLowerCase();
    const cleanWord = word.replace(/[^a-z]/gi, '').toLowerCase();
    
    // Check for anagram match first
    if (cleanWord.length > 0 && isAnagram(word, searchTerm)) {
      highlightedWords.push(`<span class="highlight-red">${word}</span>`);
    }
    // Check for direct substring match
    else if (wordLower.includes(searchLower) && searchLower.length > 0) {
      const regex = new RegExp(`(${searchLower})`, 'gi');
      highlightedWords.push(word.replace(regex, '<span class="highlight-red">$1</span>'));
    }
    else {
      highlightedWords.push(word);
    }
  });
  
  return highlightedWords.join('');
}

// Display sentences
function displaySentences() {
  const container = document.getElementById('container');
  container.innerHTML = '';
  
  if (filteredSentences.length === 0) {
    container.innerHTML = '<div class="no-results">No sentences found matching your criteria.</div>';
    return;
  }
  
  const searchValue = document.getElementById('searchInput').value.trim();
  
  filteredSentences.forEach((sentence) => {
    const patterns = detectPatterns(sentence);
    const card = document.createElement('div');
    card.className = 'sentence-card';
    
    let patternBadges = '';
    if (patterns.length > 0) {
      patternBadges = patterns.map(p => {
        if (p.type === 'reversed') {
          return `<span class="badge badge-reversed">Reversed: ${p.word} ↔ ${p.match}</span>`;
        } else if (p.type === 'palindrome') {
          return `<span class="badge badge-palindrome">Palindrome: ${p.word}</span>`;
        } else if (p.type === 'repeated') {
          return `<span class="badge badge-repeated">Repeated: ${p.word} (${p.count}x)</span>`;
        }
        return '';
      }).join('');
    }
    
    // Check for anagram matches
    const anagramMatches = searchValue ? findAnagramMatches(sentence, searchValue) : [];
    let anagramBadge = '';
    if (anagramMatches.length > 0) {
      anagramBadge = `<span class="badge badge-anagram">Anagram: ${anagramMatches.map(m => m.word).join(', ')}</span>`;
    }
    
    const highlightedSentence = highlightText(sentence, searchValue);
    
    card.innerHTML = `
      <div class="card-header">
        <div class="pattern-badges">
          ${anagramBadge}
          ${patternBadges}
        </div>
      </div>
      <div class="sentence-text">${highlightedSentence}</div>
    `;
    
    container.appendChild(card);
  });
}

// Voice Search functionality
let recognition = null;
let isListening = false;

// Initialize Speech Recognition
function initVoiceRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = function() {
      isListening = true;
      updateVoiceButton(true);
      const voiceBtn = document.getElementById('voiceSearchBtn');
      voiceBtn.style.animation = 'pulse 1.5s ease-in-out infinite';
    };
    
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById('searchInput').value = transcript;
      filterSentences();
      updateVoiceButton(false);
      isListening = false;
    };
    
    recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
      updateVoiceButton(false);
      isListening = false;
      alert('Voice recognition error. Please try again.');
    };
    
    recognition.onend = function() {
      updateVoiceButton(false);
      isListening = false;
    };
  } else {
    console.warn('Speech recognition not supported in this browser');
    const voiceBtn = document.getElementById('voiceSearchBtn');
    if (voiceBtn) {
      voiceBtn.style.display = 'none';
    }
  }
}

function toggleVoiceSearch() {
  if (!recognition) {
    alert('Voice search is not supported in your browser. Please use a modern browser like Chrome, Edge, or Safari.');
    return;
  }
  
  if (isListening) {
    recognition.stop();
    isListening = false;
    updateVoiceButton(false);
  } else {
    try {
      recognition.start();
    } catch (error) {
      console.error('Error starting recognition:', error);
      updateVoiceButton(false);
    }
  }
}

function updateVoiceButton(listening) {
  const voiceIcon = document.getElementById('voiceSearchIcon');
  const voiceBtn = document.getElementById('voiceSearchBtn');
  
  if (listening) {
    voiceIcon.className = 'fa-solid fa-circle';
    voiceIcon.style.color = '#ff0000';
    voiceBtn.classList.add('listening');
  } else {
    voiceIcon.className = 'fa-solid fa-microphone';
    voiceIcon.style.color = '';
    voiceBtn.classList.remove('listening');
    voiceBtn.style.animation = 'none';
  }
}

// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById('themeToggle');
  
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }
}

// Initialize
window.onload = function() {
  filteredSentences = sentences;
  displaySentences();
  document.body.classList.add('light-mode');
  initVoiceRecognition();
};
