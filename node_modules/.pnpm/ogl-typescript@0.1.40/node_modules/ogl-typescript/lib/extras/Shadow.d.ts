import { Camera } from '../core/Camera';
import { Program } from '../core/Program';
import { RenderTarget } from '../core/RenderTarget';
import { OGLRenderingContext } from '../core/Renderer';
import { Mesh } from '../core/Mesh';
export declare class Shadow {
    gl: OGLRenderingContext;
    light: Camera;
    target: RenderTarget;
    depthProgram: Program;
    castMeshes: Mesh[];
    constructor(gl: OGLRenderingContext, { light, width, height }: {
        light?: Camera;
        width?: number;
        height?: any;
    });
    add({ mesh, receive, cast, vertex, fragment, uniformProjection, uniformView, uniformTexture, }: {
        mesh: any;
        receive?: boolean;
        cast?: boolean;
        vertex?: string;
        fragment?: string;
        uniformProjection?: string;
        uniformView?: string;
        uniformTexture?: string;
    }): void;
    render({ scene }: {
        scene: any;
    }): void;
}
