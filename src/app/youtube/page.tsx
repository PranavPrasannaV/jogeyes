"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Play, Guitar } from "lucide-react";

export default function YouTubePage() {
  const [selectedVideo, setSelectedVideo] = useState("dQw4w9WgXcQ");

  // Sample videos - replace with real video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Featured: Acoustic Guitar Cover",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop",
      views: "1.2M",
      date: "2 weeks ago",
    },
    {
      id: "jNQXAC9IVRw",
      title: "Behind the Scenes: Guitar Recording Session",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop",
      views: "856K",
      date: "1 month ago",
    },
    {
      id: "9bZkp7q19f0",
      title: "Original Guitar Composition",
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=450&fit=crop",
      views: "542K",
      date: "2 months ago",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Guitar Techniques Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop",
      views: "723K",
      date: "3 months ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Guitar className="w-10 h-10 text-wood-accent" />
              <h1 className="text-4xl sm:text-5xl font-bold">YouTube Channel</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Watch my latest guitar covers, original music, and creative content
            </p>
          </div>

          {/* Featured Video Player */}
          <div className="mb-12">
            <Card className="overflow-hidden bg-card/50 wood-texture border-2 border-wood-accent/30">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>

          {/* Video Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Uploads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-wood-accent bg-card/50 wood-texture"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-wood-accent rounded-full p-4">
                        <Play className="w-8 h-8 text-wood-dark fill-wood-dark" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-wood-accent transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}