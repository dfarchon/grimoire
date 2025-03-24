const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: true,
  staticImage: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withNextra()
