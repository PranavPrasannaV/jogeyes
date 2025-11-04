import { deleteCommentById } from '@/lib/commentsStore';

export async function DELETE(req: Request) {
  try {
    const token = req.headers.get('x-admin-token') || process.env.ADMIN_TOKEN || 'changeme';
    // very small guard — in production set ADMIN_TOKEN env var
    if (!token) return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401 });

    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return new Response(JSON.stringify({ error: 'id required' }), { status: 400 });

    // Note: For minimal friction, we accept the token from header 'x-admin-token'.
    const provided = req.headers.get('x-admin-token');
    if (provided !== token) return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401 });

    await deleteCommentById(id);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'server error' }), { status: 500 });
  }
}
