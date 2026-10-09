// 🔗 85 high-frequency connectors (linking words & phrases)
// One entry per connector. The Hindi column gives the meaning/function of the connector.
// Format: { hindi, english, example }

export const connectors = [
  // ===== ADDITION =====
  { hindi: "और", english: "And", example: "I bought a pen and a notebook." },
  { hindi: "भी / इसके अलावा", english: "Also", example: "She is smart and also very hardworking." },
  { hindi: "इसके अतिरिक्त / और तो और", english: "Moreover", example: "The plan is cheap. Moreover, it is very easy to follow." },
  { hindi: "इसके अलावा / आगे यह कि", english: "Furthermore", example: "He is late. Furthermore, he has not prepared anything." },
  { hindi: "इसके अलावा", english: "In addition", example: "In addition, we need two more laptops." },
  { hindi: "इसके अलावा / वैसे भी", english: "Besides", example: "I don't want to go. Besides, it's too late." },
  { hindi: "के साथ-साथ / और भी", english: "As well as", example: "He speaks Hindi as well as English." },
  { hindi: "न केवल... बल्कि", english: "Not only... but also", example: "She is not only kind but also brave." },
  { hindi: "और भी बड़ी बात यह है कि", english: "What is more", example: "He won the race. What is more, he broke the record." },
  { hindi: "उसी तरह / ठीक वैसे ही", english: "Likewise", example: "She cleaned her room, and her brother did likewise." },
  { hindi: "इसी प्रकार", english: "Similarly", example: "Cats are fast. Similarly, dogs can run quickly too." },
  { hindi: "के साथ / के संग", english: "Along with", example: "Bring your ID card along with the form." },

  // ===== CONTRAST =====
  { hindi: "लेकिन / पर", english: "But", example: "I wanted to go, but it started raining." },
  { hindi: "हालाँकि / फिर भी", english: "However", example: "The test was hard. However, I passed it." },
  { hindi: "हालाँकि / यद्यपि", english: "Although", example: "Although he was tired, he kept working." },
  { hindi: "भले ही / हालाँकि", english: "Though", example: "Though it was late, we went for a walk." },
  { hindi: "इसके बावजूद कि / चाहे", english: "Even though", example: "Even though he studied hard, he failed." },
  { hindi: "जबकि / जब कि (एक ही समय पर विरोध)", english: "While", example: "While I like tea, my sister prefers coffee." },
  { hindi: "जबकि / वहीं दूसरी ओर", english: "Whereas", example: "He is lazy, whereas his brother is very active." },
  { hindi: "फिर भी / तो भी", english: "Yet", example: "He is poor, yet he is always happy." },
  { hindi: "दूसरी ओर", english: "On the other hand", example: "Cities are exciting. On the other hand, they are very crowded." },
  { hindi: "फिर भी / इसके बावजूद", english: "Nevertheless", example: "It was risky. Nevertheless, we went ahead." },
  { hindi: "फिर भी / तब भी", english: "Nonetheless", example: "The food was cold. Nonetheless, we ate it." },
  { hindi: "के बावजूद", english: "Despite", example: "Despite the rain, we played cricket." },
  { hindi: "के बावजूद (पूरे वाक्यांश के साथ)", english: "In spite of", example: "In spite of his injury, he finished the match." },
  { hindi: "तब भी / अब भी", english: "Still", example: "I told him the truth. Still, he didn't believe me." },
  { hindi: "इसके उलट / बल्कि", english: "On the contrary", example: "I'm not angry. On the contrary, I'm quite happy." },
  { hindi: "की जगह / इसके बजाय", english: "Instead", example: "I didn't go out. Instead, I stayed home and studied." },

  // ===== CAUSE & REASON =====
  { hindi: "क्योंकि", english: "Because", example: "I stayed home because I was sick." },
  { hindi: "चूँकि / क्योंकि (कारण पहले से पता हो)", english: "Since", example: "Since it is raining, we will stay inside." },
  { hindi: "क्योंकि / चूँकि", english: "As", example: "As he was tired, he went to bed early." },
  { hindi: "की वजह से / के कारण", english: "Due to", example: "The flight was cancelled due to bad weather." },
  { hindi: "के कारण (औपचारिक)", english: "Owing to", example: "Owing to heavy traffic, we reached late." },
  { hindi: "की वजह से (संज्ञा के साथ)", english: "Because of", example: "We missed the bus because of you." },
  { hindi: "की बदौलत / की वजह से", english: "Thanks to", example: "Thanks to your help, I cleared the interview." },
  { hindi: "यह देखते हुए कि / जब यह है कि", english: "Given that", example: "Given that he is a beginner, he did very well." },

  // ===== RESULT & CONSEQUENCE =====
  { hindi: "इसलिए / तो", english: "So", example: "It was late, so I took a taxi." },
  { hindi: "इसलिए / अतः", english: "Therefore", example: "He worked hard. Therefore, he succeeded." },
  { hindi: "इस प्रकार / अतः", english: "Thus", example: "The road was closed. Thus, we took another route." },
  { hindi: "इसलिए / अतः (औपचारिक)", english: "Hence", example: "The shop was closed, hence we went home." },
  { hindi: "नतीजतन / परिणामस्वरूप", english: "Consequently", example: "He missed the deadline. Consequently, he lost the project." },
  { hindi: "नतीजे के तौर पर", english: "As a result", example: "She practised daily. As a result, her speaking improved." },
  { hindi: "इसीलिए तो", english: "That's why", example: "I was sick. That's why I didn't come." },
  { hindi: "इस कारण से", english: "For this reason", example: "For this reason, I decided to quit." },

  // ===== PURPOSE =====
  { hindi: "ताकि", english: "So that", example: "I woke up early so that I could catch the train." },
  { hindi: "के लिए / इसलिए कि", english: "In order to", example: "He works hard in order to support his family." },
  { hindi: "के उद्देश्य से / ताकि", english: "So as to", example: "Speak slowly so as to be understood." },

  // ===== CONDITION =====
  { hindi: "अगर / यदि", english: "If", example: "If you study well, you will pass." },
  { hindi: "जब तक न / अगर नहीं", english: "Unless", example: "You won't improve unless you practise." },
  { hindi: "जब तक", english: "As long as", example: "You can stay as long as you keep quiet." },
  { hindi: "इस शर्त पर कि", english: "Provided that", example: "I'll lend you the money provided that you return it soon." },
  { hindi: "भले ही / चाहे ऐसा हो", english: "Even if", example: "Even if it rains, we will go." },
  { hindi: "कहीं ऐसा न हो / अगर ऐसा हुआ तो", english: "In case", example: "Take an umbrella in case it rains." },
  { hindi: "नहीं तो / वरना", english: "Otherwise", example: "Hurry up. Otherwise, we will miss the train." },
  { hindi: "चाहे / क्या (दो विकल्प)", english: "Whether", example: "I don't know whether he will come or not." },

  // ===== TIME & SEQUENCE =====
  { hindi: "सबसे पहले", english: "First of all", example: "First of all, let me thank everyone for coming." },
  { hindi: "फिर / उसके बाद", english: "Then", example: "Mix the flour, then add the water." },
  { hindi: "अगला / इसके बाद", english: "Next", example: "Next, we will discuss the budget." },
  { hindi: "उसके बाद", english: "After that", example: "After that, we went to a restaurant." },
  { hindi: "बाद में / उसके पश्चात", english: "Afterwards", example: "We watched the film and had dinner afterwards." },
  { hindi: "अंत में / आख़िरकार", english: "Finally", example: "Finally, add salt and serve hot." },
  { hindi: "इस बीच / तब तक", english: "Meanwhile", example: "I cooked dinner. Meanwhile, he cleaned the house." },
  { hindi: "उसी समय / साथ ही", english: "At the same time", example: "He laughed and cried at the same time." },
  { hindi: "से पहले", english: "Before", example: "Wash your hands before you eat." },
  { hindi: "के बाद", english: "After", example: "I felt better after I took a nap." },
  { hindi: "जब / उस समय", english: "When", example: "Call me when you reach home." },
  { hindi: "जब तक / तब तक कि", english: "Until", example: "Wait here until I come back." },
  { hindi: "जैसे ही", english: "As soon as", example: "Call me as soon as you arrive." },
  { hindi: "एक बार जब / जब कभी", english: "Once", example: "Once you learn the basics, it becomes easy." },
  { hindi: "आख़िरकार / अंततः", english: "Eventually", example: "Eventually, he found a good job." },
  { hindi: "अंत में / आख़िर में", english: "In the end", example: "In the end, honesty won." },

  // ===== EXAMPLE & EMPHASIS =====
  { hindi: "उदाहरण के लिए", english: "For example", example: "Many fruits are healthy, for example, apples and oranges." },
  { hindi: "मिसाल के तौर पर", english: "For instance", example: "Some habits are bad. For instance, sleeping late." },
  { hindi: "जैसे कि", english: "Such as", example: "I like sports such as cricket and football." },
  { hindi: "ख़ास तौर पर", english: "In particular", example: "I love fruits, mangoes in particular." },
  { hindi: "ख़ासकर / विशेष रूप से", english: "Especially", example: "I love summers, especially the mangoes." },
  { hindi: "वास्तव में / सचमुच", english: "Indeed", example: "It was indeed a wonderful evening." },
  { hindi: "असल में / दरअसल", english: "In fact", example: "He isn't lazy. In fact, he works very hard." },
  { hindi: "बिल्कुल / ज़ाहिर है", english: "Of course", example: "Of course, you can use my phone." },
  { hindi: "यानी / अर्थात", english: "That is", example: "He is a polyglot, that is, he speaks many languages." },

  // ===== SUMMARY & CONCLUSION =====
  { hindi: "अंत में / निष्कर्ष में", english: "In conclusion", example: "In conclusion, regular practice is the key to fluency." },
  { hindi: "सारांश में / कुल मिलाकर", english: "To sum up", example: "To sum up, the plan is simple and affordable." },
  { hindi: "संक्षेप में", english: "In short", example: "In short, we need more time." },
  { hindi: "कुल मिलाकर / समग्र रूप से", english: "Overall", example: "Overall, it was a great trip." },
  { hindi: "आख़िर / सब कुछ के बाद", english: "After all", example: "Forgive him. After all, he is your brother." },
];