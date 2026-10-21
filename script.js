/* ==========================================================================
   SECTION 1: DATA
   Contains mood definitions, initial quote banks, theme palettes, and state.
   ========================================================================== */

const MOOD_DATA = {
  anxious: {
    label: "Anxious",
    icon: "🌿",
    gradientStart: "#e8f3ee",
    gradientEnd: "#d1e7dd",
    primaryAccent: "#3b7a57",
    primaryHover: "#2d5e43",
    cardBg: "rgba(255, 255, 255, 0.8)",
    textColor: "#2c3e35",
    mutedColor: "#5c7367",
    quotes: [
      { text: "Take a deep breath. You do not have to figure out your entire life in this single moment.", author: "Gentle Reminder" },
      { text: "Anxiety is a feeling, not a definition of who you are. This too shall pass.", author: "Inner Peace" },
      { text: "You have survived 100% of your hardest days so far. You are doing fine.", author: "Mindful Thought" },
      { text: "Slow down. Inhale peace, exhale tension. You are safe in this present moment.", author: "Calm Mind" },
      { text: "Trust yourself. You have overcome obstacles before, and you will navigate this too.", author: "Strength Within" }
    ]
  },
  confident: {
    label: "Confident",
    icon: "🔥",
    gradientStart: "#fff3e0",
    gradientEnd: "#ffe0b2",
    primaryAccent: "#e65100",
    primaryHover: "#bf360c",
    cardBg: "rgba(255, 255, 255, 0.82)",
    textColor: "#3e2723",
    mutedColor: "#795548",
    quotes: [
      { text: "You possess the strength and wisdom needed to achieve extraordinary things.", author: "Self Empowerment" },
      { text: "Your potential is unlimited. Step boldly into rooms you once felt underprepared for.", author: "Courage First" },
      { text: "Doubt is only a thought. Your capability is a proven reality.", author: "Inner Power" },
      { text: "Own your story and stand tall. You belong wherever your goals take you.", author: "Bold Spirit" },
      { text: "You are fully equipped to turn challenges into major stepping stones.", author: "Unstoppable You" }
    ]
  },
  sad: {
    label: "Sad",
    icon: "🌧️",
    gradientStart: "#e1f5fe",
    gradientEnd: "#b3e5fc",
    primaryAccent: "#0288d1",
    primaryHover: "#01579b",
    cardBg: "rgba(255, 255, 255, 0.82)",
    textColor: "#012a4a",
    mutedColor: "#4682b4",
    quotes: [
      { text: "It is okay to rest and feel tired. Honor your emotions without judgment.", author: "Compassionate Self" },
      { text: "Even the darkest, stormiest night eventually surrenders to a bright morning sunrise.", author: "Hope Restored" },
      { text: "Be gentle with your heart today. Healing is never a linear journey.", author: "Soft Healing" },
      { text: "Your feelings are valid. Give yourself time to recover at your own natural pace.", author: "Gentle Comfort" },
      { text: "You are deeply loved, even when you cannot feel it in this current moment.", author: "Universal Embrace" }
    ]
  },
  happy: {
    label: "Happy",
    icon: "☀️",
    gradientStart: "#fffde7",
    gradientEnd: "#fff9c4",
    primaryAccent: "#fbc02d",
    primaryHover: "#f57f17",
    cardBg: "rgba(255, 255, 255, 0.85)",
    textColor: "#332a00",
    mutedColor: "#827717",
    quotes: [
      { text: "Radiate your joy out into the world. Your positive energy inspires everyone around you.", author: "Joyful Light" },
      { text: "Celebrate this bright moment! Gratitude turns what we have into more than enough.", author: "Abundant Mind" },
      { text: "Happiness grows when shared. Keep shining your natural warmth today.", author: "Sunlit Soul" },
      { text: "Embrace every slice of goodness coming your way right now.", author: "Pure Positivity" },
      { text: "Your laughter and optimism are true gifts to the world.", author: "Radiant Spirit" }
    ]
  },
  "self-love": {
    label: "Self-Love",
    icon: "💖",
    gradientStart: "#fce4ec",
    gradientEnd: "#f8bbd0",
    primaryAccent: "#c2185b",
    primaryHover: "#880e4f",
    cardBg: "rgba(255, 255, 255, 0.82)",
    textColor: "#31111d",
    mutedColor: "#883955",
    quotes: [
      { text: "You are inherently worthy of love, respect, and kindness—exactly as you are.", author: "Self Acceptance" },
      { text: "Treat yourself with the same gentle grace you so freely extend to others.", author: "Kind Heart" },
      { text: "Your worth is not measured by productivity or perfection.", author: "Peaceful Mind" },
      { text: "You are enough. You have always been enough. You will always be enough.", author: "Core Truth" },
      { text: "Nurture your soul today. You deserve your own undivided attention and care.", author: "Loving Self" }
    ]
  }
};


