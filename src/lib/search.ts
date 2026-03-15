import { sections, type DocPage } from "./content";

export interface SearchResult {
  sectionId: string;
  sectionTitle: string;
  slug: string;
  title: string;
  description: string;
}

export function search(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);

  const results: (SearchResult & { score: number })[] = [];

  for (const section of sections) {
    for (const page of section.pages) {
      let score = 0;

      for (const term of terms) {
        if (page.title.toLowerCase().includes(term)) score += 10;
        if (page.description.toLowerCase().includes(term)) score += 3;
        if (page.keywords.some((k) => k.includes(term))) score += 5;
        if (section.title.toLowerCase().includes(term)) score += 2;
      }

      if (score > 0) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          slug: page.slug,
          title: page.title,
          description: page.description,
          score,
        });
      }
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 8);
}
