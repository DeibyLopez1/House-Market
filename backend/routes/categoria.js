const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearCategoria,
  getCategorias
} = require("../controllers/categoria");


const router = Router();

// Obtener eventos 
router.get('/', getCategorias );

// Crear un nuevo evento
router.post(
   '/new/catg',
    [
        check('area','El titulo es obligatorio').not().isEmpty(),
        check('seccion','La sección es obligatoria').not().isEmpty(),
        check('subseccion','La Sub Seccion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearCategoria 
);

module.exports = router;