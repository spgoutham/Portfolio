export declare class Vec4 extends Array<number> {
    constructor(x?: number, y?: number, z?: number, w?: number);
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    set w(v: number);
    set(x: any, y: any, z: any, w: any): this;
    copy(v: any): this;
    normalize(): this;
    fromArray(a: any, o?: number): this;
    toArray(a?: any[], o?: number): any[];
}
