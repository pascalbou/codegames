const router = require("express").Router();
const allWords = require("./words");

class Card {
  constructor(id, word, type) {
    this.id = id;
    this.word = word;
    this.type = type;
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function get25words() {
  let allrn = [];
  let allCards = [];

  for (i = 0; i < 10; i++) {
    allCards[i] = new Card((id = i), (word = ""), (type = "red"));
  }

  for (i = 10; i < 18; i++) {
    allCards[i] = new Card((id = i), (word = ""), (type = "blue"));
  }

  for (i = 18; i < 24; i++) {
    allCards[i] = new Card((id = i), (word = ""), (type = "white"));
  }

  for (i = 24; i < 25; i++) {
    allCards[i] = new Card((id = i), (word = ""), (type = "black"));
  }

  for (i = 0; i < 25; i++) {
    let rn = getRandomNumber(allWords.length);
    if (allrn.includes(rn) === false) {
      allrn.push(rn);
      allCards[i].word = allWords[rn]
    }
  }

  return allCards;
}

router.get("/words", (req, res) => {
  try {
    const result = get25words();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
