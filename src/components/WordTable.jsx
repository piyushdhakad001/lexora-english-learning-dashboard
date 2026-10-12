import WordRow from "./WordRow";
import { getId } from "../utils/helpers";

// 📋 The table. It receives the ALREADY filtered words.
export default function WordTable({
  category,
  words,
  weakWords,
  semiWords,
  masteredWords,
  onMarkWeak,
  onMarkSemi,
  onMarkMastered,
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

            // A word is in at most ONE list, so the order of these checks is safe
            let status = "unmarked";
            if (weakWords.includes(id)) status = "weak";
            if (semiWords.includes(id)) status = "semi";
            if (masteredWords.includes(id)) status = "mastered";

            return (
              <WordRow
                key={id}
                number={index + 1}
                word={word}
                status={status}
                onMarkWeak={() => onMarkWeak(id)}
                onMarkSemi={() => onMarkSemi(id)}
                onMarkMastered={() => onMarkMastered(id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
