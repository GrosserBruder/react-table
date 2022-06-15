module.exports = {
  toLowerCaseFirstLetter: function (str) {
    return str[0].toLowerCase() + str.slice(1);
  },

  getFileName: function (path) {
    if (path === './src/index.ts') {
      return 'srcIndex'
    }
    return this.toLowerCaseFirstLetter(
      path.split("/").pop().replace(/\/*\.tsx?/, '')
    )
  }
}

