var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    //location
    path: './lib',
    // export itself to a global var
    libraryTarget: "umd",
    // name of the global var: "Foo"
    library: "SharedComponents",
    //output file name
    filename: 'index.js',
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }, {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      include: [
        path.resolve('components')
      ],
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      include: [
        path.resolve('components')
      ],
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.js$/,
      include: [
        path.resolve('components'),
        path.resolve('index.js')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
