"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Eye, BookOpen, Feather } from "lucide-react";
import { posts, Post, PostTag } from "@/data/writing";

export default function WritingPage() {
  const router = useRouter();

  const getTagColor = (tag: PostTag) => {
    switch (tag) {
      case "poetry":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "story":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
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
      default:
        return BookOpen;
    }
  };

  // Group posts by tag
  const groupedPosts = posts.reduce((acc, post) => {
    const key = post.tag as PostTag;
    if (!acc[key]) {
      acc[key] = [] as Post[];
    }
    acc[key].push(post);
    return acc;
  }, {} as Record<PostTag, Post[]>);

  // Removed experimental from tag order to hide that section
  const tagOrder: PostTag[] = ["poetry", "story"];
  const tagLabels: Record<PostTag, string> = {
    poetry: "Poetry",
    story: "Stories",
    experimental: "Experimental",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Writing</h1>
            <p className="text-xl text-muted-foreground">
              Stories and poetry organized by type
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
                      <Card
                        key={post.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => router.push(`/writing/${post.id}`)}
                        onKeyDown={(e: React.KeyboardEvent) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            router.push(`/writing/${post.id}`);
                          }
                        }}
                        className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-wood-accent group bg-card/50 wood-texture cursor-pointer"
                      >
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