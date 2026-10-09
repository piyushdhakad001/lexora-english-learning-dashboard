// 🎛️ Search box + 5 buttons.
// It owns NO state. Everything comes in as props.
export default function Toolbar({
  search,        // text in the search box
  onSearch,      // function: update the search text
  filter,        // "all" | "weak" | "semi"
  onSetFilter,   // function: change the filter
  onShuffle,     // function: shuffle words
  onShowAll,     // function: reset filter + shuffle
  onReset,       // function: clear all marks
}) {
  return (
    <div className="toolbar">
      <input
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search..."
      />

      <button onClick={onShuffle}>🔀 Shuffle</button>

      <button className={filter === "all" ? "on" : ""} onClick={onShowAll}>
        Show All
      </button>

      <button
        className={filter === "weak" ? "on" : ""}
        onClick={() => onSetFilter("weak")}
      >
        🔴 Weak Only
      </button>

      <button
        className={filter === "semi" ? "on" : ""}
        onClick={() => onSetFilter("semi")}
      >
        🟡 Semi Weak Only
      </button>

      <button className="reset" onClick={onReset}>Reset Marks</button>
    </div>
  );
}