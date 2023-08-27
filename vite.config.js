import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   base: "/pokemon-test-task",
   plugins: [react()],
   resolve: {
      extensions: [".js", ".jsx"],
   },
});
