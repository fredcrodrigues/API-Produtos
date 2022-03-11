import { Router } from "express";
import { CriaUsuarioController } from "../controllers/Usuario.controller";

const usuariosRouter = Router();

const criaUsuarioController = new CriaUsuarioController();


usuariosRouter.post('/usuario/login', criaUsuarioController.loginUsuario);
usuariosRouter.post('/usuario', criaUsuarioController.handle);
usuariosRouter.get('/usuarios', criaUsuarioController.buscaUsuarios);
usuariosRouter.get('/usuarios/getId/:id', criaUsuarioController.bucarUsuarioId);
usuariosRouter.get('/usuarios/getEmail/:email', criaUsuarioController.bucarUsuarioEmail);
usuariosRouter.put('/usuario/:id', criaUsuarioController.alteraUsuario);
usuariosRouter.delete('/usuario/:id', criaUsuarioController.deletaUsuario);

export default usuariosRouter;