import {
    getUserByTokenAdapter,
} from "../../infrastructure/driving/aws/get-by-token-adapter";
import { instrumentLambda } from "../../transversal/http";

export async function getUserByTokenHandler(event: any, _context: any) {
    return instrumentLambda(getUserByTokenAdapter(), event);
}
