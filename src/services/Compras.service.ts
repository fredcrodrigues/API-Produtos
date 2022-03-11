import console from 'console';
import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import Compras from '../models/Compras';

class CompraService{

    
    public async criarCompra(produto: string,  codigo_usuario:string ){

        
        const compra = new Compras({
            _id: new mongoose.Types.ObjectId(),
            produto,
            codigo_usuario
        })
       
        
        const produtos =  compra.produto

        // array para gerar valor total ds produtos
        const valorTotal = new Array();
        
    
        produtos.map(prop => {
            // salva em um array os valores de cada produto 
            valorTotal.push(prop.valor_produto)
            //gerar codigo de um produto e atualiza valor
            return prop.codigo_produto = CryptoJS.SHA256(`${prop.nome}-${prop.valor_produto}-${prop.quantidade}`).toString(CryptoJS.enc.Hex);
        } );

        // soma total das compras
        compra.total = valorTotal.reduce((v1,v2)=> v1 + v2)

        compra.save()
        return compra
        
         
    }
    public async buscaCompras(){
        // obtem dados sem id da compra
        const compras = await Compras.find().select('produto total createdAt -_id')
        
       
        return compras
    }

  
}
export {CompraService}