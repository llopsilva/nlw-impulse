import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { Request, Response } from "express";

class AuthenticateUserController {
    async handle(request: Request, response: Response){
        console.log("Start module: AuthenticateUserController")

        const { code } = request.body;
        
        const service = new AuthenticateUserService();
        const result = await service.execute(code);

        return response.json(result);

    }

}


export { AuthenticateUserController }