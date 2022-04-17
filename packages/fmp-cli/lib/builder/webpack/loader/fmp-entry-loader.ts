const fs = require('fs-extra');
const path = require('path');

const loaderUtils = require('loader-utils');

module.exports = function(source) {
  // const params = loaderUtils.parseQuery(this.resourceQuery);
  // console.log(params, 2222);
  console.log(source, this.resourcePath, this.resourceQuery, 123);

  const queryPath = this.resourceQuery.split('?')[1];
  const params = JSON.parse(queryPath);

  const content = this.fs.readFileSync(path.resolve(process.cwd(), 'src', `${params.page}.js`));

  return content.toString();
}