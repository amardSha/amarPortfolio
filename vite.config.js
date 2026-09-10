import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "./"
//  });9465528947

export default defineConfig({
  plugins: [react()],
  base: '/amarPortfolio/',
})

