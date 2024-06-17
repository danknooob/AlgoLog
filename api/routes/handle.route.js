import express from 'express'
import { handleController } from '../controllers/handle.controller.js';

const router = express.Router();

router.post('/userhandle', handleController);

export default router;