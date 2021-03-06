module.exports = {
    entry: __dirname + "/app/app.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname + "/app",
        alias: {
            AudioPlayer: "components/AudioPlayer.jsx",
            AudioControls: "components/AudioControls.jsx",
            Playlist: "components/Playlist.jsx",
            Song: "components/Song.jsx",
            reducers: "reducers/reducers.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /.\jsx?$/,
                include: __dirname + "/app"
            }
        ]
    }
};
