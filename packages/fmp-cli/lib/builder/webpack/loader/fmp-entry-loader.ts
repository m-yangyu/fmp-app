module.exports = function(source) {
  console.log(source, this.resourcePath, this.resourceQuery, 123);
  return source;
}