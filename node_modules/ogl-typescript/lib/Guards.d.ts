import { Transform } from './core/Transform';
import { Mesh } from './core/Mesh';
import { OGLRenderingContext } from './core/Renderer';
export declare const isArrayLike: <T>(term: any) => term is ArrayLike<T>;
export declare const isMesh: (node: Transform | Mesh) => node is Mesh;
export declare const isWebGl2: (gl: OGLRenderingContext) => gl is OGLRenderingContext & WebGL2RenderingContext;
