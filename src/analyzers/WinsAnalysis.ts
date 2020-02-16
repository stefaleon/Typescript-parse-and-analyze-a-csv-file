import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    let homeWins = 0;
    let awayWins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        homeWins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        awayWins++;
      }
    }

    wins = homeWins + awayWins;
    return `${this.teamName} won a total of ${wins} games, ${homeWins} at home and ${awayWins} away.`;
  }
}
