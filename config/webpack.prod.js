const path = require('path');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const typeScriptRegex = /\.(ts|tsx)$/;
const sassRegex = /\.(scss|sass)$/;

const entries = {
  Body: './src/Body.tsx',
  Cell: './src/Cell.tsx',
  Head: './src/Head.tsx',
  Row: './src/Row.tsx',
  EditableCell: {
    import: './src/EditableCell.tsx',
    dependOn: ['Cell']
  },
  HeadCell: {
    import: './src/HeadCell.tsx',
    dependOn: ['Cell']
  },
  Table: {
    import: './src/Table.tsx',
    dependOn: ['Body', 'Head']
  },
  TableWithFixedHeader: {
    import: './src/TableWithFixedHeader.tsx',
    dependOn: ['Body', 'Head', 'Table']
  },
  index: {
    import: './src/index.ts',
    dependOn: [
      'Body',
      'Cell',
      'Head',
      'Row',
      'HeadCell',
      'EditableCell',
      'Table',
    ]
  },
}

module.exports = {
  mode: 'development',
  externals: [nodeExternals()],
  devtool: 'source-map',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    // library: "react-table",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: typeScriptRegex,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json'
            }
          }
        ]

      },
      {
        test: sassRegex,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ],
  optimization: {
    minimize: false,
    concatenateModules: false,
    // runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    //   // maxInitialRequests: Infinity,
    //   // minSize: 0,
    // }
    mergeDuplicateChunks: false,
  },
  target: "web",
}