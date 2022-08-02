module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({ stage: 2 }),
    require('cssnano')({ preset: 'default' }),
    require('@fullhuman/postcss-purgecss')({
      content: ['**/*.html', '**/*.md'],
    }),
  ],
}
