import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/index.jsx',
			name: 'SHModal',
			fileName: 'index',
			formats: ['es', 'cjs']
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'style.css') {
						return 'modal.css'; // 🔁 renommer le fichier CSS de sortie
					}
					return assetInfo.name;
				}
			}
		}
	}
});
