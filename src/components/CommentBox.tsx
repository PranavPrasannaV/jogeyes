"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Comment {
  id?: string;
  name: string;
  text: string;
  createdAt?: string | Date;
}

export default function CommentBox({ id }: { id: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(`/api/comments?postId=${encodeURIComponent(id)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setComments(Array.isArray(data) ? data : []);
      })
      .catch((e) => console.error("Failed to load comments", e))
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: id, name: name.trim() || "Anonymous", text: text.trim() }),
      });
      if (!res.ok) throw new Error("Failed to post");
      const c = await res.json();
      setComments((prev) => [c, ...prev]);
      setName("");
      setText("");
    } catch (e) {
      console.error(e);
      alert("Failed to submit comment");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full border px-3 py-2 rounded-md"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Leave a comment"
          className="w-full border px-3 py-2 rounded-md min-h-[80px]"
        />
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={loading}>{loading ? 'Posting...' : 'Post comment'}</Button>
          <Button variant="ghost" onClick={() => { setName(""); setText(""); }}>Clear</Button>
        </div>
      </form>

      <div className="mt-6 space-y-4">
        {loading && comments.length === 0 ? (
          <p className="text-muted-foreground">Loading comments…</p>
        ) : comments.length === 0 ? (
          <p className="text-muted-foreground">No comments yet — be the first.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id ?? `${c.createdAt}-${c.name}`} className="p-4 border rounded-md bg-card/60">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{c.name}</span>
                <span className="text-sm text-muted-foreground">{new Date(c.createdAt || '').toLocaleString()}</span>
              </div>
              <div className="text-foreground/90">{c.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
