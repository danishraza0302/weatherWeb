const http = require("http");
const fs = require("fs");
var requests = require("requests");


const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.88&lon=81.03&appid=95a8c186f9fc0b5f6ffcd3a476bc93af",
    )
      .on("data", (chunk) => {
        console.log(chunk);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        console.log("end");
  });
}
});
