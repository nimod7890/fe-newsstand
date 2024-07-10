import jsonServer from "json-server";
const DATA_PATH = "server/data.json";
class Server {
  constructor(port, dbFilePath) {
    this.port = port;
    this.server = jsonServer.create();
    this.router = jsonServer.router(dbFilePath);
    this.middlewares = jsonServer.defaults();

    this.applyMiddlewares();
    this.addCustomRoutes();
    this.startServer();
  }

  applyMiddlewares() {
    this.server.use(this.middlewares);
  }

  addCustomRoutes() {
    this.server.use((req, res, next) => {
      const originalSend = res.send.bind(res);

      res.send = (body) => {
        if (this.isTargetRoute(req, res)) {
          let data = JSON.parse(body);
          data = this.shuffleData(data);
          body = JSON.stringify(data);
        }
        originalSend(body);
      };

      next();
    });

    this.server.use(this.router);
  }

  isTargetRoute({ path }) {
    return path === "/companies";
  }

  shuffleData(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  startServer() {
    this.server.listen(this.port, () => {
      console.log(`JSON Server is running on port ${this.port}`);
    });
  }
}

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

const createServer = (port, dbFilePath) => new Server(port, dbFilePath);

createServer(3001, DATA_PATH);