/* ==========================================================================
   SECTION 2: RULES / STATE MANAGEMENT
   Non-repeating quote cycle engine, time check-ins, storage & favorites.
   ========================================================================== */

class AffirmationEngine {
  constructor() {
    this.currentMood = "anxious";
    
    // Cycle history tracking: stores remaining indices per mood
    this.moodPools = {};
    this.currentQuoteIndex = -1;
    this.favorites = this.loadFavorites();

    this.initPools();
  }

  // Initialize or reset remaining quote pools for each mood
  initPools() {
    Object.keys(MOOD_DATA).forEach(mood => {
      this.resetMoodPool(mood);
    });
  }

  // Reset a specific mood's quote pool once fully cycled through
  resetMoodPool(mood) {
    const totalQuotes = MOOD_DATA[mood].quotes.length;
    this.moodPools[mood] = Array.from({ length: totalQuotes }, (_, i) => i);
  }

  // Retrieve next non-repeating quote for the active mood
  getNextQuote(mood = this.currentMood) {
    this.currentMood = mood;
    
    // If cycle is complete, reset pool to start a fresh cycle
    if (!this.moodPools[mood] || this.moodPools[mood].length === 0) {
      this.resetMoodPool(mood);
    }

    // Pick a random index from remaining pool
    const pool = this.moodPools[mood];
    const randomIndexInPool = Math.floor(Math.random() * pool.length);
    const selectedQuoteIndex = pool.splice(randomIndexInPool, 1)[0];

    this.currentQuoteIndex = selectedQuoteIndex;
    
    return {
      quote: MOOD_DATA[mood].quotes[selectedQuoteIndex],
      remainingInCycle: pool.length,
      totalInCycle: MOOD_DATA[mood].quotes.length
    };
  }

  // Add custom user affirmation
  addCustomQuote(mood, text) {
    if (MOOD_DATA[mood]) {
      const newQuote = { text: text, author: "My Custom Affirmation" };
      MOOD_DATA[mood].quotes.push(newQuote);
      // Add index of newly created quote to active pool
      const newIndex = MOOD_DATA[mood].quotes.length - 1;
      this.moodPools[mood].push(newIndex);
    }
  }

  // Determine time of day check-in greeting
  getTimeOfDayGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { badge: "🌅 Morning Check-in", title: "Start your morning with calm & focus" };
    } else if (hour >= 12 && hour < 17) {
      return { badge: "☀️ Afternoon Reflection", title: "Take a peaceful midday break" };
    } else if (hour >= 17 && hour < 22) {
      return { badge: "🌆 Evening Unwind", title: "Rest your mind after a full day" };
    } else {
      return { badge: "🌙 Nighttime Peace", title: "Soft thoughts before sleeping" };
    }
  }

  // LocalStorage Helpers for Favorites
  loadFavorites() {
    try {
      const saved = localStorage.getItem("serene_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem("serene_favorites", JSON.stringify(this.favorites));
    } catch (e) {
      console.warn("Could not access localStorage");
    }
  }

  toggleFavorite(quote, mood) {
    const index = this.favorites.findIndex(f => f.text === quote.text);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
      return false; // Removed
    } else {
      this.favorites.push({ ...quote, mood });
      this.saveFavorites();
      return true; // Added
    }
  }

  isFavorited(quoteText) {
    return this.favorites.some(f => f.text === quoteText);
  }
}


