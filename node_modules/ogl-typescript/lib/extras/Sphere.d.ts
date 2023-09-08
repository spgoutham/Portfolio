import { Geometry, AttributeMap } from '../core/Geometry';
import { OGLRenderingContext } from '../core/Renderer';
export declare type SphereOptions = {
    radius: number;
    widthSegments: number;
    heightSegments: number;
    phiStart: number;
    phiLength: number;
    thetaStart: number;
    thetaLength: number;
    attributes: AttributeMap;
};
export declare class Sphere extends Geometry {
    constructor(gl: OGLRenderingContext, { radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength, attributes, }?: Partial<SphereOptions>);
}
