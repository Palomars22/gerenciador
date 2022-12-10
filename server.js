const { json } = require("express");
const express = require("express");
const conn = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Todas rotas api",
    listar: "GET-http://localhost:5000/listar",
    buscarPorId: "GET-http://localhost:5000/id",
    atualizar: "PUT-http://localhost:5000/id",
    deletar: "DELETE-http://localhost:5000/id",
    inserir: "POST-http://localhost:5000/inserir",
  });
});
app.get("/listar", (req, res) => {
  conn.query("select * from book ", (error, result) => {
    if (error) {
      res.send("Erro ao buscar todos os livros");
    } else {
      res.send(result);
    }
  });
});
app.get("/:id", (req, res) => {
  conn.query(
    "select * from book where id=" + req.params.id,
    (error, result, fields) => {
      if (error) {
        res.send("Erro ao buscar id ");
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/inserir", (req, res) => {
  const data = req.body;
  conn.query("insert into book set ? ", data, (error, result, fields) => {
    if (error) {
      res.send("Erro ao inserir livro");
    } else {
      res.send(result);
    }
  });
});

app.put("/:id", (req, res) => {
  const data = [req.body.title, req.body.author, req.params.id];
  conn.query(
    "update book set title = ? , author = ? where id = ? ",
    data,
    (error, result, fields) => {
      if (error) {
        res.send("Erro ao atualizar livro");
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  conn.query(
    "delete from  book where id =" + req.params.id,
    (error, result) => {
      if (error) {
        res.send("Erro ao deletar livro");
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = app;
