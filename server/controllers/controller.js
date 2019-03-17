const path = require("path");
const fs = require("fs");

const React = require("react");
const ReactDOMServer = require("react-dom/server");

const App = require("../../client/app");

const controller = {
  getLanding: (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve("../../public/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.log("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }

      return res.send(
        data.replace('<div id="app"></div>)', `<div id="app">${app}</div>`)
      );
    });
  },
  getVideos: (req, res) => {
    
  }
};

module.exports = controller;
