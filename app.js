//h1 Structure
import createError from "http-errors";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routes from "./routes/rIndex.js";

//h1 Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//?? Wut?
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//h1 Content
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(routes);

//h1 Error Handling
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

//h1 Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
