export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description?: string;
  views: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "Featured: Acoustic Guitar Cover",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop",
    description: "A warm acoustic cover recorded live with a vintage mic — cozy and intimate.",
    views: "1.2M",
    date: "2 weeks ago",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Behind the Scenes: Guitar Recording Session",
    thumbnail:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop",
    description: "A short behind-the-scenes look at the recording process and gear used.",
    views: "856K",
    date: "1 month ago",
  },
  {
    id: "9bZkp7q19f0",
    title: "Original Guitar Composition",
    thumbnail:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop",
    description: "An original instrumental piece influenced by folk and ambient textures.",
    views: "542K",
    date: "2 months ago",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Guitar Techniques Tutorial",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop",
    description: "A focused tutorial on fingerpicking patterns and dynamics.",
    views: "723K",
    date: "3 months ago",
  },
];
