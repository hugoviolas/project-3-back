const jwt = require("express-jwt");

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  // Used to be called payload
  requestProperty: "user",
  getToken: getTokenFromHeaders,
});

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    return token;
  }
  return null;
}

module.exports = isAuthenticated;
