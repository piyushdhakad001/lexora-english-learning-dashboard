// 📄 ONE row of the table.
// PROPS:
//   number     → the serial number to show (1, 2, 3...)
//   word       → { hindi, english, example }
//   status     → "mastered" | "weak" | "semi"
//   onMarkWeak → function to call on 🔴 click
//   onMarkSemi → function to call on 🟡 click
// 📄 ONE row of the table.
// PROPS: number, word, status, onMarkWeak, onMarkSemi

export default function WordRow({ number, word, status, onMarkWeak, onMarkSemi }) {
  const rowClass =
    status === "weak" ? "row-weak" : status === "semi" ? "row-semi" : "";

  const weakClass = status === "weak" ? "mark active-weak" : "mark";
  const semiClass = status === "semi" ? "mark active-semi" : "mark";

  return (
    <tr className={rowClass}>
      <td className="num">{number}</td>
      <td className="hi">{word.hindi}</td>
      <td><strong>{word.english}</strong></td>
      <td>{word.example}</td>
      <td className="btns">
        <button className={weakClass} onClick={onMarkWeak}>🔴 Weak</button>
        <button className={semiClass} onClick={onMarkSemi}>🟡 Semi Weak</button>
      </td>
    </tr>
  );
}