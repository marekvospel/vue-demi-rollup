import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    plugins: [
      ts({
        check: true,
        tsconfig: path.resolve(__dirname, './tsconfig.json') ?? path.resolve(__dirname, './tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            declarationDir: path.resolve(__dirname, './declarations'),
            declaration: true,
          },
        },
        useTsconfigDeclarationDir: true,
      }),
      resolve({ preferBuiltins: false }),
      commonjs(),
    ],
    external: ['vue', 'vue-demi', '@vue/composition-api'],
    output: {
      file: 'dist/index.mjs',
      format: 'es',
      globals: {
        'vue-demi': 'VueDemi',
        vue: 'Vue',
        '@vue/composition-api': 'VueCompositionApi'
      },
    },
  },
]
