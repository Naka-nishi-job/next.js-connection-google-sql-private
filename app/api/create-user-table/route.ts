// app/api/create-user-table/route.ts
import { exec } from 'child_process';
import { NextResponse } from 'next/server';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST() {
  try {
    // Prisma migrate を使って user テーブルを生成
    await execAsync('npx prisma migrate dev --name init --create-only');
    await execAsync('npx prisma migrate deploy');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
