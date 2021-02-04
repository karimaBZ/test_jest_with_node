import express from 'express';
import sendEmail from './services/sendEmail';
const router = express.Router();

router.post('/sendemail', sendEmail);
export default router;
