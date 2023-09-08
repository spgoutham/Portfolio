import { Transform } from './Transform';
import { Mat3 } from '../math/Mat3';
import { Mat4 } from '../math/Mat4';
import { Geometry } from './Geometry';
import { Program } from './Program';
import { OGLRenderingContext } from './Renderer';
import { Camera } from './Camera';
import { Vec3 } from '../math/Vec3';
import { Vec2 } from '../math/Vec2';
export interface MeshOptions {
    geometry: Geometry;
    program: Program;
    mode: GLenum;
    frustumCulled: boolean;
    renderOrder: number;
}
export interface DrawOptions {
    camera: Camera;
}
export declare class Mesh extends Transform {
    name: string;
    numInstances: any;
    gl: OGLRenderingContext;
    id: number;
    geometry: Geometry;
    program: Program;
    mode: GLenum;
    frustumCulled: boolean;
    renderOrder: number;
    modelViewMatrix: Mat4;
    normalMatrix: Mat3;
    beforeRenderCallbacks: Array<any>;
    afterRenderCallbacks: Array<any>;
    hit: Partial<{
        localPoint: Vec3;
        distance: number;
        point: Vec3;
        faceNormal: Vec3;
        localFaceNormal: Vec3;
        uv: Vec2;
        localNormal: Vec3;
        normal: Vec3;
    }>;
    constructor(gl: OGLRenderingContext, { geometry, program, mode, frustumCulled, renderOrder }?: Partial<MeshOptions>);
    onBeforeRender(f: any): this;
    onAfterRender(f: any): this;
    draw({ camera }?: Partial<DrawOptions>): void;
}
