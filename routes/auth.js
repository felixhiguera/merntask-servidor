// rutas para autenticar usuarios (Login)
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

//Iniciar sesion
//api/auth
router.post(
  "/",
  // [
  //   //check se usa para validar y manda error en caso de que se ejecute la validacion

  //   check("email", "Agrega un email valido").isEmail(),
  //   check("password", "El password debe ser minimo de 6 caracteres").isLength({
  //     min: 6,
  //   }),
  // ],
  authController.autenticarUsuario
);
router.get(
  "/",
  //auth de la carpeta middleware
  auth,
  authController.usuarioAutenticado
);
module.exports = router;
