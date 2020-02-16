import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleLogger } from "./reporters/ConsoleLogger";
import { HTMLWriter } from "./reporters/HTMLWriter";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;
// console.log(matches);

const ManUnitedSummary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleLogger()
);
const LiverpoolSummary = new Summary(
  new WinsAnalysis("Liverpool"),
  new ConsoleLogger()
);

ManUnitedSummary.analyzeAndOutput(matches);
LiverpoolSummary.analyzeAndOutput(matches);

const ChelseaSummary = new Summary(
  new WinsAnalysis("Chelsea"),
  new HTMLWriter()
);

ChelseaSummary.analyzeAndOutput(matches);
