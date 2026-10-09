import { CATEGORIES } from "../data/words";
import { getId } from "../utils/helpers";

// 📊 The progress page. It only READS the two lists.
// PROPS: weakWords, semiWords (arrays of word ids)
export default function Overview({ weakWords, semiWords }) {
  // STEP 1: count per category.
  // .map only RETURNS numbers; it does not touch outside variables.
  const stats = CATEGORIES.map(function (category) {
    let weakCount = 0;
    let semiCount = 0;

    category.words.forEach(function (word) {
      const id = getId(category, word);
      if (weakWords.includes(id)) weakCount++;
      if (semiWords.includes(id)) semiCount++;
    });

    return {
      category: category,
      total: category.words.length,
      weakCount: weakCount,
      semiCount: semiCount,
    };
  });

  // STEP 2: add up the big totals from the stats above.
  // .reduce = "go through the list and keep a running sum"
  const totalWords = stats.reduce((sum, item) => sum + item.total, 0);
  const totalWeak = stats.reduce((sum, item) => sum + item.weakCount, 0);
  const totalSemi = stats.reduce((sum, item) => sum + item.semiCount, 0);

  // STEP 3: a word with no mark is mastered
  const mastered = totalWords - totalWeak - totalSemi;

  return (
    <>
      <div className="hero">
        <h1>My English Progress</h1>
        <p>All {totalWords} items together</p>
      </div>

      <div className="cards">
        <div className="card big red">🔴 Weak <span>{totalWeak}</span></div>
        <div className="card big yellow">🟡 Semi Weak <span>{totalSemi}</span></div>
        <div className="card big green">🟢 Mastered <span>{mastered}</span></div>
      </div>

      {/* One small card per category */}
      {stats.map(function (item) {
        return (
          <div className="card" key={item.category.key}>
            <b>{item.category.name}</b> — 🔴 {item.weakCount} • 🟡 {item.semiCount}
          </div>
        );
      })}
    </>
  );
}