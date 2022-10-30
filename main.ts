import { Application } from "oak";
// import { esbuild } from "esbuild";
import * as esbuild from "esbuild";
// import * as esbuild from "https://esm.sh/esbuild-wasm@0.15.9";
import { denoPlugin } from "denoPlugin";


// Transpile jsx to js for React.
await esbuild.initialize({
  wasmURL: "https://esm.sh/esbuild-wasm/esbuild.wasm",
  worker: false,
});
const output = await esbuild.build({
  plugins: [denoPlugin()],
  entryPoints: ["./src/index.tsx"],
  write: false,
  bundle: true,
  format: "esm",
  absWorkingDir: Deno.cwd(),
});
// The raw transpiled output as a string.
const indexJs = new TextDecoder().decode(output.outputFiles[0].contents);

// Setup server.
const app = new Application();

// Return transpiled script as HTML string.
app.use((ctx) => {
  ctx.response.body = `
    <!doctype html>
    <html>
      <head>
        <title>Preact Deno Template</title>
      </head>
      <body>
        <div id="app" />
        <script>${indexJs}</script>
      </body>
    </html>
  `;
});

// Start server.
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
