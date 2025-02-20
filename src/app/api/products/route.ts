import { NextResponse } from 'next/server';
import { createProduct, fetchProducts } from '@/app/db/mongoQueries';

export async function GET() {
  const products = await fetchProducts();
  const productsJson = JSON.parse(JSON.stringify(products));
  return NextResponse.json(productsJson);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = await createProduct(data);
  return NextResponse.json(newProduct);
}
