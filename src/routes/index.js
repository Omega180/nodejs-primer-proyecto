import {Router} from "express"

const router = Router()
// se le puede pasar un objeto despues de renderizar el archivo, este objeto es usadable en la pagina ahora, usualmente se usa para traer codigo del backend
router.get("/", (req, res) =>
	res.render("index.ejs", {title: "First Web with Node"})
)

router.get("/about", (req, res) => res.render("about.ejs", {title: "About me"}))

router.get("/contact", (req, res) =>
	res.render("contact.ejs", {
		title: "Contactame",
	})
)

export default router
