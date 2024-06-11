import express from "express";
import { search } from '../data/params.js';
import * as results from "../controllers/cResults.js";
const router = express.Router();
router.get('/', results.setTerms);
router.post('/list', results.huntList);
router.get('/list', results.displayList);
router.get('/entry', results.displayEntry);
export default router;
