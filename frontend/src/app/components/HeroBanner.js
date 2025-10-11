"use client";

export default function HeroBanner({ hero }) {
  return (
    <div className="relative w-full bg-[#f5e8d3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Collection Text - Top Left */}
          <div className="absolute top-8 left-4 sm:left-8 z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-1">
              {hero.collectionName}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              {hero.tagline}
            </p>
          </div>

          {/* Season Label - Top Right */}
          <div className="absolute top-8 right-4 sm:right-8 z-10 text-right">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {hero.season}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">
              {hero.status}
            </div>
          </div>

          {/* Model Image - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-0">
            <img
              src={hero.modelImage}
              alt="Model wearing collection"
              className="h-[350px] sm:h-[450px] lg:h-[550px] w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}