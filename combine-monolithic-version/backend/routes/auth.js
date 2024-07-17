import express from "express";

import * as authController from '../controllers/auth.js';


const router = express.Router();


//POST REQUESTS
router.post('/login', authController.postLogin);
router.post('/signup', authController.postSignup)


//GET REQUESTS
router.get('/check-token', authController.currentUserCheck);
router.get('/check-user-info', authController.currentUserInfo);

export default router;
