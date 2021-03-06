// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/resources/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
    // Add attributes to HTML tag
    head.htmlAttrs = { lang: 'en', class: 'min-h-full antialiased' }

    head.meta.push(
        {
            key: 'keywords',
            name: 'keywords',
            content: 'adam bailey, HTML, CSS, JavaScript, Vue, Laravel, web developer, software developer'
        },
        {
            key: 'description',
            name: 'description',
            content: 'Software Portfolio site for Adam Bailey.'
        }
    )

    head.script.push({
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
    })
}
