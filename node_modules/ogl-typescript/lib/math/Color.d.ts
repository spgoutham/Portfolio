import * as ColorFunc from './functions/ColorFunc';
export declare class Color extends Array<number> {
    constructor();
    constructor(color: [number, number, number]);
    constructor(color: number, g: number, b: number);
    constructor(color: string);
    constructor(color: ColorFunc.ColorNames);
    constructor(color: number);
    get r(): number;
    get g(): number;
    get b(): number;
    set r(v: number);
    set g(v: number);
    set b(v: number);
    set(color: any): this;
    copy(v: any): this;
}
