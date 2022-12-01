module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).json({ message: "page not found" });
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);
    console.log(err.name);

    if (err.name === "UnauthorizedError") {
      res.status(401).send("invalid token...");
      return;
    }
    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({ message: err });
    }
  });
};
