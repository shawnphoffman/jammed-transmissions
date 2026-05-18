import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const config = [
	...nextCoreWebVitals,
	...nextTypescript,
	{
		ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-wrapper-object-types': 'off',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'react-hooks/error-boundaries': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'react-hooks/purity': 'off',
			'prefer-const': 'warn',
		},
	},
]

export default config
