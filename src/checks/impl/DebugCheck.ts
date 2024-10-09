import { BaseCheck } from "../BaseCheck";

export default class DebugCheck extends BaseCheck {
    constructor() {
        super("DebugCheck");
    }

    private check: () => void = () => {
        const date = Date.now();
        (() => { debugger; })();
        const diff = Date.now() - date;
        if (diff > 100) {
            this.onChange(true, { date, diff });
        }
        //  else {
        //     this.onChange(false, { date, diff });
        // }
    }

    _enable(): void {
        setInterval(this.check, 500);
    }

}