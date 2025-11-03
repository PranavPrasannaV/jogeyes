"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import { photographySamples } from "@/data/photography";

export default function PhotographyPage() {
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
            <p className="text-xl text-muted-foreground">A small gallery of sample photos. Add your own by editing <code>src/data/photography.ts</code>.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographySamples.map((src, i) => (
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
