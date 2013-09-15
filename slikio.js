module.exports = function (opts) {  
  var http = require('https');
  if(typeof(opts) == 'object' && opts.usessl == false)
    http = require('http');

  if(typeof(opts) == 'string')
  {
    //initialize opts
    opts = {
      private_key: opts,
      host: "app.slik.io",
      port: "443"
    }
  }

  var SlikIO = function SlikIO(opts) {
    this.private_key = opts.private_key;

    var parseData = function(data) {
      var key, res = "";
      for (key in data)
        res += "data[" + key + "]=" + data[key] + "&";
      return res.substring(0, res.length-1);
    };

    this.post = function(url, data, onEnd) {
      var post_data = parseData(data);

      var options = {
        hostname: opts.host,
        port: opts.port,
        method: "POST",
        path: url,
        auth: this.private_key,
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded',
          "Content-Length": post_data.length
        }
      };

      var req = http.request(options, function(res) {
        res.setEncoding('utf8')
        res.on('data', function (data) {
         if(onEnd != undefined)
           onEnd(data);
       });
      });
      req.write(post_data);
      return req.end();
    };

    SlikIO.prototype.sendData = function(collection_id, data, onEnd) {
      return this.post("/api/v1/collections/" + collection_id + "/data", data, onEnd);
    };
  };

  
  return new SlikIO(opts);

};
