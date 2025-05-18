import {Router} from 'express';
import upload from '../middleware/upload.js';
import { registration, login } from '../controllers/userController.js';

const router = new Router();

router.post('/register', upload.single('avatar'), registration);
router.post('/login', login);
export default router;
