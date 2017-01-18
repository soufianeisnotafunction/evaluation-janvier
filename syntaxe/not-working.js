// -------------React Component----------------//
import React from "react";

class Example extends React.Component {
  render() {
    return <div />;
  }
}

export default Example;


// -------------Webpack Loader----------------//
loaders:
[ { test: /\.coffee$/, loader: "coffee-loader" } ];



// -------------Gulp Task----------------//
gulp.task("coffee", function() {
  gulp
    .src("src/*.coffee")
    .pipe(concat("custom.coffee"))
    .pipe(gulp.dest("build")); 
