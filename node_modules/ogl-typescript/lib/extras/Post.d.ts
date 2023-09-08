import { Program } from '../core/Program';
import { Mesh } from '../core/Mesh';
import { Triangle } from './Triangle';
import { OGLRenderingContext } from '../core/Renderer';
export interface PostOptions {
    width: number;
    height: number;
    dpr: number;
    wrapS: GLenum;
    wrapT: GLenum;
    minFilter: GLenum;
    magFilter: GLenum;
    geometry: Triangle;
    targetOnly: any;
}
export interface Pass {
    mesh: Mesh;
    program: Program;
    uniforms: any;
    enabled: boolean;
    textureUniform: any;
    vertex?: string;
    fragment?: string;
}
export declare class Post {
    gl: OGLRenderingContext;
    options: {
        wrapS: GLenum;
        wrapT: GLenum;
        minFilter: GLenum;
        magFilter: GLenum;
        width?: number;
        height?: number;
    };
    passes: Pass[];
    geometry: Triangle;
    uniform: {
        value: any;
    };
    targetOnly: any;
    fbo: any;
    dpr: number;
    width: number;
    height: number;
    constructor(gl: OGLRenderingContext, { width, height, dpr, wrapS, wrapT, minFilter, magFilter, geometry, targetOnly, }?: Partial<PostOptions>);
    addPass({ vertex, fragment, uniforms, textureUniform, enabled }?: Partial<Pass>): {
        mesh: Mesh;
        program: Program;
        uniforms: any;
        enabled: boolean;
        textureUniform: any;
    };
    resize({ width, height, dpr }?: Partial<{
        width: number;
        height: number;
        dpr: number;
    }>): void;
    render({ scene, camera, texture, target, update, sort, frustumCull }: {
        scene?: any;
        camera?: any;
        texture?: any;
        target?: any;
        update?: boolean;
        sort?: boolean;
        frustumCull?: boolean;
    }): void;
}
