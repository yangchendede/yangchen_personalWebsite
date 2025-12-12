export interface ExperienceItem {
  id: number;
  company: string; // Or Project Name
  role: string;
  date: string;
  location?: string;
  description: string; // Short summary for the card
  details: string[]; // Detailed bullet points for the modal
  tags: string[]; // Tech stack or keywords
  bgColor: string;
  textColor: string;
  logo: string;
  logoClassName?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface SkillItem {
  name: string;
  level?: string; // e.g. "精通", "熟悉"
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface AwardItem {
  title: string;
  date: string;
}