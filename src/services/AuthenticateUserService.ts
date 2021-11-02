
/*
- Receber code
- Recuperar access_token do github
- Verificar se existe no DB
---- Se sim, gera um token
---- Se não, cria e gera um token
- Retorna o token com as infos do usuario logado
*/

import axios from "axios"; // fazer comunicação com serviços

class AuthenticateUserService {
    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    code,
                },
    
                headers: {
                    "Accept": "application/json"
                }
            })

        

        return response.data;
    }
}

/*
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
  });
*/

export { AuthenticateUserService }