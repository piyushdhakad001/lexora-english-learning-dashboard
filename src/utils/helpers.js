/* ==========================================================
   🧰 PART 2: HELPER TOOLS
   ----------------------------------------------------------
   Small functions that do ONE job each.
   They live outside the app because they need no memory.
   ========================================================== */

// 🏷️ TOOL 1: getId
// JOB:     give every word its own unique name tag.
// WHY:     we need a name to remember which words you marked.
// EXAMPLE: "collocations-Make a decision"
export function getId(category, word) {
  return category.key + "-" + word.english + "-" + word.hindi;
}

// 📖 TOOL 2: loadList
// JOB:     read a saved list from the browser (localStorage).
// WHY:     so your marks are still there after a refresh.
// RESULT:  the saved list, or an empty list [] if nothing is saved.
export function loadList(name) {
  try {
    const saved = localStorage.getItem(name);
    return saved === null ? [] : JSON.parse(saved);
  } catch {
    return [];
  }
}