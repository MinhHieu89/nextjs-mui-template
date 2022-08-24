import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserFriendlyError } from '../../models/userFriendlyError';
import { SignUpInput } from '@/schema/auth';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  image: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

export const findUserByEmail = (email: string) => {
  return User.findOne({ email });
};

export const createUser = async (input: SignUpInput) => {
  const { email, firstName, lastName, password } = input;

  const emailUser = await User.findOne({ email });

  if (emailUser) {
    throw new UserFriendlyError('Email already exists.');
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name: `${firstName} ${lastName}`.trim(),
    email,
    password: hashedPassword,
  });

  await newUser.save();
};

export const getUsers = async () => {
  const users = await User.find({}).select({
    _id: 1,
    name: 1,
    email: 1,
    image: 1,
  });

  return users;
};
