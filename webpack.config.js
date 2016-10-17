// Exporting the module so that it can be used by webpack-dev-server as config file

module.exports = {
    // Entry point for the application
    entry: [
         __dirname + '/app/index.js'
    ],
    output: {
        // The compiled and minified file will be saved in the current directory and named
        // as bundle.js. Which will then be used in index.html
        path: __dirname + '/docs/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // This regex defined the files need to be watched by webpack-dev-server,
                // In this case .js extention files so when we make any changes to .js
                // files webpack will go ahead and compile the files and make them
                // available instantly by refreshing the browser window.
                test: /\.js$/,
                // we are excluding node_modules packages to be watched by webpack so it
                // won't watch the js files in node_modules folder. It makes the webpack
                // server faster to do its job.
                exclude: /node_modules/,
                // Our module loader is babel which supports es2015 and react style code
                // and it will compile them down to es5 so that the app we are building
                // will support most of the older browsers as well.
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-3']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        // 404 pages will fall back to ./ that means index.html
        historyApiFallback: true,
        contentBase: './docs/',
        // Inline true indicates server will refresh if we make any changes to any of the .js files
        inline: true,
        // port 3000 will be used to publish the app locally so the app can be accessed by
        // hitting the url http://localhost:3000
        port: 3000
    },
}
