import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import ICompras from '../interfaces/Compras.interface';


const CompraSchema:Schema = new Schema(

    {
        
        produto:[ {
            nome: { type: String, required: true },
            codigo_produto: {type: String, required: true },
            valor_produto: {type: Number, required: true },
            quantidade: {type: Number, required: true}
             }
        ],
        total: {type: Number, required: true},
        codigo_usuario: { type: String, required: true }
    },
        {
            timestamps: true
        }

       
)

export default mongoose.model<ICompras>('Compras', CompraSchema);