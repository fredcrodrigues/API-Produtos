import {Router} from "express"
import {ComprasController} from "../controllers/Compras.controller";

const compraRouter = Router()

const compraRouterController = new ComprasController();

compraRouter.post('/compra', compraRouterController.salvacompras)
compraRouter.get('/compras', compraRouterController. buscaCompras)

export default  compraRouter