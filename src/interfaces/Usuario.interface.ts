import { Document } from 'mongoose';

export default interface IUsuario extends Document {
    nome: string;
    email: string;
    telefone: string;
    codigo: string;
}