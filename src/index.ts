import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;
// console.log(matches);

const ManUnitedSummary = Summary.newWinsAnalysisForConsole("Man United");
ManUnitedSummary.analyzeAndOutput(matches);

const LiverpoolSummary = Summary.newWinsAnalysisForConsole("Liverpool");
LiverpoolSummary.analyzeAndOutput(matches);

const ChelseaSummary = Summary.newWinsAnalysisForHtml("Chelsea");
ChelseaSummary.analyzeAndOutput(matches);
