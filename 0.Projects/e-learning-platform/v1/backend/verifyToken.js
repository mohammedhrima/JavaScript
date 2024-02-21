import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("in verify token ", req.body);
  //  const token = req.cookies.access_token;
  const token = req.body.access_token;

  if (!token) return res.status(400).send("You are not authenticated!"); //return next(createError(401, "You are not authenticated!"));
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(400).send("Token is not valid"); //return next(createError(403, "Token is not valid"));
    if (user) {
      req.user = user;
      next();
    }
  });
};
