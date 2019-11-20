export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd49749f476ad01d136e682',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rit5gcnu',
                  apiId: '536af464-587f-4430-b83d-bd43b04e8ebd'
                },
                {
                  buildHookId: '5dd49749b655120186a8ce8a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3avr9ypg',
                  apiId: 'f06c82b9-ecc1-4f4e-9cdb-49fb870dfea7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/phantomhaircuts/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3avr9ypg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
