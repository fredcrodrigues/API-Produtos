import {Document} from "mongoose"


interface IProduto{
    nome:  string;
    codigo_produto: string;
    valor_produto: number;
    quantidade: number;

}
export default interface ICompras extends Document{
    produto: Array<IProduto>;
    codigo: string;
    total: number;
    codigo_usuario: string;

}