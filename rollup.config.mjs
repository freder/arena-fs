import typescript from '@rollup/plugin-typescript';

export default {
	plugins: [typescript()],
	input: 'src/index.ts',
	output: {
		// dir: 'dist',
		file: 'dist/arena-fs.js',
		format: 'cjs'
	}
};
