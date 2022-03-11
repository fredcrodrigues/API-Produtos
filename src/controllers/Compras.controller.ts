import {Request, Response} from "express";
import {CompraService} from "../services/Compras.service"


class ComprasController{


    async salvacompras(request: Request, response: Response){
       
        const { produto, codigo_usuario} = request.body;      

        const criarCompra = new  CompraService()

        const compras = criarCompra.criarCompra(produto,  codigo_usuario)
        // acessa os dados salvos e mostra no console // apenas teste
        compras.then(dados => console.log(dados))

        return response.json({messagem: "Compras realizadas com sucesso" })
     

    }

    async buscaCompras(request: Request, response: Response){
      
        const compraService =  new CompraService();

        const  compraBusca = compraService.buscaCompras()

        // acessa os dados obtidos e mostra no console // apenas teste 
        compraBusca.then( dados => dados.map(
            //'Produtos - ' +  prod.produto + ' Total -' + prod.total
           (prod) => { console.log('Produtos - ' +  prod.produto + ' Total -' + prod.total)}
        ))

        ///return compraBusca
        return  response.json({messagem: "Dados Obtidos com sucesso" })
     
    }
}
export {ComprasController}