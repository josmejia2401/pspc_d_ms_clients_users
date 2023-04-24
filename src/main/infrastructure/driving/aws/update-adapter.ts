import { UpdateUserUseCase } from "../../../domain/usecases/update-user";
import { Fn, HttpRequestEvent, HttpResponseEvent, OptionsHttp } from "../../../transversal/http";

export function updateUserAdapter(): Fn {
    return async function (event: HttpRequestEvent, d: any, options: OptionsHttp): Promise<HttpResponseEvent> {
        const { logger } = d;
        try {
            const output = await new UpdateUserUseCase(logger).execute({
                email: event.body["email"],
                fullName: event.body["fullName"],
                telephone: event.body["telephone"]
            }, options);
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
