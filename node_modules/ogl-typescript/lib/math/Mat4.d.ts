export declare class Mat4 extends Array<number> {
    constructor(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number);
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    set x(v: number);
    set y(v: number);
    set z(v: number);
    set w(v: number);
    set(m00: any, m01: any, m02: any, m03: any, m10: any, m11: any, m12: any, m13: any, m20: any, m21: any, m22: any, m23: any, m30: any, m31: any, m32: any, m33: any): this;
    translate(v: any, m?: this): this;
    rotate(v: any, axis: any, m?: this): this;
    scale(v: any, m?: this): this;
    multiply(ma: any, mb: any): this;
    identity(): this;
    copy(m: any): this;
    fromPerspective({ fov, aspect, near, far, }?: Partial<{
        fov: number;
        aspect: number;
        near: number;
        far: number;
    }>): this;
    fromOrthogonal({ left, right, bottom, top, near, far }: {
        left: any;
        right: any;
        bottom: any;
        top: any;
        near: any;
        far: any;
    }): this;
    fromQuaternion(q: any): this;
    setPosition(v: any): this;
    inverse(m?: this): this;
    compose(q: any, pos: any, scale: any): this;
    getRotation(q: any): this;
    getTranslation(pos: any): this;
    getScaling(scale: any): this;
    getMaxScaleOnAxis(): number;
    lookAt<T extends number[]>(eye: T, target: any, up: any): this;
    determinant(): number;
    fromArray(a: any, o?: number): this;
    toArray(a?: any[], o?: number): any[];
}
