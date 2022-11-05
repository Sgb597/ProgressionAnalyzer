const express = require('express');
const keysJson = require('../resources/music_keys.json');
const router = express.Router();

const containsMatch = (userChords, keyArray) => {
  let match = false;
  match = userChords.every(chord => {
      return keyArray.includes(chord);
  });

  return match;
}

const iterateKeys = (userChords) => {
  const keyObj = Object.values(keysJson);

  let objArray, keyArray;
  let resultArray = [];

  for (objArray in keyObj) {
      for (keyArray in keyObj[objArray]) {
          if(containsMatch(userChords, keyObj[objArray][keyArray])) {
              resultArray.push(keyObj[objArray][keyArray]);
          }
      }
  }
  return resultArray;
}

router.post('/', (req, res) => {
  const chordObj = req.body;
  const keyResults = iterateKeys(chordObj.chords);
  return res.json({
    message: 'Succesfully retrieved your key',
    keys: keyResults
  });
});

module.exports = router;
