export type PostTag = "poetry" | "story" | "experimental";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tag: PostTag;
  views: number;
  likes: number;
  comments: number;
  date: string;
}

// Exported posts data so it's easy to add new entries without touching the page component.
export const posts: Post[] = [
  {
    id: "1",
    title: "Whispers in the Dark",
    excerpt: "A journey through the shadows of midnight thoughts...",
    content: "In the silence of the night, when stars align and dreams take flight...",
    tag: "poetry",
    views: 1247,
    likes: 89,
    comments: 12,
    date: "2024-01-15",
  },
  {
    id: "4",
    title: "Autumn Reflections",
    excerpt: "Poetry inspired by the changing seasons...",
    content: "Golden leaves dance in the autumn breeze, whispering secrets of the trees...",
    tag: "poetry",
    views: 1543,
    likes: 134,
    comments: 22,
    date: "2024-03-10",
  },
  {
    id: "2",
    title: "The Last Train Home",
    excerpt: "A short story about finding yourself in unexpected places...",
    content: "The platform was empty except for an old man feeding pigeons...",
    tag: "story",
    views: 2341,
    likes: 156,
    comments: 28,
    date: "2024-02-03",
  },
  {
    id: "5",
    title: "Creatures",
    excerpt: "Swimming in a pool of caramel...",
    content: "Asteroids crash onto earth as something foreign establishes itself onto our planet. Jay struggles to find himself, and find out what has come into his home.",
    tag: "story",
    views: 62,
    likes: 6,
    comments: 0,
    date: "2024-03-25",
  },
  {
    id: "3",
    title: "Fragments of Tomorrow",
    excerpt: "An experimental piece exploring time and memory...",
    content: "Time folds. Memory splinters. Tomorrow bleeds into yesterday...",
    tag: "experimental",
    views: 876,
    likes: 67,
    comments: 15,
    date: "2024-02-20",
  },
  {
    id: "6",
    title: "Syntax Error: Soul",
    excerpt: "Where code meets consciousness...",
    content: "if (soul.exists()) { return meaning; } else { throw new ExistentialException(); }",
    tag: "experimental",
    views: 1089,
    likes: 92,
    comments: 18,
    date: "2024-04-08",
  },
];
