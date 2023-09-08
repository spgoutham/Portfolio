import { Vec3 } from '../math/Vec3';
export interface CurveOptions {
    points: Vec3[];
    divisions: number;
    type: 'catmullrom' | 'cubicbezier';
}
export declare class Curve {
    static CATMULLROM: 'catmullrom';
    static CUBICBEZIER: 'cubicbezier';
    static QUADRATICBEZIER: 'quadraticbezier';
    type: 'catmullrom' | 'cubicbezier' | 'quadraticbezier';
    private points;
    private divisions;
    constructor({ points, divisions, type, }?: Partial<CurveOptions>);
    _getQuadraticBezierPoints(divisions?: number): Vec3[];
    _getCubicBezierPoints(divisions?: number): Vec3[];
    _getCatmullRomPoints(divisions?: number, a?: number, b?: number): Vec3[];
    getPoints(divisions?: number, a?: number, b?: number): Vec3[];
}
