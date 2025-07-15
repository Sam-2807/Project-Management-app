import { validationResult } from "express-validator"
import { ApiError } from "../utils/ApiError.js";

export const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next()
    }

    const extractedError = [];
    errors.array().map((err) => extractedError.push({
        [err.path]: err.msg
    }));

    throw ApiError(422, "Recived data is not valid", extractedError)
}
