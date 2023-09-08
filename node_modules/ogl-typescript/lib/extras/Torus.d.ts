import { Geometry } from '../core/Geometry';
export declare class Torus extends Geometry {
    constructor(gl: any, { radius, tube, radialSegments, tubularSegments, arc, attributes }?: {
        radius?: number;
        tube?: number;
        radialSegments?: number;
        tubularSegments?: number;
        arc?: number;
        attributes?: {};
    });
}
