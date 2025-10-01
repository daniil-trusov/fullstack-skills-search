export type ProfileInfo = {
  id: number;
  name: string;
  age: number;
  avatar: string;
  city: string;
  skills: string[];
  bio: string;
  rating: number;
};

export type SearchRequest = { skills: string[] };
export type SearchResult = ProfileInfo & { score: number };
