import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Curved Background */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-500 rounded-bl-[100%] opacity-10 -z-10" />

      {/* Stars Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] -z-20" />

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The world&apos;s leading online learning program
          </h1>

          <p className="text-lg text-gray-700">
            The world&apos;s leading online platform that builds confidence
            through AI-powered personalised learning, exam and after exam
            practise.
          </p>

          <p className="text-gray-600">
            Get started in minutes, at home or in the classroom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="outline" className="gap-2">
              Free Trial For Home Users
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-2">
              Free Trial for Schools
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Content - Animated Illustration */}
        <div className="lg:w-1/2 relative">
          <Card className="relative w-full aspect-square max-w-lg mx-auto p-0 overflow-hidden">
            <img
              src="/image/homepage-2.jpg"
              alt="Interactive learning platform"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-700">
          See results in just 30 minutes a week!
        </h2>
      </div>
    </div>
  );
}
