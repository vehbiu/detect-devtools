const LARGE_OBJECT_SIZE: number = 300;
const LARGE_ARRAY_SIZE: number = 45;

export function generateLargeObject() {
    const output: Record<string, string> = { };

    for (let i = 0; i < LARGE_OBJECT_SIZE; i++) {
        output[i.toString()] = i.toString();
    }

    return output;
}

export function generateLargeArray() {
    const output: object[] = [];
    const obj = generateLargeObject();

    for (let i = 0; i < LARGE_ARRAY_SIZE; i++) {
        output.push(obj);
    }

    return output;
}

export function benchmarkTime(callback: () => void): number {
    const start = performance.now();
    callback();
    return performance.now() - start;
}