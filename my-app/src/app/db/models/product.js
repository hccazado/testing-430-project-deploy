import mongoose from 'mongoose';
const schema = mongoose.Schema;

const Product = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    image: {
      type: String,
      required: false,
    },
    owner_id: {
      type: schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model('Product', Product);
