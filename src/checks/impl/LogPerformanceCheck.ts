import ts from "typescript";
import { benchmarkTime, generateLargeArray } from "../../util/base-util";
import { BaseCheck } from "../BaseCheck";

export default class LogPerformanceCheck extends BaseCheck {
    private maxLogTime: number = 0;

    constructor() {
        super("LogPerformance");
    }

    private check: () => void = () => {
        if (document.hidden)  return;

        const tableStdoutTime = benchmarkTime(() => {
            console.table(generateLargeArray());
        });
        const logStdoutTime = benchmarkTime(() => {
            console.log(generateLargeArray());
        });
        
        // const highest = Math.max(tableStdoutTime, logStdoutTime);
        this.maxLogTime = Math.max(this.maxLogTime, logStdoutTime);

        if (this.maxLogTime === 0 && this.isOpen) {
            this.onChange(false, { mlt: this.maxLogTime, tst: tableStdoutTime, lst: logStdoutTime })
            return;
        };

        // if (this.isOpen) return;

        if (tableStdoutTime > (this.maxLogTime * 10) ) {
            this.onChange(true, { mlt: this.maxLogTime, tst: tableStdoutTime, lst: logStdoutTime });
        } else {
            this.onChange(false,{ mlt: this.maxLogTime, tst: tableStdoutTime, lst: logStdoutTime });
        }
    }

    _enable(): void {
        setInterval(this.check, 1000);
    }

}