var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.send("testing testing 123");
  });



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });



// johnnyfive

var five = require("johnny-five");
var board = new five.Board();

var colorTest = 200;



board.on("ready", function() {
  var led = new five.Led(11);
  led.pulse();
  

}); 