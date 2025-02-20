import { NextRequest, NextResponse } from 'next/server';
import {
  deleteProduct,
  updateProduct,
  getProductById,
} from '@/app/db/mongoQueries';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, context: RouteContext) {
  const params = await context.params;
  const product = await getProductById(params.id);
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const params = await context.params;
  const data = await request.json();
  console.log(params.id);
  console.log(data);
  const updated = await updateProduct(params.id, data);
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const params = await context.params;
  await deleteProduct(params.id);
  return NextResponse.json({ success: true });
}
