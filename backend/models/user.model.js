import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: [true, 'Please provide username'],
		},
		email: {
			type: String,
			required: [true, 'Please provide email'],
			unique: [true, 'Email is unique'],
		},
		password: {
			type: String,
			required: [true, 'Please provide password'],
		},
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
