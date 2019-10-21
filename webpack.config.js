require('babel-polyfill')

module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ["transform-export-extensions", "@babel/transform-runtime"],
              only: [
                "./**/*.js", "./**/*.jsx",
                "node_modules/jest-runtime"
              ]
            }
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };