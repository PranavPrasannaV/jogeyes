"use client"

import * as React from 'react';

export default function AdminModeration() {
  const [token, setToken] = React.useState<string | null>(typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null);
  const [comments, setComments] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (token) fetchAll();
  }, [token]);

  async function fetchAll() {
    setLoading(true);
    try {
      const res = await fetch('/api/comments/all');
      const data = await res.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (e) {
      setError('Failed to load');
    } finally {
      setLoading(false);
    }
  }

  function saveToken(t: string) {
    localStorage.setItem('admin_token', t);
    setToken(t);
  }

  async function del(id: string) {
    if (!token) return alert('Provide token first');
    if (!confirm('Delete comment?')) return;
    try {
      const res = await fetch(`/api/comments/moderate?id=${encodeURIComponent(id)}`, { method: 'DELETE', headers: { 'x-admin-token': token } });
      if (!res.ok) throw new Error('failed');
      setComments((s) => s.filter((c) => c.id !== id));
    } catch (e) {
      alert('Delete failed');
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Moderation</h2>
      <div className="mb-4 flex gap-2">
        <input placeholder="admin token" className="border px-2 py-1 rounded" defaultValue={token ?? ''} onBlur={(e) => saveToken(e.target.value)} />
        <button onClick={() => fetchAll()} className="px-3 py-1 rounded bg-wood-accent text-wood-dark">Refresh</button>
      </div>

      {loading ? <div>Loading…</div> : (
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="p-3 border rounded bg-card/60 flex justify-between">
              <div>
                <div className="font-medium">{c.name} <span className="text-sm text-muted-foreground">{new Date(c.createdAt).toLocaleString?.()}</span></div>
                <div className="mt-1">{c.text}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => del(c.id)} className="px-2 py-1 rounded bg-red-500 text-white">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <div className="text-red-500 mt-3">{error}</div>}
    </div>
  );
}
