const path = require("path");
// const nodeExternals = require("webpack-node-externals");

// module.exports = {
//   entry: "./server/index.js",
//   target: "node",
//   externals: [nodeExternals()],
//   output: {
//     path: path.resolve("server-build"),
//     output: {
//       path: path.resolve("server-build"),
//       filename: "index.js"
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env", "@babel/preset-react"],
//           plugins: ["@babel/plugin-transform-modules-amd"]
//         }
//       }
//     ]
//   }
// };

module.exports = {
  entry: "./client/app.jsx",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js(x)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-modules-amd"]
          }
        }
      }
    ]
  }
};
