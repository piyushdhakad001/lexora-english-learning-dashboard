// ---------------------------------------------------------------
// DATA LAYER — paste your full datasets into the `rows` arrays.
// Row format: [english, hindi, exampleSentence]
// IDs are generated from the category key + index, so progress
// saved in localStorage stays stable as long as row ORDER is kept.
// ---------------------------------------------------------------
const build = (key, rows) =>
  rows.map(([en, hi, example], i) => ({ id: `${key}-${i + 1}`, en, hi, example }));

export const CATEGORIES = [
  { key: "collocations", label: "Collocations", icon: "🔗", color: "#c0392b",
    items: build("col", [
      ["make a decision", "निर्णय लेना", "We need to make a decision by Friday."],
      ["take a break", "विराम लेना", "Let's take a break and grab some tea."],
      ["heavy rain", "भारी बारिश", "Heavy rain delayed the train."],
      ["strong coffee", "कड़क कॉफ़ी", "I need a strong coffee to wake up."],
    ]) },
  { key: "connectors", label: "Connectors", icon: "🌉", color: "#2e86ab",
    items: build("con", [
      ["however", "हालाँकि", "The plan is good; however, it is costly."],
      ["therefore", "इसलिए", "He studied hard; therefore, he passed."],
      ["moreover", "इसके अलावा", "It is cheap. Moreover, it lasts long."],
      ["although", "यद्यपि", "Although it rained, we went out."],
    ]) },
  { key: "idioms", label: "Idioms", icon: "💡", color: "#8e5ea2",
    items: build("idm", [
      ["break the ice", "बातचीत की शुरुआत करना", "He told a joke to break the ice."],
      ["piece of cake", "बहुत आसान काम", "The exam was a piece of cake."],
      ["once in a blue moon", "कभी-कभार", "We meet once in a blue moon."],
      ["spill the beans", "राज़ खोल देना", "Don't spill the beans about the party."],
    ]) },
  { key: "phrasals", label: "Phrasal Verbs", icon: "⚡", color: "#d68910",
    items: build("phv", [
      ["give up", "हार मान लेना", "Never give up on your goals."],
      ["look after", "देखभाल करना", "She looks after her little brother."],
      ["turn down", "ठुकरा देना", "He turned down the job offer."],
      ["carry on", "जारी रखना", "Carry on with your work."],
    ]) },
];

export const TOTAL_ITEMS = CATEGORIES.reduce((n, c) => n + c.items.length, 0);
