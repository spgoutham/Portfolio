export declare class Mat3 extends Array<number> {
    constructor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number);
    set(m00: any, m01: any, m02: any, m10: any, m11: any, m12: any, m20: any, m21: any, m22: any): this;
    translate(v: any, m?: this): this;
    rotate(v: any, m?: this): this;
    scale(v: any, m?: this): this;
    multiply(ma: any, mb: any): this;
    identity(): this;
    copy(m: any): this;
    fromMatrix4(m: any): this;
    fromQuaternion(q: any): this;
    fromBasis(vec3a: any, vec3b: any, vec3c: any): this;
    inverse(m?: this): this;
    getNormalMatrix(m: any): this;
}
