const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "book",
});

conn.connect((err) => {
  if (err) {
    console.log("erro de conexão com banco de dados");
  } else {
    console.log("Conexão realizada com sucesso");
  }
});

module.exports = conn;
