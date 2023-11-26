import { Router } from 'express';

const router = Router();

import {
	getUsers,
	getUser,
	createUser,
} from '../controllers/user.controller.js';

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/new', createUser);

export default router;
