module.exports = {
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		// project: './tsconfig.json',
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'env': {
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
