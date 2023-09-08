import { Geometry, AttributeMap } from '../core/Geometry';
import { OGLRenderingContext } from '../core/Renderer';
export declare type BoxOptions = {
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
    attributes: AttributeMap;
};
export declare class Box extends Geometry {
    constructor(gl: OGLRenderingContext, { width, height, depth, widthSegments, heightSegments, depthSegments, attributes }?: Partial<BoxOptions>);
}
