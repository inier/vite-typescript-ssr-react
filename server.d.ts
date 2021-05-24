declare const createServer: (root?: string, isProd?: boolean) => Promise<{
    app: import("express-serve-static-core").Express;
    vite: any;
}>;
export { createServer };
//# sourceMappingURL=server.d.ts.map