const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //leer el token del header
  const token = req.header("x-auth-token");

  console.log(token);

  //Revisar si no hay token
  if (!token) {
    return res.status(401).json({ msg: "no hay token, permiso no valido" });
  }

  //Validar el token

  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    //queda guardado en req.usuario para cuando lo utilizen por ej. en authController.js
    req.usuario = cifrado.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no valido" });
  }
};
