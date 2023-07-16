export default defineAppConfig({
  docus: {
    title: 'Angryface',
    description: 'Question Answering AI who can provide answers with source documents based on Texonom',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'SeonglaeC',
      github: 'seonglae/angryface',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: 'content',
      branch: 'main',
      repo: 'angryface-docs',
      owner: 'seonglae',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    titleTemplate: '%s · Angryface'
  }
})