/**
 * BIRTHDAY BLOOM - CORPORATE TROLL ENGINE
 * -----------------------------------------
 */

export type TemplateTheme = "romantic" | "fun" | "corporate";

export interface BirthdayConfig {
  name: string;
  theme: TemplateTheme;
  customMessage: string;
}

export const EMOTIONAL_LETTERS: Record<string, any> = {
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
  theme: "corporate",
  customMessage: "Happy Birthday! Still clocking in at 10 AM, I see... ☕",
};
