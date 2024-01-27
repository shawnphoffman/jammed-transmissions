module.exports = {
	extends: ['next/core-web-vitals'],
	plugins: ['react', 'simple-import-sort'],
	rules: {
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^\\u0000'],
					['^react$', '^react', '^@?\\w'],
					['^(@root|types|data)(/.*)'],
					['^(app|components|utils|context|config|pages|hooks|styles|public)(/.*)'],
					[('^\\.\\.(?!/?$)', '^\\.\\./?$')],
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
				],
			},
		],
		'sort-imports': 'off',
		'import/order': 'off',
		'react/no-unescaped-entities': 'warn',
	},
}
