import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleLogger } from "./reporters/ConsoleLogger";
import { HTMLWriter } from "./reporters/HTMLWriter";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static newWinsAnalysisForConsole(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new ConsoleLogger());
  }

  static newWinsAnalysisForHtml(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HTMLWriter());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  analyzeAndOutput(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
