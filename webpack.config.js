module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {test: /\.jsx$/, loaders: ['react-hot', 'babel-loader'], exclude: /(node_modules|bower_components|dist)/},
            {test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components|dist)/},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.html$/, loader: 'file?name=[name].[ext]'},
            {test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]}
        ],
        preLoaders: [
            {test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: /(app\/|node_modules|dist)/},
            {test: /\.js$/, loader: 'babel', exclude: /(app\/|node_modules|dist)/},
            {
                test: /(\.js|\.jsx)$/,
                include: /(app\/)/,
                exclude: /app\/__tests__\//,
                loader: 'isparta'
            }
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.web.coffee', '.web.js', '.coffee', '.js']
    },
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
};
