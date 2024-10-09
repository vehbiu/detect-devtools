import { BaseCheck } from "../BaseCheck";

const FIELDS = ["id", "innerText", "style", "accessKey"]

export default class ObjectIDCheck extends BaseCheck {
    private image: HTMLImageElement = new Image();

    protected detected(type: "defineGetter" | "defineProperty") {
        this.onChange(true, { type });
    }

    constructor() {
        super("ObjectID");

        for (const field of FIELDS) {
            (this.image as any).__defineGetter__(field, () => this.detected("defineGetter"))

            Object.defineProperty(this.image, field, {
                get: () => this.detected("defineProperty")
            });
        }
    }

    private check: () => void = () => {
        console.dir(this.image);
    }

    _enable(): void {
        setInterval(this.check, 1000);
    }

}