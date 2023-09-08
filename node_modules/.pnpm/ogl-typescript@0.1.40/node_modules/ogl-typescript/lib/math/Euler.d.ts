export declare class Euler extends Array<number> {
    onChange: () => void;
    order: string;
    constructor(x?: number, y?: number, z?: number, order?: string);
    get x(): number;
    get y(): number;
    get z(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    set(x: any, y?: any, z?: any): this;
    copy(v: any): this;
    reorder(order: any): this;
    fromRotationMatrix(m: any, order?: string): this;
    fromQuaternion(q: any, order?: string): this;
    toArray(a?: any[], o?: number): any[];
}
