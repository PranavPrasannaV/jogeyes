export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  description?: string;
  views: string;
  date: string;
  group?: "gaming" | "guitar";
  subcategory?: string;
}

export const videos: Video[] = [
  // Gaming group
  {
    id: "mc1",
    title: "Minecraft: Cozy Survival Let's Play",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=450&fit=crop",
    description: "Exploring a handcrafted survival world with mods and simple base-building.",
    views: "120K",
    date: "1 week ago",
    group: "gaming",
    subcategory: "minecraft",
  },
  {
    id: "fps1",
    title: "FPS Montage — Headshots & Highlights",
    thumbnail: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800&h=450&fit=crop",
    description: "A short montage of highlights from various FPS matches.",
    views: "220K",
    date: "3 weeks ago",
    group: "gaming",
    subcategory: "fps",
  },
  {
    id: "doom1",
    title: "Doom: Ultra Nightmare Run",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=450&fit=crop",
    description: "Speedy run with aggressive playstyle and low health saves.",
    views: "80K",
    date: "2 months ago",
    group: "gaming",
    subcategory: "doom",
  },
  {
    id: "ow1",
    title: "Overwatch: Competitive Highlights",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    description: "Team plays and clutch moments from ladder games.",
    views: "95K",
    date: "1 month ago",
    group: "gaming",
    subcategory: "overwatch",
  },
  {
    id: "rbx1",
    title: "Roblox: Funny Moments Compilation",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
    description: "Silly moments and community highlights from Roblox servers.",
    views: "47K",
    date: "2 months ago",
    group: "gaming",
    subcategory: "roblox",
  },

  // Guitar group — long form
  {
    id: "guitar-long-1",
    title: "Full Live Set — Acoustic Originals (60m)",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop",
    description: "A full hour of original acoustic songs recorded live in-studio.",
    views: "310K",
    date: "1 month ago",
    group: "guitar",
    subcategory: "long-form",
  },
  {
    id: "guitar-long-2",
    title: "Guitar Arrangement: Classical Piece (45m)",
    thumbnail: "https://images.unsplash.com/photo-1494949649102-ec42fa4a2d33?w=800&h=450&fit=crop",
    description: "A long-form arrangement of a classical guitar piece with close-mic recording.",
    views: "86K",
    date: "4 months ago",
    group: "guitar",
    subcategory: "long-form",
  },

  // Guitar group — short form
  {
    id: "guitar-short-1",
    title: "30s Guitar Loop — Ambient Melody",
    thumbnail: "https://images.unsplash.com/photo-1511377021-7f5d0d5f8e9a?w=800&h=450&fit=crop",
    description: "A short clip of a looping ambient guitar idea.",
    views: "540K",
    date: "2 weeks ago",
    group: "guitar",
    subcategory: "short-form",
  },
  {
    id: "guitar-short-2",
    title: "Quick Tutorial: Fingerpicking Pattern (2m)",
    thumbnail: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=450&fit=crop",
    description: "A concise breakdown of a fingerpicking pattern you can use in songs.",
    views: "120K",
    date: "3 weeks ago",
    group: "guitar",
    subcategory: "short-form",
  },
];
