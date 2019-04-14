#Something something

This is the reproduction for repoman-git regarding the issue he experienced with Gatsby+ Contentful and tags.

Some adjustments might be need it to make this work.
- Graphql queries and fields to be rendered for content coming from Contentful
- SpaceID and Key for Contentful in `gatsby-config.js`

Side note

Don't commit the space id/access token, add [dotenv](https://www.npmjs.com/package/dotenv) to the project and follow the documentation in the link.