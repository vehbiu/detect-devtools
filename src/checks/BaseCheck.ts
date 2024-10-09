let isOpen = false;

export type OnChangeProps = (open: boolean, type: string, detail: object | string | null) => void;

let handleOnChange: OnChangeProps = (open, type, detail) => {
    console.log(`Default Check - Now open: ${open}. Type: ${type}: ${detail}`);
};

export function setOnChange(onChange: OnChangeProps) {
    handleOnChange = onChange;
}

export abstract class BaseCheck {
    private usable: boolean = false;
    private TAG: string = "BaseCheck";

    constructor(tag: string, usable?: boolean) {
        this.TAG = tag;
        this.usable = usable || true;
    }

    public enable() {
        this.usable && this._enable();
    }


    abstract _enable(): void;

    get isOpen() {
        return isOpen;
    }

    set isOpen(value: boolean) {
        isOpen = value;
    }

    protected onChange(open: boolean, detail: object | string | null) {
        if (open === this.isOpen) return;
        this.isOpen = open;
        handleOnChange(open, this.TAG, detail);
    }
}
