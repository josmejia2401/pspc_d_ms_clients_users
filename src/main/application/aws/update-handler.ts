import Joi from "joi";
import {
    updateUserAdapter,
} from "../../infrastructure/driving/aws/update-adapter";
import { instrumentLambda } from "../../transversal/http";

export async function updateUserHandler(event: any, _context: any) {
    return instrumentLambda(updateUserAdapter(), event, {
        bodySchema: Joi.object({
            email: Joi.string().email().required(),
            fullName: Joi.string().required(),
            telephone: Joi.string().required(),
        }).required(),
    });
}
