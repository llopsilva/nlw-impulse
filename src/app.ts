import "dotenv/config";
import express, { Request, Response } from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.get('/github', (request: Request, response: Response) => {
    response.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}
    `)
});

app.get('/signin/callback', (request: Request, response: Response) => {
    const {code} = request.query;

    return response.json(code);
})

app.listen(4000, () => console.log(":rocket: Servidor rodando na 4000"));
