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
  let gameWords = [];

  for (i = 0; i < 25; i++) {
    let rn = getRandomNumber(allWords.length);
    if (allrn.includes(rn) === false) {
      allrn.push(rn);
      gameWords.push(allWords[rn]);
      // return allWords[rn];
    }
  }

    return gameWords;
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
