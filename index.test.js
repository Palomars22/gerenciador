const request = require("supertest");
const app = require("./server");




  it("should get main route ", async () => {
    const result = await request(app).get("/");

    expect(result.statusCode).toEqual(200);
    expect(result.body).toHaveProperty(
      "message",
      "listar",
      "buscarPorId",
      "atualizar",
      "deletar",
      "inderir"
    );
  });
  it("should post  route ", async () => {
    const result = await request(app).post("/", {
      title: "capitulo",
      author: "novo",
    });

    expect(result.statusCode).toEqual(200);
   
  });
  it("should put route ", async () => {
    const result = await request(app).put("/1").send({
      title: "capitulo1",
      author: "novo 1",
    });

    expect(result.statusCode).toEqual(200);
    
  });
  it("should delete route ", async () => {
    const result = await request(app).delete("/1").send({});

    expect(result.statusCode).toEqual(200);
    
  });

