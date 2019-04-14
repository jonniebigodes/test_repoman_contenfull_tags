module.exports={
    plugins:[
        {
            resolve:`gatsby-source-contentful`,
            options:{
                spaceId:`contentful-space-id`,
                accessToken:`contentful-access-token`,
                downloadLocal: true,
            }
        },
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
    ]
}