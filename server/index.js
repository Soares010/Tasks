import express from "express";
import cors from "cors";

const app = express();

// Middlawers
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ola");
});

app.listen(3000, console.log("Servidor rodando!"));
