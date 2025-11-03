import { NextRequest } from 'next/server';
import { db } from '@/db/index';
import { comment } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');
    if (!postId) return new Response(JSON.stringify({ error: 'postId is required' }), { status: 400 });

    const rows = await db.select().from(comment).where(eq(comment.postId, postId)).orderBy(desc(comment.createdAt));
    return new Response(JSON.stringify(rows), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'server error' }), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postId, name, text } = body;
    if (!postId || !text) return new Response(JSON.stringify({ error: 'postId and text are required' }), { status: 400 });

    const id = (globalThis as any).crypto?.randomUUID?.() || String(Date.now());
    const createdAt = new Date();

    await db.insert(comment).values({ id, postId, name: name || 'Anonymous', text, createdAt });

    return new Response(JSON.stringify({ id, postId, name: name || 'Anonymous', text, createdAt }), { status: 201, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'server error' }), { status: 500 });
  }
}

export const runtime = 'edge';
