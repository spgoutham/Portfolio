import { Vec3 } from '../math/Vec3';
import { OGLRenderingContext } from '../core/Renderer';
import { Camera } from '../core/Camera';
import { Mesh } from '../core/Mesh';
export declare class Raycast {
    gl: OGLRenderingContext;
    origin: Vec3;
    direction: Vec3;
    constructor(gl: OGLRenderingContext);
    castMouse(camera: Camera, mouse?: number[]): void;
    intersectBounds(meshes: Mesh | Mesh[], { maxDistance, output }?: {
        maxDistance?: number;
        output?: Array<Mesh>;
    }): Mesh[];
    intersectMeshes(meshes: any, { cullFace, maxDistance, includeUV, includeNormal, output }?: {
        cullFace?: boolean;
        maxDistance?: any;
        includeUV?: boolean;
        includeNormal?: boolean;
        output?: any[];
    }): Mesh[];
    intersectSphere(sphere: any, origin?: Vec3, direction?: Vec3): number;
    intersectBox(box: any, origin?: Vec3, direction?: Vec3): any;
    intersectTriangle(a: any, b: any, c: any, backfaceCulling?: boolean, origin?: Vec3, direction?: Vec3, normal?: Vec3): number;
    getBarycoord(point: any, a: any, b: any, c: any, target?: Vec3): Vec3;
}
