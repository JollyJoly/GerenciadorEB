export class ApiError extends Error {
    statusCode;
     details;

    constructor(statusCode, message, details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Object.setPrototypeOf(this, ApiError.prototype);
    }

    static badRequest(message, details) {
        return new ApiError(400, message, details);
    }

    static notFound(message = 'Recurso não encontrado') {
        return new ApiError(404, message);
    }

    static conflict(message, details) {
        return new ApiError(409, message, details);
    }

    static internal(message = 'Erro interno do servidor') {
        return new ApiError(500, message);
    }
}