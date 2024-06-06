// h1 Imports
// h2 Modules
import createError from "http-errors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
// TODO import dotenv from "dotenv";
// TODO import bodyParser from "body-parser";

// h3 Routers
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
// TODO import routes from "./routes";

// h3 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//h1 Setup
// h2 Server Setup
const app = express();
// TODO dotenv.config();
// TODO const port = process.env.PORT || 3000;

// h2 Parser
// TODO app.use(bodyParser.json());
// TODO app.use(bodyParser.urlencoded({ extended: true }));

// h2 Routes
// TODO app.use(routes);

// h2 Other
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// h1 Parameters
// h2 Pug Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// h2 Routes
// h3 Content Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// h3 Safety Routes
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//h1 Exports
export default app; // ?? Does this need to be here?
