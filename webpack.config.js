module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        include: /src\/assets\/images/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images'
          }
        }
      }
    ]
  }
};
