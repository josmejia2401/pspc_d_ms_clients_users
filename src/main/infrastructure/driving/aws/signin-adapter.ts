import { GetUserByUsernamePasswordUseCase } from "../../../domain/usecases/get-user-by-usr-pass";
import { Fn, HttpRequestEvent, HttpResponseEvent, OptionsHttp } from "../../../transversal/http";
export function getUserByUsernamePasswordAdapter(): Fn {
    return async function (event: HttpRequestEvent, d: any, _options: OptionsHttp): Promise<HttpResponseEvent> {
        const { logger } = d;
        try {
            const output = await new GetUserByUsernamePasswordUseCase(logger).execute(
                event.body["username"],
                event.body["password"],
            );
            return {
                "headers": {},
                "body": output,
                "statusCode": 200,
            };
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
}
