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
        mostrarFotos: true
    })
})

app.get("/galeria", (req, resp) => {
    const fotos = [
        { titulo: 'Imagen 1', url: 'https://revistaseguridad360.com/wp-content/uploads/2022/01/nube.jpeg', contenido: 'Contenido Imagen 1'},
        { titulo: 'Imagen 2', url: 'https://www.eniun.com/wp-content/uploads/paginas-web-tecnologia-informatica-conocer.png', contenido: 'Contenido Imagen 2'},
        { titulo: 'Imagen 3', url: 'https://cdn.goconqr.com/uploads/media/image/33242840/desktop_d8a71414-d262-4f5f-9db9-11248601ac1a.jpg', contenido: 'Contenido Imagen 3'},
    ]
    resp.render("galeria", {
        titulo: 'Galería',
        fotos: fotos
    })
})

app.get("/contacto", (req, resp) => {
    resp.render("contacto", {
        titulo: 'Contacto'
    })
})