// 📄 ONE row of the table.
// PROPS:
//   number         → the serial number to show (1, 2, 3...)
//   word           → { hindi, english, example }
//   status         → "unmarked" | "weak" | "semi" | "mastered"
//   onMarkWeak     → function to call on 🔴 click
//   onMarkSemi     → function to call on 🟡 click
//   onMarkMastered → function to call on 🟢 click

// Which row color goes with which status ("unmarked" = no color)
const ROW_CLASSES = {
  weak: "row-weak",
  semi: "row-semi",
  mastered: "row-mastered",
};

export default function WordRow({
  number,
  word,
  status,
  onMarkWeak,
  onMarkSemi,
  onMarkMastered,
}) {
  const rowClass = ROW_CLASSES[status] || "";

  const weakClass = status === "weak" ? "mark active-weak" : "mark";
  const semiClass = status === "semi" ? "mark active-semi" : "mark";
  const masteredClass = status === "mastered" ? "mark active-mastered" : "mark";

  return (
    <tr className={rowClass}>
      <td className="num">{number}</td>
      <td className="hi">{word.hindi}</td>
      <td><strong>{word.english}</strong></td>
      <td>{word.example}</td>
      <td className="btns">
        <button className={weakClass} onClick={onMarkWeak}>🔴 Weak</button>
        <button className={semiClass} onClick={onMarkSemi}>🟡 Semi Weak</button>
        <button className={masteredClass} onClick={onMarkMastered}>🟢 Mastered</button>
      </td>
    </tr>
  );
}
