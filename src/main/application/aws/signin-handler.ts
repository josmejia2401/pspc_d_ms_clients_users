import Joi from "joi";
import {
    getUserByUsernamePasswordAdapter,
} from "../../infrastructure/driving/aws/signin-adapter";
import { instrumentLambda } from "../../transversal/http";

export async function userGetUsernamePasswordHandler(event: any, _context: any) {
    return instrumentLambda(getUserByUsernamePasswordAdapter(), event, {
        bodySchema: Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
        }).required()
    });
}
