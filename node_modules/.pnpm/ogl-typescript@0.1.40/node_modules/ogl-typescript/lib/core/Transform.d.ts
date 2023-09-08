import { Vec3 } from '../math/Vec3';
import { Quat } from '../math/Quat';
import { Mat4 } from '../math/Mat4';
import { Euler } from '../math/Euler';
export declare class Transform {
    parent: Transform;
    children: Transform[];
    visible: boolean;
    matrix: Mat4;
    worldMatrix: Mat4;
    matrixAutoUpdate: boolean;
    worldMatrixNeedsUpdate: boolean;
    position: Vec3;
    scale: Vec3;
    up: Vec3;
    quaternion: Quat;
    rotation: Euler;
    constructor();
    setParent(parent: any, notifyParent?: boolean): void;
    addChild(child: Transform, notifyChild?: boolean): void;
    removeChild(child: Transform, notifyChild?: boolean): void;
    updateMatrixWorld(force?: boolean): void;
    updateMatrix(): void;
    traverse(callback: (node: Transform) => boolean | void): void;
    decompose(): void;
    lookAt<T extends number[]>(target: T, invert?: boolean): void;
}
