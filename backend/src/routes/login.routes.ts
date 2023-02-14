import { Router } from "express";
import loginController from "../controllers/user/login.controller";

const loginRoutes = Router();

loginRoutes.post("", loginController);

export default loginRoutes;
