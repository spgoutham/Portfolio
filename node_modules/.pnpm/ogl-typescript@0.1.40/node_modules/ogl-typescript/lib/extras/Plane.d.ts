import { Geometry, AttributeMap } from '../core/Geometry';
import { OGLRenderingContext } from '../core/Renderer';
export declare type PlaneOptions = {
    width: number;
    height: number;
    widthSegments: number;
    heightSegments: number;
    attributes: AttributeMap;
};
export declare class Plane extends Geometry {
    constructor(gl: OGLRenderingContext, { width, height, widthSegments, heightSegments, attributes }?: Partial<PlaneOptions>);
    static buildPlane(position: Float32Array, normal: Float32Array, uv: Float32Array, index: Uint32Array | Uint16Array, width: number, height: number, depth: number, wSegs: number, hSegs: number, u?: number, v?: number, w?: number, uDir?: number, vDir?: number, i?: number, ii?: number): void;
}
