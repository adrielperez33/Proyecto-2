require("dotenv").config()
const mongoose = require("mongoose");

  const dbCon = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error;
  }
}

module.exports = dbCon;