var color = require("../data/color");

module.exports = function(app) {
    app.get("/api/colorData", function(req, res) {
        res.json(color);
      });
}