/* STREAMING_CHUNK:CSS Variables & Theme Definitions... */
:root {
  --font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Palette Defaults (Anxious / Calming Sage) */
  --bg-gradient-start: #e8f3ee;
  --bg-gradient-end: #d1e7dd;
  --primary-accent: #3b7a57;
  --primary-accent-hover: #2d5e43;
  --card-bg: rgba(255, 255, 255, 0.75);
  --text-main: #2c3e35;
  --text-muted: #5c7367;
  --shadow-color: rgba(45, 94, 67, 0.12);
  --border-glass: rgba(255, 255, 255, 0.8);

  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 12px;
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* STREAMING_CHUNK:Global Styles & Reset... */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  min-height: 100vh;
  color: var(--text-main);
  background-color: var(--bg-gradient-start);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  position: relative;
  overflow-x: hidden;
}

/* Animated Dynamic Background Layer */
.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 20% 20%, var(--bg-gradient-start), var(--bg-gradient-end));
  background-size: 150% 150%;
  z-index: -1;
  transition: background 0.8s ease-in-out;
}

/* STREAMING_CHUNK:Layout Container & Header... */
.app-container {
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.app-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.time-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-glass);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary-accent);
}

.greeting-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.3;
}

.greeting-subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
}

/* STREAMING_CHUNK:Mood Selector Bar... */
.mood-selector {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0 8px 0;
  scrollbar-width: none; /* Firefox */
}

.mood-selector::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.mood-btn {
  flex: 1;
  min-width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition);
}

.mood-btn .mood-icon {
  font-size: 1.5rem;
}

.mood-btn .mood-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}

.mood-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.8);
}

.mood-btn.active {
  background: #ffffff;
  border-color: var(--primary-accent);
  box-shadow: 0 4px 14px var(--shadow-color);
}

.mood-btn.active .mood-label {
  color: var(--primary-accent);
}

/* STREAMING_CHUNK:Affirmation Card Styling... */
.affirmation-card {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: 0 12px 32px var(--shadow-color);
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 280px;
  justify-content: space-between;
  transition: var(--transition);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mood-tag {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--primary-accent);
}

.cycle-counter {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

.quote-wrapper {
  text-align: center;
  padding: 10px 0;
}

#quote-text {
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.6;
  color: var(--text-main);
  transition: opacity 0.3s ease;
}

#quote-author {
  display: block;
  margin-top: 14px;
  font-size: 0.9rem;
  font-style: normal;
  color: var(--text-muted);
  font-weight: 600;
}

/* Action Buttons inside Card */
.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.icon-group {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: var(--radius-md);
  padding: 12px 20px;
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.action-btn.primary {
  background: var(--primary-accent);
  color: #ffffff;
  flex: 1;
}

.action-btn.primary:hover {
  background: var(--primary-accent-hover);
  transform: translateY(-1px);
}

.action-btn.secondary {
  background: var(--primary-accent);
  color: #ffffff;
}

.action-btn.icon-only {
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: var(--text-main);
  border: 1px solid var(--border-glass);
}

.action-btn.icon-only:hover {
  background: #ffffff;
  color: var(--primary-accent);
}

.action-btn.icon-only.favorited #heart-icon {
  fill: #e74c3c;
  stroke: #e74c3c;
}

/* STREAMING_CHUNK:Tools Section & Custom Tabs... */
.tools-section {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 20px;
}

.tabs {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.tab-btn {
  background: none;
  border: none;
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.tab-btn.active {
  color: var(--primary-accent);
  background: rgba(255, 255, 255, 0.8);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

/* Custom Form Styles */
.custom-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

textarea, select {
  width: 100%;
  font-family: var(--font-family);
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  color: var(--text-main);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 60px;
}

textarea:focus, select:focus {
  border-color: var(--primary-accent);
}

.form-row {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

/* Favorites List Styles */
.favorites-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 220px;
  overflow-y: auto;
}

.empty-state {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-align: center;
  padding: 20px 10px;
}

.fav-item {
  background: #ffffff;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.fav-item-text {
  font-size: 0.88rem;
  color: var(--text-main);
  line-height: 1.4;
}

.delete-fav {
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1.1rem;
}

/* STREAMING_CHUNK:Modal Window Styling... */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

.modal.active {
  display: flex;
}

.modal-content {
  background: #ffffff;
  padding: 24px;
  border-radius: var(--radius-lg);
  max-width: 420px;
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--text-muted);
}

.canvas-wrapper {
  width: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

#share-canvas {
  width: 100%;
  height: auto;
  display: block;
}

.full-width {
  width: 100%;
  text-decoration: none;
}

/* STREAMING_CHUNK:Mobile Responsive Adjustments... */
@media (max-width: 480px) {
  .greeting-title {
    font-size: 1.35rem;
  }
  .affirmation-card {
    padding: 24px 18px;
  }
  #quote-text {
    font-size: 1.15rem;
  }
  .form-row {
    flex-direction: column;
    align-items: stretch;
  }
}