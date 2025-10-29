"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Eye, BookOpen, Feather, Sparkles } from "lucide-react";

type PostTag = "poetry" | "story" | "experimental";

interface Post {
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

export default function WritingPage() {
  const router = useRouter();
  
  const posts: Post[] = [
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
      title: "Stuff",
      excerpt: "Stuff",
      content: "In a small shop on Baker Street, an old clockmaker kept a peculiar secret...",
      tag: "story",
      views: 3102,
      likes: 234,
      comments: 45,
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

  const getTagColor = (tag: PostTag) => {
    switch (tag) {
      case "poetry":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "story":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
      case "experimental":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  const getTagIcon = (tag: PostTag) => {
    switch (tag) {
      case "poetry":
        return Feather;
      case "story":
        return BookOpen;
      case "experimental":
        return Sparkles;
      default:
        return BookOpen;
    }
  };

  // Group posts by tag
  const groupedPosts = posts.reduce((acc, post) => {
    if (!acc[post.tag]) {
      acc[post.tag] = [];
    }
    acc[post.tag].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  const tagOrder: PostTag[] = ["poetry", "story", "experimental"];
  const tagLabels = {
    poetry: "Poetry",
    story: "Stories", 
    experimental: "Experimental"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Writing</h1>
            <p className="text-xl text-muted-foreground">
              Stories, poetry, and experimental writing organized by type
            </p>
          </div>

          <div className="space-y-12">
            {tagOrder.map((tag) => {
              const tagPosts = groupedPosts[tag] || [];
              if (tagPosts.length === 0) return null;
              
              const TagIcon = getTagIcon(tag);
              
              return (
                <div key={tag} className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b-2 border-wood-accent/30">
                    <TagIcon className="w-6 h-6 text-wood-accent" />
                    <h2 className="text-2xl font-bold text-wood-accent">{tagLabels[tag]}</h2>
                    <span className="text-sm text-muted-foreground">
                      ({tagPosts.length} {tagPosts.length === 1 ? 'post' : 'posts'})
                    </span>
                  </div>

                  <div className="space-y-6">
                    {tagPosts.map((post) => (
                      <Card key={post.id} className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-wood-accent group bg-card/50 wood-texture">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge className={getTagColor(post.tag)}>
                                {post.tag}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                  month: 'long', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-wood-accent transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 text-lg">
                              {post.excerpt}
                            </p>
                            
                            <p className="text-foreground/80 italic line-clamp-2">
                              "{post.content}"
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{post.views.toLocaleString()}</span>
                          </div>
                          
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-wood-accent transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="ml-auto hover:text-wood-accent"
                            onClick={() => router.push(`/writing/${post.id}`)}
                          >
                            Read More
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}