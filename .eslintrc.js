module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		// browser: true,
		commonjs: true,
		es6: true
	},
	plugins: [
		'@typescript-eslint',
		'jest',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
	],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],

		'@typescript-eslint/no-var-requires': 0,
	}
};
