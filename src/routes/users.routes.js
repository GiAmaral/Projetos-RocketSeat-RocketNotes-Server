const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create)
    // const { page, limit } = request.query;

    // response.send(`Página: ${page}. Mostrar: ${limit}`);//enviando a resposta usando get

    // const { name, email, password } = request.body;

    // response.json({ name, email, password })

    //response.send("Você chamou o POST");//enviando a resposta usando POST

module.exports = usersRoutes;