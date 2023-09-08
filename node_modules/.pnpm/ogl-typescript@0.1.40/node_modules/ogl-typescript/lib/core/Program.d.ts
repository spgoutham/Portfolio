import { OGLRenderingContext } from './Renderer';
export declare type ProgramOptions = {
    vertex: string;
    fragment: string;
    uniforms: {
        [name: string]: {
            value: any;
        };
    };
    transparent: boolean;
    cullFace: GLenum | false;
    frontFace: GLenum;
    depthTest: boolean;
    depthWrite: boolean;
    depthFunc: GLenum;
};
export interface BlendFunc {
    src?: GLenum;
    dst?: GLenum;
    srcAlpha?: number;
    dstAlpha?: number;
}
export interface BlendEquation {
    modeRGB?: number;
    modeAlpha?: number;
}
export interface UniformInfo extends WebGLActiveInfo {
    uniformName: string;
    isStruct: boolean;
    isStructArray: boolean;
    structIndex: number;
    structProperty: string;
}
export declare class Program {
    gl: OGLRenderingContext;
    uniforms: {
        [name: string]: {
            value: any;
        };
    };
    id: number;
    transparent: boolean;
    cullFace: GLenum | false;
    frontFace: GLenum;
    depthTest: boolean;
    depthWrite: boolean;
    depthFunc: GLenum;
    blendFunc: BlendFunc;
    blendEquation: BlendEquation;
    program: WebGLProgram;
    uniformLocations: Map<any, any>;
    attributeLocations: Map<any, any>;
    attributeOrder: string;
    gltfMaterial: any;
    constructor(gl: OGLRenderingContext, { vertex, fragment, uniforms, transparent, cullFace, frontFace, depthTest, depthWrite, depthFunc, }?: Partial<ProgramOptions>);
    setBlendFunc(src: number, dst: number, srcAlpha?: number, dstAlpha?: number): void;
    setBlendEquation(modeRGB: any, modeAlpha: any): void;
    applyState(): void;
    use({ flipFaces }?: {
        flipFaces?: boolean;
    }): void;
    remove(): void;
}
