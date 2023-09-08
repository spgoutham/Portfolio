export declare class GLTFAnimation {
    private data;
    private elapsed;
    private weight;
    private loop;
    private duration;
    private startTime;
    private endTime;
    constructor(data: any, weight?: number);
    update(totalWeight: number, isSet: any): void;
    cubicSplineInterpolate(t: any, prevVal: any, prevTan: any, nextTan: any, nextVal: any): any;
}
