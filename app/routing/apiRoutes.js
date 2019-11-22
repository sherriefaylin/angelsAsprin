var finalColor = require("../data/finalColor");

module.exports = function(app) {
    app.get("/api/colors", function(req, res) {
        res.json(finalColor);
      });
}