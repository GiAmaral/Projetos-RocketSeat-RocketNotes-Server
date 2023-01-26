const express = require("express"); //importou o express

const routes = require("./routes")

const app = express(); //iniciou o express, o express ajuda a gerenciar as requisições http
app.use(express.json());

app.use(routes);

// app.get("/message/:id/:user", (request, response) => { //o get é o verbo http que faz requisição de dados pro servidor, nele sempre terá dois parâmetros, a rota ("/") e função callback que terá em ordem o resquet e o response
//     const { id, user } = request.params //os ":" é conhecido como route params, e é obrigatórios informar os parâmetros

//     response.send(`Mensagem ID: ${id}.
//     Nome do usuário: ${user}`);
// });

const PORT = 3333; //definiu uma porta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); //escutando a porta