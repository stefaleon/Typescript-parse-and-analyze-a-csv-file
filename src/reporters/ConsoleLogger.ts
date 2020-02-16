import { OutputTarget } from "../Summary";

export class ConsoleLogger implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
