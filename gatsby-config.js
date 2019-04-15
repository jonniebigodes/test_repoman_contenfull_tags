const dotenv= require('dotenv').config({
    path:`.env`
});

module.exports={
   
    plugins:[
        {
            resolve:`gatsby-source-contentful`,
            options:{
                spaceId:`${process.env.CONTENFUL_SPACE}`,
                accessToken:`${process.env.CONTENFUL_TOKEN}`,
                downloadLocal: true,
            }
        },
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
    ]
}