const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

router.render = (req, res) => {
  res.jsonp({
    data: res.locals.data
  })
}

router.render = function (req, res) {
  if (req.url === '/posts') {
    res.jsonp({
      posts: res.locals.data
    })
  } else {
    res.jsonp(res.locals.data)
  }
}