"use client"

import { useParams, useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, ExternalLink, Award, Trophy } from "lucide-react";

type PostTag = "poetry" | "story" | "experimental";

interface WritingPiece {
  id: string;
  title: string;
  content: string;
  fullContent: string;
  tag: PostTag;
  date: string;
  platform?: string;
  platformUrl?: string;
  description?: string;
  contests?: {
    name: string;
    award?: string;
  }[];
}

export default function WritingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Mock data - in a real app, this would come from a database
  const writingPieces: Record<string, WritingPiece> = {
    "1": {
      id: "1",
      title: "Whispers in the Dark",
      content: "In the silence of the night, when stars align and dreams take flight...",
      fullContent: `In the silence of the night, when stars align and dreams take flight,
I hear the whispers of the dark, telling stories of the light.

The moon hangs low, a silver thread,
Weaving through the thoughts unsaid,
And in the shadows, deep and wide,
I find the truths I try to hide.

Each whisper carries weight untold,
Of secrets kept and hearts grown cold,
Yet in their gentle, haunting tone,
I find I'm never quite alone.

For darkness speaks in softest voice,
Reminding us we have a choice—
To fear the night or learn to see,
The beauty in uncertainty.`,
      tag: "poetry",
      date: "2024-01-15",
      platform: "Medium",
      platformUrl: "https://medium.com/@example/whispers-in-the-dark",
      description: "This piece explores the duality of darkness and light, inspired by late-night reflections during a winter solstice. It's about finding comfort in uncertainty and discovering that our fears often hold the most profound truths.",
      contests: [
        { name: "National Poetry Competition 2024", award: "Finalist" },
        { name: "Poets & Writers Annual Contest" }
      ]
    },
    "2": {
      id: "2",
      title: "The Last Train Home",
      content: "The platform was empty except for an old man feeding pigeons...",
      fullContent: `The platform was empty except for an old man feeding pigeons. His weathered hands scattered breadcrumbs in rhythmic motions, as if he'd done this a thousand times before. Perhaps he had.

I checked my watch—11:47 PM. The last train was late again.

"First time taking the midnight express?" the old man asked without looking up.

I nodded, then realized he wasn't watching me. "Yes," I said. "How did you know?"

"You keep checking your watch." He smiled, still focused on the birds. "People who ride this train regularly learn that time doesn't matter much. It comes when it comes."

I sat down on a bench, the cold metal seeping through my coat. "Is it always this late?"

"Always. But it always arrives." He finally looked at me, his eyes surprisingly clear and bright. "Where are you heading?"

"Home," I said simply.

"Aren't we all?" He chuckled and scattered the last of his breadcrumbs. The pigeons cooed appreciatively.

The old man sat beside me, and we waited in comfortable silence. Minutes stretched into what felt like hours, but I found I didn't mind. There was something peaceful about this empty platform, this moment suspended between day and tomorrow.

When the train finally arrived, bathed in warm yellow light, the old man stood and tipped his hat to me. "Safe travels, friend. Remember—the journey matters more than the destination."

I boarded the train and found a window seat. As we pulled away from the station, I looked back. The old man was gone, but the pigeons remained, gathered in a circle where he'd been standing.

It wasn't until I was halfway home that I realized—I'd found exactly what I was looking for.`,
      tag: "story",
      date: "2024-02-03",
      platform: "Wattpad",
      platformUrl: "https://wattpad.com/story/example",
      description: "A short story about chance encounters and the unexpected wisdom found in life's pauses. Written during a delayed train journey, this piece reflects on how the detours in life often teach us more than reaching our destinations.",
      contests: [
        { name: "NYC Midnight Short Story Challenge", award: "2nd Place" }
      ]
    },
    "3": {
      id: "3",
      title: "Fragments of Tomorrow",
      content: "Time folds. Memory splinters. Tomorrow bleeds into yesterday...",
      fullContent: `Time folds. Memory splinters. Tomorrow bleeds into yesterday and I can't remember which direction I'm traveling.

[Fragment 1: The Beginning That Might Be The End]
You told me once that time is a river. But rivers flow forward, and I'm not sure we do anymore.

[Fragment 2: A Conversation Out of Order]
"Will you remember this?" you ask.
"I already have," I reply.
You smile, but your eyes are sad with knowledge of something I haven't learned yet.

[Fragment 3: The Middle (Or Is It?)]
The clock on the wall runs backward. Nobody notices but me. Or maybe I'm the one who's reversed, and the clock is fine.

[Fragment 4: Tomorrow's Memory]
I remember tomorrow clearly. We sit by the lake. You skip stones across the water, each bounce creating ripples that spread both forward and back through time. Five skips. Always five.

[Fragment 5: Yesterday's Future]
"What happens if we stop trying to move forward?" I ask.
"Then we're free," you say. "Time only traps those who believe in its linearity."

[Fragment 6: The End That Might Be The Beginning]
Memory splinters. Time folds. Yesterday bleeds into tomorrow and I finally understand—
It doesn't matter which direction we're traveling.
We're already there.`,
      tag: "experimental",
      date: "2024-02-20",
      platform: "Personal Blog",
      platformUrl: "https://blog.example.com/fragments",
      description: "An experimental exploration of non-linear time and fragmented narrative. This piece deliberately breaks traditional storytelling structure to mirror the confusion and beauty of memories that exist outside chronological order. Influenced by quantum physics concepts and the subjective nature of time perception.",
    },
    "4": {
      id: "4",
      title: "The Creatures",
      content: "Jay was playing in pools filled with caramel, surrounded by cities made of chocolate and marshmallows...",
      fullContent: `Jay was playing in pools filled with caramel, surrounded by cities made of chocolate and marshmallows. 
      Diving into his pool he slurps up as much Caramel as he can fill into his mouth. He slowly swallows all of it, as he begins to sink deeper and deeper in the confectionary filled pool.
      He continues to sink, eating candy after candy, only consuming more as he descends. 
      Through the endless abyss of sugary delight, floating glittery unicorns made of marshmallows, and many hundreds of chocolate bunnies all floating along with him.
      As he keeps on consuming these sweets, his eyes grow heavy, and he struggles to see in the caramel around him. He was able to breathe somehow, which came to his attention rather late, as he found that nothing made any sense.
      He was somehow swimming in a pool filled with caramel and had zero problems breathing or swimming in the otherwise viscous liquid. As he keeps sinking, his chest tightens as the pressure of the caramel begins to weigh down upon him.
      He coughs, and gasps for air as his lungs are filled with heavy syrup. His eyes jolt open as he begins to struggle and flail around, but his efforts were to no avail as he continued to sink, until he hit the bottom, where he promptly woke up from this interesting dream of his. 
      He sat upright in his bed, looking around the room wildly. `,
      tag: "story",
      date: "2024-03-10",
      platform: "Wattpadd, Archive of our Own",
      platformUrl: "https://www.wattpad.com/story/402882439-the-creature",
      description: "Asteroids crash into earth as something otherworldly settles into our home. Follow Jay as he strives to find himself while navigating this unfamiliar territory.",
      contests: [
        { name: "N/A", award: "N/A" },
        { name: "N/A", award: "N/A" }
      ]
    },
    "5": {
      id: "5",
      title: "The Clockmaker's Secret",
      content: "In a small shop on Baker Street, an old clockmaker kept a peculiar secret...",
      fullContent: `In a small shop on Baker Street, an old clockmaker kept a peculiar secret. Every clock in his shop told a different time, and somehow, they were all correct.

I discovered this by accident. I'd come in to repair my grandfather's pocket watch—a family heirloom that had stopped working on the day he passed. The clockmaker, Mr. Thornbury, examined it with jeweler's loupe and gentle fingers.

"Ah," he said softly. "This clock hasn't stopped. It's waiting."

"Waiting for what?"

He looked at me over his spectacles, eyes twinkling with ancient mischief. "For the right moment to continue."

I glanced around the shop. Dozens of clocks lined the walls, each ticking at its own pace. A grandfather clock in the corner read 3:47. A cuckoo clock showed 9:15. The one above the counter insisted it was 11:30.

"Your clocks are all wrong," I said.

"Wrong?" Mr. Thornbury chuckled. "Or simply measuring different things? Time isn't as simple as we like to pretend. That clock"—he pointed to an ornate golden timepiece—"measures the time until someone's first love. That one"—a silver pocket watch in a glass case—"counts down to the moment when a person discovers their life's purpose."

"That's impossible."

"So is a broken clock running again, yet here we are." He wound my grandfather's watch three times, whispered something I couldn't hear, and handed it back to me. It was ticking.

"What time does this one tell?" I asked.

"The time you shared with him. Every tick is a memory. It will run as long as you remember."

I left the shop in a daze. My grandfather's watch read 2:17—the exact time he used to pick me up from school when I was seven.

I've walked past that shop on Baker Street a hundred times since. It's always closed, but through the window, I can see all those clocks, still ticking, still measuring the unmeasurable moments that make up a life.

The pocket watch in my pocket reads 2:17.
It's always 2:17.
And that's exactly right.`,
      tag: "story",
      date: "2024-03-25",
      platform: "Tor.com",
      platformUrl: "https://tor.com/example-story",
      description: "A magical realism story exploring themes of memory, loss, and the subjective nature of time. This piece was inspired by my own experience inheriting my grandfather's watch and wondering if objects can truly hold memories.",
      contests: [
        { name: "Fantasy & Science Fiction Contest" }
      ]
    },
    "6": {
      id: "6",
      title: "Syntax Error: Soul",
      content: "if (soul.exists()) { return meaning; } else { throw new ExistentialException(); }",
      fullContent: `if (soul.exists()) {
    return meaning;
} else {
    throw new ExistentialException();
}

// TODO: Debug consciousness
// Expected: Enlightenment
// Actual: 404 - Purpose Not Found

class Human extends Organism {
    constructor(dreams, fears, memories) {
        super();
        this.dreams = dreams;
        this.fears = fears;
        this.memories = memories;
        this.meaning = undefined;
    }

    async searchForPurpose() {
        try {
            const purpose = await Universe.query("meaning of life");
            return purpose;
        } catch (error) {
            console.log("Meaning undefined, continuing anyway...");
            return this.createOwnMeaning();
        }
    }

    createOwnMeaning() {
        // Sometimes the best code is the code you write yourself
        return this.dreams
            .filter(dream => !this.fears.includes(dream))
            .map(dream => dream.pursue())
            .reduce((life, moment) => life.add(moment), new Existence());
    }
}

// Runtime thoughts:
// They told me to think outside the box
// But what if consciousness IS the box?
// What if we're all just recursive functions
// Calling ourselves until we find a base case
// That makes sense?

function findSelf(depth = 0) {
    if (depth > MAX_EXISTENTIAL_DEPTH) {
        return "Maybe the search itself is the answer";
    }
    return findSelf(depth + 1);
}

// Stack Overflow: Philosophy Edition

const truth = {
    absolute: null,
    relative: "Everything",
    quantum: "Both and neither"
};

// In the end, we're all just
// Trying to compile our thoughts
// Into something coherent
// Before the inevitable
// System.exit(0);`,
      tag: "experimental",
      date: "2024-04-08",
      platform: "Personal Blog",
      platformUrl: "https://blog.example.com/syntax-error-soul",
      description: "A playful intersection of programming and philosophy, exploring existential questions through code metaphors. Written during a late-night debugging session that turned into an existential crisis. Or was it the other way around?",
      contests: [
        { name: "Digital Literature Awards", award: "Honorable Mention" }
      ]
    }
  };

  const piece = writingPieces[id];

  if (!piece) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Writing Piece Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The writing piece you're looking for doesn't exist.
            </p>
            <Button onClick={() => router.push("/writing")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Writing
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => router.push("/writing")}
            className="mb-8 hover:text-wood-accent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Writing
          </Button>

          {/* Main Content Card */}
          <Card className="p-8 sm:p-12 wood-texture border-2 border-wood-accent/30">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={getTagColor(piece.tag)}>
                  {piece.tag}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {new Date(piece.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-wood-accent">
                {piece.title}
              </h1>

              {/* Platform */}
              {piece.platform && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-medium text-muted-foreground">
                    Published on:
                  </span>
                  {piece.platformUrl ? (
                    <a 
                      href={piece.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-wood-accent hover:underline flex items-center gap-1"
                    >
                      {piece.platform}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-wood-accent">
                      {piece.platform}
                    </span>
                  )}
                </div>
              )}

              {/* Description */}
              {piece.description && (
                <div className="bg-wood-light/30 p-6 rounded-lg mb-6 border border-wood-accent/20">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-wood-accent mb-2">
                    About This Piece
                  </h2>
                  <p className="text-foreground/90 leading-relaxed">
                    {piece.description}
                  </p>
                </div>
              )}

              {/* Contests */}
              {piece.contests && piece.contests.length > 0 && (
                <div className="bg-wood-light/30 p-6 rounded-lg border border-wood-accent/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-wood-accent" />
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-wood-accent">
                      Contest Submissions
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {piece.contests.map((contest, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-wood-accent mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-foreground font-medium">
                            {contest.name}
                          </span>
                          {contest.award && (
                            <span className="ml-2 text-wood-accent font-semibold">
                              • {contest.award}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t-2 border-wood-accent/30 my-8" />

            {/* Full Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
                {piece.fullContent}
              </div>
            </div>
          </Card>

          {/* Bottom Navigation */}
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={() => router.push("/writing")}
              size="lg"
              className="bg-wood-accent hover:bg-wood-accent/90 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Writing
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
