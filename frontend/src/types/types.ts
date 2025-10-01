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

export type NavLinkData = {
  label: string;
  path: string;
};

export type SearchResult = ProfileInfo & { score: number };
