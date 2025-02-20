import mongoose from 'mongoose';

const User = mongoose.Schema(
  {
    name: String,
    email: String,
    password: { type: String, required: false },
    type: String,
    picture: {
      type: String,
      required: false,
    },
    registration_dt: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', User);