/* ==========================================================================
   SECTION 3: DISPLAY / UI CONTROLLERS
   DOM Manipulation, Theme Switcher, Event Listeners, Canvas Share Card.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const engine = new AffirmationEngine();

  // DOM Elements
  const timeBadgeEl = document.getElementById("time-badge");
  const greetingTitleEl = document.getElementById("greeting-title");
  const bgOverlayEl = document.getElementById("bg-overlay");
  
  const moodBtns = document.querySelectorAll(".mood-btn");
  const moodTagEl = document.getElementById("current-mood-tag");
  const cycleCounterEl = document.getElementById("cycle-counter");
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");
  
  const nextBtn = document.getElementById("next-btn");
  const favoriteBtn = document.getElementById("favorite-btn");
  const shareBtn = document.getElementById("share-btn");
  
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const customForm = document.getElementById("custom-quote-form");
  const customTextIn = document.getElementById("custom-text");
  const customMoodIn = document.getElementById("custom-mood");
  
  const favoritesListEl = document.getElementById("favorites-list");
  const favCountEl = document.getElementById("fav-count");

  const modalEl = document.getElementById("share-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const shareCanvas = document.getElementById("share-canvas");
  const downloadCardBtn = document.getElementById("download-card-btn");

  let currentQuoteObj = null;

  // Initialize Time-of-Day checkin
  function applyTimeCheckIn() {
    const timeInfo = engine.getTimeOfDayGreeting();
    timeBadgeEl.textContent = timeInfo.badge;
    greetingTitleEl.textContent = timeInfo.title;
  }

  // Update theme colors based on current mood
  function applyTheme(moodKey) {
    const config = MOOD_DATA[moodKey];
    const root = document.documentElement;

    root.style.setProperty("--bg-gradient-start", config.gradientStart);
    root.style.setProperty("--bg-gradient-end", config.gradientEnd);
    root.style.setProperty("--primary-accent", config.primaryAccent);
    root.style.setProperty("--primary-accent-hover", config.primaryHover);
    root.style.setProperty("--card-bg", config.cardBg);
    root.style.setProperty("--text-main", config.textColor);
    root.style.setProperty("--text-muted", config.mutedColor);

    // Update active state on mood buttons
    moodBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mood === moodKey);
    });
  }

  // Render Affirmation Quote
  function renderAffirmation(moodKey) {
    applyTheme(moodKey);
    const result = engine.getNextQuote(moodKey);
    currentQuoteObj = result.quote;

    // Fade animation
    quoteTextEl.style.opacity = 0;
    setTimeout(() => {
      quoteTextEl.textContent = `"${currentQuoteObj.text}"`;
      quoteAuthorEl.textContent = `— ${currentQuoteObj.author}`;
      moodTagEl.textContent = `${MOOD_DATA[moodKey].icon} ${MOOD_DATA[moodKey].label}`;
      
      const usedInCycle = result.totalInCycle - result.remainingInCycle;
      cycleCounterEl.textContent = `${usedInCycle} of ${result.totalInCycle}`;

      quoteTextEl.style.opacity = 1;
      updateFavoriteButtonState();
    }, 150);
  }

  // Update Favorite Heart Icon State
  function updateFavoriteButtonState() {
    if (currentQuoteObj && engine.isFavorited(currentQuoteObj.text)) {
      favoriteBtn.classList.add("favorited");
    } else {
      favoriteBtn.classList.remove("favorited");
    }
  }

  // Render Saved Favorites Tab
  function renderFavoritesUI() {
    favCountEl.textContent = engine.favorites.length;
    favoritesListEl.innerHTML = "";

    if (engine.favorites.length === 0) {
      favoritesListEl.innerHTML = `<p class="empty-state">No saved affirmations yet. Click the heart icon on any quote to collect it here!</p>`;
      return;
    }

    engine.favorites.forEach(fav => {
      const item = document.createElement("div");
      item.className = "fav-item";
      item.innerHTML = `
        <div class="fav-item-text">
          <strong>"${fav.text}"</strong>
          <br><small style="color:var(--text-muted);">${MOOD_DATA[fav.mood]?.label || "Custom"}</small>
        </div>
        <button class="delete-fav" title="Remove">&times;</button>
      `;

      item.querySelector(".delete-fav").addEventListener("click", () => {
        engine.toggleFavorite(fav, fav.mood);
        renderFavoritesUI();
        updateFavoriteButtonState();
      });

      favoritesListEl.appendChild(item);
    });
  }

  function generateShareImage() {
    const ctx = shareCanvas.getContext("2d");
    const width = shareCanvas.width;
    const height = shareCanvas.height;
    const moodConfig = MOOD_DATA[engine.currentMood];

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, moodConfig.gradientStart);
    grad.addColorStop(1, moodConfig.gradientEnd);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Decorative Inner Card Frame
    ctx.fillStyle = "#ffffff";
    ctx.roundRect(40, 40, width - 80, height - 80, 24);
    ctx.fill();

    // Decorative Icon & Mood Header
    ctx.fillStyle = moodConfig.primaryAccent;
    ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${moodConfig.icon} ${moodConfig.label.toUpperCase()} AFFIRMATION`, width / 2, 100);

    // Quote Text Wrapping Engine
    ctx.fillStyle = moodConfig.textColor;
    ctx.font = "500 26px 'Plus Jakarta Sans', sans-serif";
    
    const words = currentQuoteObj.text.split(" ");
    let line = "";
    let lines = [];
    const maxWidth = width - 140;

    for (let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + " ";
      let metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    // Render Center-Aligned Lines
    let startY = (height / 2) - ((lines.length * 36) / 2) + 10;
    lines.forEach((l, idx) => {
      ctx.fillText(`"${l.trim()}"`, width / 2, startY + (idx * 36));
    });

    // Author & Branding
    ctx.fillStyle = moodConfig.mutedColor;
    ctx.font = "italic 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(`— ${currentQuoteObj.author}`, width / 2, startY + (lines.length * 36) + 30);

    ctx.fillStyle = moodConfig.primaryAccent;
    ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("SereneMind Daily Affirmations", width / 2, height - 70);

    // Prepare Download Link
    downloadCardBtn.href = shareCanvas.toDataURL("image/png");
  }

  // Event Listeners
  moodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      renderAffirmation(btn.dataset.mood);
    });
  });

  nextBtn.addEventListener("click", () => {
    renderAffirmation(engine.currentMood);
  });

  favoriteBtn.addEventListener("click", () => {
    if (currentQuoteObj) {
      engine.toggleFavorite(currentQuoteObj, engine.currentMood);
      updateFavoriteButtonState();
      renderFavoritesUI();
    }
  });

  shareBtn.addEventListener("click", () => {
    if (!currentQuoteObj) return;
    generateShareImage();
    modalEl.classList.add("active");
  });

  closeModalBtn.addEventListener("click", () => {
    modalEl.classList.remove("active");
  });

  // Tab Navigation
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Handle Custom Quote Creation
  customForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = customTextIn.value.trim();
    const mood = customMoodIn.value;

    if (text) {
      engine.addCustomQuote(mood, text);
      customTextIn.value = "";
      renderAffirmation(mood);
      alert("Your affirmation has been added to your personal rotation!");
    }
  });

  // Polyfill Canvas roundRect if needed
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    };
  }

  // Initial Load Trigger
  applyTimeCheckIn();
  renderAffirmation("anxious");
  renderFavoritesUI();
});
