import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    // Required for deployment inside ~/public_html/assignment4/ on ICE.
    base: './',
});
