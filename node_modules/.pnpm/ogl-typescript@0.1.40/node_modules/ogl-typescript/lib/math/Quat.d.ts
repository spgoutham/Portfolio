export declare class Quat extends Array<number> {
    onChange: () => void;
    constructor(x?: number, y?: number, z?: number, w?: number);
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    set w(v: number);
    identity(): this;
    set(x: any, y: any, z: any, w: any): this;
    rotateX(a: any): this;
    rotateY(a: any): this;
    rotateZ(a: any): this;
    inverse(q?: this): this;
    conjugate(q?: this): this;
    copy(q: any): this;
    normalize(q?: this): this;
    multiply(qA: any, qB: any): this;
    dot(v: any): number;
    fromMatrix3(matrix3: any): this;
    fromEuler(euler: any): this;
    fromAxisAngle(axis: any, a: any): this;
    slerp(q: any, t: any): this;
    fromArray(a: any, o?: number): this;
    toArray(a?: any[], o?: number): any[];
}
