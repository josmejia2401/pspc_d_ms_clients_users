import {
    deleteUserByTokenAdapter,
} from "../../infrastructure/driving/aws/delete-adapter";
import { instrumentLambda } from "../../transversal/http";

export async function deleteUserByTokenHandler(event: any, _context: any) {
    return instrumentLambda(deleteUserByTokenAdapter(), true, event);
}
