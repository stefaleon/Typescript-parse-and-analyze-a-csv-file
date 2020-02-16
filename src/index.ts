import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;
// console.log(matches);

const manUnitedAnalysis = new WinsAnalysis("Man United");
const liverpoolAnalysis = new WinsAnalysis("Liverpool");

const MUresult = manUnitedAnalysis.run(matches);
const Lresult = liverpoolAnalysis.run(matches);
console.log(MUresult);
console.log(Lresult);
