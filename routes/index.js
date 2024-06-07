import express from 'express';
import results from './results.js';

const router = express.Router();

router.use('/', results);

export default router;