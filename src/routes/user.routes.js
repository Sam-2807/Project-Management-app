import { Router } from "express";
import { userLoginValidator, userRegisterValidator } from "../validator/user.validators.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";
import { login, logout, register } from "../controllers/user.controller.js";



const router = Router()

router.route("/register").post(userRegisterValidator(), validate, register);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/logout").get(isAuthenticated, logout);


export default router