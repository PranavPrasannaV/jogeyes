"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Comment {
  name: string;
  text: string;
  date: string;
}

export default function CommentBox({ id }: { id: string }) {
  const storageKey = `comments:${id}`;
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setComments(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load comments", e);
    }
  }, [storageKey]);

  function save(comments: Comment[]) {
    setComments(comments);
    try {
      localStorage.setItem(storageKey, JSON.stringify(comments));
    } catch (e) {
      console.error("Failed to save comments", e);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    const c: Comment = { name: name.trim() || "Anonymous", text: text.trim(), date: new Date().toISOString() };
    save([c, ...comments]);
    setName("");
    setText("");
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
          <Button type="submit">Post comment</Button>
          <Button variant="ghost" onClick={() => { setName(""); setText(""); }}>Clear</Button>
        </div>
      </form>

      <div className="mt-6 space-y-4">
        {comments.length === 0 ? (
          <p className="text-muted-foreground">No comments yet — be the first.</p>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="p-4 border rounded-md bg-card/60">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{c.name}</span>
                <span className="text-sm text-muted-foreground">{new Date(c.date).toLocaleString()}</span>
              </div>
              <div className="text-foreground/90">{c.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
