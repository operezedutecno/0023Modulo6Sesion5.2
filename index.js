const express = require("express")
const hbs = require("hbs")
const app = express()
const port = 3000

hbs.registerPartials(`${__dirname}/views/partials`, function(error) {})
app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)

app.listen(port, () => console.log("Servidor Activo http://localhost:3000"))

app.get("/", (request, response) => {
    response.render("index", {
        titulo: 'Página Principal',
        mostrarFotos: false
    })
})

app.get("/galeria", (req, resp) => {
    resp.render("galeria", {
        titulo: 'Galería'
    })
})

app.get("/contacto", (req, resp) => {
    resp.render("contacto", {
        titulo: 'Contacto'
    })
})