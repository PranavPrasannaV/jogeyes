"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

export default function PhotographyPage() {
  const samples = [
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1000&h=700&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&h=700&fit=crop",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&h=700&fit=crop",
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1000&h=700&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-10 h-10 text-wood-accent" />
              <h1 className="text-4xl sm:text-5xl font-bold">Photography</h1>
            </div>
            <p className="text-xl text-muted-foreground">A small gallery of sample photos. Add your own by creating new cards or integrating a data source.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {samples.map((src, i) => (
              <Card key={i} className="overflow-hidden bg-card/50 wood-texture border-2 border-wood-accent/30">
                <div className="aspect-video">
                  <img src={src} alt={`photo-${i}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
