const app = require("./server");
const port = 5000;

app.listen(port, () => {
  console.log("API conectada com sucesso na porta " + port);
});
