declare const NAMES: {
    black: string;
    white: string;
    red: string;
    green: string;
    blue: string;
    fuchsia: string;
    cyan: string;
    yellow: string;
    orange: string;
};
export declare type ColorNames = keyof typeof NAMES;
export declare function hexToRGB(hex: any): number[];
export declare function numberToRGB(num: any): number[];
export declare function parseColor(color?: any): IArguments | number[];
export {};
