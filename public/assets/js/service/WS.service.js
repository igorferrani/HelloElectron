function WS () {}

WS.prototype.request = function (url, object) {
  let def = $.Deferred()
  let xmlhttp = new XMLHttpRequest()
  //object = 'data=' + object

  xmlhttp.open("GET", url, true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onreadystatechange = function() {
      def.resolve(this)
  };
  xmlhttp.send()
  return def.promise()
}

module.exports = WS
