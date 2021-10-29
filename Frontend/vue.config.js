module.exports = {
    configureWebpack:{
    devServer:{
        proxy:{
            '/user':{
                target: 'http://localhost:3000',
               },
              // '/post':{
               // target: 'http://localhost:3000',
              // },
            },
        },
    },
}
