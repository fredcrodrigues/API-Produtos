import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IUsuario from '../interfaces/Usuario.interface';

const UsuarioSchema: Schema = new Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        telefone: { type: String, required: true },
        codigo: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

UsuarioSchema.post<IUsuario>('save', function () {
    //logging.info('Mongo', 'Checkout the Usuario we just saved: ', this);
});

export default mongoose.model<IUsuario>('Usuario', UsuarioSchema);