import { BoneTransform } from './Skin';
export interface AnimationOptions {
    objects: BoneTransform[];
    data: any;
}
export declare class Animation {
    objects: BoneTransform[];
    data: any;
    elapsed: number;
    weight: number;
    duration: number;
    constructor({ objects, data }: AnimationOptions);
    update(totalWeight: number, isSet: any): void;
}
