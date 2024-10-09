/* TODO: Fix, broken for some reason */
import { BaseCheck } from "../BaseCheck";

export default class ToStringCheck extends BaseCheck {
    private detector = function () { };


    constructor() {
        super("ToString");
        this.detector.toString = () => {
            if (this.isOpen) return `Okay`;
            this.onChange(true, null);
            return "ok";
        };
    }

    check = (): void => {
        console.log("%c", this.detector);
        // console.clear();
    };

    _enable(): void {
        setInterval(this.check, 1000);
    }
}
