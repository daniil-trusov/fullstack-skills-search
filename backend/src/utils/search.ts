import { ProfileInfo, SearchResult } from "@/types";

const calculateScore = (profile: ProfileInfo, skills: string[]): number => {
  const matches = profile.skills.filter((skill) => skills.includes(skill));

  return Math.min(matches.length, 5);
};

const hasMatchingSkill = (profile: ProfileInfo, skills: string[]): boolean => {
  return profile.skills.some((skill) => skills.includes(skill));
};

const sortProfiles = (a: SearchResult, b: SearchResult): number => {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  return b.rating - a.rating;
};

export const filterAndScoreProfiles = (
  profiles: ProfileInfo[],
  skills: string[]
): SearchResult[] => {
  if (!skills || skills.length === 0) {
    return [];
  }

  return profiles
    .filter((profile) => hasMatchingSkill(profile, skills))
    .map((profile) => ({
      ...profile,
      score: calculateScore(profile, skills),
    }))
    .sort(sortProfiles);
};
