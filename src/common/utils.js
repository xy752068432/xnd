/**
 * 通用函数
 */

var format = function (string) {
  var args = arguments
  var pattern = new RegExp('{([0-' + arguments.length + '])}', 'g')
  return String(string).replace(pattern, function (match, index) {
    var currentIndex = parseInt(index)
    if (currentIndex + 1 > args.length || currentIndex < 0) {
      throw new Error('参数索引出错')
    }
    return args[currentIndex + 1]
  })
}

export default {
  format: format
}
