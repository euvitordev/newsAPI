const express = require("express")
const app = express()

app.get("/noticias", (req, res) => {
  const noticias = require("./news.json")
  res.send(noticias)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor iniciado")
})
