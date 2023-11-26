import { isValidObjectId } from 'mongoose';
import User from '../models/user.model.js';

const getUsers = async (req, res) => {
	try {
		const users = await User.find().select('-password');
		return res.status(200).json({
			status: 'success',
			data: users,
		});
	} catch (error) {
		return res
			.status(404)
			.json({ status: 'error', message: error.message });
	}
};

const getUser = async (req, res) => {
	try {
		const userId = req.params.userId;

		if (!isValidObjectId(userId))
			return res.status(400).json({
				status: 'error',
				message: 'User not exists',
			});

		const user = await User.findById({ userId });

		if (!user)
			return res.status(400).json({
				status: 'error',
				message: 'User not exists',
			});

		return res.status(200).json({
			status: 'success',
			data: user,
		});
	} catch (error) {
		return res
			.status(404)
			.json({ status: 'error', message: error.message });
	}
};

const createUser = async (req, res) => {
	try {
		const { userName, email, password } = req.body;

		const user = await User.create({ userName, email, password });

		return res.status(201).json({
			status: 'success',
			data: user,
		});
	} catch (error) {
		return res
			.status(400)
			.json({ status: 'error', message: error.message });
	}
};

export { getUsers, getUser, createUser };
