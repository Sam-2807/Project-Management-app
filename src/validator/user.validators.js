import { body } from "express-validator";



export const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("name")
            .trim()
            .notEmpty()
            .withMessage("name is required")
            .isLength({ min: 3 })
            .withMessage("name must be at lease 3 characters long"),
        body("password").trim().notEmpty().withMessage("Password is required"),
    ];
};


export const userLoginValidator = () => {
    return [
        body("email").optional().isEmail().withMessage("Email is invalid"),
        body("password").notEmpty().withMessage("Password is required").isLength({ min: 4 }).withMessage("Password must be at least 4 char"),
    ];
};

