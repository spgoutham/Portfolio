import { Texture } from '../core/Texture';
export interface KTXTextureOptions {
    buffer: ArrayBuffer;
    src: string;
    wrapS: number;
    wrapT: number;
    anisotropy: number;
    minFilter: number;
    magFilter: number;
}
export declare class KTXTexture extends Texture {
    constructor(gl: any, { buffer, wrapS, wrapT, anisotropy, minFilter, magFilter }?: Partial<KTXTextureOptions>);
    parseBuffer(buffer: ArrayBuffer): void;
}
