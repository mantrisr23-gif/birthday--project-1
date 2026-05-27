/**
 * 🌸 BIRTHDAY BLOOM - EMOTIONAL NARRATIVE TEMPLATES
 * -----------------------------------------
 * Enhanced Configuration System for Birthday Bloom v2.1
 */

export type Gender = "male" | "female" | "other";
export type Relationship = "partner" | "friend" | "family" | "colleague" | "mentor";
export type TemplateTheme = "romantic" | "fun" | "energetic" | "elegant" | "playful" | "nostalgic" | "corporate";
export type AgeGroup = "teen" | "young-adult" | "adult" | "senior";

export interface BirthdayConfig {
  name: string;
  age: number;
  gender: Gender;
  relationship: Relationship;
  theme: TemplateTheme;
  customMessage: string;
  favoriteColor: string;
  favoriteEmoji: string[];
  photos: string[];
  backgroundMusic?: string;
  soundEffects: boolean;
  animationIntensity: "low" | "medium" | "high";
  particleEffects: boolean;
  showSkipButton: boolean;
  duration: "quick" | "normal" | "extended";
  reducedMotion: boolean;
  textSize: "small" | "normal" | "large";
  highContrast: boolean;
}

export const EMOTIONAL_LETTERS: Record<string, any> = {
  // ... Keep all existing letters (partner, friend, love, family, etc.) 
  // and append the corporate roast at the end:
  corporate: {
    colleague: `To Ayush, Our Favorite Part-Time Office Resident,

They say 'hard work pays off,' and if that's true, you must be a billionaire by now—because you certainly don't spend much time working. 

Your dedication to the tea machine is truly unmatched. It’s almost inspiring how you manage to turn '10 to 5' into a '12 to 3' appearance schedule, punctuated by professional-grade napping sessions. If productivity were measured in tea breaks, you'd be the CEO.

Happy Birthday, Ayush. May your year be filled with more naps, fewer deadlines, and an unlimited supply of office tea.

Regards,
The Management`,
  }
};

export const TEMPLATE_PRESETS: Record<string, any> = {
  // ... Keep all existing romantic/fun/family presets and add the corporate one:
  corporate: {
    colleague: {
      adult: {
        colors: ["#333333", "#555555", "#FF4500"],
        emojis: ["☕", "😴", "📉", "💻", "⏰"],
        messageTemplate: "Happy Birthday! Still clocking in at 10 AM, I see... ☕",
        vibration: true,
      },
    },
  },
};

export const DEFAULT_CONFIG: BirthdayConfig = {
  name: "Ayush",
  age: 25,
  gender: "male",
  relationship: "colleague",
  theme: "corporate",
  customMessage: "Happy Birthday! Still clocking in at 10 AM, I see... ☕",
  favoriteColor: "#333333",
  favoriteEmoji: ["☕", "😴", "📉", "💻", "⏰"],
  photos: [
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15",
  ],
  soundEffects: true,
  animationIntensity: "high",
  particleEffects: true,
  showSkipButton: true,
  duration: "normal",
  reducedMotion: false,
  textSize: "normal",
  highContrast: false,
};

export const COLOR_PALETTES: Record<string, any> = {
  // ... Keep existing palettes and add the corporate one:
  corporate: {
    primary: "#333333",
    secondary: "#555555",
    accent: "#FF4500",
    light: "#F0F0F0",
    dark: "#1A1A1A",
  },
};
