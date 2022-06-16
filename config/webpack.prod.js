const path = require('path');
const glob = require('glob')
const nodeExternals = require('webpack-node-externals');
const helpers = require('./helpers')

const typeScriptRegex = /\.(ts|tsx)$/;
const sassRegex = /\.(scss|sass)$/;

const dependOn = {
  // body: [],
  // cell: [],
  editableCell: ['Cell'],
  // head: [],
  headCell: ['Cell'],
  index: ['Table', 'Body', 'Cell', 'HeadCell', 'Head', 'Row', 'EditableCell'],
  // row: [],
  table: ['Body', 'Head'],
  tableWithFixedHeader: ['Table', 'Body', 'Head'],
}

const entries = glob.sync('./src/**/*.ts*')
  .reduce((acc, path) => {
    const fileName = helpers.getFileName(path)

    const entry = path.replace(/\/*\.tsx?/, '').replace(/\.\/src\//, '')

    const obj = {}
    obj['import'] = path
    if (dependOn[fileName]) {
      // obj['dependOn'] = dependOn[fileName]
    }

    acc[entry] = obj

    return acc
  }, {})

module.exports = {
  mode: 'production',
  externals: [nodeExternals()],
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    library: "react-table",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: typeScriptRegex,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.prod.json'
        }
      },
      {
        test: sassRegex, use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
    ],
  },
  optimization: {
    minimize: false,
    // concatenateModules: false,
    // runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    // }
  },
  target: "web",
}