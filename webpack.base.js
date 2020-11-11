module.exports = {
  // Tell webpack to run babel on every file it runs through
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js?$/, //regex to apply babel only on JS files
        loader: "babel-loader", //if js file found, load babel-loader to transpile our code
        exclude: /node_modules/, //don't run babel in specific folders
        options: {
          //rules for babel for transpiling our code
          presets: [
            //takes all of our jsx and turns it into normal JS function calls
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets: {
                  // runs all transform/transpile rules to match lasts 2 browser versions
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
