import { CreateUserUseCase } from "../../../domain/usecases/create-user";
import { Fn, HttpRequestEvent, HttpResponseEvent, OptionsHttp } from "../../../transversal/http";

export function createUserAdapter(): Fn {
    return async function (event: HttpRequestEvent, d: any, _options: OptionsHttp): Promise<HttpResponseEvent> {
        const { logger } = d;
        try {
            const output = await new CreateUserUseCase(logger).execute({
                email: event.body["email"],
                fullName: event.body["fullName"],
                password: event.body["password"],
                telephone: event.body["telephone"],
                username: event.body["username"],
            });
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
