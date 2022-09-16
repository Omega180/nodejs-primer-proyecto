import express from "express"
// estas dos importaciones permiten poder crear la direccion absoluta de nuestra carpeta de proyecto
//join nos permite concatenar los directorios
import {dirname, join} from "path"
import {fileURLToPath} from "url"
import indexRoutes from "./routes/index.js"
const app = express()

//carpeta interna de nuestra pagina
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

//asignarle la ruta de donde se encuentran las vistas
app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")
//renderizar rutas dependiendo del url que el usuario busque
app.use(indexRoutes)
app.use(express.static(join(__dirname, "public")))

app.listen(process.env.PORT || 3000)
console.log(`Server is listening on port`, process.env.PORT || 3000)
