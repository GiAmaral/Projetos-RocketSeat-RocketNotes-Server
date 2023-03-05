const { Router } = require("express");

const tagsRouter = require("./tags.routes");
const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/tags", tagsRouter);
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;
