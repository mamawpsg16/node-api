import express from 'express';
const router = express.Router()
import testRoutes from './testRoutes.js';
import testRoutes1 from './testest.js';

/** ROUTE */
router.use('/', testRoutes)
router.use('/', testRoutes1)

export default router;