export const isArrayLike = (term) => {
    if (term.length)
        return true;
    return false;
};
export const isMesh = (node) => {
    return !!node.draw;
};
export const isWebGl2 = (gl) => {
    return gl.renderer.isWebgl2;
};
//# sourceMappingURL=Guards.js.map