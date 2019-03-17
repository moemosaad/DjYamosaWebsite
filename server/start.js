require("babel-register")({
  presets: ["env"]
});

module.exports = require("./controllers/controller.js");
