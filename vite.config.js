import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      lib: {
  entry: 'src/widget.jsx',
        name: 'RemoteSlider',
        fileName: (format) => `remote-slider.${format}.js`,
        formats: ['umd', 'es']
      },
      rollupOptions: {
        // Bundle React & Swiper so host page doesn't need them
        // If you want React externalized, move them to externals below.
        // external: ['react', 'react-dom'],
        output: {
          // Provide global names for externals if you externalize them
          // globals: { react: 'React', 'react-dom': 'ReactDOM' }
        }
      }
    }
  };
});
