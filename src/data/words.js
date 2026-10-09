import { collocations } from "./collocations";
import { connectors } from "./connectors";
import { idioms } from "./idioms";
import { phrasalVerbs } from "./phrasalVerbs";

const RAW_CATEGORIES = [
  { name: "🔗 Collocations", key: "collocations", words: collocations },
  { name: "🌉 Connectors", key: "connectors", words: connectors },
  { name: "💡 Idioms", key: "idioms", words: idioms },
  { name: "⚡ Phrasal Verbs", key: "phrasal-verbs", words: phrasalVerbs },
];

// 🧹 Remove exact duplicates (same english + same hindi) in each category
export const CATEGORIES = RAW_CATEGORIES.map(function (category) {
  const seen = new Set();

  return {
    ...category,
    words: category.words.filter(function (word) {
      const id = word.english.toLowerCase() + "|" + word.hindi;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    }),
  };
});