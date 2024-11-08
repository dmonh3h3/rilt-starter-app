import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '192.168.5.17', // Alamat IPv4 atau bisa juga '0.0.0.0' untuk membuka akses dari semua IP lokal
        port: 5173, // Port yang diinginkan
    },
});
