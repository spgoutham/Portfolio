import { Vec3 } from '../math/Vec3';
import { OGLRenderingContext, RenderState } from './Renderer';
import { Program } from './Program';
export declare type AttributeMap = {
    [key: string]: Partial<Attribute>;
};
export declare type Attribute = {
    size: number;
    data: ArrayLike<number> | ArrayBufferView;
    instanced?: null | number | boolean;
    type: GLenum;
    normalized: boolean;
    target?: number;
    id?: number;
    buffer?: WebGLBuffer;
    stride: number;
    offset: number;
    count?: number;
    divisor?: number;
    needsUpdate?: boolean;
    min?: any;
    max?: any;
};
export declare type Bounds = {
    min: Vec3;
    max: Vec3;
    center: Vec3;
    scale: Vec3;
    radius: number;
};
export declare class Geometry {
    gl: OGLRenderingContext;
    id: number;
    attributes: AttributeMap;
    VAOs: {};
    drawRange: {
        start: number;
        count: number;
    };
    instancedCount: number;
    glState: RenderState;
    isInstanced: boolean;
    bounds: Bounds;
    raycast: 'sphere' | 'box';
    constructor(gl: OGLRenderingContext, attributes?: {
        [key: string]: Partial<Attribute>;
    });
    addAttribute(key: string, attr: Partial<Attribute>): number;
    updateAttribute(attr: any): void;
    setIndex(value: Attribute): void;
    setDrawRange(start: number, count: number): void;
    setInstancedCount(value: number): void;
    createVAO(program: Program): void;
    bindAttributes(program: Program): void;
    draw({ program, mode }: {
        program: any;
        mode?: number;
    }): void;
    getPosition(): true | Partial<Attribute>;
    computeBoundingBox(attr?: any): void;
    computeBoundingSphere(attr?: any): void;
    computeVertexNormals(): void;
    normalizeNormals(): void;
    remove(): void;
}
