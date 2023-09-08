import { Geometry } from '../core/Geometry';
import { Program } from '../core/Program';
import { Mesh } from '../core/Mesh';
import { Vec2 } from '../math/Vec2';
import { Vec3 } from '../math/Vec3';
import { Color } from '../math/Color';
import { OGLRenderingContext } from '../core/Renderer';
export interface PolylineOptions {
    points: Vec3[];
    vertex: string;
    fragment: string;
    uniforms: {
        [key: string]: {
            value: any;
        };
    };
    attributes: {
        [key: string]: any;
    };
}
export declare class Polyline {
    gl: OGLRenderingContext;
    points: Vec3[];
    count: number;
    position: Float32Array;
    prev: Float32Array;
    next: Float32Array;
    geometry: Geometry;
    resolution: {
        value: Vec2;
    };
    dpr: {
        value: number;
    };
    thickness: {
        value: number;
    };
    color: {
        value: Color;
    };
    miter: {
        value: number;
    };
    program: Program;
    mesh: Mesh;
    constructor(gl: OGLRenderingContext, { points, // Array of Vec3s
    vertex, fragment, uniforms, attributes, }: Partial<PolylineOptions>);
    updateGeometry(): void;
    resize(): void;
}
