import { NextRequest, NextResponse } from 'next/server';
import processImage from '@/lib/processimage';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const image = formData.get('image') as File | null;
  const model = formData.get('model') as string | null;
  const task = formData.get('task') as string | null;

  if (!image || !model || !task) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const processedImageUrl = await processImage(image, model, task);
    return NextResponse.json({ processedImageUrl });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ error: 'Image processing failed' }, { status: 500 });
  }
}
