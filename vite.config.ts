import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: "src/main.ts",
            userscript: {
                "icon": "https://vitejs.dev/logo.svg",
                "namespace": "banjoanton",
                "author": "banjoanton",
                "match": ["https://www.google.com/*"],
                "run-at": "document-end",
            },
        }),
    ],
});
