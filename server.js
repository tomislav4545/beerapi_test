const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

router.render = function (req, res) {
  if (req.method === 'GET' && !req.params.id) {
    var obj = {}
    obj[req.params.resource] = res.locals.data
    res.jsonp(obj)
  } else {
    res.jsonp(res.locals.data)
  }
}
