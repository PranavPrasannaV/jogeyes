import fs from 'fs/promises';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'analytics.json');

async function readAll() {
  try {
    const txt = await fs.readFile(FILE, 'utf8');
    return JSON.parse(txt || '[]');
  } catch (e) {
    return [];
  }
}

export async function GET() {
  try {
    const all = await readAll();
    const total = all.length;
    const perPath: Record<string, number> = {};
    for (const ev of all) {
      const p = ev.path || '/';
      perPath[p] = (perPath[p] || 0) + 1;
    }
    const entries = Object.entries(perPath).sort((a, b) => b[1] - a[1]);
    return new Response(JSON.stringify({ total, top: entries.slice(0, 10) }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    console.error('analytics stats failed', e);
    return new Response(JSON.stringify({ error: 'failed' }), { status: 500 });
  }
}

export const runtime = 'nodejs';
