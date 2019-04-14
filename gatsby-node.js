const path = require("path")

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const blogTemplate = path.resolve("./src/templates/blog-template.js")
  const blogIndex= path.resolve('./src/templates/blog-index.js')
  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // destructure data property from the query result
    const {data}= result
    //
    // create simple array to be injected to the blog post index path via context
    const itemsIndex=data.allContentfulBlogPost.edges.map(item=>{return {
        itemID:item.node.id,
        posttitle:item.node.title,
        slugname:item.node.slug
    }})
    //
    // creates the blog index path with the array of data above injected via Gatsby context property
    createPage({
        path:'/myblogposts/',
        component:blogIndex,
        context:{
            listOfEntries:itemsIndex
        }
    })
    //
    // creates a page for each entry returned from the query result 
    data.allContentfulBlogPost.edges.map(item=>{
        createPage({
            path:`/myblogposts/${item.node.slug}`,// path based on the slug property
            component:blogTemplate,
            context:{
                slug:item.node.slug
            }
        })
    })
    //

  })
}
