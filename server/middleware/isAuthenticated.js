require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

module.exports = {
  isAuthenticated: (req, res, next) => {
    const headerToken = req.get("Authorization");

    if (!headerToken) {
      console.log("Error in auth middleware");
      res.sendStatus(401);
    }

    let token;

    try {
      token = jwt.verify(headerToken, SECRET);

      req.body.userId = token.id;
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }

    if (!token) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }

    next();
  },
};
