import Joi from "joi";
import {
    createUserAdapter,
} from "../../infrastructure/driving/aws/create-adapter";
import { instrumentLambda } from "../../transversal/http";

export async function createUserHandler(event: any, _context: any) {
    return instrumentLambda(createUserAdapter(), event, {
        bodySchema: Joi.object({
            username: Joi.string().required(),
            password: Joi.string().min(8).required(),
            email: Joi.string().email().required(),
            fullName: Joi.string().required(),
            telephone: Joi.string().required(),
        }).required(),
    });
}
