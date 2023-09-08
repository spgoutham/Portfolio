import { Vec3 } from '../math/Vec3';
import { Transform } from '../core/Transform';
export declare type OrbitOptions = {
    element: HTMLElement;
    enabled: boolean;
    target: Vec3;
    ease: number;
    inertia: number;
    enableRotate: boolean;
    rotateSpeed: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    enableZoom: boolean;
    zoomSpeed: number;
    enablePan: boolean;
    panSpeed: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    minDistance: number;
    maxDistance: number;
};
export declare function Orbit(object: Transform & {
    fov: number;
}, // TODO: fov property only be used in pan()
{ element, enabled, target, ease, inertia, enableRotate, rotateSpeed, autoRotate, autoRotateSpeed, enableZoom, zoomSpeed, enablePan, panSpeed, minPolarAngle, maxPolarAngle, minAzimuthAngle, maxAzimuthAngle, minDistance, maxDistance, }?: Partial<OrbitOptions>): void;
