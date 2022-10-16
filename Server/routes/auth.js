import express from "express" ;
import { goolgeAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CRETE A USER
router.post('/signup',signup)

//SIGN IN
router.post('/signin', signin)

//GOOGLE AUTH
router.post('/google', goolgeAuth)



export default router;
