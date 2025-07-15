import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";


export const isAuthenticated = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if (!decodedToken) {
            throw new ApiError(401, "Invalid access token");
        }

        req.id = decodedToken._id;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");

    }

})