import profilesData from "@/data/profiles.json";
import { ProfileInfo, SearchResult } from "@/types";
import { filterAndScoreProfiles } from "@/utils";

export const getAllProfiles = (): ProfileInfo[] => {
  return profilesData;
};

export const searchProfiles = (skills: string[]): SearchResult[] => {
  return filterAndScoreProfiles(profilesData, skills);
};
