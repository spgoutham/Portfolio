import { Texture } from '../core/Texture';
import { KTXTexture } from './KTXTexture';
import { OGLRenderingContext } from '../core/Renderer';
export interface TextureLoaderOptions {
    src: Partial<{
        pvrtc: string;
        s3tc: string;
        etc: string;
        etc1: string;
        astc: string;
        webp: string;
        jpg: string;
        png: string;
    }> | string;
    wrapS: number;
    wrapT: number;
    anisotropy: number;
    format: number;
    internalFormat: number;
    generateMipmaps: boolean;
    minFilter: number;
    magFilter: number;
    premultiplyAlpha: boolean;
    unpackAlignment: number;
    flipY: boolean;
}
export declare class TextureLoader {
    static load<T extends Texture>(gl: OGLRenderingContext, { src, // string or object of extension:src key-values
    wrapS, wrapT, anisotropy, format, internalFormat, generateMipmaps, minFilter, magFilter, premultiplyAlpha, unpackAlignment, flipY, }?: Partial<TextureLoaderOptions>): T;
    static getSupportedExtensions(gl: OGLRenderingContext): any[];
    static loadKTX(src: string, texture: KTXTexture): Promise<void>;
    static loadImage(gl: any, src: string, texture: Texture): Promise<HTMLImageElement>;
    static clearCache(): void;
}
