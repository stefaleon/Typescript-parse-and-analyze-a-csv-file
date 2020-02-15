import fs from "fs";

const matches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => row.split(","));

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
