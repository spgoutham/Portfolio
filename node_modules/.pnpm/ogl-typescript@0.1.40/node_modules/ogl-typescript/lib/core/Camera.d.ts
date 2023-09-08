import { Mat4 } from '../math/Mat4';
import { Vec3 } from '../math/Vec3';
import { Transform } from './Transform';
import { OGLRenderingContext } from './Renderer';
export declare type CameraOptions = {
    near: number;
    far: number;
    fov: number;
    aspect: number;
    left: number;
    right: number;
    bottom: number;
    top: number;
    zoom: number;
};
export declare class Camera extends Transform {
    near: number;
    far: number;
    fov: number;
    aspect: number;
    left: number;
    right: number;
    bottom: number;
    top: number;
    zoom: number;
    projectionMatrix: Mat4;
    viewMatrix: Mat4;
    projectionViewMatrix: Mat4;
    worldPosition: Vec3;
    type: 'perspective' | 'orthographic';
    frustum: Vec3[];
    constructor(gl: OGLRenderingContext, { near, far, fov, aspect, left, right, bottom, top, zoom }?: Partial<CameraOptions>);
    perspective({ near, far, fov, aspect }?: {
        near?: number;
        far?: number;
        fov?: number;
        aspect?: number;
    }): this;
    orthographic({ near, far, left, right, bottom, top, zoom, }?: {
        near?: number;
        far?: number;
        left?: number;
        right?: number;
        bottom?: number;
        top?: number;
        zoom?: number;
    }): this;
    updateMatrixWorld(): this;
    lookAt<T extends number[]>(target: T): this;
    project(v: any): this;
    unproject(v: any): this;
    updateFrustum(): void;
    frustumIntersectsMesh(node: any): boolean;
    frustumIntersectsSphere(center: any, radius: any): boolean;
}
