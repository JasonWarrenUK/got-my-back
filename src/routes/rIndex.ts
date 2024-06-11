import express from 'express';
import results from './rResults.js';

const router = express.Router();

router.use('/', results);

export default router;