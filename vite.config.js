import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: "src/main.js", // Arquivo de entrada principal
          filename: "index.html", // Página principal
        },
        {
          entry: "src/main.js", // Pode ser o mesmo arquivo de entrada
          filename: "obrigado.html", // Arquivo de obrigado
          template: "public/obrigado.html", // O template de origem
        },
      ],
    }),
  ],
});
