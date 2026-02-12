export interface CVAnalysis {
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

export interface ATSScore {
  atsScore: number;
  foundKeywords: string[];
  missingKeywords: string[];
}

export interface JobMatch {
  matchPercentage: number;
  missingSkills: string[];
}

export interface RewriteResult {
  text: string;
}
