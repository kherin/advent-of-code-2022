const fs = require("fs");
const path = require("path");

let totalScore = 0;
let roundIndex = 1;

fs.readFile(path.join(__dirname, "assets/data-2.txt"), "utf-8", (err, data) => {
  const rounds = data.split("\n");
  const criteria = {
    X: { A: 3, B: 0, C: 6 },
    Y: { A: 6, B: 3, C: 0 },
    Z: { A: 0, B: 6, C: 3 },
  };

  const points = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  for (let round of rounds) {
    let totalRoundScore = 0;
    const [enemyMove, playerMove] = round.split(" ");
    const roundScore = criteria[playerMove][enemyMove];
    if (roundScore == 0) {
      // player loses round
      totalRoundScore = points[playerMove];
    } else if (roundScore == 3) {
      // player draws round
      totalRoundScore = roundScore + points[playerMove];
    } else {
      // player wins round
      totalRoundScore = roundScore + points[playerMove];
    }

    totalScore += totalRoundScore;
    console.log(`Round ${roundIndex++}: ${totalRoundScore}`);
  }

  console.log("totalScore: ", totalScore);
});
