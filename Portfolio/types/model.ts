export type Mode = "system" | "light" | "dark";

export interface GitHubRepo {
  id: string | number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  topics: string[];
}
