var http = require('http')
var auth = require('basic-auth')

// Create server
var server = http.createServer(function(req, res){
  var credentials = auth(req)

  if (!credentials || credentials.name !== 'john' || credentials.pass !== 'secret') {
    res.writeHead(401, {
      'WWW-Authenticate': 'Basic realm="example"'
    })
    res.end()
  } else {
    res.end('Access granted');
  }
})

// Listen
server.listen(9000)