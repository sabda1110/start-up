import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ status: true, statusCode: 200, message: 'Succes ' });
  } catch (err) {
    return NextResponse.json({ status: false, statusCode: 500, message: err });
  }
}
