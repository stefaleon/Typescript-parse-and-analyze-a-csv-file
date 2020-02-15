import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;
// console.log(matches);

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
