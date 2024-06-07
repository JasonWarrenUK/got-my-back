// h1 Imports
// h2 Structure
import createError from "http-errors";
import express from "express";
import dotenv from "dotenv";

// h2 Wut?
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// h2 Routes
import routes from "./routes/index.js";

// xx Get Reckt
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

// h2 Soon, My Pretty
// TODO import bodyParser from "body-parser";

// h1 Declarations
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//h1 Server Setup
// h2 Structure
dotenv.config();
const app = express();

//port
const PORT = process.env.PORT || 3000;

// h2 Wut?
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// h2 Soon, My Pretty
// TODO app.use(bodyParser.json());
// TODO app.use(bodyParser.urlencoded({ extended: true }));

// h1 App Setup
// h2 Pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// h2 Routes
app.use(routes);

app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

//listern
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});