import WordRow from "./WordRow";
import { getId } from "../utils/helpers";

// 📋 The table. It receives the ALREADY filtered words.
export default function WordTable({
  category,
  words,
  weakWords,
  semiWords,
  onMarkWeak,
  onMarkSemi,
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Hindi</th>
            <th>English</th>
            <th>Example</th>
            <th>Progress</th>
          </tr>
        </thead>

        <tbody>
          {words.length === 0 && (
            <tr>
              <td colSpan="5" className="empty">Nothing found 🔍</td>
            </tr>
          )}

          {words.map(function (word, index) {
            const id = getId(category, word);

            let status = "mastered";
            if (weakWords.includes(id)) status = "weak";
            if (semiWords.includes(id)) status = "semi";

            return (
              <WordRow
                key={id}
                number={index + 1}
                word={word}
                status={status}
                onMarkWeak={() => onMarkWeak(id)}
                onMarkSemi={() => onMarkSemi(id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}