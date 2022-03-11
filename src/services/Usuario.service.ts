import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import Usuario from '../models/Usuario';

class CriaUsuarioService {
    
    /*******CRIA USUÁRIO ************/
    public async execute (nome:string,email:string, telefone:string){
    
        if(!email || !nome) {
          throw new Error("Preencha os campos obrigatorios.")
        }
        //console.log('Chegou')
        const usuario = new Usuario({
            _id: new mongoose.Types.ObjectId(),
            nome,
            email,
            telefone
        })

        
        const codigo = await this.geraCodigo(nome,email, telefone);
        usuario.codigo = codigo
        usuario.save()

        
        return usuario
    }

    public async geraCodigo(nome:string,email:string, telefone:string){
         if (this.validacaoEmail(email)){
            return CryptoJS.SHA256(`${nome}-${email}-${telefone}`).toString(CryptoJS.enc.Hex);
         } else{
            return '';
         }  
    }

    public validacaoEmail(email:string) {
        let usuario = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@")+ 1, email.length);
        
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true
        }
        else{
            throw new Error("Email Inválido")
        }
    }

    /*******BUSCA USUÁRIOS ************/
    public async buscaUsuarios (){

        const usuarios = await Usuario.find()       
        return  usuarios;
    }

    /**** LOGIN DO USUARIO ********/
    public async loginUsuario(email:string, codigo:string){
        
        const usuarioLogin = await Usuario.findOne({email: email, codigo: codigo})
        
        
        
        //console.log("dados", usuarioLogin )
        return usuarioLogin 

    }
    
    /*******BUSCA USUÁRIO POR ID********'****/
    public async buscaUsuarioId (id: string){
        const usuariosId = await Usuario.findById({_id: id}).select('nome -_id')
        //console.log(usuariosId) teste
        return usuariosId 
    }

    /*******BUSCA USUÁRIO POR ID************/
    public async buscaUsuarioEmail (email: string){
        
        const usuariosEmail = await Usuario.findOne({email: email}).select('nome telefone email -_id')
        return usuariosEmail

    }

    /*******ALTERA USUÁRIO ************/
    public async alteraUsuario (nome:string,email:string, telefone:string, id: string){
        
        const dadosUp = await Usuario.findOneAndUpdate({_id: id}, {nome: nome, email: email, telefone: telefone}, {new: true} )
       

        return dadosUp;
    }
    
    /*******DELETA USUÁRIO ************/
    public async deletaUsuario (id: string){

        const dadosDel = await Usuario.findByIdAndDelete({_id: id})
        
        return dadosDel;
    }

}
export {CriaUsuarioService};