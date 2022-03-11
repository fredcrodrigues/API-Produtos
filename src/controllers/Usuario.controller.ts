import { Request,  Response } from "express";
import { CriaUsuarioService } from "../services/Usuario.service";




class CriaUsuarioController {

    /********************  CRIA USUARIO *******************/
    async handle(request: Request, response:Response) {
        
        const { nome, email, telefone } = request.body;

        const criaUsuarioService = new CriaUsuarioService();
        
        
        const usuario = criaUsuarioService.execute(nome, email, telefone )
        //console.log(usuario);

        //return response.json(usuario);
        return response.json({messagem: "Cadastro Realizado"})
    }
    

    async loginUsuario(request: Request, response: Response){
        
        const {email, codigo } = request.body
        
        const usuarioService = new CriaUsuarioService();

        const usuarioLogin =  usuarioService.loginUsuario(email, codigo)
        

        // autenticação dos dados basica  / teste
        usuarioLogin.then(dados => dados == null? response.json('Email ou senha incorretos'):   response.json('Email ou senha corretos'))

      
       

    }
    /********************  BUSCA TODOS OS USUÁRIOS *******************/
    async buscaUsuarios(request:Request, response: Response ) {
     
        //const { nome } = request.body;
       
        const usuarioService = new CriaUsuarioService();

        
        const usuarios =  usuarioService.buscaUsuarios();
        // obtem os dados para mostrar no console // teste

        usuarios.then(dados => console.log(dados))

        return response.json({messagem: "Dados Encontrados"});
    }
    
    /********************  BUSCA USUÁRIO PELO ID *******************/
    async bucarUsuarioId (request:Request, response: Response ){
       
        const id:string = request.params['id'];
     
        const criaUsuarioService = new CriaUsuarioService();
        
        
        const usuarioId = criaUsuarioService.buscaUsuarioId(id);
        // obtem os dados para mostrar no console // teste
        usuarioId.then(dados => console.log(dados))
 
        return  response.json({messagem: "Usuario por ID encontrado"});
    }
    

     /********************  BUSCA USUÁRIO PELO EMAIL *******************/
     async bucarUsuarioEmail (request:Request, response: Response ){
      
        const email:string = request.params['email'];
        //console.log(email)

        const criaUsuarioService = new CriaUsuarioService();

        const usuarioEmail = criaUsuarioService.buscaUsuarioEmail(email);

        // obtem os dados para mostrar no console // teste
        usuarioEmail.then(dados => console.log(dados))

        return response.json({messagem: "Usuario por Email encontrado"})
    }
    

    /********************  ALTERA DADOS DO USUARIO *******************/
    async alteraUsuario (request:Request, response:Response) {
     

        const id:string = request.params['id'];
        const { nome, email, telefone } = request.body;

        const criaUsuarioService = new CriaUsuarioService();

        await criaUsuarioService.alteraUsuario(nome, email, telefone, id).then((result) => {
            return response.status(201).json({
                // dados alterado
               result
            });
        })
        .catch((error) => {
            return response.status(500).json({
                message: error.message,
                error
            });
        });
    }


    /********************  DELETA USUARIO *******************/
    async deletaUsuario (request:Request, response: Response ){

      
        const id:string = request.params['id'];

        const criaUsuarioService = new CriaUsuarioService();

        criaUsuarioService.deletaUsuario(id);

       return response.json({message: 'Usuário excluído com sucesso.'});
    }
    
}

export {CriaUsuarioController};