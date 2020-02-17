import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.newMatchReaderFromCsv("football.csv");
const ManUnitedWinsLog = Summary.newWinsAnalysisForConsole("Man United");
const LiverpoolWinsLog = Summary.newWinsAnalysisForConsole("Liverpool");
const ChelseaWinsHtmlReport = Summary.newWinsAnalysisForHtml("Chelsea");

matchReader.load();
ManUnitedWinsLog.analyzeAndOutput(matchReader.matches);
LiverpoolWinsLog.analyzeAndOutput(matchReader.matches);
ChelseaWinsHtmlReport.analyzeAndOutput(matchReader.matches);
