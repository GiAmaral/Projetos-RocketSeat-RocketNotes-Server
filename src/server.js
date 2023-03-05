require("dotenv/config");
require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors"); //biblioteca responsável por "juntar" backend com frontend
const express = require("express"); //importou o express
const routes = require("./routes");

migrationsRun();

const app = express(); //iniciou o express, o express ajuda a gerenciar as requisições http
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    //if que verifica se o erro é do cliente
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    //verifica se o erro é do servidor
    status: "error",
    message: "Internal server error",
  });
});

// app.get("/message/:id/:user", (request, response) => { //o get é o verbo http que faz requisição de dados pro servidor, nele sempre terá dois parâmetros, a rota ("/") e função callback que terá em ordem o resquet e o response
//     const { id, user } = request.params //os ":" é conhecido como route params, e é obrigatórios informar os parâmetros

//     response.send(`Mensagem ID: ${id}.
//     Nome do usuário: ${user}`);
// });

const PORT = process.env.PORT || 3333; //definiu uma porta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); //escutando a porta
