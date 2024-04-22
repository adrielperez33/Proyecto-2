const app = require("./src/server");
const dbCon = require("./src/config/dbCon")

dbCon()
  .then(() => {
    app.listen(3000, () => {
      console.log("El servidor está en http://localhost:3000");
    });
  })
  .catch(error => {
    console.error("Error al conectar a la base de datos:", error);
  });
