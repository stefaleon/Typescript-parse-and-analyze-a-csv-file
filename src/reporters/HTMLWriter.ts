import fs from "fs";
import { OutputTarget } from "../Summary";

export class HTMLWriter implements OutputTarget {
  print(report: string): void {
    const data = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
      </head>
      <body>
        <div>${report}</div>
      </body>
      </html>
      `;

    fs.writeFileSync("report.html", data);
  }
}
