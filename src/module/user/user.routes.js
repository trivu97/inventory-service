import validate from "express-validation";
import { Router } from "express";
import Validations from "./user.validations";
import { authLocal, authJwt, auth } from "../../service/passport";
import { login, createUser, getUser } from "./user.controllers";

const routes = new Router();
routes.post("/login", validate(Validations.login), login);
routes.post("/signUp", validate(Validations.createUser), createUser);
routes.get("/", auth, getUser);
export default routes;
