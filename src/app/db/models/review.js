import mongoose from 'mongoose';
const schema = mongoose.Schema;

const Review = mongoose.Schema(
  {
    description: String,
    rating: Number,
    created_at: String,
    product: {
      type: schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Review || mongoose.model('Review', Review);
