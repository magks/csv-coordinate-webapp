var express    = require('express')
var serveIndex = require('serve-index')
var path = require('path')
var serveStatic = require('serve-static')
var app = express()
var port =  3000 || process.env.PORT;
/**for files */
app.use(serveStatic(path.join(__dirname, 'public')));
/**for directory */
app.use('/', express.static('public'), serveIndex('public', {'icons': true}))

// Listen
app.listen(port,  function () {
  console.log('listening on port:',+ port );
})
