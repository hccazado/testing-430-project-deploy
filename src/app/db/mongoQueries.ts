import { connectDB } from '@/app/db/mongoConnection';
import User from '@/app/db/models/user';
import Product from '@/app/db/models/product';
import Review from '@/app/db/models/review';
import { Product as ProductType, User as UserType } from './types/index'; //importing types

export const isRegistered = async (email: string) => {
  try {
    await connectDB();
    const foundEmail = await User.findOne({
      email: email,
    });
    return foundEmail ? true : false;
  } catch (error) {
    throw new Error(`MongoDB error: ${error}`);
  }
};

export const findUser = async (email: string) => {
  try {
    await connectDB();
    const result = await User.findOne({
      email: email,
    });
    if (!result || result.length == 0) {
      return null;
    } else {
      return result;
    }
  } catch (error) {
    throw new Error(`MongoDB failed to find user ${error}`);
  }
};

export const newUser = async (values: UserType): Promise<UserType | null> => {
  const data = {
    name: values.name,
    email: values.email,
    type: values.type,
    password: values.password,
    registration_dt: values.registration_dt,
  };

  try {
    await connectDB();
    const savedUser = await User.create(data);
    return savedUser;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

//Products
export const createProduct = async (
  product: ProductType
): Promise<ProductType | null> => {
  try {
    await connectDB();
    const savedProduct = await Product.create(product);
    return savedProduct;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  try {
    await connectDB();
    const deletedProduct = await Product.findOneAndDelete({ _id: id });
    if (deletedProduct) return true;
    return false;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const fetchProducts = async () => {
  try {
    await connectDB();
    const productsList = await Product.find();
    return productsList;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const getProductsByUserId = async (userId: string) => {
  try {
    await connectDB();
    const productsList = await Product.find({ owner_id: userId });
    return productsList;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};
export const updateProduct = async (
  id: string,
  product: ProductType
): Promise<ProductType | null> => {
  try {
    await connectDB();
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, product);
    return updatedProduct;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const getProductById = async (
  id: string
): Promise<ProductType | null> => {
  try {
    await connectDB();
    const updatedProduct = await Product.findOne({ _id: id });
    return updatedProduct;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

//reviews
export const fetchReviews = async () => {
  try {
    await connectDB();
    const reviewsList = await Review.find();
    return reviewsList;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};
