import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();
const matches = reader.data;
// console.log(matches);

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

let manUnitedWins = 0;
let manUnitedHomeWins = 0;
let manUnitedAwayWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedHomeWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedAwayWins++;
  }
}

manUnitedWins = manUnitedHomeWins + manUnitedAwayWins;
console.log(
  `Manchester United won a total of ${manUnitedWins} games, ${manUnitedHomeWins} at home and ${manUnitedAwayWins} away.`
);

import { dateStringToDate } from "./utils";

console.log(dateStringToDate("15/2/2020"));
