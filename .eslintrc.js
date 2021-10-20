module.exports = {
	env: {
		node: true,
	},
	extends: [
		"prettier",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"eslint:recommended",
		"eslint-config-prettier",
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"no-unused-vars": 1,
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx"],
			},
		],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: false,
				printWidth: 100,
			},
		],
	},
	plugins: ["prettier", "react"],
};
