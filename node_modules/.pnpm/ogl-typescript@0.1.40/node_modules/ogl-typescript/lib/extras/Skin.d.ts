import { Mesh } from '../core/Mesh';
import { Transform } from '../core/Transform';
import { Mat4 } from '../math/Mat4';
import { Texture } from '../core/Texture';
import { Animation } from './Animation';
import { OGLRenderingContext } from '../core/Renderer';
import { Geometry } from '../core/Geometry';
import { Program } from '../core/Program';
import { Camera } from '../core/Camera';
export interface SkinOptions {
    rig: any;
    geometry: Geometry;
    program: Program;
    mode: GLenum;
}
export interface BoneTransform extends Transform {
    name: string;
    bindInverse: Mat4;
}
export declare class Skin extends Mesh {
    animations: Animation[];
    boneTexture: Texture;
    boneTextureSize: number;
    boneMatrices: Float32Array;
    root: Transform;
    bones: BoneTransform[];
    constructor(gl: OGLRenderingContext, { rig, geometry, program, mode }?: Partial<SkinOptions>);
    createBones(rig: any): void;
    createBoneTexture(): void;
    addAnimation(data: any): Animation;
    update(): void;
    draw({ camera }?: {
        camera?: Camera;
    }): void;
}
