const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        // 指定進入點並設定名稱及來源
        // "名稱":"來源 scss or sass 檔案"
        "SteveCard": "./sass/SteveCard.sass",
        "Demo02": "./sass/Demo02.sass",
        "Demo03": "./sass/Demo03.sass",
        "Demo04": "./sass/Demo04.sass",
        "Demo05": "./sass/Demo05.sass",
        "BoxScore": "./sass/BoxScore.sass",
        "Steve01": "./sass/Steve01.sass"
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                // 需要用到的 loader
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 指定輸出位置
            // [name] 為上方進入點設定的 "名稱"
            filename: "../public/build/css/[name].css"
        })
    ]
}