/* ==========================================================================
   SECTION 1: DATA
   Contains mood definitions with sunset/sunrise imagery, quote banks (20 each), and colors.
   ========================================================================== */

const MOOD_DATA = {
  anxious: {
    label: "Anxious",
    icon: "🌿",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(20, 35, 45, 0.4)",
    gradientEnd: "rgba(10, 20, 30, 0.6)",
    primaryAccent: "#72d5a3",
    primaryHover: "#51be86",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "Take a deep breath. You do not have to figure out your entire life in this single moment.", author: "Gentle Reminder" },
      { text: "Anxiety is a feeling, not a definition of who you are. This too shall pass.", author: "Inner Peace" },
      { text: "You have survived 100% of your hardest days so far. You are doing fine.", author: "Mindful Thought" },
      { text: "Slow down. Inhale peace, exhale tension. You are safe in this present moment.", author: "Calm Mind" },
      { text: "Trust yourself. You have overcome obstacles before, and you will navigate this too.", author: "Strength Within" },
      { text: "Feelings are just visitors; let them come and go. You are the quiet sky behind the clouds.", author: "Mindful Awareness" },
      { text: "You don't need to control everything around you to feel at peace within yourself.", author: "Serene Living" },
      { text: "Release the weight of tomorrow. Today holds enough grace for this single step.", author: "Daily Sanctuary" },
      { text: "Your mind may race, but your feet are firmly grounded on steady earth.", author: "Grounding Energy" },
      { text: "Give yourself permission to set down your worries, even if only for five minutes.", author: "Restful Heart" },
      { text: "This feeling is uncomfortable, but it is temporary and entirely manageable.", author: "Inner Clarity" },
      { text: "Breathe in peace, exhale tension. You are safe, secure, and grounded.", author: "Peaceful Breath" },
      { text: "Your racing thoughts do not reflect reality; they are only temporary weather.", author: "Quiet Observer" },
      { text: "Notice five things around you right now. You are present, right here, right now.", author: "Grounding Moment" },
      { text: "You have time. There is no rush to solve everything in this precise minute.", author: "Gentle Pace" },
      { text: "Unclench your jaw, lower your shoulders, and let go of the tension you hold.", author: "Somatic Calm" },
      { text: "Courage is not the absence of anxiety; it is taking one quiet breath in spite of it.", author: "Quiet Bravery" },
      { text: "The universe is supporting your breath. Trust in the steady rhythm of life.", author: "Universal Flow" },
      { text: "You are allowed to step away and seek quiet whenever your spirit needs it.", author: "Safe Haven" },
      { text: "Peace is not somewhere you travel to; it is a space you create inside yourself.", author: "Inner Temple" }
    ]
  },
  confident: {
    label: "Confident",
    icon: "🔥",
    bgImage: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(45, 20, 15, 0.4)",
    gradientEnd: "rgba(20, 10, 5, 0.6)",
    primaryAccent: "#ff8c52",
    primaryHover: "#e66d31",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "You possess the strength and wisdom needed to achieve extraordinary things.", author: "Self Empowerment" },
      { text: "Your potential is unlimited. Step boldly into rooms you once felt underprepared for.", author: "Courage First" },
      { text: "Doubt is only a thought. Your capability is a proven reality.", author: "Inner Power" },
      { text: "Own your story and stand tall. You belong wherever your goals take you.", author: "Bold Spirit" },
      { text: "You are fully equipped to turn challenges into major stepping stones.", author: "Unstoppable You" },
      { text: "Trust your expertise and intuition; you have earned your seat at every table.", author: "Inner Authority" },
      { text: "You don't need validation from others when you know the value of your own work.", author: "Self Belief" },
      { text: "Action dissolves fear. Step forward with clarity and watch the path appear.", author: "Forward Motion" },
      { text: "Your voice matters, your ideas hold merit, and your vision is worth pursuing.", author: "Bold Voice" },
      { text: "You are capable of handling whatever comes next with grace and resolve.", author: "Resilient Spirit" },
      { text: "Confidence is not having all the answers, but trusting yourself to find them.", author: "Wisdom Within" },
      { text: "You are the author of your trajectory. Write a story of strength today.", author: "Mastery" },
      { text: "Walk into every room knowing your worth is intrinsic and unshakeable.", author: "Noble Presence" },
      { text: "Your past accomplishments are proof of what your dedicated mind can achieve.", author: "Proven Strength" },
      { text: "Stand tall. Your unique perspective adds immense value to the world.", author: "Unique Worth" },
      { text: "Failure is not a setback; it is refined knowledge on the path to mastery.", author: "Growth Mindset" },
      { text: "You carry inside you the resilience of every hurdle you have ever conquered.", author: "Unbroken Spirit" },
      { text: "Do not shrink to make others comfortable. Shine with unabashed brilliance.", author: "Luminous Self" },
      { text: "Trust in your preparation and power. You are ready for this moment.", author: "Ready Heart" },
      { text: "Your potential expands every time you choose action over hesitation.", author: "Bold Action" }
    ]
  },
  sad: {
    label: "Sad",
    icon: "🌧️",
    bgImage: "https://images.unsplash.com/photo-1438786657495-640937046d18?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(15, 25, 45, 0.4)",
    gradientEnd: "rgba(5, 12, 25, 0.6)",
    primaryAccent: "#64b5f6",
    primaryHover: "#42a5f5",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "It is okay to rest and feel tired. Honor your emotions without judgment.", author: "Compassionate Self" },
      { text: "Even the darkest, stormiest night eventually surrenders to a bright morning sunrise.", author: "Hope Restored" },
      { text: "Be gentle with your heart today. Healing is never a linear journey.", author: "Soft Healing" },
      { text: "Your feelings are valid. Give yourself time to recover at your own natural pace.", author: "Gentle Comfort" },
      { text: "You are deeply loved, even when you cannot feel it in this current moment.", author: "Universal Embrace" },
      { text: "Softness is not weakness; allowing yourself to feel deeply is true courage.", author: "Gentle Strength" },
      { text: "Rain cleanses the sky before the flowers bloom. Let this moment wash over you.", author: "Nature's Renewal" },
      { text: "You do not have to put on a brave face. It is safe to just exist as you are.", author: "Safe Space" },
      { text: "A quiet heart is still a strong heart. Rest until your light returns naturally.", author: "Restful Soul" },
      { text: "Sadness is proof that you care deeply about life. Honor that sensitivity.", author: "Kind Reflection" },
      { text: "You are allowed to take things one small hour, or one minute, at a time.", author: "Patient Grace" },
      { text: "The sun hasn't vanished forever; it's simply behind the clouds for a moment.", author: "Enduring Hope" },
      { text: "Tears are the heart's way of releasing what words cannot express.", author: "Tender Healing" },
      { text: "Give yourself the warmth and patience you would offer a dear friend in sorrow.", author: "Inner Kindness" },
      { text: "This heavy cloud will pass, leaving room for warmth and sunlight once again.", author: "Clear Sky" },
      { text: "You are not broken; you are simply processing a profound experience.", author: "Wholeness Within" },
      { text: "Permit yourself to rest. The world can wait while you mend gently.", author: "Restful Harbor" },
      { text: "Your worth does not diminish because your heart feels heavy today.", author: "Constant Value" },
      { text: "There is beauty in quiet, tender days. Honor the pace of your spirit.", author: "Gentle Rhythm" },
      { text: "Light will find its way back into your heart when the timing is right.", author: "Dawn Returning" }
    ]
  },
  happy: {
    label: "Happy",
    icon: "☀️",
    bgImage: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(45, 35, 10, 0.4)",
    gradientEnd: "rgba(25, 18, 5, 0.6)",
    primaryAccent: "#ffd54f",
    primaryHover: "#ffca28",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "Radiate your joy out into the world. Your positive energy inspires everyone around you.", author: "Joyful Light" },
      { text: "Celebrate this bright moment! Gratitude turns what we have into more than enough.", author: "Abundant Mind" },
      { text: "Happiness grows when shared. Keep shining your natural warmth today.", author: "Sunlit Soul" },
      { text: "Embrace every slice of goodness coming your way right now.", author: "Pure Positivity" },
      { text: "Your laughter and optimism are true gifts to the world.", author: "Radiant Spirit" },
      { text: "Joy is present in the simple moments if we pause long enough to savor them.", author: "Present Delight" },
      { text: "You deserve all the light, laughter, and goodness overflowing in your life.", author: "Open Joy" },
      { text: "Let your happiness bubble over and light up every room you enter today.", author: "Sparks of Joy" },
      { text: "Gratitude turns everyday ordinary experiences into sacred celebrations.", author: "Grateful Heart" },
      { text: "Your positive energy is magnetic; soak in the warmth of this beautiful moment.", author: "Warm Light" },
      { text: "Smile wide—you are living through moments you once prayed to experience.", author: "Joyful Reflection" },
      { text: "Delight in the present moment. Happiness is a continuous journey.", author: "Vibrant Being" },
      { text: "Savor the sweetness of right now. Life is blooming all around you.", author: "Golden Moment" },
      { text: "Your heart is open and welcoming the brilliant abundance of today.", author: "Open Heart" },
      { text: "Joy is your natural state when you let go of unnecessary weight.", author: "Lightness of Being" },
      { text: "Celebrate small victories today with enthusiasm and pure gladness.", author: "Joyful Celebration" },
      { text: "The brightness within you lights up the path for others to find joy too.", author: "Beacon of Light" },
      { text: "Life is full of wonderful surprises when you look through eyes of wonder.", author: "Wonderstruck" },
      { text: "Soak up this happiness like warm sunlight soaking into your skin.", author: "Sunlit Heart" },
      { text: "Your joyful spirit is a masterwork of gratitude and present living.", author: "Pure Delight" }
    ]
  },
  "self-love": {
    label: "Self-Love",
    icon: "💖",
    bgImage: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(40, 15, 30, 0.4)",
    gradientEnd: "rgba(20, 5, 15, 0.6)",
    primaryAccent: "#f48fb1",
    primaryHover: "#f06292",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "You are inherently worthy of love, respect, and kindness—exactly as you are.", author: "Self Acceptance" },
      { text: "Treat yourself with the same gentle grace you so freely extend to others.", author: "Kind Heart" },
      { text: "Your worth is not measured by productivity or perfection.", author: "Peaceful Mind" },
      { text: "You are enough. You have always been enough. You will always be enough.", author: "Core Truth" },
      { text: "Nurture your soul today. You deserve your own undivided attention and care.", author: "Loving Self" },
      { text: "Forgive yourself for past mistakes. You were doing the best you knew how to do.", author: "Self Compassion" },
      { text: "Setting healthy boundaries is an act of deep self-respect and self-preservation.", author: "Honored Boundaries" },
      { text: "Speak to yourself like someone you love unconditionally and treasure deeply.", author: "Kind Inner Voice" },
      { text: "You do not need to earn your right to rest or take up space in this world.", author: "Unconditional Worth" },
      { text: "Celebrate your uniqueness; no one else brings your exact magic into the world.", author: "Authentic Self" },
      { text: "Your body, mind, and spirit are worthy of gentle care and daily reverence.", author: "Sacred Care" },
      { text: "Love yourself first, because that is who you share every moment of your life with.", author: "Lifelong Friend" },
      { text: "You are a work in progress and a masterpiece at the exact same time.", author: "Divine Balance" },
      { text: "Release the need to compare your chapter one with someone else's chapter twenty.", author: "Own Path" },
      { text: "Your voice, your needs, and your emotions are worthy of being honored.", author: "Self Respect" },
      { text: "You do not need permission to be completely and authentically yourself.", author: "Unapologetic Self" },
      { text: "Hold space for your growth without judging the mistakes along the way.", author: "Patient Loving" },
      { text: "Inhale appreciation for your journey; exhale the pressure to be perfect.", author: "Loving Grace" },
      { text: "Your heart is a sanctuary. Keep it filled with soft, encouraging thoughts.", author: "Inner Sanctuary" },
      { text: "To love yourself is the beginning of a lifelong romance with peace.", author: "Eternal Flame" }
    ]
  },
  overwhelmed: {
    label: "Overwhelmed",
    icon: "🌊",
    bgImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(35, 25, 45, 0.4)",
    gradientEnd: "rgba(15, 10, 25, 0.6)",
    primaryAccent: "#b39ddb",
    primaryHover: "#9575cd",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "You do not have to carry everything at once. Focus only on the single step directly ahead.", author: "One Step Ahead" },
      { text: "Pause and un-clench your jaw, drop your shoulders, and exhale completely.", author: "Body Release" },
      { text: "It is okay to say 'no' to demands outside your capacity today.", author: "Quiet Boundaries" },
      { text: "Break the mountain down into small pebbles. You only need to touch one pebble now.", author: "Gentle Pacing" },
      { text: "Your worth remains constant even when your output pauses.", author: "Unconditional Value" },
      { text: "Step away for a brief moment. The world can wait while you collect your breath.", author: "Sanctuary Pause" },
      { text: "You don't need to finish everything today. Doing what you can is completely enough.", author: "Sufficient Effort" },
      { text: "Close your eyes for ten seconds. The noise outside can pause while you center within.", author: "Quiet Stillness" },
      { text: "Release the illusion that you must manage every detail right now.", author: "Surrender Control" },
      { text: "Focus on your breath: four seconds in, four seconds hold, four seconds out.", author: "Box Breathing" },
      { text: "One single intention at a time is the secret to moving through overwhelming noise.", author: "Single Focus" },
      { text: "You are allowed to delegate, postpone, or simplify your list today.", author: "Permission Granted" },
      { text: "The sea calms down after the storm. Your inner calm is returning step by step.", author: "Calming Sea" },
      { text: "Saying 'I am doing my best' is a full and powerful statement of truth.", author: "Honest Peace" },
      { text: "You don't have to carry the weight of expectations that aren't yours to bear.", author: "Unburdened Mind" },
      { text: "Simplify. Strip away the non-essential and protect your quiet inner core.", author: "Essential Calm" },
      { text: "When everything feels urgent, remember that your peace is the highest priority.", author: "Priority Peace" },
      { text: "Your mind is capable of finding quiet amidst chaos when you give it permission.", author: "Still Center" },
      { text: "Let go of the timeline. Life unfolds in its own steady, natural order.", author: "Natural Timing" },
      { text: "You are in control of your breath and your response. Everything else can wait.", author: "Grounded Mind" }
    ]
  },
  grateful: {
    label: "Grateful",
    icon: "✨",
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(45, 30, 10, 0.4)",
    gradientEnd: "rgba(20, 12, 5, 0.6)",
    primaryAccent: "#ffe082",
    primaryHover: "#ffd54f",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "Gratitude turns ordinary moments into extraordinary gifts of presence.", author: "Grateful Heart" },
      { text: "Look around at how far you've come. Today contains blessings you once longed for.", author: "Mindful View" },
      { text: "There is immense beauty in small, quiet miracles happening all around you right now.", author: "Abundant Mind" },
      { text: "Thank your body and mind for tirelessly supporting you on this journey.", author: "Inner Gratitude" },
      { text: "A thankful heart attracts moments of peace and genuine abundance.", author: "Serene Outlook" },
      { text: "Savor the warmth in your tea, the air in your lungs, and the peace of this breath.", author: "Present Moments" },
      { text: "Gratitude is the quiet magic that transforms what we have into enough.", author: "Abundance Within" },
      { text: "Appreciate the simple grace of starting a brand new day with clear eyes.", author: "Fresh Start" },
      { text: "Thank you to the past challenges that shaped your wisdom and resilience.", author: "Refined Wisdom" },
      { text: "Notice the sunlight filtering through windows and the quiet safety of this space.", author: "Quiet Blessings" },
      { text: "The more you notice goodness, the more goodness manifests in your journey.", author: "Magnet of Light" },
      { text: "Gratitude unlocks the fullness of life and turns a meal into a feast.", author: "Open Abundance" },
      { text: "Thank your lungs for breathing automatically and your heart for its quiet rhythm.", author: "Body Thanks" },
      { text: "Inhale thankfulness for life; exhale peace and contentment into the world.", author: "Sacred Breath" },
      { text: "There is wealth in contentment and peace in appreciating simple daily gifts.", author: "True Wealth" },
      { text: "Look at the people and places that bring quiet comfort into your routine.", author: "Cherished Circle" },
      { text: "Every breath is a subtle reminder of the gift of existing in this universe.", author: "Cosmic Presence" },
      { text: "Gratitude softens the spirit and brings instant warmth to cold thoughts.", author: "Softened Soul" },
      { text: "A grateful mind sees possibilities where others see roadblocks.", author: "Optimistic Eye" },
      { text: "Today I choose to celebrate the abundance already present around me.", author: "Active Thanks" }
    ]
  },
  "burnt-out": {
    label: "Burnt Out",
    icon: "🕯️",
    bgImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(30, 20, 25, 0.4)",
    gradientEnd: "rgba(15, 8, 12, 0.6)",
    primaryAccent: "#ffab91",
    primaryHover: "#ff8a65",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "Rest is not a reward for work completed; it is a fundamental human requirement.", author: "Sacred Rest" },
      { text: "Allow your flame to rest without guilt. You cannot pour from an empty cup.", author: "Self Preservation" },
      { text: "It is brave to slow down and replenish your spirit when your energy is low.", author: "Honored Pace" },
      { text: "You are allowed to step off the treadmill of constant productivity.", author: "Unburdened Self" },
      { text: "Let go of the need to do it all. Doing less right now is doing enough.", author: "Soft Permission" },
      { text: "Recharge softly. Silence and stillness are powerful healers.", author: "Restorative Silence" },
      { text: "Your output does not define your human value. Rest deeply today.", author: "Intrinsic Worth" },
      { text: "A rested mind thinks clearer and feels warmer. Prioritize stillness now.", author: "Quiet Mind" },
      { text: "You do not need to explain or justify your need to rest and recharge.", author: "Unapologetic Rest" },
      { text: "Unplug from the demands of the world. Give your nervous system a break.", author: "Digital Sunset" },
      { text: "Like fields left fallow in winter, your spirit recovers in quiet seasons.", author: "Seasonal Rest" },
      { text: "Doing nothing is a productive act of healing when you are exhausted.", author: "Healing Stillness" },
      { text: "Be proud of yourself for recognizing when your energy reserves are low.", author: "Self Awareness" },
      { text: "Slow your breathing. Let the weight of expectations slide off your shoulders.", author: "Weightless Breath" },
      { text: "Rest is the soil from which future creativity and energy bloom.", author: "Restorative Soil" },
      { text: "Protect your physical and emotional reserves with gentle, firm boundaries.", author: "Boundaries of Grace" },
      { text: "Give yourself grace for feeling tired. You have carried a heavy load.", author: "Tender Grace" },
      { text: "Step away from screens and let your eyes rest on the quiet natural horizon.", author: "Natural Horizon" },
      { text: "You don't need to hurry your recovery. Healing takes as long as it takes.", author: "Patient Pace" },
      { text: "Renew your spirit through warmth, rest, and soft, unhurried moments.", author: "Warm Renewal" }
    ]
  },
  lonely: {
    label: "Lonely",
    icon: "🌙",
    bgImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(20, 20, 40, 0.4)",
    gradientEnd: "rgba(8, 8, 20, 0.6)",
    primaryAccent: "#80deea",
    primaryHover: "#4dd0e1",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "You are never truly alone. The earth beneath you supports every step you take.", author: "Universal Connection" },
      { text: "Be a warm friend to yourself in this quiet space; your presence is valuable.", author: "Kind Companion" },
      { text: "Solitude can be a peaceful sanctuary where you reconnect with your core self.", author: "Gentle Haven" },
      { text: "Your sensitivity and depth will attract the right souls in due time.", author: "Belonging Hope" },
      { text: "Wrap yourself in comfort today. You are cherished and deserving of warm love.", author: "Warm Embrace" },
      { text: "Even the moon shines alone in the vast night sky, magnificent and whole.", author: "Luminous Soul" },
      { text: "In this quiet moment, connect with the warmth and love inside your heart.", author: "Inner Warmth" },
      { text: "Your presence is a gift to the world, even when you feel unseen.", author: "Hidden Gem" },
      { text: "Loneliness is a gentle reminder that your heart craves deep connection.", author: "Honored Craving" },
      { text: "Treat yourself with exquisite kindness when solitude feels heavy.", author: "Self Comfort" },
      { text: "You belong to this universe. You are an essential note in life's melody.", author: "Cosmic Belonging" },
      { text: "The right people who resonate with your true spirit are on their way to you.", author: "Future Connections" },
      { text: "Enjoy your own quiet company; you are a wonderful person to be with.", author: "Pleasant Self" },
      { text: "Stars shine brightest when surrounded by the vast dark night.", author: "Starlit Hope" },
      { text: "This feeling of isolation is temporary. Warmth and connection will return.", author: "Returning Connection" },
      { text: "Reach out to your inner child with a hug of total acceptance and warmth.", author: "Inner Hug" },
      { text: "Your capacity for deep feeling means your future connections will be rich.", author: "Profound Heart" },
      { text: "Solitude is the womb of self-discovery and quiet inner strength.", author: "Sanctuary Within" },
      { text: "You are deserving of genuine love, understanding, and warm companionship.", author: "Worthy of Love" },
      { text: "The universe holds you gently. Breathe into the calm warmth of this present moment.", author: "Cosmic Embrace" }
    ]
  },
  hopeful: {
    label: "Hopeful",
    icon: "🌱",
    bgImage: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80",
    gradientStart: "rgba(25, 40, 20, 0.4)",
    gradientEnd: "rgba(10, 20, 10, 0.6)",
    primaryAccent: "#a5d6a7",
    primaryHover: "#81c784",
    cardBg: "rgba(255, 255, 255, 0.12)",
    textColor: "#ffffff",
    mutedColor: "rgba(255, 255, 255, 0.85)",
    quotes: [
      { text: "New beginnings are disguised as quiet steps taken on fresh mornings.", author: "New Horizons" },
      { text: "Trust the timing of your life. Something beautiful is growing under the surface.", author: "Patient Growth" },
      { text: "Your future holds joys you haven't even dreamed of yet.", author: "Bright Tomorrow" },
      { text: "Seedlings grow in dark soil before reaching light. Trust your growth process.", author: "Rising Light" },
      { text: "Keep your heart open to wonder; life has a way of surprising us with grace.", author: "Open Future" },
      { text: "Every day brings a clean slate and fresh strength to start anew.", author: "Daily Renewal" },
      { text: "Hope is a quiet flame inside your spirit that never truly burns out.", author: "Eternal Flame" },
      { text: "The best chapters of your life story are still being written.", author: "Unfolding Story" },
      { text: "Believe in the seeds of possibility you are planting today.", author: "Future Bloom" },
      { text: "Morning always breaks through after the longest night.", author: "Sure Dawn" },
      { text: "Your dreams are valid and worth working towards step by patient step.", author: "Cherished Dreams" },
      { text: "Trust that good things are conspiring to find their way to you.", author: "Friendly Universe" },
      { text: "Keep looking ahead with eyes full of curiosity and excitement.", author: "Curious Spirit" },
      { text: "Change is full of beautiful surprises when you welcome growth.", author: "Embracing Change" },
      { text: "There is boundless light waiting for you around the corner.", author: "Bright Path" },
      { text: "Your potential to blossom is infinite, no matter where you start today.", author: "Infinite Bloom" },
      { text: "Hope turns obstacles into stepping stones and dreams into reality.", author: "Transforming Hope" },
      { text: "Smile at the future; you are stepping into a season of grace.", author: "Season of Grace" },
      { text: "Every moment holds a tiny doorway into a better tomorrow.", author: "Open Doors" },
      { text: "Your heart knows that brighter days are quietly approaching.", author: "Faithful Spirit" }
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
    this.moodPools = {};
    this.favorites = this.loadFavorites();
    this.initPools();
  }

  // Initialize or reset remaining quote pools for each mood
  initPools() {
    Object.keys(MOOD_DATA).forEach(mood => {
      this.resetMoodPool(mood);
    });
  }

  resetMoodPool(mood) {
    const totalQuotes = MOOD_DATA[mood].quotes.length;
    // Create an array of indices [0, 1, 2, ... totalQuotes - 1]
    this.moodPools[mood] = Array.from({ length: totalQuotes }, (_, i) => i);
  }

  // Non-repeating quote retriever
  getNextQuote(mood) {
    this.currentMood = mood;

    // Check if the pool for this mood is exhausted; reset if so
    if (!this.moodPools[mood] || this.moodPools[mood].length === 0) {
      this.resetMoodPool(mood);
    }

    // Pick a random index from remaining available pool
    const pool = this.moodPools[mood];
    const randomIndexInPool = Math.floor(Math.random() * pool.length);
    const selectedQuoteIndex = pool[randomIndexInPool];

    // Remove selected index from available pool to guarantee non-repeating cycle
    pool.splice(randomIndexInPool, 1);

    const quoteObj = MOOD_DATA[mood].quotes[selectedQuoteIndex];
    const totalInCycle = MOOD_DATA[mood].quotes.length;
    const remainingInCycle = pool.length;

    return {
      quote: quoteObj,
      totalInCycle,
      remainingInCycle
    };
  }

  // Add custom user-created quote
  addCustomQuote(mood, text) {
    if (MOOD_DATA[mood]) {
      const newQuote = { text, author: "My Personal Affirmation" };
      MOOD_DATA[mood].quotes.unshift(newQuote);
      // Reset pool so custom quote is included in active cycle
      this.resetMoodPool(mood);
    }
  }

  // Determine time of day check-in greeting
  getTimeOfDayGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { badge: "🌅 Morning Check-in", title: "Good morning", subtitle: "Start your morning with calm & steady focus." };
    } else if (hour >= 12 && hour < 17) {
      return { badge: "☀️ Afternoon Reflection", title: "Good afternoon", subtitle: "Take a peaceful pause in the middle of your day." };
    } else if (hour >= 17 && hour < 22) {
      return { badge: "🌆 Evening Unwind", title: "Good evening", subtitle: "Rest your mind and release the weight of the day." };
    } else {
      return { badge: "🌙 Nighttime Peace", title: "Peaceful night", subtitle: "Soft thoughts and serene comfort before rest." };
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

  // DOM Elements - Main App
  const timeBadgeEl = document.getElementById("time-badge");
  const greetingTitleEl = document.getElementById("greeting-title");
  const greetingSubtitleEl = document.querySelector(".greeting-subtitle");
  
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
    const checkIn = engine.getTimeOfDayGreeting();
    timeBadgeEl.textContent = checkIn.badge;
    greetingTitleEl.textContent = checkIn.title;
    if (greetingSubtitleEl) greetingSubtitleEl.textContent = checkIn.subtitle;
  }

  // Update theme colors and peaceful background image based on current mood
  function applyTheme(moodKey) {
    const config = MOOD_DATA[moodKey];
    const root = document.documentElement;
    const bgImageLayer = document.getElementById("bg-image-layer");

    if (bgImageLayer && config.bgImage) {
      bgImageLayer.style.backgroundImage = `url('${config.bgImage}')`;
    }

    root.style.setProperty("--bg-gradient-start", config.gradientStart);
    root.style.setProperty("--bg-gradient-end", config.gradientEnd);
    root.style.setProperty("--primary-accent", config.primaryAccent);
    root.style.setProperty("--primary-accent-hover", config.primaryHover);

    // Update active state on mood buttons
    moodBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mood === moodKey);
    });
  }

  // Render Affirmation Quote
  function renderAffirmation(moodKey) {
    applyTheme(moodKey);
    const result = engine.getNextQuote(moodKey);
